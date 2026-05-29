import LegalPageLayout from '@/components/legal/LegalPageLayout';
import {
  ESSENTIAL_COOKIES,
  LEGAL_CONFIG,
  OPTIONAL_COOKIES,
} from '@/lib/legal';

export default function CookiePolicyEUPage() {
  return (
    <LegalPageLayout
      title="Cookie Policy (EU/EEA, UK, CH)"
      description="EU cookie policy for Truth or Dare web application."
    >
      <article className="space-y-8">
        <header className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-pink">
            Cookie Policy (EU/EEA, UK, CH)
          </h1>
          <p className="text-white/80">
            Effective date: {LEGAL_CONFIG.effectiveDate}
          </p>
          <p className="text-white/80">Contact: {LEGAL_CONFIG.contactEmail}</p>
        </header>

        <section className="space-y-3 text-white/90 leading-relaxed">
          <h2 className="text-xl font-bold text-cyber-cyan">1. What This Policy Covers</h2>
          <p>
            This policy explains how cookies and similar technologies are used on{' '}
            {LEGAL_CONFIG.websiteUrl}. It is designed to support compliance with
            GDPR, the ePrivacy framework, and local implementing laws.
          </p>
        </section>

        <section className="space-y-3 text-white/90 leading-relaxed">
          <h2 className="text-xl font-bold text-cyber-cyan">2. Cookie Categories</h2>
          <p>
            Strictly necessary cookies are always active because they are required
            to provide the service safely and correctly. Optional cookies are off
            by default and require prior consent.
          </p>
        </section>

        <section className="space-y-4 text-white/90 leading-relaxed">
          <h2 className="text-xl font-bold text-cyber-cyan">3. Strictly Necessary Cookies</h2>
          <div className="overflow-x-auto rounded-lg border border-white/15">
            <table className="w-full text-sm">
              <thead className="bg-white/10">
                <tr>
                  <th className="text-left p-3">Name</th>
                  <th className="text-left p-3">Provider</th>
                  <th className="text-left p-3">Purpose</th>
                  <th className="text-left p-3">Duration</th>
                </tr>
              </thead>
              <tbody>
                {ESSENTIAL_COOKIES.map((cookie) => (
                  <tr key={cookie.name} className="border-t border-white/10">
                    <td className="p-3">{cookie.name}</td>
                    <td className="p-3">{cookie.provider}</td>
                    <td className="p-3">{cookie.purpose}</td>
                    <td className="p-3">{cookie.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4 text-white/90 leading-relaxed">
          <h2 className="text-xl font-bold text-cyber-cyan">4. Optional Cookies (Consent Required)</h2>
          <div className="overflow-x-auto rounded-lg border border-white/15">
            <table className="w-full text-sm">
              <thead className="bg-white/10">
                <tr>
                  <th className="text-left p-3">Name</th>
                  <th className="text-left p-3">Provider</th>
                  <th className="text-left p-3">Purpose</th>
                  <th className="text-left p-3">Duration</th>
                </tr>
              </thead>
              <tbody>
                {OPTIONAL_COOKIES.map((cookie) => (
                  <tr key={cookie.name} className="border-t border-white/10">
                    <td className="p-3">{cookie.name}</td>
                    <td className="p-3">{cookie.provider}</td>
                    <td className="p-3">{cookie.purpose}</td>
                    <td className="p-3">{cookie.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Optional categories are currently disabled in this app unless and until
            they are configured and you provide explicit consent.
          </p>
        </section>

        <section className="space-y-3 text-white/90 leading-relaxed">
          <h2 className="text-xl font-bold text-cyber-cyan">5. Managing Your Preferences</h2>
          <p>
            You can choose to accept all cookies or reject non-essential cookies
            using the cookie banner. You can also clear browser storage to reset
            your choice.
          </p>
          <p>
            If you reject optional cookies, core functionality remains available.
          </p>
        </section>

        <section className="space-y-3 text-white/90 leading-relaxed">
          <h2 className="text-xl font-bold text-cyber-cyan">6. Third-Party Cookies</h2>
          <p>
            We do not currently place advertising or analytics cookies by default.
            If this changes, this policy and the consent mechanism will be updated
            before activation for users in regulated regions.
          </p>
        </section>

        <section className="space-y-3 text-white/90 leading-relaxed">
          <h2 className="text-xl font-bold text-cyber-cyan">7. Contact</h2>
          <p>
            Questions about cookies or consent can be sent to{' '}
            {LEGAL_CONFIG.contactEmail}.
          </p>
        </section>
      </article>
    </LegalPageLayout>
  );
}
