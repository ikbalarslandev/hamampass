import { NextRequest, NextResponse } from "next/server";
import { createReview } from "@/actions/review";

export async function POST(req: NextRequest) {
  try {
    const review = await createReview(req);

    return NextResponse.json(review);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create review" },
      { status: 500 }
    );
  }
}
