"use client";

import { useTranslations } from "@hamampass/i18n";
import { useSearchParams } from "next/navigation";

const HomeTitle = () => {
  const home = useTranslations("home");
  const searchParams = useSearchParams();
  const districtParam = searchParams.get("district");

  return (
    <p className="text-center text-2xl font-semibold my-6 flex flex-col items-start mx-4 text-primary-10 ">
      <span> Turkish Baths in</span>

      <span className="text-secondary-10">
        İstanbul{districtParam && `/${districtParam}`}
      </span>
    </p>
  );
};

export default HomeTitle;
