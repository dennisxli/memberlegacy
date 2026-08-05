import { ImageResponse } from "next/og";

export const alt = "Member Legacy — Loyalty that outlives the transaction";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#173a32",
          color: "#f8f2e8",
          padding: "68px 76px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 28 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#c69b63",
              color: "#173a32",
              fontWeight: 700,
            }}
          >
            M
          </div>
          <div style={{ display: "flex" }}>Member Legacy</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 990 }}>
          <div style={{ fontSize: 76, lineHeight: 1.02, letterSpacing: -3 }}>
            Turn membership into something families remember.
          </div>
          <div style={{ fontSize: 25, marginTop: 34, color: "#c9d7cc" }}>
            A lasting loyalty benefit for membership brands.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
