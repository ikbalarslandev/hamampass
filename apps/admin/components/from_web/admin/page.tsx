import prisma from "@/prisma/db";
import { auth } from "@/auth";
import AdminComponent from "@/components/pages/admin";
import { TProduct } from "@/types";

const Admin = async () => {
  const session = await auth();
  const admin = await prisma.admin.findFirst({
    where: {
      userId: session?.user?.id,
    },
    include: {
      property: {
        include: {
          products: true,
        },
      },
    },
  });

  const sortedProducts = admin?.property?.products.sort((a, b) => {
    return a.type > b.type ? 1 : -1;
  });

  return (
    <AdminComponent
      title={admin?.property?.title || ""}
      products={sortedProducts as unknown as TProduct[]}
      canEdit={!!admin}
    />
  );
};

export default Admin;
