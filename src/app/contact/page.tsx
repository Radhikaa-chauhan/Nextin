import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Nextin Universal. Whether you need staffing solutions or want to explore career opportunities, we're here to help.",
};

const CONTACT_CHANNELS = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "Email Us",
    value: "hello@nextinuniversal.com",
    href: "mailto:hello@nextinuniversal.com",
    description: "For general inquiries and partnerships",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: "Call Us",
    value: "+1 (555) 890-4200",
    href: "tel:+15558904200",
    description: "Monday – Friday, 9 AM – 6 PM EST",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: "Visit Us",
    value: "350 Fifth Avenue, Suite 4800\nNew York, NY 10118",
    href: "https://maps.google.com/?q=350+Fifth+Avenue+New+York+NY+10118",
    description: "Our headquarters in Manhattan",
  },
];

const ADDITIONAL_CONTACTS = [
  { label: "Talent Inquiries", email: "careers@nextinuniversal.com" },
  { label: "Business Development", email: "partnerships@nextinuniversal.com" },
  { label: "Media & Press", email: "press@nextinuniversal.com" },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')] bg-repeat" />

      {/* Hero */}
      <section className="relative z-10 pt-36 lg:pt-44 pb-16 lg:pb-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <SectionHeading title="Get in Touch" accentWord="Touch" subtitle="Whether you're looking for talent or exploring your next career move, we'd love to hear from you." />
        </div>
      </section>

      {/* Contact Cards */}
      <section className="relative z-10 py-12 lg:py-20 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CONTACT_CHANNELS.map((channel, index) => (
            <AnimatedSection key={channel.label} delay={index * 150}>
              <a
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                id={`contact-${channel.label.toLowerCase().replace(/\s/g, "-")}`}
                className="group block h-full bg-surface-container-lowest p-8 lg:p-10 border border-surface-container-highest/15 hover:border-primary/30 transition-all duration-700 ease-cinematic"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary/15 transition-colors duration-700 ease-cinematic">
                  {channel.icon}
                </div>

                {/* Label */}
                <span className="font-sans text-xs uppercase tracking-[0.15em] text-foreground/40 font-semibold block mb-3">
                  {channel.label}
                </span>

                {/* Value */}
                <p className="font-serif text-xl text-foreground whitespace-pre-line leading-relaxed mb-3 group-hover:text-primary transition-colors duration-700 ease-cinematic">
                  {channel.value}
                </p>

                {/* Description */}
                <p className="font-sans text-sm text-foreground/45 leading-relaxed">
                  {channel.description}
                </p>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Department Contacts + Hours */}
      <section className="relative z-10 py-12 lg:py-20 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Department Emails */}
          <AnimatedSection>
            <h3 className="font-serif text-2xl text-foreground mb-8">
              Department <span className="text-primary">Contacts</span>
            </h3>
            <div className="flex flex-col gap-6">
              {ADDITIONAL_CONTACTS.map((dept) => (
                <div key={dept.label} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-4 border-b border-surface-container-highest/15 last:border-0">
                  <span className="font-sans text-sm text-foreground/60 font-medium">
                    {dept.label}
                  </span>
                  <a
                    href={`mailto:${dept.email}`}
                    className="font-sans text-sm text-primary/80 hover:text-primary transition-colors duration-500 ease-cinematic"
                  >
                    {dept.email}
                  </a>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Office Hours + Response Time */}
          <AnimatedSection delay={200}>
            <h3 className="font-serif text-2xl text-foreground mb-8">
              Office <span className="text-primary">Hours</span>
            </h3>

            <div className="bg-surface-container-lowest p-8 border border-surface-container-highest/15 mb-6">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <span className="font-sans text-sm text-foreground/60">Monday – Friday</span>
                  <span className="font-sans text-sm text-foreground/80 font-medium">9:00 AM – 6:00 PM EST</span>
                </div>
                <div className="w-full h-px bg-surface-container-highest/15" />
                <div className="flex justify-between items-center">
                  <span className="font-sans text-sm text-foreground/60">Saturday – Sunday</span>
                  <span className="font-sans text-sm text-foreground/50">Closed</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-surface-container-low border border-primary/10">
              <p className="font-sans text-sm text-foreground/60 leading-relaxed">
                <span className="text-primary font-semibold">Average response time:</span>{" "}
                Under 4 business hours. Weekend inquiries are responded to within 24 hours.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
