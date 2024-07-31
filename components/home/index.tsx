"use client";
import { useEffect, useState } from "react";
import Cards from "../cards";
import { request } from "@/services/axios";
import { TApiResponse } from "@/types";
import SelectComponent from "./select";

const HomePage = () => {
  const [properties, setProperties] = useState<TApiResponse>(
    {} as TApiResponse
  );

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await request({
          type: "get",
          endpoint: "property",
        });

        setProperties(Array.isArray(response.data.data) ? response.data : {});
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div>
      <SelectComponent />
      <Cards res={properties} />
    </div>
  );
};

export default HomePage;
