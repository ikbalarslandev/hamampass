import { NextRequest, NextResponse } from "next/server";
import { isExist, createReview } from "@/actions/review";

export async function GET(req: NextRequest) {
  try {
    const IsExists = await isExist(req);

    return NextResponse.json(IsExists);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch properties" },
      { status: 500 }
    );
  }
}

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
