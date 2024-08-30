import { NextRequest } from "next/server";
import prisma from "@/prisma/db";

const findAdminsProperty = async (req: NextRequest) => {
  const url = new URL(req.url);
  const userId = url.pathname.split("/").pop();

  const property = await prisma.property.findFirst({
    where: {
      adminId: userId,
    },
  });
  return property;
};

export default findAdminsProperty;
