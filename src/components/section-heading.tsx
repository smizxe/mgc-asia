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
      <p className="mb-4 text-xs uppercase tracking-[0.34em] text-[var(--accent)]">
        {eyebrow}
      </p>
      <h2 className="text-4xl leading-tight text-[var(--ink)] md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-lg leading-8 text-[var(--muted)]">{description}</p>
      ) : null}
    </div>
  );
}
