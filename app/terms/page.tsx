import type { Metadata } from "next";
import { Footer, Header } from "../_components/chrome";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms governing use of the Member Legacy website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="legal-main">
        <article className="shell legal-article">
          <div className="eyebrow">Terms</div>
          <h1>Website terms</h1>
          <p className="legal-updated">Last updated: August 12, 2026</p>

          <p>
            These terms govern use of memberlegacy.com. By using the site, you agree to use it lawfully
            and not interfere with its operation or security.
          </p>

          <h2>Informational purpose</h2>
          <p>
            Site content is general business information. It is not legal, financial, insurance, tax,
            or regulatory advice and does not create a client, fiduciary, or contractual relationship.
          </p>

          <h2>Program descriptions</h2>
          <p>
            Descriptions of Member Legacy are illustrative. Final eligibility, funding, benefit
            amount and duration, administration, customer experience, regulatory treatment, and other
            terms are established in a separate written agreement for each program.
          </p>

          <h2>Break even calculator</h2>
          <p>
            Calculator outputs are threshold scenarios based entirely on the information a visitor
            enters. They are not forecasts, evidence of results, or guarantees. Costs and outcomes
            require independent evaluation and may differ materially.
          </p>

          <h2>Intellectual property</h2>
          <p>
            Unless otherwise stated, the site’s branding, copy, design, and original content are owned
            by or licensed to Member Legacy. You may not reproduce or commercially exploit them without
            permission.
          </p>

          <h2>Third-party services</h2>
          <p>
            The site may use or link to third party services. Member Legacy does not control those
            services and is not responsible for their availability, content, security, or terms.
          </p>

          <h2>No warranty</h2>
          <p>
            The site is provided on an “as available” basis. To the extent permitted by law, Member
            Legacy disclaims warranties arising from use of the site and is not liable for indirect or
            consequential loss resulting from that use.
          </p>

          <p className="legal-callout">
            Pilot participation, insurance arrangements, and any commercial engagement are governed
            by separate written agreements, not these website terms.
          </p>

          <a className="button" href="mailto:dennis@memberlegacy.com">
            Ask a question
          </a>
        </article>
      </main>
      <Footer />
    </>
  );
}
