import { NextRequest } from "next/server";
import prisma from "@/prisma/db";

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

export default getReviewsForProperty;
