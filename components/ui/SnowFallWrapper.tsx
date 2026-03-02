"use client";
import Snowfall from "react-snowfall";

export default function SnowfallWrapper() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 50,
      }}
    >
      <Snowfall
        color="#aaaaaa"
        snowflakeCount={120}
        radius={[0.5, 1.5]}
        speed={[0.2, 0.8]}
        wind={[-0.5, 1.0]}
        opacity={[0.2, 0.6]}
      />
    </div>
  );
}
