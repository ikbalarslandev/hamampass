"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@hamampass/ui/primitives/accordion.tsx";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Item from "./item";

const SortComponent = () => {
  const title = useTranslations("titles");
  const price = useTranslations("home.filters.price");
  const rating = useTranslations("home.filters.rating");

  const searchParams = useSearchParams();
  const [priceValue, setpriceValue] = useState(searchParams.get("sort") || "");
  const [ratingValue, setRatingValue] = useState(
    searchParams.get("review") || ""
  );

  useEffect(() => {
    setpriceValue(searchParams.get("sort") || "");
    setRatingValue(searchParams.get("review") || "");
  }, [searchParams]);

  const handleGeneral = (
    paramValue: string,
    setParamValue: (a: string) => void,
    paramName: string
  ) => {
    return (value: string) => {
      if (paramValue === value) {
        setParamValue("");
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.delete(paramName);
        window.history.replaceState(
          null,
          "",
          `${window.location.pathname}?${newParams.toString()}`
        );
        return;
      }

      setParamValue(value);
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.set(paramName, value);

      // Update the URL with the new query parameter
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}?${newParams.toString()}`
      );
    };
  };

  const handlePrice = handleGeneral(priceValue, setpriceValue, "sort");
  const handleRating = handleGeneral(ratingValue, setRatingValue, "review");

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="sort">
        <AccordionTrigger className="text-lg font-bold">
          {title("sort_title")}
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2">
          <Item
            label={price("expensive")}
            checked={priceValue === "expensive"}
            onClick={() => handlePrice("expensive")}
          />
          <Item
            label={price("cheap")}
            checked={priceValue === "cheap"}
            onClick={() => handlePrice("cheap")}
          />
          <Item
            label={rating("high")}
            checked={ratingValue === "high"}
            onClick={() => handleRating("high")}
          />
          <Item
            label={rating("low")}
            checked={ratingValue === "low"}
            onClick={() => handleRating("low")}
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default SortComponent;
