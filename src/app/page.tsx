import Link from "next/link";
import { company, services, testimonials, valueProps, stats } from "@/lib/site-data";

/* ─── Tất cả hình ảnh từ mgcasia.vn ─── */
const IMG = {
  hero:  "https://mgcasia.vn/wp-content/uploads/2025/06/28.jpg",
  about: "https://mgcasia.vn/wp-content/uploads/2025/06/nvh-vi-sao-chon-chung-toi-img.jpg",
  banner: "https://mgcasia.vn/wp-content/uploads/2025/06/Home-1.jpg",
  whyUs: "https://mgcasia.vn/wp-content/uploads/2025/06/net-viet-hinh-dai-dien-2.jpg",

  // 6 ảnh dịch vụ — theo thứ tự service trong site-data
  services: [
    "https://mgcasia.vn/wp-content/uploads/2025/06/2-6.jpg",                   // Marketing tổng thể
    "https://mgcasia.vn/wp-content/uploads/2025/06/1-1024x1024.jpg",           // Creator & Affiliate
    "https://mgcasia.vn/wp-content/uploads/2025/06/net-viet-hinh-dai-dien-2.jpg", // Media & Content
    "https://mgcasia.vn/wp-content/uploads/2025/06/4.jpg",                     // Livestream Daily
    "https://mgcasia.vn/wp-content/uploads/2025/06/3.jpg",                     // TMĐT toàn diện
    "https://mgcasia.vn/wp-content/uploads/2025/06/6.jpg",                     // Đào tạo SOP
  ],

  // Ảnh sự kiện
  events: [
    "https://mgcasia.vn/wp-content/uploads/2025/06/28.jpg",
    "https://mgcasia.vn/wp-content/uploads/2025/06/Anh-man-hinh-2025-06-14-luc-20.25.25-150x150.png",
    "https://mgcasia.vn/wp-content/uploads/2025/06/Anh-man-hinh-2025-06-14-luc-20.28.18-150x150.png",
    "https://mgcasia.vn/wp-content/uploads/2025/06/Anh-man-hinh-2025-06-14-luc-20.32.39-150x150.png",
    "https://mgcasia.vn/wp-content/uploads/2025/06/Anh-man-hinh-2025-06-14-luc-22.59.22-150x150.png",
  ],

  // Logo đối tác / chứng nhận
  partners: [
    "https://mgcasia.vn/wp-content/uploads/2025/06/1-1-1024x1024.jpg",
    "https://mgcasia.vn/wp-content/uploads/2025/06/2-2-1024x1024.jpg",
    "https://mgcasia.vn/wp-content/uploads/2025/06/3-1-1024x1024.jpg",
    "https://mgcasia.vn/wp-content/uploads/2025/06/4-1-1024x1024.jpg",
  ],

  // Thumbnail tin tức
  news: [
    "https://mgcasia.vn/wp-content/uploads/2025/07/concept-photo.png",
    "https://mgcasia.vn/wp-content/uploads/2025/07/set-up-goc-quay.png",
    "https://mgcasia.vn/wp-content/uploads/2025/07/chinh-web-1000-x-800-px-900-x-700-px-620-x-480-px.png",
  ],
};

const articles = [
  {
    title: "Tại sao chụp ảnh concept quyết định 60% hiệu quả truyền thông sản phẩm?",
    date: "23/07/2025",
    category: "Content Marketing",
    summary:
      "Visual concept không chỉ là hình đẹp — nó quyết định sản phẩm có nổi bật trên TikTok, Reels hay bị lướt qua. Phân tích cách các thương hiệu top đầu xây dựng concept bán hàng hiệu quả.",
    image: IMG.news[0],
  },
  {
    title: "Set-up góc quay review sản phẩm đẹp như KOL chỉ với điện thoại",
    date: "23/07/2025",
    category: "Hướng dẫn thực chiến",
    summary:
      "Hướng dẫn chi tiết cách chọn bố cục, ánh sáng tự nhiên, micro thu âm và khung hình chuẩn để video review chuyên nghiệp mà không cần thiết bị đắt tiền.",
    image: IMG.news[1],
  },
  {
    title: "Phễu bán hàng TikTok Shop: từ video viral đến đơn chốt mỗi ngày",
    date: "05/08/2025",
    category: "Chiến lược",
    summary:
      "Phân tách từng bước đường đi từ content hook, creator seeding, livestream traffic đến trang sản phẩm và các điểm chạm giúp chốt đơn hiệu quả.",
    image: IMG.news[2],
  },
];

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════
          HERO — ảnh nền + overlay + text
      ══════════════════════════════════ */}
      <section style={{ paddingTop: "112px" }}>
        <div className="hero-wrap">
          <img
            src={IMG.hero}
            alt="MGC ASIA — Giải pháp tăng trưởng TikTok Shop"
            className="hero-img"
          />
          <div className="hero-overlay" />
          <div className="hero-content">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "rgba(255,255,255,0.62)" }}
            >
              Đối tác chiến lược TikTok Shop & Shopee Việt Nam
            </p>
            <h1
              className="text-4xl lg:text-5xl xl:text-[3.4rem] font-extrabold leading-tight max-w-2xl mb-6"
              style={{ letterSpacing: "-0.02em", color: "#ffffff" }}
            >
              Giải pháp tăng trưởng<br />
              toàn diện trên sàn TMĐT
            </h1>
            <div className="flex flex-wrap items-center gap-3">
              <a href="/lien-he" className="btn btn-blue">
                Nhận tư vấn miễn phí
              </a>
              <a href="/dich-vu" className="btn btn-white-outline">
                Khám phá dịch vụ
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          STATS BAR
      ══════════════════════════════════ */}
      <section style={{ background: "#2256A3" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          BANNER — Home-1.jpg full width
      ══════════════════════════════════ */}
      <div className="relative overflow-hidden" style={{ height: "220px" }}>
        <img
          src={IMG.banner}
          alt="MGC ASIA TikTok Shop"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: "rgba(8,20,41,0.72)" }}
        >
          <div className="text-center text-white px-4">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.6)" }}>
              Đối tác chiến lược
            </p>
            <p className="text-2xl lg:text-3xl font-extrabold">
              TikTok Shop & Shopee Việt Nam
            </p>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════
          ABOUT — text trái, ảnh phải
      ══════════════════════════════════ */}
      <section className="py-20 lg:py-28" style={{ background: "var(--bg)" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <p className="sec-label">Về chúng tôi</p>
            <h2 className="sec-title mb-5">
              MGC ASIA —<br />Make Good Choices
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "var(--body)" }}>
              MGC Asia là đơn vị đồng hành cùng doanh nghiệp với vai trò{" "}
              <strong style={{ color: "var(--ink)" }}>
                Giám đốc Marketing &amp; Thương mại điện tử (CMO &amp; E-commerce Director)
              </strong>
              .
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: "var(--body)" }}>
              Chúng tôi giúp doanh nghiệp xây dựng hệ thống bán hàng online bài bản — từ Content, KOC, Ads đến
              vận hành gian hàng trên TikTok Shop &amp; Shopee. Thay vì tự làm hoặc thuê nhiều bên rời rạc,
              doanh nghiệp chỉ cần tập trung vào sản phẩm, MGC chịu trách nhiệm phần còn lại.
            </p>
            <ul className="space-y-2 mb-8 text-sm" style={{ color: "var(--body)" }}>
              {[
                "Mở rộng quy mô một cách bền vững",
                "Bán hàng hiệu quả hơn trên đa nền tảng",
                "Tăng trưởng doanh thu ổn định theo từng giai đoạn",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span
                    className="mt-1.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                    style={{ background: "#2256A3" }}
                  >
                    <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/gioi-thieu" className="btn btn-blue">
              Tìm hiểu thêm
            </Link>
          </div>

          <div className="relative">
            <img
              src={IMG.about}
              alt="MGC ASIA — Đội ngũ chuyên nghiệp"
              className="about-img"
              style={{ borderRadius: "4px" }}
            />
            {/* Accent decoration */}
            <div
              className="absolute -bottom-4 -left-4 w-24 h-24 -z-10"
              style={{ background: "#2256A3", opacity: 0.12, borderRadius: "4px" }}
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SERVICES — 3-col card grid
      ══════════════════════════════════ */}
      <section className="py-20 lg:py-24" style={{ background: "var(--bg-alt)" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <p className="sec-label">Giải pháp toàn diện</p>
              <h2 className="sec-title">Các dịch vụ chính của MGC ASIA</h2>
            </div>
            <Link
              href="/dich-vu"
              className="text-sm font-semibold shrink-0"
              style={{ color: "#2256A3" }}
            >
              Xem tất cả dịch vụ →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link key={service.slug} href={`/dich-vu/${service.slug}`} style={{ display: "flex" }}>
                <article className="img-card w-full">
                  <div className="card-thumb">
                    <img
                      src={IMG.services[index] ?? IMG.services[0]}
                      alt={service.name}
                      className="card-thumb-inner"
                    />
                  </div>
                  <div className="card-body">
                    <div className="card-meta">
                      <span className="card-tag">{service.eyebrow}</span>
                    </div>
                    <h3 className="card-title">{service.name}</h3>
                    <p className="card-excerpt">{service.summary}</p>
                    <span className="card-link">Xem chi tiết →</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          WHY MGC — dark, ảnh trái text phải
      ══════════════════════════════════ */}
      <section className="py-20 lg:py-28" style={{ background: "#0c1c3d" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Ảnh */}
          <div className="order-2 lg:order-1">
            <img
              src={IMG.whyUs}
              alt="Vì sao chọn MGC ASIA"
              className="w-full object-cover"
              style={{ aspectRatio: "4/3", borderRadius: "4px" }}
            />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2 on-dark">
            <p className="sec-label">Vì sao nên chọn</p>
            <h2 className="sec-title mb-8">
              Hệ sinh thái đưa thương hiệu từ nhận diện đến doanh thu
            </h2>
            <div className="space-y-5">
              {valueProps.map((item) => (
                <div key={item.title} className="value-item">
                  <div className="value-dot">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(148,163,184,0.9)" }}>
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <a href={company.zalo} target="_blank" rel="noreferrer" className="btn btn-blue">
                Đặt lịch tư vấn ngay
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          PARTNERS — logo strip
      ══════════════════════════════════ */}
      <section
        className="py-12"
        style={{
          background: "var(--bg)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p
            className="text-center text-xs font-bold uppercase tracking-widest mb-8"
            style={{ color: "var(--muted)" }}
          >
            Đối tác & Chứng nhận chính thức
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-items-center">
            {IMG.partners.map((src, i) => (
              <div key={i} className="flex items-center justify-center p-3">
                <img
                  src={src}
                  alt={`Đối tác ${i + 1}`}
                  className="partner-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          EVENTS — photo grid
      ══════════════════════════════════ */}
      <section className="py-20 lg:py-24" style={{ background: "var(--bg-alt)" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10">
            <p className="sec-label">Hoạt động cộng đồng</p>
            <h2 className="sec-title">Sự kiện MGC ASIA</h2>
          </div>

          {/* Featured + small grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
            {/* Featured ảnh lớn */}
            <div
              className="col-span-2 event-thumb overflow-hidden"
              style={{ aspectRatio: "16/9", borderRadius: "4px" }}
            >
              <img
                src={IMG.events[0]}
                alt="Sự kiện MGC ASIA"
                className="event-img"
              />
            </div>

            {/* 2 ảnh nhỏ bên phải */}
            <div className="flex flex-col gap-3 lg:gap-4">
              <div
                className="event-thumb overflow-hidden flex-1"
                style={{ borderRadius: "4px", minHeight: "120px" }}
              >
                <img src={IMG.events[1]} alt="Sự kiện" className="event-img" />
              </div>
              <div
                className="event-thumb overflow-hidden flex-1"
                style={{ borderRadius: "4px", minHeight: "120px" }}
              >
                <img src={IMG.events[2]} alt="Sự kiện" className="event-img" />
              </div>
            </div>

            {/* 2 ảnh hàng dưới */}
            {IMG.events.slice(3).map((src, i) => (
              <div
                key={i}
                className="event-thumb overflow-hidden"
                style={{ aspectRatio: "16/9", borderRadius: "4px" }}
              >
                <img src={src} alt="Sự kiện" className="event-img" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          TESTIMONIALS — 3-col cards
      ══════════════════════════════════ */}
      <section className="py-20 lg:py-24" style={{ background: "var(--bg)" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <p className="sec-label">Lắng nghe ý kiến</p>
            <h2 className="sec-title">Khách hàng nói gì về MGC ASIA</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.slice(0, 3).map((item) => (
              <figure key={item.name} className="testimonial-card">
                {item.highlight && (
                  <span
                    className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-4"
                    style={{ background: "var(--tag-bg)", color: "var(--tag-text)" }}
                  >
                    {item.highlight}
                  </span>
                )}
                <blockquote
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: "var(--body)" }}
                >
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption
                  className="mt-5 pt-4 border-t"
                  style={{ borderColor: "var(--quote-border)" }}
                >
                  <div className="font-semibold text-sm" style={{ color: "var(--ink)" }}>
                    {item.name}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>
                    {item.role}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          NEWS — 3-col card grid với ảnh thật
      ══════════════════════════════════ */}
      <section className="py-20 lg:py-24" style={{ background: "var(--bg-alt)" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <p className="sec-label">Kiến thức thực chiến</p>
              <h2 className="sec-title">Tin tức & Hướng dẫn</h2>
            </div>
            <Link
              href="/tin-tuc"
              className="shrink-0 text-sm font-semibold"
              style={{ color: "#2256A3" }}
            >
              Xem tất cả →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link key={article.title} href="/tin-tuc" style={{ display: "flex" }}>
                <article className="img-card w-full">
                  <div className="card-thumb">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="card-thumb-inner"
                    />
                  </div>
                  <div className="card-body">
                    <div className="card-meta">
                      <span className="card-tag">{article.category}</span>
                      <span className="card-date">{article.date}</span>
                    </div>
                    <h3 className="card-title">{article.title}</h3>
                    <p className="card-excerpt">{article.summary}</p>
                    <span className="card-link">Đọc thêm →</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          CTA BOTTOM
      ══════════════════════════════════ */}
      <section className="py-20" style={{ background: "#2256A3" }}>
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight">
            Sẵn sàng tăng trưởng<br />cùng MGC ASIA?
          </h2>
          <p className="text-base mb-8" style={{ color: "rgba(255,255,255,0.8)" }}>
            Đặt lịch tư vấn miễn phí — đội ngũ chuyên gia sẽ phân tích và đề xuất giải pháp phù hợp nhất với doanh nghiệp của bạn.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={company.zalo}
              target="_blank"
              rel="noreferrer"
              className="btn btn-white w-full sm:w-auto"
            >
              Nhận tư vấn qua Zalo
            </a>
            <Link href="/dich-vu" className="btn btn-white-outline w-full sm:w-auto">
              Xem dịch vụ chi tiết
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
