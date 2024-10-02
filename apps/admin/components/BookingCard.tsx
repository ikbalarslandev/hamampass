"use client";

import { TBooking } from "@/types";
import moment from "moment";
import { useRouter } from "next/navigation";
const BookingCard = ({ booking }: { booking: TBooking }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/booking/${booking.id}`);
  };

  return (
    <button
      onClick={handleClick}
      className="border flex gap-4 px-2 py-3 rounded shadow bg-slate-200"
    >
      <p>{moment(booking.date).format("d MMMM")}</p>
      <p>{booking.user.name}</p>
      <p className="m-auto">{booking.totalMoney} TL</p>
    </button>
  );
};

export default BookingCard;
