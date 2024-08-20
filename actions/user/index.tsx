import prisma from "@/prisma/db";
import { NextRequest } from "next/server";

const getUserByEmail = async (req: NextRequest) => {
  const url = new URL(req.url);
  const email = url.pathname.split("/").pop();

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
    include: {
      reviews: true,
    },
  });

  return user;
};

const createUser = async (req: NextRequest) => {
  const { name, email, image, nationality, age_range, gender } =
    await req.json();

  const user = await prisma.user.create({
    data: {
      name,
      email,
      image,
      nationality,
      age_range,
      gender,
    },
  });

  return user;
};

export { getUserByEmail, createUser };
