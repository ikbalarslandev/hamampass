import prisma from "@/prisma/db";
import { auth } from "@/auth";
import AdminComponent from "@/components/pages/admin";
import { TProduct } from "@/types";

const Admin = async ({ params }: any) => {
  const { propertyId } = params;
  const { user } = (await auth()) || {};
  if (!user) return null;

  const property = await prisma.property.findUnique({
    where: {
      id: propertyId,
    },
    include: {
      products: true,
    },
  });

  const sortedProducts = property?.products.sort((a, b) => {
    return a.type > b.type ? 1 : -1;
  });

  return (
    <AdminComponent
      title={property?.title || ""}
      products={sortedProducts as unknown as TProduct[]}
      canEdit={property?.adminId === user.id}
    />
  );
};

export default Admin;
