import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const address = searchParams.get("address");

  if (!address) {
    return NextResponse.json({ error: "Address is required" }, { status: 400 });
  }

  try {
    const response = await fetch(`https://app.buidlguidl.com/builders/${address}`, {
      method: "HEAD",
    });

    return NextResponse.json({ exists: response.status === 200 });
  } catch (error) {
    return NextResponse.json({ exists: false });
  }
}
