import { ImageResponse } from "next/og";

export const alt = "PetzName — Pet Name Generator";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "82px", background: "linear-gradient(135deg, #ffe9b8, #dff2fa)", color: "#123653" }}><div style={{ fontSize: 34, letterSpacing: 5, color: "#518ca8" }}>PETZNAME</div><div style={{ fontSize: 78, lineHeight: 1.05, marginTop: 24, fontWeight: 800 }}>Generate meaningful names for your pet.</div><div style={{ fontSize: 32, marginTop: 28, color: "#244b63" }}>AI-powered pet names, personalized with meaning.</div></div>, size);
}
