import { ArrowUpRight, Menu } from "lucide-react";
import Link from "next/link";

export const bookingUrl =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1zT2d0RBzAIheRyP2pozY7ryFLI5lKkK8fjzkujOfai9B5xPkFYMTxIPPwC8dbACG9ZP1BL5kX";

export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <span className={`brand-mark ${className}`.trim()} aria-hidden="true">
      <span className="brand-infinity">∞</span>
    </span>
  );
}

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Member Legacy home">
      <BrandMark />
      <span className="brand-lockup">
        <span className="brand-name">Member Legacy</span>
        <span className="brand-tagline">Continuity by design</span>
      </span>
    </Link>
  );
}

const navLinks = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#economics", label: "Economics" },
  { href: "/#fit", label: "Program fit" },
  { href: "/team#top", label: "The team" },
  { href: "/case-study", label: "Case study" },
  { href: "/#faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <a
          className="button button-small header-cta"
          href={bookingUrl}
          target="_blank"
          rel="noreferrer"
        >
          Book a conversation
          <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.8} />
        </a>
        <details className="mobile-nav">
          <summary aria-label="Open navigation">
            <Menu aria-hidden="true" size={22} />
          </summary>
          <nav aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
            <a href={bookingUrl} target="_blank" rel="noreferrer">
              Book a conversation
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Brand />
          <p className="footer-note">
            A lasting member benefit, built around family and brand loyalty.
          </p>
        </div>
        <div className="footer-navigation">
          <nav className="footer-links" aria-label="Footer navigation">
            <Link href="/#how-it-works">How it works</Link>
            <Link href="/#economics">Economics</Link>
            <Link href="/team#top">The team</Link>
            <Link href="/case-study">Case study</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </nav>
        </div>
        <div className="footer-action">
          <a href={bookingUrl} target="_blank" rel="noreferrer">
            Talk with Member Legacy
            <ArrowUpRight aria-hidden="true" size={16} />
          </a>
          <span>© 2026 Member Legacy</span>
        </div>
      </div>
    </footer>
  );
}
