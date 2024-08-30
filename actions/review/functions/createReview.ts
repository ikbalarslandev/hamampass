import { NextRequest } from "next/server";
import prisma from "@/prisma/db";

const createReview = async (req: NextRequest) => {
  const {
    type,
    product_type,
    rate_location,
    rate_staff,
    rate_atmosphere,
    rate_cleanliness,
    rate_facilities,
    rate_value_for_money,
    comment,
    propertyId,
    userId,
  } = await req.json();

  const rate_overall =
    (rate_location +
      rate_staff +
      rate_atmosphere +
      rate_cleanliness +
      rate_facilities +
      rate_value_for_money) /
    6;

  const review = await prisma.review.create({
    data: {
      type,
      product_type,
      rate: rate_overall,
      comment,
      propertyId,
      userId,
    },
  });

  // After creating a review, we need to update the property's rating
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
        rate_location,
        rate_staff,
        rate_atmosphere,
        rate_cleanliness,
        rate_facilities,
        rate_value_for_money,
      },
    });

    const updatedProperty = await prisma.property.update({
      where: {
        id: property?.id,
      },
      data: {
        ratingId: rating.id,
      },
    });

    console.log("updatedProperty", updatedProperty);
  } else {
    const rating = await prisma.rating.findUnique({
      where: {
        id: property.ratingId,
      },
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
      where: {
        id: rating.id,
      },
      data: {
        count: rating.count + 1,
        rate_overall: calculateAverage(
          rating.rate_overall,
          rate_overall,
          rating.count
        ),
        rate_location: calculateAverage(
          rating.rate_location,
          rate_location,
          rating.count
        ),
        rate_staff: calculateAverage(
          rating.rate_staff,
          rate_staff,
          rating.count
        ),
        rate_atmosphere: calculateAverage(
          rating.rate_atmosphere,
          rate_atmosphere,
          rating.count
        ),
        rate_cleanliness: calculateAverage(
          rating.rate_cleanliness,
          rate_cleanliness,
          rating.count
        ),
        rate_facilities: calculateAverage(
          rating.rate_facilities,
          rate_facilities,
          rating.count
        ),
        rate_value_for_money: calculateAverage(
          rating.rate_value_for_money,
          rate_value_for_money,
          rating.count
        ),
      },
    });
  }

  return review;
};

export default createReview;
