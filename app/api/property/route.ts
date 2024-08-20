import { NextRequest, NextResponse } from "next/server";
import { getAllProperties } from "@/actions/property";

export async function GET(req: NextRequest) {
  try {
    const properties = await getAllProperties(req);

    return NextResponse.json(properties);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch properties" },
      { status: 500 }
    );
  }
}
