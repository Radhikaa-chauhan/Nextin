import Link from "next/link";

const FOOTER_LINKS = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Industries", href: "/industries" },
    ],
  },
  {
    title: "Opportunities",
    links: [
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative z-10 bg-surface-container-lowest border-t border-surface-container-highest/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="font-serif text-2xl tracking-wide text-primary"
            >
              NEXTIN UNIVERSAL
            </Link>
            <p className="mt-4 font-sans text-sm text-foreground/50 leading-relaxed max-w-xs">
              Aligning exceptional talent with prestigious opportunities
              worldwide. Precision. Discretion. Excellence.
            </p>
            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-surface-container-highest/40 flex items-center justify-center text-foreground/50 hover:text-primary hover:border-primary/40 transition-all duration-500 ease-cinematic"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="X (Twitter)"
                className="w-10 h-10 rounded-full border border-surface-container-highest/40 flex items-center justify-center text-foreground/50 hover:text-primary hover:border-primary/40 transition-all duration-500 ease-cinematic"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link Groups */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h4 className="font-sans text-xs uppercase tracking-[0.15em] text-foreground/40 font-semibold mb-6">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-4">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-sans text-sm text-foreground/60 hover:text-primary transition-colors duration-500 ease-cinematic"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-surface-container-highest/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-foreground/30">
            &copy; {new Date().getFullYear()} Nextin Universal. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/contact"
              className="font-sans text-xs text-foreground/30 hover:text-primary transition-colors duration-500"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="font-sans text-xs text-foreground/30 hover:text-primary transition-colors duration-500"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
