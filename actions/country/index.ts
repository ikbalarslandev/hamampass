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

export { getCountryByTld };
