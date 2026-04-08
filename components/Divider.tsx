"use client";
import { C } from "../lib/constants";

export default function Divider() {
 return (
 <div
 style={{
 height: 1,
 background: `linear-gradient(90deg, transparent, ${C.blue}15, transparent)`,
 }}
 />
 );
}
