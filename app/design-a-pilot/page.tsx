import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Footer, Header } from "../_components/chrome";
import { ScrollToTop } from "../_components/scroll-to-top";
import { DesignPilotForm } from "./design-pilot-form";

export const metadata: Metadata = {
  title: "Design a Pilot",
  description:
    "Explore a controlled Member Legacy pilot for a financial membership, premium account tier, or recurring member platform.",
  alternates: { canonical: "/design-a-pilot" },
};

const workingSessionOutcomes = [
  "A defined cohort and business objective",
  "A first view of the cost ceiling and benefit structure",
  "The operating and measurement questions required for a pilot",
];

export default function DesignPilotPage() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="case-study-main" id="top">
        <section className="case-study-hero">
          <div className="shell case-study-grid">
            <div className="case-study-intro">
              <div className="eyebrow">Design a pilot</div>
              <h1>Start with one decision worth testing.</h1>
              <p>
                Share the member cohort and business objective you are evaluating. We will respond
                within 48 hours to frame a focused working session around the economics, benefit
                design, operating model, and measurement plan.
              </p>
              <ul>
                {workingSessionOutcomes.map((outcome) => (
                  <li key={outcome}>
                    <Check aria-hidden="true" size={17} />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
            <DesignPilotForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
