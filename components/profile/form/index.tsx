"use client";

import { TSessionUser } from "@/types";
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
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  nationality: z.string().min(2).max(2),
  age_range: z.number().min(0).max(4),
  gender: z.number().min(0).max(1),
});

const FormComponent = ({ user }: { user: TSessionUser }) => {
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

    window.location.reload();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-3"
      >
        <FormField
          control={form.control}
          name="nationality"
          render={({ field }) => (
            <FormItem className="flex">
              <FormLabel className="mr-2 mt-5">Nationality</FormLabel>
              <FormControl>
                <Select
                  value={field.value}
                  onValueChange={(value) => field.onChange(value)}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">USA</SelectItem>
                    <SelectItem value="tr">Turkey</SelectItem>
                    <SelectItem value="de">Germany</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                    <SelectItem value="nl">Netherlands</SelectItem>
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
              <FormLabel className="mr-2 mt-5">Age Range</FormLabel>
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
            <FormItem className="flex mb-12">
              <FormLabel className="mr-2 mt-5">Gender</FormLabel>
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
          className="bg-gray-400 px-2 py-1  text-white rounded my-5"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default FormComponent;
