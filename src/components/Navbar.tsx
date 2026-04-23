"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        id="main-nav"
        className={`fixed top-0 left-0 right-0 z-50 w-full flex items-center justify-between px-6 lg:px-12 transition-all duration-500 ease-cinematic ${
          scrolled
            ? "py-4 bg-glass border-b border-surface-container-highest/30"
            : "py-6 lg:py-8 bg-transparent border-b border-transparent"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-xl lg:text-2xl tracking-wide text-primary hover:text-primary-dim transition-colors duration-500 z-50"
        >
          NEXTIN UNIVERSAL
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm tracking-[0.1em] uppercase font-sans font-medium transition-colors duration-500 ease-cinematic ${
                pathname === link.href
                  ? "text-primary"
                  : "text-foreground/70 hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 px-6 py-2.5 bg-primary text-surface-container-lowest font-sans uppercase tracking-widest text-xs font-semibold rounded-md hover:-translate-y-0.5 transition-all duration-500 ease-cinematic shadow-ambient"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden z-50 flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block w-6 h-[1.5px] bg-foreground transition-all duration-500 ease-cinematic ${
              mobileOpen ? "rotate-45 translate-y-[4.5px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-foreground transition-all duration-500 ease-cinematic ${
              mobileOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-foreground transition-all duration-500 ease-cinematic ${
              mobileOpen ? "-rotate-45 -translate-y-[4.5px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-surface/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-all duration-700 ease-cinematic lg:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {NAV_LINKS.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            className={`font-serif text-3xl tracking-wide transition-all duration-500 ease-cinematic ${
              pathname === link.href
                ? "text-primary"
                : "text-foreground/70 hover:text-primary"
            }`}
            style={{
              transitionDelay: mobileOpen ? `${i * 80}ms` : "0ms",
              transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
              opacity: mobileOpen ? 1 : 0,
            }}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="mt-4 px-10 py-4 bg-primary text-surface-container-lowest font-sans uppercase tracking-widest text-sm font-semibold rounded-md"
          style={{
            transitionDelay: mobileOpen ? `${NAV_LINKS.length * 80}ms` : "0ms",
            opacity: mobileOpen ? 1 : 0,
          }}
        >
          Get Started
        </Link>
      </div>
    </>
  );
}
