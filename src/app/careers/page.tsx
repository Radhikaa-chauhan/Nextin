import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Careers",
  description: "Explore the role categories Nextin Universal fills across industries — Engineering, Finance, Executive Leadership, Operations, and more. Find your next opportunity.",
};

const CATEGORIES = [
  { title: "Engineering & Technology", roles: "Software Engineers, DevOps, Data Engineers, Architects, QA Leads", desc: "From individual contributors to engineering VPs — we place technologists at every level." },
  { title: "Finance & Accounting", roles: "Controllers, FP&A Analysts, CFOs, Auditors, Treasury Managers", desc: "Financial talent that brings clarity, compliance, and strategic insight." },
  { title: "Executive Leadership", roles: "CEOs, COOs, CROs, Board Members, General Managers", desc: "Senior leaders who define vision, drive culture, and deliver results." },
  { title: "Operations & Supply Chain", roles: "Operations Directors, Logistics Managers, Procurement Leads", desc: "Operational excellence from warehouse floor to boardroom." },
  { title: "Sales & Marketing", roles: "Revenue Leaders, Growth Marketers, Brand Strategists, BDRs", desc: "Revenue-generating talent that accelerates market presence." },
  { title: "Human Resources", roles: "CHROs, Talent Acquisition VPs, HRBP Leads, Comp Analysts", desc: "People leaders who build culture and enable organizational scale." },
];

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')] bg-repeat" />

      {/* Hero */}
      <section className="relative z-10 pt-36 lg:pt-44 pb-16 lg:pb-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <SectionHeading title="Role Categories" accentWord="Categories" subtitle="We don't run a job board — we cultivate relationships. Explore the categories of roles we routinely fill for our clients." />
        </div>
      </section>

      {/* Categories Grid */}
      <section className="relative z-10 bg-surface-container-low py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {CATEGORIES.map((cat, i) => (
            <AnimatedSection key={cat.title} delay={i * 80} className="group bg-surface-container-lowest p-8 lg:p-10 border border-surface-container-highest/15 hover:border-primary/25 transition-all duration-700 ease-cinematic">
              <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-primary transition-colors duration-500">{cat.title}</h3>
              <p className="font-sans text-sm text-foreground/55 leading-relaxed mb-5">{cat.desc}</p>
              <div className="pt-4 border-t border-surface-container-highest/15">
                <span className="font-sans text-[0.65rem] uppercase tracking-[0.15em] text-foreground/30 block mb-2">Typical Roles</span>
                <p className="font-sans text-xs text-primary/70 leading-relaxed">{cat.roles}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 lg:py-32 px-6 lg:px-12">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-[2.5rem] sm:text-[3rem] leading-[1.1] text-foreground tracking-[-0.02em] font-medium">Interested in a <span className="text-primary italic">Position</span>?</h2>
          <p className="mt-6 text-lg font-sans text-foreground/55 max-w-xl mx-auto leading-relaxed">We&apos;re always looking to connect with exceptional professionals. Send us your details and we&apos;ll reach out when the right opportunity arises.</p>
          <Link href="/contact" className="mt-10 inline-block px-10 py-4 bg-primary text-surface-container-lowest font-sans uppercase tracking-widest text-sm font-semibold rounded-md shadow-ambient hover:-translate-y-1 transition-all duration-500 ease-cinematic">Get in Touch</Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
