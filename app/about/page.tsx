import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata = {
  title: "About"
};

const values = [
  {
    title: "Craftsmanship",
    description: "We design and build with care and attention to detail."
  },
  {
    title: "Clarity",
    description: "We keep scope, timelines, and expectations transparent."
  },
  {
    title: "Reliability",
    description: "We deliver on promises and protect your time."
  },
  {
    title: "Impact",
    description: "Every decision focuses on measurable business outcomes."
  }
];

export default function AboutPage() {
  return (
    <div className="py-20">
      <div className="container-wide">
        <SectionHeading
          eyebrow="About"
          title="Tailored systems that remove friction and fuel growth"
          description="LANZO is a small senior team focused on premium delivery for SMEs and ambitious startups across the EU."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
            <h2 className="text-lg font-semibold text-slate-900">Mission</h2>
            <p className="mt-3 text-sm text-slate-600">
              Build tailored systems that remove friction and help companies grow
              with clarity and confidence.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
            <h2 className="text-lg font-semibold text-slate-900">Our story</h2>
            <p className="mt-3 text-sm text-slate-600">
              We are a boutique team of product designers and engineers. Every
              project is led by senior talent with a focus on outcomes. (Team
              size placeholder.)
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {value.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{value.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-3xl bg-slate-900 px-8 py-12 text-white md:px-12 md:py-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold">Let’s build together</h2>
              <p className="mt-3 text-sm text-slate-200">
                Share your goals and we’ll respond within 48 hours.
              </p>
            </div>
            <Button href="/contact" size="lg" className="bg-white text-slate-900">
              Request a Quote
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
