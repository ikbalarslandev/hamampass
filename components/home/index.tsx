"use client";

import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";

import Cards from "@/components/home/cards";
import FilterComponent from "@/components/home/filters";
import { useSelector } from "react-redux";
import { useFetchProperties } from "@/hooks/useFetchProperties";

const HomePage = () => {
  useFetchProperties();
  const home = useTranslations("home");

  const res = useSelector((state: any) => state.properties.propertyState);

  const searchParams = useSearchParams();
  const districtParam = searchParams.get("district");

  return (
    <div>
      <FilterComponent />

      <hr />
      <h1 className="text-center text-xl my-3">
        {home("title")}{" "}
        <span className="text-orange-600">
          İstanbul{districtParam && `/${districtParam}`}
        </span>
      </h1>
      {res && <Cards res={res} />}
    </div>
  );
};

export default HomePage;
