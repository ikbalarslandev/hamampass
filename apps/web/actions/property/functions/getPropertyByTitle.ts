import { NextRequest } from "next/server";
import prisma from "@/prisma/db";

const getPropertyByTitle = async (req: NextRequest) => {
  const url = new URL(req.url);
  const pre_title = url.pathname.split("/").pop()?.replace(/-/g, " ") || "";
  const title = decodeURI(pre_title);

  const property = await prisma.property.findFirst({
    where: {
      title,
    },
    include: {
      contact: true,
      hour: true,
      products: true,
      rating: true,
      amenity: true,
    },
  });

  return property;
};

export default getPropertyByTitle;
