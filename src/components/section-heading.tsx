type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-4 text-xs uppercase tracking-[0.34em]" style={{ color: "var(--accent-text-blue)" }}>
        {eyebrow}
      </p>
      <h2 className="text-3xl leading-tight md:text-4xl lg:text-5xl" style={{ color: "var(--ink)" }}>
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-lg leading-8" style={{ color: "var(--muted)" }}>{description}</p>
      ) : null}
    </div>
  );
}
