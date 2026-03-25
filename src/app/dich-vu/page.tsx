import Link from "next/link";
import { CTASection } from "@/components/cta-section";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/site-data";

export default function ServicesPage() {
  return (
    <>
      <div className="aurora-bg" />

      <section className="relative px-6 pt-28 pb-16 lg:px-8 lg:pt-32 lg:pb-22">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Dịch vụ truyền thông đa kênh"
            title="Giải pháp toàn diện cho thương mại điện tử — từ chiến lược đến vận hành."
            description="6 giải pháp tăng trưởng được thiết kế theo logic: chiến lược → creator → nội dung → livestream → vận hành gian hàng → chuyển giao SOP."
          />
          <div className="mt-12 grid gap-6">
            {services.map((service) => (
              <article
                key={service.slug}
                className="glass-card grid gap-8 p-7 lg:grid-cols-[0.95fr_1.05fr] lg:p-9"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.34em]" style={{ color: "var(--accent-text-blue)" }}>
                    {service.eyebrow}
                  </p>
                  <h2 className="mt-4 text-3xl leading-tight" style={{ color: "var(--ink)" }}>
                    {service.name}
                  </h2>
                  <p className="mt-5 text-base leading-8" style={{ color: "var(--muted)" }}>
                    {service.summary}
                  </p>
                  <Link
                    href={`/dich-vu/${service.slug}`}
                    className="mt-7 inline-flex items-center gap-2 text-sm font-medium transition-colors"
                    style={{ color: "var(--ink)" }}
                  >
                    Mở trang chi tiết
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border p-5" style={{ borderColor: "var(--line)", background: "var(--bg-card-subtle)" }}>
                    <p className="text-sm font-medium uppercase tracking-[0.24em]" style={{ color: "var(--ink)" }}>
                      Công việc chính
                    </p>
                    <ul className="mt-4 space-y-3 text-sm leading-7" style={{ color: "var(--muted)" }}>
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500/60" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border p-5" style={{ borderColor: "var(--line)", background: "var(--bg-card-subtle)" }}>
                    <p className="text-sm font-medium uppercase tracking-[0.24em]" style={{ color: "var(--ink)" }}>
                      Kết quả mong đợi
                    </p>
                    <ul className="mt-4 space-y-3 text-sm leading-7" style={{ color: "var(--muted)" }}>
                      {service.outcomes.map((outcome) => (
                        <li key={outcome} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500/60" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
