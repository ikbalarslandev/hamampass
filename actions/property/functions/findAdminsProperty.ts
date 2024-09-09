import { NextRequest } from "next/server";
import prisma from "@/prisma/db";

const findAdminsProperty = async (req: NextRequest) => {
  const url = new URL(req.url);
  const userId = url.pathname.split("/").pop();

  const admin = await prisma.admin.findFirst({
    where: {
      userId,
    },
    include: {
      property: true,
    },
  });

  return admin?.property;
};
export default findAdminsProperty;
