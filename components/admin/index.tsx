"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { TProduct } from "@/types";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const typeSchema = z.object({
  adult_price: z.number().min(0),
  child_price: z.number().min(0).nullable(),
});

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  "0": typeSchema,
});

const convertProductType = (type: number) => {
  switch (type) {
    case 0:
      return {
        title: "Basit Paket",
        description: "Sadece islak alan kullanımı extra hizmetler dahil değil",
      };
    case 1:
      return {
        title: "Standart Paket",
        description: "Islak alan kullanımı ek olarak kese köpük dahil",
      };
  }
};

const AdminComponent = ({
  products,
  canEdit,
}: {
  products: TProduct[];
  canEdit: boolean;
}) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      "0": {
        adult_price: 0,
        child_price: 0,
      },
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          {products.map((product) => {
            const convert = convertProductType(product.type);
            return (
              <div key={product.id}>
                <h2>{convert?.title}</h2>
                <p>{convert?.description}</p>
                <p>adult price : {product.adult_price}</p>
                <FormField
                  control={form.control}
                  name="0.adult_price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>adult price</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="price..."
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="0.child_price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>child price</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="price..."
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            );
          })}
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default AdminComponent;
