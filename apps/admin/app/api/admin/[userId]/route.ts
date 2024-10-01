import { NextRequest, NextResponse } from "next/server";
import { findAdminsProperty } from "../../../../../web/actions/property";

export async function GET(req: NextRequest) {
  try {
    const properties = await findAdminsProperty(req);

    return NextResponse.json(properties);
  } catch (e) {
    return NextResponse.json(
      { error: "Failed to fetch property" + e },
      { status: 500 }
    );
  }
}
