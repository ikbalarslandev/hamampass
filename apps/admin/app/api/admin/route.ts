import { NextRequest, NextResponse } from "next/server";
import { updatePrices } from "@/actions/property";

export async function PUT(req: NextRequest) {
  try {
    const properties = await updatePrices(req);

    return NextResponse.json(properties);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch property" },
      { status: 500 }
    );
  }
}
