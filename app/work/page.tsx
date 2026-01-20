import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { caseStudies } from "@/data/site";

export const metadata = {
  title: "Work"
};

export default function WorkPage() {
  return (
    <div className="py-20">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Work"
          title="Case studies and portfolio highlights"
          description="Placeholder projects show structure and measurable outcomes."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/work/${study.slug}`}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft transition hover:-translate-y-1"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {study.industry}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">
                {study.name}
              </h3>
              <p className="mt-3 text-sm text-slate-600">{study.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {study.services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600"
                  >
                    {service}
                  </span>
                ))}
              </div>
              <div className="mt-5 rounded-xl bg-slate-50 p-4 text-xs text-slate-600">
                <p className="font-semibold text-slate-900">Impact</p>
                <ul className="mt-2 space-y-1">
                  {study.metrics.map((metric) => (
                    <li key={metric}>• {metric}</li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
