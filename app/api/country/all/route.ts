import { NextRequest, NextResponse } from "next/server";
import { createManyCountries } from "@/actions/country";

export async function POST(req: NextRequest) {
  try {
    const country = await createManyCountries(req);

    return NextResponse.json(country);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create country" },
      { status: 500 }
    );
  }
}
