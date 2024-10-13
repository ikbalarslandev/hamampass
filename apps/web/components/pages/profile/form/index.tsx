"use client";

import { TCountry, TUser } from "@/types";
import { request } from "@/services/axios";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@hamampass/ui/primitives/form.tsx";
import { Button } from "@hamampass/ui/primitives/button.tsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { useSession, getSession } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";
import { useTranslations } from "@hamampass/i18n";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

const formSchema = z.object({
  nationality: z.string().min(2).max(2),
  age_range: z.number().min(0).max(4),
  gender: z.number().min(0).max(1),
});

const FormComponent = () => {
  const router = useRouter();
  const { data } = useSession();
  const user = data?.user as TUser;
  const { toast } = useToast();
  const t = useTranslations("profile");
  const p = useTranslations("profile.complete");
  const to = useTranslations("profile.toast");
  const { locale } = useParams();

  const [countries, setCountries] = useState<TCountry[]>();

  useEffect(() => {
    async function fetchCountries() {
      const res = await request({ type: "get", endpoint: "country" });
      const sorted = res.data.sort((a: TCountry, b: TCountry) =>
        a[`name_${locale}`].localeCompare(b[`name_${locale}`])
      );

      setCountries(sorted);
    }

    fetchCountries();
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nationality: "us",
      age_range: 1,
      gender: 1,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const req = {
      ...user,
      ...values,
    };

    await request({
      type: "post",
      endpoint: "user",
      payload: req,
    });

    await getSession();

    toast({
      title: to("title"),
      description: to("desc"),
      className: "text-white bg-green-500 px-1 py-2",
      duration: 500,
    });

    router.push("/");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-3 mx-6 mt-4"
      >
        <FormField
          control={form.control}
          name="nationality"
          render={({ field }) => (
            <FormItem className="flex">
              <FormLabel className="mr-2 mt-5">{t("nationality")}</FormLabel>
              <FormControl>
                <Select
                  value={field.value}
                  onValueChange={(value) => field.onChange(value)}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>

                  <SelectContent>
                    {countries?.map((country) => (
                      <SelectItem key={country.tld} value={country.tld}>
                        <div className="flex items-center">
                          <Image
                            src={country.image}
                            alt={country[`name_${locale}`]}
                            width={20}
                            height={20}
                            className="mr-2 aspect-video"
                          />

                          <span>{country[`name_${locale}`]}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="age_range"
          render={({ field }) => (
            <FormItem className="flex">
              <FormLabel className="mr-2 mt-5">{t("age")}</FormLabel>
              <FormControl>
                <Select
                  value={field.value.toString()} // Convert number to string
                  onValueChange={(value) => field.onChange(Number(value))} // Convert string to number
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">0 - 17</SelectItem>
                    <SelectItem value="1">18 - 24</SelectItem>
                    <SelectItem value="2">25 - 30</SelectItem>
                    <SelectItem value="3">31 - 40</SelectItem>
                    <SelectItem value="4">41+</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem className="flex ">
              <FormLabel className="mr-2 mt-5">{t("gender")}</FormLabel>
              <FormControl>
                <Select
                  value={field.value.toString()}
                  onValueChange={(value) => field.onChange(Number(value))}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">Female</SelectItem>
                    <SelectItem value="1">Male</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="bg-gray-400 px-2 py-1 mt-5  text-white rounded  "
        >
          {p("title")}
        </Button>
      </form>
    </Form>
  );
};

export default FormComponent;
