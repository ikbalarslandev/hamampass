import { NextRequest } from "next/server";
import prisma from "@hamampass/db";

const getUserByEmail = async (req: NextRequest) => {
  const url = new URL(req.url);
  const email = url.pathname.split("/").pop();

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  return user;
};

export default getUserByEmail;
