"use client";

import { useSearchParams } from "next/navigation";
import { useParams } from "next/navigation";

import { TProperty } from "@/types";
import { ca } from "date-fns/locale";

const TitleCard = ({ property }: { property: TProperty }) => {
  const searchParams = useSearchParams();
  const sex = searchParams.get("sex");
  const { locale } = useParams();

  const i18n = () => {
    switch (locale) {
      case "en":
        return property.sex === 0 ? "Women Section" : "Man Section";
      case "tr":
        return property.sex === 0 ? "Kadınlar Bölümü" : "Erkekler Bölümü";
      default:
        return "Unknown Section"; // Fallback for other locales
    }
  };

  const extention = () => {
    if (property.adminId.startsWith("s")) {
      if (!sex) {
        return " - " + i18n();
      }
      return null;
    }
    return null;
  };

  return (
    <h2 className="text-xl font-bold text-slate-700 my-2">
      {property.title} {extention()}
    </h2>
  );
};

export default TitleCard;
