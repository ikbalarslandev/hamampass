"use client";
import { useEffect, useState } from "react";
import Card from "./card";
import { TApiResponse, TProperty } from "@/types";
import { Button } from "../ui/button";
import { request } from "@/services/axios";
import { useTranslations } from "next-intl";

interface CardsProps {
  res: TApiResponse;
}

const Cards: React.FC<CardsProps> = ({ res }) => {
  const [properties, setProperties] = useState<TProperty[]>([]);
  const [page, setPage] = useState({
    page: 1,
    max_page: 1,
  });

  useEffect(() => {
    setProperties(Array.isArray(res.data) ? res.data : []);

    setPage({
      page: res.page,
      max_page: res.max_page,
    });
  }, [res]);

  const handleLoadMore = async () => {
    try {
      const response = await request({
        type: "get",
        endpoint: "property",
        params: {
          page: page.page + 1,
        },
      });

      setProperties([...properties, ...response.data.data]);

      setPage({
        page: response.data.page,
        max_page: response.data.max_page,
      });
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  const c = useTranslations("card");

  return (
    <div className="flex flex-col items-center">
      {properties.map((property: TProperty) => (
        <Card key={property.id} property={property} />
      ))}

      {page.max_page > page.page && (
        <Button
          className="bg-cyan-500 w-4/5 mt-2 mb-4"
          onClick={handleLoadMore}
        >
          {c("button")}
        </Button>
      )}
    </div>
  );
};

export default Cards;
