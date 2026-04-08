"use client";
import { C } from "../lib/constants";

interface ButtonProps {
 primary: boolean;
 text: string;
 onClick?: () => void;
}

export default function Button({ primary, text, onClick }: ButtonProps) {
 return (
 <button
 onClick={onClick}
 style={{
 background: primary
 ? `linear-gradient(135deg, ${C.blue}, ${C.indigo})`
 : "transparent",
 border: primary ? "none" : "1px solid rgba(255,255,255,0.1)",
 color: primary ? "#fff" : C.gray,
 fontWeight: 600,
 fontSize: 15,
 padding: "14px 32px",
 borderRadius: 12,
 cursor: "pointer",
 fontFamily: "'Plus Jakarta Sans', sans-serif",
 boxShadow: primary ? "0 8px 32px rgba(59,130,246,0.25)" : "none",
 transition: "all 0.2s",
 }}
 >
 {text}
 </button>
 );
}
