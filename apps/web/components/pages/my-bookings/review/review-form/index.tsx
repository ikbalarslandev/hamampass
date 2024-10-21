"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@hamampass/ui/primitives/form.tsx";
import { useSession, getSession } from "next-auth/react";
import { Textarea } from "@hamampass/ui/primitives/textarea.tsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@hamampass/ui/primitives/select.tsx";
import { useTranslations } from "@hamampass/i18n";
import { DrawerClose } from "@hamampass/ui/primitives/drawer.tsx";
import ProgressComponent from "./progress";
import { useEffect, useState, useTransition } from "react";
import { useParams } from "next/navigation";
import { toast } from "@hamampass/ui/primitives/hooks/use-toast.ts";
import { request } from "@hamampass/services";
import { TBooking } from "@hamampass/db/types";

// Define the schema for validation using Zod
const formSchema = z.object({
  location: z.number().min(1).max(10),
  staff: z.number().min(1).max(10),
  atmosphere: z.number().min(1).max(10),
  cleanliness: z.number().min(1).max(10),
  facilities: z.number().min(1).max(10),
  value_for_money: z.number().min(1).max(10),
  comment: z.string().min(1).max(1000),
});

const ReviewFormComponent = ({ booking }: { booking: TBooking }) => {
  const { title } = useParams();
  const LOCAL_STORAGE_KEY = `review-${title}`;
  const session = useSession();
  const t = useTranslations("single.review.drawer");
  const type = useTranslations("single.review.drawer.type");
  const Package = useTranslations("single.review.drawer.package");
  const types = useTranslations("single.review.main");

  // State to track if the form has loaded stored values
  const [formLoaded, setFormLoaded] = useState(false);

  // State for managing submission state
  const [isPending, startTransition] = useTransition();

  // Load stored values from local storage or use default values
  const [initialValues, setInitialValues] = useState(() => {
    const storedValues = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedValues
      ? JSON.parse(storedValues)
      : {
          location: 1,
          staff: 1,
          atmosphere: 1,
          cleanliness: 1,
          facilities: 1,
          value_for_money: 1,
          comment: "",
        };
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues,
    mode: "onSubmit",
  });

  // Prevent overwriting local storage with default values on mount
  useEffect(() => {
    setFormLoaded(true);
  }, []);

  // Watch form values and save to local storage on change, but only after the form has loaded
  const watchedValues = useWatch({ control: form.control });
  useEffect(() => {
    if (formLoaded) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(watchedValues));
    }
  }, [watchedValues, LOCAL_STORAGE_KEY, formLoaded]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      try {
        // Fetch the updated session
        const updatedSession = await getSession();

        if (!updatedSession?.user?.id) {
          throw new Error("User not logged in.");
        }

        const req = {
          rate: {
            location: values.location,
            staff: values.staff,
            atmosphere: values.atmosphere,
            cleanliness: values.cleanliness,
            facilities: values.facilities,
            value_for_money: values.value_for_money,
          },
          comment: values.comment,
          bookingId: booking.id,
          propertyId: booking.propertyId,
        };

        await request({
          type: "post",
          endpoint: "review",
          payload: req,
        });

        localStorage.removeItem(LOCAL_STORAGE_KEY);
        window.location.reload();

        toast({
          title: "Review submitted",
          description: "Your review has been submitted successfully.",
          className: "text-white bg-green-500 px-1 py-2",
          duration: 500,
        });
      } catch (error) {
        console.error(error);
        toast({
          title: "Error",
          description: "An error occurred while submitting your review.",
          className: "text-white bg-red-500 px-1 py-2",
          duration: 500,
        });
      }
    });
  }

  return (
    <div className="max-h-[calc(100vh-100px)] overflow-y-auto p-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-3"
        >
          <ProgressComponent
            title={types("location")}
            name="location"
            control={form.control}
            defaultValue={1}
          />
          <ProgressComponent
            title={types("staff")}
            name="staff"
            control={form.control}
            defaultValue={1}
          />
          <ProgressComponent
            title={types("atmosphere")}
            name="atmosphere"
            control={form.control}
            defaultValue={1}
          />
          <ProgressComponent
            title={types("cleanliness")}
            name="cleanliness"
            control={form.control}
            defaultValue={1}
          />
          <ProgressComponent
            title={types("facilities")}
            name="facilities"
            control={form.control}
            defaultValue={1}
          />
          <ProgressComponent
            title={types("value")}
            name="value_for_money"
            control={form.control}
            defaultValue={1}
          />

          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mr-2">{t("comment")}</FormLabel>
                <FormControl>
                  <Textarea {...field} placeholder={t("comment-placeholder")} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <DrawerClose
            type="submit"
            className={`bg-gray-400 px-2 py-1 text-white rounded my-5 ${
              isPending ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isPending}
          >
            {t("submit")}
          </DrawerClose>
        </form>
      </Form>
    </div>
  );
};

export default ReviewFormComponent;
