import { NextRequest, NextResponse } from "next/server";
import prisma from "@hamampass/db";
import {
  filterByKeys,
  filterByAmenity,
  filterBySex,
  sortProperties,
  sortReviews,
  filterByRange,
  paginate,
} from "./pure";
import { pipe } from "ramda";
import { TProperty } from "@/types";
import { tr } from "date-fns/locale";

async function getAllProperties(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "5");
  const sort = searchParams.get("sort");
  const review = searchParams.get("review");
  const amenity = searchParams.get("amenity");
  const sex = searchParams.get("sex");
  const range = searchParams.get("range");

  // Collect all other filters
  const filters: Record<string, string | string[]> = {};
  searchParams.forEach((value, key) => {
    if (
      !["page", "limit", "sort", "amenity", "sex", "range", "review"].includes(
        key
      )
    ) {
      filters[key] = value;
    }
  });

  try {
    const properties = (await prisma.property.findMany({
      include: {
        rating: true,
        products: true,
        amenity: true,
      },
    })) as unknown as TProperty[];

    const filterAndSortAndPaginate = pipe(
      filterByKeys(filters),
      filterByAmenity(amenity),
      filterBySex(sex),
      sortProperties(sort),
      sortReviews(review),
      filterByRange(range),
      paginate({ page, limit })
    );

    const data = filterAndSortAndPaginate(properties);

    const result = {
      all_items: data.length,
      page,
      max_page: Math.ceil(properties.length / limit),
      limit,
      data,
    };

    console.log("result", result);
    return result;
  } catch (error) {
    console.error("Failed to fetch properties:", error);
    return NextResponse.json(
      { error: "Failed to fetch properties" },
      { status: 500 }
    );
  }
}

export default getAllProperties;
