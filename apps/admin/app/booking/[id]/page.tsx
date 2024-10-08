import prisma from "@hamampass/db";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import moment from "moment";
import "moment/locale/tr";

const convertKey = (key: number) => {
  switch (key) {
    case 0:
      return "Basit Paket";
    case 1:
      return "Standart Paket";
    default:
      return "bilinmiyor";
  }
};

const BookingDetails = async ({
  params,
}: {
  params: {
    locale: string;
    id: string;
  };
}) => {
  moment.locale("tr");

  const session = await auth();
  const booking = await prisma.booking.findFirst({
    where: {
      id: params.id,
    },
    include: {
      property: true,
      user: true,
    },
  });

  const admin = await prisma.admin.findFirst({
    where: {
      propertyId: session?.user?.propertyId,
    },
  });

  if (admin?.propertyId !== booking?.propertyId) {
    return redirect("/");
  }

  return (
    <div className="flex flex-col">
      <h1 className="text-xl font-bold">Rezervasyon Detaylari</h1>
      <p className="text-sm">referans no: ({booking?.id})</p>

      <div className="flex items-center justify-between mr-2 mt-4">
        <p>
          {booking?.date
            ? moment(new Date(booking.date)).format("DD MMMM dddd")
            : "Tarih bilgisi mevcut değil"}
        </p>
        <p>
          {`${Object.keys(booking?.products || {}).reduce((acc, key) => {
            const product = (
              booking?.products as { [key: string]: { count: number } }
            )[key];
            return acc + product.count;
          }, 0)} kişi`}
        </p>
      </div>

      <div className="mt-4 flex flex-col">
        <h2 className="text-xl underline font-semibold">Konuk Detaylari</h2>
        <p> Isim: {booking?.user?.name}</p>
        <p> Email: {booking?.user?.email}</p>
        <p>Cinsiyet: {booking?.user?.gender == 0 ? "kadin" : "erkek"}</p>
      </div>

      <div className="flex flex-col mt-4">
        <h2 className="text-xl underline font-semibold">Paket Detaylari</h2>

        <p>
          {Object.keys(booking?.products || {})
            .map((key) => {
              const product = (
                booking?.products as { [key: string]: { count: number } }
              )[key];
              return `${product.count} adet ${convertKey(+key)}`;
            })
            .join(" ")}
        </p>
        <p>Toplam Odenecek Miktar: {booking?.totalMoney}TL</p>
      </div>
    </div>
  );
};

export default BookingDetails;
