import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  COOKIE_CONSENT_STORAGE_KEY,
  CookieConsentChoice,
} from '@/lib/legal';

export default function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const storedChoice = localStorage.getItem(
      COOKIE_CONSENT_STORAGE_KEY
    ) as CookieConsentChoice | null;

    if (!storedChoice) {
      setIsVisible(true);
    }
  }, []);

  const handleConsent = (choice: CookieConsentChoice) => {
    localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, choice);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[60]">
      <div className="mx-auto max-w-3xl rounded-2xl border border-cyber-cyan/35 bg-slate-950/95 p-5 text-white shadow-2xl backdrop-blur-xl">
        <p className="text-sm md:text-base leading-relaxed">
          We use strictly necessary cookies to run this app. Optional cookies
          are off by default and would only be activated with your consent in
          the EU/EEA, UK, and Switzerland.
        </p>

        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <Link
            href="/cookie-policy-eu"
            className="text-cyber-cyan underline hover:text-cyber-pink"
          >
            Cookie Policy (EU)
          </Link>
          <Link
            href="/privacy-policy"
            className="text-cyber-cyan underline hover:text-cyber-pink"
          >
            Privacy Policy
          </Link>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <button
            onClick={() => handleConsent('rejected')}
            className="rounded-lg border border-white/25 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10"
          >
            Reject non-essential
          </button>
          <button
            onClick={() => handleConsent('accepted')}
            className="rounded-lg bg-gradient-to-r from-cyber-cyan to-cyber-purple px-4 py-2 text-sm font-semibold text-white"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
