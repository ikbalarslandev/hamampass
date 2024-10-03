import { NextRequest } from "next/server";
import prisma from "@hamampass/db";

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

export default createUser;
