"use client";
import { useEffect, useState } from "react";
import Cards from "../cards";
import { request } from "@/services/axios";
import { TApiResponse } from "@/types";
import { useSearchParams } from "next/navigation";
import DistrictComponent from "./district";
import { useTranslations } from "next-intl";

const HomePage = () => {
  const [properties, setProperties] = useState<TApiResponse>(
    {} as TApiResponse
  );
  const searchParams = useSearchParams();

  const districtParam = searchParams.get("district");
  const t = useTranslations("card");

  useEffect(() => {
    const sortParam = searchParams.get("sort");
    const vibeParam = searchParams.get("vibe");
    const amenityParam = searchParams.get("amenity");
    const sexParam = searchParams.get("sex");
    const payParam = searchParams.get("pay");

    const fetchProperties = async () => {
      try {
        const response = await request({
          type: "get",
          endpoint: "property",
          params: {
            sort: sortParam,
            contact_district: districtParam,
            vibe: vibeParam,
            amenity: amenityParam,
            sex: sexParam,
            pay: payParam,
          },
        });

        setProperties(Array.isArray(response.data.data) ? response.data : {});
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, [searchParams]);

  return (
    <div>
      <DistrictComponent />
      <hr />
      <h1 className="text-center text-xl my-3">
        {t("title")}{" "}
        <span className="text-orange-600">
          İstanbul{districtParam && `/${districtParam}`}
        </span>
      </h1>
      <Cards res={properties} />
    </div>
  );
};

export default HomePage;
