import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-md border-b border-cream">
      <div className="container-base flex items-center gap-6 h-[72px]">
        <Link href="#top" className="flex flex-col leading-tight">
          <span className="text-[20px] font-black tracking-[0.04em] text-concrete-dark font-serif">
            サンプル工務店
          </span>
          <span className="text-[10px] tracking-[0.2em] text-concrete">
            KANEYOSHI KOUMUTEN
          </span>
        </Link>
        <nav className="hidden md:flex gap-6 ml-auto">
          <a href="#service" className="text-sm font-medium text-ink hover:text-terracotta">業務内容</a>
          <a href="#strength" className="text-sm font-medium text-ink hover:text-terracotta">3つの強み</a>
          <a href="#works" className="text-sm font-medium text-ink hover:text-terracotta">施工事例</a>
          <a href="#flow" className="text-sm font-medium text-ink hover:text-terracotta">ご相談の流れ</a>
          <a href="#about" className="text-sm font-medium text-ink hover:text-terracotta">会社案内</a>
        </nav>
        <div className="flex items-center gap-3 md:ml-0 ml-auto">
          <a
            href={`tel:${SITE.telRaw}`}
            className="hidden md:inline text-sm font-bold text-concrete-dark"
          >
            📞 {SITE.tel}
          </a>
          <a href="#contact" className="btn-base btn-primary !py-2 !px-4 !text-[13px]">
            お問い合わせ
          </a>
        </div>
      </div>
    </header>
  );
}
