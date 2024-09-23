import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AcordionTemplate = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <Accordion type="single" collapsible className="border w-full px-2">
      <AccordionItem value={title}>
        <AccordionTrigger className="text-lg font-bold ">
          {title}
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2">
          <p>{desc}</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AcordionTemplate;
