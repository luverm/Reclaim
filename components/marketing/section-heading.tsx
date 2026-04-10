type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light"
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";
  const titleColor = theme === "dark" ? "text-white" : "text-charcoal";
  const descriptionColor = theme === "dark" ? "text-white/68" : "text-charcoal/70";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <div className="mb-4 inline-flex rounded-full border border-papaya/15 bg-papaya/8 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-papaya sm:mb-5 sm:px-4 sm:py-2 sm:text-xs">
        {eyebrow}
      </div>
      <h2 className={`font-display text-2xl font-bold tracking-[-0.04em] sm:text-3xl md:text-4xl lg:text-5xl ${titleColor}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 max-w-2xl text-base leading-7 sm:text-lg ${descriptionColor}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
