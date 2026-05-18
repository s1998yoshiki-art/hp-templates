import Image from "next/image";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  Handshake,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  Scale,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    title: "建設業許可",
    body: "新規・更新・業種追加、知事許可／大臣許可、一般／特定まで要件確認から整理します。",
    icon: Building2,
  },
  {
    title: "経営事項審査",
    body: "Y点・W点・経営状況分析・年次更新など、公共工事を見据えた準備を伴走します。",
    icon: FileCheck2,
  },
  {
    title: "入札参加資格申請",
    body: "沖縄県・那覇市・国交省・各市町村の申請時期と必要資料を管理します。",
    icon: ClipboardCheck,
  },
  {
    title: "その他許認可",
    body: "産業廃棄物処理業、宅建業、古物商、契約書作成なども初回相談で切り分けます。",
    icon: Scale,
  },
];

const prices = [
  ["建設業許可 新規（知事・一般）", "12万円〜"],
  ["建設業許可 更新", "6万円〜"],
  ["経営事項審査 一式", "8万円〜"],
  ["入札参加資格申請", "3万円〜"],
  ["産業廃棄物処理業許可", "15万円〜"],
  ["初回相談", "無料"],
];

const results = [
  ["建設業許可申請", "累計〇〇件"],
  ["経審年次更新", "継続〇〇社"],
  ["入札参加資格", "新規取得〇〇件"],
];

const faqs = [
  ["許可申請にはどれくらい時間がかかりますか？", "知事許可で書類完備後おおむね30〜45日が目安です。"],
  ["経審の点数って上げられるんですか？", "はい。決算前のご相談で評点改善の打ち手をご提案できます。"],
  ["他県の業者ですが対応できますか？", "沖縄県内事業所をお持ちであれば対応可能です。まずはご相談ください。"],
  ["相談は本当に無料ですか？", "初回相談（60分目安）は無料です。受任前に必ずお見積りをご提示します。"],
  ["日中電話に出られないのですが", "フォームから24時間受付、平日中にご返信します。"],
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "長山行政書士事務所",
  areaServed: "沖縄県",
  serviceType: ["建設業許可", "経営事項審査", "入札参加資格申請"],
};

export default function Page() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="site-header">
        <a href="#top" className="brand" aria-label="長山行政書士事務所">
          <span className="brand-mark">N</span>
          <span>
            <strong>長山行政書士事務所</strong>
            <small>Construction License Office</small>
          </span>
        </a>
        <nav aria-label="主要メニュー">
          <a href="#message">所長挨拶</a>
          <a href="#services">業務内容</a>
          <a href="#price">料金</a>
          <a href="#contact">相談</a>
        </nav>
      </header>

      <section id="top" className="hero nagayama-hero">
        <Image
          src="/images/nagayama_hero_01.png"
          alt="行政書士のデスクと建設現場を組み合わせたヒーローイメージ"
          fill
          priority
          sizes="100vw"
          className="hero-photo"
        />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow">沖縄の建設業許可・経審に特化</p>
          <h1>
            沖縄の建設業許可、
            <br />
            最初の相談は
            <br />
            ここから。
          </h1>
          <p className="lead">
            建設業許可・経営事項審査・入札参加資格を、
            <br />
            申請から更新まで一貫して。
            <br />
            那覇市の専門特化型行政書士事務所です。
          </p>
          <div className="hero-actions">
            <a className="primary-btn" href="#contact">
              無料で相談する（フォーム）
              <ArrowRight size={18} />
            </a>
            <a className="secondary-btn" href="tel:0000000000">電話で相談（平日9-18時）</a>
          </div>
          <div className="trust-row" aria-label="特徴">
            <span><ShieldCheck size={18} /> 初回相談無料</span>
            <span><ClipboardCheck size={18} /> 経審まで一貫対応</span>
            <span><Handshake size={18} /> 沖縄県内対応</span>
          </div>
        </div>
      </section>

      <section id="message" className="section message-section reveal">
        <div className="portrait-frame">
          <Image
            src="/images/nagayama_director_02.png"
            alt="長山行政書士事務所の所長ポートレートイメージ"
            width={720}
            height={900}
            className="portrait-photo"
          />
        </div>
        <div>
          <p className="section-label">Message</p>
          <h2>所長挨拶</h2>
          <p>
            私たち長山行政書士事務所は、建設業許可・経営事項審査に特化した那覇市の行政書士事務所です。
            「許可は取れたけれど、毎年の更新が大変」「経審の点数を上げたいが何から手をつければいいか分からない」
            そんなお声に応え続けてきました。
          </p>
          <p>
            ご相談は無料です。電話一本、フォーム一通から始めてください。
          </p>
          <strong className="signature">所長　長山</strong>
        </div>
      </section>

      <section id="services" className="section muted reveal">
        <div className="section-head">
          <p className="section-label">Services</p>
          <h2>建設業者向けの4つの業務分野</h2>
        </div>
        <div className="services-layout">
          <Image
            src="/images/nagayama_services_06.png"
            alt="建設業許可や経審など4分野を表すミニマルな業務イメージ"
            width={760}
            height={760}
            className="services-image"
          />
          <div className="service-grid four">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="service-card lift-card" key={service.title}>
                  <Icon size={28} />
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section meeting-section reveal">
        <div>
          <p className="section-label">Consultation</p>
          <h2>期限、要件、不足資料を初回相談で整理します。</h2>
          <p>
            建設業許可や経審は、会社の状況によって必要資料が変わります。
            何から着手すべきかを早い段階で明確にし、手戻りを減らします。
          </p>
        </div>
        <Image
          src="/images/nagayama_meeting_03.png"
          alt="行政書士と建設業経営者の打ち合わせイメージ"
          width={900}
          height={620}
          className="wide-photo"
        />
      </section>

      <section id="price" className="section split price-section reveal">
        <div>
          <p className="section-label">Price</p>
          <h2>申請前に、対応範囲と費用を明確に。</h2>
          <p>
            難易度・書類量により増減します。正式なお見積りは初回相談後にご提示します。
          </p>
          <Image
            src="/images/nagayama_documents_04.png"
            alt="申請書類と印鑑のクローズアップ"
            width={860}
            height={620}
            className="documents-photo"
          />
        </div>
        <div className="price-table">
          {prices.map(([label, price]) => (
            <div key={label} className="price-row">
              <span>{label}</span>
              <strong>{price}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section results-section reveal">
        <div className="section-head">
          <p className="section-label">Results</p>
          <h2>継続支援を前提にした実績表示</h2>
        </div>
        <div className="result-grid">
          {results.map(([label, value]) => (
            <article key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section reveal">
        <div className="section-head">
          <p className="section-label">FAQ</p>
          <h2>よくある質問</h2>
        </div>
        <div className="faq-list">
          {faqs.map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="access" className="section access-section muted reveal">
        <Image
          src="/images/nagayama_office_05.png"
          alt="落ち着いた行政書士事務所の外観イメージ"
          width={900}
          height={620}
          className="wide-photo"
        />
        <div>
          <p className="section-label">Access</p>
          <h2>那覇市から沖縄県内の建設業者様へ。</h2>
          <div className="access-list">
            <p><MapPin size={20} />〒900-XXXX 沖縄県那覇市XXXXX（要確認）</p>
            <p><Phone size={20} />平日 9:00〜18:00</p>
            <p><CheckCircle2 size={20} />駐車場：あり／なし（要確認）</p>
          </div>
        </div>
      </section>

      <section id="contact" className="cta reveal">
        <div>
          <p className="section-label">Contact</p>
          <h2>建設業許可・経審のご相談は、まずお気軽にどうぞ。</h2>
          <p>
            初回相談は無料です。業種、現在の許可状況、期限が分かる範囲でフォームからお送りください。
          </p>
        </div>
        <form className="contact-form">
          <input aria-label="お名前" placeholder="お名前（必須）" />
          <input aria-label="会社名・屋号" placeholder="会社名・屋号" />
          <input aria-label="メールアドレス" placeholder="メールアドレス（必須）" />
          <select aria-label="業種" defaultValue="">
            <option value="" disabled>業種を選択</option>
            <option>建設業</option>
            <option>産廃</option>
            <option>宅建</option>
            <option>その他</option>
          </select>
          <fieldset className="checkbox-panel">
            <legend>ご相談内容</legend>
            {["許可新規", "許可更新", "経審", "入札", "その他"].map((item) => (
              <label key={item}>
                <input type="checkbox" />
                {item}
              </label>
            ))}
          </fieldset>
          <textarea aria-label="ご相談詳細" placeholder="ご相談詳細（必須）" rows={4} />
          <a className="primary-btn light" href="mailto:example@example.com">
            <Mail size={18} />
            相談内容を送る
          </a>
        </form>
      </section>

      <nav className="fixed-cta" aria-label="固定相談導線">
        <a href="tel:0000000000"><Phone size={16} /> 電話</a>
        <a href="#contact"><MessageSquareText size={16} /> フォーム</a>
        <a href="#price">料金</a>
      </nav>

      <footer>
        <p>長山行政書士事務所 デモLP</p>
        <p>掲載情報・写真は営業提案用サンプルです。正式情報は事業者確認後に反映します。</p>
      </footer>
    </main>
  );
}
