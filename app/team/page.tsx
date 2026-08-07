import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Footer, Header } from "../_components/chrome";

export const metadata: Metadata = {
  title: "The Team",
  description:
    "Meet Dennis Li, founder of Member Legacy, and learn about the experience behind the company.",
  alternates: { canonical: "/team" },
};

const focusAreas = ["Growth strategy", "Distribution", "Partnerships", "Technology"];

export default function TeamPage() {
  return (
    <>
      <Header />
      <main className="team-main">
        <section className="team-hero">
          <div className="shell team-hero-grid">
            <div className="team-intro">
              <div className="eyebrow">The team</div>
              <h1>Meet the founder behind Member Legacy.</h1>
              <p>
                Member Legacy is founder led, combining a deeply human member promise with
                practical commercial and operational design.
              </p>
            </div>

            <article className="team-profile-card">
              <div className="team-monogram" aria-hidden="true">
                DL
              </div>
              <span className="team-role">Founder</span>
              <h2>Dennis Li</h2>
              <p>
                Dennis founded Member Legacy to help membership brands create meaningful support
                for families when the unexpected happens. His work spans growth strategy,
                distribution, partnerships, and technology across the life insurance value chain.
              </p>
              <div className="team-focus" aria-label="Areas of experience">
                {focusAreas.map((area) => (
                  <span key={area}>{area}</span>
                ))}
              </div>
              <a
                className="team-profile-link"
                href="https://dennisx.com"
                target="_blank"
                rel="noreferrer"
              >
                Learn more about Dennis
                <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
