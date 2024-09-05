import { NextRequest, NextResponse } from "next/server";
import { findMyBookings } from "@/actions/booking";

export async function GET(req: NextRequest) {
  try {
    const booking = await findMyBookings(req);

    return NextResponse.json(booking);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch booking" },
      { status: 500 }
    );
  }
}
