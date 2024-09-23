import { FaHeart } from "react-icons/fa";
import { useState, useEffect } from "react";
import { TProperty } from "@/types";

const HeartComponent = ({ property }: { property: TProperty }) => {
  const [isWishlist, setIsWishlist] = useState(false);

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");

    const isExist = wishlist.find(
      (item: TProperty) => item.title === property.title
    );

    setIsWishlist(isExist);
  }, []);

  const handleWishlistClick = (e: any) => {
    e.stopPropagation();
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    if (wishlist) {
      if (wishlist.find((item: TProperty) => item.title === property.title)) {
        const filteredWishlist = wishlist.filter(
          (item: TProperty) => item.title !== property.title
        );
        localStorage.setItem("wishlist", JSON.stringify(filteredWishlist));
        setIsWishlist(false);
      } else {
        localStorage.setItem(
          "wishlist",
          JSON.stringify([...wishlist, property])
        );
        setIsWishlist(true);
      }
    } else {
      localStorage.setItem("wishlist", JSON.stringify([property]));
      setIsWishlist(true);
    }
  };

  const cn = `absolute top-2 right-2 z-10 w-5 h-5 ${isWishlist ? "text-red-500" : "text-white"}`;
  return <FaHeart onClick={handleWishlistClick} className={cn} />;
};

export default HeartComponent;
