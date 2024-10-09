"use client";

import CheckboxComponent from "@/components/pages/properties/filters/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "@hamampass/i18n";

const sexData = [1, 2, 3, 4];

const SexComponent = () => {
  const sex_type = useTranslations("home.filters.sex");
  const title = useTranslations("titles");
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="vibe">
        <AccordionTrigger className="text-lg font-bold">
          {title("sex_title")}
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2">
          {sexData.map((id) => (
            <CheckboxComponent
              key={id}
              id={id}
              name={sex_type(id.toString())}
              paramName="sex"
            />
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default SexComponent;
