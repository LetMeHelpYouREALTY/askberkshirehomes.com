// Site Configuration — askberkshirehomes.com (Nevada real estate terms glossary)

import { getSiteUrl } from "./site-url";

export const siteConfig = {
  name: "Ask Berkshire Homes",
  tagline: "Nevada real estate terms explained",
  /** Visible site title — no brokerage name in page titles or H1s */
  pageTitle: "Nevada Real Estate Terms Explained | Glossary",
  h1: "Nevada Real Estate Terms, Simply Explained",
  get url() {
    return getSiteUrl();
  },
  description:
    "Plain-language definitions for Nevada and Las Vegas real estate terms—SID and LID assessments, SRPD, earnest money, HOA resale packages, and more. By Dr. Jan Duffy, REALTOR®.",
  sisterSite: {
    label: "Ask Dr. Jan Duffy Las Vegas real estate questions",
    href: "https://askdrjanduffy.com",
  },
};

export const agentInfo = {
  name: "Dr. Jan Duffy",
  title: "REALTOR®",
  license: "S.0197614.LLC",
  phone: "(702) 842-1192",
  phoneFormatted: "(702) 842-1192",
  phoneTel: "tel:+17028421192",
  email: "info@askberkshirehomes.com",
  brokerage: "Berkshire Hathaway HomeServices Nevada Properties",
};

export const officeInfo = {
  name: "Berkshire Hathaway HomeServices Nevada Properties",
  address: {
    street: "9406 W Lake Mead Blvd, Suite 100",
    city: "Las Vegas",
    state: "NV",
    zip: "89134",
    full: "9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134",
  },
  coordinates: {
    lat: 36.1893,
    lng: -115.2821,
  },
  phone: agentInfo.phone,
  phoneTel: agentInfo.phoneTel,
};

// Legacy exports used elsewhere — keep minimal stubs to avoid breaking imports
export const marketStats = {
  lastUpdated: "January 2026",
  lasVegas: {
    medianPrice: 450000,
    medianPriceFormatted: "$450,000",
    yearOverYearChange: "+4.2%",
    daysOnMarket: 28,
    activeListings: 4850,
    closedSales: 2340,
    inventoryMonths: 2.1,
  },
};

export const agentStats = {
  servingSince: 2008,
  transactionsClosed: 500,
  volumeClosed: "$127M+",
};

export const valuePropositions = {
  main: "Clear answers on Nevada transaction terms from a Las Vegas agent who walks clients through contracts every week.",
};

export const neighborhoods: Array<{
  name: string;
  slug: string;
  description: string;
  medianPrice: string;
  highlights: string[];
}> = [];

export const services: Array<{
  name: string;
  slug: string;
  description: string;
  icon: string;
}> = [];

export const expertQuotes = {
  market: "",
};

export const commonFAQs = {
  general: [] as Array<{ question: string; answer: string }>,
  buying: [] as Array<{ question: string; answer: string }>,
  selling: [] as Array<{ question: string; answer: string }>,
};
