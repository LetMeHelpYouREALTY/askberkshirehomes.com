import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { GLOSSARY_TERMS } from "@/lib/glossary-terms";
import { agentInfo, officeInfo, siteConfig } from "@/lib/site-config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <div>
            <h3 className="font-bold text-xl mb-4">{siteConfig.name}</h3>
            <p className="text-slate-300 mb-4 text-sm">{siteConfig.description}</p>
            <a
              href={siteConfig.sisterSite.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white text-sm font-medium"
            >
              {siteConfig.sisterSite.label} →
            </a>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Glossary terms</h3>
            <ul className="space-y-2">
              {GLOSSARY_TERMS.slice(0, 6).map((term) => (
                <li key={term.slug}>
                  <Link
                    href={`/glossary/${term.slug}`}
                    className="text-slate-300 hover:text-white transition-colors text-sm"
                  >
                    {term.term}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/" className="text-blue-300 hover:text-white text-sm font-medium">
                  View all terms
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Dr. Jan Duffy</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm">{officeInfo.address.full}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" />
                <Link
                  href={agentInfo.phoneTel}
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  {agentInfo.phone}
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" />
                <Link
                  href={`mailto:${agentInfo.email}`}
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  {agentInfo.email}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear} {agentInfo.brokerage}. All Rights Reserved.
            </p>
            <Link href="/sitemap.xml" className="text-slate-400 hover:text-white text-sm">
              Sitemap
            </Link>
          </div>
          <p className="text-slate-500 text-xs mt-4 text-center">
            {agentInfo.name}, {agentInfo.title} | License {agentInfo.license} |{" "}
            {agentInfo.brokerage}
          </p>
        </div>
      </div>
    </footer>
  );
}
