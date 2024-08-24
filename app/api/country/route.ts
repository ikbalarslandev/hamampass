import { getCountries, createCountry } from "@/actions/country";
import { NextResponse, NextRequest } from "next/server";

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

export async function POST(req: NextRequest) {
  try {
    const country = await createCountry(req);

    return NextResponse.json(country);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create country" },
      { status: 500 }
    );
  }
}
