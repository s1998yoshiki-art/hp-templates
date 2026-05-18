import Image from "next/image";
import {
  CalendarDays,
  Car,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileText,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";

const services = [
  "予防治療",
  "虫歯治療",
  "歯周病治療",
  "小児歯科",
  "小児矯正・矯正歯科",
  "審美治療",
  "インプラント治療",
  "入れ歯治療",
  "知覚過敏のご相談",
];

const faqs = [
  ["予約なしでも診てもらえますか？", "ご予約優先ですが、お電話いただければ可能な限り対応いたします。"],
  ["子どもだけでも通えますか？", "初回は保護者の方とご一緒のご来院をおすすめします。お子さま向けの診療にも対応しています。"],
  ["駐車場はありますか？", "医院前に4台分の駐車スペースをご用意しています。"],
  ["土曜日も診療していますか？", "土曜は9:00〜14:00で診療しています。初診受付時間は事前にお電話でご確認ください。"],
  ["クレジットカードは使えますか？", "自費診療の場合のお支払い方法は、お気軽にお問い合わせください。"],
];

const schedule = [
  ["月火水金", "9:30〜13:00", "14:30〜18:30"],
  ["土", "9:00〜14:00", "初診受付は要確認"],
  ["木・日・祝", "休診", "休診"],
];

export default function HomePage() {
  return (
    <main className="bg-white text-ink">
      <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/90 backdrop-blur-md">
        <div className="container-base flex min-h-[72px] items-center gap-5">
          <a href="#top" className="mr-auto">
            <span className="block font-serif text-[19px] font-black tracking-[0.02em] text-brand-dark">
              サンプル歯科医院
            </span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-brand">
              Nakazato Dental Clinic
            </span>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#about" className="text-sm font-bold text-ink/75 hover:text-brand">医院紹介</a>
            <a href="#service" className="text-sm font-bold text-ink/75 hover:text-brand">診療科目</a>
            <a href="#doctor" className="text-sm font-bold text-ink/75 hover:text-brand">院長挨拶</a>
            <a href="#access" className="text-sm font-bold text-ink/75 hover:text-brand">アクセス</a>
          </nav>
          <a href="tel:0988628241" className="btn-base btn-primary !px-4 !py-2 !text-[13px]">
            <Phone size={16} />
            予約
          </a>
        </div>
      </header>

      <section id="top" className="relative min-h-[calc(100svh-72px)] overflow-hidden bg-brand-dark">
        <Image
          src="/images/sample_hero_01.png"
          alt="自然光が入る清潔な歯科診療室"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/60 to-brand-dark/10" />
        <div className="container-base relative grid min-h-[calc(100svh-72px)] items-center py-16">
          <div className="max-w-3xl text-white">
            <p className="mb-5 inline-flex rounded-full bg-white/15 px-4 py-2 text-[12px] font-bold tracking-[0.18em] ring-1 ring-white/20 backdrop-blur">
              旭橋駅徒歩7分 / 土曜診療 / 駐車場4台
            </p>
            <h1 className="max-w-full font-serif text-[clamp(28px,7.6vw,66px)] font-black leading-[1.2] [overflow-wrap:anywhere]">
              <span className="block">40年、那覇・久米で。</span>
              <span className="block">「わかる」から、</span>
              <span className="block">安心して通える</span>
              <span className="block">歯科医院へ。</span>
            </h1>
            <p className="mt-7 max-w-full text-[15px] leading-8 text-white/90 md:max-w-2xl md:text-[18px]">
              お子さまからご年配の方まで、4世代の歯を守ります。
              <br />
              治療内容を丁寧に説明し、不安や疑問に向き合います。
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="tel:0988628241" className="btn-base btn-primary btn-big">
                <Phone size={19} />
                電話で予約する（098-000-0000）
              </a>
              <a href="#contact" className="btn-base btn-outline-white">
                お問合せフォームへ
                <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-paper py-20 md:py-24">
        <div className="container-base grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <span className="section-eyebrow">ABOUT</span>
            <h2 className="mt-5 font-serif text-[clamp(28px,4vw,44px)] font-black leading-tight text-brand-dark">
              地域に根ざして約40年。
            </h2>
            <p className="mt-6 text-[15px] leading-8 text-ink/75">
              久米のまちで開業して以来、私たちサンプル歯科医院は「患者さんと一緒に考える歯科医療」を大切にしてきました。歯科にかかる怖さや、説明が難しくてわからない不安に向き合い、一人ひとりへ丁寧にお応えします。
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {[
                ["約40年", "地域で診療"],
                ["4世代", "家族で通院"],
                ["土曜", "診療対応"],
              ].map(([value, label]) => (
                <div key={value} className="rounded-2xl border border-blue-100 bg-white p-5 shadow-card-sm">
                  <strong className="block text-2xl text-brand-dark">{value}</strong>
                  <span className="text-sm font-bold text-ink/60">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Image
              src="/images/sample_staff_01.png"
              alt="受付スタッフと歯科衛生士の紹介イメージ"
              width={720}
              height={720}
              className="aspect-square rounded-[24px] object-cover shadow-card-md"
            />
            <Image
              src="/images/sample_pediatric_01.png"
              alt="小児歯科で子どもへやさしく説明する歯科医師"
              width={720}
              height={720}
              className="aspect-square rounded-[24px] object-cover shadow-card-md sm:mt-14"
            />
          </div>
        </div>
      </section>

      <section id="service" className="bg-white py-20 md:py-24">
        <div className="container-base">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-eyebrow">SERVICE</span>
            <h2 className="mt-5 font-serif text-[clamp(28px,4vw,44px)] font-black leading-tight text-brand-dark">
              すべての世代の、すべてのお口の悩みに。
            </h2>
            <p className="mt-5 text-ink/70">
              予防から小児、矯正、審美、インプラント、入れ歯まで。ご家族の年齢や生活に合わせて相談できます。
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service} className="flex min-h-[104px] items-center gap-4 rounded-2xl border border-blue-100 bg-paper p-5 shadow-card-sm">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
                  <Stethoscope size={21} />
                </span>
                <h3 className="font-bold text-brand-dark">{service}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="doctor" className="bg-beige/45 py-20 md:py-24">
        <div className="container-base grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <Image
            src="/images/sample_doctor_01.png"
            alt="サンプル歯科医院の院長挨拶イメージ"
            width={720}
            height={900}
            className="mx-auto aspect-[4/5] w-full max-w-[480px] rounded-[28px] object-cover shadow-card-md"
          />
          <div>
            <span className="section-eyebrow">MESSAGE</span>
            <h2 className="mt-5 font-serif text-[clamp(28px,4vw,44px)] font-black leading-tight text-brand-dark">
              「説明できる治療」を、当たり前に。
            </h2>
            <p className="mt-6 text-[15px] leading-8 text-ink/75">
              私たちは、患者さんに治療内容を「わかっていただく」ことを最も大切にしています。何のための治療なのか、どんな選択肢があるのか、どれくらいの費用と期間がかかるのか。ご納得いただいた上で、最善の治療を一緒に選んでいきたいと考えています。
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-2xl bg-white p-5 shadow-card-sm">
                <FileText className="text-brand" size={22} />
                <span className="font-bold text-brand-dark">選択肢と費用を説明</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-white p-5 shadow-card-sm">
                <ShieldCheck className="text-brand" size={22} />
                <span className="font-bold text-brand-dark">症例を日々話し合う体制</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="facility" className="bg-white py-20 md:py-24">
        <div className="container-base">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-eyebrow">FACILITY</span>
            <h2 className="mt-5 font-serif text-[clamp(28px,4vw,44px)] font-black leading-tight text-brand-dark">
              清潔と安全への、当たり前のこだわり。
            </h2>
            <p className="mt-5 text-ink/70">
              滅菌処理、使い捨て器材、空気洗浄・ウイルス除菌機の設置など、安心して治療を受けていただける環境を整えています。
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Image
              src="/images/sample_equipment_01.png"
              alt="滅菌器や診療チェアなど歯科設備のディテール"
              width={900}
              height={900}
              className="aspect-[4/3] rounded-[24px] object-cover shadow-card-md"
            />
            <Image
              src="/images/sample_interior_01.png"
              alt="明るい待合室と受付の内観"
              width={900}
              height={900}
              className="aspect-[4/3] rounded-[24px] object-cover shadow-card-md"
            />
          </div>
          <div className="mt-8 grid gap-3 md:grid-cols-4">
            {["器具の徹底滅菌", "使い捨て器材の採用", "空気洗浄機を設置", "院内ツアーも案内"].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-2xl bg-paper p-4 text-sm font-bold text-ink/75">
                <CheckCircle2 className="text-mint-dark" size={18} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-paper py-20 md:py-24">
        <div className="container-base max-w-4xl">
          <div className="text-center">
            <span className="section-eyebrow">FAQ</span>
            <h2 className="mt-5 font-serif text-[clamp(28px,4vw,42px)] font-black text-brand-dark">
              よくある質問
            </h2>
          </div>
          <div className="mt-10 grid gap-3">
            {faqs.map(([q, a]) => (
              <details key={q} className="rounded-2xl border border-blue-100 bg-white p-5 shadow-card-sm">
                <summary className="cursor-pointer font-bold text-brand-dark">{q}</summary>
                <p className="mt-3 text-sm leading-7 text-ink/70">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="access" className="bg-white py-20 md:py-24">
        <div className="container-base grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="section-eyebrow">ACCESS</span>
            <h2 className="mt-5 font-serif text-[clamp(28px,4vw,42px)] font-black leading-tight text-brand-dark">
              旭橋駅から徒歩7分。駐車場4台完備。
            </h2>
            <div className="mt-7 space-y-4 text-ink/75">
              <p className="flex gap-3"><MapPin className="mt-1 shrink-0 text-brand" size={20} />〒900-0033 沖縄県〇〇市〇〇地区1-25-10 上の蔵ハイツ2階</p>
              <p className="flex gap-3"><Phone className="mt-1 shrink-0 text-brand" size={20} />098-000-0000</p>
              <p className="flex gap-3"><Car className="mt-1 shrink-0 text-brand" size={20} />ゆいレール「旭橋駅」より徒歩7分 / 駐車場4台</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-[24px] border border-blue-100 bg-paper shadow-card-sm">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-brand text-white">
                <tr>
                  <th className="p-4">曜日</th>
                  <th className="p-4">午前</th>
                  <th className="p-4">午後</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map(([day, am, pm]) => (
                  <tr key={day} className="border-t border-blue-100 bg-white">
                    <th className="p-4 font-bold text-brand-dark">{day}</th>
                    <td className="p-4">{am}</td>
                    <td className="p-4">{pm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-brand-dark py-20 text-white md:py-24">
        <div className="container-base grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <span className="inline-flex text-[12px] font-bold tracking-[0.22em] text-mint-light">CONTACT</span>
            <h2 className="mt-5 font-serif text-[clamp(28px,4vw,44px)] font-black leading-tight">
              まずは、お気軽にご相談ください。
            </h2>
            <p className="mt-5 text-white/75">
              歯のことで気になることがあれば、些細なことでも構いません。お電話、またはお問合せフォームからご連絡ください。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:0988628241" className="btn-base btn-mint">
                <Phone size={18} />
                電話で予約する
              </a>
              <a href="#access" className="btn-base btn-outline-white">
                <Clock3 size={18} />
                診療時間を見る
              </a>
            </div>
          </div>
          <form className="grid gap-3 rounded-[24px] bg-white p-5 text-ink shadow-card-md md:p-7">
            <input className="rounded-xl border border-blue-100 p-3" placeholder="お名前（必須）" aria-label="お名前" />
            <input className="rounded-xl border border-blue-100 p-3" placeholder="電話番号（必須）" aria-label="電話番号" />
            <select className="rounded-xl border border-blue-100 p-3" aria-label="ご相談の内容" defaultValue="">
              <option value="" disabled>ご相談の内容</option>
              {services.map((service) => <option key={service}>{service}</option>)}
            </select>
            <textarea className="min-h-28 rounded-xl border border-blue-100 p-3" placeholder="ご相談内容" aria-label="ご相談内容" />
            <button type="button" className="btn-base btn-primary">
              <CalendarDays size={18} />
              フォーム内容を確認
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-white py-8">
        <div className="container-base flex flex-col gap-2 text-sm text-ink/60 md:flex-row md:items-center md:justify-between">
          <p className="font-bold text-brand-dark">サンプル歯科医院 デモLP</p>
          <p>掲載写真はデモサイト用のAI生成イメージです。</p>
        </div>
      </footer>

      <div className="fixed bottom-3 left-1/2 z-50 grid w-[92vw] max-w-[420px] -translate-x-1/2 grid-cols-[minmax(0,1fr)_minmax(0,1fr)] overflow-hidden rounded-full bg-white shadow-card-md ring-1 ring-blue-100">
        <a href="tel:0988628241" className="inline-flex min-h-[52px] min-w-0 items-center justify-center gap-2 overflow-hidden px-2 text-ellipsis whitespace-nowrap bg-brand text-xs font-black text-white sm:text-sm">
          <Phone size={16} />
          電話
        </a>
        <a href="#contact" className="inline-flex min-h-[52px] min-w-0 items-center justify-center gap-2 overflow-hidden px-2 text-ellipsis whitespace-nowrap text-xs font-black text-brand-dark sm:text-sm">
          <Sparkles size={16} />
          相談
        </a>
      </div>
    </main>
  );
}
