import React from "react";
import { TProperty } from "@/types";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

interface IBookButton {
  property: TProperty;
  productsRef: React.RefObject<HTMLDivElement>;
}

const BookButton = ({ property, productsRef }: IBookButton) => {
  const t = useTranslations("single.book_btn");

  const handleScrollToProducts = () => {
    if (productsRef.current) {
      const headerOffset = window.innerHeight * 0.09;
      const elementPosition = productsRef.current.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed bottom-0 w-full px-4 py-3 bg-white rounded-t-xl border-t shadow-2xl z-20 flex items-center">
      <div className="flex flex-1 flex-col">
        <p className="text-xs text-gray-600">{t("from")}</p>
        <p className="font-bold text-xl">
          ₺{property?.products.sort((a, b) => a.type - b.type)[0].adult_price}
          <span className="text-sm ml-1">TL</span>
        </p>
      </div>

      <Button
        className="rounded-xl px-8 bg-cyan-500"
        onClick={handleScrollToProducts}
      >
        {t("book")}
      </Button>
    </div>
  );
};

export default BookButton;
