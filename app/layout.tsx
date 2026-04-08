import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
 title: "PeppolPro — Van PDF naar Peppol in seconden",
 description: "Upload je PDF-factuur, AI leest alles automatisch, download UBL 2.1 XML of verzend direct via Peppol. De simpelste e-facturatie tool van Nederland.",
 keywords: ["peppolpro", "peppol", "e-facturatie", "ubl", "pdf naar peppol", "factuur converter", "nederland", "belgie"],
 openGraph: {
 title: "PeppolPro — Van PDF naar Peppol in seconden",
 description: "Upload je PDF-factuur, AI leest alles, download UBL of verzend via Peppol.",
 type: "website",
 locale: "nl_NL",
 },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
 return (
 <html lang="nl">
 <body>{children}</body>
 </html>
 );
}
