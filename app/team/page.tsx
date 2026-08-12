import type { Metadata } from "next";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Footer, Header } from "../_components/chrome";
import { ScrollToTop } from "../_components/scroll-to-top";

export const metadata: Metadata = {
  title: "Dennis Li, Founder",
  description:
    "Meet Dennis Li, FSA, founder of Member Legacy, and learn about his work across actuarial pricing, product strategy, and embedded insurance distribution.",
  alternates: { canonical: "/team" },
};

const focusAreas = [
  "Actuarial pricing",
  "Product strategy",
  "Embedded distribution",
  "Credit unions",
];

export default function TeamPage() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="team-main" id="top">
        <section className="team-hero">
          <div className="shell team-hero-grid">
            <figure className="team-portrait-frame">
              <Image
                className="team-portrait"
                src="/dennis-li-founder.jpg"
                alt="Dennis Li speaking on an insurance industry panel"
                width={724}
                height={1086}
                sizes="(max-width: 900px) 100vw, 42vw"
                priority
              />
              <figcaption>
                <strong>Dennis Li</strong>
                <span>Founder, Member Legacy</span>
              </figcaption>
            </figure>
            <div className="team-intro">
              <div className="eyebrow">Founder’s Perspective</div>
              <h1>Insurance works better when everyone is aligned.</h1>
              <p>
                Dennis Li, FSA, is an insurance executive and embedded distribution strategist
                whose career spans actuarial pricing, product strategy, and channel development
                across life and supplemental health. That experience showed him both the value
                insurance can provide and the persistent flaws in how it reaches consumers.
              </p>
              <a className="text-link team-story-link" href="#perspective">
                Read Dennis’s perspective
                <ArrowDown aria-hidden="true" size={17} />
              </a>
            </div>
          </div>
        </section>

        <section className="team-perspective" id="perspective">
          <div className="shell team-story-grid">
            <div className="team-story-heading">
              <div className="eyebrow light-eyebrow">A better model</div>
              <h2>Alignment is the strategy.</h2>
            </div>
            <div className="team-story-copy">
              <p>
                Insurance is too often sold the wrong way. Traditional distribution can begin with
                a product, a sales target, or a commission structure rather than a genuine consumer
                need. Carriers, distributors, partners, and agents may be rewarded for different
                outcomes, leaving consumers with unnecessary complexity, inconsistent guidance, and
                protection that does not always deliver the right value.
              </p>
              <p>
                That misalignment has troubled Dennis throughout his career because it undermines
                the purpose of insurance. Protection should not depend on who has the strongest
                sales incentive. It should begin with the needs of the individual or family and
                create sustainable value for every organization involved in delivering it.
              </p>
              <blockquote>
                Better alignment leads to better outcomes for consumers, distribution partners,
                membership organizations, and carriers.
              </blockquote>
              <p>
                When those interests move together, consumers gain access to relevant,
                accessible protection. Organizations strengthen relationships they have already
                earned, while carriers reach the right customers through trusted and sustainable
                channels.
              </p>
              <p>
                Dennis has developed channels with financial institutions, credit unions, and other
                membership organizations. He saw that these platforms already hold something the
                traditional insurance process often has to build from scratch: an established
                relationship with a defined community.
              </p>
              <p>
                This conviction led Dennis to found Member Legacy. The company is developing an
                embedded family continuity model that places a sponsor funded benefit within an
                existing member relationship. For membership and account platforms, it offers a way
                to make the relationship more meaningful without beginning with another product
                sales journey.
              </p>
              <p>
                For Dennis, Member Legacy is more than a new distribution strategy. It is an
                opportunity to help insurance fulfill its original purpose: protecting people and
                families when it matters most.
              </p>
            </div>
          </div>
        </section>

        <section className="team-about-section">
          <div className="shell team-about-card">
            <div className="team-about-title">
              <div className="eyebrow">About Dennis Li</div>
              <h2>Building insurance around shared value.</h2>
            </div>
            <div className="team-about-copy">
              <p>
                Dennis Li, FSA, is the founder of Member Legacy and an experienced insurance
                executive. His work across actuarial pricing, product strategy, and channel
                development includes building programs with credit unions and other member based
                organizations across the life and supplemental health industries.
              </p>
              <p>
                His vision is to prove that insurance distribution can work differently. When
                shared value is part of the design from the beginning, consumers receive accessible
                protection, membership organizations deliver more value to their communities, and
                carriers grow through relevance, trust, and long term alignment.
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
