import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// サンプル整骨院 デモサイト 共通定数
// ※公開情報（公式HP https://example-seikotsu.com/ ・運営会社サイト）から確認できた事項のみ記載。
//   不確実な情報・院長名・具体料金などは記載しない（取材未実施）。
export const SITE = {
  name: "サンプル整骨院",
  nameKana: "わいず なはせいこついん",
  tagline: "その痛み、原因から整える。",
  tel: "098-858-2655",
  telRaw: "0988582655",
  address: "〒901-0156 沖縄県〇〇市〇〇地区3-1-1 エンゼルハイム101",
  hoursWeekday: "9:00〜19:30",
  hoursWeekend: "10:00〜17:00",
  closedDays: "公式サイトをご確認ください",
  access: "ゆいレール「小禄駅」徒歩5分／「奥武山公園駅」徒歩8分",
  group: "サンプル運営会社",
  parking: "近隣コインパーキングあり（公式サイトをご確認ください）",
  business: "整体／骨盤矯正／姿勢矯正／産後骨盤矯正／交通事故施術／スポーツ外傷／肩こり・腰痛施術",
  insurance: "各種健康保険／自賠責保険／労災保険",
};
