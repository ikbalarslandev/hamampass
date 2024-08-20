import prisma from "@/prisma/db";
import { NextRequest } from "next/server";

const getReviewsForProperty = async (req: NextRequest) => {
  const url = new URL(req.url);
  const propertyId = url.pathname.split("/").pop();
  const page = url.searchParams.get("page");
  const limit = url.searchParams.get("limit");

  const pageNumber = parseInt(page || "1", 10);
  const limitNumber = parseInt(limit || "3", 10);

  const startIndex = (pageNumber - 1) * limitNumber;
  const endIndex = pageNumber * limitNumber;

  const reviews = await prisma.review.findMany({
    where: {
      propertyId,
    },
    include: {
      user: true,
    },
  });

  reviews.sort((a: any, b: any) => {
    return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
  });

  const data = reviews.slice(startIndex, endIndex);

  const result = {
    all_items: reviews.length,
    page: pageNumber,
    max_page: Math.ceil(reviews.length / limitNumber),
    limit: limitNumber,
    data,
  };

  return result;
};

const isExist = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const propertyId = searchParams.get("propertyId") ?? "";
  const userId = searchParams.get("userId") ?? "";

  const review = await prisma.review.findFirst({
    where: {
      propertyId,
      userId,
    },
  });

  return { isExist: !!review };
};

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

export { getReviewsForProperty, isExist, createReview };
