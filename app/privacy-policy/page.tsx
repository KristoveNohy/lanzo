import { SectionHeading } from "@/components/ui/section-heading";

export const metadata = {
  title: "Privacy Policy"
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-20">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Legal"
          title="Privacy Policy (Placeholder)"
          description="Replace this placeholder with your official GDPR-compliant privacy policy."
        />
        <div className="mt-8 space-y-4 text-sm text-slate-600">
          <p>
            LANZO collects only the data necessary to respond to inquiries and
            deliver services. This placeholder copy should be replaced with legal
            text approved by your counsel.
          </p>
          <p>
            Include details about data processing, retention periods, user rights,
            and contact information for data requests.
          </p>
        </div>
      </div>
    </div>
  );
}
