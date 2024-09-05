import { NextRequest } from "next/server";
import prisma from "@/prisma/db";

const findMyBookings = async (req: NextRequest) => {
  const url = new URL(req.url);
  const userId = url.pathname.split("/").pop() || "";

  const bookings = await prisma.booking.findMany({
    where: {
      userId,
    },
    include: {
      property: {
        include: {
          contact: true,
        },
      },
      review: true,
    },
  });

  return bookings;
};

export default findMyBookings;
