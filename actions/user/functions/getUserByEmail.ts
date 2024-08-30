import { NextRequest } from "next/server";
import prisma from "@/prisma/db";

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

export default getUserByEmail;
