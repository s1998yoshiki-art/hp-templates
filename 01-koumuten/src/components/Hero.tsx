import Image from "next/image";
import { SITE } from "@/lib/site";

/**
 * ヒーローセクション（背景画像 + 文字オーバーレイ）
 * 背景: public/hero-bg.png （gpt-image-2 で生成。中南部・那覇のモダンな住宅外観）
 */
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-concrete-dark">
      <Image
        src="/hero-bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-concrete-dark/85 via-concrete-dark/55 to-concrete-dark/10"
      />

      <div className="container-base relative py-24 md:py-32 lg:py-40">
        <div className="max-w-2xl">
          <p className="inline-block text-[12px] md:text-[13px] font-bold tracking-[0.18em] text-cream bg-terracotta/40 ring-1 ring-cream/30 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6 drop-shadow">
            那覇本社 ／ 沖縄本島中南部 17市町村 対応
          </p>
          <h1
            className="font-black text-cream font-serif leading-[1.3] mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
            style={{ fontSize: "clamp(32px, 4.8vw, 54px)", letterSpacing: "0.04em" }}
          >
            沖縄中南部の住まいに、
            <br />
            <span className="text-terracotta-light">確かな仕上がりを。</span>
          </h1>
          <p className="text-[16px] md:text-[17px] text-cream/90 mb-9 leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]">
            新築工事から、住宅・マンション・店舗のリフォームまで。
            <br className="hidden md:inline" />
            那覇に拠点を構える総合建設業として、
            <br />
            「次の30年も住み続けられる仕上がり」を、
            <br className="hidden md:inline" />
            ひとつひとつ丁寧にお届けします。
          </p>
          <div className="flex flex-wrap gap-3 mb-9">
            <a href="#contact" className="btn-base btn-primary btn-big">
              無料相談・お問い合わせ
            </a>
            <a href="#works" className="btn-base btn-outline-white">
              施工事例を見る
            </a>
          </div>
          <div className="grid gap-3 border-t border-cream/30 pt-6 text-[13px] text-cream/90 sm:grid-cols-3">
            <div className="rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm">
              建設業許可<br />
              <span className="font-bold text-cream">{SITE.license}</span>
            </div>
            <div className="rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm">
              媒体掲載<br />
              <span className="font-bold text-cream">タイムス住宅新聞社</span>
            </div>
            <div className="rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm">
              地域認知<br />
              <span className="font-bold text-cream">那覇市役所モニター広告</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
