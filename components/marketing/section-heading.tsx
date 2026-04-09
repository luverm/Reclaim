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
      <div className="mb-5 inline-flex rounded-full border border-papaya/15 bg-papaya/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-papaya">
        {eyebrow}
      </div>
      <h2 className={`font-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl lg:text-5xl ${titleColor}`}>
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
