import AnimatedSection from "./AnimatedSection";

interface SectionHeadingProps {
  title: string;
  accentWord: string;
  subtitle?: string;
  align?: "center" | "left";
}

export default function SectionHeading({
  title,
  accentWord,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const parts = title.split(accentWord);
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <AnimatedSection className={`flex flex-col ${alignment}`}>
      <h2 className="font-serif text-[2.75rem] sm:text-[3.5rem] leading-[1.1] text-foreground tracking-[-0.02em] font-medium">
        {parts[0]}
        <span className="text-primary italic">{accentWord}</span>
        {parts[1] || ""}
      </h2>
      {subtitle && (
        <p className="mt-6 text-lg font-sans text-foreground/60 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}
