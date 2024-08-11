"use client";

import CheckboxComponent from "@/components/home/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";

const sexData = [1, 2, 3, 4];

const SexComponent = () => {
  const t = useTranslations("filter");
  const s = useTranslations("sex-number");
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="vibe">
        <AccordionTrigger className="text-lg font-bold">
          {t("sextitle")}
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2">
          {sexData.map((sex) => (
            <CheckboxComponent
              key={sex}
              id={sex}
              name={s(sex.toString())}
              paramName="sex"
            />
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default SexComponent;
