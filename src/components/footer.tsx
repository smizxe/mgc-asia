import Link from "next/link";
import { company, navLinks, services } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t pt-16 pb-8" style={{ borderColor: "var(--line)", background: "var(--footer-bg)" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-6 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border text-sm font-medium" style={{ borderColor: "var(--line)", background: "var(--bg-card-subtle)", color: "var(--ink)" }}>
                M
              </div>
              <div>
                <div className="text-sm font-medium uppercase tracking-[0.34em]" style={{ color: "var(--ink)" }}>
                  {company.name}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.34em]" style={{ color: "var(--muted)" }}>
                  {company.tagline}
                </div>
              </div>
            </div>

            <p className="max-w-sm text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              Đối tác tăng trưởng TikTok Shop và thương mại điện tử, đồng hành từ
              chiến lược đến vận hành để giúp doanh nghiệp scale bền vững.
            </p>
          </div>

          <div className="hidden lg:block lg:col-span-1" />

          <div>
            <h3 className="mb-4 text-sm font-medium" style={{ color: "var(--ink)" }}>Điều hướng</h3>
            <ul className="space-y-3">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="cursor-pointer text-sm transition-colors" style={{ color: "var(--muted)" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium" style={{ color: "var(--ink)" }}>Dịch vụ</h3>
            <ul className="space-y-3">
              {services.slice(0, 4).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/dich-vu/${service.slug}`}
                    className="cursor-pointer text-sm transition-colors"
                    style={{ color: "var(--muted)" }}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium" style={{ color: "var(--ink)" }}>Kết nối</h3>
            <ul className="space-y-3">
              {company.social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer text-sm transition-colors"
                    style={{ color: "var(--muted)" }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <Link href="/lien-he" className="cursor-pointer text-sm transition-colors" style={{ color: "var(--muted)" }}>
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t pt-8 md:flex-row" style={{ borderColor: "var(--line)" }}>
          <div className="text-center md:text-left">
            <p className="text-sm" style={{ color: "var(--muted-light)" }}>&copy; 2026 MGC ASIA. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-6 text-sm" style={{ color: "var(--muted-light)" }}>
            <a href={`mailto:${company.email}`} className="cursor-pointer transition-colors hover:opacity-80">
              Email
            </a>
            <a href={`tel:${company.phone.replace(/\s+/g, "")}`} className="cursor-pointer transition-colors hover:opacity-80">
              Hotline
            </a>
            <a href={company.zalo} target="_blank" rel="noreferrer" className="cursor-pointer transition-colors hover:opacity-80">
              Zalo
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
