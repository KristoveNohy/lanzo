import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/data/site";

export const metadata = {
  title: "Process"
};

const clientNeeds = [
  "Point of contact and decision maker",
  "Access to existing assets",
  "Key business goals and KPIs",
  "Stakeholder availability for reviews"
];

export default function ProcessPage() {
  return (
    <div className="py-20">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Process"
          title="A transparent process that keeps momentum"
          description="We align quickly, deliver consistently, and keep stakeholders informed."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {processSteps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Step {index + 1}
              </p>
              <h2 className="mt-3 text-lg font-semibold text-slate-900">
                {step.title}
              </h2>
              <p className="mt-2 text-sm text-slate-600">{step.description}</p>
              <p className="mt-4 text-xs font-semibold text-accent">
                Estimated: {step.timeline}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-slate-900">
              What we need from you
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {clientNeeds.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-semibold text-slate-900">
              Communication cadence
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              Weekly check-ins, async updates twice per week, and clear milestones
              in a shared Jira-style board.
            </p>
            <p className="mt-4 text-sm text-slate-600">
              Tools used: Figma, Git, Notion/Jira-style tracker, Slack or email.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
