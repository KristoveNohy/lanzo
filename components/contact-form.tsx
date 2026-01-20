"use client";

import { useFormState } from "react-dom";
import { submitContact, initialState } from "@/app/contact/actions";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [state, formAction] = useFormState(submitContact, initialState);

  return (
    <form action={formAction} className="space-y-5">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-slate-700" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm"
            required
          />
          {state.errors.name ? (
            <p className="mt-1 text-xs text-red-500">{state.errors.name}</p>
          ) : null}
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-700" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm"
            required
          />
          {state.errors.email ? (
            <p className="mt-1 text-xs text-red-500">{state.errors.email}</p>
          ) : null}
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label
            className="text-sm font-semibold text-slate-700"
            htmlFor="company"
          >
            Company
          </label>
          <input
            id="company"
            name="company"
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm"
          />
        </div>
        <div>
          <label
            className="text-sm font-semibold text-slate-700"
            htmlFor="projectType"
          >
            Project type
          </label>
          <select
            id="projectType"
            name="projectType"
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm"
          >
            <option>Custom website</option>
            <option>Custom software system</option>
            <option>Maintenance & support</option>
            <option>Not sure yet</option>
          </select>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label
            className="text-sm font-semibold text-slate-700"
            htmlFor="budget"
          >
            Budget range
          </label>
          <select
            id="budget"
            name="budget"
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm"
          >
            <option>€4k - €8k</option>
            <option>€8k - €15k</option>
            <option>€15k - €30k</option>
            <option>€30k+</option>
          </select>
        </div>
        <div>
          <label
            className="text-sm font-semibold text-slate-700"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm"
            required
          />
          {state.errors.message ? (
            <p className="mt-1 text-xs text-red-500">{state.errors.message}</p>
          ) : null}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button type="submit" size="lg">
          Send inquiry
        </Button>
        {state.success ? (
          <p className="text-sm text-emerald-600">
            Thanks! We’ll reply within 48 hours.
          </p>
        ) : null}
      </div>
      <p className="text-xs text-slate-500">
        This form stores submissions securely. Placeholder email integration is
        disabled by default.
      </p>
    </form>
  );
}
