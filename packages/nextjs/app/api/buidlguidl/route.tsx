import { NextResponse } from "next/server";

// Utility function to validate Ethereum address
const isValidEthereumAddress = (address: string) => {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const address = searchParams.get("address");

  // Validate the address
  if (!address || !isValidEthereumAddress(address)) {
    return NextResponse.json({ error: "Invalid or missing address" }, { status: 400 });
  }

  try {
    const response = await fetch(`https://app.buidlguidl.com/builders/${address}`, {
      method: "HEAD",
    });

    if (!response.ok) {
      // Log the error for monitoring
      console.error(`Error fetching data for address ${address}: ${response.statusText}`);
      return NextResponse.json({ exists: false }, { status: 404 });
    }

    return NextResponse.json({ exists: response.status === 200 });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
