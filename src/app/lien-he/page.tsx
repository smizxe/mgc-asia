import { CTASection } from "@/components/cta-section";
import { SectionHeading } from "@/components/section-heading";
import { company } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#FAFAFA] px-6 pt-28 pb-16 lg:px-8 lg:pt-32 lg:pb-22">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.94fr]">
          <div>
            <SectionHeading
              eyebrow="Liên hệ"
              title="Kết nối với đội ngũ MGC ASIA trong vòng 24 giờ làm việc."
              description="Nội dung địa chỉ, hotline, email và tinh thần support được lấy từ trang liên hệ hiện tại của mgcasia.vn."
            />
            <div className="mt-8 space-y-5 text-base leading-8 text-slate-500">
              <p>{company.address}</p>
              <p>Hotline: {company.phone}</p>
              <p>Email: {company.email}</p>
              <p>Thứ 2 - Thứ 6: 08:00 - 17:00</p>
              <p>Thứ 7: 08:00 - 12:00</p>
              <p>Chủ nhật: Nghỉ</p>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="space-y-4 rounded-[1.8rem] border border-slate-200/70 bg-white/78 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-indigo-500">
                Kênh liên hệ nhanh
              </p>
              <a href={company.zalo} target="_blank" rel="noreferrer" className="cta-button">
                Chat qua Zalo
              </a>
              <a href={`tel:${company.phone.replace(/\s+/g, "")}`} className="secondary-button">
                Gọi hotline
              </a>
              <a href={`mailto:${company.email}`} className="secondary-button">
                Gửi email
              </a>
            </div>

            <div className="mt-6 rounded-[1.8rem] border border-slate-200/70 bg-slate-50/76 p-6">
              <p className="text-sm leading-7 text-slate-500">
                Site mới ưu tiên CTA rõ ràng thay vì embed form phức tạp. Khi cần,
                chúng ta có thể thêm lead form, Zalo widget hoặc lịch book meeting
                ở bước tiếp theo.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
