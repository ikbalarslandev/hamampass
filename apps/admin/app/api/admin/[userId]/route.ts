import { NextRequest, NextResponse } from "next/server";
import { findAdminsProperty } from "@/actions/property";

export async function GET(req: NextRequest) {
  try {
    const properties = await findAdminsProperty(req);

    return NextResponse.json(properties);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch property" },
      { status: 500 }
    );
  }
}
