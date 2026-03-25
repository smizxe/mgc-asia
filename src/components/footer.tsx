import Link from "next/link";
import { company, navLinks, services } from "@/lib/site-data";

const LOGO = "https://mgcasia.vn/wp-content/uploads/2026/03/logo-mgc-new.png";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-14 pb-8">

        {/* Main grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 mb-12">

          {/* Col 1: Logo + mô tả */}
          <div>
            <img
              src={LOGO}
              alt="MGC ASIA"
              className="h-9 w-auto mb-5"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(148,163,184,0.9)" }}>
              Đối tác tăng trưởng TikTok Shop và thương mại điện tử — đồng hành từ chiến lược đến vận hành, giúp doanh nghiệp scale bền vững.
            </p>
            <div className="flex items-center gap-3">
              {company.social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-medium px-3 py-1.5 rounded transition-colors"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    color: "rgba(203,213,225,0.85)",
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Liên hệ */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: "#ffffff" }}
            >
              Liên hệ
            </h4>
            <ul className="space-y-3 text-sm" style={{ color: "rgba(148,163,184,0.9)" }}>
              <li className="leading-relaxed">
                {company.address}
              </li>
              <li>
                <a
                  href={`tel:${company.phone.replace(/\s/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="hover:text-white transition-colors"
                >
                  {company.email}
                </a>
              </li>
              <li style={{ color: "rgba(148,163,184,0.65)", fontSize: "0.78rem", lineHeight: 1.6 }}>
                Thứ 2 – Thứ 6: 08:00 – 17:00<br />
                Thứ 7: 08:00 – 12:00
              </li>
            </ul>
          </div>

          {/* Col 3: Trang */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: "#ffffff" }}
            >
              Điều hướng
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                    style={{ color: "rgba(148,163,184,0.9)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Dịch vụ */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: "#ffffff" }}
            >
              Dịch vụ
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/dich-vu/${s.slug}`}
                    className="text-sm hover:text-white transition-colors leading-snug block"
                    style={{ color: "rgba(148,163,184,0.9)" }}
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="text-xs" style={{ color: "rgba(148,163,184,0.55)" }}>
            © 2026 MGC ASIA (Make Good Choices). All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs" style={{ color: "rgba(148,163,184,0.55)" }}>
            <a href={`mailto:${company.email}`} className="hover:text-white transition-colors">
              Email
            </a>
            <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:text-white transition-colors">
              Hotline
            </a>
            <a href={company.zalo} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              Zalo
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
