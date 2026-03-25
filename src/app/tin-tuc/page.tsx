import { CTASection } from "@/components/cta-section";
import { SectionHeading } from "@/components/section-heading";
import { articles } from "@/lib/site-data";

export default function NewsPage() {
  return (
    <>
      <section className="bg-[#FAFAFA] px-6 pt-28 pb-16 lg:px-8 lg:pt-32 lg:pb-22">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Tin tức"
            title="Thư viện bài viết được rút ra từ các nội dung hiện có của MGC ASIA."
            description="Mình đã đọc từ trang chủ và sitemap của mgcasia.vn để đưa vào bộ khung tin tức có thể mở rộng tiếp khi cần migrate nội dung đầy đủ."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {articles.map((article) => (
              <article
                key={article.title}
                className="rounded-[2rem] border border-slate-200/70 bg-white/82 p-7 shadow-[0_14px_34px_rgba(15,23,42,0.05)]"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-indigo-500">
                  {article.date}
                </p>
                <h2 className="mt-4 text-2xl leading-tight text-slate-900">
                  {article.title}
                </h2>
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
