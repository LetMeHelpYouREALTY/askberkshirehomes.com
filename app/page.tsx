import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import { GLOSSARY_TERMS } from "@/lib/glossary-terms";
import { agentInfo, officeInfo, siteConfig } from "@/lib/site-config";
import { getSiteUrl } from "@/lib/site-url";
import { Phone, BookOpen, ExternalLink } from "lucide-react";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: siteConfig.pageTitle,
  description: siteConfig.description,
  alternates: { canonical: siteUrl },
  openGraph: {
    title: siteConfig.pageTitle,
    description: siteConfig.description,
    url: siteUrl,
  },
};

export default function Home() {
  const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: siteConfig.h1,
    url: siteUrl,
    hasDefinedTerm: GLOSSARY_TERMS.map((term) => ({
      "@type": "DefinedTerm",
      name: term.term,
      description: term.shortDefinition,
      url: `${siteUrl}/glossary/${term.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }}
      />
      <Navbar />
      <main>
        <section className="bg-slate-900 text-white py-16 md:py-24 pt-28 md:pt-32">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-blue-300 text-sm font-semibold tracking-wide uppercase mb-4">
              Nevada real estate glossary
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{siteConfig.h1}</h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8">
              Plain-language definitions for buyers, sellers, and investors in Las Vegas and
              statewide—written by {agentInfo.name}, {agentInfo.title}.
            </p>
            <a
              href={agentInfo.phoneTel}
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-colors"
            >
              <Phone className="h-5 w-5" aria-hidden />
              Call {agentInfo.phone}
            </a>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-2 mb-8">
              <BookOpen className="h-6 w-6 text-blue-600" aria-hidden />
              <h2 className="text-2xl font-bold text-slate-900">Browse terms</h2>
            </div>
            <ul className="space-y-6">
              {GLOSSARY_TERMS.map((term) => (
                <li
                  key={term.slug}
                  className="border border-slate-200 rounded-lg p-6 hover:border-blue-300 transition-colors"
                >
                  <Link href={`/glossary/${term.slug}`} className="group block">
                    <h3 className="text-xl font-semibold text-slate-900 group-hover:text-blue-700 mb-2">
                      {term.term}
                    </h3>
                    <p className="text-slate-600">{term.shortDefinition}</p>
                    <span className="inline-block mt-3 text-blue-600 text-sm font-medium">
                      Read full definition →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-14 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Have a specific question?</h2>
            <p className="text-slate-600 mb-6">
              Transaction questions with your address and timeline get clearer answers than generic
              web search.
            </p>
            <a
              href={siteConfig.sisterSite.href}
              className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              {siteConfig.sisterSite.label}
              <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-3xl text-center text-sm text-slate-600">
            <p>
              {agentInfo.name}, {agentInfo.title} · License {agentInfo.license}
            </p>
            <p className="mt-2">{officeInfo.address.full}</p>
            <p className="mt-2">
              <a href={agentInfo.phoneTel} className="text-blue-700 font-medium">
                {agentInfo.phone}
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
