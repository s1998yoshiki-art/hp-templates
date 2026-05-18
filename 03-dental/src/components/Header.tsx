import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-beige">
      <div className="container-base flex items-center gap-6 h-[72px]">
        <Link href="#top" className="flex flex-col leading-tight">
          <span className="text-[20px] font-black tracking-[0.04em] text-brand-dark font-serif">
            {SITE.name}
          </span>
          <span className="text-[10px] tracking-[0.2em] text-brand">
            {SITE.nameEn}
          </span>
        </Link>
        <nav className="hidden md:flex gap-6 ml-auto">
          <a href="#about" className="text-sm font-medium text-ink hover:text-brand">医院について</a>
          <a href="#service" className="text-sm font-medium text-ink hover:text-brand">診療内容</a>
          <a href="#commitment" className="text-sm font-medium text-ink hover:text-brand">こだわり</a>
          <a href="#doctor" className="text-sm font-medium text-ink hover:text-brand">医師紹介</a>
          <a href="#access" className="text-sm font-medium text-ink hover:text-brand">アクセス</a>
        </nav>
        <div className="flex items-center gap-3 md:ml-0 ml-auto">
          <a
            href={`tel:${SITE.telRaw}`}
            className="hidden md:inline text-sm font-bold text-brand-dark"
          >
            📞 {SITE.tel}
          </a>
          <a href="#contact" className="btn-base btn-primary !py-2 !px-4 !text-[13px]">
            ご予約・お問い合わせ
          </a>
        </div>
      </div>
    </header>
  );
}
