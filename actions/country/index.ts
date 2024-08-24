import prisma from "@/prisma/db";
import { NextRequest } from "next/server";

const getCountryByTld = async (req: NextRequest) => {
  const url = new URL(req.url);
  const tld = url.pathname.split("/").pop() || "";

  const country = await prisma.country.findUnique({
    where: {
      tld,
    },
  });

  return country;
};

const getCountries = async () => {
  const countries = await prisma.country.findMany();
  return countries;
};

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

export { getCountryByTld, getCountries, createCountry };
