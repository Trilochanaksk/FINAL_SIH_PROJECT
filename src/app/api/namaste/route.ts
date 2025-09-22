import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q") || "";
  const system = searchParams.get("system");

  const apiKey = process.env.NAMASTE_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Missing NAMASTE_API_KEY in environment" }, { status: 500 });
  }

  // The x-api-key for this API seems to be incorrect based on common practice.
  // APIs typically use 'Authorization': 'Bearer <key>' or a custom header.
  // Using 'x-api-key' as specified in the original code. If issues persist,
  // this might be the area to investigate with the API provider.
  const searchUrl = `https://api.namaste.gov.in/search?q=${encodeURIComponent(q)}${
    system ? `&system=${system}` : ""
  }`;

  try {
    const response = await fetch(searchUrl, {
      headers: {
        "x-api-key": apiKey,
        "Accept": "application/json",
      },
      cache: "no-store", 
    });

    if (!response.ok) {
      const text = await response.text();
      console.error(`NAMASTE API error: ${response.status} ${text}`);
      return NextResponse.json({ error: `Failed to fetch from NAMASTE API: ${text}` }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (err: any) {
    console.error("NAMASTE API fetch failed:", err);
    return NextResponse.json({ error: err.message || "Fetch failed" }, { status: 500 });
  }
}
