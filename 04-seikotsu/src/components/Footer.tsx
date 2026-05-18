import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-paper py-10 border-t border-brand">
      <div className="container-base">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-lg font-black font-serif tracking-wider">{SITE.name}</p>
            <p className="text-xs mt-1 opacity-80">{SITE.address}</p>
            <p className="text-xs mt-1 opacity-80">TEL: {SITE.tel}</p>
            <p className="text-xs mt-1 opacity-70">運営：{SITE.group}</p>
          </div>
          <p className="text-[11px] opacity-70">
            &copy; {new Date().getFullYear()} {SITE.name} ／ 〇〇市〇〇地区・小禄駅5分の整骨院
          </p>
        </div>
      </div>
    </footer>
  );
}
