"use client";
import { useEffect, useRef, useState } from "react";

interface Props {
  text: string;
  ready?: boolean;
  delay?: number;
  speed?: number;
  className?: string;
}

export default function TypingText({
  text,
  ready = true,
  delay = 800,
  speed = 75,
  className,
}: Props) {
  const [displayed, setDisplayed] = useState("");
  const [cursorOn, setCursorOn] = useState(false);
  const [done, setDone] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!ready) return;
    setCursorOn(true);

    const start = setTimeout(() => {
      let i = 0;
      intervalRef.current = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(intervalRef.current!);
          setDone(true);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(start);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready]);

  // After typing: blink 4 cycles then hide
  useEffect(() => {
    if (!done) return;
    let count = 0;
    const blink = setInterval(() => {
      setCursorOn((v) => !v);
      if (++count >= 8) {
        clearInterval(blink);
        setCursorOn(false);
      }
    }, 400);
    return () => clearInterval(blink);
  }, [done]);

  return (
    <span className={className}>
      <span aria-hidden="true">
        {displayed}
        <span
          className="inline-block w-[3px] h-[0.85em] bg-current align-middle ml-[2px]"
          style={{ opacity: cursorOn ? 1 : 0, transition: "opacity 0.1s" }}
        />
      </span>
      <span className="sr-only">{text}</span>
    </span>
  );
}
