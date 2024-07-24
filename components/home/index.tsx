"use client";
import { useEffect, useState } from "react";
import HeaderComponent from "../header";
import Cards from "../cards";
import { request } from "@/services/axios";

const HomePage = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await request({
          type: "get",
          endpoint: "property",
        });

        console.log(response.data.data);
        setProperties(
          Array.isArray(response.data.data) ? response.data.data : []
        );
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div>
      <HeaderComponent />
      <Cards data={properties} />
    </div>
  );
};

export default HomePage;
