import prisma from "@/prisma/db";
import { auth } from "@/auth";
import AdminComponent from "@/components/admin";
import { TProduct } from "@/types";

const AdminPage = async ({ params }: any) => {
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

  console.log("canEdit", property?.adminId === user.id);
  return (
    <AdminComponent
      products={property?.products as unknown as TProduct[]}
      canEdit={property?.adminId === user.id}
    />
  );
};

export default AdminPage;
