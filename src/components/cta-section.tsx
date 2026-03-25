import { company } from "@/lib/site-data";

export function CTASection() {
  return (
    <section className="footer-cta relative overflow-hidden py-24 lg:py-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-[20%] -left-[10%] h-[70%] w-[70%] bg-[radial-gradient(circle_at_center,rgba(34,86,163,0.2),transparent_60%)] blur-[100px]" />
        <div className="absolute top-[40%] -right-[20%] h-[60%] w-[60%] bg-[radial-gradient(circle_at_center,rgba(217,31,63,0.12),transparent_60%)] blur-[100px]" />
        <div className="footer-cta-grid absolute inset-0 [mask-image:radial-gradient(circle_at_center,black_40%,transparent_80%)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div className="max-w-xl">
          <div className="floating-badge mb-8">
            <span className="dot" />
            Sẵn sàng đồng hành cùng thương hiệu của bạn
          </div>

          <h2 className="text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.5rem]">
            Bứt phá
            <br className="hidden sm:block" /> doanh số cùng
            <br className="hidden sm:block" />{" "}
            <span className="text-gradient-brand">
              MGC ASIA.
            </span>
          </h2>

          <p className="mt-6 max-w-[440px] text-base leading-relaxed text-slate-400 sm:text-lg">
            Hệ sinh thái tích hợp từ chiến lược, content, creator, livestream
            đến vận hành gian hàng — giải pháp toàn diện giúp doanh nghiệp
            chinh phục TikTok Shop, Shopee và các nền tảng TMĐT hàng đầu.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Liên hệ nhanh
          </p>
          <div className="mt-6 space-y-4">
            <a
              href={company.zalo}
              target="_blank"
              rel="noreferrer"
              className="cta-button flex w-full !rounded-xl !py-4 !text-base"
            >
              Nhận tư vấn qua Zalo
            </a>
            <a
              href={`tel:${company.phone.replace(/\s+/g, "")}`}
              className="secondary-button flex w-full !rounded-xl !py-4 !text-base"
            >
              Gọi hotline {company.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
