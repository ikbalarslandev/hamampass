import getProperty from "@/utils/getProperty";
import BookingCard from "@/components/BookingCard";
import { TBooking } from "@/types";

const Booking = async () => {
  const property = await getProperty();
  const bookings = property?.bookings || [];

  return (
    <div className="flex flex-col gap-4">
      <h1> {bookings.length} Booking</h1>
      {bookings.map((booking) => (
        <BookingCard
          key={booking.id}
          booking={booking as unknown as TBooking}
        />
      ))}
    </div>
  );
};

export default Booking;
