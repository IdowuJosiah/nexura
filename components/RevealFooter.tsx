"use client";

import { useEffect, useRef, useState } from "react";

// Pins the footer behind the page so the content slides up to uncover it.
// Falls back to a normal footer when it's too tall for the screen (e.g. phones).
export default function RevealFooter({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const h = el.offsetHeight;
      setHeight(h);
      setReveal(h <= window.innerHeight * 0.85);
    };
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    update();
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <>
      {reveal && <div aria-hidden="true" style={{ height }} />}
      <div ref={ref} className={reveal ? "fixed inset-x-0 bottom-0 z-0" : "relative"}>
        {children}
      </div>
    </>
  );
}
