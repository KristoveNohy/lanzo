import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { serviceDetails } from "@/data/site";

export const metadata = {
  title: "Services"
};

export default function ServicesPage() {
  return (
    <div className="py-20">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Services"
          title="Tailored delivery for ambitious teams"
          description="Every engagement is custom-scoped with clear deliverables and outcomes."
        />
        <div className="mt-12 space-y-8">
          {serviceDetails.map((service) => (
            <div
              key={service.slug}
              className="rounded-2xl border border-slate-100 bg-white p-8 shadow-soft"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm text-slate-600">{service.summary}</p>
                </div>
                <Button href={`/services/${service.slug}`} variant="secondary">
                  View details
                </Button>
              </div>
              <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Who it’s for
                  </p>
                  <p className="mt-2 text-sm text-slate-600">{service.who}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Outcomes
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-slate-600">
                    {service.outcomes.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Deliverables
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-slate-600">
                    {service.deliverables.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Timeline & Pricing
                  </p>
                  <p className="mt-2 text-sm text-slate-600">{service.timeline}</p>
                  <p className="text-sm text-slate-600">{service.pricing}</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="text-sm font-semibold text-accent"
                >
                  Contact us →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
