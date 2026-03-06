import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#fafaf9",
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
            position: "absolute",
            inset: "40px",
            border: "1px solid #e7e5e4",
          }}
        />

        {/* Top-right: domain */}
        <div
          style={{
            position: "absolute",
            top: "56px",
            right: "72px",
            fontSize: "12px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            fontWeight: 700,
            color: "#a8a29e",
          }}
        >
          rimanafougui.vercel.app
        </div>

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0px",
            maxWidth: "700px",
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              fontSize: "11px",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              fontWeight: 800,
              color: "#78716c",
              marginBottom: "28px",
            }}
          >
            Software Developer
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: "84px",
              fontWeight: 800,
              color: "#1c1917",
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
            }}
          >
            Rima
          </div>
          <div
            style={{
              fontSize: "84px",
              fontWeight: 800,
              color: "#1c1917",
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
              width: "72px",
              height: "3px",
              background: "#44403c",
              marginBottom: "32px",
            }}
          />

          {/* Specialties */}
          <div
            style={{
              fontSize: "20px",
              fontWeight: 500,
              color: "#57534e",
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
                  fontSize: "10px",
                  fontWeight: 800,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#44403c",
                  border: "1px solid #d6d3d1",
                  padding: "6px 14px",
                  borderRadius: "999px",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Right side decorative element */}
        <div
          style={{
            position: "absolute",
            right: "100px",
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0px",
          }}
        >
          <div
            style={{
              fontSize: "180px",
              fontWeight: 800,
              color: "#e7e5e4",
              lineHeight: 1,
              letterSpacing: "-0.04em",
            }}
          >
            R.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
