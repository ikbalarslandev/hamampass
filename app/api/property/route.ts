import { NextRequest, NextResponse } from "next/server";
import { getAllProperties, createProperty } from "@/actions/property";

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

export async function POST(req: NextRequest) {
  try {
    const property = await createProperty(req);

    return NextResponse.json(property);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create property" },
      { status: 500 }
    );
  }
}
