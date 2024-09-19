import { NextRequest } from "next/server";
import prisma from "@/prisma/db";
import { auth } from "@/auth";

const saveSub = async (req: NextRequest) => {
  const session = await auth();
  if (!session) {
    throw new Error("Unauthorized");
  }

  const userId = session.user.id;
  const body = await req.json();

  const updatedAdmin = await prisma.admin.update({
    where: {
      userId,
    },
    data: {
      subscription: body.subscription,
    },
  });

  return updatedAdmin;
};

export default saveSub;
