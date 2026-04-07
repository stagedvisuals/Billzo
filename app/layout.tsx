import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
 title: "Billzo — Van PDF naar Peppol in seconden",
 description: "Upload je PDF-factuur, AI leest alles automatisch, download UBL 2.1 XML of verzend direct via Peppol. De simpelste e-facturatie tool van Nederland.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
 return (
 <html lang="nl">
 <body>{children}</body>
 </html>
 );
}
