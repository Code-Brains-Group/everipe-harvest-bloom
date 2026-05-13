import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import hero from "@/assets/hero-packhouse.jpg";
import bloomy from "@/assets/bloomy-flowers.jpg";
import veggie from "@/assets/veggie-vegetables.jpg";
import fruity from "@/assets/fruity-fruits.jpg";
import farmer from "@/assets/farmer-portrait.jpg";
import port from "@/assets/exporter-port.jpg";
import retail from "@/assets/retailer-produce.jpg";
import aerial from "@/assets/story-aerial.jpg";
import { Stat, SectionLabel } from "@/components/Bits";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Everipe — Stronger Harvests, Longer Freshness, Zero Waste" },
      { name: "description", content: "TAEC: a thermally adaptive, plant-based spray that turns any logistics chain into a zero-energy cold chain." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <img
          src={hero}
          alt="Workers applying TAEC spray to fresh produce in an East African packhouse"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-ink/40" />
        <div className="relative container-x pb-20 md:pb-28 pt-32 text-white">
          <div className="max-w-4xl">
            <span className="label-eyebrow text-white/70">Climate-tech · Postharvest protection</span>
            <h1 className="font-serif font-bold mt-5 text-5xl md:text-7xl lg:text-8xl leading-[0.95]">
              Stronger Harvests,<br />Longer <em className="not-italic font-serif italic text-white/90">Freshness,</em><br /> and <span className="italic">Zero Waste.</span>
            </h1>
            <p className="mt-7 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              The world's first thermally adaptive coating that turns any logistics chain into a zero-energy cold chain.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/technology" className="btn-primary">Explore the Technology <ArrowRight className="w-4 h-4" /></Link>
              <Link to="/our-story" className="btn-outline text-white">Partner With Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="py-28 md:py-40 bg-cream">
        <div className="container-x grid md:grid-cols-2 gap-16 md:gap-24">
          <div className="reveal">
            <SectionLabel>Our Mission</SectionLabel>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Reduce cold-chain losses by <em className="italic-accent">40%</em> across the world's most vulnerable food systems.
            </h2>
          </div>
          <div className="reveal md:pt-12">
            <SectionLabel>Our Vision</SectionLabel>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              A world where food loss is no longer <em className="italic-accent">inevitable.</em>
            </h2>
          </div>
        </div>
      </section>

      {/* PROBLEM STATEMENT */}
      <section className="bg-teal text-white py-28 md:py-40">
        <div className="container-x">
          <h2 className="font-serif text-4xl md:text-6xl leading-tight max-w-5xl reveal">
            By 2050, we must feed <em className="italic">10 billion</em> people. The cold chain is failing. <span className="text-white/70">We built the solution.</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {[
              ["No time to negotiate", "Smallholders sell within hours of harvest before quality drops."],
              ["No cold chain access", "Less than 10% of African produce ever sees refrigeration."],
              ["Middlemen exploit farmers", "Urgency caps prices and erodes margins at every step."],
            ].map(([h, p]) => (
              <div key={h} className="bg-white text-ink p-8 rounded-2xl reveal">
                <h3 className="font-serif text-2xl mb-3">{h}</h3>
                <p className="text-ink/65">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="bg-forest text-white py-24 md:py-32">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-12">
          <Stat value="60%" label="Less moisture loss" />
          <Stat value="85%" label="Reduction in disease" />
          <Stat value="3×" label="Longer to peak ripeness" />
          <Stat value="40%" label="Cold chain loss reduction" />
        </div>
      </section>

      {/* PRODUCT LINES */}
      <section className="py-28 md:py-40 bg-cream">
        <div className="container-x">
          <div className="max-w-2xl mb-16 reveal">
            <SectionLabel>Three product lines</SectionLabel>
            <h2 className="font-serif text-4xl md:text-6xl">One coating. <em className="italic-accent">Variety-specific</em> protection.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Bloomy", tag: "Cut Flowers", desc: "Ship by sea. Arrive fresh.", img: bloomy, bg: "bg-bloomy", accent: "text-bloomy-accent" },
              { name: "Veggie", tag: "Fresh Vegetables", desc: "Extend shelf life. Eliminate pathogens.", img: veggie, bg: "bg-veggie", accent: "text-veggie-accent" },
              { name: "Fruity", tag: "Fresh Fruits", desc: "Variety-specific. Precisely formulated.", img: fruity, bg: "bg-fruity", accent: "text-fruity-accent" },
            ].map((p) => (
              <Link key={p.name} to="/products" className={`${p.bg} rounded-3xl p-7 flex flex-col gap-6 transition-all duration-300 hover:-translate-y-2 reveal`}>
                <div className="flex items-center justify-between">
                  <span className="label-eyebrow text-ink/55">{p.tag}</span>
                  <span className={`${p.accent} text-sm flex items-center gap-1`}>Explore <ArrowRight className="w-3.5 h-3.5" /></span>
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div>
                  <h3 className={`font-serif text-3xl ${p.accent}`}>{p.name}</h3>
                  <p className="mt-2 text-ink/70">{p.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR — TABS */}
      <WhoItsFor />

      {/* STORY ONE LINER */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <img src={aerial} alt="Aerial view of farmland in rural Kenya at golden hour" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-ink/30" />
        <div className="relative bg-cream max-w-3xl mx-6 px-10 py-14 md:px-16 md:py-20 rounded-2xl text-center reveal shadow-2xl">
          <p className="font-serif text-3xl md:text-5xl leading-tight">
            We're building a world where <em className="italic-accent">every harvest counts.</em>
          </p>
          <Link to="/our-story" className="inline-flex items-center gap-2 mt-8 text-teal font-medium">
            Our Story <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

function WhoItsFor() {
  const tabs = [
    {
      id: "farmers", label: "Farmers", img: farmer,
      h: "Reduce losses. Grow income.",
      pts: ["Cut postharvest losses 50–90%", "Reach markets 5–7 days away", "Command 20–30% premium prices", "Payback on the very first harvest"],
      to: "/farmers",
    },
    {
      id: "exporters", label: "Exporters", img: port,
      h: "Sea freight quality. Air freight margins.",
      pts: ["Switch from air to sea freight", "Add 14-day transit buffer", "Cut rejections at destination", "Open distant premium markets"],
      to: "/exporters",
    },
    {
      id: "retailers", label: "Retailers", img: retail,
      h: "Less shrinkage. Happier shoppers.",
      pts: ["Reduce produce shrinkage", "Extend display shelf life", "Lower storage requirements", "Improve customer perception"],
      to: "/retailers",
    },
  ];
  const [active, setActive] = useState(0);
  const t = tabs[active];
  return (
    <section className="py-28 md:py-36 bg-white">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 reveal">
          <div>
            <SectionLabel>Built for</SectionLabel>
            <h2 className="font-serif text-4xl md:text-5xl">Whoever keeps food <em className="italic-accent">moving.</em></h2>
          </div>
          <div className="flex gap-1 p-1 bg-cream rounded-full self-start">
            {tabs.map((tab, i) => (
              <button key={tab.id} onClick={() => setActive(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${active === i ? "bg-teal text-white" : "text-ink/60 hover:text-ink"}`}>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        <div key={t.id} className="grid md:grid-cols-2 gap-10 items-center animate-fade-in">
          <div className="aspect-[4/5] md:aspect-[5/6] rounded-3xl overflow-hidden">
            <img src={t.img} alt={t.label} loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">{t.h}</h3>
            <ul className="space-y-5">
              {t.pts.map((p) => (
                <li key={p} className="flex gap-4 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal mt-3 shrink-0" />
                  <span className="text-lg text-ink/80">{p}</span>
                </li>
              ))}
            </ul>
            <Link to={t.to} className="btn-primary mt-10 inline-flex">Explore for {t.label} <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
