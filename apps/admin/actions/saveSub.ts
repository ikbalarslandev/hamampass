import { NextRequest } from "next/server";
import prisma from "@/prisma/db";
import { auth } from "@/auth";

const saveSub = async (req: NextRequest) => {
  const session = await auth();
  if (!session) {
    throw new Error("Unauthorized");
  }

  const propertyId = session.user.propertyId;
  const body = await req.json();

  const admin = await prisma.admin.findFirst({
    where: {
      propertyId,
    },
  });
  const prevSubs = admin?.subscriptions || [];

  const updatedAdmin = await prisma.admin.update({
    where: {
      propertyId,
    },
    data: {
      subscriptions: [...prevSubs, body.subscription],
    },
  });

  return updatedAdmin;
};

export default saveSub;
