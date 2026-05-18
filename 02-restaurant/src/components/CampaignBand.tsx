import { SITE } from "@/lib/site";

export default function CampaignBand() {
  return (
    <section aria-label="デモLP案内" className="bg-brand-dark text-white">
      <div className="container-base py-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-sm font-bold md:text-base">{SITE.campaignMain}</p>
          <p className="text-xs leading-relaxed text-white/75 md:text-right">
            {SITE.campaignSub}
          </p>
        </div>
      </div>
    </section>
  );
}
