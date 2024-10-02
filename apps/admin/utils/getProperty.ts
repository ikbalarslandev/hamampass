import { auth } from "../auth";
import prisma from "@/prisma/db";

export default async function getProperty() {
  const session = await auth();
  const propertyId = session?.user?.propertyId || "";
  const property = await prisma.property.findUnique({
    where: {
      id: propertyId,
    },
    include: {
      bookings: {
        include: {
          user: true,
          review: true,
        },
      },
    },
  });
  return property;
}
