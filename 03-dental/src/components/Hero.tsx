import Image from "next/image";

/**
 * ヒーローセクション（背景画像 + 文字オーバーレイ）
 * 背景: public/hero-bg.png （gpt-image-2 で生成。清潔な歯科診療室＋自然光）
 */
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand-dark">
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
        className="absolute inset-0 bg-gradient-to-r from-brand-dark/85 via-brand-dark/55 to-brand-dark/10"
      />

      <div className="container-base relative py-24 md:py-32 lg:py-40">
        <div className="max-w-2xl">
          <p className="inline-block text-[12px] md:text-[13px] font-bold tracking-[0.18em] text-white bg-mint/40 ring-1 ring-white/30 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6 drop-shadow">
            那覇市・久米 ／ 開業40年 ／ 親子2代で診療
          </p>
          <h1
            className="font-black text-white font-serif leading-[1.3] mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
            style={{ fontSize: "clamp(32px, 4.8vw, 54px)", letterSpacing: "0.04em" }}
          >
            家族4世代の、
            <br />
            <span className="text-mint-light">かかりつけ歯科医院。</span>
          </h1>
          <p className="text-[16px] md:text-[17px] text-white/90 mb-9 leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]">
            赤ちゃんからおじいちゃん・おばあちゃんまで、
            <br className="hidden md:inline" />
            家族みんなで通える歯科医院を、
            <br />
            〇〇市〇〇地区の地で 40 年、
            <br className="hidden md:inline" />
            親子2代で守り続けています。
          </p>
          <div className="flex flex-wrap gap-3 mb-9">
            <a href="#contact" className="btn-base btn-primary btn-big">
              ご予約・お問い合わせ
            </a>
            <a href="#service" className="btn-base btn-outline-white">
              診療内容を見る
            </a>
          </div>
          <div className="flex flex-wrap gap-6 pt-6 border-t border-white/30 text-[13px] text-white/85">
            <div>開業40年</div>
            <div>親子2代で診療</div>
            <div>赤ちゃん〜高齢者まで</div>
          </div>
        </div>
      </div>
    </section>
  );
}
