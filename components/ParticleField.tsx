"use client";
import { useEffect, useRef } from "react";

export default function ParticleField() {
 const ref = useRef<HTMLCanvasElement>(null);
 useEffect(() => {
 const c = ref.current;
 if (!c) return;
 const ctx = c.getContext("2d")!;
 let w = (c.width = window.innerWidth);
 let h = (c.height = window.innerHeight * 2.5);
 const pts = Array.from({ length: 60 }, () => ({
 x: Math.random() * w,
 y: Math.random() * h,
 vx: (Math.random() - 0.5) * 0.2,
 vy: (Math.random() - 0.5) * 0.2,
 r: Math.random() * 1.5 + 0.5,
 p: Math.random() * Math.PI * 2,
 }));
 let raf: number;
 const draw = () => {
 ctx.clearRect(0, 0, w, h);
 pts.forEach((n) => {
 n.x += n.vx;
 n.y += n.vy;
 n.p += 0.015;
 if (n.x < 0 || n.x > w) n.vx *= -1;
 if (n.y < 0 || n.y > h) n.vy *= -1;
 });
 for (let i = 0; i < pts.length; i++) {
 for (let j = i + 1; j < pts.length; j++) {
 const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
 if (d < 160) {
 ctx.beginPath();
 ctx.moveTo(pts[i].x, pts[i].y);
 ctx.lineTo(pts[j].x, pts[j].y);
 ctx.strokeStyle = `rgba(59,130,246,${(1 - d / 160) * 0.06})`;
 ctx.lineWidth = 0.5;
 ctx.stroke();
 }
 }
 }
 pts.forEach((n) => {
 const g = Math.sin(n.p) * 0.4 + 0.6;
 ctx.beginPath();
 ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
 ctx.fillStyle = `rgba(59,130,246,${g * 0.3})`;
 ctx.fill();
 });
 raf = requestAnimationFrame(draw);
 };
 draw();
 const rs = () => {
 w = c.width = window.innerWidth;
 h = c.height = window.innerHeight * 2.5;
 };
 window.addEventListener("resize", rs);
 return () => {
 cancelAnimationFrame(raf);
 window.removeEventListener("resize", rs);
 };
 }, []);
 return (
 <canvas
 ref={ref}
 style={{
 position: "fixed",
 inset: 0,
 width: "100%",
 height: "100%",
 zIndex: 0,
 pointerEvents: "none",
 opacity: 0.7,
 }}
 />
 );
}
