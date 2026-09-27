import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { Shield, Users, Globe, Award, TrendingUp, CheckCircle, Phone } from "lucide-react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/page-metadata";
import { agentInfo, siteConfig } from "@/lib/site-config";
import { getSiteUrl } from "@/lib/site-url";

export const metadata: Metadata = pageMetadata({
  path: "/why-berkshire-hathaway",
  title: "Why Brokerage Support Matters | Nevada Real Estate Questions",
  description:
    "Answers about how brokerage resources, ethics standards, and agent support help Nevada buyers and sellers—without the jargon. Dr. Jan Duffy, REALTOR®.",
  keywords: [
    "Nevada real estate questions",
    "real estate brokerage support",
    "Las Vegas buyer agent",
    "why use a REALTOR",
  ],
});

const brokerageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Why brokerage support matters",
  url: `${getSiteUrl()}/why-berkshire-hathaway`,
  description:
    "Plain answers on how brokerage backing helps Las Vegas and Nevada real estate clients.",
  about: {
    "@type": "RealEstateAgent",
    name: agentInfo.name,
    telephone: "+17028421192",
  },
};

export default function WhyBrokerageSupportPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brokerageSchema) }}
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Nevada real estate questions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Why Brokerage Support Matters: Your Questions Answered
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              When contract terms, timelines, or negotiations get heavy, you want an agent backed by
              stable resources and clear ethical standards—not just a sign in the yard. Here is what
              that support means in plain language.
            </p>
          </div>

          {/* Warren Buffett Section */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Financial strength behind your transaction
                </h2>
                <p className="text-slate-300 mb-6">
                  Dr. Jan Duffy works with {agentInfo.brokerage}, part of a network known for
                  long-term stability and strict professional standards. That backing matters when
                  you need marketing reach, compliance support, or a referral in another state.
                </p>
                <p className="text-slate-300">
                  You still work directly with Dr. Jan on your deal—the brokerage layer is the
                  infrastructure that keeps service consistent when stakes are high.
                </p>
              </div>
              <div className="bg-slate-800 rounded-lg p-8 text-center">
                <TrendingUp className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                <p className="text-4xl font-bold text-blue-400 mb-2">50,000+</p>
                <p className="text-slate-300">Agents in the global referral network</p>
              </div>
            </div>
          </section>

          {/* Advantages Grid */}
          <section className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
              What brokerage support gives you
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Ethical standards",
                  desc: "Written policies and training that go beyond minimum licensing requirements.",
                },
                {
                  icon: Globe,
                  title: "Referral network",
                  desc: "Coordinated help when you buy or sell across state lines.",
                },
                {
                  icon: Award,
                  title: "Marketing resources",
                  desc: "Professional photography, syndication, and campaign tools for listings.",
                },
                {
                  icon: Users,
                  title: "Local expertise",
                  desc: "Dr. Jan's Las Vegas market knowledge paired with firm-wide research.",
                },
                {
                  icon: CheckCircle,
                  title: "Transaction support",
                  desc: "Compliance and document workflows built for Nevada contracts.",
                },
                {
                  icon: TrendingUp,
                  title: "Negotiation backup",
                  desc: "Experience from thousands of firm-wide transactions to inform strategy.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <Icon className="h-10 w-10 text-blue-600 mb-4" />
                  <h3 className="font-bold text-xl mb-2 text-slate-900">{title}</h3>
                  <p className="text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Dr. Jan Section */}
          <section className="mb-16 bg-blue-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Your local expert in Las Vegas
                </h2>
                <p className="text-slate-700 mb-4">
                  {agentInfo.name} combines brokerage resources with hands-on guidance in Summerlin,
                  Henderson, and valley-wide transactions. Ask about any term on our{" "}
                  <Link href="/glossary" className="text-blue-700 font-medium hover:underline">
                    Nevada glossary
                  </Link>{" "}
                  or{" "}
                  <Link
                    href={siteConfig.sisterSite.href}
                    className="text-blue-700 font-medium hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ask a specific question
                  </Link>
                  .
                </p>
                <p className="text-slate-600 italic">
                  &ldquo;Clients hire me for straight answers and calm execution—not buzzwords.&rdquo;
                  <br />— {agentInfo.name}, {agentInfo.title}
                </p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-blue-600 mb-2">$127M+</p>
                <p className="text-slate-600 mb-4">Career closed volume</p>
                <p className="text-3xl font-bold text-blue-600 mb-2">500+</p>
                <p className="text-slate-600">Families served since 2008</p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-slate-900">
              Common brokerage questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "Does brokerage support change who represents me?",
                  a: "No. Dr. Jan Duffy is your agent. The brokerage provides tools, compliance, and network reach—you still get one point of contact.",
                },
                {
                  q: "Does using a brokerage agent cost more?",
                  a: "Commissions are negotiable and disclosed up front. Marketing and negotiation support is included in the representation agreement, not billed as surprise fees.",
                },
                {
                  q: "Can you help with relocations?",
                  a: "Yes. Referral coordination through the firm network can connect you with vetted agents in other cities while Dr. Jan handles your Nevada side.",
                },
                {
                  q: "Where do I learn transaction vocabulary?",
                  a: "Start with the glossary on this site for SID/LID, SRPD, earnest money, and HOA packages—or call for a walkthrough tied to your contract.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="border border-slate-200 rounded-lg p-6">
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{q}</h3>
                  <p className="text-slate-600">{a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Ready for a direct answer?
            </h2>
            <p className="text-slate-600 mb-8">
              Call {agentInfo.name} at {agentInfo.phone} for Nevada-specific guidance on your next
              step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={agentInfo.phoneTel}
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-bold transition-colors"
              >
                <Phone className="h-5 w-5" />
                Call {agentInfo.phone}
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-slate-100 hover:bg-slate-200 text-slate-900 px-8 py-4 rounded-md font-bold transition-colors"
              >
                Contact form
              </Link>
            </div>
          </section>
        </div>
        <RealScoutListings />
      </main>
      <Footer />
    </>
  );
}
