import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Check,
  HeartHandshake,
  LineChart,
  Settings2,
  ShieldCheck,
} from "lucide-react";
import { BrandMark, Footer, Header, bookingUrl } from "./_components/chrome";
import { RoiCalculator } from "./_components/roi-calculator";
import heroImage from "../public/hero-family.webp";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Member Legacy",
  url: "https://memberlegacy.com",
  description:
    "A member-exclusive family support benefit designed to deepen loyalty and create measurable value for membership brands.",
};

const benefits = [
  {
    icon: HeartHandshake,
    title: "Loyalty with emotional weight",
    body: "Move beyond points and discounts with support members can genuinely value. It gives families something worth remembering.",
  },
  {
    icon: LineChart,
    title: "Economics you can interrogate",
    body: "Model program cost against your own member value and retention assumptions before making a decision.",
  },
  {
    icon: Settings2,
    title: "Designed for low operational drag",
    body: "Define eligibility, activation, and redemption workflows up front so the program fits the way your team works.",
  },
];

const steps = [
  {
    number: "01",
    title: "Design the benefit",
    body: "Set eligibility, monthly allowance, duration, and the places value can be redeemed inside your ecosystem.",
  },
  {
    number: "02",
    title: "Offer it exclusively",
    body: "Introduce Member Legacy as a clear membership benefit, not a promotion available to everyone.",
  },
  {
    number: "03",
    title: "Support the family",
    body: "When the benefit is activated, the family receives the agreed monthly allowance to use with your brand.",
  },
];

const provisionValues = [
  {
    number: "01",
    title: "Optimize member value",
    body: "Give qualified members a practical protection benefit they can understand, trust, and use without adding another points program.",
  },
  {
    number: "02",
    title: "Extend loyalty across generations",
    body: "Support a member's family inside the brand ecosystem and create a natural path for the relationship to continue.",
  },
  {
    number: "03",
    title: "Execute with discipline",
    body: "Use targeted eligibility, flexible risk structures, and a staged rollout to manage cost while validating performance.",
  },
];

const faqs = [
  {
    question: "Which membership businesses are the best fit?",
    answer:
      "Programs with meaningful member relationships, recurring revenue, and a clear redemption ecosystem are the strongest starting point. The working session tests fit before anyone discusses implementation.",
  },
  {
    question: "How much does the program cost?",
    answer:
      "The current planning range runs from $0.05 to $0.50 per member per month. Actual pricing depends on the benefit design, member population, eligibility, duration, administration, and other agreed program terms.",
  },
  {
    question: "Is a retention lift guaranteed?",
    answer:
      "No. The calculator is a scenario model, not evidence of guaranteed performance. A credible business case should use your economics, conservative assumptions, and a measurement plan established before launch.",
  },
  {
    question: "How much work lands on our team?",
    answer:
      "The program is designed to minimize operational lift, but 'zero lift' would be an unserious promise. Your team will still align on eligibility, member communication, escalation paths, reporting, and brand standards.",
  },
  {
    question: "Is Member Legacy an insurance product?",
    answer:
      "The website does not make that classification. Funding, eligibility, administration, and regulatory treatment depend on the final program design and jurisdiction. The benefit should be described exactly as implemented, with appropriate legal review before launch.",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main>
        <section className="hero">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                A family continuity benefit for membership brands
              </div>
              <h1>
                Turn membership into something <span>families remember.</span>
              </h1>
              <p className="hero-lede">
                Member Legacy is designed so an eligible member&apos;s family can receive a defined
                monthly allowance within the sponsoring brand if the unexpected happens. It
                combines a deeply human promise with commercial discipline and a practical
                operating model.
              </p>
              <div className="hero-actions">
                <Link className="button" href="#economics">
                  Model your economics
                  <ArrowDown aria-hidden="true" size={18} strokeWidth={1.8} />
                </Link>
                <a
                  className="text-link"
                  href={bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Book a 30-minute conversation
                  <ArrowRight aria-hidden="true" size={17} />
                </a>
              </div>
              <div className="hero-principles" aria-label="Program principles">
                <span><Check aria-hidden="true" size={15} /> Member-exclusive</span>
                <span><Check aria-hidden="true" size={15} /> Brand-redeemable</span>
                <span><Check aria-hidden="true" size={15} /> Economics-first</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="image-frame">
                <Image
                  src={heroImage}
                  alt="Three generations of a family sharing a warm moment together"
                  fill
                  sizes="(max-width: 900px) 100vw, 52vw"
                  placeholder="blur"
                  preload
                />
              </div>
              <BrandMark className="hero-brand-mark" />
              <div className="hero-quote">
                <span aria-hidden="true">“</span>
                <p>A benefit competitors cannot copy with another discount.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="signal-strip" aria-label="Program highlights">
          <div className="shell signal-grid">
            <div>
              <strong>$0.05 to $0.50</strong>
              <span>current planning range per active member each month</span>
            </div>
            <div>
              <strong>Brand-contained</strong>
              <span>allowance designed for your ecosystem</span>
            </div>
            <div>
              <strong>Measurable</strong>
              <span>economics and retention tested explicitly</span>
            </div>
          </div>
        </section>

        <section className="section benefit-section">
          <div className="shell">
            <div className="section-heading split-heading">
              <div>
                <div className="eyebrow">The strategic case</div>
                <h2>Retention is emotional before it is mathematical.</h2>
              </div>
              <p>
                Most loyalty programs optimize transactions. Member Legacy is designed to create a
                different kind of bond, one grounded in belonging, reciprocity, and continuity.
              </p>
            </div>
            <div className="benefit-grid">
              {benefits.map(({ icon: Icon, title, body }, index) => (
                <article className="benefit-card" key={title}>
                  <div className="card-topline">
                    <Icon aria-hidden="true" size={24} strokeWidth={1.5} />
                    <span>0{index + 1}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section how-section" id="how-it-works">
          <div className="shell">
            <div className="section-heading centered-heading">
              <div className="eyebrow">How it works</div>
              <h2>Simple to understand. Serious enough to design properly.</h2>
              <p>
                The member promise stays clear because the program mechanics are settled before launch.
              </p>
            </div>
            <div className="steps-grid">
              {steps.map((step) => (
                <article className="step-card" key={step.number}>
                  <span className="step-number">{step.number}</span>
                  <div className="step-line" aria-hidden="true" />
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              ))}
            </div>
            <div className="program-note">
              <ShieldCheck aria-hidden="true" size={24} strokeWidth={1.5} />
              <p>
                Final terms cover eligibility, funding, administration, redemption, and compliance.
                They are defined for each program before member-facing communication begins.
              </p>
            </div>
          </div>
        </section>

        <section className="section provision-section" id="provision">
          <div className="shell">
            <div className="provision-intro">
              <div>
                <div className="eyebrow">Member Legacy Provision</div>
                <h2>A small member investment. A benefit families can feel.</h2>
              </div>
              <div className="provision-summary">
                <p>
                  For a planning cost below $0.30 per eligible member each month, a membership
                  brand can offer qualified members a company funded income protection benefit at
                  no cost to the member.
                </p>
                <Link className="text-link" href="/case-study">
                  Request the case study
                  <ArrowRight aria-hidden="true" size={17} />
                </Link>
              </div>
            </div>

            <div className="provision-mechanics">
              <div className="provision-promise">
                <span>Illustrative member promise</span>
                <h3>Protection built into a relationship members already trust.</h3>
                <p>
                  A typical program can provide a beneficiary with a shopping allowance of up to
                  $1,000 each month for up to 12 months, together with continued membership if the
                  unexpected happens. Qualified members may also choose additional coverage at
                  their own expense.
                </p>
                <div className="provision-model">
                  <strong>2% to 3.5%</strong>
                  <span>modeled retention lift among targeted member cohorts</span>
                </div>
              </div>

              <div className="provision-values">
                {provisionValues.map((value) => (
                  <article key={value.number}>
                    <span>{value.number}</span>
                    <div>
                      <h3>{value.title}</h3>
                      <p>{value.body}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <p className="provision-note">
              Illustrative economics and benefit terms are planning assumptions, not guarantees.
              Final eligibility, funding, benefit amounts, duration, administration, and regulatory
              treatment are defined for each program.
            </p>
          </div>
        </section>

        <section className="section economics-section" id="economics">
          <div className="shell">
            <div className="section-heading economics-heading">
              <div>
                <div className="eyebrow light-eyebrow">The business case</div>
                <h2>Put your numbers on the table.</h2>
              </div>
              <p>
                Replace vague ROI language with a model your finance team can challenge. Start with
                conservative assumptions; improve them with real program data.
              </p>
            </div>
            <RoiCalculator />
          </div>
        </section>

        <section className="section fit-section" id="fit">
          <div className="shell fit-grid">
            <div className="fit-copy">
              <div className="eyebrow">Program fit</div>
              <h2>Built to earn trust on both sides of the membership.</h2>
              <p>
                A thoughtful benefit must work for the family receiving it and the team responsible
                for delivering the promise.
              </p>
              <a className="text-link" href={bookingUrl} target="_blank" rel="noreferrer">
                Test the fit for your brand
                <ArrowRight aria-hidden="true" size={17} />
              </a>
            </div>
            <div className="fit-panels">
              <article className="fit-panel member-panel">
                <span>For members & families</span>
                <h3>A promise they can understand.</h3>
                <ul>
                  <li><Check aria-hidden="true" size={17} /> Clear eligibility and benefit terms</li>
                  <li><Check aria-hidden="true" size={17} /> Compassionate activation process</li>
                  <li><Check aria-hidden="true" size={17} /> Useful value within a familiar brand</li>
                </ul>
              </article>
              <article className="fit-panel team-panel">
                <span>For your team</span>
                <h3>A program they can operate.</h3>
                <ul>
                  <li><Check aria-hidden="true" size={17} /> Explicit economics and success measures</li>
                  <li><Check aria-hidden="true" size={17} /> Agreed workflows and escalation paths</li>
                  <li><Check aria-hidden="true" size={17} /> Brand, legal, and compliance review</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="shell faq-grid">
            <div className="faq-intro">
              <div className="eyebrow">Questions worth asking</div>
              <h2>Clarity before commitment.</h2>
              <p>
                A benefit this personal should not be sold with hand-waving. These are the questions
                a serious evaluation should surface early.
              </p>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <details key={faq.question} open={index === 0}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="closing-section">
          <div className="shell closing-card">
            <div className="closing-copy">
              <div className="eyebrow light-eyebrow">A more enduring reason to stay</div>
              <h2>See whether Member Legacy belongs in your membership.</h2>
              <p>
                Bring your member economics. Leave with a sharper view of fit, break-even, and the
                decisions required to move forward.
              </p>
            </div>
            <a className="button button-inverse" href={bookingUrl} target="_blank" rel="noreferrer">
              Book a working session
              <ArrowRight aria-hidden="true" size={18} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
