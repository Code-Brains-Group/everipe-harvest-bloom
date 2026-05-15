import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import farmer from "@/assets/farmer-portrait.jpg";
import spray from "@/assets/farmer-spraying.jpg";
import { SectionLabel } from "@/components/Bits";

export const Route = createFileRoute("/farmers")({
  head: () => ({
    meta: [
      { title: "For Farmers — Everipe" },
      { name: "description", content: "Reduce postharvest losses 50–90%. Reach distant markets. Command premium prices." },
    ],
  }),
  component: Farmers,
});

const PAINS = [
  ["Time", "Sell within hours of harvest before quality drops."],
  ["Cold chain", "No refrigeration between farm and market."],
  ["Roads", "Long, rough transit damages produce in transit."],
  ["Middlemen", "Urgency caps prices at every link in the chain."],
];

const FAQS = [
  ["Will it wash off in rain?", "TAEC bonds to the produce surface within 10 minutes and remains effective through normal rain exposure post-cure."],
  ["Is it safe to eat?", "Yes. TAEC is GRAS-certified, allergen-free and made from food-grade plant biopolymers."],
  ["How much does it cost?", "Less than 1% of typical revenue per harvest. Most farmers see payback on the first cycle."],
];

function Farmers() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <section className="relative h-[95vh] overflow-hidden flex items-end">
        <img src={farmer} alt="Kenyan smallholder farmer at golden hour" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
        <div className="container-x relative pb-24 text-white max-w-4xl">
          <span className="label-eyebrow text-white/70">For Farmers</span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mt-4 leading-[0.98]">
            More yield. Less income.<br />Something was wrong.
          </h1>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-cream">
        <div className="container-x">
          <div className="grid md:grid-cols-4 gap-6">
            {PAINS.map(([t, d]) => (
              <div key={t} className="reveal">
                <h3 className="font-serif text-3xl text-teal">{t}</h3>
                <p className="mt-3 text-ink/70">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-teal text-white py-28 md:py-36 text-center">
        <div className="container-x reveal">
          <span className="label-eyebrow text-white/60">Everipe for Smallholders</span>
          <h2 className="font-serif text-4xl md:text-6xl mt-5 leading-tight max-w-3xl mx-auto">
            Reduce losses. Grow income. Reach premium markets.
          </h2>
          <p className="mt-6 text-white/75 text-lg">No expensive equipment needed.</p>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-cream">
        <div className="container-x grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden reveal">
            <img src={spray} alt="Farmer spraying produce" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <ul className="space-y-7 reveal">
            {[
              ["50–90%", "Postharvest losses reduced"],
              ["5–7 days", "Ship to markets further away"],
              ["20–30%", "Premium prices commanded"],
              ["1 harvest", "Payback on first application"],
            ].map(([n, d]) => (
              <li key={n}>
                <div className="font-serif text-4xl md:text-5xl text-teal">{n}</div>
                <div className="text-ink/70 mt-1">{d}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-white">
        <div className="container-x">
          <SectionLabel>Getting started</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl mb-16 reveal">Three steps. <span className="text-teal">That's it.</span></h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[["01", "Contact Us", "Reach out via WhatsApp, phone or your local agent."],
              ["02", "Get Training", "Free 30-minute application training, on-farm or virtual."],
              ["03", "Start Spraying", "Apply on harvest day. Results visible within 7 days."]].map(([n, t, d]) => (
              <div key={n} className="reveal">
                <div className="font-serif text-7xl text-teal/80">{n}</div>
                <div className="font-serif text-2xl mt-3">{t}</div>
                <p className="mt-2 text-ink/65">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-cream">
        <div className="container-x">
          <SectionLabel>Economics</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl mb-12 reveal">The numbers, simply.</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-10 rounded-2xl reveal">
              <div className="label-eyebrow text-ink/50">Without Everipe</div>
              <table className="w-full mt-5 text-sm">
                <tbody className="divide-y divide-border">
                  <Row k="Harvest" v="1,000 kg" /><Row k="Loss" v="40%" /><Row k="Sold" v="600 kg" /><Row k="Price/kg" v="$0.30" />
                  <Row k="Revenue" v="$180" bold />
                </tbody>
              </table>
            </div>
            <div className="bg-teal text-white p-10 rounded-2xl reveal">
              <div className="label-eyebrow text-white/60">With Everipe</div>
              <table className="w-full mt-5 text-sm">
                <tbody className="divide-y divide-white/15">
                  <Row k="Harvest" v="1,000 kg" /><Row k="Loss" v="8%" /><Row k="Sold" v="920 kg" /><Row k="Price/kg" v="$0.40" />
                  <Row k="Revenue" v="$368" bold />
                </tbody>
              </table>
            </div>
          </div>
          <div className="text-center mt-14 reveal">
            <div className="font-serif text-7xl md:text-8xl text-teal">+104%</div>
            <div className="text-ink/65 mt-2">Annual revenue uplift, on average</div>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-ink text-white">
        <div className="container-x grid md:grid-cols-2 gap-8">
          {[
            ["My avocados used to spoil before reaching Nairobi. Now I sell to exporters in Mombasa for 35% more.", "Mary Wanjiku · Avocado, Murang'a"],
            ["I tripled my income in one season. The middlemen finally had to negotiate.", "Joseph Kiprop · Mango, Machakos"],
          ].map(([q, a]) => (
            <div key={a} className="bg-white/5 p-10 rounded-2xl reveal">
              <p className="font-serif text-2xl leading-snug">"{q}"</p>
              <p className="mt-6 text-sm text-white/55">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-28 bg-cream">
        <div className="container-x max-w-3xl">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl mb-10">Common questions.</h2>
          <div className="divide-y divide-border border-y border-border">
            {FAQS.map(([q, a], i) => (
              <button key={q} onClick={() => setOpen(open === i ? null : i)} className="w-full text-left py-6 flex items-start justify-between gap-6">
                <div>
                  <div className="font-serif text-xl">{q}</div>
                  {open === i && <p className="mt-3 text-ink/65 animate-fade-in">{a}</p>}
                </div>
                <ChevronDown className={`w-5 h-5 mt-1 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
            ))}
          </div>
          <Link to="/our-story" className="btn-primary mt-12 inline-flex">Talk to our team <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </>
  );
}

function Row({ k, v, bold }: { k: string; v: string; bold?: boolean }) {
  return (
    <tr className={bold ? "font-semibold" : ""}>
      <td className="py-2.5">{k}</td>
      <td className="py-2.5 text-right">{v}</td>
    </tr>
  );
}
