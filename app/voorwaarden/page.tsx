import { C } from "../../lib/constants";

export default function TermsPage() {
 const h2 = { fontSize: 20, fontWeight: 700 as const, marginTop: 32, marginBottom: 12, color: "#f8fafc" };
 const p = { fontSize: 14, color: "#94a3b8", lineHeight: 1.8, marginBottom: 12 };
 const li = { fontSize: 14, color: "#94a3b8", lineHeight: 1.8, marginBottom: 6, paddingLeft: 8 };

 return (
 <div style={{ background: "#020617", minHeight: "100vh", fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#f8fafc" }}>
 <div style={{ maxWidth: 700, margin: "0 auto", padding: "100px 24px 60px" }}>
 <a href="/" style={{ fontSize: 13, color: "#475569", textDecoration: "none", marginBottom: 20, display: "block" }}>← Terug naar home</a>
 <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8 }}>Algemene voorwaarden</h1>
 <p style={{ fontSize: 13, color: "#475569", marginBottom: 32 }}>Laatst bijgewerkt: april 2026</p>

 <h2 style={h2}>1. Toepasselijkheid</h2>
 <p style={p}>Deze voorwaarden zijn van toepassing op alle diensten van PeppolPro, een product van SynqLayer. Door gebruik te maken van onze dienst ga je akkoord met deze voorwaarden.</p>

 <h2 style={h2}>2. Diensten</h2>
 <p style={p}>PeppolPro biedt een platform voor het converteren van PDF-facturen naar UBL 2.1 XML (Peppol-compliant). Wij garanderen geen 100% nauwkeurigheid van de AI-verwerking en adviseren gebruikers de output te controleren.</p>

 <h2 style={h2}>3. Account</h2>
 <p style={p}>Je bent zelf verantwoordelijk voor de veiligheid van je account en wachtwoord. Wij mogen je account opschorten of beëindigen bij misbruik of schending van deze voorwaarden.</p>

 <h2 style={h2}>4. Betalingen</h2>
 <p style={p}>Abonnementen worden maandelijks of jaarlijks gefactureerd, vooraf betaald. Geen restitutie bij voortijdige opzegging. Losse facturen: €1,95 per conversie.</p>

 <h2 style={h2}>5. Intellectueel eigendom</h2>
 <p style={p}>Het platform en de software zijn eigendom van SynqLayer. Je behoudt alle rechten op je geüploade facturen en gegenereerde UBL-bestanden.</p>

 <h2 style={h2}>6. Aansprakelijkheid</h2>
 <p style={p}>Onze aansprakelijkheid is beperkt tot de abonnementskosten van de afgelopen 12 maanden. Wij zijn niet aansprakelijk voor indirecte schade, gegevensverlies of fiscale gevolgen.</p>

 <h2 style={h2}>7. Opzegging</h2>
 <p style={p}>Je kunt je abonnement elk moment opzeggen via je account. De dienst loopt door tot het einde van de betaalde periode.</p>

 <h2 style={h2}>8. Wijzigingen</h2>
 <p style={p}>Wij kunnen deze voorwaarden wijzigen. Grote wijzigingen communiceren we 30 dagen van tevoren via e-mail.</p>

 <h2 style={h2}>9. Toepasselijk recht</h2>
 <p style={p}>Nederlands recht is van toepassing. Geschillen vallen onder de bevoegdheid van de rechtbank Amsterdam.</p>

 <h2 style={h2}>10. Contact</h2>
 <p style={p}>Voor vragen over deze voorwaarden: legal@synqlayer.com</p>
 </div>
 </div>
 );
}
