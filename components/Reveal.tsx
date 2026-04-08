"use client";
import { useState, useEffect, useRef, ReactNode } from "react";

interface RevealProps {
 children: ReactNode;
 delay?: number;
 style?: React.CSSProperties;
}

export default function Reveal({ children, delay = 0, style = {} }: RevealProps) {
 const [visible, setVisible] = useState(false);
 const ref = useRef<HTMLDivElement>(null);
 useEffect(() => {
 const el = ref.current;
 if (!el) return;
 const obs = new IntersectionObserver(
 ([entry]) => entry.isIntersecting && setVisible(true),
 { threshold: 0.12 }
 );
 obs.observe(el);
 return () => obs.disconnect();
 }, []);
 return (
 <div
 ref={ref}
 style={{
 opacity: visible ? 1 : 0,
 transform: visible ? "translateY(0)" : "translateY(28px)",
 transition: `all 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
 ...style,
 }}
 >
 {children}
 </div>
 );
}
