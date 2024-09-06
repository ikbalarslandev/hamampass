"use client";

import { useSession } from "next-auth/react";
import { request } from "@/services/axios";
import { useState, useEffect } from "react";
import { TBooking } from "@/types";
import DrawerGeneral from "@/components/commons/drawer";
import { PropertyPartContent, PropertyPartTrigger } from "./property";
import moment from "moment";
import ReviewButton from "./review";

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

        req.data.sort((a: TBooking, b: TBooking) =>
          moment(a.date).isBefore(moment(b.date)) ? 1 : -1
        );

        setMyBookings(req.data);
      } catch (error) {
        console.error("Error fetching my bookings:", error);
      }
    };

    fetchMyBookings();
  }, [data]);

  const handleReview = () => {
    console.log("review");
  };

  return (
    <div className="mx-4">
      <h1 className="text-center">Past Bookings</h1>

      <div className="flex flex-col gap-4">
        {myBookings.map((booking) => (
          <div key={booking.id} className="flex flex-col border-2 rounded-2xl">
            <DrawerGeneral
              fill={false}
              trigger={<PropertyPartTrigger booking={booking} />}
              title={booking.property.title}
              content={<PropertyPartContent booking={booking} />}
            />

            <ReviewButton
              booking={booking}
              className="border-t rounded-b-xl py-2 bg-slate-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookingsPage;
