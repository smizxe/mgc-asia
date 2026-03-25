import { CTASection } from "@/components/cta-section";
import { SectionHeading } from "@/components/section-heading";
import { company, coreValues, services, stats } from "@/lib/site-data";

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#FAFAFA] px-6 pt-28 pb-16 lg:px-8 lg:pt-32 lg:pb-22">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <SectionHeading
              eyebrow="Về chúng tôi"
              title="MGC ASIA đồng vai trò như một bộ phận CMO & e-commerce phía sau doanh nghiệp."
              description="Thông tin được tổng hợp từ các trang giới thiệu và trang chủ hiện tại của mgcasia.vn, sau đó biên tập lại để rõ promise và mô hình vận hành hơn."
            />
            <div className="mt-8 space-y-5 text-base leading-8 text-slate-500">
              <p>
                Với hơn 10 năm kinh nghiệm trong truyền thông và marketing số,
                MGC ASIA đã đồng hành cùng nhiều doanh nghiệp trên hành trình xây
                thương hiệu, mở kênh bán hàng và tối ưu doanh thu online.
              </p>
              <p>
                Đội ngũ tập trung vào TikTok Shop, Shopee và hệ sinh thái creator
                để giúp doanh nghiệp không cần tự ghép nhiều vendor rời rạc. MGC
                xử lý phần tăng trưởng và vận hành, doanh nghiệp tập trung vào sản
                phẩm và năng lực cung ứng.
              </p>
              <p>
                Cách tiếp cận này giúp quyết định được thống nhất từ chiến lược,
                content, creator, ads đến livestream và gian hàng, nhìn rõ hơn tác
                động của từng hành động vào doanh thu.
              </p>
            </div>
          </div>

          <div className="glass-card p-8">
            <p className="text-xs uppercase tracking-[0.34em] text-indigo-500">
              Tổng quan
            </p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="panel-soft rounded-[1.6rem] p-5">
                  <p className="text-4xl text-slate-900">{stat.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.22em] text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-7 rounded-[1.6rem] border border-slate-200/70 bg-slate-50/80 p-6">
              <p className="text-sm leading-7 text-slate-500">
                Tầm nhìn của MGC ASIA là trở thành đối tác hàng đầu tại Việt Nam
                trong lĩnh vực giải pháp tăng trưởng thương mại điện tử và
                marketing số, với một hệ sinh thái dữ liệu, creator và vận hành có
                thể lặp lại.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAFA] px-6 py-16 lg:px-8 lg:py-22">
        <div className="mx-auto max-w-7xl rounded-[3rem] border border-slate-200/70 bg-white/78 px-8 py-10 shadow-[0_16px_42px_rgba(15,23,42,0.06)] md:px-10 md:py-14">
          <SectionHeading
            eyebrow="Giá trị cốt lõi"
            title="Những nguyên tắc vận hành được MGC ASIA nhắc đến nhiều nhất trên site hiện tại."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {coreValues.map((value) => (
              <div key={value} className="rounded-[1.7rem] border border-slate-200/70 bg-slate-50/75 p-6 text-base leading-8 text-slate-500">
                {value}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAFA] px-6 py-16 lg:px-8 lg:py-22">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Hệ thống dịch vụ"
            title="Sáu tầng tăng trưởng của MGC được giữ nội dung cốt lõi nhưng đặt lại trong visual sạch hơn."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.slug} className="rounded-[1.8rem] border border-slate-200/70 bg-white/82 p-6 shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
                <p className="text-xs uppercase tracking-[0.28em] text-indigo-500">
                  {service.eyebrow}
                </p>
                <h3 className="mt-4 text-2xl text-slate-900">{service.name}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-500">
                  {service.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAFA] px-6 pb-16 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-slate-200/70 bg-white/82 p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-indigo-500">
                Liên hệ
              </p>
              <h2 className="mt-4 text-4xl text-slate-900">
                Làm việc trực tiếp với đội ngũ MGC.
              </h2>
            </div>
            <div className="space-y-3 text-base leading-8 text-slate-500">
              <p>{company.address}</p>
              <p>{company.phone}</p>
              <p>{company.email}</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
