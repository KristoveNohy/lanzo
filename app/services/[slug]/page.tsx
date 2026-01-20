import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { serviceDetails } from "@/data/site";

export function generateStaticParams() {
  return serviceDetails.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = serviceDetails.find((item) => item.slug === params.slug);
  if (!service) {
    return {};
  }
  return {
    title: service.title,
    description: service.summary
  };
}

export default function ServiceDetailPage({
  params
}: {
  params: { slug: string };
}) {
  const service = serviceDetails.find((item) => item.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="py-20">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Service"
          title={service.title}
          description={service.summary}
        />
        <div className="mt-12 grid gap-8 md:grid-cols-[2fr_1fr]">
          <div className="space-y-8">
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
              <h2 className="text-lg font-semibold text-slate-900">Who it’s for</h2>
              <p className="mt-3 text-sm text-slate-600">{service.who}</p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
              <h2 className="text-lg font-semibold text-slate-900">Key outcomes</h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {service.outcomes.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
              <h2 className="text-lg font-semibold text-slate-900">Deliverables</h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {service.deliverables.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
              <h2 className="text-lg font-semibold text-slate-900">Tech & tools</h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {service.tools.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
          <aside className="space-y-6">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Timeline
              </p>
              <p className="mt-2 text-sm text-slate-600">{service.timeline}</p>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Pricing
              </p>
              <p className="mt-2 text-sm text-slate-600">{service.pricing}</p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
              <p className="text-sm font-semibold text-slate-900">
                Ready to discuss your project?
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Share your goals and we’ll outline a tailored scope.
              </p>
              <Button href="/contact" size="lg" className="mt-4 w-full">
                Contact LANZO
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
