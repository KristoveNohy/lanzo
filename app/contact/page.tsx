import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/contact-form";

export const metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <div className="py-20">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Contact"
          title="Tell us about your project"
          description="We reply within 48 hours with a clear next step."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
            <ContactForm />
          </div>
          <aside className="space-y-6">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Book a call</h3>
              <p className="mt-3 text-sm text-slate-600">
                Placeholder calendar link for discovery calls.
              </p>
              <a
                className="mt-4 inline-flex text-sm font-semibold text-accent"
                href="#"
              >
                Book a 30-min call →
              </a>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-slate-900">Contact</h3>
              <p className="mt-3 text-sm text-slate-600">
                Email: hello@lanzo.sk (placeholder)
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Phone: +421 900 000 000 (placeholder)
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-slate-900">Location</h3>
              <p className="mt-3 text-sm text-slate-600">
                Bratislava area (placeholder). Map embed can be inserted here.
              </p>
              <div className="mt-4 flex h-32 items-center justify-center rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 text-xs text-slate-500">
                Map placeholder
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
