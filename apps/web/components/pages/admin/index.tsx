"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { TProduct } from "@/types";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { request } from "@/services/axios";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { producPriceSchema } from "@/schemas";
import { convertAdminProductTypeInfo } from "@/utils/db_translations";

const createFormSchema = (products: TProduct[]) => {
  const shape = products.reduce((acc, product) => {
    acc[product.type] = producPriceSchema;
    return acc;
  }, {} as Record<string, z.ZodTypeAny>);

  return z.object(shape);
};

const AdminComponent = ({
  products,
  title,
  canEdit,
}: {
  products: TProduct[];
  canEdit: boolean;
  title: string;
}) => {
  const router = useRouter();
  const { locale } = useParams();
  const formSchema = createFormSchema(products);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: products.reduce((acc, product) => {
      acc[product.type] = {
        adult_price: product.adult_price || 0,
        child_price: product.child_price || 0,
      };
      return acc;
    }, {} as Record<string, { adult_price: number; child_price: number }>),
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    if (!canEdit) return;

    await request({
      type: "put",
      endpoint: "admin",
      payload: {
        updatedProdcuts: products.map((product) => ({
          ...product,
          ...data[product.type],
        })),
      },
    });

    router.push(`/${locale}/${title.replace(/\s/g, "-")}`);
    router.refresh();
  }

  return (
    <div className="bg-white p-8 ">
      <h1 className="text-xl font-semibold mb-4 text-cyan-600">{title}</h1>
      <h2 className="text-2xl font-semibold mb-4 text-cyan-500">
        Fiyat Güncelleme Ekranı
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {products.map((product) => {
            const convert = convertAdminProductTypeInfo(product.type);
            return (
              <div
                key={product.type}
                className="border rounded-lg p-4 bg-gray-50 shadow-sm"
              >
                <h2 className="text-xl font-medium text-cyan-600">
                  {convert?.title}
                </h2>
                <p className="text-gray-600 mb-4">{convert?.description}</p>

                <FormField
                  control={form.control}
                  name={`${product.type}.adult_price`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">
                        Yetişkin Fiyatı
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Fiyat Giriniz..."
                          {...field}
                          className="border-cyan-300 w-28   ml-2 focus:border-cyan-500 placeholder:text-sm"
                          onChange={(e) =>
                            field.onChange(parseInt(e.target.value) || null)
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`${product.type}.child_price`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">
                        Çocuk Fiyatı
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Fiyat Giriniz..."
                          {...field}
                          className="border-cyan-300 w-28  ml-2 focus:border-cyan-500 placeholder:text-sm"
                          onChange={(e) =>
                            field.onChange(parseInt(e.target.value) || null)
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            );
          })}
          <Button
            type="submit"
            className="bg-cyan-500 text-white hover:bg-cyan-600  focus:ring-2 focus:ring-cyan-500 w"
          >
            Fiyatları Güncelle
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AdminComponent;
