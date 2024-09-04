"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

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
  date: z.date({
    required_error: "A date of birth is required.",
  }),
});

export function DatePickerForm() {
  const router = useRouter();
  const { locale } = useParams();
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      date: new Date(),
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    router.push(`/${locale}/properties`);
    sessionStorage.setItem("selected-date", JSON.stringify(data.date));
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex p-1 bg-white rounded-lg w-full"
      >
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col flex-1">
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="none"
                      className={cn(
                        "pl-3 text-left font-normal flex items-center justify-start gap-2",
                        !field.value && "text-muted-foreground"
                      )}
                      onClick={() => setOpen(!open)}
                    >
                      <CalendarIcon className="h-4 w-4 opacity-50" />
                      {field.value
                        ? moment(field.value).format("D MMMM")
                        : moment().format("D MMMM")}
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={(date) => {
                      field.onChange(date);
                      setOpen(false);
                    }}
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
