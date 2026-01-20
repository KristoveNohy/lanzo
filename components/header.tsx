import Link from "next/link";
import { navigation } from "@/data/site";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur">
      <div className="container-wide flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-semibold">
          LANZO
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button href="/contact" size="sm">
            Get a Quote
          </Button>
        </div>
      </div>
    </header>
  );
}
