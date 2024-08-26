"use client";

import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";

const HomeTitle = () => {
  const home = useTranslations("home");
  const searchParams = useSearchParams();
  const districtParam = searchParams.get("district");

  return (
    <h1 className="text-center text-xl my-3">
      {home("title")}{" "}
      <span className="text-orange-600">
        İstanbul{districtParam && `/${districtParam}`}
      </span>
    </h1>
  );
};

export default HomeTitle;
