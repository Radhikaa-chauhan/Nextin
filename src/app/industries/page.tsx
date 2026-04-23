import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Industries",
  description: "Nextin Universal serves 40+ industry verticals including Technology, Finance, Healthcare, Manufacturing, Energy, and more. Deep domain expertise for every sector.",
};

const INDUSTRIES = [
  { title: "Technology", roles: "Software Engineers, Data Scientists, Product Managers, CTOs", desc: "From startups to enterprise — we source technologists who build the future." },
  { title: "Financial Services", roles: "Quant Analysts, Risk Managers, CFOs, Compliance Officers", desc: "Precision talent for banking, fintech, insurance, and investment management." },
  { title: "Healthcare & Life Sciences", roles: "Clinical Directors, Biotech Researchers, Health IT Specialists", desc: "Professionals who advance patient outcomes and medical innovation." },
  { title: "Manufacturing & Engineering", roles: "Plant Managers, Quality Engineers, Supply Chain Directors", desc: "Operational leaders who optimize production and drive efficiency." },
  { title: "Energy & Utilities", roles: "Renewable Energy Engineers, Grid Analysts, HSE Directors", desc: "Talent powering the transition to sustainable energy systems." },
  { title: "Professional Services", roles: "Management Consultants, Legal Counsel, Project Directors", desc: "Advisors and operators who elevate client-facing excellence." },
];

export default function IndustriesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')] bg-repeat" />

      {/* Hero */}
      <section className="relative z-10 pt-36 lg:pt-44 pb-16 lg:pb-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <SectionHeading title="Industries We Serve" accentWord="Industries" subtitle="Deep domain expertise across 40+ verticals, enabling us to understand the nuances of your sector and deliver candidates who hit the ground running." />
        </div>
      </section>

      {/* Industries Grid */}
      <section className="relative z-10 bg-surface-container-low py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {INDUSTRIES.map((industry, i) => (
            <AnimatedSection key={industry.title} delay={i * 80} className="group bg-surface-container-lowest p-8 lg:p-10 border border-surface-container-highest/15 hover:border-primary/25 transition-all duration-700 ease-cinematic">
              <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-primary transition-colors duration-500">{industry.title}</h3>
              <p className="font-sans text-sm text-foreground/55 leading-relaxed mb-5">{industry.desc}</p>
              <div className="pt-4 border-t border-surface-container-highest/15">
                <span className="font-sans text-[0.65rem] uppercase tracking-[0.15em] text-foreground/30 block mb-2">Example Roles</span>
                <p className="font-sans text-xs text-primary/70 leading-relaxed">{industry.roles}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Cross-sell */}
      <section className="relative z-10 py-24 lg:py-32 px-6 lg:px-12">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-[2.5rem] sm:text-[3rem] leading-[1.1] text-foreground tracking-[-0.02em] font-medium">Don&apos;t See Your <span className="text-primary italic">Industry</span>?</h2>
          <p className="mt-6 text-lg font-sans text-foreground/55 max-w-xl mx-auto leading-relaxed">We serve 40+ verticals beyond what&apos;s listed here. Our methodology adapts to any sector — reach out and let&apos;s discuss your needs.</p>
          <div className="mt-10 flex items-center justify-center gap-5 flex-wrap">
            <Link href="/contact" className="px-10 py-4 bg-primary text-surface-container-lowest font-sans uppercase tracking-widest text-sm font-semibold rounded-md shadow-ambient hover:-translate-y-1 transition-all duration-500 ease-cinematic">Contact Us</Link>
            <Link href="/services" className="px-10 py-4 border border-foreground/15 text-foreground font-sans uppercase tracking-widest text-sm rounded-md transition-all duration-500 ease-cinematic hover:bg-foreground/5 hover:-translate-y-1">View Services</Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
