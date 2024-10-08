import Header from "@/components/commons/header";
import { SignOut } from "@/components/auth/logout";
import AdminComponent from "@/components/admin";
import { auth } from "@/auth";
import prisma from "@hamampass/db";
import { TProduct } from "@/types";
import Link from "next/link";

export default async function Home() {
  const session = await auth();
  const property = await prisma.property.findFirst({
    where: {
      id: session?.user?.propertyId,
    },
    include: {
      products: true,
    },
  });

  const sortedProducts = property?.products?.sort((a, b) => {
    return a.type > b.type ? 1 : -1;
  });

  return (
    <div className="flex flex-col items-center justify-center mb-6">
      <Header />
      <AdminComponent
        title={property?.title || ""}
        products={sortedProducts as unknown as TProduct[]}
      />
      <Link href="/booking" className="my-5">
        Bookings
      </Link>
      <SignOut />
    </div>
  );
}
