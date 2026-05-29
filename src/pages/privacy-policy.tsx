import LegalPageLayout from '@/components/legal/LegalPageLayout';
import { LEGAL_CONFIG } from '@/lib/legal';

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      description="Privacy Policy for the Truth or Dare web application."
    >
      <article className="space-y-8">
        <header className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-pink">
            Privacy Policy
          </h1>
          <p className="text-white/80">
            Effective date: {LEGAL_CONFIG.effectiveDate}
          </p>
          <p className="text-white/80">
            Controller: {LEGAL_CONFIG.operatorName}
          </p>
          <p className="text-white/80">Contact: {LEGAL_CONFIG.contactEmail}</p>
        </header>

        <section className="space-y-3 text-white/90 leading-relaxed">
          <h2 className="text-xl font-bold text-cyber-cyan">1. Scope</h2>
          <p>
            This Privacy Policy explains how {LEGAL_CONFIG.operatorName} collects,
            uses, discloses, and protects personal data when you access or use{' '}
            {LEGAL_CONFIG.appName} (the "Service") at {LEGAL_CONFIG.websiteUrl}.
          </p>
        </section>

        <section className="space-y-3 text-white/90 leading-relaxed">
          <h2 className="text-xl font-bold text-cyber-cyan">2. Data We Process</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Technical data: IP address, browser type, device information,
              timestamps, and error logs.
            </li>
            <li>
              Usage data: interactions required to provide game content and
              protect service stability.
            </li>
            <li>
              Communication data: messages you send to support or legal contacts.
            </li>
            <li>
              Consent data: your cookie consent preferences where applicable.
            </li>
          </ul>
          <p>
            We do not intentionally collect special category data. Do not submit
            sensitive personal data through the Service.
          </p>
        </section>

        <section className="space-y-3 text-white/90 leading-relaxed">
          <h2 className="text-xl font-bold text-cyber-cyan">3. Purposes and Legal Bases (GDPR)</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Contract performance: to deliver game content and core functionality.
            </li>
            <li>
              Legitimate interests: security monitoring, abuse prevention,
              reliability, and service improvement.
            </li>
            <li>
              Legal obligations: compliance with applicable laws, court orders,
              and regulatory requirements.
            </li>
            <li>
              Consent: optional cookies or similar technologies where legally
              required.
            </li>
          </ul>
        </section>

        <section className="space-y-3 text-white/90 leading-relaxed">
          <h2 className="text-xl font-bold text-cyber-cyan">4. Cookies and Similar Technologies</h2>
          <p>
            We use strictly necessary cookies to operate the Service. Optional
            cookies are disabled by default and will only be enabled after prior
            consent where required by law.
          </p>
          <p>
            See our Cookie Policy (EU) for full details on categories, lifetimes,
            and how to manage your preferences.
          </p>
        </section>

        <section className="space-y-3 text-white/90 leading-relaxed">
          <h2 className="text-xl font-bold text-cyber-cyan">5. Data Sharing</h2>
          <p>We may share data with:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Infrastructure and hosting providers acting as processors.</li>
            <li>Security and anti-abuse service providers.</li>
            <li>
              Competent authorities where required by law, legal process, or
              to protect rights and safety.
            </li>
          </ul>
          <p>
            We do not sell personal data and do not share personal data for
            cross-context behavioral advertising.
          </p>
        </section>

        <section className="space-y-3 text-white/90 leading-relaxed">
          <h2 className="text-xl font-bold text-cyber-cyan">6. International Transfers</h2>
          <p>
            If data is transferred outside your country or region, we implement
            appropriate safeguards, such as Standard Contractual Clauses or other
            legally recognized transfer mechanisms.
          </p>
        </section>

        <section className="space-y-3 text-white/90 leading-relaxed">
          <h2 className="text-xl font-bold text-cyber-cyan">7. Data Retention</h2>
          <p>
            We retain personal data only as long as necessary for the purposes in
            this policy, including legal, accounting, and security requirements.
            Retention periods depend on data type and legal obligations.
          </p>
        </section>

        <section className="space-y-3 text-white/90 leading-relaxed">
          <h2 className="text-xl font-bold text-cyber-cyan">8. Your Rights</h2>
          <p>
            Depending on your location, you may have rights to access, rectify,
            delete, restrict, object, or port your personal data, and to withdraw
            consent at any time where processing is based on consent.
          </p>
          <p>
            In the EEA/UK/CH, you may also lodge a complaint with your local data
            protection authority.
          </p>
        </section>

        <section className="space-y-3 text-white/90 leading-relaxed">
          <h2 className="text-xl font-bold text-cyber-cyan">9. Children</h2>
          <p>
            The Service is not directed to children below {LEGAL_CONFIG.minimumAge}{' '}
            years old. We do not knowingly collect personal data from children
            below the applicable age threshold.
          </p>
        </section>

        <section className="space-y-3 text-white/90 leading-relaxed">
          <h2 className="text-xl font-bold text-cyber-cyan">10. Security</h2>
          <p>
            We implement reasonable technical and organizational safeguards to
            protect personal data. No method of transmission or storage is fully
            secure, and absolute security cannot be guaranteed.
          </p>
        </section>

        <section className="space-y-3 text-white/90 leading-relaxed">
          <h2 className="text-xl font-bold text-cyber-cyan">11. Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. Material updates will be
            communicated through the Service or other appropriate means.
          </p>
        </section>

        <section className="space-y-3 text-white/90 leading-relaxed">
          <h2 className="text-xl font-bold text-cyber-cyan">12. Contact</h2>
          <p>
            Privacy inquiries, requests, or complaints can be sent to{' '}
            {LEGAL_CONFIG.contactEmail}.
          </p>
          <p>{LEGAL_CONFIG.operatorAddress}</p>
        </section>
      </article>
    </LegalPageLayout>
  );
}
