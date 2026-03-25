"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { company, navLinks } from "@/lib/site-data";

const logoSrc = "https://mgcasia.vn/wp-content/uploads/2026/03/logo-mgc-new.png";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-2xl">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative flex h-20 items-center justify-between gap-4">
          <Link href="/" className="z-20 flex items-center">
            <img
              src={logoSrc}
              alt="MGC ASIA"
              className="h-9 w-auto object-contain md:h-10"
            />
          </Link>

          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center lg:flex">
            <nav className="flex items-center rounded-full border border-slate-200/80 bg-white/85 p-1 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)]">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                      active
                        ? "bg-slate-900 text-white"
                        : "text-slate-500 hover:bg-slate-100/80 hover:text-slate-900"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="z-20 ml-auto flex items-center gap-3">
            <a
              href={company.zalo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full bg-slate-900 px-5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#5B58F6] hover:shadow-[0_8px_20px_-6px_rgba(91,88,246,0.4)] sm:px-6"
            >
              Nhận tư vấn
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
