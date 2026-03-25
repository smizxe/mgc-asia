import Link from "next/link";
import { CTASection } from "@/components/cta-section";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/site-data";

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[#FAFAFA] px-6 pt-28 pb-16 lg:px-8 lg:pt-32 lg:pb-22">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Dịch vụ"
            title="Toàn bộ hệ thống được tinh chỉnh từ nội dung trên mgcasia.vn thành một offer stack dễ hiểu hơn."
            description="Mỗi nhóm dịch vụ được bố trí lại theo logic growth: chiến lược, creator, nội dung, livestream, store ops và chuyển giao quy trình."
          />
          <div className="mt-12 grid gap-6">
            {services.map((service, index) => (
              <article
                key={service.slug}
                className={`grid gap-8 rounded-[2.3rem] border border-slate-200/70 p-7 shadow-[0_14px_38px_rgba(15,23,42,0.06)] lg:grid-cols-[0.95fr_1.05fr] lg:p-9 ${
                  index % 2 === 0 ? "bg-white/82" : "bg-slate-50/84"
                }`}
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.34em] text-indigo-500">
                    {service.eyebrow}
                  </p>
                  <h2 className="mt-4 text-3xl leading-tight text-slate-900">
                    {service.name}
                  </h2>
                  <p className="mt-5 text-base leading-8 text-slate-500">
                    {service.summary}
                  </p>
                  <Link href={`/dich-vu/${service.slug}`} className="mt-7 inline-flex text-sm font-medium text-slate-900 hover:text-indigo-500">
                    Mở trang chi tiết
                  </Link>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-[1.6rem] border border-slate-200/70 bg-white/80 p-5">
                    <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-900">
                      Công việc chính
                    </p>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-500">
                      {service.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-[1.6rem] border border-slate-200/70 bg-slate-50/80 p-5">
                    <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-900">
                      Kết quả mong đợi
                    </p>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-500">
                      {service.outcomes.map((outcome) => (
                        <li key={outcome}>{outcome}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
