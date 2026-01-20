import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { caseStudies } from "@/data/site";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((item) => item.slug === params.slug);
  if (!study) {
    return {};
  }
  return {
    title: study.name,
    description: study.summary
  };
}

export default function CaseStudyPage({
  params
}: {
  params: { slug: string };
}) {
  const study = caseStudies.find((item) => item.slug === params.slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="py-20">
      <div className="container-wide">
        <SectionHeading
          eyebrow={study.industry}
          title={study.name}
          description={study.summary}
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-8">
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
              <h2 className="text-lg font-semibold text-slate-900">Challenge</h2>
              <p className="mt-3 text-sm text-slate-600">{study.problem}</p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
              <h2 className="text-lg font-semibold text-slate-900">Approach</h2>
              <p className="mt-3 text-sm text-slate-600">
                We ran discovery workshops, mapped user journeys, and prioritized
                releases based on impact.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
              <h2 className="text-lg font-semibold text-slate-900">Solution</h2>
              <p className="mt-3 text-sm text-slate-600">{study.solution}</p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
              <h2 className="text-lg font-semibold text-slate-900">Stack</h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>• Modern frontend framework</li>
                <li>• Secure backend APIs</li>
                <li>• Analytics & monitoring</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
              <h2 className="text-lg font-semibold text-slate-900">Results</h2>
              <p className="mt-3 text-sm text-slate-600">{study.results}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {study.metrics.map((metric) => (
                  <li key={metric}>• {metric}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
              <h2 className="text-lg font-semibold text-slate-900">Gallery</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div
                    key={index}
                    className="flex h-32 items-center justify-center rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 text-xs text-slate-500"
                  >
                    Placeholder visual {index + 1}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
              <h2 className="text-lg font-semibold text-slate-900">Testimonial</h2>
              <p className="mt-3 text-sm text-slate-600">
                “LANZO delivered a premium solution with clear communication at
                every step.”
              </p>
              <p className="mt-3 text-xs text-slate-500">
                Placeholder, Head of Operations
              </p>
            </div>
          </div>
          <aside className="space-y-6">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Services
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {study.services.map((service) => (
                  <li key={service}>• {service}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
              <p className="text-sm font-semibold text-slate-900">Next steps</p>
              <p className="mt-2 text-sm text-slate-600">
                Tell us about your goals and we’ll map a clear plan.
              </p>
              <Button href="/contact" size="lg" className="mt-4 w-full">
                Request a Quote
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
