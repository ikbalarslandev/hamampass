"use client";

import { useSession } from "next-auth/react";
import { request } from "@/services/axios";
import { useState, useEffect } from "react";
import { TBooking } from "@/types";
import moment from "moment";
import Image from "next/image";
import { CiCalendar } from "react-icons/ci";
import { IoLocation } from "react-icons/io5";
import { Button } from "@/components/ui/button";

const MyBookingsPage = () => {
  const { data } = useSession();
  const [myBookings, setMyBookings] = useState<TBooking[]>([]);

  useEffect(() => {
    const fetchMyBookings = async () => {
      try {
        const req = await request({
          type: "get",
          endpoint: `booking/${data?.user?.id}`,
        });

        setMyBookings(req.data);
      } catch (error) {
        console.error("Error fetching my bookings:", error);
      }
    };

    fetchMyBookings();
  }, [data]);

  const handleBookingDetails = () => {
    console.log("booking details");
  };
  const handleReview = () => {
    console.log("review");
  };

  return (
    <div className="mx-4">
      <h1 className="text-center">Past Bookings</h1>

      {myBookings.map((booking) => (
        <div key={booking.id} className="flex flex-col border-2 rounded-2xl">
          <button
            onClick={handleBookingDetails}
            className="flex items-start gap-2 p-2"
          >
            <Image
              src={booking.property.photos[0]}
              alt={booking.property.title}
              width={80}
              height={80}
              className="aspect-square rounded-xl object-cover object-center"
            />
            <div className="text-gray-700 flex flex-col items-start gap-[0.15rem]">
              <h1 className="font-semibold text-lg  ">
                {booking.property.title}
              </h1>
              <div className="flex items-center gap-1  ">
                <IoLocation className="text-gray-500" />
                <p className="text-sm">
                  {booking.property.contact.district} {" - "}
                  {booking.property.contact.city}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <CiCalendar className="text-gray-500" />
                <p className="text-sm">
                  {moment(booking.date).format("D MMM, YYYY")}
                </p>
              </div>
            </div>
          </button>

          <button
            onClick={handleReview}
            className="border-t rounded-b-xl py-2 bg-slate-100  "
          >
            Review Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default MyBookingsPage;
