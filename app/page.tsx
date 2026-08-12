import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Check,
  CircleDollarSign,
  HeartHandshake,
  Layers3,
  Network,
  Route,
  Settings2,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { BrandMark, Footer, Header } from "./_components/chrome";
import { ThresholdCalculator } from "./_components/roi-calculator";
import heroImage from "../public/hero-family.webp";

export const metadata: Metadata = {
  title: "Member Legacy | Product-Connected Family Protection",
  description:
    "Member Legacy designs family protection programs around the products and services customers already value, aligning benefit design, insurance economics, operations, and measurement.",
  alternates: { canonical: "/" },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Member Legacy",
  url: "https://memberlegacy.com",
  description:
    "Member Legacy designs partner-specific family protection programs around the products and services customers already value.",
};

const challenges = [
  {
    icon: Sparkles,
    title: "Generic benefits are interchangeable",
    body: "Discounts, wellness tools, and off-the-shelf coverage can add value, but competitors can offer similar catalogs.",
  },
  {
    icon: CircleDollarSign,
    title: "Insurance can feel abstract",
    body: "A generic coverage amount may be difficult to connect to the needs and decisions of everyday family life.",
  },
  {
    icon: UsersRound,
    title: "The partner loses attribution",
    body: "When the benefit feels separate from the core relationship, customers may remember the vendor or carrier rather than the organization that made it possible.",
  },
];

const productMappings = [
  {
    relationship: "Household essentials",
    concept: "A defined allowance for groceries and everyday needs",
    outcome: "The family can continue purchasing necessities",
  },
  {
    relationship: "Saving and investing",
    concept: "Support designed around continued financial progress",
    outcome: "The family’s goals do not stop at the covered event",
  },
  {
    relationship: "Paid access or services",
    concept: "Continued access or a related defined benefit",
    outcome: "The household keeps receiving familiar support",
  },
  {
    relationship: "Recurring financial commitments",
    concept: "Temporary support tied to a defined obligation",
    outcome: "The family gains time and financial breathing room",
  },
];

const comparisonRows = [
  {
    generic: "Starts with an existing catalog",
    memberLegacy: "Starts with the partner’s core product and customer promise",
  },
  {
    generic: "Adds benefits beside the core offering",
    memberLegacy: "Connects protection directly to the value customers already receive",
  },
  {
    generic: "Uses similar products across many partners",
    memberLegacy: "Designs the program, language, and experience for the specific relationship",
  },
  {
    generic: "Sends customers into a separate benefit journey",
    memberLegacy: "Makes the protection feel native to the partner experience",
  },
  {
    generic: "Measures platform engagement",
    memberLegacy: "Defines partner-specific business outcomes before launch",
  },
];

const capabilities = [
  {
    number: "01",
    icon: Route,
    title: "Relationship strategy",
    body: "Define the customer cohort, partner objective, and behavior the program should support.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Benefit architecture",
    body: "Translate the partner’s core value into a clear protected outcome and customer promise.",
  },
  {
    number: "03",
    icon: CircleDollarSign,
    title: "Insurance economics",
    body: "Establish the cost ceiling, funding approach, benefit parameters, eligibility, and supporting insurance structure.",
  },
  {
    number: "04",
    icon: Network,
    title: "Partner orchestration",
    body: "Align the required carrier, administrator, technology, legal, compliance, and operational participants.",
  },
  {
    number: "05",
    icon: HeartHandshake,
    title: "Customer and family experience",
    body: "Design communication, activation, beneficiary designation, servicing, and the experience following a covered event.",
  },
  {
    number: "06",
    icon: Settings2,
    title: "Launch and measurement",
    body: "Build the go-to-market plan and define the business and customer outcomes the pilot must test.",
  },
];

const lifecycleStages = [
  ["Acquisition", "Gives the organization a distinctive promise grounded in its core value"],
  ["Tier or product selection", "Creates a tangible reason to choose or upgrade the relationship"],
  ["Onboarding", "Makes the protection concrete through clear explanation and beneficiary designation where applicable"],
  ["Engagement", "Reinforces the value through relevant, restrained communication"],
  ["Renewal or continued use", "Gives customers another reason to preserve the relationship"],
  ["Covered event", "Delivers the partner’s promise when the family needs it"],
  ["Family continuity", "Creates an appropriate path for the family to continue the relationship"],
];

const programStructures = [
  {
    title: "Included protection",
    body: "The organization sponsors a defined base benefit for an eligible customer group.",
  },
  {
    title: "Premium-tier protection",
    body: "The benefit strengthens a higher-value account, plan, or membership tier.",
  },
  {
    title: "Optional enhancement",
    body: "Eligible customers may choose additional protection under separately approved terms.",
  },
  {
    title: "Hybrid program",
    body: "A partner-sponsored foundation can be paired with an optional customer-paid enhancement.",
  },
];

const partnerSignals = [
  "A trusted, recurring customer relationship",
  "A core product or service with tangible household value",
  "A defined customer population and direct communication channel",
  "A strategic need to improve differentiation, acquisition, upgrades, engagement, or retention",
  "Enough relationship value to support an included, premium-tier, optional, or hybrid structure",
];

const faqs = [
  {
    question: "What is Member Legacy?",
    answer:
      "Member Legacy is a product-design specialist for partner-connected family protection. We help organizations translate the value of an existing product or service into a protection program, then align the insurance economics, operating partners, customer experience, and measurement plan required to launch it responsibly.",
  },
  {
    question: "How is this different from adding insurance to a benefits marketplace?",
    answer:
      "A marketplace begins with products that are already available. Member Legacy begins with the partner’s core customer promise. The benefit, language, experience, and business case are designed around that relationship rather than added beside it.",
  },
  {
    question: "What can a program protect?",
    answer:
      "The protected outcome depends on what the partner already provides and what can be supported responsibly. It may involve a defined cash benefit, allowance, continued access, payment support, or another approved form of family support. Final language is developed only after the structure and terms are established.",
  },
  {
    question: "Which organizations are the strongest fit?",
    answer:
      "The strongest opportunities have a defined customer population, a trusted recurring relationship, tangible household value, direct customer communication, and a clear business objective such as differentiation, acquisition, upgrades, engagement, or retention.",
  },
  {
    question: "Must the organization pay for the entire benefit?",
    answer:
      "No single funding model fits every relationship. A program may use an included partner-sponsored benefit, a premium-tier benefit, an optional customer-paid enhancement, or a hybrid structure. Product availability and regulatory requirements must be evaluated for each program.",
  },
  {
    question: "How much does a program cost?",
    answer:
      "There is no universal published price. Cost depends on the eligible and covered populations, covered events, benefit design, duration, insurance structure, administration, customer experience, and pilot scope. Member Legacy designs against a partner-approved cost ceiling and measurement plan.",
  },
  {
    question: "Does Member Legacy guarantee retention or ROI?",
    answer:
      "No. Outcomes depend on the program, population, communication, operating execution, and market conditions. The business case begins with transparent break-even math and a controlled measurement plan, not a promised lift.",
  },
  {
    question: "How does a pilot begin?",
    answer:
      "A working session identifies the core product or service, target customer group, desired family outcome, business objective, cost ceiling, potential program structure, operating requirements, and measurement approach. Member Legacy then frames a concept and controlled pilot for partner and provider review.",
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
              <div className="eyebrow">Product-connected family protection</div>
              <h1>
                Turn what customers rely on today into protection their families can rely on <span>tomorrow.</span>
              </h1>
              <p className="hero-lede product-hero-lede">
                Member Legacy designs family protection programs around the product or service your
                customers already value. We connect benefit design, insurance economics,
                operations, and go-to-market to create a program that is simple for customers to
                understand and meaningful for the business.
              </p>
              <div className="hero-actions">
                <Link className="button" href="/design-a-pilot#top">
                  Explore a program
                  <ArrowRight aria-hidden="true" size={18} strokeWidth={1.8} />
                </Link>
                <Link className="text-link" href="#our-approach">
                  See how it works
                  <ArrowDown aria-hidden="true" size={17} />
                </Link>
              </div>
              <div className="hero-principles" aria-label="Program principles">
                <span><Check aria-hidden="true" size={15} /> Built around your core product</span>
                <span><Check aria-hidden="true" size={15} /> Designed for immediate understanding</span>
                <span><Check aria-hidden="true" size={15} /> Structured for measurable business value</span>
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
              <span>Designed from the relationship customers already value</span>
            </div>
            <div>
              <strong>More than a payout</strong>
              <span>Expressed through a product or service customers understand</span>
            </div>
            <div>
              <strong>More than a launch</strong>
              <span>Built to create value across the customer lifecycle</span>
            </div>
          </div>
        </section>

        <section className="section benefit-section" id="why-it-matters">
          <div className="shell">
            <div className="section-heading split-heading">
              <div>
                <div className="eyebrow">The disconnect</div>
                <h2>Most benefits are added to the customer relationship. They are not built from it.</h2>
              </div>
              <p>
                Organizations invest in benefits to differentiate their offering and strengthen
                customer relationships. Too often, those benefits sit beside the core product,
                feel interchangeable, and give customers little reason to associate the value with
                the organization that sponsored it.
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
                The organization pays for a benefit, but the customer does not fully understand it,
                value it, or connect it to the relationship.
              </p>
            </div>
          </div>
        </section>

        <section className="section mapping-section" id="our-approach">
          <div className="shell">
            <div className="mapping-intro">
              <div>
                <div className="eyebrow light-eyebrow">Our design principle</div>
                <h2>Connect the protection to what the relationship already provides.</h2>
              </div>
              <div className="mapping-copy">
                <p>
                  Member Legacy starts with the value customers already receive from the
                  organization. We then design a protected outcome that helps the family continue
                  receiving or replacing part of that value after a defined covered event.
                </p>
                <p>
                  The customer does not need to translate an abstract insurance product into
                  everyday meaning. The connection is already visible.
                </p>
              </div>
            </div>

            <div className="product-map" aria-label="Illustrative product-to-protection concepts">
              <div className="product-map-head" aria-hidden="true">
                <span>What customers value now</span>
                <span>What disruption puts at risk</span>
                <span>What the program helps the family continue</span>
              </div>
              {productMappings.map((item, index) => (
                <article className="product-map-row" key={item.relationship}>
                  <div data-label="What customers value now">
                    <span className="map-number">0{index + 1}</span>
                    <strong>{item.relationship}</strong>
                  </div>
                  <div data-label="Product-connected protection concept">
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
              Concepts are illustrative. Each program is subject to product design, underwriting,
              legal, compliance, operational, and partner approval.
            </p>
          </div>
        </section>

        <section className="section comparison-section">
          <div className="shell comparison-layout">
            <div className="comparison-intro">
              <div className="eyebrow">Built, not bundled</div>
              <h2>The program begins with your customer promise, not a benefits catalog.</h2>
              <p>
                Product-connected protection is designed to feel attributable, relevant, and
                native to the relationship your organization has already earned.
              </p>
            </div>
            <div className="comparison-grid" role="list" aria-label="Approach comparison">
              <div className="comparison-head" aria-hidden="true">
                <span>Generic benefits platform</span>
                <span>Member Legacy</span>
              </div>
              {comparisonRows.map((row) => (
                <div className="comparison-row" role="listitem" key={row.generic}>
                  <div data-label="Generic benefits platform">{row.generic}</div>
                  <div data-label="Member Legacy"><Check aria-hidden="true" size={16} />{row.memberLegacy}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section capability-section">
          <div className="shell">
            <div className="section-heading centered-heading capability-heading">
              <div className="eyebrow light-eyebrow">From concept to working program</div>
              <h2>We connect the pieces required to make the promise real.</h2>
              <p>
                The customer proposition should feel simple. Making it responsible, viable, and
                measurable requires coordinated product work behind the scenes.
              </p>
            </div>
            <div className="capability-grid">
              {capabilities.map(({ number, icon: Icon, title, body }) => (
                <article key={title}>
                  <div className="capability-topline">
                    <Icon aria-hidden="true" size={23} strokeWidth={1.5} />
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
              <h2>Build a promise that works across the customer lifecycle.</h2>
              <p>
                Because the protection is connected to the partner’s product, the same program can
                create a clear story from initial consideration through family continuity.
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
                The right structure follows the customer relationship, the desired outcome, and
                the economics the organization is prepared to support.
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
              The appropriate structure depends on the customer population, business objective,
              economics, product availability, and regulatory requirements.
            </p>
          </div>
        </section>

        <section className="section partner-fit-section">
          <div className="shell partner-fit-layout">
            <div className="partner-fit-copy">
              <div className="eyebrow light-eyebrow">Where the model fits</div>
              <h2>Built for relationships customers choose to continue.</h2>
              <p>
                Member Legacy is designed for organizations that already play a recurring and
                trusted role in customers’ lives. Those customers may be members, account holders,
                subscribers, or users. The relevant question is not the industry label. It is
                whether the relationship carries enough meaning and economic value to support a
                connected protection program.
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
                Use a defined customer population, estimated program cost, and contribution margin
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
                Partner-connected protection requires precise economics, responsibilities, and
                customer language. A serious evaluation should surface these questions early.
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
              <div className="eyebrow light-eyebrow">Start with the relationship</div>
              <h2>What should your customers’ families be able to continue?</h2>
              <p>
                Bring one customer group, one core product, and one business objective. Member
                Legacy will help frame the protected outcome, program structure, economics,
                operating model, and path to a controlled pilot.
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
