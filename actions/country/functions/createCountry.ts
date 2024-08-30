import { NextRequest } from "next/server";
import prisma from "@/prisma/db";

const createCountry = async (req: NextRequest) => {
  const { tld, name_tr, name_en, image } = await req.json();

  const country = await prisma.country.create({
    data: {
      tld,
      name_tr,
      name_en,
      image,
    },
  });
  return country;
};

export default createCountry;
