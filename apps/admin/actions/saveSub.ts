import { NextRequest } from "next/server";
import prisma from "@hamampass/db";
import { auth } from "@/auth";

const saveSub = async (req: NextRequest) => {
  const session = await auth();
  if (!session) {
    throw new Error("Unauthorized");
  }

  const body = await req.json();

  const adminId = session.user.id;

  const admin = await prisma.admin.findUnique({
    where: {
      id: adminId,
    },
  });

  const previousSubs = admin?.subscriptions || [];

  const updatedAdmin = await prisma.admin.update({
    where: {
      id: adminId,
    },
    data: {
      subscriptions: [...previousSubs, body.subscription],
    },
  });

  return updatedAdmin;
};

export default saveSub;
