import { NextRequest, NextResponse } from "next/server";

import { registrationSchema } from "@/types/registrationSchema";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const parsed = registrationSchema.safeParse(data);

  if (parsed.success) {
    // Add parsed.data to the database
    return NextResponse.json({ message: "User registered", user: parsed.data });
  } else {
    return NextResponse.json(
      {
        message: "Invalid data",
        error: parsed.error,
      },
      {
        status: 400,
      }
    );
  }
}
