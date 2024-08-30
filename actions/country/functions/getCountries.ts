import prisma from "@/prisma/db";

const getCountries = async () => {
  const countries = await prisma.country.findMany();

  return countries;
};

export default getCountries;
