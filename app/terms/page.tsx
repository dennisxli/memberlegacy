import type { Metadata } from "next";
import { Footer, Header, bookingUrl } from "../_components/chrome";

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
          <p className="legal-updated">Last updated: August 5, 2026</p>

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
            Descriptions of Member Legacy are illustrative. Final eligibility, funding, allowance,
            duration, administration, redemption, compliance, and other terms are established in a
            separate written agreement for each program.
          </p>

          <h2>ROI calculator</h2>
          <p>
            Calculator outputs are hypothetical scenarios based entirely on the inputs selected. They
            are not forecasts, evidence of results, or guarantees. Actual costs and outcomes may differ
            materially and require independent evaluation.
          </p>

          <h2>Intellectual property</h2>
          <p>
            Unless otherwise stated, the site’s branding, copy, design, and original content are owned
            by or licensed to Member Legacy. You may not reproduce or commercially exploit them without
            permission.
          </p>

          <h2>Third-party services</h2>
          <p>
            The site may link to third-party services, including Google Calendar. Member Legacy does not
            control those services and is not responsible for their availability, content, security, or
            terms.
          </p>

          <h2>No warranty</h2>
          <p>
            The site is provided on an “as available” basis. To the extent permitted by law, Member
            Legacy disclaims warranties arising from use of the site and is not liable for indirect or
            consequential loss resulting from that use.
          </p>

          <p className="legal-callout">
            <strong>Implementation note:</strong> These website terms are a practical launch draft, not
            a substitute for review by counsel for the operating entity and jurisdictions involved.
          </p>

          <a className="button" href={bookingUrl} target="_blank" rel="noreferrer">
            Ask a question
          </a>
        </article>
      </main>
      <Footer />
    </>
  );
}
