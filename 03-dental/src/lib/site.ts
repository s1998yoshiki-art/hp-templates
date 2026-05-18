import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// サンプル歯科医院 デモサイト 共通定数
// ※公開情報（公式サイト example-dental.com・ドクターズ・ファイル・メディカルドック等）から
//   確認できた事項のみ記載。不確実な情報・お客様の声等は記載しない（取材未実施）。
export const SITE = {
  name: "サンプル歯科医院",
  nameKana: "なかざと しか いいん",
  nameEn: "NAKAZATO DENTAL CLINIC",
  tagline: "家族4世代の、かかりつけ歯科医院。",
  tel: "098-000-0000",
  telRaw: "0988628241",
  telMnemonic: "ハニヨイ",
  address: "〒900-0033 沖縄県〇〇市〇〇地区1-25-10 上の蔵ハイツ2階",
  area: "那覇市・浦添市・南風原町・豊見城市ほか沖縄本島南部",
  business: "一般歯科／小児歯科／矯正歯科／インプラント／審美治療／予防歯科",
  founded: "開業40年",
  yearsInBusiness: 40, // Issue #57指定
  director: "〇〇 〇〇（〇〇）",
  directorPredecessor: "〇〇 〇〇（〇〇）",
  staff: "歯科医師3名体制",
  hours: {
    weekday: "9:30〜13:00 / 14:30〜18:30",
    saturday: "9:00〜14:00（初診は17:00まで対応）",
    closed: "木曜・日曜・祝日",
  },
  access: "ゆいレール 旭橋駅 徒歩7分／上之蔵バス停 徒歩2分",
  parking: "医院下4台＋提携駐車場あり",
  officialUrl: "https://example-dental.com/",
};
