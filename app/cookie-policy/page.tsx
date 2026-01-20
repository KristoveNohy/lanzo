import { SectionHeading } from "@/components/ui/section-heading";

export const metadata = {
  title: "Cookie Policy"
};

export default function CookiePolicyPage() {
  return (
    <div className="py-20">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Legal"
          title="Cookie Policy (Placeholder)"
          description="Replace this placeholder with your official cookie policy."
        />
        <div className="mt-8 space-y-4 text-sm text-slate-600">
          <p>
            LANZO uses essential cookies for site functionality and optional
            analytics cookies when consent is granted. This placeholder should be
            replaced with your legal copy.
          </p>
          <p>
            Document all cookies used, their purpose, and retention period.
          </p>
        </div>
      </div>
    </div>
  );
}
