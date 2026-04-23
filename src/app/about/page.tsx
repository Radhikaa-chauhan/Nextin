import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Nextin Universal — our story, mission, and the values that drive our commitment to connecting exceptional talent with world-class organizations.",
};

const VALUES = [
  { title: "Precision", description: "Every process, interaction, and placement is calculated and perfectly executed — like a master watchmaker." },
  { title: "Discretion", description: "Confidentiality is the bedrock of trust. We protect our clients' strategic objectives and candidates' careers." },
  { title: "Integrity", description: "We operate with transparent ethics, honest counsel, and a long-term view. No shortcuts, no compromises." },
  { title: "Excellence", description: "We don't meet standards — we set them. Quality that compounds over years of partnership." },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')] bg-repeat" />

      {/* Hero */}
      <section className="relative z-10 pt-36 lg:pt-44 pb-16 lg:pb-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <SectionHeading title="Our Story" accentWord="Story" subtitle="Founded on the belief that great organizations are built by great people, Nextin Universal has spent over a decade redefining staffing excellence." />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative z-10 bg-surface-container-low py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          <AnimatedSection className="bg-surface-container-lowest p-10 lg:p-14 border border-surface-container-highest/15">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-primary/70 font-semibold">Our Mission</span>
            <h3 className="font-serif text-2xl lg:text-3xl text-foreground mt-4 mb-6 leading-tight">Bridge the gap between exceptional talent and visionary organizations.</h3>
            <p className="font-sans text-sm text-foreground/55 leading-relaxed">The right hire reshapes the trajectory of an entire organization. Our mission is to find those transformative matches with surgical precision and unwavering commitment.</p>
          </AnimatedSection>
          <AnimatedSection delay={150} className="bg-surface-container-lowest p-10 lg:p-14 border border-surface-container-highest/15">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-primary/70 font-semibold">Our Vision</span>
            <h3 className="font-serif text-2xl lg:text-3xl text-foreground mt-4 mb-6 leading-tight">The global standard for premium talent partnership.</h3>
            <p className="font-sans text-sm text-foreground/55 leading-relaxed">We envision a world where talent acquisition is transformational — where every placement creates lasting value for candidates, clients, and the industries they serve.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="relative z-10 py-24 lg:py-32 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Our Values" accentWord="Values" subtitle="The principles that guide every decision, every interaction, and every placement." />
          <div className="mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
            {VALUES.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 100} className="group p-8 lg:p-10 border border-surface-container-highest/15 hover:border-primary/25 transition-all duration-700 ease-cinematic">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-serif text-3xl text-primary/50 group-hover:text-primary transition-colors duration-500">0{i + 1}</span>
                  <h3 className="font-serif text-xl text-foreground">{value.title}</h3>
                </div>
                <p className="font-sans text-sm text-foreground/55 leading-relaxed">{value.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="relative z-10 bg-surface-container-low py-24 lg:py-32 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-start">
          <AnimatedSection animation="slide-in-left" className="md:w-2/5">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-primary/70 font-semibold block mb-4">Our Culture</span>
            <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight">We don&apos;t need to shout to be heard.</h2>
          </AnimatedSection>
          <AnimatedSection animation="slide-in-right" className="md:w-3/5">
            <div className="border-l-2 border-primary/30 pl-8 flex flex-col gap-6 font-sans text-foreground/60 leading-relaxed">
              <p>Our results speak through the caliber of our network and the longevity of our partnerships. We foster quiet confidence, meticulous operation, and profound capability.</p>
              <p>Every team member at Nextin is a specialist — not a generalist following a script. This depth of expertise enables us to understand the nuances of each industry and role.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 lg:py-32 px-6 lg:px-12">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-[2.5rem] sm:text-[3rem] leading-[1.1] text-foreground tracking-[-0.02em] font-medium">Let&apos;s Work <span className="text-primary italic">Together</span></h2>
          <p className="mt-6 text-lg font-sans text-foreground/55 max-w-xl mx-auto leading-relaxed">Discover how our approach to talent can elevate your organization.</p>
          <Link href="/contact" className="mt-10 inline-block px-10 py-4 bg-primary text-surface-container-lowest font-sans uppercase tracking-widest text-sm font-semibold rounded-md shadow-ambient hover:-translate-y-1 transition-all duration-500 ease-cinematic">Get in Touch</Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
