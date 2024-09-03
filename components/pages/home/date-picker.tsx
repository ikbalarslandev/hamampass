"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { startOfDay } from "date-fns";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import moment from "moment";

const FormSchema = z.object({
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
});

export function DatePickerForm() {
  const router = useRouter();
  const { locale } = useParams();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    router.push(`/${locale}/properties`);
    sessionStorage.setItem("selected-date", JSON.stringify(data.dob));
  }

  const savedDate = JSON.parse(
    sessionStorage.getItem("selected-date") || "null"
  );

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex p-1 bg-white rounded-lg"
      >
        <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="none"
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal flex items-center justify-start gap-2",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="h-4 w-4 opacity-50" />
                      {field.value
                        ? moment(field.value).format("DD MMMM")
                        : "Pick a date"}
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => date < startOfDay(new Date())}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-cyan-500 shadow border rounded-xl">
          Search
        </Button>
      </form>
    </Form>
  );
}
