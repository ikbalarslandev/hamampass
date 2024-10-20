import Header from "@/components/commons/header";
import { SignOut } from "@/components/auth/logout";
import AdminComponent from "@/components/admin";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();

  if (!session?.user?.properties) {
    return null;
  }

  const properties = await session?.user?.properties;

  const sortedProducts = properties[0].products?.sort((a, b) => {
    return a.type > b.type ? 1 : -1;
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      <AdminComponent
        title={properties[0].title || ""}
        products={sortedProducts}
      />

      <SignOut />
    </div>
  );
}
