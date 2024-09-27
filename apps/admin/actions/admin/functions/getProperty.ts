import { NextRequest } from "next/server";
import prisma from "@/prisma/db";

const getProperty = async (req: NextRequest) => {
  // get id and password from request search params
  const id = req.nextUrl.searchParams.get("id");
  const password = req.nextUrl.searchParams.get("password");

  if (!id || !password) {
    return new Response("Missing id or password", { status: 400 });
  }

  // find the property with the given id and password
  const property = await prisma.admin.findUnique({
    where: {
      id,
    },
    include: {
      user: true,
    },
  });

  if (!property || property.password !== password) {
    return new Response("Property not found", { status: 404 });
  }

  return property;
};

export default getProperty;
