import { TBooking } from "@/types";
import { Separator } from "@hamampass/ui/primitives/separator.tsx";
import moment from "moment";
import { LuUsers2 } from "react-icons/lu";
import { useTranslations } from "@hamampass/i18n";

const BookingContent = ({ booking }: { booking: TBooking }) => {
  const products = booking.products;
  const t = useTranslations("home.product-type");
  const trans = useTranslations("my-bookings.details.book_details");

  const guestCount = Object.values(products).reduce(
    (acc, cur) => acc + cur.count,
    0
  );
  const totalPrice = Object.values(products).reduce(
    (acc, cur) => acc + cur.price * cur.count,
    0
  );
  return (
    <div className=" flex flex-col ">
      <Separator className="mb-8 mt-2 " />
      <div className="p-3 border rounded-2xl border-gray-400 text-gray-500">
        <div className="flex flex-col gap-1 items-start">
          <p>{trans("ref")}</p>
          <p className="font-mono text-sm text-gray-600">{booking.id}</p>
        </div>
        <Separator className="my-4 " />

        <div className="flex">
          <div className="flex-1">
            <h3>{trans("date")}</h3>
            <p className="text-gray-700">
              {moment(booking.date).format("D MMMM YYYY")}
            </p>
          </div>
          <div className=" flex gap-5  items-center text-gray-700">
            <LuUsers2 size={20} />
            <div className="flex flex-col ">
              <h3>{trans("guest")}</h3>
              <p className="text-black">{guestCount}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        {Object.entries(products).map(([key, value]) => {
          return (
            <div key={key} className="p-3 border-b  text-gray-500 mt-4">
              <h1>
                {t(key.toString())} {trans("package")}
              </h1>
              <div className="flex items-center justify-between">
                <p>
                  ₺{value.price} x {value.count}
                </p>
                <p> ₺{value.price * value.count} TL</p>
              </div>
            </div>
          );
        })}

        <div className="p-3 border-y text-lg font-semibold flex justify-between items-center text-black mt-10">
          <h1>{trans("total")}</h1>
          <div className="flex items-center justify-between">
            <p></p>
            <p> ₺{totalPrice} TL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingContent;
