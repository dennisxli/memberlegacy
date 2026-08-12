import type { Metadata } from "next";
import { Footer, Header } from "../_components/chrome";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Member Legacy handles information on this website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="legal-main">
        <article className="shell legal-article">
          <div className="eyebrow">Privacy</div>
          <h1>Privacy notice</h1>
          <p className="legal-updated">Last updated: August 11, 2026</p>

          <p>
            This notice describes how information may be handled when you visit memberlegacy.com or
            submit a pilot inquiry to Member Legacy.
          </p>

          <h2>Information you provide</h2>
          <p>
            The Design a Pilot form collects your name, work email, company, primary use case, and
            any optional business objective or question you choose to share. Member Legacy uses
            this information to evaluate and respond to your request. The site does not operate
            public user accounts.
          </p>

          <h2>Technical information</h2>
          <p>
            Hosting and infrastructure providers may process standard technical information such as
            IP address, browser type, device information, requested pages, and timestamps to deliver,
            secure, and diagnose the site.
          </p>

          <h2>Cookies and analytics</h2>
          <p>
            Member Legacy does not currently place advertising cookies or operate behavioral
            advertising on this site. Service providers may use essential technologies required to
            operate and secure their services under their own privacy terms.
          </p>

          <h2>Sharing and retention</h2>
          <p>
            Information is used for legitimate business communication, site operation, and security.
            Pilot inquiry data is transmitted through website infrastructure and recorded in a
            restricted Google Sheet, with an email notification sent to Member Legacy. Information
            may be processed by service providers supporting those purposes and retained only as
            reasonably necessary or as required by law.
          </p>

          <h2>Your choices</h2>
          <p>
            You may choose not to submit the form. To ask a privacy question or request access,
            correction, or deletion of information you submitted, contact
            dennis@memberlegacy.com.
          </p>

          <p className="legal-callout">
            Member Legacy may update this notice as the website, forms, or supporting services
            change. The date above identifies the current version.
          </p>

          <a className="button" href="mailto:dennis@memberlegacy.com">
            Contact Member Legacy
          </a>
        </article>
      </main>
      <Footer />
    </>
  );
}
