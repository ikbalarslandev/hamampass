import prisma from "@/prisma/db";
import { NextRequest } from "next/server";

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

export default isExist;
