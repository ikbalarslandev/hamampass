"use client";

import { useSession } from "next-auth/react";
import { request } from "@hamampass/services";
import { useState, useEffect } from "react";
import { TBooking } from "@/types";
import DrawerGeneral from "@/components/commons/drawer";
import { PropertyPartContent, PropertyPartTrigger } from "./property";
import moment from "moment";
import ReviewButton from "./review";
import { useTranslations } from "@hamampass/i18n";

const MyBookingsPage = () => {
  const { data } = useSession();
  const [currentBookings, setCurrentBookings] = useState<TBooking[]>([]);
  const [pastBookings, setPastBookings] = useState<TBooking[]>([]);

  const t = useTranslations("my-bookings");

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

        const currents = req.data
          .filter(
            (booking: TBooking) =>
              moment(booking.date).isAfter(moment(), "day") ||
              moment(booking.date).isSame(moment(), "day")
          )
          .sort((a: TBooking, b: TBooking) =>
            moment(a.date).isBefore(moment(b.date)) ? 1 : -1
          );

        const pasts = req.data
          .filter((booking: TBooking) =>
            moment(booking.date).isBefore(moment(), "day")
          )
          .sort((a: TBooking, b: TBooking) =>
            moment(a.date).isBefore(moment(b.date)) ? 1 : -1
          );

        setCurrentBookings(currents);
        setPastBookings(pasts);
      } catch (error) {
        console.error("Error fetching my bookings:", error);
      }
    };

    fetchMyBookings();
  }, [data]);

  return (
    <div className="mx-4">
      {/* Current Bookings */}
      <div>
        <h1 className="my-4 font-bold text-lg text-gray-600">{t("current")}</h1>

        <div className="flex flex-col gap-4">
          {currentBookings.map((booking) => (
            <div
              key={booking.id}
              className="flex flex-col border-2 rounded-2xl"
            >
              <DrawerGeneral
                fill={false}
                trigger={<PropertyPartTrigger booking={booking} />}
                title={booking.property.title}
                content={<PropertyPartContent booking={booking} />}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Past Bookings */}
      {pastBookings.length > 0 && (
        <div>
          <h1 className="my-4 font-bold text-lg text-gray-600">{t("past")}</h1>

          <div className="flex flex-col gap-4">
            {pastBookings.map((booking) => (
              <div
                key={booking.id}
                className="flex flex-col border-2 rounded-2xl"
              >
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
      )}
    </div>
  );
};

export default MyBookingsPage;
