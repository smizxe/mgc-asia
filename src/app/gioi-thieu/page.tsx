import { CTASection } from "@/components/cta-section";
import { SectionHeading } from "@/components/section-heading";
import { company, coreValues, services, stats } from "@/lib/site-data";

export default function AboutPage() {
  return (
    <>
      <div className="aurora-bg" />

      <section className="relative px-6 pt-28 pb-16 lg:px-8 lg:pt-32 lg:pb-22">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <SectionHeading
              eyebrow="Về chúng tôi"
              title="MGC ASIA — Đối tác chiến lược TikTok Shop và Shopee Việt Nam."
              description="Đồng hành cùng doanh nghiệp với vai trò Giám đốc Marketing và Thương mại điện tử — từ chiến lược đến vận hành."
            />
            <div className="mt-8 space-y-5 text-base leading-8" style={{ color: "var(--muted)" }}>
              <p>
                <strong style={{ color: "var(--ink)" }}>MGC ASIA (Make Good Choices)</strong> — Với hơn 10 năm kinh nghiệm trong lĩnh vực truyền thông và marketing số,
                MGC ASIA đã trở thành đối tác tin cậy của hàng trăm doanh nghiệp trong
                hành trình xây dựng thương hiệu và phát triển kênh bán hàng online.
              </p>
              <p>
                Chúng tôi giúp doanh nghiệp xây dựng hệ thống bán hàng online bài bản,
                từ Content – KOC – Ads đến vận hành gian hàng trên TikTok Shop & Shopee.
                Thay vì tự làm hoặc thuê nhiều bên rời rạc, doanh nghiệp chỉ cần tập trung
                vào sản phẩm – MGC chịu trách nhiệm phần tăng trưởng và doanh thu.
              </p>
              <p>
                Đội ngũ tập trung vào TikTok Shop, Shopee và hệ sinh thái creator
                để doanh nghiệp không cần tự ghép nhiều vendor rời rạc.
              </p>
            </div>
          </div>

          <div className="glass-card p-8">
            <p className="text-xs uppercase tracking-[0.34em]" style={{ color: "var(--accent-text-blue)" }}>
              Tổng quan
            </p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border p-5" style={{ borderColor: "var(--line)", background: "var(--bg-card-subtle)" }}>
                  <p className="text-4xl" style={{ color: "var(--ink)" }}>{stat.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.22em]" style={{ color: "var(--muted)" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-7 rounded-2xl border p-6" style={{ borderColor: "var(--line)", background: "var(--bg-card-subtle)" }}>
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em]" style={{ color: "var(--accent-text-red)" }}>
                Tầm nhìn
              </p>
              <p className="text-sm leading-7" style={{ color: "var(--muted)" }}>
                MGC ASIA hướng đến mục tiêu trở thành đơn vị dẫn đầu tại Việt Nam
                trong lĩnh vực cung cấp giải pháp thương mại điện tử và marketing số,
                trở thành đối tác uy tín của TikTok, Shopee và Facebook.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-16 lg:px-8 lg:py-22">
        <div className="mx-auto max-w-7xl">
          <div className="gradient-border-card px-8 py-10 md:px-10 md:py-14">
            <SectionHeading
              eyebrow="Giá trị cốt lõi"
              title="5 nguyên tắc vận hành xuyên suốt mọi chiến dịch và dự án của MGC ASIA."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {coreValues.map((value) => (
                <div key={value.title} className="rounded-2xl border p-6 transition-all duration-300" style={{ borderColor: "var(--line)", background: "var(--bg-card-subtle)" }}>
                  <h3 className="text-lg font-medium" style={{ color: "var(--ink)" }}>{value.title}</h3>
                  <p className="mt-2 text-sm leading-7" style={{ color: "var(--muted)" }}>{value.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-16 lg:px-8 lg:py-22">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Sứ mệnh"
            title="Đồng hành cùng doanh nghiệp bứt phá doanh số trên thương mại điện tử."
            description="Ứng dụng công nghệ, dữ liệu và trí tuệ nhân tạo (AI) để phân tích hành vi người tiêu dùng, cung cấp dịch vụ minh bạch và hướng tới hiệu quả lâu dài."
          />
        </div>
      </section>

      <section className="relative px-6 py-16 lg:px-8 lg:py-22">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Hệ thống dịch vụ"
            title="6 giải pháp tăng trưởng toàn diện cho thương mại điện tử."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.slug} className="glass-card glass-card-hover cursor-pointer p-6">
                <p className="text-xs uppercase tracking-[0.28em]" style={{ color: "var(--accent-text-blue)" }}>
                  {service.eyebrow}
                </p>
                <h3 className="mt-4 text-2xl" style={{ color: "var(--ink)" }}>{service.name}</h3>
                <p className="mt-4 text-sm leading-7" style={{ color: "var(--muted)" }}>
                  {service.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 pb-16 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="glass-card p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.34em]" style={{ color: "var(--accent-text-blue)" }}>
                  Liên hệ
                </p>
                <h2 className="mt-4 text-4xl" style={{ color: "var(--ink)" }}>
                  Làm việc trực tiếp với đội ngũ MGC ASIA.
                </h2>
              </div>
              <div className="space-y-3 text-base leading-8" style={{ color: "var(--muted)" }}>
                <p>{company.address}</p>
                <p>{company.phone}</p>
                <p>{company.email}</p>
                <p className="text-sm" style={{ color: "var(--muted-light)" }}>{company.workingHours}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
