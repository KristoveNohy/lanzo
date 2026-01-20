import Link from "next/link";
import { navigation } from "@/data/site";

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" }
];

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="container-wide grid gap-12 py-16 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <h3 className="text-xl font-semibold">LANZO</h3>
          <p className="mt-4 text-sm text-slate-600">
            Premium web experiences and custom software systems built for ambitious
            teams across Slovakia and the EU.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">Quick Links</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-slate-900">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">Legal</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {legalLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-slate-900">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm font-semibold text-slate-900">Social</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>LinkedIn (placeholder)</li>
            <li>Behance (placeholder)</li>
            <li>Dribbble (placeholder)</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-100 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} LANZO. All rights reserved.
      </div>
    </footer>
  );
}
