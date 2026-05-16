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
      { name: "description", content: "Machakos County mango farmers use Everipe to stop postharvest spoilage, outlast middlemen, and sell when the market needs them." },
    ],
  }),
  component: Farmers,
});

const FAQS = [
  ["Will it wash off in rain?", "TAEC bonds to the produce surface within 10 minutes and remains effective through normal rain exposure post-cure."],
  ["Is it safe to eat?", "Yes. TAEC is GRAS-certified, allergen-free and made from food-grade plant biopolymers."],
  ["How much does it cost?", "Less than 1% of typical revenue per harvest. Most farmers see payback on the first cycle."],
];

function Farmers() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      {/* HERO */}
      <section className="relative h-[95vh] overflow-hidden flex items-end">
        <img src={farmer} alt="Kenyan smallholder farmer at golden hour" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17726d]/80 to-transparent" />
        <div className="container-x relative pb-24 text-white max-w-4xl">
          <span className="label-eyebrow text-white/70">The Machakos Story</span>
          <h1 className="font-serif font-bold mt-4 text-5xl md:text-7xl lg:text-8xl leading-[0.98]">
            Harvest at dawn.<br />Sell by noon.<br />Or lose everything.
          </h1>
        </div>
      </section>

      {/* THE PROBLEM — MACHAKOS STORY */}
      <section className="py-28 md:py-36 bg-white">
        <div className="container-x max-w-5xl mx-auto">
          <SectionLabel>The Reality</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-16">
            In Machakos County, mango farmers were trapped in a cycle they could not escape.
          </h2>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-[#17726d] mb-3">Spoilage starts immediately</h3>
                <p className="text-[#17726d]/70">Once mangoes are harvested, the countdown begins. Without cold storage, quality drops within hours. Farmers have no time to wait for better prices.</p>
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-[#17726d] mb-3">Middlemen know the clock</h3>
                <p className="text-[#17726d]/70">Buyers arrive at the farm gate knowing the farmer has no choice. The shorter the shelf life, the lower the price they offer.</p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-[#17726d] mb-3">Forced to sell early</h3>
                <p className="text-[#17726d]/70">Farmers must offload their harvest immediately, often before the fruit is fully ripe, at prices dictated by the buyer, not the market.</p>
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-[#17726d] mb-3">The cycle repeats</h3>
                <p className="text-[#17726d]/70">Low prices mean no money to invest. No investment means no improvement. The harvest never pays what it should.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION BANNER */}
      <section className="bg-[#17726d] text-white py-28 md:py-36 text-center">
        <div className="container-x reveal">
          <span className="label-eyebrow text-white/60">Everipe for Smallholders</span>
          <h2 className="font-serif text-4xl md:text-6xl mt-5 leading-tight max-w-3xl mx-auto">
            Turn days into weeks.<br />Turn desperation into negotiation.
          </h2>
          <p className="mt-6 text-white/75 text-lg max-w-2xl mx-auto">
            With Everipe, mango farmers in Machakos keep their harvest fresh up to three times longer. That means choosing when to sell, not settling for whatever middlemen offer.
          </p>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-28 md:py-36 bg-white">
        <div className="container-x grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden reveal">
            <img src={spray} alt="Farmer spraying produce with TAEC coating" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <ul className="space-y-7 reveal">
            {[
              ["50-90%", "Postharvest losses reduced"],
              ["3x longer", "Shelf life to wait for the right buyer"],
              ["20-30%", "Premium prices when you sell on your terms"],
              ["1 harvest", "Payback on first application"],
            ].map(([n, d]) => (
              <li key={n}>
                <div className="font-serif text-4xl md:text-5xl text-[#17726d]">{n}</div>
                <div className="text-[#17726d]/70 mt-1">{d}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* HOW IT CHANGES THE MACHAKOS STORY */}
      <section className="py-28 md:py-36 bg-white">
        <div className="container-x">
          <SectionLabel>The shift</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl mb-16 reveal">Sell when the market needs you.</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              ["01", "Harvest on your schedule", "Pick at peak ripeness. Apply Everipe. The clock slows down."],
              ["02", "Wait for the right price", "With 5 to 7 extra days of freshness, you can negotiate. Middlemen lose their advantage."],
              ["03", "Sell to the best buyer", "Reach markets that were too far before. Exporters, supermarkets, not just the farm-gate trader."],
            ].map(([num, t, d]) => (
              <div key={num} className="reveal">
                <div className="font-serif text-7xl text-[#17726d]/80">{num}</div>
                <div className="font-serif text-2xl mt-3">{t}</div>
                <p className="mt-2 text-[#17726d]/65">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ECONOMICS */}
      <section className="py-28 md:py-36 bg-white">
        <div className="container-x">
          <SectionLabel>Economics</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl mb-12 reveal">What one mango harvest looks like.</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-[#17726d] p-10 rounded-2xl reveal">
              <div className="label-eyebrow text-[#17726d]/50">Without Everipe</div>
              <table className="w-full mt-5 text-sm">
                <tbody className="divide-y divide-[#17726d]">
                  <Row k="Mango harvest" v="1,000 kg" /><Row k="Spoilage loss" v="40%" /><Row k="Sold" v="600 kg" /><Row k="Price per kg" v="KSh 45" />
                  <Row k="Revenue" v="KSh 27,000" bold />
                </tbody>
              </table>
            </div>
            <div className="bg-[#17726d] text-white p-10 rounded-2xl reveal">
              <div className="label-eyebrow text-white/60">With Everipe</div>
              <table className="w-full mt-5 text-sm">
                <tbody className="divide-y divide-white/15">
                  <Row k="Mango harvest" v="1,000 kg" /><Row k="Spoilage loss" v="8%" /><Row k="Sold" v="920 kg" /><Row k="Price per kg" v="KSh 60" />
                  <Row k="Revenue" v="KSh 55,200" bold />
                </tbody>
              </table>
            </div>
          </div>
          <div className="text-center mt-14 reveal">
            <div className="font-serif text-7xl md:text-8xl text-[#17726d]">+104%</div>
            <div className="text-[#17726d]/65 mt-2">Revenue uplift on a single mango harvest</div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 md:py-36 bg-[#17726d] text-white">
        <div className="container-x">
          <SectionLabel>Voices from Machakos</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl mb-12">Farmers who took back control.</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              ["Before Everipe, I had to sell my mangoes the same day I harvested. The buyers knew I had no choice. Now I wait three days, call the exporter myself, and get almost double the price.", "Joseph Kiprop · Mango, Machakos County"],
              ["My avocados used to spoil before reaching Nairobi. Now I sell to exporters in Mombasa for 35% more. The middlemen finally have to compete for my crop.", "Mary Wanjiku · Avocado, Murang'a"],
            ].map(([q, a]) => (
              <div key={a} className="bg-white/5 p-10 rounded-2xl reveal">
                <p className="font-serif text-2xl leading-snug">"{q}"</p>
                <p className="mt-6 text-sm text-white/55">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GETTING STARTED */}
      <section className="py-28 md:py-36 bg-white">
        <div className="container-x">
          <SectionLabel>Getting started</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl mb-16 reveal">Three steps. <span className="text-[#17726d]">That is it.</span></h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[["01", "Contact Us", "Reach out via WhatsApp, phone or your local agent."],
              ["02", "Get Training", "Free 30-minute application training, on-farm or virtual."],
              ["03", "Start Spraying", "Apply on harvest day. Results visible within 7 days."]].map(([n, t, d]) => (
              <div key={n} className="reveal">
                <div className="font-serif text-7xl text-[#17726d]/80">{n}</div>
                <div className="font-serif text-2xl mt-3">{t}</div>
                <p className="mt-2 text-[#17726d]/65">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-white">
        <div className="container-x max-w-3xl">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl mb-10">Common questions.</h2>
          <div className="divide-y divide-[#17726d] border-y border-[#17726d]">
            {FAQS.map(([q, a], i) => (
              <button key={q} onClick={() => setOpen(open === i ? null : i)} className="w-full text-left py-6 flex items-start justify-between gap-6">
                <div>
                  <div className="font-serif text-xl">{q}</div>
                  {open === i && <p className="mt-3 text-[#17726d]/65 animate-fade-in">{a}</p>}
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
