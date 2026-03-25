import Link from "next/link";
import { CTASection } from "@/components/cta-section";
import { HeroAuraCanvas } from "@/components/hero-aura-canvas";
import { SectionHeading } from "@/components/section-heading";
import { articles, services, stats, testimonials, valueProps } from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      {/* ─── Aurora background ─── */}
      <div className="aurora-bg" />

      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="hero-section relative px-6 pt-28 pb-20 lg:px-8 lg:pt-36 lg:pb-28">
        <HeroAuraCanvas />

        {/* Grid pattern */}
        <div className="pointer-events-none absolute inset-0 z-0 grid-pattern opacity-60" />

        {/* Glow orbs */}
        <div className="glow-orb -top-32 -left-32 h-[500px] w-[500px] bg-[radial-gradient(circle,rgba(34,86,163,0.25),transparent_60%)]" />
        <div className="glow-orb -right-20 top-20 h-[400px] w-[400px] bg-[radial-gradient(circle,rgba(217,31,63,0.15),transparent_60%)]" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="max-w-2xl">
            <div className="floating-badge mb-6">
              <span className="dot" />
              Đối tác chiến lược TikTok Shop & Shopee Việt Nam
            </div>

            <p className="mb-4 text-xs uppercase tracking-[0.34em]" style={{ color: "var(--accent-text-blue)" }}>
              Giải pháp truyền thông & thương mại điện tử toàn diện
            </p>

            <h1 className="mb-6 text-[3.2rem] leading-[0.98] font-light tracking-tighter sm:text-[4.2rem] md:text-[5rem] lg:text-[5.6rem] xl:text-[6.2rem]" style={{ color: "var(--ink)" }}>
              Đồng hành
              <br />
              tăng trưởng{" "}
              <span className="text-gradient-brand italic font-normal">
                bền vững
              </span>
              <br />
              trên sàn.
            </h1>

            <p className="mb-9 max-w-2xl text-lg leading-relaxed font-light tracking-tight sm:text-xl lg:text-2xl" style={{ color: "var(--muted)" }}>
              MGC ASIA không chỉ cung cấp dịch vụ — chúng tôi đồng hành cùng
              doanh nghiệp với vai trò Giám đốc Marketing và Thương mại điện tử,
              từ chiến lược đến vận hành.
            </p>

            <ul className="mb-9 space-y-3 text-base leading-7 sm:text-lg" style={{ color: "var(--muted)" }}>
              {[
                "Đối tác chiến lược của TikTok Shop Việt Nam, top đầu trong lĩnh vực vận hành thương hiệu.",
                "Cung cấp lộ trình phát triển bền vững: từ chiến lược triển khai, tối ưu chi phí, nâng cao hiệu quả.",
                "Triển khai đa nền tảng: livestream, booking KOL/KOC, quảng bá đa kênh giúp chuyển đổi tối ưu.",
              ].map((item, index) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className={`mt-2 h-2.5 w-2.5 shrink-0 rounded-full shadow-[0_0_10px] ${
                      index % 2 === 0
                        ? "bg-blue-500 shadow-blue-500/40"
                        : "bg-red-500 shadow-red-500/40"
                    }`}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
              <a
                href="/lien-he"
                className="cta-button !h-14 !w-full !px-8 !text-base !font-medium sm:!w-auto"
              >
                Nhận tư vấn miễn phí
              </a>
              <a
                href="/dich-vu"
                className="secondary-button !h-14 !w-full !px-8 !text-base !font-medium sm:!w-auto"
              >
                Khám phá dịch vụ
              </a>
            </div>
          </div>

          {/* ─── Dashboard mockup ─── */}
          <div className="relative hidden h-[600px] lg:block">
            <div className="absolute top-1/2 left-4 h-[540px] w-[820px] -translate-y-1/2 xl:left-8 xl:w-[860px]">
              <div className="pointer-events-none absolute inset-0 z-0 translate-y-10 -translate-x-10 rounded-full bg-gradient-to-tr from-blue-500/15 via-transparent to-red-500/10 blur-3xl" />

              <div className="dashboard-shell absolute top-0 right-0 z-10 flex h-[540px] w-[740px] flex-col overflow-hidden">
                <div className="dashboard-browser-bar flex h-12 items-center border-b px-4" style={{ borderColor: "var(--line)" }}>
                  <div className="flex w-20 gap-2 pl-2">
                    <div className="h-3 w-3 rounded-full" style={{ background: "var(--dot-red)" }} />
                    <div className="h-3 w-3 rounded-full" style={{ background: "var(--dot-yellow)" }} />
                    <div className="h-3 w-3 rounded-full" style={{ background: "var(--dot-green)" }} />
                  </div>
                  <div className="flex flex-1 justify-center">
                    <div className="flex w-[290px] items-center justify-center gap-2 rounded-xl border px-4 py-1.5 text-sm font-light tracking-wide" style={{ borderColor: "var(--line)", background: "var(--bg-card-subtle)", color: "var(--muted)" }}>
                      dashboard.mgcasia.vn
                    </div>
                  </div>
                  <div className="w-20" />
                </div>

                <div className="flex-1 p-8">
                  <div className="mb-8 flex items-start justify-between">
                    <div>
                      <div className="mb-3 flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.55)]" />
                        <span className="text-xs font-medium uppercase tracking-[0.24em]" style={{ color: "var(--muted)" }}>
                          Tổng quan realtime
                        </span>
                      </div>
                      <h2 className="text-[2.15rem] leading-none font-normal tracking-tight" style={{ color: "var(--ink)" }}>
                        Hiệu suất Campaign
                      </h2>
                    </div>

                    <div className="text-right">
                      <p className="mb-2 text-xs font-medium uppercase tracking-[0.24em]" style={{ color: "var(--muted)" }}>
                        Doanh thu tháng
                      </p>
                      <p className="text-2xl font-normal tracking-tight" style={{ color: "var(--ink)" }}>
                        2.1 tỷ
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 grid grid-cols-3 gap-4">
                    {[
                      ["Đơn hàng", "1,247"],
                      ["ROAS", "4.8x"],
                      ["Kênh hoạt động", "6 sàn"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="rounded-xl border px-5 py-4"
                        style={{ borderColor: "var(--line)", background: "var(--bg-card-subtle)" }}
                      >
                        <p className="mb-2 text-[11px] uppercase tracking-[0.18em]" style={{ color: "var(--muted)" }}>
                          {label}
                        </p>
                        <p className="text-xl tracking-tight" style={{ color: "var(--ink)" }}>{value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="overflow-hidden rounded-xl border" style={{ borderColor: "var(--line)" }}>
                    <div className="grid grid-cols-[1.4fr_1fr_1fr] border-b px-6 py-4 text-[11px] uppercase tracking-[0.26em]" style={{ borderColor: "var(--line)", background: "var(--bg-card-subtle)", color: "var(--muted)" }}>
                      <span>Kênh bán</span>
                      <span>Doanh thu</span>
                      <span>Đơn hàng</span>
                    </div>
                    {[
                      ["TikTok Shop", "892tr", "4,200"],
                      ["Shopee Mall", "518tr", "2,840"],
                      ["Livestream", "347tr", "1,560"],
                    ].map(([market, revenue, volume]) => (
                      <div
                        key={market}
                        className="grid grid-cols-[1.4fr_1fr_1fr] border-b px-6 py-5 text-base last:border-b-0"
                        style={{ borderColor: "var(--line)", color: "var(--foreground)" }}
                      >
                        <span>{market}</span>
                        <span>{revenue}</span>
                        <span>{volume}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="panel-soft absolute top-14 left-[76px] z-20 w-[340px] rounded-2xl p-7 shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold" style={{ color: "var(--ink)" }}>
                      MGC Livestream
                    </h3>
                    <p className="mt-1 text-xs font-medium uppercase tracking-[0.24em]" style={{ color: "var(--muted)" }}>
                      Phiên live hôm nay
                    </p>
                  </div>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full text-sm" style={{ background: "var(--emerald-check-bg)", color: "var(--emerald-check-text)" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                <p className="text-5xl font-normal tracking-tight" style={{ color: "var(--ink)" }}>
                  48.2tr
                </p>

                <div className="mt-4 flex items-center gap-3 text-sm" style={{ color: "var(--muted)" }}>
                  <span className="rounded-md px-2 py-1 font-medium" style={{ background: "var(--emerald-stat-bg)", color: "var(--emerald-stat-text)" }}>
                    +32.5%
                  </span>
                  <span>so với tuần trước</span>
                </div>

                <div className="mt-8 h-px" style={{ background: "var(--line)" }} />

                <div className="mt-5 space-y-5 text-sm" style={{ color: "var(--muted)" }}>
                  <div className="flex items-center justify-between">
                    <span>Số phiên live</span>
                    <span className="font-medium" style={{ color: "var(--ink)" }}>12 phiên</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Đơn chốt</span>
                    <span className="font-medium" style={{ color: "var(--ink)" }}>347 đơn</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Tỷ lệ chuyển đổi</span>
                    <span className="font-medium" style={{ color: "var(--ink)" }}>8.4%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ STATS ═══════════════════════ */}
      <section className="section-dark px-6 pt-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.3em]" style={{ color: "var(--muted)" }}>
              Hơn 10 năm kinh nghiệm — Những con số tạo niềm tin
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="stat-card gradient-border-card px-6 py-7 text-center"
              >
                <p className="text-4xl font-semibold tracking-tight md:text-5xl" style={{ color: "var(--ink)" }}>
                  {stat.value}
                </p>
                <p className="mt-3 text-xs font-medium uppercase tracking-[0.26em]" style={{ color: "var(--muted)" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ SERVICES ═══════════════════════ */}
      <section className="section-alt px-6 py-24 lg:px-8">
        <div className="glow-orb top-0 left-1/2 -translate-x-1/2 h-[600px] w-[600px] bg-[radial-gradient(circle,rgba(34,86,163,0.12),transparent_60%)]" />

        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Các giải pháp truyền thông chính"
            title="Giải pháp toàn diện cho thương mại điện tử — từ chiến lược đến vận hành."
            description="Hệ sinh thái tích hợp nguồn lực và công nghệ tiên tiến, kết nối trực tiếp với TikTok, Facebook, Shopee để giúp doanh nghiệp mở rộng kênh bán hàng hiệu quả nhất."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.slug}
                className="glass-card glass-card-hover cursor-pointer p-7"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg" style={{ background: "rgba(34, 86, 163, 0.1)" }}>
                    <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                  </span>
                  <p className="text-xs font-medium uppercase tracking-[0.32em]" style={{ color: "var(--accent-text-blue)" }}>
                    {service.eyebrow}
                  </p>
                </div>
                <h3 className="text-2xl leading-tight lg:text-3xl" style={{ color: "var(--ink)" }}>
                  {service.name}
                </h3>
                {service.tagline && (
                  <p className="mt-2 text-sm font-medium italic" style={{ color: "var(--accent-text-red)" }}>
                    &ldquo;{service.tagline}&rdquo;
                  </p>
                )}
                <p className="mt-4 text-base leading-8" style={{ color: "var(--muted)" }}>
                  {service.summary}
                </p>
                <ul className="mt-6 space-y-3 text-sm leading-7" style={{ color: "var(--muted)" }}>
                  {service.bullets.slice(0, 3).map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-500/70 shadow-[0_0_6px_rgba(217,31,63,0.4)]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/dich-vu/${service.slug}`}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium transition-colors"
                  style={{ color: "var(--ink)" }}
                >
                  Xem chi tiết
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ WHY MGC ASIA ═══════════════════════ */}
      <section className="section-dark px-6 py-24 lg:px-8">
        <div className="glow-orb -right-20 top-1/2 -translate-y-1/2 h-[500px] w-[500px] bg-[radial-gradient(circle,rgba(217,31,63,0.1),transparent_60%)]" />

        <div className="mx-auto max-w-7xl">
          <div className="gradient-border-card px-7 py-12 md:px-12 md:py-16">
            <SectionHeading
              eyebrow="Vì sao nên chọn MGC ASIA"
              title="Hệ sinh thái được xây dựng để đưa thương hiệu từ nhận diện đến doanh thu — minh bạch và đo lường được."
            />
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {valueProps.map((item) => (
                <div
                  key={item.title}
                  className="group cursor-pointer rounded-2xl border p-6 transition-all duration-300"
                  style={{
                    borderColor: "var(--line)",
                    background: "var(--bg-card-subtle)",
                  }}
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-red-500/10">
                    {item.icon === "shield" && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" style={{ color: "var(--accent-text-blue)" }}>
                        <path fillRule="evenodd" d="M9.661 2.237a.531.531 0 01.678 0 11.947 11.947 0 007.078 2.749.5.5 0 01.479.425c.069.52.104 1.05.104 1.59 0 5.162-3.26 9.563-7.834 11.256a.48.48 0 01-.332 0C5.26 16.564 2 12.163 2 7c0-.538.035-1.069.104-1.589a.5.5 0 01.48-.425 11.947 11.947 0 007.077-2.75z" clipRule="evenodd" />
                      </svg>
                    )}
                    {item.icon === "rocket" && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" style={{ color: "var(--accent-text-red)" }}>
                        <path fillRule="evenodd" d="M4.606 12.97a.75.75 0 01-.134 1.051 2.494 2.494 0 00-.93 2.437 2.494 2.494 0 002.437-.93.75.75 0 111.186.918 3.995 3.995 0 01-4.482 1.332.75.75 0 01-.461-.461 3.994 3.994 0 011.332-4.482.75.75 0 011.052.134z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M5.752 12A13.07 13.07 0 008 14.248v4.002c0 .414.336.75.75.75a5 5 0 004.797-6.414 12.984 12.984 0 005.45-10.848.75.75 0 00-.735-.735 12.984 12.984 0 00-10.849 5.45A5 5 0 001 11.25c.001.414.337.75.751.75h4.002zM13 9a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    )}
                    {item.icon === "users" && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-emerald-400">
                        <path d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z" />
                      </svg>
                    )}
                    {item.icon === "network" && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-purple-400">
                        <path d="M4.464 3.162A2 2 0 016.28 2h7.44a2 2 0 011.816 1.162l1.154 2.5c.067.145.1.301.1.461V7a3 3 0 01-5 2.236A3 3 0 015 7V6.125a1 1 0 01.1-.461l1.364-2.502z" />
                        <path d="M2 12.5a1 1 0 011-1h1.586a1 1 0 01.707.293l1.414 1.414a1 1 0 00.707.293h5.172a1 1 0 00.707-.293l1.414-1.414a1 1 0 01.707-.293H17a1 1 0 011 1v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2z" />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-lg font-medium" style={{ color: "var(--ink)" }}>{item.title}</h3>
                  <p className="mt-3 text-sm leading-7" style={{ color: "var(--muted)" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ TESTIMONIALS ═══════════════════════ */}
      <section className="section-alt px-6 py-24 lg:px-8">
        <div className="glow-orb left-1/4 top-0 h-[400px] w-[400px] bg-[radial-gradient(circle,rgba(34,86,163,0.1),transparent_60%)]" />

        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Khách hàng nói gì"
            title="Kết quả thực tế từ những doanh nghiệp và KOL đã đồng hành cùng MGC ASIA."
            align="center"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item) => (
              <figure
                key={item.name}
                className="testimonial-card"
              >
                {item.highlight && (
                  <div className="mb-4 inline-flex rounded-full px-3 py-1 text-xs font-medium" style={{ background: "var(--highlight-bg)", color: "var(--highlight-text)", border: "1px solid var(--highlight-border)" }}>
                    {item.highlight}
                  </div>
                )}
                <blockquote className="text-base leading-8 lg:text-lg" style={{ color: "var(--ink-secondary)" }}>
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t pt-5 text-sm" style={{ borderColor: "var(--line)", color: "var(--muted)" }}>
                  <div className="font-medium" style={{ color: "var(--ink)" }}>{item.name}</div>
                  <div>{item.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ ARTICLES ═══════════════════════ */}
      <section className="section-dark px-6 py-24 lg:px-8">
        <div className="glow-orb -right-20 top-0 h-[400px] w-[400px] bg-[radial-gradient(circle,rgba(217,31,63,0.08),transparent_60%)]" />

        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Tin tức & Kiến thức"
              title="Chia sẻ thực chiến giúp doanh nghiệp nắm bắt xu hướng livestream, content và TikTok Shop."
            />
            <Link
              href="/tin-tuc"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
              style={{ color: "var(--ink)" }}
            >
              Xem tất cả bài viết
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {articles.map((article) => (
              <article
                key={article.title}
                className="glass-card glass-card-hover cursor-pointer p-7"
              >
                <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.26em]" style={{ color: "var(--muted)" }}>
                  <span>{article.category}</span>
                  <span className="h-1 w-1 rounded-full bg-red-500" />
                  <span>{article.date}</span>
                </div>
                <h3 className="mt-5 text-xl leading-tight lg:text-2xl" style={{ color: "var(--ink)" }}>
                  {article.title}
                </h3>
                <p className="mt-4 text-sm leading-7" style={{ color: "var(--muted)" }}>
                  {article.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
