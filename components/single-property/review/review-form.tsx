"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { DrawerClose } from "@/components/ui/drawer";

const formSchema = z.object({
  rate: z.string().min(1).max(1), // Adjusted to string because Select values are strings
  comment: z.string().min(1).max(200),
});

const ReviewFormComponent = ({ id }: { id: string }) => {
  const session = useSession();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rate: "5",
      comment: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const req = {
      comment: values.comment,
      rate: parseInt(values.rate),
      propertyId: id,
      name: session?.data?.user?.name,
      email: session?.data?.user?.email,
      img: session?.data?.user?.image,
    };

    await request({
      type: "post",
      endpoint: "review",
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
          name="rate"
          render={({ field }) => (
            <FormItem className="flex">
              <FormLabel className="mr-2 mt-5">Rate</FormLabel>
              <FormControl>
                <Select
                  value={field.value}
                  onValueChange={(value) => field.onChange(value)}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Rate" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mr-2">Comment</FormLabel>
              <FormControl>
                <Textarea placeholder="Your comment..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <DrawerClose
          type="submit"
          className="bg-gray-400 px-2 py-1 text-white rounded mt-5"
        >
          Submit
        </DrawerClose>
      </form>
    </Form>
  );
};

export default ReviewFormComponent;
