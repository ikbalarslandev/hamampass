import React from "react";
import { TProperty } from "@/types";
import { useTranslations } from "@hamampass/i18n";
import DrawerGeneral from "@/components/commons/drawer";

interface IBookButton {
  property: TProperty;
  content?: any;
}

const BookButton = ({ property, content }: IBookButton) => {
  const t = useTranslations("single.book_btn");

  return (
    <div className="fixed bottom-0 w-full px-4 py-3 bg-white rounded-t-xl border-t shadow-2xl z-20 flex items-center">
      <div className="flex flex-1 flex-col">
        <p className="text-xs text-gray-600">{t("from")}</p>
        <p className="font-bold text-xl">
          ₺{property?.products.sort((a, b) => a.type - b.type)[0].adult_price}
          <span className="text-sm ml-1">TL</span>
        </p>
      </div>

      <DrawerGeneral
        trigger={
          <div className="rounded-xl px-8 bg-cyan-500 py-2 text-white font-bold">
            {t("book")}
          </div>
        }
        content={content}
        full={false}
        fill={false}
      />
    </div>
  );
};

export default BookButton;
