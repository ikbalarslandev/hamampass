import { NextRequest } from "next/server";
import prisma from "@hamampass/db";

const createManyCountries = async (req: NextRequest) => {
  const countries = await req.json();

  const createdCountries = await prisma.country.createMany({
    data: countries,
  });

  return createdCountries;
};

export default createManyCountries;
