import Image from "next/image";
import {
  Building2,
  CheckCircle2,
  Clock,
  FileText,
  HeartHandshake,
  MapPin,
  MessageCircleHeart,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CampaignBand from "@/components/CampaignBand";
import { PAGE, SITE } from "@/lib/site";

const icons = {
  heart: HeartHandshake,
  shield: ShieldCheck,
  clock: Clock,
  file: FileText,
  star: Star,
  building: Building2,
  map: MapPin,
  sparkles: Sparkles,
};

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <CampaignBand />

      <section id="about" className="py-24 bg-paper reveal-up">
        <div className="container-base">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-center">
            <div>
              <span className="section-eyebrow">CONCEPT</span>
              <h2
                className="font-black text-brand-dark font-serif mt-5 mb-5 leading-snug"
                style={{ fontSize: "clamp(28px, 3.4vw, 42px)" }}
              >
                {PAGE.concept.title}
              </h2>
              <p className="text-ink/78 leading-relaxed whitespace-pre-line">
                {PAGE.concept.body}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {PAGE.strengths.map((point) => {
                const Icon = icons[point.icon];
                return (
                  <article
                    key={point.title}
                    className="bg-white rounded-[20px] p-6 border border-line shadow-card-sm hover:shadow-card-md hover:-translate-y-1 transition"
                  >
                    <div className="w-12 h-12 rounded-full bg-brand/10 text-brand flex items-center justify-center mb-5">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-brand-dark font-serif mb-3 leading-snug">
                      {point.title}
                    </h3>
                    <p className="text-[14px] text-ink/78 leading-relaxed">{point.body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-white reveal-up">
        <div className="container-base">
          <div className="text-center mb-3">
            <span className="section-eyebrow">SERVICE</span>
          </div>
          <h2
            className="text-center font-black text-brand-dark font-serif mb-4"
            style={{ fontSize: "clamp(28px, 3.4vw, 42px)" }}
          >
            {PAGE.servicesTitle}
          </h2>
          <p className="text-center text-ink/72 text-base mb-14">{PAGE.servicesLead}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {PAGE.services.map((service) => (
              <article
                key={service.title}
                className="bg-paper rounded-[20px] overflow-hidden border border-line shadow-card-sm hover:shadow-card-md hover:scale-[1.012] transition"
              >
                <div className="aspect-[16/11] overflow-hidden bg-line">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    width={760}
                    height={520}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold text-brand-dark font-serif mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[14.5px] text-ink/80 mb-4 leading-relaxed">
                    {service.body}
                  </p>
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex gap-2 text-[13px] text-ink/76">
                        <CheckCircle2 size={16} className="mt-1 text-accent shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="feature" className="py-24 bg-paper reveal-up">
        <div className="container-base">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div className="rounded-[24px] overflow-hidden border border-line shadow-card-md bg-white">
              <Image
                src={PAGE.feature.image}
                alt={PAGE.feature.alt}
                width={920}
                height={690}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="section-eyebrow">POINT</span>
              <h2
                className="font-black text-brand-dark font-serif mt-5 mb-5 leading-snug"
                style={{ fontSize: "clamp(28px, 3.4vw, 42px)" }}
              >
                {PAGE.feature.title}
              </h2>
              <p className="text-ink/78 leading-relaxed mb-7 whitespace-pre-line">
                {PAGE.feature.body}
              </p>
              <div className="grid gap-4">
                {PAGE.feature.points.map((point) => (
                  <div key={point} className="flex gap-3 rounded-2xl bg-white border border-line p-4">
                    <CheckCircle2 size={19} className="text-brand mt-1 shrink-0" />
                    <p className="text-sm text-ink/80 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="flow" className="py-24 bg-white reveal-up">
        <div className="container-base">
          <div className="text-center mb-3">
            <span className="section-eyebrow">FLOW</span>
          </div>
          <h2
            className="text-center font-black text-brand-dark font-serif mb-14"
            style={{ fontSize: "clamp(28px, 3.4vw, 42px)" }}
          >
            {PAGE.flowTitle}
          </h2>
          <div className="grid md:grid-cols-5 gap-5">
            {PAGE.flow.map((item) => (
              <article key={item.num} className="bg-paper rounded-[20px] p-6 border border-line shadow-card-sm">
                <p className="text-3xl font-black text-brand/35 mb-4">{item.num}</p>
                <h3 className="text-lg font-bold text-brand-dark font-serif mb-3">{item.title}</h3>
                <p className="text-[13.5px] text-ink/76 leading-relaxed">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-24 bg-paper reveal-up">
        <div className="container-base">
          <div className="text-center mb-3">
            <span className="section-eyebrow">GALLERY</span>
          </div>
          <h2
            className="text-center font-black text-brand-dark font-serif mb-4"
            style={{ fontSize: "clamp(28px, 3.4vw, 42px)" }}
          >
            {PAGE.galleryTitle}
          </h2>
          <p className="text-center text-ink/72 text-base mb-14">{PAGE.galleryLead}</p>
          <div className="grid md:grid-cols-3 gap-6">
            {PAGE.gallery.map((item) => (
              <article
                key={item.title}
                className="group rounded-[20px] overflow-hidden bg-white border border-line shadow-card-sm"
              >
                <div className="aspect-[16/11] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={720}
                    height={495}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <p className="p-5 text-[14px] font-bold text-brand-dark leading-snug">
                  {item.title}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-24 text-white reveal-up"
        style={{ background: SITE.ctaGradient }}
      >
        <div className="container-base">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
            <div>
              <p className="text-[12px] font-bold tracking-[0.25em] text-white/75 mb-4">
                CONTACT
              </p>
              <h2
                className="font-black font-serif mb-5 leading-snug"
                style={{ fontSize: "clamp(28px, 3.4vw, 42px)" }}
              >
                {PAGE.contact.title}
              </h2>
              <p className="text-white/86 leading-relaxed mb-7 whitespace-pre-line">
                {PAGE.contact.body}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="rounded-2xl bg-white/12 p-4 ring-1 ring-white/18">
                  <Phone size={20} className="mb-2" />
                  <p className="font-bold">電話</p>
                  <p className="text-white/78">{SITE.tel}</p>
                </div>
                <div className="rounded-2xl bg-white/12 p-4 ring-1 ring-white/18">
                  <MapPin size={20} className="mb-2" />
                  <p className="font-bold">対応エリア</p>
                  <p className="text-white/78">{SITE.area}</p>
                </div>
              </div>
            </div>
            <form className="bg-white text-ink rounded-[24px] p-6 md:p-8 shadow-card-md">
              <div className="grid md:grid-cols-2 gap-4">
                {PAGE.contact.fields.map((field) => (
                  <label key={field.label} className="text-sm font-bold">
                    {field.label}
                    <input
                      disabled
                      placeholder={field.placeholder}
                      className="mt-2 w-full rounded-2xl border border-line bg-paper px-4 py-3 text-sm"
                    />
                  </label>
                ))}
              </div>
              <label className="text-sm font-bold block mt-4">
                相談内容
                <textarea
                  disabled
                  rows={5}
                  placeholder={PAGE.contact.textarea}
                  className="mt-2 w-full rounded-2xl border border-line bg-paper px-4 py-3 text-sm"
                />
              </label>
              <button type="button" disabled className="btn-base btn-primary w-full mt-5">
                デモフォームのため送信できません
              </button>
            </form>
          </div>
        </div>
      </section>

      <section id="access" className="py-20 bg-white reveal-up">
        <div className="container-base">
          <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-8">
            <div>
              <span className="section-eyebrow">INFO</span>
              <h2 className="font-serif font-black text-3xl text-brand-dark mt-5 mb-4">
                基本情報
              </h2>
              <p className="text-ink/75 leading-relaxed">{SITE.infoNote}</p>
            </div>
            <div className="rounded-[24px] bg-paper border border-line p-6 md:p-8">
              <dl className="grid gap-4 text-sm">
                {[
                  ["名称", SITE.name],
                  ["住所", SITE.address],
                  ["対応内容", SITE.business],
                  ["備考", "このページは営業提案用のデモです。画像・細かな表現は正式確認後に差し替えます。"],
                ].map(([label, value]) => (
                  <div key={label} className="grid md:grid-cols-[130px_1fr] gap-2 border-b border-line last:border-b-0 pb-4 last:pb-0">
                    <dt className="font-bold text-brand-dark">{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed-cta">
        <a href="#contact" className="fixed-cta__item">
          <Phone size={18} />
          相談
        </a>
        <a href="#services" className="fixed-cta__item fixed-cta__item--primary">
          <FileText size={18} />
          内容
        </a>
        <a href="#flow" className="fixed-cta__item">
          <MessageCircleHeart size={18} />
          流れ
        </a>
      </div>

      <Footer />
    </>
  );
}
