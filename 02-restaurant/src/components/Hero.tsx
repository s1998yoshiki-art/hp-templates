import Image from "next/image";
import { MessageCircleHeart, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand-dark">
      <Image
        src="/images/hero-bg.png"
        alt={SITE.heroAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-86"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: SITE.heroOverlay }}
      />

      <div className="container-base relative py-24 md:py-32 lg:py-40">
        <div className="max-w-2xl">
          <p className="inline-block text-[12px] md:text-[13px] font-bold tracking-[0.16em] text-white bg-white/14 ring-1 ring-white/28 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6 drop-shadow">
            {SITE.heroEyebrow}
          </p>
          <h1
            className="font-black text-white font-serif leading-[1.28] mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.48)]"
            style={{ fontSize: "clamp(34px, 5vw, 60px)" }}
          >
            {SITE.heroTitle.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </h1>
          <p className="text-[16px] md:text-[17px] text-white/90 mb-9 leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.38)] whitespace-pre-line">
            {SITE.heroLead}
          </p>
          <div className="flex flex-wrap gap-3 mb-9">
            <a href="#contact" className="btn-base btn-primary btn-big">
              <Phone size={18} />
              {SITE.primaryCta}
            </a>
            <a href="#services" className="btn-base btn-outline-white">
              <MessageCircleHeart size={18} />
              {SITE.secondaryCta}
            </a>
          </div>
          <div className="flex flex-wrap gap-4 pt-6 border-t border-white/30 text-[13px] text-white/85">
            {SITE.badges.map((badge) => (
              <span key={badge}>{badge}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
