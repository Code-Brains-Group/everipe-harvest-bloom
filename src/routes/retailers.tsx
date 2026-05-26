import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, ShoppingBag, TrendingDown, HelpCircle } from "lucide-react";
import retail from "@/assets/retailer-produce.jpg";
import fruity from "@/assets/fruity-fruits.jpg";
import avocadoComparison from "@/assets/avocado-comparison.png";
import { SectionLabel } from "@/components/Bits";

export const Route = createFileRoute("/retailers")({
  head: () => ({
    meta: [
      { title: "For Retailers — Everipe" },
      { name: "description", content: "Reduce produce shrinkage. Zero customer friction. Focus on inedible-skin crops like avocados and bananas." },
    ],
  }),
  component: Retailers,
});

function Retailers() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[95vh] flex items-end overflow-hidden bg-[#17726d]">
        <img src={retail} alt="Premium supermarket fresh produce display" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17726d] via-[#17726d]/70 to-transparent" />
        <div className="container-x relative pb-24 text-white max-w-4xl">
          <span className="label-eyebrow text-white/70">For Retailers</span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mt-4 leading-[0.98] text-white">
            Frictionless Savings.<br />
            Zero Peel Shrinkage.
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed">
            Slash retail shrinkage on high-value fruits where the skin is discarded, like avocados and bananas.
          </p>
        </div>
      </section>

      {/* RETAIL ISSUES */}
      <section className="py-28 md:py-36 bg-white">
        <div className="container-x">
          <SectionLabel>The Retail Shrink Challenge</SectionLabel>
          <div className="grid md:grid-cols-4 gap-8 mt-8">
            {[
              ["Shrinkage Spikes", "Avocados, bananas, and melons suffer up to 30% display shrinkage from rapid bruising and over-ripening.", TrendingDown],
              ["Zero Consumer Friction", "Applied exclusively on the inedible outer skins that customers peel away, bypassing any organic food hesitancy.", ShieldCheck],
              ["Active Energy Costs", "Heavy reliance on open-air refrigeration decks eats into thin supermarket produce margins.", ShoppingBag],
              ["Display Freshness", "Instantly capture buyers with golden, unblemished, and highly firm fruit displays that drive volume.", HelpCircle],
            ].map(([t, d, Icon]) => (
              <div key={t} className="reveal bg-white p-8 rounded-2xl border border-[#17726d]/15 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#17726d]/10 border border-[#17726d]/20 flex items-center justify-center text-[#17726d] mb-5">
                    {/* @ts-ignore */}
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
              t: "Zero-Friction Inedible Skins", 
              d: "Everipe TAEC is applied strictly to outer rinds and peels that are discarded before eating—such as avocados, bananas, pineapples (Ananas), and papayas. Customers enjoy peak freshness while the bio-protective layer is peeled away.", 
              img: avocadoComparison, 
              flip: false 
            },
            { 
              t: "Avocados Stay Peaked", 
              d: "Treating Fruity Avo skin locks moisture inside and constricts respiratory gas transfer. Avocados maintain shelf-readiness up to 58 days, retaining natural flesh texture and eliminating quick black spot decay.", 
              img: fruity, 
              flip: true 
            },
            { 
              t: "Banana & Tropical Shelf-Life", 
              d: "Maintain bananas at golden-yellow maturity 2× longer on open display and prevent crown black-rot in fresh pineapples. Optimize shelf layout without changing refrigeration lines.", 
              img: retail, 
              flip: false 
            },
          ].map(({ t, d, img, flip }) => (
            <div key={t} className={`grid md:grid-cols-2 gap-12 items-center ${flip ? "md:[&>:first-child]:order-2" : ""}`}>
              <div className="aspect-[4/3] rounded-3xl overflow-hidden reveal border border-[#17726d]/10 shadow-md">
                <img src={img} alt={t} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="reveal">
                <h3 className="font-serif text-4xl md:text-5xl text-ink font-bold leading-tight">{t}</h3>
                <p className="mt-5 text-lg text-ink/75 leading-relaxed">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THE FINANCIAL CASE */}
      <section className="py-28 md:py-36 bg-[#17726d]">
        <div className="container-x">
          <span className="label-eyebrow text-white/70 block mb-4">The Financial Case</span>
          <h2 className="font-serif text-4xl md:text-5xl mb-12 reveal text-white font-bold">
            1,000 kg Avocados & Bananas per week.
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 border border-white/15 p-10 rounded-2xl reveal">
              <div className="label-eyebrow text-white/60 mb-5">Without Everipe</div>
              <StatsWhite rows={[
                ["Weekly Shrinkage", "28%"],
                ["Annual Fruit Loss (kg)", "14,560"],
                ["Annual Financial Loss ($)", "$43,680"]
              ]} />
            </div>
            <div className="bg-white p-10 rounded-2xl reveal shadow-lg">
              <div className="label-eyebrow text-[#17726d]/70 mb-5">With Everipe Treatment</div>
              <Stats rows={[
                ["Weekly Shrinkage", "4%"],
                ["Annual Fruit Loss (kg)", "2,080"],
                ["Annual Financial Loss ($)", "$6,240"]
              ]} />
            </div>
          </div>
          <div className="text-center mt-14 reveal">
            <div className="font-serif text-7xl md:text-8xl text-white font-bold">$37,440</div>
            <div className="text-white/70 mt-3 font-semibold text-lg">Annual net savings · per category, per store volume</div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 md:py-36 bg-white">
        <div className="container-x grid md:grid-cols-2 gap-12 mb-12">
          {[
            ["Treating our avocados cut display shrink by 65%. Since the skin is peeled anyway, there is absolute zero customer hesitation. It's a massive, frictionless win.", "Category Director · Premium European Grocery"],
            ["Everipe treatment keeps banana bunches at perfect golden-yellow shelf maturity for twice as long, saving us thousands in weekly markdown and disposal costs.", "Produce Operations Lead · East African Supermarket"],
          ].map(([q, a]) => (
            <div key={a} className="border-l-4 border-[#17726d] pl-8 reveal">
              <p className="font-serif text-2xl leading-snug text-ink">"{q}"</p>
              <p className="mt-6 text-sm text-[#17726d] font-mono uppercase tracking-wider font-bold">{a}</p>
            </div>
          ))}
        </div>
        <div className="container-x text-center mt-8">
          <Link to="/contact" className="px-6 py-3.5 rounded-full text-sm font-semibold bg-[#17726d] text-white hover:bg-[#0e534f] transition-all duration-300 shadow-md inline-flex items-center gap-2">
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
