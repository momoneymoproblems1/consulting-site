"use client";

import {
  useEffect,
  useState,
  type ReactNode,
  type CSSProperties,
  type ElementType,
} from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
}

export function Reveal({
  children,
  delay = 0,
  as: As = "div",
  className = "",
  style,
}: RevealProps) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    let raf2: number | undefined;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setShown(true));
    });
    return () => {
      cancelAnimationFrame(raf1);
      if (raf2 !== undefined) cancelAnimationFrame(raf2);
    };
  }, []);

  const cls = `reveal ${shown ? "in" : ""} ${className}`.trim();
  const merged = { ...style, "--d": `${delay}ms` } as CSSProperties;
  return (
    <As className={cls} style={merged}>
      {children}
    </As>
  );
}
