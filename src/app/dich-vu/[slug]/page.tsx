import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/cta-section";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/site-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.name} | MGC ASIA`,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="bg-[#FAFAFA] px-6 pt-28 pb-16 lg:px-8 lg:pt-32 lg:pb-22">
        <div className="mx-auto max-w-7xl">
          <Link href="/dich-vu" className="text-sm text-slate-500 hover:text-indigo-500">
            ← Quay lại danh sách dịch vụ
          </Link>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.88fr]">
            <div>
              <SectionHeading
                eyebrow={service.eyebrow}
                title={service.name}
                description={service.summary}
              />
              <div className="mt-8 rounded-[2rem] border border-slate-200/70 bg-white/82 p-7 shadow-[0_14px_34px_rgba(15,23,42,0.06)]">
                <p className="text-sm uppercase tracking-[0.28em] text-indigo-500">
                  Phạm vi triển khai
                </p>
                <ul className="mt-5 space-y-4 text-base leading-8 text-slate-500">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-indigo-500" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="glass-card p-7">
              <p className="text-sm uppercase tracking-[0.28em] text-indigo-500">
                Kết quả
              </p>
              <div className="mt-5 space-y-4">
                {service.outcomes.map((outcome) => (
                  <div key={outcome} className="rounded-[1.6rem] border border-slate-200/70 bg-slate-50/75 p-5 text-base leading-8 text-slate-500">
                    {outcome}
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-[1.6rem] border border-slate-200/70 bg-white/78 p-5 text-sm leading-7 text-slate-500">
                Nội dung được viết lại ngắn gọn hơn để khách hàng hiểu rõ MGC sẽ
                làm gì và đối tác nhận được gì ngay trên một màn hình.
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
