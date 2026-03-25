"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { company, navLinks } from "@/lib/site-data";
import { useTheme } from "./theme-provider";

const logoSrc = "https://mgcasia.vn/wp-content/uploads/2026/03/logo-mgc-new.png";

function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
      <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
      <path fillRule="evenodd" d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z" clipRule="evenodd" />
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className="fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-2xl"
      style={{
        borderColor: "var(--line)",
        background: "var(--header-bg)",
      }}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative flex h-20 items-center justify-between gap-4">
          <Link href="/" className="z-20 flex items-center">
            <img
              src={logoSrc}
              alt="MGC ASIA"
              className="h-9 w-auto object-contain md:h-10"
              style={{ filter: "var(--logo-filter)" }}
            />
          </Link>

          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center lg:flex">
            <nav
              className="flex items-center rounded-full border p-1 shadow-sm backdrop-blur-md"
              style={{
                borderColor: "var(--glass-border)",
                background: "var(--nav-bg)",
              }}
            >
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="cursor-pointer rounded-full px-5 py-2 text-sm font-medium transition-all duration-200"
                    style={{
                      background: active ? "var(--nav-active-bg)" : "transparent",
                      color: active ? "var(--nav-active-text)" : "var(--nav-text)",
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="z-20 ml-auto flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label={theme === "dark" ? "Chuyển sang giao diện sáng" : "Chuyển sang giao diện tối"}
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
            <a
              href={company.zalo}
              target="_blank"
              rel="noreferrer"
              className="cta-button !h-11 !px-6 !text-sm"
            >
              Nhận tư vấn
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
