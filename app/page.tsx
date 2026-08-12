import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Check,
  CircleDollarSign,
  HeartHandshake,
  Settings2,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { BrandMark, Footer, Header } from "./_components/chrome";
import { ThresholdCalculator } from "./_components/roi-calculator";
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
    "Member Legacy helps membership businesses create a sponsor funded family continuity benefit around relationships members already value.",
};

const challenges = [
  {
    icon: Sparkles,
    title: "Benefits feel interchangeable",
    body: "Points, discounts, and access can add value, but competitors can often answer with more of the same.",
  },
  {
    icon: CircleDollarSign,
    title: "Value is judged at renewal",
    body: "When a membership is measured mainly by savings, every renewal becomes another price comparison.",
  },
  {
    icon: UsersRound,
    title: "The promise stops at the member",
    body: "Most programs serve the individual well in everyday life but do little to extend that relationship to the family.",
  },
];

const solutionPrinciples = [
  {
    icon: HeartHandshake,
    title: "Meaningful by design",
    body: "Support is built around a real family need, not another reason to spend.",
  },
  {
    icon: ShieldCheck,
    title: "Part of the membership",
    body: "The core benefit is funded by the sponsor for an eligible group, not introduced as a separate sales journey.",
  },
  {
    icon: Settings2,
    title: "Structured for delivery",
    body: "Eligibility, benefit terms, partners, administration, and the beneficiary experience are defined before launch.",
  },
];

const businessValues = [
  {
    number: "01",
    title: "A reason to choose you",
    body: "Give members a benefit with human meaning that is harder to reduce to a price comparison.",
  },
  {
    number: "02",
    title: "A stronger membership story",
    body: "Help product and marketing teams explain what the relationship stands for beyond everyday transactions.",
  },
  {
    number: "03",
    title: "A benefit families remember",
    body: "Extend the value of the membership to the people a member cares about most, under clear program terms.",
  },
  {
    number: "04",
    title: "A case finance can test",
    body: "Design against a cost ceiling and evaluate the threshold using your own membership economics.",
  },
];

const steps = [
  {
    number: "01",
    title: "Choose the member group",
    body: "Identify the cohort that matters and the membership objective the program should support.",
  },
  {
    number: "02",
    title: "Shape the promise",
    body: "Design the benefit around member relevance, sponsor economics, and the requirements of supporting partners.",
  },
  {
    number: "03",
    title: "Build the experience",
    body: "Set clear communication, eligibility, administration, and a thoughtful process for the family.",
  },
  {
    number: "04",
    title: "Run a measured pilot",
    body: "Launch to a defined population and evaluate the operating model and agreed business outcomes.",
  },
];

const relationshipTypes = [
  {
    title: "Paid memberships",
    body: "Add a more meaningful reason to join, upgrade, or continue a premium membership relationship.",
  },
  {
    title: "Premium account tiers",
    body: "Strengthen the value of an account tier with a benefit built around continuity for the family.",
  },
  {
    title: "Member communities",
    body: "Extend the purpose of an association or member organization through a benefit that reflects its mission.",
  },
];

const faqs = [
  {
    question: "What is Member Legacy?",
    answer:
      "Member Legacy is a family continuity benefit for recurring membership and account relationships. It brings benefit design, insurance partners, administration, member experience, and measurement into one sponsor led program.",
  },
  {
    question: "Which membership businesses are the strongest fit?",
    answer:
      "The strongest starting points have a defined member population, recurring economics, an established relationship, and a clear reason to make the membership more meaningful or differentiated.",
  },
  {
    question: "What does sponsor funded mean?",
    answer:
      "The sponsoring organization funds the core benefit for an eligible group. Members do not need to begin with an individual purchase decision for that core benefit.",
  },
  {
    question: "What does the family receive?",
    answer:
      "The final benefit depends on the sponsor, market, insurance structure, and operating design. It may be a defined cash benefit or another approved form of support. Member language is written only after those terms are established.",
  },
  {
    question: "How much does a program cost?",
    answer:
      "There is no universal published price. Cost depends on the eligible population, covered population, benefit design, duration, insurance structure, administration, and pilot scope. We design against a sponsor approved cost ceiling.",
  },
  {
    question: "Does Member Legacy guarantee retention or ROI?",
    answer:
      "No. Outcomes depend on the program and population. The business case starts with transparent break even math and a controlled measurement plan, not a promised lift.",
  },
  {
    question: "Is this an insurance sales funnel?",
    answer:
      "No. The initial program is designed as a sponsor funded membership benefit. Any future member paid offering would require a separate strategy, experience, and compliance review.",
  },
  {
    question: "How does a pilot begin?",
    answer:
      "A working session identifies the member group, business objective, cost ceiling, benefit concept, operating owners, and measurement approach. From there, Member Legacy can frame a controlled pilot for sponsor and partner review.",
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
              <div className="eyebrow">A family continuity benefit for membership brands</div>
              <h1>
                Turn membership into something <span>families remember.</span>
              </h1>
              <p className="hero-lede hero-lede-short">
                Your members already trust you with part of everyday life. Member Legacy helps you
                extend that relationship to their families when it matters most, through a benefit
                shaped around your membership and your economics.
              </p>
              <div className="hero-actions">
                <Link className="button" href="/design-a-pilot#top">
                  Design a pilot
                  <ArrowRight aria-hidden="true" size={18} strokeWidth={1.8} />
                </Link>
                <Link className="text-link" href="#challenge">
                  See why it matters
                  <ArrowDown aria-hidden="true" size={17} />
                </Link>
              </div>
              <div className="hero-principles" aria-label="Program principles">
                <span><Check aria-hidden="true" size={15} /> Sponsor funded</span>
                <span><Check aria-hidden="true" size={15} /> Built for your members</span>
                <span><Check aria-hidden="true" size={15} /> Designed to measure</span>
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

        <section className="signal-strip" aria-label="Program design principles">
          <div className="shell signal-grid">
            <div>
              <strong>More than a reward</strong>
              <span>Built around a moment that matters</span>
            </div>
            <div>
              <strong>Part of your promise</strong>
              <span>Designed for a membership members already trust</span>
            </div>
            <div>
              <strong>Grounded in economics</strong>
              <span>Structured to test before scaling</span>
            </div>
          </div>
        </section>

        <section className="section benefit-section" id="challenge">
          <div className="shell">
            <div className="section-heading split-heading">
              <div>
                <div className="eyebrow">The membership challenge</div>
                <h2>Useful benefits do not always create a lasting bond.</h2>
              </div>
              <p>
                Membership leaders are asked to prove value every year. Yet many programs compete
                with benefits that are easy to compare, easy to copy, and easy for members to forget.
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
              <span>If nothing changes</span>
              <p>
                Premium membership keeps competing on price, differentiation gets harder to defend,
                and a trusted member relationship never becomes something the family carries forward.
              </p>
            </div>
          </div>
        </section>

        <section className="section solution-section" id="solution">
          <div className="shell solution-layout">
            <div className="solution-reveal">
              <div className="eyebrow light-eyebrow">A different kind of member benefit</div>
              <h2>Extend the promise beyond the member.</h2>
              <p>
                Member Legacy places a family continuity benefit inside an existing membership.
                If an eligible member dies, the program provides defined support to the person they
                chose, under terms established with the sponsor and supporting partners.
              </p>
              <p>
                The result is a benefit with emotional meaning for members and a disciplined
                operating model for the organization behind it.
              </p>
            </div>
            <div className="solution-principles">
              {solutionPrinciples.map(({ icon: Icon, title, body }) => (
                <article key={title}>
                  <Icon aria-hidden="true" size={24} strokeWidth={1.45} />
                  <div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section value-section" id="value">
          <div className="shell">
            <div className="section-heading centered-heading value-heading">
              <div className="eyebrow">What it changes</div>
              <h2>Give the membership a value people can feel and leaders can defend.</h2>
              <p>
                The proposition works when it creates meaning for the member and a credible case
                for the business at the same time.
              </p>
            </div>
            <div className="business-value-grid">
              {businessValues.map((item) => (
                <article key={item.number}>
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section how-section" id="how-it-works">
          <div className="shell">
            <div className="section-heading centered-heading">
              <div className="eyebrow">How it works</div>
              <h2>Make the promise simple by doing the design work first.</h2>
              <p>
                Member Legacy aligns the membership objective, benefit, partners, family experience,
                and measurement before the program reaches members.
              </p>
            </div>
            <div className="steps-grid four-step-grid">
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
                Final eligibility, funding, benefit terms, administration, member communication,
                and regulatory treatment are defined for each program before launch.
              </p>
            </div>
          </div>
        </section>

        <section className="section relationship-section" id="use-cases">
          <div className="shell relationship-layout">
            <div className="relationship-intro">
              <div className="eyebrow">Built for relationships that renew</div>
              <h2>The model follows the membership, not a single industry.</h2>
              <p>
                Member Legacy can be shaped for different recurring relationships. The benefit,
                family experience, and business case are configured around the sponsor and the
                members it serves.
              </p>
            </div>
            <div className="relationship-list">
              {relationshipTypes.map((item, index) => (
                <article key={item.title}>
                  <span>0{index + 1}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section economics-section" id="economics">
          <div className="shell">
            <div className="section-heading economics-heading">
              <div>
                <div className="eyebrow light-eyebrow">The business case</div>
                <h2>Know what the program has to prove.</h2>
              </div>
              <p>
                Use your own member population, program cost, and relationship value to establish
                the break even threshold before a pilot begins.
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
                A benefit this personal needs precise economics, responsibilities, and member
                language. These are the questions a serious evaluation should surface early.
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
              <h2>See what family continuity could mean for your membership.</h2>
              <p>
                Bring one member group and one business question. We will help frame the benefit,
                operating model, economics, and path to a controlled pilot.
              </p>
            </div>
            <Link className="button button-inverse" href="/design-a-pilot#top">
              Design a pilot
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
