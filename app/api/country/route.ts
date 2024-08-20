import { getCountries } from "@/actions/country";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const country = await getCountries();

    return NextResponse.json(country);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch country" },
      { status: 500 }
    );
  }
}
