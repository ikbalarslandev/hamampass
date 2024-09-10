import { NextRequest } from "next/server";
import prisma from "@/prisma/db";
import { sendNotification } from "@/actions/push";

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

  // send a notification to the admin of the property that a booking has been made
  await sendNotification({ propertyId });

  return booking;
};

export default createBooking;
