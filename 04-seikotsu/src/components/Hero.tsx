import Image from "next/image";
import { SITE } from "@/lib/site";

/**
 * ヒーローセクション（背景画像 + 文字オーバーレイ）
 * 背景: public/hero-bg.png （gpt-image-2 で生成。明るく清潔な施術室）
 */
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand-dark">
      <Image
        src="/images/hero-bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-brand-dark/85 via-brand-dark/60 to-brand-dark/15"
      />

      <div className="container-base relative py-24 md:py-32 lg:py-40">
        <div className="max-w-2xl">
          <p className="inline-block text-[12px] md:text-[13px] font-bold tracking-[0.18em] text-paper bg-accent/80 ring-1 ring-paper/30 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6 drop-shadow">
            〇〇市〇〇地区・〇〇駅徒歩〇分／平日19:30まで・土日祝も対応
          </p>
          <h1
            className="font-black text-paper font-serif leading-[1.3] mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
            style={{ fontSize: "clamp(32px, 4.8vw, 54px)", letterSpacing: "0.04em" }}
          >
            その痛み、
            <br />
            <span className="text-accent-light">原因から</span>整える。
          </h1>
          <p className="text-[16px] md:text-[17px] text-paper/90 mb-9 leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]">
            肩こり・腰痛・首の痛み・交通事故後の不調まで。<br className="hidden md:inline" />
            原因を見極めた施術と、丁寧なセルフケアアドバイスで、<br className="hidden md:inline" />
            那覇のあなたの「動ける毎日」を取り戻します。
          </p>
          <div className="flex flex-wrap gap-3 mb-9">
            <a href={`tel:${SITE.telRaw}`} className="btn-base btn-accent btn-big">
              📞 お電話でご予約
            </a>
            <a href="#contact" className="btn-base btn-primary btn-big">
              📝 ご予約フォーム
            </a>
            <a href="#access" className="btn-base btn-outline-white">
              アクセスを見る
            </a>
          </div>
          <div className="flex flex-wrap gap-6 pt-6 border-t border-paper/30 text-[13px] text-paper/85">
            <div>📍 ゆいレール 小禄駅 徒歩5分</div>
            <div>🕐 平日 9:00〜19:30</div>
            <div>📅 土日祝も対応</div>
          </div>
        </div>
      </div>
    </section>
  );
}
