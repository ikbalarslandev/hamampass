import { NextRequest } from "next/server";
import prisma from "@/prisma/db";
import { TProduct } from "@/types";

const updatePrices = async (req: NextRequest) => {
  const { updatedProdcuts } = await req.json();

  try {
    await Promise.all(
      updatedProdcuts.map(async (product: TProduct) => {
        return prisma.product.update({
          where: {
            id: product.id,
          },
          data: {
            adult_price: product.adult_price,
            child_price: product.child_price,
          },
        });
      })
    );

    return updatedProdcuts;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to update prices");
  }
};

export default updatePrices;
