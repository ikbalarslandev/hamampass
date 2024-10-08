import { NextRequest } from "next/server";
import prisma from "@hamampass/db";
import { sendNotification } from "@/actions/push";
import moment from "moment";
import "moment/locale/tr";

const convertKey = (key: number) => {
  switch (key) {
    case 0:
      return "Basit";
    case 1:
      return "standart";
    default:
      return "bilinmiyor";
  }
};

const createBooking = async (req: NextRequest) => {
  moment.locale("tr");

  const { date, propertyId, userId, products, totalMoney } = await req.json();

  const booking = await prisma.booking.create({
    data: {
      date: new Date(date),
      propertyId,
      userId,
      totalMoney,
      products,
    },
  });

  const desc = `${moment(new Date(date)).format("DD MMMM dddd")}, ${Object.keys(
    products
  ).reduce((acc, key) => acc + products[key].count, 0)} kişi ( ${Object.keys(
    products
  )
    .map((key) => `${products[key].count} ${convertKey(+key)}`)
    .join(" ")} ), Toplam ${totalMoney} TL`;

  await sendNotification({
    propertyId,
    desc,
    redirectUrl: `/booking/${booking.id}`,
  });

  return booking;
};

export default createBooking;
