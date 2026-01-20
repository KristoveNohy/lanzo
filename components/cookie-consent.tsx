"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "lanzo_cookie_consent";

type ConsentState = "accepted" | "declined" | null;

export function CookieConsent() {
  const [consent, setConsent] = useState<ConsentState>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as ConsentState;
    if (stored) {
      setConsent(stored);
    }
  }, []);

  if (consent) {
    return null;
  }

  const handleChoice = (value: ConsentState) => {
    window.localStorage.setItem(STORAGE_KEY, value ?? "declined");
    setConsent(value);
  };

  return (
    <div className="fixed inset-x-0 bottom-4 z-50 mx-auto w-[min(720px,90%)] rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="text-sm text-slate-600">
          <p className="font-semibold text-slate-900">We respect your privacy.</p>
          <p className="mt-2">
            We use minimal cookies for analytics and performance. You can accept or
            decline at any time.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="secondary"
            size="sm"
            type="button"
            className="rounded-full"
            onClick={() => handleChoice("declined")}
          >
            Decline
          </Button>
          <Button
            size="sm"
            type="button"
            className="rounded-full"
            onClick={() => handleChoice("accepted")}
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
