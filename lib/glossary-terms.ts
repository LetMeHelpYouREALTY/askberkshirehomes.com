export type GlossaryTerm = {
  slug: string;
  term: string;
  shortDefinition: string;
  body: string[];
  relatedSlugs?: string[];
};

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    slug: "sid-lid-assessment",
    term: "SID / LID assessment",
    shortDefinition:
      "A special assessment tied to infrastructure in a district—often paid monthly on top of your mortgage.",
    body: [
      "In Nevada, Special Improvement District (SID) and Local Improvement District (LID) assessments repay bonds for roads, utilities, landscaping, or other community infrastructure.",
      "Buyers should ask how much remains on the assessment, whether it transfers at sale, and how it appears on the closing statement. Sellers should disclose the assessment in the Seller Real Property Disclosure (SRPD) when it applies.",
      "Your lender includes the assessment in debt-to-income calculations when it is a recurring obligation.",
    ],
    relatedSlugs: ["seller-real-property-disclosure", "closing-costs"],
  },
  {
    slug: "seller-real-property-disclosure",
    term: "Seller Real Property Disclosure (SRPD)",
    shortDefinition:
      "Nevada’s standard seller disclosure form covering property condition, systems, and known material facts.",
    body: [
      "The SRPD is a written questionnaire completed by the seller about the home’s condition, alterations, water source, HOA status, and other items required by Nevada law and practice.",
      "It is not a home inspection. Buyers still hire an inspector to verify condition. The SRPD helps you decide what to investigate further before removing contingencies.",
      "Material omissions can create liability for sellers. Buyers should read the SRPD alongside HOA documents, assessment notices, and inspection reports.",
    ],
    relatedSlugs: ["hoa-resale-package", "sid-lid-assessment"],
  },
  {
    slug: "earnest-money",
    term: "Earnest money deposit",
    shortDefinition:
      "Good-faith funds held in escrow after offer acceptance; applied toward closing or handled per contract if the deal ends.",
    body: [
      "Earnest money shows the seller you are committed. In Las Vegas resale transactions, deposits are commonly held by a title company or escrow holder named in the purchase agreement.",
      "The contract defines when funds may be released to the seller if the buyer defaults, and when they return to the buyer if contingencies are not satisfied.",
      "Wire fraud is a real risk—always confirm wiring instructions by phone using a number you trust, not only by email.",
    ],
    relatedSlugs: ["escrow", "contingency"],
  },
  {
    slug: "hoa-resale-package",
    term: "HOA resale package",
    shortDefinition:
      "Documents from the homeowners association summarizing dues, rules, reserves, and litigation affecting the property.",
    body: [
      "When you buy in an HOA community, the resale package typically includes covenants, bylaws, budgets, meeting minutes, and a disclosure statement about fees and violations.",
      "Review dues, special assessments, rental restrictions, and parking rules before you remove contingencies. Your lender may also need the package for underwriting.",
      "Order timelines vary by association and management company—build extra days into your contract calendar in busy markets.",
    ],
    relatedSlugs: ["seller-real-property-disclosure", "contingency"],
  },
  {
    slug: "escrow",
    term: "Escrow",
    shortDefinition:
      "Neutral third party that holds funds and documents until all contract conditions are met for closing.",
    body: [
      "In Southern Nevada, escrow/title companies often coordinate signing, payoffs, and recording with the county.",
      "Escrow sends a preliminary settlement statement showing credits, debits, prorated taxes, and title charges. Compare it to your loan estimate and ask questions early.",
      "Earnest money, loan funds, and seller proceeds flow through escrow according to the written instructions all parties sign.",
    ],
    relatedSlugs: ["earnest-money", "closing-costs", "title-insurance"],
  },
  {
    slug: "title-insurance",
    term: "Title insurance",
    shortDefinition:
      "Insurance that protects against covered title defects recorded before the policy date.",
    body: [
      "Lenders require a lender’s title policy. Owners can purchase an owner’s policy for additional protection.",
      "Title work searches liens, easements, and prior deeds. Review the commitment for exceptions before closing.",
      "One-time premium at closing—unlike annual homeowners insurance.",
    ],
    relatedSlugs: ["escrow", "closing-costs"],
  },
  {
    slug: "contingency",
    term: "Contingency",
    shortDefinition:
      "A contract condition that must be satisfied—or waived—for the transaction to continue.",
    body: [
      "Common contingencies include inspection, appraisal, loan approval, and sale of a buyer’s current home.",
      "Each contingency has a deadline in the purchase agreement. Missing a deadline can waive your right to cancel without penalty.",
      "Sellers may prefer shorter contingency periods in competitive markets; buyers should only agree to timelines they can meet.",
    ],
    relatedSlugs: ["earnest-money", "hoa-resale-package"],
  },
  {
    slug: "closing-costs",
    term: "Closing costs",
    shortDefinition:
      "Fees paid at settlement beyond the purchase price—title, escrow, recording, prepaids, and lender charges.",
    body: [
      "Buyers and sellers both have closing costs. Who pays specific fees is negotiable and reflected on the settlement statement.",
      "Prepaids include property tax reserves and homeowners insurance. Loan-related costs appear on the closing disclosure from your lender.",
      "Ask for an estimate early so cash-to-close matches your budget.",
    ],
    relatedSlugs: ["escrow", "title-insurance", "sid-lid-assessment"],
  },
];

export function getGlossaryTerm(slug: string): GlossaryTerm | undefined {
  return GLOSSARY_TERMS.find((t) => t.slug === slug);
}
