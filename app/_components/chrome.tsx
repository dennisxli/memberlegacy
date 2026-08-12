import { ArrowRight, ArrowUpRight, Menu } from "lucide-react";
import Link from "next/link";

export const bookingUrl =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1zT2d0RBzAIheRyP2pozY7ryFLI5lKkK8fjzkujOfai9B5xPkFYMTxIPPwC8dbACG9ZP1BL5kX";

export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <span className={`brand-mark ${className}`.trim()} aria-hidden="true">
      <svg className="brand-infinity" viewBox="0 0 64 64" focusable="false">
        <path d="M12 32c0-7.1 4.8-12 11.2-12 4.7 0 8.1 3.1 11.2 8 2.6-4.1 5.1-6.3 9.4-6.3 5.2 0 9.2 4.2 9.2 10.3s-4 10.3-9.2 10.3c-4.3 0-6.8-2.2-9.4-6.3-3.1 4.9-6.5 8-11.2 8C16.8 44 12 39.1 12 32Zm6 0c0 3.8 2.2 6.2 5.4 6.2 2.7 0 5-2.2 7.8-6.2-2.8-4-5.1-6.2-7.8-6.2-3.2 0-5.4 2.4-5.4 6.2Zm19.6 0c2.3 3.2 4 4.5 6.1 4.5 2 0 3.5-1.8 3.5-4.5s-1.5-4.5-3.5-4.5c-2.1 0-3.8 1.3-6.1 4.5Z" />
      </svg>
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
  { href: "/#challenge", label: "Why it matters" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#economics", label: "Economics" },
  { href: "/team#top", label: "Founder" },
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
        <Link
          className="button button-small header-cta"
          href="/design-a-pilot#top"
        >
          Design a pilot
          <ArrowRight aria-hidden="true" size={16} strokeWidth={1.8} />
        </Link>
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
            <Link href="/design-a-pilot#top">Design a pilot</Link>
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
            A lasting member benefit, built around family and relationships people value.
          </p>
        </div>
        <div className="footer-navigation">
          <nav className="footer-links" aria-label="Footer navigation">
            <Link href="/#challenge">Why it matters</Link>
            <Link href="/#how-it-works">How it works</Link>
            <Link href="/#economics">Economics</Link>
            <Link href="/team#top">Founder</Link>
            <Link href="/design-a-pilot#top">Design a pilot</Link>
            <Link href="/#faq">FAQ</Link>
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
