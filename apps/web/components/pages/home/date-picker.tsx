"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState, useEffect } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@hamampass/ui/primitives/button.tsx";
import { Calendar } from "@hamampass/ui/primitives/calendar.tsx";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@hamampass/ui/primitives/form.tsx";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { startOfDay } from "date-fns";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import moment from "moment";
import "moment/locale/tr"; // Import Turkish locale for moment
import "moment/locale/en-gb"; // Import English locale for moment
import { useTranslations } from "@hamampass/i18n";
import { tr, enUS } from "date-fns/locale";

const FormSchema = z.object({
  date: z.date({
    required_error: "A date of birth is required.",
  }),
});

export function DatePickerForm() {
  const router = useRouter();
  const { locale } = useParams();
  const [open, setOpen] = useState(false);
  const [calendarLocale, setCalendarLocale] = useState(enUS); // Default to Turkish
  const t = useTranslations("home");

  useEffect(() => {
    // Update locales based on the current locale parameter
    if (locale === "tr") {
      setCalendarLocale(tr);
      moment.locale("tr");
    } else if (locale === "en") {
      setCalendarLocale(enUS);
      moment.locale("en-gb");
    }
  }, [locale]);

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

                      {moment(field.value).format("D MMMM")}
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
                    locale={calendarLocale}
                  />
                </PopoverContent>
              </Popover>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-cyan-500 shadow border rounded-xl">
          {t("search")}
        </Button>
      </form>
    </Form>
  );
}
