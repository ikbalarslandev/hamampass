"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const PaymentMethodComponent = () => {
  const pay = useTranslations("home.filters.titles");
  const payment_details = useTranslations("home.filters.payment_methods");

  const searchParams = useSearchParams();
  const [selectedValue, setSelectedValue] = useState(
    searchParams.get("pay") || ""
  );

  const handleSelectChange = (value: string) => {
    if (selectedValue === value) {
      setSelectedValue("");
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.delete("pay");
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}?${newParams.toString()}`
      );
      return;
    }

    setSelectedValue(value);
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("pay", value);

    // Update the URL with the new query parameter
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}?${newParams.toString()}`
    );
  };

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="pay">
        <AccordionTrigger className="text-lg font-bold">
          {pay("pay_title")}
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2">
          <Label className="flex justify-between">
            <p>{payment_details("0")}</p>
            <Checkbox
              checked={selectedValue === "0"}
              onClick={() => handleSelectChange("0")}
              className="w-6 h-6"
            />
          </Label>
          <Label className="flex justify-between">
            <p>{payment_details("1")}</p>
            <Checkbox
              checked={selectedValue === "1"}
              onClick={() => handleSelectChange("1")}
              className="w-6 h-6 "
            />
          </Label>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default PaymentMethodComponent;
