import { ImageResponse } from "next/og";

export const alt = "Andrew Gooding — AI integrations for small businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0c0c0d",
          color: "#f1ede1",
          padding: 80,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "#7ad7ff",
              color: "#0a0a0a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              fontStyle: "italic",
            }}
          >
            A
          </div>
          <div
            style={{
              fontSize: 22,
              color: "rgba(241,237,225,0.72)",
              fontFamily: "system-ui, sans-serif",
              letterSpacing: 1,
            }}
          >
            Andrew Gooding
          </div>
        </div>
        <div
          style={{
            fontSize: 92,
            lineHeight: 0.98,
            letterSpacing: -2,
            maxWidth: 980,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Practical AI for</span>
          <span>
            the businesses that{" "}
            <span style={{ color: "#7ad7ff", fontStyle: "italic" }}>
              actually run
            </span>
          </span>
          <span>the world.</span>
        </div>
        <div
          style={{
            fontSize: 18,
            color: "rgba(241,237,225,0.5)",
            letterSpacing: 4,
            textTransform: "uppercase",
            fontFamily: "ui-monospace, monospace",
          }}
        >
          Strategy · Custom GPTs · Ops automation · Training
        </div>
      </div>
    ),
    { ...size },
  );
}
