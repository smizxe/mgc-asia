import { CTASection } from "@/components/cta-section";
import { SectionHeading } from "@/components/section-heading";
import { jobs } from "@/lib/site-data";

export default function CareersPage() {
  return (
    <>
      <section className="bg-[#FAFAFA] px-6 pt-28 pb-16 lg:px-8 lg:pt-32 lg:pb-22">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Tuyển dụng"
            title="Một landing page có sẵn cho nhu cầu mở rộng đội ngũ tăng trưởng."
            description="Danh sách được tổng hợp từ nhóm bài đăng tuyển dụng và sitemap hiện tại của mgcasia.vn."
          />
          <div className="mt-12 grid gap-6">
            {jobs.map((job) => (
              <article
                key={job.title}
                className="rounded-[2rem] border border-slate-200/70 bg-white/82 p-7 shadow-[0_14px_34px_rgba(15,23,42,0.05)]"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-3xl">
                    <p className="text-xs uppercase tracking-[0.28em] text-indigo-500">
                      {job.date}
                    </p>
                    <h2 className="mt-4 text-3xl leading-tight text-slate-900">
                      {job.title}
                    </h2>
                    <p className="mt-4 text-base leading-8 text-slate-500">
                      {job.summary}
                    </p>
                  </div>
                  <a href="/lien-he" className="secondary-button whitespace-nowrap">
                    Ứng tuyển / liên hệ
                  </a>
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
