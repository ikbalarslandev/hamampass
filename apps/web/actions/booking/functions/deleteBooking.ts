import { NextRequest } from "next/server";
import prisma from "@hamampass/db";

const deleteBooking = async (req: NextRequest) => {
  const url = new URL(req.url);
  const bookingId = url.pathname.split("/").pop() || "";

  const booking = await prisma.booking.delete({
    where: {
      id: bookingId,
    },
  });

  return booking;
};

export default deleteBooking;
