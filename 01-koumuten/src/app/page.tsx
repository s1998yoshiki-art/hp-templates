import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CampaignBand from "@/components/CampaignBand";
import { RevealArticle, RevealDiv, RevealSection } from "@/components/Reveal";
import { SITE } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Header />

      {/* ===== HERO ===== */}
      <Hero />
      <CampaignBand />

      {/* ===== SERVICE ===== */}
      <RevealSection id="service" className="py-24 bg-paper">
        <div className="container-base">
          <div className="text-center mb-3">
            <span className="section-eyebrow">SERVICE</span>
          </div>
          <h2
            className="text-center font-black text-concrete-dark font-serif mb-4"
            style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}
          >
            3つの事業領域
          </h2>
          <p className="text-center text-ink/70 text-base mb-14">
            戸建・マンションの新築から、住宅・店舗のリフォーム工事まで。
            <br />
            那覇に拠点を構える総合建設業として、ワンストップでお応えします。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {SERVICES.map((s) => (
              <RevealArticle
                key={s.title}
                className="bg-white rounded-[20px] overflow-hidden shadow-card-sm hover:shadow-card-md hover:scale-[1.018] transition flex flex-col border border-cream will-change-transform"
              >
                <div className="aspect-[16/10] overflow-hidden bg-cream">
                  <Image
                    src={s.image}
                    alt={s.alt}
                    width={640}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-7 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-concrete-dark font-serif mb-3">
                    {s.title}
                  </h3>
                  <p className="text-[14.5px] text-ink/85 mb-4 flex-1">{s.body}</p>
                  <ul className="space-y-1.5">
                    {s.items.map((item) => (
                      <li
                        key={item}
                        className="text-[13px] text-concrete pl-4 relative before:content-['▪'] before:absolute before:left-0 before:text-terracotta"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealArticle>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ===== STRENGTH ===== */}
      <RevealSection id="strength" className="py-24 bg-cream">
        <div className="container-base">
          <div className="text-center mb-3">
            <span className="section-eyebrow">STRENGTH</span>
          </div>
          <h2
            className="text-center font-black text-concrete-dark font-serif mb-4"
            style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}
          >
            選ばれる3つの強み
          </h2>
          <p className="text-center text-ink/70 text-base mb-14">
            那覇本社・中南部17市町村対応の総合建設業として、
            <br />
            「安心して任せられる工務店」であり続けるための、3つの軸。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {STRENGTHS.map((c) => (
              <RevealDiv
                key={c.title}
                className="bg-paper rounded-2xl p-8 border border-concrete/15 shadow-card-sm hover:scale-[1.014] transition will-change-transform"
              >
                <div className="text-3xl mb-4">{c.icon}</div>
                <h3 className="text-lg font-bold text-concrete-dark font-serif mb-3 leading-snug">
                  {c.title}
                </h3>
                <p className="text-[14px] text-ink/85 leading-relaxed">{c.body}</p>
              </RevealDiv>
            ))}
          </div>

          <RevealDiv className="mt-14 max-w-3xl mx-auto bg-paper rounded-2xl p-8 md:p-10 border border-concrete/15">
            <p className="text-xs font-bold tracking-[0.2em] text-terracotta mb-3">
              ABOUT AREA / 対応エリア
            </p>
            <h3 className="text-xl md:text-2xl font-bold text-concrete-dark font-serif mb-4 leading-snug">
              那覇本社、沖縄本島中南部17市町村に幅広く対応。
            </h3>
            <p className="text-[14.5px] text-ink/85 leading-relaxed mb-3">
              那覇市・浦添市・宜野湾市・豊見城市・糸満市・南城市・南風原町・与那原町・八重瀬町・西原町・うるま市・沖縄市・北谷町・中城村・北中城村・嘉手納町・読谷村まで、戸建・マンション・店舗の新築〜リフォームをワンストップでお引き受けしています。
            </p>
            <p className="text-[13px] text-ink/65 leading-relaxed">
              ※エリア外でもご相談いただける場合がございます。まずはお電話・お問い合わせフォームからお気軽にお問い合わせください。
            </p>
          </RevealDiv>
        </div>
      </RevealSection>

      {/* ===== WORKS ===== */}
      <RevealSection id="works" className="py-24 bg-paper">
        <div className="container-base">
          <div className="text-center mb-3">
            <span className="section-eyebrow">WORKS</span>
          </div>
          <h2
            className="text-center font-black text-concrete-dark font-serif mb-4"
            style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}
          >
            施工事例
          </h2>
          <p className="text-center text-ink/70 text-base mb-14">
            戸建・マンション・店舗の新築から、水回り・外壁・防水まで。
            <br />
            那覇市・中南部エリアで手がけた施工の一例をご紹介します。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {WORKS.map((w) => (
              <RevealArticle
                key={w.title}
                className="bg-white rounded-2xl overflow-hidden shadow-card-sm border border-cream hover:-translate-y-1 hover:scale-[1.025] hover:shadow-card-md transition will-change-transform"
              >
                <div className="aspect-[16/10] overflow-hidden bg-cream">
                  <Image
                    src={w.image}
                    alt={w.alt}
                    width={720}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block text-[11px] font-bold text-terracotta bg-terracotta/10 px-3 py-1 rounded-full mb-3">
                    {w.tag}
                  </span>
                  <h4 className="text-[17px] font-bold text-concrete-dark font-serif mb-2 leading-snug">
                    {w.title}
                  </h4>
                  <p className="text-[13.5px] text-ink/75 leading-relaxed">{w.body}</p>
                </div>
              </RevealArticle>
            ))}
          </div>
          <p className="text-center text-xs text-ink/60 mt-8">
            ※掲載写真はデモサイト用のイメージです（AI生成）。実物の施工事例は別途お問い合わせください。
          </p>
        </div>
      </RevealSection>

      {/* ===== FLOW ===== */}
      <RevealSection id="flow" className="py-24 bg-cream">
        <div className="container-base">
          <div className="text-center mb-3">
            <span className="section-eyebrow">FLOW</span>
          </div>
          <h2
            className="text-center font-black text-concrete-dark font-serif mb-14"
            style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}
          >
            ご相談の流れ
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-5">
            {FLOWS.map((f) => (
              <RevealDiv
                key={f.num}
                className="bg-paper rounded-2xl p-6 text-center shadow-card-sm border border-concrete/10 hover:scale-[1.018] transition will-change-transform"
              >
                <span className="inline-block text-sm font-black text-terracotta font-serif tracking-[0.1em] mb-3">
                  {f.num}
                </span>
                <h4 className="text-[15px] font-bold text-concrete-dark mb-2.5 leading-snug">
                  {f.title}
                </h4>
                <p className="text-[12.5px] text-ink/75 leading-relaxed">{f.body}</p>
              </RevealDiv>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ===== CONTACT ===== */}
      <RevealSection
        id="contact"
        className="py-24 text-cream text-center"
        style={{
          background: "linear-gradient(135deg, #3A4147 0%, #5C6770 60%, #C8633D 100%)",
        }}
      >
        <div className="container-base">
          <p className="text-[12px] font-bold tracking-[0.25em] text-cream/80 mb-4">
            CONTACT
          </p>
          <h2
            className="font-black font-serif mb-5 leading-snug"
            style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
          >
            那覇・中南部の住まいのことは、<br className="md:hidden" />
            まずはご相談ください。
          </h2>
          <p className="text-[15px] opacity-90 mb-10 leading-relaxed">
            新築・リフォーム・店舗改装どんなご相談もお気軽に。<br />
            ご要望をうかがった上で、ご予算に応じた最適なプランをご提案します。
          </p>
          <form className="mx-auto mb-10 grid max-w-3xl gap-3 rounded-2xl border border-cream/20 bg-white/10 p-5 text-left backdrop-blur-sm md:grid-cols-2">
            <input
              aria-label="お名前"
              disabled
              placeholder="お名前"
              className="rounded-xl border border-cream/20 bg-white/95 px-4 py-3 text-sm text-ink placeholder:text-ink/45"
            />
            <input
              aria-label="電話番号"
              disabled
              placeholder="電話番号"
              className="rounded-xl border border-cream/20 bg-white/95 px-4 py-3 text-sm text-ink placeholder:text-ink/45"
            />
            <textarea
              aria-label="ご相談内容"
              disabled
              placeholder="ご相談内容（例：水回り、外壁塗装、店舗改装、新築相談など）"
              rows={4}
              className="rounded-xl border border-cream/20 bg-white/95 px-4 py-3 text-sm text-ink placeholder:text-ink/45 md:col-span-2"
            />
            <button
              type="button"
              disabled
              className="btn-base btn-primary md:col-span-2 cursor-not-allowed opacity-85"
            >
              送信機能は本番実装時に接続
            </button>
          </form>
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <a href={`tel:${SITE.telRaw}`} className="btn-base btn-primary btn-big">
              📞 {SITE.tel}
            </a>
            <a href={`tel:${SITE.telRaw}`} className="btn-base btn-outline-white btn-big">
              お問い合わせフォーム
            </a>
          </div>
          <p className="text-[12px] opacity-70">
            受付時間 8:00〜18:00 ／ 日曜定休<br />
            ※実際のサイトでは問い合わせフォームを実装します（このデモは電話発信のみ）
          </p>
        </div>
      </RevealSection>

      {/* ===== ABOUT ===== */}
      <RevealSection id="about" className="py-24 bg-paper">
        <div className="container-base">
          <div className="text-center mb-3">
            <span className="section-eyebrow">ABOUT</span>
          </div>
          <h2
            className="text-center font-black text-concrete-dark font-serif mb-14"
            style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}
          >
            会社案内
          </h2>
          <table className="mx-auto max-w-[760px] w-full border-collapse bg-white rounded-2xl overflow-hidden border border-cream">
            <tbody>
              {ABOUT_ROWS.map((row, idx) => (
                <tr key={row.label}>
                  <th
                    className={`text-left bg-cream/60 text-concrete-dark font-bold w-[150px] px-6 py-[18px] text-[14.5px] ${
                      idx < ABOUT_ROWS.length - 1 ? "border-b border-cream" : ""
                    }`}
                  >
                    {row.label}
                  </th>
                  <td
                    className={`text-left px-6 py-[18px] text-[14.5px] ${
                      idx < ABOUT_ROWS.length - 1 ? "border-b border-cream" : ""
                    }`}
                  >
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-center text-xs text-ink/55 mt-6">
            ※代表者名・創業年・資本金等の一部情報は公式HPに公開がないため、商談時にご確認のうえ正式版に反映します。
          </p>
        </div>
      </RevealSection>

      <nav
        aria-label="固定お問い合わせ導線"
        className="fixed inset-x-0 bottom-0 z-50 border-t border-white/20 bg-concrete-dark/95 px-3 py-2 text-cream shadow-2xl backdrop-blur-md"
      >
        <div className="mx-auto grid max-w-3xl grid-cols-3 gap-2 text-center text-[12px] font-bold">
          <a href={`tel:${SITE.telRaw}`} className="rounded-full bg-terracotta px-3 py-3">
            電話
          </a>
          <a href="#contact" className="rounded-full bg-white px-3 py-3 text-concrete-dark">
            フォーム
          </a>
          <a href="#contact" className="rounded-full bg-[#06C755] px-3 py-3 text-white">
            LINE相談
          </a>
        </div>
      </nav>

      <Footer />
    </>
  );
}

// ===== データ =====

type Service = {
  title: string;
  body: string;
  image: string;
  alt: string;
  items: string[];
};

const SERVICES: Service[] = [
  {
    title: "新築工事（戸建・マンション）",
    body: "戸建住宅・マンションの新築工事を承ります。台風・塩害・高温多湿の沖縄の気候に合わせた設計と施工で、長く安心して暮らせる住まいをお届けします。",
    image: "/images/service1.png",
    alt: "新築工事の住宅外観",
    items: ["戸建住宅の新築", "マンションの新築", "沖縄気候に合わせた設計"],
  },
  {
    title: "住宅リフォーム",
    body: "キッチン・浴室・トイレなどの水まわりから、内装・外壁塗装・防水工事まで、住まい全般のリフォームに対応。築年数の経った住まいの再生をお手伝いします。",
    image: "/images/service2.png",
    alt: "リフォームされたキッチン",
    items: ["水まわりリフォーム", "内装・クロス張り替え", "外壁塗装・防水工事"],
  },
  {
    title: "店舗・賃貸物件のリフォーム",
    body: "店舗の新装・改装、アパート・マンションの空室リニューアルや原状回復にも対応。事業者・賃貸オーナー様のご要望に合わせて、工期と費用感を最初の段階で透明にお伝えします。",
    image: "/images/service3.png",
    alt: "改装された店舗内装",
    items: ["店舗の新装・改装", "賃貸物件の原状回復", "事務所改装・内装工事"],
  },
];

type Strength = { icon: string; title: string; body: string };
const STRENGTHS: Strength[] = [
  {
    icon: "🛠️",
    title: "新築〜リフォーム ワンストップ",
    body: "戸建・マンションの新築工事から、水まわり・外壁塗装・防水まで一貫対応。窓口を一つにまとめられるので、住まいに関する相談先に迷いません。",
  },
  {
    icon: "📰",
    title: "第三者からの掲載・露出実績",
    body: "タイムス住宅新聞社のウェブマガジンや同紙に施工物件の掲載実績があり、那覇市役所庁内モニター広告にも露出。地域メディアに認知された工務店です。",
  },
  {
    icon: "📍",
    title: "中南部17市町村に対応",
    body: "那覇市本社から、浦添・宜野湾・豊見城・糸満・南城・うるま・沖縄・北谷・中城・北中城・嘉手納・読谷ほか、沖縄本島中南部17市町村に幅広く出張対応します。",
  },
];

const WORKS = [
  {
    title: "築20年戸建のフルリフォーム",
    body: "築20年経った那覇市内の戸建住宅を、内装・水回り・外壁まで一気にリニューアル。次の30年を見据えた仕上がりに整えました。",
    image: "/images/work1.png",
    alt: "リフォームされた戸建住宅外観",
    tag: "リフォーム・戸建",
  },
  {
    title: "マンションの全面リフォーム",
    body: "中南部エリアのマンション一室を、間取り変更を含めて全面リフォーム。明るい光が入るリビングと、回遊性のある間取りに刷新しました。",
    image: "/images/work4.png",
    alt: "リフォーム後のマンション内装",
    tag: "リフォーム・マンション",
  },
  {
    title: "ユニットバス交換＋断熱改修",
    body: "経年劣化したユニットバスを最新型へ交換。同時に壁の断熱を強化し、ヒートショック対策にもなる快適な浴室空間に仕上げました。",
    image: "/images/work2.png",
    alt: "新しいユニットバス",
    tag: "リフォーム・浴室",
  },
  {
    title: "外壁塗装で住まいを永く守る",
    body: "築15年経過したお住まいの外壁を、沖縄の塩害・紫外線に強い塗料で全面塗装。建物の寿命を延ばし、見た目もすっきりと一新しました。",
    image: "/images/work3.png",
    alt: "外壁塗装後の住宅",
    tag: "リフォーム・外壁",
  },
] as const;

const FLOWS = [
  { num: "01", title: "お問い合わせ", body: "お電話・お問い合わせフォームからお気軽にご相談ください。" },
  { num: "02", title: "ヒアリング・現地調査", body: "ご要望と現地の状況を確認し、最適なプランを検討します。" },
  { num: "03", title: "プラン・お見積り", body: "ご予算に応じた具体的な設計プランとお見積りをご提案。相見積もり歓迎。" },
  { num: "04", title: "ご契約・施工", body: "プラン確定後にご契約。職人が丁寧に施工いたします。" },
  { num: "05", title: "お引き渡し・アフター", body: "完成後の点検・メンテナンスまで一貫して対応します。" },
] as const;

const ABOUT_ROWS = [
  { label: "会社名", value: SITE.name },
  { label: "代表者", value: SITE.representative },
  { label: "所在地", value: SITE.address },
  { label: "電話 / FAX", value: `${SITE.tel} / ${SITE.fax}` },
  { label: "創業", value: SITE.founded },
  { label: "資本金", value: SITE.capital },
  { label: "従業員数", value: SITE.employees },
  { label: "事業内容", value: SITE.business },
  { label: "対応エリア", value: SITE.area },
  { label: "建設業許可", value: SITE.license },
  { label: "掲載・実績", value: SITE.partner },
];
