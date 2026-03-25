import { company } from "@/lib/site-data";

export function CTASection() {
  return (
    <section className="footer-cta relative overflow-hidden py-20 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-[20%] -left-[10%] h-[70%] w-[70%] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent_60%)] blur-[100px]" />
        <div className="absolute top-[40%] -right-[20%] h-[60%] w-[60%] bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.12),transparent_60%)] blur-[100px]" />
        <div className="footer-cta-grid absolute inset-0 [mask-image:radial-gradient(circle_at_center,black_40%,transparent_80%)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-red-400/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-slate-200 shadow-[0_0_15px_rgba(34,86,163,0.15)] backdrop-blur-md">
            <span className="relative flex h-1.5 w-1.5 items-center justify-center rounded-full bg-indigo-500">
              <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            </span>
            Sẵn sàng đồng hành cùng thương hiệu mới
          </div>

          <h2 className="mt-8 text-5xl leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4.5rem]">
            Xây dựng
            <br className="hidden sm:block" /> điều gì đó
            <br className="hidden sm:block" />{" "}
            <span className="bg-gradient-to-r from-[#2256A3] via-white to-[#D91F3F] bg-clip-text text-transparent">
              tăng trưởng thật.
            </span>
          </h2>

          <p className="mt-6 max-w-[440px] text-base leading-relaxed text-slate-400 sm:text-lg">
            MGC ASIA đồng hành từ chiến lược, nội dung, creator, livestream đến
            vận hành gian hàng để giúp thương hiệu tăng trưởng trên TikTok Shop
            và các nền tảng thương mại điện tử.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Liên hệ nhanh
          </p>
          <div className="mt-6 space-y-4">
            <a
              href={company.zalo}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-medium text-slate-950 transition-all hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Nhận tư vấn qua Zalo
            </a>
            <a
              href={`tel:${company.phone.replace(/\s+/g, "")}`}
              className="flex w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
            >
              Gọi hotline {company.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
