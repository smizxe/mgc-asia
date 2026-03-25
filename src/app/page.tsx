import Link from "next/link";
import { CTASection } from "@/components/cta-section";
import { HeroAuraCanvas } from "@/components/hero-aura-canvas";
import { SectionHeading } from "@/components/section-heading";
import { articles, services, stats, testimonials, valueProps } from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <section className="hero-section relative overflow-hidden bg-[#FAFAFA] px-6 pt-24 pb-16 lg:px-8 lg:pt-32 lg:pb-24">
        <HeroAuraCanvas />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-medium text-slate-500">
              Bạn đang tìm kiếm
            </p>

            <p className="mb-6 text-[11px] uppercase tracking-[0.34em] text-[#2256A3] sm:text-xs">
              Giải pháp tăng trưởng trên TikTok Shop
            </p>

            <h1 className="mb-6 text-[3.6rem] leading-[0.98] font-light tracking-tighter text-slate-900 sm:text-[4.6rem] md:text-[5.3rem] lg:text-[6rem] xl:text-[6.7rem]">
              Xây hệ thống
              <br />
              bán hàng{" "}
              <span className="bg-gradient-to-r from-[#2256A3] to-[#D91F3F] bg-clip-text italic text-transparent">
                bền vững
              </span>
              <br />
              trên sàn.
            </h1>

            <p className="mb-9 max-w-2xl text-lg leading-relaxed font-light tracking-tight text-slate-500 sm:text-2xl lg:text-[2rem]">
              Đối tác chiến lược của TikTok Shop Việt Nam, đồng hành cùng doanh
              nghiệp từ chiến lược triển khai, tối ưu chi phí đến nâng cao hiệu
              quả marketing và tăng trưởng doanh thu.
            </p>

            <ul className="mb-9 space-y-3 text-base leading-7 text-slate-500 sm:text-lg">
              {[
                "Tối ưu ngân sách, quản trị rủi ro, tăng trưởng doanh thu.",
                "Triển khai đa nền tảng: livestream, booking KOL/KOC, quảng bá đa kênh.",
                "Đồng hành như một CMO & E-commerce Director cho thương hiệu.",
              ].map((item, index) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className={`mt-2 h-2.5 w-2.5 shrink-0 rounded-full ${
                      index % 2 === 0 ? "bg-[#2256A3]" : "bg-[#D91F3F]"
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
                Nhận tư vấn chiến lược
              </a>
              <a
                href="/dich-vu"
                className="secondary-button !h-14 !w-full !px-8 !text-base !font-medium sm:!w-auto"
              >
                Xem hệ thống dịch vụ
              </a>
            </div>
          </div>

          <div className="relative hidden h-[600px] lg:block">
            <div className="absolute top-1/2 left-4 h-[540px] w-[820px] -translate-y-1/2 xl:left-8 xl:w-[860px]">
              <div className="pointer-events-none absolute inset-0 z-0 translate-y-10 -translate-x-10 rounded-full bg-gradient-to-tr from-[#2256A3]/20 via-transparent to-[#D91F3F]/10 blur-3xl" />

              <div className="dashboard-shell absolute top-0 right-0 z-10 flex h-[540px] w-[740px] flex-col overflow-hidden rounded-[2rem]">
                <div className="dashboard-browser-bar flex h-12 items-center border-b border-slate-200/80 px-4 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                  <div className="flex w-20 gap-2 pl-2">
                    <div className="h-3 w-3 rounded-full bg-gradient-to-b from-slate-200 to-slate-300" />
                    <div className="h-3 w-3 rounded-full bg-gradient-to-b from-slate-200 to-slate-300" />
                    <div className="h-3 w-3 rounded-full bg-gradient-to-b from-slate-200 to-slate-300" />
                  </div>
                  <div className="flex flex-1 justify-center">
                    <div className="flex w-[290px] items-center justify-center gap-2 rounded-xl border border-slate-200/80 bg-slate-100/80 px-4 py-1.5 text-sm font-light tracking-wide text-slate-500">
                      dashboard.mgcasia.vn
                    </div>
                  </div>
                  <div className="w-20" />
                </div>

                <div className="flex-1 p-8">
                  <div className="mb-8 flex items-start justify-between">
                    <div>
                      <div className="mb-3 flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-[#2256A3] shadow-[0_0_12px_rgba(34,86,163,0.55)]" />
                        <span className="text-xs font-medium uppercase tracking-[0.24em] text-slate-400">
                          Live Overview
                        </span>
                      </div>
                      <h2 className="text-[2.15rem] leading-none font-normal tracking-tight text-slate-900">
                        Active Merchants
                      </h2>
                    </div>

                    <div className="text-right">
                      <p className="mb-2 text-xs font-medium uppercase tracking-[0.24em] text-slate-400">
                        Net Volume
                      </p>
                      <p className="text-2xl font-normal tracking-tight text-slate-900">
                        $84.2K
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 grid grid-cols-3 gap-4">
                    {[
                      ["Transfers", "$12.4K"],
                      ["Settled", "24 Today"],
                      ["Regions", "4 Markets"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="rounded-2xl border border-slate-200/60 bg-gradient-to-b from-white to-slate-50/80 px-5 py-4 shadow-[0_3px_8px_rgba(0,0,0,0.03)]"
                      >
                        <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-slate-400">
                          {label}
                        </p>
                        <p className="text-xl tracking-tight text-slate-900">{value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="overflow-hidden rounded-[1.75rem] border border-slate-200/70 bg-white">
                    <div className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-slate-200 bg-slate-50/70 px-6 py-4 text-[11px] uppercase tracking-[0.26em] text-slate-400">
                      <span>Market</span>
                      <span>Revenue</span>
                      <span>Volume</span>
                    </div>
                    {[
                      ["TikTok Shop", "$32,400", "$84,200"],
                      ["Shopee Mall", "$18,900", "$51,400"],
                      ["Affiliate", "$9,300", "$23,600"],
                    ].map(([market, revenue, volume]) => (
                      <div
                        key={market}
                        className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-slate-100 px-6 py-5 text-base text-slate-700 last:border-b-0"
                      >
                        <span>{market}</span>
                        <span>{revenue}</span>
                        <span>{volume}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="panel-soft absolute top-14 left-[76px] z-20 w-[340px] rounded-[2rem] bg-white p-7 shadow-[0_20px_50px_rgba(15,23,42,0.1)]">
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900">
                      MGC Livestream
                    </h3>
                    <p className="mt-1 text-xs font-medium uppercase tracking-[0.24em] text-slate-400">
                      Transfer complete
                    </p>
                  </div>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-500">
                    ✓
                  </div>
                </div>

                <p className="text-5xl font-normal tracking-tight text-slate-900">
                  $12,450
                </p>

                <div className="mt-4 flex items-center gap-3 text-sm text-slate-400">
                  <span className="rounded-md bg-emerald-50 px-2 py-1 font-medium text-emerald-600">
                    ↗ 14.2%
                  </span>
                  <span>vs last month</span>
                </div>

                <div className="mt-8 h-px bg-slate-200" />

                <div className="mt-5 space-y-5 text-sm text-slate-500">
                  <div className="flex items-center justify-between">
                    <span>Transfer ID</span>
                    <span className="font-medium text-slate-900">#MGC-8921</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Processed</span>
                    <span className="font-medium text-slate-900">14 Oct, 09:41 AM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Method</span>
                    <span className="font-medium text-slate-900">Bank payout</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sheen bg-[#FAFAFA] px-6 pt-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-slate-400">
              Những con số tạo niềm tin
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.75rem] border border-slate-200/70 bg-white/80 px-6 py-6 shadow-[0_12px_28px_rgba(15,23,42,0.05)]"
              >
                <p className="text-4xl tracking-tight text-slate-900">{stat.value}</p>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.26em] text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sheen bg-[linear-gradient(180deg,#fafafa_0%,#f8fbff_100%)] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Dịch vụ cốt lõi"
            title="Các giải pháp truyền thông và vận hành được gom lại theo một hệ thống rõ ràng hơn."
            description="Nội dung được đọc lại từ website MGC Asia bằng Playwright, sau đó biên tập lại để trang chủ vừa giàu thông tin vừa có cảm giác premium hơn."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.slug}
                className="rounded-[2rem] border border-slate-200/70 bg-white/85 p-7 shadow-[0_16px_40px_rgba(15,23,42,0.05)]"
              >
                <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#2256A3]">
                  {service.eyebrow}
                </p>
                <h3 className="mt-4 text-3xl leading-tight text-slate-900">
                  {service.name}
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-500">
                  {service.summary}
                </p>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-500">
                  {service.bullets.slice(0, 3).map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#D91F3F]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/dich-vu/${service.slug}`}
                  className="mt-8 inline-flex text-sm font-medium text-slate-900 hover:text-[#2256A3]"
                >
                  Xem chi tiết
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sheen bg-[linear-gradient(180deg,#f8fbff_0%,#fafafa_100%)] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[3rem] border border-slate-200/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.75),rgba(241,245,249,0.58))] px-7 py-10 shadow-[0_18px_40px_rgba(15,23,42,0.04)] md:px-10 md:py-14">
          <SectionHeading
            eyebrow="Vì sao MGC"
            title="Hệ sinh thái được xây để đi từ nhận diện đến doanh thu mà vẫn giữ được sự minh bạch."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {valueProps.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] bg-white/82 p-6 shadow-[0_12px_28px_rgba(15,23,42,0.06)]"
              >
                <h3 className="text-xl text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sheen bg-[linear-gradient(180deg,#fafafa_0%,#f8fbff_100%)] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Khách hàng nói gì"
            title="Những phản hồi nổi bật trên website gốc được giữ lại để tăng độ tin cậy cho homepage."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <figure
                key={item.name}
                className="rounded-[2rem] border border-slate-200/70 bg-white/82 p-7 shadow-[0_14px_36px_rgba(15,23,42,0.06)]"
              >
                <blockquote className="text-lg leading-8 text-slate-900">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-slate-200/80 pt-5 text-sm text-slate-500">
                  <div className="font-medium text-slate-900">{item.name}</div>
                  <div>{item.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sheen bg-[linear-gradient(180deg,#f8fbff_0%,#fafafa_100%)] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Tin tức"
              title="Nội dung giáo dục giúp doanh nghiệp hiểu rõ hơn về livestream, content và TikTok Shop."
            />
            <Link
              href="/tin-tuc"
              className="text-sm font-medium text-slate-900 hover:text-[#2256A3]"
            >
              Xem tất cả bài viết
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {articles.map((article) => (
              <article
                key={article.title}
                className="rounded-[2rem] border border-slate-200/70 bg-white/80 p-7 shadow-[0_14px_34px_rgba(15,23,42,0.05)]"
              >
                <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.26em] text-slate-400">
                  <span>{article.category}</span>
                  <span className="h-1 w-1 rounded-full bg-[#D91F3F]" />
                  <span>{article.date}</span>
                </div>
                <h3 className="mt-5 text-2xl leading-tight text-slate-900">
                  {article.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-500">
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
