"use client";
import { useEffect, useState } from "react";
import Cards from "../cards";
import { request } from "@/services/axios";
import { TApiResponse } from "@/types";
import SelectComponent from "./select";
import { useSearchParams } from "next/navigation";
import DistrictComponent from "./district";

const HomePage = () => {
  const [properties, setProperties] = useState<TApiResponse>(
    {} as TApiResponse
  );
  const searchParams = useSearchParams();

  useEffect(() => {
    const sortParam = searchParams.get("sort");
    const districtParam = searchParams.get("district");

    const fetchProperties = async () => {
      try {
        const response = await request({
          type: "get",
          endpoint: "property",
          params: {
            sort: sortParam,
            district: districtParam,
          },
        });

        setProperties(Array.isArray(response.data.data) ? response.data : {});
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, [searchParams]); // Dependency array includes searchParams

  return (
    <div>
      <SelectComponent />
      <DistrictComponent />
      <Cards res={properties} />
    </div>
  );
};

export default HomePage;
