import type { Metadata } from "next";
import { Footer, Header, bookingUrl } from "../_components/chrome";

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
          <p className="legal-updated">Last updated: August 5, 2026</p>

          <p>
            This notice describes how information may be handled when you visit memberlegacy.com or
            choose to schedule a conversation with Member Legacy.
          </p>

          <h2>Information you provide</h2>
          <p>
            This website does not currently operate an on-site contact form or user account. If you
            use the scheduling link, the information you submit is processed through Google Calendar
            and used to arrange and follow up on the requested conversation.
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
            advertising on this site. A third-party destination, including Google Calendar, may use
            its own cookies and is governed by its own privacy terms.
          </p>

          <h2>Sharing and retention</h2>
          <p>
            Information is used for legitimate business communication, site operation, and security.
            It may be processed by service providers supporting those purposes and retained only as
            reasonably necessary for them or as required by law.
          </p>

          <h2>Your choices</h2>
          <p>
            You may choose not to use the external scheduling link. To raise a privacy question or
            request, use the scheduling link and identify the request in the appointment details.
          </p>

          <p className="legal-callout">
            <strong>Implementation note:</strong> This notice reflects the current public website. It
            should be reviewed whenever analytics, forms, CRM integrations, or other data collection
            are added.
          </p>

          <a className="button" href={bookingUrl} target="_blank" rel="noreferrer">
            Contact Member Legacy
          </a>
        </article>
      </main>
      <Footer />
    </>
  );
}
