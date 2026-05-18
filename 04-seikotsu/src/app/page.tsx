import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CampaignBand from "@/components/CampaignBand";
import { SITE } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Header />

      {/* ===== HERO ===== */}
      <Hero />
      <CampaignBand />

      {/* ===== CAMPAIGN（HP制作キャンペーン） ===== */}
      <section className="py-6 bg-accent text-white">
        <div className="container-base text-center">
          <p className="text-[13px] md:text-[15px] font-bold tracking-wider">
            🎁 デモLPご提案：通常30〜40万円のHP制作 → <span className="text-[18px] md:text-[20px]">3社限定 99,000円（税別）</span> ／ 気に入らなければ破棄OK
          </p>
        </div>
      </section>

      {/* ===== TRUST（信頼の見える化） ===== */}
      <section id="trust" className="py-20 bg-paper">
        <div className="container-base">
          <div className="text-center mb-3">
            <span className="section-eyebrow">TRUST</span>
          </div>
          <h2
            className="text-center font-black text-brand-dark font-serif mb-4"
            style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}
          >
            那覇市田原で、選ばれている理由。
          </h2>
          <p className="text-center text-ink/70 text-base mb-12">
            「丁寧に説明してくれる」「原因を一緒に考えてくれる」というお声を、<br className="hidden md:inline" />
            日々いただいています。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {TRUSTS.map((t) => (
              <div
                key={t.label}
                className="bg-white rounded-2xl p-8 border border-sand text-center shadow-card-sm"
              >
                <div className="trust-num text-5xl md:text-6xl mb-3">{t.num}</div>
                <p className="text-[13px] text-ink/70 font-bold tracking-wider uppercase mb-1">
                  {t.label}
                </p>
                <p className="text-[12px] text-ink/55">{t.note}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-ink/50 mt-6">
            ※具体的な評価点・件数は実装時に最新の口コミ集計に差し替えます。Googleマップ・各媒体の実数値ベース。
          </p>
        </div>
      </section>

      {/* ===== SYMPTOMS（症状別ランディング・差別化の核） ===== */}
      <section id="symptoms" className="py-24 bg-cream">
        <div className="container-base">
          <div className="text-center mb-3">
            <span className="section-eyebrow">SYMPTOMS</span>
          </div>
          <h2
            className="text-center font-black text-brand-dark font-serif mb-4"
            style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}
          >
            あなたのお悩みは、どれですか？
          </h2>
          <p className="text-center text-ink/70 text-base mb-14">
            症状に合わせた施術プランをご提案します。<br />
            まずは丁寧なヒアリングから始めます。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {SYMPTOMS.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl p-6 border border-sand flex gap-4 items-start shadow-card-sm hover:shadow-card-md transition"
              >
                <div className="text-3xl shrink-0 mt-0.5">{s.icon}</div>
                <div>
                  <h4 className="text-[15.5px] font-bold text-brand-dark mb-1.5 leading-snug">
                    {s.title}
                  </h4>
                  <p className="text-[13px] text-ink/75 leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICE ===== */}
      <section id="service" className="py-24 bg-paper">
        <div className="container-base">
          <div className="text-center mb-3">
            <span className="section-eyebrow">SERVICE</span>
          </div>
          <h2
            className="text-center font-black text-brand-dark font-serif mb-4"
            style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}
          >
            主な施術メニュー
          </h2>
          <p className="text-center text-ink/70 text-base mb-14">
            保険適用・自費メニュー・交通事故・産後骨盤まで、<br className="hidden md:inline" />
            お一人おひとりに合った施術をご提案します。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s) => (
              <article
                key={s.title}
                className="bg-white rounded-[20px] overflow-hidden shadow-card-sm hover:shadow-card-md transition flex flex-col border border-sand"
              >
                <div className="aspect-[16/10] overflow-hidden bg-sand">
                  <Image
                    src={s.image}
                    alt={s.alt}
                    width={640}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <span className="inline-block self-start text-[10px] font-bold text-accent bg-accent/10 px-2.5 py-1 rounded-full mb-3 tracking-wider">
                    {s.tag}
                  </span>
                  <h3 className="text-lg font-bold text-brand-dark font-serif mb-2 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-[13.5px] text-ink/85 mb-3 flex-1 leading-relaxed">{s.body}</p>
                  <p className="text-[12px] text-brand font-bold border-t border-sand pt-3">
                    {s.price}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="text-center text-xs text-ink/55 mt-8">
            ※自費メニューの料金は実装時に院公式の価格表へ差し替えます。詳細はお問い合わせください。
          </p>
        </div>
      </section>

      {/* ===== CLINIC（院内紹介） ===== */}
      <section id="clinic" className="py-24 bg-cream">
        <div className="container-base">
          <div className="text-center mb-3">
            <span className="section-eyebrow">CLINIC</span>
          </div>
          <h2
            className="text-center font-black text-brand-dark font-serif mb-4"
            style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}
          >
            清潔で、リラックスできる院内
          </h2>
          <p className="text-center text-ink/70 text-base mb-14">
            田原のエンゼルハイム1階。<br className="hidden md:inline" />
            ゆいレール小禄駅から徒歩5分の通いやすい立地です。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CLINIC.map((c) => (
              <article
                key={c.title}
                className="bg-white rounded-2xl overflow-hidden shadow-card-sm border border-sand"
              >
                <div className="aspect-[16/11] overflow-hidden bg-sand">
                  <Image
                    src={c.image}
                    alt={c.alt}
                    width={640}
                    height={440}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-[16px] font-bold text-brand-dark font-serif mb-2 leading-snug">
                    {c.title}
                  </h4>
                  <p className="text-[13px] text-ink/75 leading-relaxed">{c.body}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="text-center text-xs text-ink/55 mt-8">
            ※掲載写真はデモサイト用のイメージです（AI生成）。実際の院内は公式サイト・現地でご確認ください。
          </p>
        </div>
      </section>

      {/* ===== FLOW（施術の流れ） ===== */}
      <section id="flow" className="py-24 bg-paper">
        <div className="container-base">
          <div className="text-center mb-3">
            <span className="section-eyebrow">FLOW</span>
          </div>
          <h2
            className="text-center font-black text-brand-dark font-serif mb-14"
            style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}
          >
            初めての方も安心、施術の流れ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {FLOW.map((f, idx) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-6 border border-sand shadow-card-sm relative"
              >
                <div className="absolute -top-4 -left-2 w-10 h-10 rounded-full bg-accent text-white font-black flex items-center justify-center font-serif text-lg shadow-card-sm">
                  {idx + 1}
                </div>
                <h4 className="text-[15.5px] font-bold text-brand-dark mb-2 mt-2 leading-snug">
                  {f.title}
                </h4>
                <p className="text-[13px] text-ink/75 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ACCESS（営業時間・アクセス） ===== */}
      <section id="access" className="py-24 bg-cream">
        <div className="container-base">
          <div className="text-center mb-3">
            <span className="section-eyebrow">ACCESS</span>
          </div>
          <h2
            className="text-center font-black text-brand-dark font-serif mb-14"
            style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}
          >
            営業時間 ／ アクセス
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* 営業時間表 */}
            <div className="bg-white rounded-2xl p-7 border border-sand shadow-card-sm">
              <h3 className="text-lg font-bold text-brand-dark font-serif mb-5">
                営業時間
              </h3>
              <table className="w-full text-[14px]">
                <thead>
                  <tr className="border-b border-sand">
                    <th className="text-left py-2 text-ink/70 font-bold w-1/3">曜日</th>
                    <th className="text-left py-2 text-ink/70 font-bold">受付時間</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-sand">
                    <td className="py-3 font-bold text-brand-dark">月〜金</td>
                    <td className="py-3 text-ink/85">{SITE.hoursWeekday}</td>
                  </tr>
                  <tr className="border-b border-sand">
                    <td className="py-3 font-bold text-brand-dark">土・日・祝</td>
                    <td className="py-3 text-ink/85">{SITE.hoursWeekend}</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-bold text-brand-dark">休診日</td>
                    <td className="py-3 text-ink/85">{SITE.closedDays}</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-[12px] text-ink/60 mt-5 leading-relaxed">
                ※平日19:30まで受付、土日祝も17:00まで対応。<br />
                ※営業時間は公式サイトに準拠しています。
              </p>
            </div>

            {/* アクセス情報 */}
            <div className="bg-white rounded-2xl p-7 border border-sand shadow-card-sm">
              <h3 className="text-lg font-bold text-brand-dark font-serif mb-5">
                所在地・アクセス
              </h3>
              <dl className="space-y-3 text-[14px]">
                <div className="flex gap-3">
                  <dt className="font-bold text-brand-dark w-20 shrink-0">所在地</dt>
                  <dd className="text-ink/85">{SITE.address}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="font-bold text-brand-dark w-20 shrink-0">電話</dt>
                  <dd className="text-ink/85">{SITE.tel}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="font-bold text-brand-dark w-20 shrink-0">アクセス</dt>
                  <dd className="text-ink/85 text-[13px]">{SITE.access}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="font-bold text-brand-dark w-20 shrink-0">駐車場</dt>
                  <dd className="text-ink/85 text-[13px]">{SITE.parking}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="font-bold text-brand-dark w-20 shrink-0">保険</dt>
                  <dd className="text-ink/85">{SITE.insurance}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="py-24 bg-paper">
        <div className="container-base">
          <div className="text-center mb-3">
            <span className="section-eyebrow">FAQ</span>
          </div>
          <h2
            className="text-center font-black text-brand-dark font-serif mb-14"
            style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}
          >
            よくあるご質問
          </h2>
          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS.map((f) => (
              <details
                key={f.q}
                className="bg-white rounded-xl border border-sand p-5 group shadow-card-sm"
              >
                <summary className="cursor-pointer font-bold text-brand-dark text-[15px] flex justify-between items-center list-none">
                  <span className="pr-4">Q. {f.q}</span>
                  <span className="text-accent text-xl group-open:rotate-45 transition-transform shrink-0">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-[14px] text-ink/85 leading-relaxed">A. {f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section
        id="contact"
        className="py-24 text-paper text-center"
        style={{
          background: "linear-gradient(135deg, #142944 0%, #1E3A5F 60%, #3E5F88 100%)",
        }}
      >
        <div className="container-base">
          <p className="text-[12px] font-bold tracking-[0.25em] text-paper/80 mb-4">
            CONTACT
          </p>
          <h2
            className="font-black font-serif mb-5 leading-snug"
            style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
          >
            ご予約・お問い合わせは、<br className="md:hidden" />
            こちらから。
          </h2>
          <p className="text-[15px] opacity-90 mb-10 leading-relaxed">
            お電話・予約フォームの2つからお選びいただけます。<br />
            初めての方も、症状に合わせて丁寧にご案内します。
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <a href={`tel:${SITE.telRaw}`} className="btn-base btn-accent btn-big">
              📞 {SITE.tel}
            </a>
            <a href="#contact" className="btn-base btn-outline-white btn-big">
              📝 予約フォーム
            </a>
          </div>
          <p className="text-[12px] opacity-80 leading-relaxed">
            受付：平日 9:00〜19:30 ／ 土日祝 10:00〜17:00<br />
            ※実装時は予約フォーム・LINE公式アカウントへの連携を行います（このデモは電話発信のみ動作）
          </p>
        </div>
      </section>

      {/* ===== INFO（院案内テーブル） ===== */}
      <section id="info" className="py-24 bg-cream">
        <div className="container-base">
          <div className="text-center mb-3">
            <span className="section-eyebrow">INFO</span>
          </div>
          <h2
            className="text-center font-black text-brand-dark font-serif mb-14"
            style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}
          >
            院案内
          </h2>
          <table className="mx-auto max-w-[760px] w-full border-collapse bg-white rounded-2xl overflow-hidden border border-sand shadow-card-sm">
            <tbody>
              {INFO_ROWS.map((row, idx) => (
                <tr key={row.label}>
                  <th
                    className={`text-left bg-sand text-brand-dark font-bold w-[150px] px-6 py-[18px] text-[14.5px] ${
                      idx < INFO_ROWS.length - 1 ? "border-b border-sand" : ""
                    }`}
                  >
                    {row.label}
                  </th>
                  <td
                    className={`text-left px-6 py-[18px] text-[14.5px] ${
                      idx < INFO_ROWS.length - 1 ? "border-b border-sand" : ""
                    }`}
                  >
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Footer />
    </>
  );
}

// ===== データ =====

const TRUSTS = [
  { num: "5+", label: "対応症状領域", note: "肩・腰・首・骨盤・スポーツ外傷など" },
  { num: "19:30", label: "平日夜まで対応", note: "お仕事帰りでも通えます" },
  { num: "5min", label: "小禄駅から徒歩", note: "ゆいレール「小禄駅」徒歩5分" },
] as const;

type Service = {
  title: string;
  body: string;
  image: string;
  alt: string;
  tag: string;
  price: string;
};

const SERVICES: Service[] = [
  {
    tag: "保険適用",
    title: "保険施術・急性症状ケア",
    body: "捻挫・打撲・挫傷（肉離れ）など、急性のケガに対応。各種健康保険適用、自己負担額で施術を受けられます。",
    image: "/images/service1-hoken.png",
    alt: "手技施術の風景",
    price: "保険適用：自己負担分のみ（症状によります）",
  },
  {
    tag: "自費・矯正",
    title: "骨盤矯正・姿勢矯正",
    body: "姿勢の歪み・骨盤のズレが原因の腰痛・肩こりにアプローチ。原因を見極めたうえで、お一人おひとりに合わせた矯正を行います。",
    image: "/images/service2-kyousei.png",
    alt: "骨盤矯正の施術風景",
    price: "料金は院公式をご確認ください ／ 実装時差し替え",
  },
  {
    tag: "交通事故対応",
    title: "交通事故・むちうち施術",
    body: "自賠責保険適用で、窓口負担0円で施術を受けられます。むちうち・首の痛み・腰痛など、事故後の不調に丁寧に対応します。",
    image: "/images/service3-jiko.png",
    alt: "首・肩の施術風景",
    price: "自賠責保険対応：窓口負担0円",
  },
  {
    tag: "産後ママ向け",
    title: "産後骨盤矯正",
    body: "出産後の骨盤の開き・腰痛・体型のお悩みに。ご相談いただける環境を整え、丁寧にお話を伺います。",
    image: "/images/service4-sango.png",
    alt: "産後骨盤矯正のイメージ",
    price: "料金は院公式をご確認ください ／ 実装時差し替え",
  },
];

const SYMPTOMS = [
  { icon: "💼", title: "デスクワークの肩こり・首こり", body: "長時間のパソコン作業で、肩や首が固まったように痛む方へ。" },
  { icon: "🚗", title: "交通事故後のむちうち・腰痛", body: "事故後の違和感、放置せず早めにご相談ください。自賠責対応。" },
  { icon: "👶", title: "産後の骨盤の歪み・腰痛", body: "出産後の不調、お子様連れの方もご相談ください。" },
  { icon: "🦵", title: "膝・股関節の痛み", body: "立ち仕事・スポーツでの膝痛、加齢による関節の不調にも。" },
  { icon: "🌙", title: "睡眠の浅さ・身体のだるさ", body: "全身の緊張をゆるめ、自律神経のバランスを整える施術を。" },
  { icon: "🏃", title: "スポーツ後のケガ・捻挫", body: "急性の捻挫・打撲は健康保険適用で対応します。" },
];

const CLINIC = [
  {
    title: "清潔感のある受付・待合スペース",
    body: "明るく落ち着いた雰囲気で、初めての方もリラックスしてお過ごしいただけます。",
    image: "/images/clinic1-reception.png",
    alt: "受付・待合スペース",
  },
  {
    title: "プライベートに配慮した施術スペース",
    body: "他の患者様の目を気にせず、安心して施術を受けられる空間です。",
    image: "/images/clinic2-room.png",
    alt: "施術室",
  },
  {
    title: "小禄駅徒歩5分・通いやすい立地",
    body: "ゆいレール沿線でアクセス良好。お仕事帰り・お買い物のついでに通いやすい立地です。",
    image: "/images/clinic3-location.png",
    alt: "院の外観・立地イメージ",
  },
] as const;

const FLOW = [
  {
    title: "ご予約・ご来院",
    body: "お電話または予約フォームでご予約ください。当日でも空きがあればご対応可能です。",
  },
  {
    title: "問診・カウンセリング",
    body: "お痛みの原因・生活習慣を丁寧にヒアリング。問診票にご記入いただきます。",
  },
  {
    title: "検査・施術プランのご提案",
    body: "姿勢・可動域をチェックし、原因を特定。納得いただいたうえで施術に入ります。",
  },
  {
    title: "施術・セルフケア指導",
    body: "症状に合わせた施術と、再発防止のためのセルフケアをアドバイス。次回のご案内まで。",
  },
];

const FAQS = [
  {
    q: "予約は必要ですか？",
    a: "完全予約制ではありませんが、お電話・予約フォームでのご予約をおすすめします。お待ち時間を短縮できます。",
  },
  {
    q: "保険は使えますか？",
    a: "捻挫・打撲・挫傷（肉離れ）の急性症状には、各種健康保険が適用されます。保険証をご持参ください。慢性的な肩こり・腰痛は自費施術となります。",
  },
  {
    q: "初回はどれくらいの時間がかかりますか？",
    a: "初回は問診・カウンセリング・施術を含めて約60分程度のお時間をいただきます。2回目以降はメニューにより異なります。",
  },
  {
    q: "服装はどうすればいいですか？",
    a: "動きやすい服装でお越しください。お仕事帰りの方も多くいらっしゃいます。",
  },
  {
    q: "交通事故に遭ってしまいました。どうすればいいですか？",
    a: "まずはお電話ください。自賠責保険のお手続きから、保険会社・整形外科との連携まで丁寧にサポートします。窓口負担0円で施術を受けられます。",
  },
  {
    q: "駐車場はありますか？",
    a: "近隣にコインパーキングがございます。詳細は公式サイトをご確認ください。ゆいレール小禄駅から徒歩5分なので、電車でのご来院もおすすめです。",
  },
];

const INFO_ROWS = [
  { label: "院名", value: SITE.name },
  { label: "所在地", value: SITE.address },
  { label: "電話", value: SITE.tel },
  { label: "営業時間（平日）", value: SITE.hoursWeekday },
  { label: "営業時間（土日祝）", value: SITE.hoursWeekend },
  { label: "アクセス", value: SITE.access },
  { label: "施術メニュー", value: SITE.business },
  { label: "対応保険", value: SITE.insurance },
  { label: "駐車場", value: SITE.parking },
  { label: "運営", value: SITE.group },
];
