"use client";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

import { request } from "@/services/axios";
import { TProperty } from "@/types";

import { Button } from "@/components/ui/button";
import Card from "@/components/home/cards/card";
import { useSelector } from "react-redux";
import { useFetchProperties } from "@/hooks/useFetchProperties";

const Cards = ({ serverProperties }: { serverProperties: TProperty[] }) => {
  useFetchProperties();
  const res = useSelector((state: any) => state.properties.propertyState);

  const [properties, setProperties] = useState<TProperty[]>(
    serverProperties || []
  );
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

  const c = useTranslations("home.load-btn");

  return (
    <div className="flex flex-col items-center mx-4 gap-6">
      <div aria-live="polite">
        {properties.map((property: TProperty) => (
          <Card key={property.id} property={property} />
        ))}
      </div>

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
