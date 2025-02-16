import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function og({ params }: { params: { id: string } }) {
  try {
    const credentials = await fetch(`${process.env.NEXT_PUBLIC_BASECAMP_API}/credentials/${params.id}`);
    const data = await credentials.json();
    const metadata = await fetch(data.tokenURI).then(res => res.json());

    return new ImageResponse(
      (
        <div
          style={{
            background: "linear-gradient(to bottom right, #1a1a1a, #2d1b4e)",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <img
              src={metadata.image}
              alt={metadata.name}
              style={{
                width: "400px",
                height: "400px",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
            <h1
              style={{
                fontSize: "48px",
                color: "white",
                textAlign: "center",
              }}
            >
              {metadata.name}
            </h1>
          </div>
        </div>
      ),
      size,
    );
  } catch (e) {
    return new ImageResponse(
      (
        <div
          style={{
            background: "linear-gradient(to bottom right, #1a1a1a, #2d1b4e)",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px",
          }}
        >
          <h1 style={{ color: "white", fontSize: "48px" }}>The Graph Builders Basecamp NFT</h1>
        </div>
      ),
      size,
    );
  }
}
