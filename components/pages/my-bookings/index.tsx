"use client";

import { useSession } from "next-auth/react";
import { request } from "@/services/axios";
import { useState, useEffect } from "react";
import { TBooking } from "@/types";
import moment from "moment";

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
        console.log(req.data);
        setMyBookings(req.data);
      } catch (error) {
        console.error("Error fetching my bookings:", error);
      }
    };

    fetchMyBookings();
  }, [data]);

  return (
    <div>
      <h1 className="text-center">My Bookings page</h1>
      {myBookings.map((booking) => (
        <div className="mx-4 border flex items-center justify-between">
          <div key={booking.id} className=" my-4 flex flex-col">
            <p className="text-gray-500 text-sm">
              {moment(booking.date).format(" D MMMM")}
            </p>
            <h2>{booking.property.title}</h2>
          </div>
          <button className="bg-blue-500 text-white">Cancel</button>
        </div>
      ))}
    </div>
  );
};

export default MyBookingsPage;
