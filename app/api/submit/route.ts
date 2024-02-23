import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const data = await req.json();

    const response = await fetch(
      "https://api.airtable.com/v0/appiQwkJeriH8srVq/Entries",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fields: data, typecast: true }), // Airtable expects a "fields" object
      },
    );

    return NextResponse.json({ fields: data, typecast: true }, { status: 200 });
  } catch (error) {
    console.log(error); // ---> I want to see what this prints server side, in your terminal
    const message = error instanceof Error ? error.message : "Unexpected Error";
    return NextResponse.json({ message }, { status: 500 });
  }
}
