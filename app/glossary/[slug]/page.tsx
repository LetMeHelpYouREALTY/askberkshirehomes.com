import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import {
  GLOSSARY_TERMS,
  getGlossaryTerm,
  type GlossaryTerm,
} from "@/lib/glossary-terms";
import { agentInfo, siteConfig } from "@/lib/site-config";
import { getSiteUrl } from "@/lib/site-url";

type GlossaryTermPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return GLOSSARY_TERMS.map((term) => ({ slug: term.slug }));
}

export async function generateMetadata({ params }: GlossaryTermPageProps): Promise<Metadata> {
  const { slug } = await params;
  const term = getGlossaryTerm(slug);
  if (!term) {
    return { title: "Term not found" };
  }
  const siteUrl = getSiteUrl();
  const canonical = `${siteUrl}/glossary/${slug}`;
  const title = `${term.term} — Nevada Real Estate Glossary`;
  const description = term.shortDefinition;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
    },
  };
}

function RelatedTerms({ term }: { term: GlossaryTerm }) {
  if (!term.relatedSlugs?.length) {
    return null;
  }
  const related = term.relatedSlugs
    .map((slug) => getGlossaryTerm(slug))
    .filter((t): t is GlossaryTerm => Boolean(t));

  if (related.length === 0) {
    return null;
  }

  return (
    <div className="mt-10 pt-8 border-t border-slate-200">
      <h2 className="text-lg font-semibold text-slate-900 mb-4">Related terms</h2>
      <ul className="flex flex-wrap gap-3">
        {related.map((r) => (
          <li key={r.slug}>
            <Link
              href={`/glossary/${r.slug}`}
              className="text-blue-700 hover:underline text-sm font-medium"
            >
              {r.term}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function GlossaryTermPage({ params }: GlossaryTermPageProps) {
  const { slug } = await params;
  const term = getGlossaryTerm(slug);
  if (!term) {
    notFound();
  }

  const siteUrl = getSiteUrl();
  const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term.term,
    description: term.shortDefinition,
    url: `${siteUrl}/glossary/${slug}`,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: siteConfig.h1,
      url: siteUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }}
      />
      <Navbar />
      <main className="py-12 md:py-16 pt-28">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/" className="text-blue-700 text-sm font-medium hover:underline mb-6 inline-block">
            ← All glossary terms
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{term.term}</h1>
          <p className="text-xl text-slate-600 mb-8">{term.shortDefinition}</p>
          <div className="prose prose-slate max-w-none space-y-4 text-slate-700">
            {term.body.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
          <RelatedTerms term={term} />
          <div className="mt-12 p-6 bg-slate-50 rounded-lg border border-slate-200">
            <p className="font-semibold text-slate-900 mb-2">Need this explained for your deal?</p>
            <p className="text-slate-600 text-sm mb-4">
              Call {agentInfo.name} at{" "}
              <a href={agentInfo.phoneTel} className="text-blue-700 font-medium">
                {agentInfo.phone}
              </a>{" "}
              or visit{" "}
              <a
                href={siteConfig.sisterSite.href}
                className="text-blue-700 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                askdrjanduffy.com
              </a>{" "}
              for Q&amp;A.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
