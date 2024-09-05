import { createBooking } from "@/actions/booking";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const review = await createBooking(req);

    return NextResponse.json(review);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create review" },
      { status: 500 }
    );
  }
}
