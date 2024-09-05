import { NextRequest } from "next/server";
import prisma from "@/prisma/db";

const createBooking = async (req: NextRequest) => {
  const { date, propertyId, userId, products, totalMoney } = await req.json();

  console.log(new Date(date), propertyId, userId, products, totalMoney);

  const booking = await prisma.booking.create({
    data: {
      date: new Date(date),
      propertyId,
      userId,
      totalMoney,
      products,
    },
  });
  console.log(booking);
  return booking;
};

export default createBooking;
