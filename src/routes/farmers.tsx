import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import farmer from "@/assets/farmer-happy-produce.jpg";
import spray from "@/assets/farmer-spraying.jpg";
import { SectionLabel } from "@/components/Bits";

export const Route = createFileRoute("/farmers")({
  head: () => ({
    meta: [
      { title: "For Farmers — Everipe" },
      {
        name: "description",
        content:
          "Machakos County mango farmers use Everipe to stop postharvest spoilage, outlast middlemen, and sell when the market needs them.",
      },
    ],
  }),
  component: Farmers,
});

const FAQS = [
  [
    "Will it wash off in rain?",
    "Rainfastness and handling durability are part of the crop-specific pilot protocol.",
  ],
  [
    "Is it safe to eat?",
    "Food-contact safety, residue behavior, and sensory impact are reviewed before any commercial recommendation.",
  ],
  [
    "How much does it cost?",
    "Pilot economics are built with the farmer or cooperative using real crop values, losses, and route-to-market data.",
  ],
];

function Farmers() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      {/* HERO */}
      <section className="relative h-[95vh] overflow-hidden flex items-end">
        <img
          src={farmer}
          alt="Happy Kenyan farmer proudly holding fresh, long-lasting produce"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17726d]/80 to-transparent" />
        <div className="container-x relative pb-24 text-white max-w-4xl">
          <span className="label-eyebrow text-white/70">The Machakos Story</span>
          <h1 className="font-serif font-bold mt-4 text-5xl md:text-7xl lg:text-8xl leading-[0.98]">
            Harvest at dawn.
            <br />
            Sell by noon.
            <br />
            Or lose everything.
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
                <h3 className="font-serif text-2xl md:text-3xl text-[#17726d] mb-3">
                  Spoilage starts immediately
                </h3>
                <p className="text-[#17726d]/70">
                  Once mangoes are harvested, the countdown begins. Without cold storage, quality
                  drops within hours. Farmers have no time to wait for better prices.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-[#17726d] mb-3">
                  Middlemen know the clock
                </h3>
                <p className="text-[#17726d]/70">
                  Buyers arrive at the farm gate knowing the farmer has no choice. The shorter the
                  shelf life, the lower the price they offer.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-[#17726d] mb-3">
                  Forced to sell early
                </h3>
                <p className="text-[#17726d]/70">
                  Farmers must offload their harvest immediately, often before the fruit is fully
                  ripe, at prices dictated by the buyer, not the market.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-[#17726d] mb-3">
                  The cycle repeats
                </h3>
                <p className="text-[#17726d]/70">
                  Low prices mean no money to invest. No investment means no improvement. The
                  harvest never pays what it should.
                </p>
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
            Test more time after harvest.
            <br />
            Turn urgency into negotiation.
          </h2>
          <p className="mt-6 text-white/75 text-lg max-w-2xl mx-auto">
            Everipe pilots are designed to test whether farmers can gain more time, reach better
            buyers, and reduce pressure to sell immediately after harvest.
          </p>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-28 md:py-36 bg-white">
        <div className="container-x grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden reveal">
            <img
              src={spray}
              alt="Farmer spraying produce with TAEC coating"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <ul className="space-y-7 reveal">
            {[
              ["Less pressure", "More time before distress selling"],
              ["Real controls", "Treated and untreated harvest lots"],
              ["Better data", "Loss, price, and buyer outcomes tracked"],
              ["Fair economics", "Pilot costs measured against actual harvest value"],
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
          <h2 className="font-serif text-4xl md:text-5xl mb-16 reveal">
            Sell when the market needs you.
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              [
                "01",
                "Harvest on your schedule",
                "Pick at peak ripeness. Apply Everipe. The clock slows down.",
              ],
              [
                "02",
                "Wait for the right price",
                "If the pilot creates a longer selling window, farmers can negotiate with better information.",
              ],
              [
                "03",
                "Sell to the best buyer",
                "Reach markets that were too far before. Exporters, supermarkets, not just the farm-gate trader.",
              ],
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
          <h2 className="font-serif text-4xl md:text-5xl mb-12 reveal">
            What one mango pilot should measure.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-[#17726d] p-10 rounded-2xl reveal">
              <div className="label-eyebrow text-[#17726d]/50">Control Lot</div>
              <table className="w-full mt-5 text-sm">
                <tbody className="divide-y divide-[#17726d]">
                  <Row k="Harvest weight" v="Recorded" />
                  <Row k="Spoilage loss" v="Measured" />
                  <Row k="Sold volume" v="Measured" />
                  <Row k="Farm-gate price" v="Recorded" />
                  <Row k="Net revenue" v="Calculated" bold />
                </tbody>
              </table>
            </div>
            <div className="bg-[#17726d] text-white p-10 rounded-2xl reveal">
              <div className="label-eyebrow text-white/60">Everipe-Treated Lot</div>
              <table className="w-full mt-5 text-sm">
                <tbody className="divide-y divide-white/15">
                  <Row k="Harvest weight" v="Matched" />
                  <Row k="Spoilage loss" v="Measured" />
                  <Row k="Sold volume" v="Measured" />
                  <Row k="Buyer price" v="Recorded" />
                  <Row k="Net revenue" v="Compared" bold />
                </tbody>
              </table>
            </div>
          </div>
          <div className="text-center mt-14 reveal">
            <div className="font-serif text-7xl md:text-8xl text-[#17726d]">Pilot</div>
            <div className="text-[#17726d]/65 mt-2">
              Publish economics only after real harvest data is reviewed
            </div>
          </div>
        </div>
      </section>

      {/* PILOT QUESTIONS */}
      <section className="py-28 md:py-36 bg-[#17726d] text-white">
        <div className="container-x">
          <SectionLabel>Farmer Pilot Questions</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl mb-12">
            What we should prove before scaling.
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              [
                "Does treatment create more selling time?",
                "Compare quality and saleable volume for treated and untreated harvest lots.",
              ],
              [
                "Does more time translate to better income?",
                "Track actual buyer offers, transport options, spoilage, and application cost.",
              ],
            ].map(([q, a]) => (
              <div key={q} className="bg-white/5 p-10 rounded-2xl reveal">
                <p className="font-serif text-2xl leading-snug">{q}</p>
                <p className="mt-6 text-sm text-white/65 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GETTING STARTED */}
      <section className="py-28 md:py-36 bg-white">
        <div className="container-x">
          <SectionLabel>Getting started</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl mb-16 reveal">
            Three steps. <span className="text-[#17726d]">That is it.</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              ["01", "Contact Us", "Reach out via WhatsApp, phone or your local agent."],
              ["02", "Get Training", "Free 30-minute application training, on-farm or virtual."],
              [
                "03",
                "Measure Results",
                "Track treated and untreated lots so decisions come from harvest data.",
              ],
            ].map(([n, t, d]) => (
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
              <button
                key={q}
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left py-6 flex items-start justify-between gap-6"
              >
                <div>
                  <div className="font-serif text-xl">{q}</div>
                  {open === i && <p className="mt-3 text-[#17726d]/65 animate-fade-in">{a}</p>}
                </div>
                <ChevronDown
                  className={`w-5 h-5 mt-1 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
            ))}
          </div>
          <Link to="/our-story" className="btn-primary mt-12 inline-flex">
            Talk to our team <ArrowRight className="w-4 h-4" />
          </Link>
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
