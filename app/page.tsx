import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Check,
  CircleDollarSign,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { BrandMark, Footer, Header } from "./_components/chrome";
import { ThresholdCalculator } from "./_components/roi-calculator";
import heroImage from "../public/hero-family.webp";

export const metadata: Metadata = {
  title: "Member Legacy | Family Continuity for Membership Organizations",
  description:
    "Member Legacy offers family continuity programs built around the products and services members already value.",
  alternates: { canonical: "/" },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Member Legacy",
  url: "https://memberlegacy.com",
  description:
    "Member Legacy offers family continuity programs built around the products and services members already value.",
};

const challenges = [
  {
    icon: Sparkles,
    title: "Generic benefits are interchangeable",
    body: "Discounts, wellness tools, and off-the-shelf coverage may add value, but similar catalogs are easy for other organizations to offer.",
  },
  {
    icon: CircleDollarSign,
    title: "Insurance can feel abstract",
    body: "A coverage amount alone may be difficult for members to connect to the needs and decisions of everyday family life.",
  },
  {
    icon: UsersRound,
    title: "The organization loses attribution",
    body: "When the benefit feels separate from the core relationship, members may remember the vendor or carrier rather than the organization that made it possible.",
  },
];

const illustrativeSteps = [
  {
    title: "A valued member relationship",
    body: "Eligible premium-tier members who meet a defined tenure requirement receive a base family continuity benefit as part of the membership.",
  },
  {
    title: "A defined covered event",
    body: "If an eligible member dies, the benefit is activated for the family according to the approved program terms.",
  },
  {
    title: "Support the family can immediately understand",
    body: "The family receives a defined monthly allowance for up to 12 months that can be used for groceries and household essentials through the sponsoring organization.",
  },
  {
    title: "Continuity through a familiar relationship",
    body: "The household can keep purchasing necessities during a difficult period, while the organization remains visibly connected to the support it made possible.",
  },
];

const productMappings = [
  {
    relationship: "Household essentials",
    concept: "A defined allowance for groceries and everyday needs",
    outcome: "Purchasing necessities through a familiar relationship",
  },
  {
    relationship: "Saving and investing",
    concept: "Support designed around continued financial progress",
    outcome: "Making progress toward important family goals",
  },
  {
    relationship: "Paid access or services",
    concept: "Continued access or a related defined benefit",
    outcome: "Receiving familiar support without an immediate interruption",
  },
  {
    relationship: "Recurring financial commitments",
    concept: "Temporary support tied to a defined obligation",
    outcome: "Gaining time and financial breathing room",
  },
];

const comparisonRows = [
  {
    generic: "Starts with an existing catalog",
    memberLegacy: "Starts with the organization’s core product and member promise",
  },
  {
    generic: "Adds benefits beside the core offering",
    memberLegacy: "Connects protection directly to the value members already receive",
  },
  {
    generic: "Uses similar products across many partners",
    memberLegacy: "Builds the program, language, and experience for the specific relationship",
  },
  {
    generic: "Sends members into a separate benefit journey",
    memberLegacy: "Makes the protection feel native to the member experience",
  },
  {
    generic: "Measures platform engagement",
    memberLegacy: "Defines organization-specific business outcomes before launch",
  },
];

const programSteps = [
  {
    number: "01",
    title: "Understand the member relationship",
    body: "Identify the core product or service, the members who value it, and the business objective the program should support.",
  },
  {
    number: "02",
    title: "Define the continuity promise",
    body: "Translate that value into a clear form of protection members can understand and families can use after a defined covered event.",
  },
  {
    number: "03",
    title: "Build the program and path to launch",
    body: "Shape the benefit, economics, member experience, operating requirements, go-to-market plan, and measurement approach around the promise.",
  },
];

const lifecycleStages = [
  ["Acquisition", "Supports a distinctive promise grounded in the organization’s core member value"],
  ["Product or tier selection", "Creates a tangible reason to choose or upgrade the relationship"],
  ["Onboarding", "Makes the protection concrete through clear explanation and beneficiary designation where applicable"],
  ["Engagement", "Reinforces the value through relevant, restrained communication"],
  ["Renewal or continued use", "Creates another reason for members to preserve the relationship"],
  ["Covered event", "Is designed to deliver the organization’s promise when the family needs it"],
  ["Family continuity", "Creates an appropriate path for the family to continue the relationship"],
];

const programStructures = [
  {
    title: "Included protection",
    body: "The organization sponsors a defined base benefit for an eligible member group.",
  },
  {
    title: "Premium-tier protection",
    body: "The benefit strengthens a higher-value account, plan, or membership tier.",
  },
  {
    title: "Optional enhancement",
    body: "Eligible members may choose additional protection under separately approved terms.",
  },
  {
    title: "Hybrid program",
    body: "An organization-sponsored foundation can be paired with an optional member-paid enhancement.",
  },
];

const partnerSignals = [
  "A trusted, recurring member relationship",
  "A core product or service with tangible household value",
  "A defined member population and direct communication channel",
  "A strategic need to improve differentiation, acquisition, upgrades, engagement, or retention",
  "Enough relationship value to support an included, premium-tier, optional, or hybrid structure",
];

const faqs = [
  {
    question: "What is a family continuity program?",
    answer:
      "A family continuity program connects protection to a product or service members already value, helping the family continue, replace, or fund part of that value after a defined covered event.",
  },
  {
    question: "What could this look like for a membership organization?",
    answer:
      "One illustrative structure could provide eligible premium-tier members with a base benefit that gives their family a defined monthly allowance for household essentials after a covered event. Other organizations may build continuity around savings, services, access, or recurring financial commitments. Every structure is subject to product, legal, compliance, operational, and partner approval.",
  },
  {
    question: "How does Member Legacy build a program?",
    answer:
      "We begin with the organization’s core product or service, the members it serves, the family outcome it wants to make possible, and the business objective it wants to test. Those inputs shape the program, economics, member experience, operating requirements, go-to-market plan, and measurement approach.",
  },
  {
    question: "Who establishes the program terms?",
    answer:
      "Eligibility, covered events, benefit amounts, duration, funding, insurance structure, administration, availability, and regulatory treatment are established for each program with the appropriate legal, compliance, operating, and provider approvals.",
  },
  {
    question: "Must the organization pay for the entire benefit?",
    answer:
      "No single funding model fits every relationship. A program may use an included organization-sponsored benefit, a premium-tier benefit, an optional member-paid enhancement, or a hybrid structure. Product availability and regulatory requirements must be evaluated for each program.",
  },
  {
    question: "How much does a program cost?",
    answer:
      "There is no universal published price. Cost depends on the eligible and covered populations, covered events, benefit design, duration, insurance structure, administration, member experience, and pilot scope. Member Legacy designs against an organization-approved cost ceiling and measurement plan.",
  },
  {
    question: "Is every program structure available in every market?",
    answer:
      "No. Product availability, underwriting, funding, administration, legal requirements, and regulatory treatment vary by program and market. Availability is confirmed only after the relevant structure and partners have been evaluated and approved.",
  },
  {
    question: "Does Member Legacy guarantee retention or ROI?",
    answer:
      "No. Outcomes depend on the program, population, communication, operating execution, and market conditions. The business case begins with transparent break-even math and a controlled measurement plan, not a promised lift.",
  },
  {
    question: "How does a pilot begin?",
    answer:
      "A working session identifies the core product or service, target member group, desired family outcome, business objective, cost ceiling, potential program structure, operating requirements, and measurement approach. Member Legacy then frames a concept and controlled pilot for organization and provider review.",
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
        <section className="hero product-hero">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Family continuity for membership-based organizations</div>
              <h1>
                Turn what members value today into protection their families can rely on <span>tomorrow.</span>
              </h1>
              <p className="hero-lede product-hero-lede">
                Member Legacy offers family continuity programs built around the products and
                services your members already value. We bring together benefit design, program
                economics, operations, and go-to-market expertise to make the protection simple for
                members to understand, meaningful to their families, and valuable to the
                organization over time.
              </p>
              <div className="hero-actions">
                <Link className="button" href="/design-a-pilot#top">
                  Explore a program
                  <ArrowRight aria-hidden="true" size={18} strokeWidth={1.8} />
                </Link>
                <Link className="text-link" href="#example">
                  See how it works
                  <ArrowDown aria-hidden="true" size={17} />
                </Link>
              </div>
              <div className="hero-principles" aria-label="Program principles">
                <span><Check aria-hidden="true" size={15} /> Built around your core product and value proposition</span>
                <span><Check aria-hidden="true" size={15} /> Designed to offer distinctive value to members and their families</span>
                <span><Check aria-hidden="true" size={15} /> Structured for measurable, durable business value</span>
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
                <p>Protection that feels like a natural extension of your promise.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="signal-strip" aria-label="What makes the program different">
          <div className="shell signal-grid">
            <div>
              <strong>More than an added benefit</strong>
              <span>Extends the value members already associate with your organization</span>
            </div>
            <div>
              <strong>More than a payout</strong>
              <span>Turns protection into something families can picture and use</span>
            </div>
            <div>
              <strong>More than a launch</strong>
              <span>Creates a promise designed to support upgrades, engagement, retention, and continuity</span>
            </div>
          </div>
        </section>

        <section className="section benefit-section" id="why-it-matters">
          <div className="shell">
            <div className="section-heading split-heading">
              <div>
                <div className="eyebrow">The disconnect</div>
                <h2>Most member benefits sit beside the relationship. The strongest ones grow from it.</h2>
              </div>
              <p>
                Membership organizations invest in benefits to differentiate their offering and
                strengthen member relationships. Too often, those benefits feel generic, sit apart
                from the core product, and give members little reason to connect the value with the
                organization that provided it.
              </p>
            </div>
            <div className="benefit-grid">
              {challenges.map(({ icon: Icon, title, body }, index) => (
                <article className="benefit-card challenge-card" key={title}>
                  <div className="card-topline">
                    <Icon aria-hidden="true" size={24} strokeWidth={1.5} />
                    <span>0{index + 1}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
            <div className="consequence-band">
              <span>The consequence</span>
              <p>
                The organization pays for a benefit, but the member may not fully understand it,
                value it, or connect it to the relationship.
              </p>
            </div>
          </div>
        </section>

        <section className="section example-section" id="example">
          <div className="shell">
            <div className="example-intro">
              <div>
                <div className="eyebrow light-eyebrow">An illustrative member program</div>
                <h2>Make family continuity as tangible as a year of help with everyday essentials.</h2>
              </div>
              <p>
                Consider a membership organization built around groceries and household essentials.
                Instead of adding a generic insurance benefit beside the membership, the organization
                connects the protection directly to what members already rely on.
              </p>
            </div>
            <div className="example-flow" aria-label="Illustrative member program flow">
              {illustrativeSteps.map((step, index) => (
                <article key={step.title}>
                  <span className="example-step-number">0{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              ))}
            </div>
            <div className="example-reveal">
              <span>The idea made tangible</span>
              <p>
                The protection is no longer an abstract dollar amount. It is a year of help with
                everyday essentials, delivered through a relationship the family already knows.
              </p>
            </div>
            <div className="example-value">
              <span>Value to the organization</span>
              <p>
                For the organization, the same program can make a premium tier more distinctive,
                give members a tangible reason to join, upgrade, and stay, and extend the
                relationship to the family when it matters most.
              </p>
            </div>
            <p className="qualification example-qualification">
              This example is illustrative. Eligibility, covered events, benefit amounts, duration,
              funding, insurance structure, administration, availability, and regulatory treatment
              must be established and approved for each program.
            </p>
          </div>
        </section>

        <section className="section mapping-section" id="our-approach">
          <div className="shell">
            <div className="mapping-intro">
              <div>
                <div className="eyebrow">The principle</div>
                <h2>The product may change. The continuity logic does not.</h2>
              </div>
              <div className="mapping-copy">
                <p>
                  Member Legacy starts with the value members already receive and asks what part of
                  that value their families should be able to continue, replace, or fund after a
                  defined covered event. That connection makes the protection easier to understand
                  and more closely associated with the organization providing it.
                </p>
                <p>
                  Household essentials are one example. The same design principle can apply to
                  saving and investing, paid access and services, recurring financial commitments,
                  and other products with tangible value in members’ lives.
                </p>
              </div>
            </div>

            <div className="product-map" aria-label="Illustrative product-to-protection concepts">
              <div className="product-map-head" aria-hidden="true">
                <span>What members value now</span>
                <span>Family continuity concept</span>
                <span>What the family can continue</span>
              </div>
              {productMappings.map((item, index) => (
                <article className="product-map-row" key={item.relationship}>
                  <div data-label="What members value now">
                    <span className="map-number">0{index + 1}</span>
                    <strong>{item.relationship}</strong>
                  </div>
                  <div data-label="Family continuity concept">
                    <ArrowRight aria-hidden="true" size={17} />
                    <span>{item.concept}</span>
                  </div>
                  <div data-label="What the family can continue">
                    <Check aria-hidden="true" size={17} />
                    <span>{item.outcome}</span>
                  </div>
                </article>
              ))}
            </div>
            <p className="qualification">
              Concepts are illustrative. Each program is subject to benefit and product design,
              underwriting, legal, compliance, operational, availability, and partner approval.
            </p>
          </div>
        </section>

        <section className="section comparison-section">
          <div className="shell comparison-layout">
            <div className="comparison-intro">
              <div className="eyebrow">Built, not bundled</div>
              <h2>Begin with the member promise, not a benefits catalog.</h2>
              <p>
                Member Legacy does not begin with a shelf of unrelated benefits. We begin with what
                members already value, what their families should be able to continue, and what the
                organization wants the relationship to mean. The program is then built around that
                connection.
              </p>
            </div>
            <div className="comparison-grid" role="list" aria-label="Approach comparison">
              <div className="comparison-head" aria-hidden="true">
                <span>Generic benefits platform</span>
                <span>The Member Legacy approach</span>
              </div>
              {comparisonRows.map((row) => (
                <div className="comparison-row" role="listitem" key={row.generic}>
                  <div data-label="Generic benefits platform">{row.generic}</div>
                  <div data-label="The Member Legacy approach"><Check aria-hidden="true" size={16} />{row.memberLegacy}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section capability-section">
          <div className="shell">
            <div className="section-heading centered-heading capability-heading">
              <div className="eyebrow light-eyebrow">How we make it work</div>
              <h2>Start with member value. Build around what the family should be able to continue.</h2>
              <p>
                The member proposition should feel simple. Behind it, Member Legacy brings together
                the benefit design, economics, operations, and go-to-market work required to turn
                the idea into a responsible program.
              </p>
            </div>
            <div className="capability-grid capability-grid-three">
              {programSteps.map(({ number, title, body }) => (
                <article key={title}>
                  <div className="capability-topline">
                    <span>Program development</span>
                    <span>{number}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
            <div className="program-note dark-program-note">
              <ShieldCheck aria-hidden="true" size={24} strokeWidth={1.5} />
              <p>
                Final eligibility, covered events, benefit terms, insurance structure, funding,
                administration, and regulatory treatment are established for each program before launch.
              </p>
            </div>
          </div>
        </section>

        <section className="section lifecycle-section" id="business-value">
          <div className="shell lifecycle-layout">
            <div className="lifecycle-intro">
              <div className="eyebrow">One program, multiple moments of value</div>
              <h2>A promise members can understand can become a reason to choose, upgrade, and stay.</h2>
              <p>
                Because the protection is connected to the core member value proposition, the
                program can tell one consistent story from initial consideration through the
                moment the family needs it. Each program should define the business outcomes it is
                intended to support and measure them through a controlled pilot.
              </p>
            </div>
            <div className="lifecycle-list">
              {lifecycleStages.map(([moment, role], index) => (
                <article key={moment}>
                  <span className="lifecycle-index">0{index + 1}</span>
                  <div>
                    <h3>{moment}</h3>
                    <p>{role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section structure-section">
          <div className="shell">
            <div className="section-heading split-heading structure-heading">
              <div>
                <div className="eyebrow">Designed around the relationship</div>
                <h2>One principle. Multiple program structures.</h2>
              </div>
              <p>
                These are structures to evaluate. The right structure follows the member
                relationship, the desired outcome, market availability, and the economics the
                organization is prepared to support.
              </p>
            </div>
            <div className="structure-grid">
              {programStructures.map((item, index) => (
                <article key={item.title}>
                  <span>0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
            <p className="qualification structure-qualification">
              The appropriate structure depends on the member population, business objective,
              economics, product availability, and regulatory requirements.
            </p>
          </div>
        </section>

        <section className="section partner-fit-section">
          <div className="shell partner-fit-layout">
            <div className="partner-fit-copy">
              <div className="eyebrow light-eyebrow">Where the model fits</div>
              <h2>Built for membership relationships with real value to protect.</h2>
              <p>
                The strongest opportunities begin with a trusted, recurring member relationship, a
                product or service with tangible value, a defined population, and a clear reason to
                strengthen the relationship. The model can apply across paid memberships, premium
                account tiers, subscriptions, and other membership-based relationships without
                being limited to a single industry.
              </p>
            </div>
            <div className="partner-fit-panel">
              <span>Strong opportunity signals</span>
              <ul>
                {partnerSignals.map((signal) => (
                  <li key={signal}><Check aria-hidden="true" size={17} />{signal}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section economics-section" id="economics">
          <div className="shell">
            <div className="section-heading economics-heading">
              <div>
                <div className="eyebrow light-eyebrow">The business case</div>
                <h2>Know what the program has to prove before it launches.</h2>
              </div>
              <p>
                Use a defined member population, estimated program cost, and contribution margin
                to calculate the incremental relationship value required to break even. The model
                establishes a decision threshold. It does not predict performance.
              </p>
            </div>
            <ThresholdCalculator />
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="shell faq-grid">
            <div className="faq-intro">
              <div className="eyebrow">Questions worth asking</div>
              <h2>Clarity before commitment.</h2>
              <p>
                Family continuity programs require precise economics, responsibilities, and member
                language. A serious evaluation should surface these questions early.
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
              <div className="eyebrow light-eyebrow">Start with what members value</div>
              <h2>What should your members&apos; families be able to continue?</h2>
              <p>
                Bring one member group, one core product or service, and one business objective.
                Member Legacy will help frame a family continuity concept and a practical path to a
                controlled pilot.
              </p>
            </div>
            <Link className="button button-inverse" href="/design-a-pilot#top">
              Explore a program
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
