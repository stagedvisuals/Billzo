import { ParsedInvoice } from "./invoice-parser";

function esc(val: string | null | undefined): string {
 if (!val) return "";
 return val.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function today(): string {
 return new Date().toISOString().split("T")[0];
}

export function generateUBL(data: ParsedInvoice): string {
 const inv = data.invoice;
 const seller = data.seller;
 const buyer = data.buyer;

 const linesXml = data.lines
 .map(
 (line, i) => 
 `<cac:InvoiceLine>
 <cbc:ID>${i + 1}</cbc:ID>
 <cbc:InvoicedQuantity unitCode="C62">${line.quantity}</cbc:InvoicedQuantity>
 <cbc:LineExtensionAmount currencyID="${esc(inv.currency)}">${line.unit_price * line.quantity}</cbc:LineExtensionAmount>
 <cac:Item>
 <cbc:Name>${esc(line.description)}</cbc:Name>
 <cac:ClassifiedTaxCategory>
 <cbc:ID>S</cbc:ID>
 <cbc:Percent>${line.vat_rate}</cbc:Percent>
 <cac:TaxScheme><cbc:ID>VAT</cbc:ID></cac:TaxScheme>
 </cac:ClassifiedTaxCategory>
 </cac:Item>
 <cac:Price>
 <cbc:PriceAmount currencyID="${esc(inv.currency)}">${line.unit_price}</cbc:PriceAmount>
 </cac:Price>
 </cac:InvoiceLine>`
 )
 .join("\n");

 return `<?xml version="1.0" encoding="UTF-8"?>
<Invoice xmlns="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2"
 xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2"
 xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2">
 <cbc:CustomizationID>urn:cen.eu:en16931:2017#compliant#urn:fdc:peppol.eu:2017:poacc:billing:3.0</cbc:CustomizationID>
 <cbc:ProfileID>urn:fdc:peppol.eu:2017:poacc:billing:01:1.0</cbc:ProfileID>
 <cbc:ID>${esc(inv.number)}</cbc:ID>
 <cbc:IssueDate>${esc(inv.date) || today()}</cbc:IssueDate>
 <cbc:DueDate>${esc(inv.due_date) || ""}</cbc:DueDate>
 <cbc:InvoiceTypeCode>380</cbc:InvoiceTypeCode>
 <cbc:DocumentCurrencyCode>${esc(inv.currency) || "EUR"}</cbc:DocumentCurrencyCode>
 <cac:AccountingSupplierParty>
 <cac:Party>
 <cac:PartyName><cbc:Name>${esc(seller.name)}</cbc:Name></cac:PartyName>
 <cac:PostalAddress>
 <cbc:StreetName>${esc(seller.address)}</cbc:StreetName>
 <cbc:CityName>${esc(seller.city)}</cbc:CityName>
 <cbc:PostalZone>${esc(seller.postal_code)}</cbc:PostalZone>
 <cac:Country><cbc:IdentificationCode>${esc(seller.country)}</cbc:IdentificationCode></cac:Country>
 </cac:PostalAddress>
 <cac:PartyTaxScheme>
 <cbc:CompanyID>${esc(seller.btw_number)}</cbc:CompanyID>
 <cac:TaxScheme><cbc:ID>VAT</cbc:ID></cac:TaxScheme>
 </cac:PartyTaxScheme>
 <cac:PartyLegalEntity>
 <cbc:RegistrationName>${esc(seller.name)}</cbc:RegistrationName>
 <cbc:CompanyID>${esc(seller.kvk_number)}</cbc:CompanyID>
 </cac:PartyLegalEntity>
 </cac:Party>
 </cac:AccountingSupplierParty>
 <cac:AccountingCustomerParty>
 <cac:Party>
 <cac:PartyName><cbc:Name>${esc(buyer.name)}</cbc:Name></cac:PartyName>
 <cac:PostalAddress>
 <cbc:StreetName>${esc(buyer.address)}</cbc:StreetName>
 <cbc:CityName>${esc(buyer.city)}</cbc:CityName>
 <cbc:PostalZone>${esc(buyer.postal_code)}</cbc:PostalZone>
 <cac:Country><cbc:IdentificationCode>${esc(buyer.country)}</cbc:IdentificationCode></cac:Country>
 </cac:PostalAddress>
 <cac:PartyTaxScheme>
 <cbc:CompanyID>${esc(buyer.btw_number)}</cbc:CompanyID>
 <cac:TaxScheme><cbc:ID>VAT</cbc:ID></cac:TaxScheme>
 </cac:PartyTaxScheme>
 <cac:PartyLegalEntity>
 <cbc:RegistrationName>${esc(buyer.name)}</cbc:RegistrationName>
 </cac:PartyLegalEntity>
 </cac:Party>
 </cac:AccountingCustomerParty>
 ${linesXml}
 <cac:TaxTotal>
 <cbc:TaxAmount currencyID="${esc(inv.currency) || "EUR"}">${data.totals.total_vat}</cbc:TaxAmount>
 </cac:TaxTotal>
 <cac:LegalMonetaryTotal>
 <cbc:LineExtensionAmount currencyID="${esc(inv.currency) || "EUR"}">${data.totals.subtotal}</cbc:LineExtensionAmount>
 <cbc:TaxExclusiveAmount currencyID="${esc(inv.currency) || "EUR"}">${data.totals.subtotal}</cbc:TaxExclusiveAmount>
 <cbc:TaxInclusiveAmount currencyID="${esc(inv.currency) || "EUR"}">${data.totals.total}</cbc:TaxInclusiveAmount>
 <cbc:PayableAmount currencyID="${esc(inv.currency) || "EUR"}">${data.totals.total}</cbc:PayableAmount>
 </cac:LegalMonetaryTotal>
</Invoice>`;
}
