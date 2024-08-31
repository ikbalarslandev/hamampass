import { z } from "zod";

const producPriceSchema = z.object({
  adult_price: z
    .number()
    .min(0, { message: "Fiyat negatif olamaz" })
    .nullable(),
  child_price: z
    .number()
    .min(0, { message: "Fiyat negatif olamaz" })
    .nullable(),
});

export { producPriceSchema };
