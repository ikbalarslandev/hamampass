import { NextRequest, NextResponse } from "next/server";
import { getProperty } from "@/actions/admin";

export async function GET(req: NextRequest) {
  try {
    const property = await getProperty(req);

    return NextResponse.json(property);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch property" },
      { status: 500 }
    );
  }
}
