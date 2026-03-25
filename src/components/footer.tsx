import Link from "next/link";
import { company, navLinks, services } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-6 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-sm font-medium text-slate-700">
                M
              </div>
              <div>
                <div className="text-sm font-medium uppercase tracking-[0.34em] text-slate-900">
                  {company.name}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.34em] text-slate-400">
                  {company.tagline}
                </div>
              </div>
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-slate-500">
              Đối tác tăng trưởng TikTok Shop và thương mại điện tử, đồng hành từ
              chiến lược đến vận hành để giúp doanh nghiệp scale bền vững.
            </p>
          </div>

          <div className="hidden lg:block lg:col-span-1" />

          <div>
            <h3 className="mb-4 text-sm font-medium text-slate-900">Điều hướng</h3>
            <ul className="space-y-3">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-500 transition-colors hover:text-slate-900">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium text-slate-900">Dịch vụ</h3>
            <ul className="space-y-3">
              {services.slice(0, 4).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/dich-vu/${service.slug}`}
                    className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium text-slate-900">Kết nối</h3>
            <ul className="space-y-3">
              {company.social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <Link href="/lien-he" className="text-sm text-slate-500 transition-colors hover:text-slate-900">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-slate-200 pt-8 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-sm text-slate-500">© 2026 MGC ASIA. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <a href={`mailto:${company.email}`} className="transition-colors hover:text-slate-900">
              Email
            </a>
            <a href={`tel:${company.phone.replace(/\s+/g, "")}`} className="transition-colors hover:text-slate-900">
              Hotline
            </a>
            <a href={company.zalo} target="_blank" rel="noreferrer" className="transition-colors hover:text-slate-900">
              Zalo
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
