"use client";

import CardItem from "@/components/pages/properties/cards/card-item";
import { TProperty } from "@/types";

const WishlistPage = () => {
  const properties = JSON.parse(localStorage.getItem("wishlist") || "[]");

  if (properties.length === 0) {
    return (
      <div>
        <h1 className="text-xl text-center mt-4">Wishlist is empty</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center mx-4 gap-6 mt-5">
      <div aria-live="polite">
        {properties?.map((property: TProperty) => (
          <CardItem key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
