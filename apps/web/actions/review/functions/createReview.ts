import { NextRequest } from "next/server";
import prisma from "@hamampass/db";

const createReview = async (req: NextRequest) => {
  const { rate, comment, bookingId, propertyId } = await req.json();

  const rate_overall =
    (rate.location +
      rate.staff +
      rate.atmosphere +
      rate.cleanliness +
      rate.facilities +
      rate.value_for_money) /
    6;

  const review = await prisma.review.create({
    data: {
      rateObj: rate,
      rate: rate_overall,
      comment,
      bookingId,
    },
  });

  const property = await prisma.property.findUnique({
    where: {
      id: propertyId,
    },
  });

  if (!property?.ratingId) {
    const rating = await prisma.rating.create({
      data: {
        count: 1,
        rate_overall,
        rate_location: rate.location,
        rate_staff: rate.staff,
        rate_atmosphere: rate.atmosphere,
        rate_cleanliness: rate.cleanliness,
        rate_facilities: rate.facilities,
        rate_value_for_money: rate.value_for_money,
      },
    });

    await prisma.property.update({
      where: { id: propertyId },
      data: { ratingId: rating.id },
    });
  } else {
    const rating = await prisma.rating.findUnique({
      where: { id: property.ratingId },
    });

    if (!rating) {
      throw new Error("Rating not found");
    }

    const calculateAverage = (
      currentRating: number,
      newRating: number,
      count: number
    ): number => {
      return (currentRating * count + newRating) / (count + 1);
    };

    await prisma.rating.update({
      where: { id: rating.id },
      data: {
        count: rating.count + 1,
        rate_overall: calculateAverage(
          rating.rate_overall,
          rate_overall,
          rating.count
        ),
        rate_location: calculateAverage(
          rating.rate_location,
          rate.location,
          rating.count
        ),
        rate_staff: calculateAverage(
          rating.rate_staff,
          rate.staff,
          rating.count
        ),
        rate_atmosphere: calculateAverage(
          rating.rate_atmosphere,
          rate.atmosphere,
          rating.count
        ),
        rate_cleanliness: calculateAverage(
          rating.rate_cleanliness,
          rate.cleanliness,
          rating.count
        ),
        rate_facilities: calculateAverage(
          rating.rate_facilities,
          rate.facilities,
          rating.count
        ),
        rate_value_for_money: calculateAverage(
          rating.rate_value_for_money,
          rate.value_for_money,
          rating.count
        ),
      },
    });
  }

  return review;
};

export default createReview;
