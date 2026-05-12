import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import bloomy from "@/assets/bloomy-flowers.jpg";
import veggie from "@/assets/veggie-vegetables.jpg";
import fruity from "@/assets/fruity-fruits.jpg";
import { SectionLabel, Stat } from "@/components/Bits";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Bloomy, Veggie, Fruity | Everipe" },
      { name: "description", content: "Three product lines. Variety-specific protection across flowers, vegetables and fruits." },
    ],
  }),
  component: Products,
});

function Products() {
  return (
    <>
      <section className="bg-forest text-white pt-40 pb-28 md:pb-36">
        <div className="container-x">
          <span className="label-eyebrow text-white/60">Products</span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mt-5 max-w-4xl leading-[0.98]">
            Science that works when <em className="italic">infrastructure fails.</em>
          </h1>
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl">
            <div><div className="font-serif text-4xl md:text-5xl">3</div><div className="text-white/60 text-sm mt-1">Product lines</div></div>
            <div><div className="font-serif text-4xl md:text-5xl">14</div><div className="text-white/60 text-sm mt-1">Crop varieties</div></div>
            <div><div className="font-serif text-4xl md:text-5xl">100%</div><div className="text-white/60 text-sm mt-1">Plant-derived</div></div>
          </div>
        </div>
      </section>

      {/* BLOOMY */}
      <section className="bg-bloomy py-28 md:py-36">
        <div className="container-x grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 aspect-[4/3] rounded-3xl overflow-hidden reveal">
            <img src={bloomy} alt="Cut flowers being sprayed" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="md:col-span-5 reveal">
            <span className="label-eyebrow text-bloomy-accent">Bloomy · Cut Flowers</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 leading-tight">Ship flowers by sea. <em className="italic-accent">Arrive fresh.</em></h2>
            <ul className="mt-7 space-y-3 text-ink/80">
              {["+40% vase life", "−60% freight cost", "+14d transit buffer", "−95% CO₂ vs air freight"].map(b => (
                <li key={b} className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-bloomy-accent mt-2.5" />{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* VEGGIE */}
      <section className="bg-veggie py-28 md:py-36">
        <div className="container-x grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5 md:order-1 order-2 reveal">
            <span className="label-eyebrow text-veggie-accent">Veggie · Fresh Vegetables</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 leading-tight">Extend shelf life. <em className="italic-accent">Eliminate pathogens.</em></h2>
            <p className="mt-5 font-serif text-3xl text-veggie-accent">70% shelf-life extension</p>
            <Variants tone="veggie" items={["Tomato", "Kali", "Cucumber", "Hoho", "Bean"]} />
          </div>
          <div className="md:col-span-7 md:order-2 order-1 aspect-[4/3] rounded-3xl overflow-hidden reveal">
            <img src={veggie} alt="Fresh vegetables" loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* FRUITY */}
      <section className="bg-fruity py-28 md:py-36">
        <div className="container-x">
          <div className="relative aspect-[16/8] rounded-3xl overflow-hidden mb-10 reveal">
            <img src={fruity} alt="Fresh tropical fruits" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/20 to-transparent" />
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 max-w-xl text-white">
              <span className="label-eyebrow text-white/70">Fruity · Fresh Fruits</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-3 leading-tight">Variety-specific protection. <em className="italic">Precisely formulated.</em></h2>
            </div>
          </div>
          <p className="font-serif text-4xl text-fruity-accent mb-8">3× longer shelf life</p>
          <Variants tone="fruity" items={["Avo", "Ananas", "Mango", "Papaya", "Apples"]} />
        </div>
      </section>

      {/* DUAL CTA */}
      <section className="grid md:grid-cols-2">
        <div className="bg-cream py-24 md:py-32 px-8 md:px-16 text-center md:text-left">
          <h3 className="font-serif text-3xl md:text-4xl">Ready to extend your supply chain's <em className="italic-accent">window?</em></h3>
          <Link to="/our-story" className="btn-primary mt-8">Request a Product Trial <ArrowRight className="w-4 h-4" /></Link>
        </div>
        <div className="bg-ink py-24 md:py-32 px-8 md:px-16 text-white text-center md:text-left">
          <h3 className="font-serif text-3xl md:text-4xl">Ready to reduce <em className="italic text-cream">postharvest loss?</em></h3>
          <Link to="/our-story" className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-white text-ink font-medium hover:bg-cream">Schedule a Consultation <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </>
  );
}

function Variants({ items, tone }: { items: string[]; tone: "veggie" | "fruity" }) {
  const [open, setOpen] = useState<string | null>(null);
  const accent = tone === "veggie" ? "text-veggie-accent" : "text-fruity-accent";
  return (
    <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
      {items.map((it) => (
        <button key={it} onClick={() => setOpen(open === it ? null : it)}
          className={`text-left bg-white p-5 rounded-xl transition-all hover:-translate-y-1 ${open === it ? "ring-2 ring-current " + accent : ""}`}>
          <div className={`font-serif text-xl ${accent}`}>{it}</div>
          <div className="text-xs text-ink/50 mt-1">{open === it ? "Pathogen targets, application notes." : "Tap to learn more →"}</div>
        </button>
      ))}
    </div>
  );
}
