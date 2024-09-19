import HeaderGeneral from "@/components/commons/header";
import MyBookingsPage from "@/components/pages/my-bookings";

const MyBookings = () => {
  return (
    <main className="flex flex-col">
      <HeaderGeneral />
      <MyBookingsPage />
    </main>
  );
};

export default MyBookings;
