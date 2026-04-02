import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    <div
      style={{
        background: "#1E2B36",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "80px 100px",
        position: "relative",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Outer border frame */}
      <div
        style={{
          display: "flex",
          position: "absolute",
          inset: "40px",
          border: "1px solid #384959",
        }}
      />

      {/* Top-right: domain */}
      <div
        style={{
          display: "flex",
          position: "absolute",
          top: "56px",
          right: "72px",
          fontSize: "12px",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          fontWeight: 700,
          color: "#6A89A7",
        }}
      >
        rimanafougui.com
      </div>

      {/* Main content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "700px",
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            fontSize: "11px",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            fontWeight: 800,
            color: "#6A89A7",
            marginBottom: "28px",
          }}
        >
          Software Developer
        </div>

        {/* Name */}
        <div
          style={{
            display: "flex",
            fontSize: "84px",
            fontWeight: 800,
            color: "#BDDDFC",
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
          }}
        >
          Rima
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "84px",
            fontWeight: 800,
            color: "#BDDDFC",
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
            marginBottom: "32px",
          }}
        >
          Nafougui
        </div>

        {/* Accent rule */}
        <div
          style={{
            display: "flex",
            width: "72px",
            height: "3px",
            background: "#88BDF2",
            marginBottom: "32px",
          }}
        />

        {/* Specialties */}
        <div
          style={{
            display: "flex",
            fontSize: "20px",
            fontWeight: 500,
            color: "#6A89A7",
            lineHeight: 1.6,
          }}
        >
          Full-Stack · Data Engineering · AI
        </div>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "32px",
            flexWrap: "wrap",
          }}
        >
          {["Next.js", "Python", "TypeScript", "RAG"].map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                fontSize: "10px",
                fontWeight: 800,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#88BDF2",
                border: "1px solid #384959",
                padding: "6px 14px",
                borderRadius: "999px",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>

      {/* Right side decorative R. */}
      <div
        style={{
          display: "flex",
          position: "absolute",
          right: "100px",
          top: "50%",
          fontSize: "180px",
          fontWeight: 800,
          color: "#384959",
          lineHeight: 1,
          letterSpacing: "-0.04em",
          marginTop: "-90px",
        }}
      >
        R.
      </div>
    </div>,
    {
      ...size,
    },
  );
}
