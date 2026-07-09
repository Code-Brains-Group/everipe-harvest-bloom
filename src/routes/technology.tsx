import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Droplet,
  Wind,
  ShieldCheck,
  Leaf,
  Bug,
  Thermometer,
  FlaskConical,
  Activity,
  CheckCircle2,
} from "lucide-react";
import techSpray from "@/assets/tech-spray.jpg";
import hero from "@/assets/technology-spray.png";
import macro from "@/assets/tech-macro.jpg";
import { SectionLabel } from "@/components/Bits";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Technology — TAEC | Everipe" },
      {
        name: "description",
        content:
          "Everipe is developing TAEC, a plant-based postharvest coating to slow moisture loss and decay.",
      },
    ],
  }),
  component: Tech,
});

const PROPS = [
  { icon: Droplet, t: "Moisture Retention", d: "Reduces water loss during warm handling." },
  { icon: Wind, t: "Gas Exchange", d: "Breathable layer slows respiration naturally." },
  { icon: ShieldCheck, t: "Food-Contact Safety", d: "Ingredient and sensory reviews built-in." },
  { icon: Leaf, t: "Bio-Based Inputs", d: "Plant-derived components, no fossil waxes." },
  { icon: Bug, t: "Surface Decay", d: "Protects against mold and skin spotting." },
  { icon: Thermometer, t: "Heat Exposure", d: "Evaluated under realistic storage temperatures." },
];

const STEPS = [
  { num: "01", label: "Harvest", desc: "Commercial maturity." },
  { num: "02", label: "Prepare", desc: "Mix pilot protocol." },
  { num: "03", label: "Apply", desc: "Packhouse spray." },
  { num: "04", label: "Dry", desc: "Air dry before packing." },
  { num: "05", label: "Monitor", desc: "Track quality data." },
];

function Tech() {
  return (
    <>
      {/* TECH HERO */}
      <section className="relative min-h-[75vh] flex items-center pt-32 pb-24 overflow-hidden bg-[#17726d] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),transparent_50%)]" />
        <img
          src={macro}
          alt="Macro view of biotech protective coating on produce"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#17726d] via-[#17726d]/90 to-transparent" />
        <div className="container-x relative text-white max-w-6xl z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider bg-white/10 border border-white/20 text-white uppercase mb-6 backdrop-blur-sm">
            Our Technology
          </span>
          <h1 className="font-serif font-bold text-5xl md:text-7xl lg:text-[5.5rem] mt-4 leading-[0.95] tracking-tight text-white">
            Plant-based, edible <br />
            <span className="text-white underline decoration-white/30">biocoatings.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
            Everipe develops plant-based, edible biocoatings designed to extend the shelf life of fresh fruits and vegetables by stabilizing their postharvest physiology under real-world supply chain conditions.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS WITH USER IMAGE */}
      <section id="how-it-works" className="py-24 md:py-32 bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <SectionLabel>How it works</SectionLabel>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight mt-5 text-ink font-bold">
                Fresh produce continues to <span className="text-[#17726d]">“live”</span> after harvest.
              </h2>
              <p className="mt-6 text-lg text-ink/75 leading-relaxed mb-4">
                It respires, loses moisture, and is highly sensitive to temperature fluctuations, mechanical damage, and microbial infection. These processes accelerate significantly when cold-chain conditions fail or when produce is exposed to long and variable transit routes.
              </p>
              <p className="text-lg text-ink/75 leading-relaxed mb-8">
                Everipe’s technology forms a thin, invisible, breathable coating on the surface of fresh produce. This coating is engineered from natural biopolymers derived from agricultural side-streams and is applied post-harvest.
              </p>
            </div>

            <div className="reveal">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={techSpray}
                  alt="Pineapple and mango being sprayed on a conveyor belt"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IT IS MADE FROM WITH USER IMAGE */}
      <section id="what-it-is-made-from" className="py-24 md:py-32 bg-slate-50 border-t border-border">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal order-2 lg:order-1">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-white border border-border">
                <img
                  src={macro}
                  alt="Close-up of a plant-based protective coating on produce"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="reveal order-1 lg:order-2">
              <SectionLabel>What it is made from</SectionLabel>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight mt-5 text-ink font-bold">
                Starch-derived <span className="text-[#17726d]">matrices.</span>
              </h2>
              <p className="mt-6 text-lg text-ink/75 leading-relaxed mb-6">
                The coatings are built from starch-derived matrices sourced from agricultural waste streams and other locally available biomass.
              </p>
              <p className="text-lg text-ink/75 leading-relaxed mb-6 font-semibold">
                These materials are selected for their ability to:
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-center gap-3 text-ink/80">
                  <div className="w-2 h-2 rounded-full bg-[#17726d]" /> Form continuous edible films
                </li>
                <li className="flex items-center gap-3 text-ink/80">
                  <div className="w-2 h-2 rounded-full bg-[#17726d]" /> Degrade naturally without residue
                </li>
                <li className="flex items-center gap-3 text-ink/80">
                  <div className="w-2 h-2 rounded-full bg-[#17726d]" /> Maintain safety under global food contact standards
                </li>
              </ul>
              <p className="text-lg text-ink/75 leading-relaxed">
                We design formulations by tuning molecular structure to balance flexibility, barrier strength, and stability under humid conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SUMMARIZED MOLECULAR PROPERTIES */}
      <section className="py-24 bg-slate-50 border-t border-border">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <SectionLabel>Scientific Focus</SectionLabel>
            <h2 className="font-serif text-3xl md:text-4xl mt-4 font-bold text-ink">Core Performance Metrics</h2>
            <p className="mt-4 text-ink/75">Our validation program focuses on six key areas to ensure practical value and safety across supply chains.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 reveal">
            {PROPS.map(({ icon: Icon, t, d }) => (
              <div key={t} className="bg-white p-6 rounded-2xl border border-border shadow-sm hover:-translate-y-1 transition-transform">
                <div className="w-10 h-10 rounded-xl bg-[#17726d]/10 flex items-center justify-center text-[#17726d] mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-ink mb-2">{t}</h3>
                <p className="text-sm text-ink/70 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUMMARIZED VALIDATION & TIMELINE */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                <img src={hero} alt="Workers applying Everipe spray" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <div className="reveal">
              <SectionLabel>Application Process</SectionLabel>
              <h2 className="font-serif text-3xl md:text-4xl mt-5 font-bold text-ink mb-8">
                Fast, integrated treatment.
              </h2>
              
              <div className="space-y-6">
                {STEPS.map((step) => (
                  <div key={step.num} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full border-2 border-[#17726d] flex items-center justify-center text-[#17726d] font-bold shrink-0">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="font-bold text-ink text-lg">{step.label}</h4>
                      <p className="text-ink/65 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUMMARIZED SAFETY & DATA ROOM */}
      <section className="py-24 bg-[#17726d] text-white">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center reveal">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 border border-white/20 text-white uppercase mb-6">
              <ShieldCheck className="w-3.5 h-3.5" /> Safety & Compliance
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-6">
              Rigorous safety reviews before public claims.
            </h2>
            <div className="space-y-3 mb-10">
              {[
                "Ingredient-level formulation review",
                "Sensory checks (flavor, texture, scent)",
                "Safe worker handling protocols",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white/80" />
                  <span className="text-white/90">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
             <div className="bg-white/10 border border-white/20 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-2">
                  <FlaskConical className="w-6 h-6 text-white/80" />
                  <h4 className="font-bold text-xl">TAEC Validation Protocol</h4>
                </div>
                <p className="text-white/70 text-sm">Trial design for treated lots and measurement windows.</p>
             </div>
             <div className="bg-white/10 border border-white/20 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-2">
                  <Activity className="w-6 h-6 text-white/80" />
                  <h4 className="font-bold text-xl">Crop Trial Summaries</h4>
                </div>
                <p className="text-white/70 text-sm">Partner-specific results from field and packhouse pilots.</p>
             </div>
          </div>
        </div>
      </section>
      
      {/* TECH CTA */}
      <section className="py-20 bg-forest text-white text-center">
        <div className="container-x reveal">
          <h2 className="font-serif text-3xl md:text-4xl mb-8 font-bold">Access the Partner Data Room</h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-forest font-bold hover:scale-105 transition-transform"
          >
            Discuss a Validation Pilot <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
