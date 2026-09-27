import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import { GLOSSARY_TERMS } from "@/lib/glossary-terms";
import { pageMetadata } from "@/lib/page-metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  path: "/glossary",
  title: "Nevada Real Estate Glossary Index",
  description:
    "Browse Nevada and Las Vegas real estate terms: SID/LID assessments, SRPD, earnest money, HOA resale packages, escrow, and more.",
  keywords: [
    "Nevada real estate glossary",
    "Las Vegas real estate terms",
    "Nevada real estate terms explained",
  ],
});

export default function GlossaryIndexPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Nevada Real Estate Glossary
          </h1>
          <p className="text-lg text-slate-600 mb-10">
            Short definitions for common contract and closing terms in Southern Nevada. Select a
            term for a full explanation.
          </p>
          <ul className="space-y-4">
            {GLOSSARY_TERMS.map((term) => (
              <li key={term.slug}>
                <Link
                  href={`/glossary/${term.slug}`}
                  className="block border border-slate-200 rounded-lg p-5 hover:border-blue-400 transition-colors"
                >
                  <span className="text-lg font-semibold text-slate-900">{term.term}</span>
                  <p className="text-slate-600 mt-1 text-sm">{term.shortDefinition}</p>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-center">
            <Link href="/" className="text-blue-700 font-medium hover:underline">
              ← Back to glossary home
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
