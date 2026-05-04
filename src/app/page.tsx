"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import LeadForm from "@/components/LeadForm";

const STATS = [
  { value: "12+", label: "Years of Excellence" },
  { value: "850+", label: "Successful Placements" },
  { value: "40+", label: "Industry Verticals" },
  { value: "98%", label: "Client Retention" },
];

const SERVICES = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: "Contract Staffing",
    description:
      "Agile workforce solutions that scale with your needs. Access pre-vetted professionals for project-based or seasonal demands.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
    title: "Permanent Placement",
    description:
      "Strategic talent acquisition for roles that define your organization. We find candidates who align with your culture and vision.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    title: "Executive Search",
    description:
      "Discreet, high-touch recruitment for C-suite and senior leadership roles. Every search is bespoke, thorough, and confidential.",
  },
];

export default function Home() {
  const [access, setAccess] = useState<string | null>(null);

  useEffect(() => {
    const granted = localStorage.getItem("nextin_access");
    setAccess(granted ? "granted" : "denied");
  }, []);

  // Avoid flicker while checking localStorage
  if (access === null) return null;

  // Show lead form gate if not yet submitted
  if (access === "denied") {
    return <LeadForm onSuccess={() => setAccess("granted")} />;
  }

  // ── Your actual site (shown after form is submitted) ──
  return (
    <div className="flex flex-col min-h-screen bg-surface relative overflow-hidden">
      {/* Film Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')] bg-repeat" />

      {/* ── Hero Section ── */}
      <section
        id="hero"
        className="relative z-10 flex flex-col justify-center items-center text-center px-6 pt-36 lg:pt-44 pb-20 lg:pb-32 min-h-[90vh]"
      >
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-[120px] pointer-events-none" />

        <AnimatedSection>
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-primary/80 mb-6 block">
            Premium Staffing &amp; Recruitment
          </span>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <h1 className="font-serif text-[3rem] sm:text-[4rem] lg:text-[5.5rem] leading-[1.08] text-foreground tracking-[-0.02em] font-medium max-w-5xl mx-auto">
            Talent that
            <br />
            <span className="text-primary italic">Transforms</span> Business
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={250}>
          <p className="mt-8 text-lg font-sans text-foreground/55 max-w-2xl mx-auto leading-relaxed">
            We align exceptional professionals with organizations that demand
            the best. Precision placement, industry expertise, and an
            uncompromising standard of excellence.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <div className="mt-14 flex items-center justify-center gap-5 flex-wrap">
            <Link
              href="/contact"
              className="px-10 py-4 bg-primary text-surface-container-lowest font-sans uppercase tracking-widest text-sm font-semibold rounded-md shadow-ambient hover:-translate-y-1 transition-all duration-500 ease-cinematic"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="px-10 py-4 border border-foreground/15 text-foreground font-sans uppercase tracking-widest text-sm rounded-md transition-all duration-500 ease-cinematic hover:bg-foreground/5 hover:-translate-y-1"
            >
              Our Services
            </Link>
          </div>
        </AnimatedSection>
      </section>

      {/* ── Stats Bar ── */}
      <section className="relative z-10 bg-surface-container-low border-y border-surface-container-highest/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map((stat, i) => (
            <AnimatedSection
              key={stat.label}
              delay={i * 100}
              className="flex flex-col items-center text-center"
            >
              <span className="font-serif text-4xl lg:text-5xl text-primary font-medium">
                {stat.value}
              </span>
              <span className="mt-2 font-sans text-xs uppercase tracking-[0.15em] text-foreground/40">
                {stat.label}
              </span>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── Services Overview ── */}
      <section className="relative z-10 py-24 lg:py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16 lg:mb-20">
            <h2 className="font-serif text-[2.75rem] sm:text-[3.5rem] leading-[1.1] text-foreground tracking-[-0.02em] font-medium">
              What We <span className="text-primary italic">Do</span>
            </h2>
            <p className="mt-6 text-lg font-sans text-foreground/55 max-w-2xl mx-auto leading-relaxed">
              Three pillars of staffing excellence, each tailored to deliver
              measurable results for your organization.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {SERVICES.map((service, i) => (
              <AnimatedSection
                key={service.title}
                delay={i * 120}
                className="group relative bg-surface-container-lowest p-10 lg:p-12 border border-surface-container-highest/15 hover:border-primary/30 transition-all duration-700 ease-cinematic"
              >
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-500 ease-cinematic">
                  {service.icon}
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="font-sans text-sm text-foreground/55 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 mt-6 text-sm font-sans text-primary/70 hover:text-primary transition-colors duration-500 ease-cinematic group-hover:gap-3"
                >
                  Learn more
                  <span className="transition-transform duration-500 ease-cinematic group-hover:translate-x-1">
                    &rarr;
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Editorial Quote ── */}
      <section className="relative z-10 bg-surface-container-low py-24 lg:py-32 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-start">
          <AnimatedSection animation="slide-in-left" className="md:w-1/3">
            <h2 className="font-serif text-4xl text-primary leading-tight">
              Elevating the standard of professional excellence.
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="slide-in-right" className="md:w-2/3 flex flex-col gap-10 font-sans text-foreground/65 leading-relaxed">
            <p className="text-lg">
              We don&apos;t just fill positions — we architect teams. Every
              placement is a strategic investment in your organization&apos;s
              future, backed by deep industry knowledge and a relentless
              commitment to quality.
            </p>
            <blockquote className="pl-6 border-l-2 border-primary/30 text-sm italic text-foreground/50 max-w-lg">
              &ldquo;The finest opportunities arrive not with a shout, but with
              a whisper. That is the Nextin way.&rdquo;
            </blockquote>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="relative z-10 py-24 lg:py-32 px-6 lg:px-12">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-[2.5rem] sm:text-[3rem] leading-[1.1] text-foreground tracking-[-0.02em] font-medium">
            Ready to Build Your{" "}
            <span className="text-primary italic">Dream Team</span>?
          </h2>
          <p className="mt-6 text-lg font-sans text-foreground/55 max-w-xl mx-auto leading-relaxed">
            Whether you need one key hire or an entire division, we&apos;re here
            to make it happen.
          </p>
          <div className="mt-12 flex items-center justify-center gap-5 flex-wrap">
            <Link
              href="/contact"
              className="px-10 py-4 bg-primary text-surface-container-lowest font-sans uppercase tracking-widest text-sm font-semibold rounded-md shadow-ambient hover:-translate-y-1 transition-all duration-500 ease-cinematic"
            >
              Contact Us
            </Link>
            <Link
              href="/careers"
              className="px-10 py-4 border border-foreground/15 text-foreground font-sans uppercase tracking-widest text-sm rounded-md transition-all duration-500 ease-cinematic hover:bg-foreground/5 hover:-translate-y-1"
            >
              View Careers
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}