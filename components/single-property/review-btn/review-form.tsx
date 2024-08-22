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
} from "@/components/ui/form";
import { useSession } from "next-auth/react";
import { request } from "@/services/axios";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslations } from "next-intl";
import { DrawerClose } from "@/components/ui/drawer";
import ProgressComponent from "./progress";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

// Define the schema for validation using Zod
const formSchema = z.object({
  type: z.number().min(0).max(3),
  product_type: z.number().min(0).max(1),
  rate_location: z.number().min(1).max(10),
  rate_staff: z.number().min(1).max(10),
  rate_atmosphere: z.number().min(1).max(10),
  rate_cleanliness: z.number().min(1).max(10),
  rate_facilities: z.number().min(1).max(10),
  rate_value_for_money: z.number().min(1).max(10),
  comment: z.string().min(1).max(1000),
});

const ReviewFormComponent = ({ id }: { id: string }) => {
  const { title } = useParams();
  const LOCAL_STORAGE_KEY = `review-${title}`;
  const session = useSession();
  const t = useTranslations("single.review.drawer");
  const type = useTranslations("single.review.drawer.type");
  const Package = useTranslations("single.review.drawer.package");
  const rate_types = useTranslations("single.review.main");
  const { toast } = useToast();

  const [initialValues, setInitialValues] = useState<
    z.infer<typeof formSchema>
  >(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedData ? JSON.parse(savedData) : undefined;
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues || {
      type: 0,
      product_type: 0,
      rate_location: 0,
      rate_staff: 0,
      rate_atmosphere: 0,
      rate_cleanliness: 0,
      rate_facilities: 0,
      rate_value_for_money: 0,
      comment: "",
    },
    mode: "onSubmit",
  });

  const watchedValues = useWatch({ control: form.control });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(watchedValues));
  }, [watchedValues]);

  useEffect(() => {
    if (initialValues) {
      form.reset(initialValues);
    }
  }, [initialValues, form]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const req = {
        ...values,
        propertyId: id,
        userId: session?.data?.user.id,
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
        description: "You have successfully submited review.",
        className: "text-white bg-green-500 px-1 py-2",
        duration: 500,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="max-h-[calc(100vh-100px)] overflow-y-auto p-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-3"
        >
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mr-2">{type("title")}</FormLabel>
                <FormControl>
                  <Select
                    value={field.value.toString()}
                    onValueChange={(value) => field.onChange(Number(value))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">{type("0")}</SelectItem>
                      <SelectItem value="1">{type("1")}</SelectItem>
                      <SelectItem value="2">{type("2")}</SelectItem>
                      <SelectItem value="3">{type("3")}</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="product_type"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mr-2">{Package("title")}</FormLabel>
                <FormControl>
                  <Select
                    value={field.value.toString()}
                    onValueChange={(value) => field.onChange(Number(value))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">{Package("0")}</SelectItem>
                      <SelectItem value="1">{Package("1")}</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <ProgressComponent
            title={rate_types("location")}
            name="rate_location"
            control={form.control}
            defaultValue={0}
          />
          <ProgressComponent
            title={rate_types("staff")}
            name="rate_staff"
            control={form.control}
            defaultValue={0}
          />
          <ProgressComponent
            title={rate_types("atmosphere")}
            name="rate_atmosphere"
            control={form.control}
            defaultValue={0}
          />
          <ProgressComponent
            title={rate_types("cleanliness")}
            name="rate_cleanliness"
            control={form.control}
            defaultValue={0}
          />
          <ProgressComponent
            title={rate_types("facilities")}
            name="rate_facilities"
            control={form.control}
            defaultValue={0}
          />
          <ProgressComponent
            title={rate_types("value")}
            name="rate_value_for_money"
            control={form.control}
            defaultValue={0}
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
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isSubmitting}
          >
            {t("submit")}
          </DrawerClose>
        </form>
      </Form>
    </div>
  );
};

export default ReviewFormComponent;
