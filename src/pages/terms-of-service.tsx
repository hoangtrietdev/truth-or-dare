import LegalPageLayout from '@/components/legal/LegalPageLayout';
import { LEGAL_CONFIG } from '@/lib/legal';

export default function TermsOfServicePage() {
  return (
    <LegalPageLayout
      title="Terms of Service"
      description="Terms of Service for the Truth or Dare web application."
    >
      <article className="space-y-8">
        <header className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-pink">
            Terms of Service
          </h1>
          <p className="text-white/80">
            Effective date: {LEGAL_CONFIG.effectiveDate}
          </p>
          <p className="text-white/80">
            Operator: {LEGAL_CONFIG.operatorName}
          </p>
          <p className="text-white/80">Contact: {LEGAL_CONFIG.supportEmail}</p>
        </header>

        <section className="space-y-3 text-white/90 leading-relaxed">
          <h2 className="text-xl font-bold text-cyber-cyan">1. Acceptance of Terms</h2>
          <p>
            By accessing or using {LEGAL_CONFIG.appName}, you agree to be bound by
            these Terms of Service ("Terms"). If you do not agree, do not use the
            Service.
          </p>
        </section>

        <section className="space-y-3 text-white/90 leading-relaxed">
          <h2 className="text-xl font-bold text-cyber-cyan">2. Eligibility</h2>
          <p>
            You must meet the minimum legal age in your jurisdiction to use mature
            features. The Service is not intended for users under{' '}
            {LEGAL_CONFIG.minimumAge}.
          </p>
          <p>
            You are responsible for ensuring your use complies with local laws and
            platform requirements.
          </p>
        </section>

        <section className="space-y-3 text-white/90 leading-relaxed">
          <h2 className="text-xl font-bold text-cyber-cyan">3. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use the Service for unlawful, harmful, or fraudulent activity.</li>
            <li>Attempt to disrupt, overload, or compromise the Service.</li>
            <li>
              Reverse engineer, scrape at scale, or bypass rate limits or security
              controls.
            </li>
            <li>
              Infringe intellectual property rights or violate third-party rights.
            </li>
          </ul>
        </section>

        <section className="space-y-3 text-white/90 leading-relaxed">
          <h2 className="text-xl font-bold text-cyber-cyan">4. Content and Conduct</h2>
          <p>
            The Service provides entertainment content. You are solely responsible
            for your decisions and actions resulting from prompts or dares. Do not
            perform any activity that is unsafe, illegal, coercive, or harmful.
          </p>
        </section>

        <section className="space-y-3 text-white/90 leading-relaxed">
          <h2 className="text-xl font-bold text-cyber-cyan">5. Service Availability</h2>
          <p>
            We may modify, suspend, or discontinue features at any time. We do not
            guarantee uninterrupted availability, error-free operation, or that
            content will always be suitable for every audience.
          </p>
        </section>

        <section className="space-y-3 text-white/90 leading-relaxed">
          <h2 className="text-xl font-bold text-cyber-cyan">6. Intellectual Property</h2>
          <p>
            All rights in the Service, branding, software, and related materials
            are owned by {LEGAL_CONFIG.operatorName} or licensors and protected by
            applicable laws.
          </p>
          <p>
            Subject to these Terms, we grant you a limited, revocable,
            non-transferable, non-exclusive right to use the Service.
          </p>
        </section>

        <section className="space-y-3 text-white/90 leading-relaxed">
          <h2 className="text-xl font-bold text-cyber-cyan">7. Third-Party Services</h2>
          <p>
            The Service may rely on third-party APIs and infrastructure. We are not
            responsible for third-party services, content, policies, or downtime.
          </p>
        </section>

        <section className="space-y-3 text-white/90 leading-relaxed">
          <h2 className="text-xl font-bold text-cyber-cyan">8. Disclaimers</h2>
          <p>
            The Service is provided "as is" and "as available" to the fullest extent
            permitted by law, without warranties of any kind, express or implied.
          </p>
        </section>

        <section className="space-y-3 text-white/90 leading-relaxed">
          <h2 className="text-xl font-bold text-cyber-cyan">9. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, {LEGAL_CONFIG.operatorName} is
            not liable for indirect, incidental, special, consequential, exemplary,
            or punitive damages, or any loss of profits, data, goodwill, or use,
            arising out of or related to your use of the Service.
          </p>
        </section>

        <section className="space-y-3 text-white/90 leading-relaxed">
          <h2 className="text-xl font-bold text-cyber-cyan">10. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless {LEGAL_CONFIG.operatorName}
            from claims, liabilities, losses, and expenses (including legal fees)
            arising from your use of the Service or breach of these Terms.
          </p>
        </section>

        <section className="space-y-3 text-white/90 leading-relaxed">
          <h2 className="text-xl font-bold text-cyber-cyan">11. Termination</h2>
          <p>
            We may suspend or terminate access where necessary to protect users,
            comply with law, or enforce these Terms.
          </p>
        </section>

        <section className="space-y-3 text-white/90 leading-relaxed">
          <h2 className="text-xl font-bold text-cyber-cyan">12. Governing Law and Venue</h2>
          <p>
            These Terms are governed by {LEGAL_CONFIG.governingLaw}. Any disputes
            will be resolved in {LEGAL_CONFIG.disputeVenue}, unless mandatory law
            provides otherwise.
          </p>
        </section>

        <section className="space-y-3 text-white/90 leading-relaxed">
          <h2 className="text-xl font-bold text-cyber-cyan">13. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. Continued use of the
            Service after changes become effective constitutes acceptance of the
            revised Terms.
          </p>
        </section>
      </article>
    </LegalPageLayout>
  );
}
