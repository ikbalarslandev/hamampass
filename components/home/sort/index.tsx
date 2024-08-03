"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const SortComponent = () => {
  const t = useTranslations("filter");

  const searchParams = useSearchParams();
  const [selectedValue, setSelectedValue] = useState(
    searchParams.get("sort") || ""
  );

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("sort", value);

    // Update the URL with the new query parameter
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}?${newParams.toString()}`
    );
  };

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="sort">
        <AccordionTrigger className="text-lg font-bold">
          {t("stitle")}
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2">
          <Label className="flex justify-between">
            <p>{t("expensive")}</p>
            <Checkbox
              checked={selectedValue === "expensive"}
              onClick={() => handleSelectChange("expensive")}
              className="w-6 h-6"
            />
          </Label>
          <Label className="flex justify-between">
            <p>{t("cheap")}</p>
            <Checkbox
              checked={selectedValue === "cheap"}
              onClick={() => handleSelectChange("cheap")}
              className="w-6 h-6 "
            />
          </Label>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default SortComponent;
