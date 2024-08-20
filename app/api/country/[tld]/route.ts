import { NextRequest, NextResponse } from "next/server";
import { getCountryByTld } from "@/actions/country";

export async function GET(req: NextRequest) {
  try {
    const country = await getCountryByTld(req);

    return NextResponse.json(country);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch country" },
      { status: 500 }
    );
  }
}
