"use client";

import { useTranslations } from "@hamampass/i18n";
import { useSearchParams } from "next/navigation";

const HomeTitle = () => {
  const home = useTranslations("home");
  const searchParams = useSearchParams();
  const districtParam = searchParams.get("district");

  return (
    <header className="text-center text-xl my-3">
      {home("title")}{" "}
      <span className="text-orange-700">
        İstanbul{districtParam && `/${districtParam}`}
      </span>
    </header>
  );
};

export default HomeTitle;
