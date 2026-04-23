import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore Nextin Universal's staffing services: Contract Staffing, Permanent Placement, Executive Search, and RPO solutions tailored to your business needs.",
};

const SERVICES = [
  { title: "Contract Staffing", desc: "Agile workforce solutions that scale with your business. Access pre-vetted professionals for project-based, seasonal, or interim demands without the overhead of permanent hiring.", benefits: ["Rapid deployment (48-hour average)", "Pre-screened talent pools", "Flexible engagement models", "Full compliance management"] },
  { title: "Permanent Placement", desc: "Strategic talent acquisition for the roles that define your organization's future. We go beyond resumes to find candidates who align with your culture, values, and long-term vision.", benefits: ["Deep cultural fit assessment", "Industry-specific expertise", "Guaranteed retention periods", "Salary benchmarking"] },
  { title: "Executive Search", desc: "Discreet, high-touch recruitment for C-suite and senior leadership roles. Every search is bespoke, thorough, and executed with absolute confidentiality.", benefits: ["Board and C-suite specialization", "Global candidate networks", "Psychometric profiling", "100% confidentiality guaranteed"] },
  { title: "RPO Solutions", desc: "Recruitment Process Outsourcing that transforms your talent acquisition function. We embed within your organization to deliver scalable, efficient hiring at volume.", benefits: ["End-to-end process ownership", "Employer brand enhancement", "Technology-driven workflows", "Measurable cost savings"] },
];

const STEPS = [
  { num: "01", title: "Discovery", desc: "Deep-dive into your organization's culture, goals, and specific talent requirements." },
  { num: "02", title: "Strategy", desc: "Custom recruitment blueprint with timelines, channels, and candidate profiles." },
  { num: "03", title: "Execution", desc: "Targeted sourcing, rigorous screening, and curated shortlists delivered on schedule." },
  { num: "04", title: "Integration", desc: "Onboarding support and 90-day check-ins to ensure lasting placement success." },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')] bg-repeat" />

      {/* Hero */}
      <section className="relative z-10 pt-36 lg:pt-44 pb-16 lg:pb-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <SectionHeading title="Our Services" accentWord="Services" subtitle="Comprehensive staffing solutions designed to deliver measurable results for organizations that demand the best." />
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative z-10 bg-surface-container-low py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {SERVICES.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 100} className="group bg-surface-container-lowest p-10 lg:p-12 border border-surface-container-highest/15 hover:border-primary/25 transition-all duration-700 ease-cinematic">
              <span className="font-serif text-4xl text-primary/30 group-hover:text-primary/60 transition-colors duration-500">0{i + 1}</span>
              <h3 className="font-serif text-2xl text-foreground mt-3 mb-4">{service.title}</h3>
              <p className="font-sans text-sm text-foreground/55 leading-relaxed mb-6">{service.desc}</p>
              <ul className="flex flex-col gap-2.5">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3 font-sans text-xs text-foreground/50">
                    <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="relative z-10 py-24 lg:py-32 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="How We Work" accentWord="Work" subtitle="A proven four-step methodology refined over a decade of successful placements." />
          <div className="mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 120} className="relative">
                <span className="font-serif text-5xl text-primary/20">{step.num}</span>
                <h4 className="font-serif text-xl text-foreground mt-2 mb-3">{step.title}</h4>
                <p className="font-sans text-sm text-foreground/50 leading-relaxed">{step.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 bg-surface-container-low py-24 lg:py-32 px-6 lg:px-12">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-[2.5rem] sm:text-[3rem] leading-[1.1] text-foreground tracking-[-0.02em] font-medium">Need a <span className="text-primary italic">Custom</span> Solution?</h2>
          <p className="mt-6 text-lg font-sans text-foreground/55 max-w-xl mx-auto leading-relaxed">Every organization is unique. Let&apos;s discuss how we can tailor our services to your specific needs.</p>
          <Link href="/contact" className="mt-10 inline-block px-10 py-4 bg-primary text-surface-container-lowest font-sans uppercase tracking-widest text-sm font-semibold rounded-md shadow-ambient hover:-translate-y-1 transition-all duration-500 ease-cinematic">Start a Conversation</Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
