import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SITE = {
  name: "サンプル居酒屋",
  nameEn: "MATSUMOTO AGU SHABU-SHABU",
  metaTitle: "サンプル居酒屋｜アグー豚しゃぶしゃぶ予約導線デモLP",
  metaDescription:
    "那覇市松山のアグー豚しゃぶしゃぶ専門店、サンプル居酒屋向け営業提案デモLPです。接待・記念日・観光利用の予約導線を整える構成です。",
  keywords: ["サンプル居酒屋", "サンプル居酒屋", "アグー豚", "しゃぶしゃぶ", "那覇松山", "沖縄料理"],
  siteUrl: "https://sample-restaurant.pages.dev",
  tel: "098-861-1890",
  telRaw: "0988611890",
  address: "沖縄県那覇市松山1-10-8 2F",
  area: "那覇市松山",
  business: "アグー豚しゃぶしゃぶ・沖縄料理・接待/記念日利用",
  infoNote: "料理の魅力と予約導線を近づけ、電話・フォーム予約につなげる構成です。",
  heroAlt: "アグー豚しゃぶしゃぶと上質な沖縄居酒屋のイメージ",
  heroEyebrow: "那覇松山 ／ アグー豚しゃぶしゃぶ",
  heroTitle: ["沖縄の恵みを、", "一鍋に込めて。", "大人の夜へ。"],
  heroLead:
    "那覇・松山で、アグー豚しゃぶしゃぶをゆっくり味わう。\n接待や記念日にも使いやすい予約導線を整えたデモLPです。",
  primaryCta: "予約する",
  secondaryCta: "料理を見る",
  badges: ["アグー豚専門", "那覇松山", "接待・記念日", "沖縄食材"],
  campaignMain: "5月限定 99,000円キャンペーン対応。予約導線と料理の魅力を一体化したデモ構成",
  campaignSub: "写真・メニュー詳細は正式確認後に差し替えます",
  heroOverlay: "linear-gradient(90deg, rgba(27, 19, 15, .94), rgba(64, 37, 22, .64), rgba(191, 133, 64, .20))",
  ctaGradient: "linear-gradient(135deg, #1B130F 0%, #6D3320 54%, #BF8540 100%)",
};

export const PAGE = {
  concept: {
    title: "料理写真から、そのまま予約へつなげる。",
    body:
      "飲食店は、写真を見て「行きたい」と思った瞬間に予約できることが大切です。\nこのデモでは、アグー豚の希少性と松山の大人な雰囲気を見せながら、予約導線を目立たせます。",
  },
  strengths: [
    { icon: "star" as const, title: "アグー豚の特別感", body: "沖縄のブランド食材を主役にし、他店との違いをわかりやすく伝えます。" },
    { icon: "heart" as const, title: "接待・記念日に向く雰囲気", body: "大人の夜、落ち着き、上質さが伝わる配色と構成にします。" },
    { icon: "map" as const, title: "那覇松山の立地", body: "観光客にも地元客にも伝わるよう、場所と利用シーンを整理します。" },
    { icon: "clock" as const, title: "予約しやすい導線", body: "電話・フォーム・アクセスを近い位置に置き、予約前の迷いを減らします。" },
  ],
  servicesTitle: "自慢の料理を、利用シーン別に見せる。",
  servicesLead: "初めての方でも何を頼めばいいか想像できるよう、看板料理からコースまで整理します。",
  services: [
    { title: "アグー豚しゃぶしゃぶ", image: "/images/service1.png", alt: "アグー豚しゃぶしゃぶの料理イメージ", body: "甘みと旨みを味わう看板料理。湯気やだしの臨場感が伝わる見せ方です。", items: ["看板メニュー", "沖縄食材", "接待にも対応"] },
    { title: "沖縄料理・季節料理", image: "/images/service2.png", alt: "沖縄料理と季節料理のイメージ", body: "旅行中の食事にも、地元の大切な夜にも使いやすい料理構成を見せます。", items: ["地元食材", "一品料理", "観光利用"] },
    { title: "コース・宴会利用", image: "/images/service3.png", alt: "落ち着いた居酒屋の席イメージ", body: "接待、記念日、グループ利用の相談を受けられる導線を用意します。", items: ["コース相談", "記念日", "グループ予約"] },
  ],
  feature: {
    title: "グルメサイト任せにせず、指名予約を増やす。",
    body:
      "飲食店は口コミサイトで見つかっても、最後の予約導線が弱いと取りこぼしが出ます。\n独自LPでは、料理の魅力、店の雰囲気、予約ボタンを一体で見せられます。",
    image: "/images/work1.png",
    alt: "上質な沖縄居酒屋の店内イメージ",
    points: ["料理写真を大きく見せる", "予約ボタンを複数配置", "接待・記念日利用を訴求"],
  },
  flowTitle: "来店までの流れをシンプルに。",
  flow: [
    { num: "01", title: "料理を見る", body: "看板料理と利用シーンを確認します。" },
    { num: "02", title: "予約相談", body: "人数、日時、用途を電話やフォームで相談します。" },
    { num: "03", title: "来店", body: "那覇松山の店舗へ来店します。" },
    { num: "04", title: "食事", body: "アグー豚しゃぶしゃぶと沖縄料理を楽しみます。" },
    { num: "05", title: "再来店", body: "記念日や接待でのリピートにつなげます。" },
  ],
  galleryTitle: "料理と空間の魅力を写真で伝える。",
  galleryLead: "実際の料理・店内・スタッフ写真に差し替えることで予約率を高められます。",
  gallery: [
    { image: "/images/work1.png", title: "落ち着いた大人の店内" },
    { image: "/images/work2.png", title: "湯気まで伝わる料理写真" },
    { image: "/images/work3.png", title: "沖縄食材と泡盛の楽しみ" },
  ],
  contact: {
    title: "大切な夜の予約を、迷わずできる形へ。",
    body: "接待・記念日・観光中の食事など、用途に合わせた予約相談を想定しています。\nこのフォームはデモのため送信できません。",
    fields: [
      { label: "お名前", placeholder: "山田 太郎" },
      { label: "電話番号", placeholder: "090-0000-0000" },
      { label: "希望日時", placeholder: "5月20日 19時 など" },
      { label: "人数・用途", placeholder: "4名 / 接待 / 記念日" },
    ],
    textarea: "コース希望、苦手な食材、個室希望など",
  },
};
