import WishlistPage from "@/components/pages/wishlist";
import HeaderGeneral from "@/components/commons/header";

const wishlist = () => {
  return (
    <main className="flex flex-col">
      <HeaderGeneral />
      <WishlistPage />
    </main>
  );
};
export default wishlist;
