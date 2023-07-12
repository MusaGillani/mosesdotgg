"use client";

import { useState, useEffect, useRef } from "react";

export default function useComponentSize() {
  const [contentMaxHeight, setMaxH] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    function calMaxH() {
      ref.current != null && setMaxH(ref.current.clientHeight + 10);
    }
    calMaxH();
    window.addEventListener("resize", () => calMaxH());

    return () => window.removeEventListener("resize", () => calMaxH());
  }, [ref, contentMaxHeight]);

  return [ref, contentMaxHeight] as const;
}
