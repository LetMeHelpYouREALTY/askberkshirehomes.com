import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { headers } from "next/headers";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { agentInfo, officeInfo, siteConfig } from "@/lib/site-config";
import { canonicalForPath } from "@/lib/page-metadata";
import { getSiteUrl } from "@/lib/site-url";

export async function generateMetadata(): Promise<Metadata> {
  const headersList = headers();
  const pathname = headersList.get("x-pathname") || "/";
  const siteUrl = getSiteUrl();
  const canonical = canonicalForPath(pathname);

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: siteConfig.pageTitle,
      template: "%s | Nevada Real Estate Glossary",
    },
    description: siteConfig.description,
    keywords: [
      "Nevada real estate glossary",
      "Las Vegas real estate terms",
      "what is an SID assessment Nevada",
      "Nevada seller real property disclosure explained",
    ],
    alternates: {
      canonical,
    },
    openGraph: {
      title: siteConfig.pageTitle,
      description: siteConfig.description,
      url: canonical,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_US",
    },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const siteUrl = getSiteUrl();
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: agentInfo.name,
    url: siteUrl,
    telephone: "+17028421192",
    email: agentInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: officeInfo.address.street,
      addressLocality: officeInfo.address.city,
      addressRegion: officeInfo.address.state,
      postalCode: officeInfo.address.zip,
      addressCountry: "US",
    },
    memberOf: {
      "@type": "Organization",
      name: agentInfo.brokerage,
    },
  };

  return (
    <html lang="en" className={GeistSans.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Script id="widget-tracker" strategy="afterInteractive">{`
          (function(w,i,d,g,e,t){w["WidgetTrackerObject"]=g;(w[g]=w[g]||function()
          {(w[g].q=w[g].q||[]).push(arguments);}),(w[g].ds=1*new Date());(e="script"),
          (t=d.createElement(e)),(e=d.getElementsByTagName(e)[0]);t.async=1;t.src=i;
          e.parentNode.insertBefore(t,e);})
          (window,"https://widgetbe.com/agent",document,"widgetTracker");
          window.widgetTracker("create","WT-XQHVYQWW");
          window.widgetTracker("send","pageview");
        `}</Script>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
