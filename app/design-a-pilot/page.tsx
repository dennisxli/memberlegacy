import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Footer, Header } from "../_components/chrome";
import { ScrollToTop } from "../_components/scroll-to-top";
import { DesignPilotForm } from "./design-pilot-form";

export const metadata: Metadata = {
  title: "Explore a Program",
  description:
    "Explore a partner-connected family protection program designed around your core product, customer relationship, economics, and operating model.",
  alternates: { canonical: "/design-a-pilot" },
};

const workingSessionOutcomes = [
  "A clear product-to-protection concept",
  "A first view of the target population, funding structure, and cost ceiling",
  "The operating, compliance, and measurement questions required for a controlled pilot",
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
              <div className="eyebrow">Explore a program</div>
              <h1>Start with the value you want families to continue.</h1>
              <p>
                Share the product or service your customers rely on, the customer group you are
                considering, and the business objective you want to test. We will use that context
                to frame a focused working session around the protected outcome, program structure,
                economics, operating model, and measurement plan.
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
