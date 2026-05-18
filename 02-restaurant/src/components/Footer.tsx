import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-10 border-t border-brand">
      <div className="container-base">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-lg font-black font-serif tracking-wider">{SITE.name}</p>
            <p className="text-xs mt-1 opacity-80">{SITE.address}</p>
            <p className="text-xs mt-1 opacity-80">{SITE.tel}</p>
          </div>
          <p className="text-[11px] opacity-70">
            &copy; {new Date().getFullYear()} {SITE.name} / 営業提案用デモLP
          </p>
        </div>
      </div>
    </footer>
  );
}
