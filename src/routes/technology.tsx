import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Droplet, Wind, ShieldCheck, Leaf, Bug, Thermometer } from "lucide-react";
import macro from "@/assets/tech-macro.jpg";
import hero from "@/assets/hero-packhouse.jpg";
import { SectionLabel } from "@/components/Bits";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Technology — TAEC | Everipe" },
      { name: "description", content: "Thermal Adaptive Edible Coating: an antimicrobial, plant-based spray. No cold chain. No equipment." },
    ],
  }),
  component: Tech,
});

const PROPS = [
  { icon: Droplet, stat: "60%", t: "Moisture Lock", d: "Reduces water loss across the entire ripening curve." },
  { icon: Wind, stat: "3×", t: "Gas Exchange Control", d: "Slows respiration. Triples time to peak ripeness." },
  { icon: ShieldCheck, stat: "GRAS", t: "Fully Edible", d: "Generally recognised as safe. Nothing to wash off." },
  { icon: Leaf, stat: "100%", t: "Plant-Derived", d: "Biopolymer base. No synthetic films or waxes." },
  { icon: Bug, stat: "85%", t: "Antimicrobial", d: "Reduces postharvest pathogens by up to 85%." },
  { icon: Thermometer, stat: "Ambient", t: "Thermal Adaptability", d: "Performs across the heat ranges of real supply chains." },
];

const STEPS = [
  ["01", "Harvest"],
  ["02", "Dilute"],
  ["03", "Spray"],
  ["04", "Dry 10 mins"],
  ["05", "Store normally"],
];

function Tech() {
  return (
    <>
      <section className="relative h-[90vh] flex items-end overflow-hidden">
        <img src={macro} alt="Macro view of biotech protective coating on produce" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
        <div className="container-x relative pb-24 text-white max-w-4xl">
          <span className="label-eyebrow text-white/70">The Technology</span>
          <h1 className="font-serif font-bold text-5xl md:text-7xl mt-4 leading-[0.98]">
            TAEC — protection that works where infrastructure doesn't.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl">
            An antimicrobial, plant-based spray. No cold chain. No equipment. Just spray and store.
          </p>
        </div>
      </section>

      {/* SIX PROPERTIES */}
      <section className="py-28 md:py-36 bg-cream">
        <div className="container-x">
          <div className="max-w-3xl mb-16 reveal">
            <SectionLabel>Properties</SectionLabel>
            <h2 className="font-serif text-4xl md:text-6xl">Six properties. <span className="text-teal">One simple spray.</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROPS.map(({ icon: Icon, stat, t, d }, i) => (
              <div key={t} className={`bg-white rounded-2xl p-8 reveal ${i % 5 === 1 ? "lg:translate-y-8" : ""}`}>
                <Icon className="w-7 h-7 text-teal mb-6" strokeWidth={1.5} />
                <div className="font-serif text-4xl text-teal mb-2">{stat}</div>
                <h3 className="text-lg font-medium mb-1">{t}</h3>
                <p className="text-ink/65 text-sm">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION */}
      <section className="py-28 md:py-36 bg-white">
        <div className="container-x">
          <div className="max-w-3xl mb-16 reveal">
            <SectionLabel>Application</SectionLabel>
            <h2 className="font-serif text-4xl md:text-5xl">Five steps. <span className="text-teal">Ten minutes.</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
            {STEPS.map(([n, l]) => (
              <div key={n} className="reveal">
                <div className="font-serif text-5xl md:text-6xl text-teal/80">{n}</div>
                <div className="mt-3 text-ink font-medium">{l}</div>
              </div>
            ))}
          </div>
          <div className="aspect-[21/9] rounded-3xl overflow-hidden">
            <img src={hero} alt="Spray application in a packhouse" loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* SAFETY */}
      <section className="py-28 md:py-36 bg-cream">
        <div className="container-x">
          <div className="max-w-3xl mb-14 reveal">
            <SectionLabel>Safety & Compliance</SectionLabel>
            <h2 className="font-serif text-4xl md:text-5xl">Validated where it matters.</h2>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {["Food-safe (GRAS)", "No flavour change", "Allergen-free", "Environmentally benign", "No PPE required"].map((p) => (
              <div key={p} className="bg-white p-7 rounded-2xl text-sm font-medium reveal">{p}</div>
            ))}
          </div>
          <p className="mt-10 text-sm text-ink/55 max-w-2xl">
            Validated with Kenyan research institutions and aligned with international food science bodies.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-veggie text-center">
        <div className="container-x">
          <h2 className="font-serif text-4xl md:text-6xl reveal">Read the research behind <span className="text-teal">TAEC.</span></h2>
          <Link to="/our-story" className="btn-primary mt-10">Access Documentation <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </>
  );
}
