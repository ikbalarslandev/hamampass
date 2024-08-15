"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";

import { request } from "@/services/axios";
import { TApiResponse } from "@/types";

import Cards from "@/components/home/cards";
import FilterComponent from "@/components/home/filters";

const HomePage = () => {
  const home = useTranslations("home");

  const [properties, setProperties] = useState<TApiResponse>();

  const searchParams = useSearchParams();
  const districtParam = searchParams.get("district");

  useEffect(() => {
    function fParam(param: string) {
      return searchParams.get(param);
    }

    const fetchProperties = async () => {
      try {
        const response = await request({
          type: "get",
          endpoint: "property",
          params: {
            sort: fParam("sort"),
            contact_district: districtParam,
            vibe: fParam("vibe"),
            amenity: fParam("amenity"),
            sex: fParam("sex"),
            pay: fParam("pay"),
            range: fParam("range"),
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
      <FilterComponent />
      <hr />
      <h1 className="text-center text-xl my-3">
        {home("title")}{" "}
        <span className="text-orange-600">
          İstanbul{districtParam && `/${districtParam}`}
        </span>
      </h1>
      {properties && <Cards res={properties} />}
    </div>
  );
};

export default HomePage;
