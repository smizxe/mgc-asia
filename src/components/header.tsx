"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { company, navLinks, services } from "@/lib/site-data";
import { useTheme } from "./theme-provider";

const LOGO = "https://mgcasia.vn/wp-content/uploads/2026/03/logo-mgc-new.png";

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

function ChevronDown() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 opacity-70">
      <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z" clipRule="evenodd" />
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="site-header">

      {/* ══ ROW 1: Logo + Actions ══ */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 h-[64px] flex items-center justify-between">

          {/* Left */}
          <div className="flex items-center gap-2 z-10">
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label={theme === "dark" ? "Giao diện sáng" : "Giao diện tối"}
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>

          {/* Center — Logo */}
          <Link
            href="/"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <img
              src={LOGO}
              alt="MGC ASIA"
              className="h-9 w-auto"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>

          {/* Right */}
          <div className="flex items-center gap-3 z-10">
            <a
              href={company.zalo}
              target="_blank"
              rel="noreferrer"
              className="btn btn-blue hidden sm:inline-flex"
              style={{ padding: "0.45rem 1rem", fontSize: "0.8rem" }}
            >
              Nhận tư vấn
            </a>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-1.5"
              style={{ color: "rgba(203,213,225,0.9)" }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ══ ROW 2: Navigation (desktop) ══ */}
      <div
        className="hidden lg:block"
        style={{ background: "rgba(0,0,0,0.25)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <nav className="flex items-center justify-center">

            {navLinks.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + "/");

              /* ─ Dịch vụ: có dropdown ─ */
              if (link.label === "Dịch vụ") {
                return (
                  <div key={link.href} className="nav-dropdown-wrap">
                    <Link
                      href={link.href}
                      className={`nav-item ${active ? "nav-active" : ""}`}
                    >
                      {link.label}
                      <ChevronDown />
                    </Link>

                    {/* Dropdown panel */}
                    <div className="nav-dropdown-menu">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/dich-vu/${service.slug}`}
                          className="nav-dropdown-item"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              /* ─ Các link thường ─ */
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-item ${active ? "nav-active" : ""}`}
                >
                  {link.label}
                </Link>
              );
            })}

          </nav>
        </div>
      </div>

      {/* ══ Mobile nav ══ */}
      {mobileOpen && (
        <div style={{ background: "#081429", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <nav className="mx-auto max-w-7xl px-5 py-3 flex flex-col">
            {navLinks.map((link) => {
              const isDichVu = link.label === "Dịch vụ";
              return (
                <div key={link.href}>
                  <div className="flex items-center">
                    <Link
                      href={link.href}
                      className="flex-1 block px-3 py-3 text-sm font-semibold uppercase tracking-wider"
                      style={{ color: "rgba(203,213,225,0.88)" }}
                      onClick={() => !isDichVu && setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                    {isDichVu && (
                      <button
                        className="px-3 py-3"
                        style={{ color: "rgba(203,213,225,0.7)" }}
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      >
                        <ChevronDown />
                      </button>
                    )}
                  </div>

                  {/* Mobile services submenu */}
                  {isDichVu && mobileServicesOpen && (
                    <div className="ml-4 pl-3" style={{ borderLeft: "2px solid #2256A3" }}>
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/dich-vu/${s.slug}`}
                          className="block py-2 text-xs"
                          style={{ color: "rgba(148,163,184,0.85)" }}
                          onClick={() => setMobileOpen(false)}
                        >
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <a
              href={company.zalo}
              target="_blank"
              rel="noreferrer"
              className="btn btn-blue mt-3 text-center"
              onClick={() => setMobileOpen(false)}
            >
              Nhận tư vấn miễn phí
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
