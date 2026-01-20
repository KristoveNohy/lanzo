import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  caseStudies,
  faqs,
  processSteps,
  reasons,
  serviceCards,
  testimonials
} from "@/data/site";

export default function HomePage() {
  return (
    <div>
      <section className="border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white">
        <div className="container-wide grid gap-12 py-20 md:grid-cols-[1.2fr_0.8fr] md:py-28">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
              LANZO Studio
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-slate-900 md:text-5xl">
              Custom Websites & Software Systems Built to Scale
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              LANZO designs and develops bespoke web experiences and tailored
              software that automate work, increase conversions, and look premium.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" size="lg">
                Request a Quote
              </Button>
              <Button href="/work" variant="secondary" size="lg">
                See Work
              </Button>
            </div>
            <ul className="mt-8 grid gap-3 text-sm text-slate-600 md:grid-cols-3">
              <li className="rounded-xl border border-slate-100 bg-white px-4 py-3 shadow-soft">
                Fast, reliable delivery
              </li>
              <li className="rounded-xl border border-slate-100 bg-white px-4 py-3 shadow-soft">
                Clean, scalable code
              </li>
              <li className="rounded-xl border border-slate-100 bg-white px-4 py-3 shadow-soft">
                Measurable outcomes
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
            <div className="flex h-full flex-col justify-between gap-6">
              <div>
                <p className="text-sm font-semibold text-slate-500">
                  Recent outcomes
                </p>
                <h2 className="mt-3 text-2xl font-semibold">
                  +32% average lead growth for service brands
                </h2>
                <p className="mt-3 text-sm text-slate-600">
                  We focus on measurable performance improvements with every
                  release.
                </p>
              </div>
              <div className="rounded-xl bg-accent-soft p-4 text-sm text-slate-700">
                Typical launch window: 4-8 weeks depending on scope.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Services"
            title="Everything you need for premium digital delivery"
            description="Choose a focused engagement or build a long-term partnership."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {serviceCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft transition hover:-translate-y-1"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600">{card.description}</p>
                <span className="mt-6 inline-flex text-sm font-semibold text-accent">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Why LANZO"
            title="Clarity, speed, and premium delivery"
            description="We keep the process transparent and outcomes measurable."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft"
              >
                <div className="text-2xl">{reason.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Case Studies"
            title="Recent outcomes across industries"
            description="Placeholders illustrate structure and performance metrics."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {caseStudies.slice(0, 3).map((study) => (
              <Link
                key={study.slug}
                href={`/work/${study.slug}`}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft transition hover:-translate-y-1"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {study.industry}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">
                  {study.name}
                </h3>
                <p className="mt-3 text-sm text-slate-600">{study.summary}</p>
                <div className="mt-4 rounded-xl bg-slate-50 p-4 text-xs text-slate-600">
                  <p className="font-semibold text-slate-900">Results</p>
                  <p className="mt-2">{study.results}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Process"
            title="Structured delivery with clear milestones"
            description="A predictable process keeps projects on time and on budget."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-5">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-slate-100 bg-white p-5 shadow-soft"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Step {index + 1}
                </p>
                <h3 className="mt-3 text-base font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600">{step.description}</p>
                <p className="mt-4 text-xs font-semibold text-accent">
                  {step.timeline}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Testimonials"
            title="Partners trust LANZO for premium execution"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <figure
                key={item.name}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft"
              >
                <blockquote className="text-sm text-slate-600">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-slate-900">
                  {item.name}
                </figcaption>
                <p className="text-xs text-slate-500">{item.role}</p>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container-wide">
          <SectionHeading
            eyebrow="FAQ"
            title="Answers to common questions"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft"
              >
                <h3 className="text-base font-semibold text-slate-900">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-wide">
          <div className="rounded-3xl bg-slate-900 px-8 py-12 text-white md:px-12 md:py-16">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-3xl font-semibold">
                  Ready to build something that performs?
                </h2>
                <p className="mt-3 text-sm text-slate-200">
                  Let’s plan your next release with clarity and confidence.
                </p>
              </div>
              <Button href="/contact" size="lg" className="bg-white text-slate-900">
                Request a Quote
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
