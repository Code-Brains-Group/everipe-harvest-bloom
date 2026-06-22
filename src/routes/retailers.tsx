import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  HelpCircle,
  ShieldCheck,
  ShoppingBag,
  TrendingDown,
  type LucideIcon,
} from "lucide-react";
import retail from "@/assets/retailer-produce.jpg";
import fruity from "@/assets/fruity-fruits.jpg";
import { SectionLabel } from "@/components/Bits";

export const Route = createFileRoute("/retailers")({
  head: () => ({
    meta: [
      { title: "For Retailers — Everipe" },
      {
        name: "description",
        content:
          "Pilot postharvest protection for retailers managing shrinkage, ripening, and display quality in high-value produce.",
      },
    ],
  }),
  component: Retailers,
});

const RETAIL_ISSUES: [string, string, LucideIcon][] = [
  [
    "Shrinkage Spikes",
    "Avocados, bananas, and melons can lose value quickly through bruising, over-ripening, and visible defects.",
    TrendingDown,
  ],
  [
    "Shopper Trust",
    "Pilots should verify that treatment does not change taste, texture, aroma, or expected ripening behavior.",
    ShieldCheck,
  ],
  [
    "Energy Pressure",
    "Retailers need produce quality without relying only on more cooling, markdowns, and waste disposal.",
    ShoppingBag,
  ],
  [
    "Display Readiness",
    "The goal is better-looking produce with a saleable ripeness window shoppers understand.",
    HelpCircle,
  ],
];

function Retailers() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[95vh] flex items-end overflow-hidden bg-[#17726d]">
        <img
          src={retail}
          alt="Premium supermarket fresh produce display"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17726d] via-[#17726d]/70 to-transparent" />
        <div className="container-x relative pb-24 text-white max-w-4xl">
          <span className="label-eyebrow text-white/70">For Retailers</span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mt-4 leading-[0.98] text-white">
            Lower Shrinkage.
            <br />
            Clearer Ripening.
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed">
            Test whether Everipe can reduce shrinkage on high-value produce while keeping fruit
            ripening predictable for shoppers.
          </p>
        </div>
      </section>

      {/* RETAIL ISSUES */}
      <section className="py-28 md:py-36 bg-white">
        <div className="container-x">
          <SectionLabel>The Retail Shrink Challenge</SectionLabel>
          <div className="grid md:grid-cols-4 gap-8 mt-8">
            {RETAIL_ISSUES.map(([t, d, Icon]) => (
              <div
                key={t}
                className="reveal bg-white p-8 rounded-2xl border border-[#17726d]/15 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#17726d]/10 border border-[#17726d]/20 flex items-center justify-center text-[#17726d] mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-2xl text-ink font-bold">{t}</h3>
                  <p className="mt-3 text-ink/70 text-sm leading-relaxed">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INEDIBLE SKIN HIGHLIGHTS */}
      <section className="py-28 md:py-36 bg-white border-t border-[#17726d]/10">
        <div className="container-x space-y-24">
          {[
            {
              t: "Peel and Rind Focus",
              d: "Early retail pilots can start with crops where treatment is focused on outer rinds and peels, such as avocados, bananas, pineapples, and papayas. Residue and sensory review still matter before any customer-facing claim.",
              img: fruity,
              flip: false,
            },
            {
              t: "Avocados Need Predictable Ripening",
              d: "A good avocado result is not just slower decay. It must still ripen into an edible fruit within a reasonable shopper window, with acceptable texture, flavor, and peel quality.",
              img: fruity,
              flip: true,
            },
            {
              t: "Banana & Tropical Fruit Questions",
              d: "Banana pilots should test whether treatment slows over-ripening without leaving customers waiting too long. Pineapple and papaya pilots should separate rind protection from eating quality.",
              img: retail,
              flip: false,
            },
          ].map(({ t, d, img, flip }) => (
            <div
              key={t}
              className={`grid md:grid-cols-2 gap-12 items-center ${flip ? "md:[&>:first-child]:order-2" : ""}`}
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden reveal border border-[#17726d]/10 shadow-md">
                <img src={img} alt={t} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="reveal">
                <h3 className="font-serif text-4xl md:text-5xl text-ink font-bold leading-tight">
                  {t}
                </h3>
                <p className="mt-5 text-lg text-ink/75 leading-relaxed">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THE FINANCIAL CASE */}
      <section className="py-28 md:py-36 bg-[#17726d]">
        <div className="container-x">
          <span className="label-eyebrow text-white/70 block mb-4">Pilot Economics</span>
          <h2 className="font-serif text-4xl md:text-5xl mb-12 reveal text-white font-bold">
            Build the case from store-level data.
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 border border-white/15 p-10 rounded-2xl reveal">
              <div className="label-eyebrow text-white/60 mb-5">Current Display</div>
              <StatsWhite
                rows={[
                  ["Weekly shrinkage", "Measured"],
                  ["Markdown volume", "Recorded"],
                  ["Waste disposal cost", "Recorded"],
                ]}
              />
            </div>
            <div className="bg-white p-10 rounded-2xl reveal shadow-lg">
              <div className="label-eyebrow text-[#17726d]/70 mb-5">Everipe Pilot Display</div>
              <Stats
                rows={[
                  ["Treated vs control lots", "Compared"],
                  ["Customer-ready ripeness", "Tracked"],
                  ["Net economics", "Reviewed"],
                ]}
              />
            </div>
          </div>
          <div className="text-center mt-14 reveal">
            <div className="font-serif text-7xl md:text-8xl text-white font-bold">Pilot</div>
            <div className="text-white/70 mt-3 font-semibold text-lg">
              Savings claims should wait for real shrinkage and shopper data
            </div>
          </div>
        </div>
      </section>

      {/* PILOT QUESTIONS */}
      <section className="py-28 md:py-36 bg-white">
        <div className="container-x grid md:grid-cols-2 gap-12 mb-12">
          {[
            [
              "Will shoppers get ripe fruit at the right time?",
              "Track edible readiness, flavor, and texture alongside shrinkage.",
            ],
            [
              "Does the economics work store by store?",
              "Compare markdowns, waste, sales velocity, and application cost before scaling.",
            ],
          ].map(([q, a]) => (
            <div key={q} className="border-l-4 border-[#17726d] pl-8 reveal">
              <p className="font-serif text-2xl leading-snug text-ink">{q}</p>
              <p className="mt-6 text-sm text-[#17726d] leading-relaxed font-semibold">{a}</p>
            </div>
          ))}
        </div>
        <div className="container-x text-center mt-8">
          <Link
            to="/contact"
            className="px-6 py-3.5 rounded-full text-sm font-semibold bg-[#17726d] text-white hover:bg-[#0e534f] transition-all duration-300 shadow-md inline-flex items-center gap-2"
          >
            Talk to our retail team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

function Stats({ rows }: { rows: [string, string][] }) {
  return (
    <table className="w-full text-sm">
      <tbody className="divide-y divide-[#17726d]/10">
        {rows.map(([k, v], i) => (
          <tr key={k} className={i === rows.length - 1 ? "font-bold text-lg" : ""}>
            <td className="py-4 text-ink/80">{k}</td>
            <td className="py-4 text-right font-serif font-bold text-[#17726d]">{v}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function StatsWhite({ rows }: { rows: [string, string][] }) {
  return (
    <table className="w-full text-sm">
      <tbody className="divide-y divide-white/10">
        {rows.map(([k, v], i) => (
          <tr key={k} className={i === rows.length - 1 ? "font-bold text-lg" : ""}>
            <td className="py-4 text-white/80">{k}</td>
            <td className="py-4 text-right font-serif font-bold text-white">{v}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
