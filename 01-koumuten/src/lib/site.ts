import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// サンプル工務店 株式会社 デモサイト 共通定数
// ※公開情報（公式HP・タイムス住宅新聞社・建設業許可）から確認できた事項のみ記載。
//   不確実な情報・お客様の声等は記載しない（取材未実施）。
export const SITE = {
  name: "サンプル工務店 株式会社",
  nameKana: "かねよし こうむてん",
  tagline: "沖縄中南部の住まいに、確かな仕上がりを。",
  tel: "098-000-0000",
  telRaw: "0988590395",
  fax: "098-000-0001",
  address: "〒901-0153 沖縄県〇〇市〇〇 1-2-3",
  area: "沖縄本島中南部 17市町村（那覇・浦添・宜野湾・豊見城・糸満・南城・南風原町・与那原町・八重瀬町・西原町・うるま・沖縄・北谷町・中城村・北中城村・嘉手納町・読谷村）",
  business: "新築工事／住宅・マンション・アパート・店舗のリフォーム工事",
  founded: "—（お問い合わせください）",
  representative: "—（お問い合わせください）",
  capital: "—",
  employees: "—",
  license: "沖縄県知事許可（般-29）第11342号",
  partner: "タイムス住宅新聞社 掲載実績／那覇市役所庁内モニター広告",
};
