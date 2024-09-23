import { FaHeart } from "react-icons/fa";
import { useState } from "react";

const HeartComponent = ({ title }: { title: string }) => {
  const [isWishlist, setIsWishlist] = useState(
    localStorage.getItem("wishlist")?.includes(title)
  );

  const handleWishlistClick = (title: string) => {
    return (e: any) => {
      e.stopPropagation();
      const wishlist = localStorage.getItem("wishlist");
      if (wishlist) {
        const wishlistArray = JSON.parse(wishlist);
        if (wishlistArray.includes(title)) {
          const filteredWishlist = wishlistArray.filter(
            (item: string) => item !== title
          );
          localStorage.setItem("wishlist", JSON.stringify(filteredWishlist));
          setIsWishlist(false);
        } else {
          localStorage.setItem(
            "wishlist",
            JSON.stringify([...wishlistArray, title])
          );
          setIsWishlist(true);
        }
      } else {
        localStorage.setItem("wishlist", JSON.stringify([title]));
        setIsWishlist(true);
      }
    };
  };

  const cn = `absolute top-2 right-2 z-10 w-5 h-5 ${isWishlist ? "text-red-500" : "text-white"}`;
  return <FaHeart onClick={handleWishlistClick(title)} className={cn} />;
};

export default HeartComponent;
