import { NextRequest, NextResponse } from "next/server";
import { getReviewsForProperty } from "@/actions/review";

export async function GET(req: NextRequest) {
  try {
    const reviews = await getReviewsForProperty(req);

    return NextResponse.json(reviews);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch reviews" },
      { status: 500 }
    );
  }
}
