import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
      <p className="text-xs uppercase tracking-[0.34em] text-indigo-500">404</p>
      <h1 className="mt-4 text-5xl text-slate-900">Trang này chưa được khởi tạo.</h1>
      <p className="mt-5 text-base leading-8 text-slate-500">
        Mình đã tạo bộ khung route chính cho site mới. Nếu bạn muốn, mình có thể
        bổ sung thêm trang chi tiết cho bài viết hoặc case study tiếp theo.
      </p>
      <Link href="/" className="cta-button mt-8">
        Về trang chủ
      </Link>
    </div>
  );
}
