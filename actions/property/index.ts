import { NextResponse, NextRequest } from "next/server";
import prisma from "@/prisma/db";
import {
  filterByKeys,
  filterByAmenity,
  filterBySex,
  sortProperties,
  filterByRange,
  paginate,
} from "./pure";
import { pipe } from "ramda";

async function getAllProperties(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "5");
  const sort = searchParams.get("sort");
  const amenity = searchParams.get("amenity");
  const sex = searchParams.get("sex");
  const range = searchParams.get("range");

  // Collect all other filters
  const filters: Record<string, string | string[]> = {};
  searchParams.forEach((value, key) => {
    if (!["page", "limit", "sort", "amenity", "sex", "range"].includes(key)) {
      filters[key] = value;
    }
  });

  try {
    const properties = await prisma.property.findMany({
      include: {
        price: true,
        rating: true,
        products: true,
      },
    });

    const filterAndSortAndPaginate = pipe(
      filterByKeys(filters),
      filterByAmenity(amenity),
      filterBySex(sex),
      sortProperties(sort),
      filterByRange(range),
      paginate(page, limit)
    );

    const data = filterAndSortAndPaginate(properties);

    const result = {
      all_items: data.length,
      page,
      max_page: Math.ceil(properties.length / limit),
      limit,
      data,
    };

    return result;
  } catch (error) {
    console.error("Failed to fetch properties:", error);
    return NextResponse.json(
      { error: "Failed to fetch properties" },
      { status: 500 }
    );
  }
}
const getPropertyByTitle = async (req: NextRequest) => {
  const url = new URL(req.url);
  const title = url.pathname.split("/").pop()?.replace(/-/g, " ") || "";

  const property = await prisma.property.findFirst({
    where: {
      title,
    },
    include: {
      contact: true,
      price: true,
      days: true,
      products: true,
      rating: true,
    },
  });

  return property;
};

export { getAllProperties, getPropertyByTitle };
