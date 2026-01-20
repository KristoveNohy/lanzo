"use client";

import Script from "next/script";

export function Analytics() {
  const provider = process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER;
  const enabled = process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === "true";

  if (!enabled || !provider) {
    return null;
  }

  if (provider === "plausible") {
    return (
      <Script
        strategy="afterInteractive"
        data-domain={process.env.NEXT_PUBLIC_ANALYTICS_DOMAIN}
        src="https://plausible.io/js/script.js"
      />
    );
  }

  if (provider === "ga4") {
    const id = process.env.NEXT_PUBLIC_ANALYTICS_ID;
    if (!id) return null;
    return (
      <>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', '${id}', { anonymize_ip: true });`}
        </Script>
      </>
    );
  }

  return null;
}
