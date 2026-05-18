import Link from "next/link";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/92 backdrop-blur-md border-b border-line">
      <div className="container-base flex items-center gap-6 h-[72px]">
        <Link href="#top" className="flex flex-col leading-tight">
          <span className="text-[20px] font-black tracking-[0.02em] text-brand-dark font-serif">
            {SITE.name}
          </span>
          <span className="text-[10px] tracking-[0.2em] text-brand">
            {SITE.nameEn}
          </span>
        </Link>
        <nav className="hidden md:flex gap-6 ml-auto">
          <a href="#about" className="text-sm font-medium text-ink hover:text-brand">強み</a>
          <a href="#services" className="text-sm font-medium text-ink hover:text-brand">サービス</a>
          <a href="#feature" className="text-sm font-medium text-ink hover:text-brand">安心材料</a>
          <a href="#flow" className="text-sm font-medium text-ink hover:text-brand">流れ</a>
          <a href="#access" className="text-sm font-medium text-ink hover:text-brand">基本情報</a>
        </nav>
        <a href="#contact" className="btn-base btn-primary !py-2 !px-4 !text-[13px] md:ml-0 ml-auto">
          <Phone size={16} />
          相談する
        </a>
      </div>
    </header>
  );
}
