import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Footer, Header } from "../_components/chrome";
import { CaseStudyForm } from "./case-study-form";

export const metadata: Metadata = {
  title: "Request a Case Study",
  description:
    "Request a Member Legacy case study tailored to your membership business and strategic priorities.",
  alternates: { canonical: "/case-study" },
};

const requestBenefits = [
  "Examples relevant to membership economics and retention",
  "A clearer view of benefit design and operating considerations",
  "A response from Member Legacy within 48 hours",
];

export default function CaseStudyPage() {
  return (
    <>
      <Header />
      <main className="case-study-main" id="top">
        <section className="case-study-hero">
          <div className="shell case-study-grid">
            <div className="case-study-intro">
              <div className="eyebrow">Case studies</div>
              <h1>See how the model can work in practice.</h1>
              <p>
                Tell us what you are evaluating. We will share the most relevant case study and
                help frame the commercial, member, and operating questions that matter for your
                organization.
              </p>
              <ul>
                {requestBenefits.map((benefit) => (
                  <li key={benefit}>
                    <Check aria-hidden="true" size={17} />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <CaseStudyForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
