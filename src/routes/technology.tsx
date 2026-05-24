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
  CheckCircle2, 
  Activity, 
  Clock, 
  RefreshCw,
  Cpu, 
  ShieldAlert, 
  Settings 
} from "lucide-react";
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
  { icon: Droplet, stat: "60%", t: "Moisture Lock", d: "Reduces water loss and weight shrinkage across the entire ripening curve." },
  { icon: Wind, stat: "3×", t: "Gas Exchange Control", d: "Slows respiration, keeping produce in a suspended 'sleep' state." },
  { icon: ShieldCheck, stat: "GRAS", t: "Fully Edible", d: "Generally Recognised as Safe by the FDA. Completely tasteless and organic." },
  { icon: Leaf, stat: "100%", t: "Plant-Derived", d: "Biopolymer base made from agricultural side-streams, not fossil waxes." },
  { icon: Bug, stat: "85%", t: "Antimicrobial", d: "Acts as a sterile boundary layer that halts fungal spores and decay." },
  { icon: Thermometer, stat: "Adaptive", t: "Thermal Response", d: "Pore sizes change dynamically in response to hot real-world supply chain climates." },
];

const STEPS = [
  { num: "01", label: "Harvest", desc: "Crops are harvested at normal commercial maturity." },
  { num: "02", label: "Dilute", desc: "Everipe powder is diluted in standard packhouse water." },
  { num: "03", label: "Spray", desc: "Applied via standard packing lines or manual backpack sprayers." },
  { num: "04", label: "Dry 10 mins", desc: "Rapidly dries at ambient air temperatures, forming a micro-shield." },
  { num: "05", label: "Store normally", desc: "No cooling or diesel refrigeration required for transit." },
];

function Tech() {
  return (
    <>
      {/* TECH HERO */}
      <section className="relative min-h-[95vh] flex items-center pt-32 pb-24 overflow-hidden bg-ink">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(20,184,166,0.12),transparent_50%)]" />
        <img 
          src={macro} 
          alt="Macro view of biotech protective coating on produce" 
          className="absolute inset-0 w-full h-full object-cover opacity-50" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-transparent" />
        <div className="container-x relative text-white max-w-6xl z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider bg-teal/10 border border-teal/30 text-teal uppercase mb-6 backdrop-blur-sm">
            <FlaskConical className="w-3.5 h-3.5 text-teal" /> Polymer Physics & Biotechnology
          </span>
          <h1 className="font-serif font-bold text-5xl md:text-7xl lg:text-[5.5rem] mt-4 leading-[0.95] tracking-tight">
            Science that works <br />
            when <span className="text-teal">infrastructure fails.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed">
            TAEC (Thermal Adaptive Edible Coating) is a molecular protective shield. By applying a 1.2-micrometer biopolymer layer, we regulate crop respiration directly at the surface—eliminating the need for energy-intensive refrigerated transport.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#molecular-mechanics" className="btn-primary">Explore Polymer Mechanics <ArrowRight className="w-4 h-4" /></a>
            <a href="#performance-metrics" className="btn-outline text-white border-white/20 hover:border-teal">View Validation Data</a>
          </div>
        </div>
      </section>

      {/* NEW: MOLECULAR MECHANICS & THERMAL ADAPTABILITY (DEEP TECH SPOTLIGHT) */}
      <section id="molecular-mechanics" className="py-28 md:py-36 bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Polymer physics explanation */}
            <div className="lg:col-span-6 reveal">
              <span className="label-eyebrow text-teal">Molecular Mechanics</span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight mt-5">
                The science of a <span className="text-teal">smart thermal membrane.</span>
              </h2>
              <p className="mt-6 text-lg text-ink/75 leading-relaxed">
                Unlike static wax barriers or plastic wraps, Everipe TAEC behaves like a living, breathable membrane. Derived entirely from plant polysaccharides, the biopolymer matrix reacts dynamically to temperature shifts in the supply chain.
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-500 shrink-0 mt-1">
                    <Thermometer className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-ink">High Temperatures: Swelling Matrix</h4>
                    <p className="text-sm text-ink/65 mt-1 leading-relaxed">
                      As heat climbs, the biopolymer chains undergo molecular swelling, naturally constricting the membrane's microscopic pores. This limits oxygen intake precisely when the crop's metabolic rate tries to accelerate, preventing rapid decay.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center text-teal shrink-0 mt-1">
                    <RefreshCw className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-ink">Cool Temperatures: Pores Relax</h4>
                    <p className="text-sm text-ink/65 mt-1 leading-relaxed">
                      In cooler environments, the matrix relaxes and contracts, expanding pore sizes. This allows normal gas diffusion and completely prevents anaerobic fermentation, ensuring the produce breathes healthily and retains its natural flavor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column: Lab Tech Specs Sheet (Glowing Console Dashboard) */}
            <div className="lg:col-span-6 reveal">
              <div className="bg-ink text-white rounded-3xl p-8 border border-white/10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal/5 rounded-full blur-3xl" />
                
                <div className="flex items-center gap-3 border-b border-white/10 pb-5 mb-6">
                  <span className="w-8 h-8 rounded-lg bg-teal/20 border border-teal/40 flex items-center justify-center text-teal">
                    <Cpu className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="text-[10px] text-teal uppercase tracking-widest font-mono block">Biopolymer Terminal</span>
                    <h3 className="font-serif text-xl font-bold">TAEC Technical Blueprint</h3>
                  </div>
                </div>
                
                <div className="space-y-4 font-mono text-xs">
                  {[
                    { label: "Active Compound", val: "Polysaccharide-Lipid Biopolymer Complex" },
                    { label: "Coating Thickness", val: "1.2 Micrometers (Invisible / Tasteless)" },
                    { label: "Matrix Density", val: "1.34 g/cm³ (Solid-phase membrane)" },
                    { label: "Gas Selection Ratio", val: "Highly permeable to CO₂, selectively restrictive to O₂" },
                    { label: "Thermal Trigger Range", val: "Triggers dynamic pore constriction from 18°C to 38°C" },
                    { label: "Degradation Profile", val: "100% Soil-assimilated within 14 days post-consumption" },
                    { label: "Application Mechanics", val: "Electrostatic atomized aqueous spray (packhouse lines)" }
                  ].map((spec, i) => (
                    <div key={i} className="flex justify-between gap-4 border-b border-white/5 pb-3">
                      <span className="text-white/40 shrink-0">{spec.label}</span>
                      <span className="text-teal font-medium text-right">{spec.val}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 flex items-center justify-between bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-teal animate-pulse" />
                    <span className="text-xs text-white/80 font-mono">Polymer System: STABLE</span>
                  </div>
                  <span className="text-[10px] text-white/40 font-mono">V.2.4-AMB</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PERFORMANCE VISUALIZER / SHELF LIFE COMPARISON DATA */}
      <section id="performance-metrics" className="py-24 md:py-32 bg-cream border-t border-ink/5">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            <div className="lg:col-span-5 reveal">
              <SectionLabel>Scientific Validation</SectionLabel>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight mt-5">
                Data-driven <span className="text-teal">preservation metrics.</span>
              </h2>
              <p className="mt-6 text-ink/75 leading-relaxed text-lg">
                By regulating respiration rates, TAEC delays organic degradation. The visualizer shows produce performance metrics under ambient temperatures (25°C / 77°F).
              </p>
              
              <div className="mt-8 space-y-6">
                {[
                  { label: "Respiration Rate (Lower is better)", coated: "22%", uncoated: "85%", icon: Activity },
                  { label: "Moisture Retention (Higher is better)", coated: "94%", uncoated: "42%", icon: Droplet },
                  { label: "Pathogen Resistance (Higher is better)", coated: "88%", uncoated: "15%", icon: Bug }
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-5 rounded-2xl border border-ink/5 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <stat.icon className="w-5 h-5 text-teal" />
                      <span className="font-semibold text-sm text-ink">{stat.label}</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-ink/65">Coated with Everipe</span>
                        <span className="font-semibold text-teal">{stat.coated}</span>
                      </div>
                      <div className="w-full bg-ink/5 h-2 rounded-full overflow-hidden">
                        <div className="bg-teal h-full rounded-full" style={{ width: stat.coated }} />
                      </div>
                      <div className="flex justify-between items-center text-xs mt-1">
                        <span className="text-ink/65">Uncoated (Control Group)</span>
                        <span className="font-semibold text-ink/80">{stat.uncoated}</span>
                      </div>
                      <div className="w-full bg-ink/5 h-2 rounded-full overflow-hidden">
                        <div className="bg-ink/30 h-full rounded-full" style={{ width: stat.uncoated }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-ink/5 shadow-xl reveal">
              <div className="flex justify-between items-center mb-8 border-b border-ink/10 pb-4">
                <div>
                  <span className="text-xs text-ink/50 uppercase tracking-widest font-semibold">Real-world Study</span>
                  <h3 className="font-serif text-2xl text-ink mt-1">Produce Shelf-Life Timeline</h3>
                </div>
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-forest/10 text-forest border border-forest/20">
                  Ambient Temperature (25°C)
                </span>
              </div>
              
              <div className="space-y-6">
                {[
                  { crop: "Avocados", standard: "10-12 Days", everipe: "35-40 Days", factor: "3.5×" },
                  { crop: "Mangos", standard: "8-10 Days", everipe: "28-32 Days", factor: "3.2×" },
                  { crop: "Cut Flowers", standard: "7-9 Days", everipe: "21-25 Days", factor: "3.0×" },
                  { crop: "Tomatoes", standard: "6-8 Days", everipe: "20-24 Days", factor: "3.1×" }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-ink/5 hover:bg-cream/30 transition-all duration-300">
                    <div>
                      <h4 className="font-serif text-lg text-ink font-semibold">{item.crop}</h4>
                      <span className="text-xs text-ink/55">Preservation window comparison</span>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <div className="text-xs text-ink/50">Without Cold Chain</div>
                        <div className="text-sm font-semibold text-ink/75 line-through">{item.standard}</div>
                      </div>
                      <div className="text-teal text-xl font-bold flex items-center justify-center">→</div>
                      <div className="text-right">
                        <div className="text-xs text-teal font-semibold">With Everipe</div>
                        <div className="text-base font-bold text-teal">{item.everipe}</div>
                      </div>
                      <div className="px-3 py-1 rounded bg-teal/10 border border-teal/20 text-teal text-sm font-bold">
                        {item.factor}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MOLECULAR PROPERTIES - DARK MODE BIOTECH GRID */}
      <section id="molecular-properties" className="py-28 md:py-36 bg-ink text-white">
        <div className="container-x">
          <div className="max-w-3xl mb-20 reveal">
            <span className="label-eyebrow text-teal">Scientific Mechanism</span>
            <h2 className="font-serif text-4xl md:text-6xl mt-5">
              Six properties. <br />
              <span className="text-teal">One simple spray.</span>
            </h2>
            <p className="mt-4 text-white/60 text-lg leading-relaxed">
              TAEC alters the physical boundaries of fresh produce at a molecular scale, slowing chemical degradation while preserving cell structure.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROPS.map(({ icon: Icon, stat, t, d }, i) => (
              <div 
                key={t} 
                className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-teal/50 hover:shadow-[0_0_30px_rgba(20,184,166,0.1)] transition-all duration-500 hover:-translate-y-2 reveal"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="w-12 h-12 rounded-2xl bg-teal/10 border border-teal/20 flex items-center justify-center text-teal group-hover:bg-teal group-hover:text-white transition-colors duration-500">
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </span>
                  <div className="font-serif text-5xl font-bold bg-gradient-to-r from-teal to-teal-accent bg-clip-text text-transparent group-hover:from-white group-hover:to-white transition-all duration-500">
                    {stat}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 tracking-tight">{t}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION PROCESS - INTERACTIVE TIMELINE */}
      <section id="how-it-works" className="py-28 md:py-36 bg-white">
        <div className="container-x">
          <div className="max-w-3xl mb-20 reveal">
            <SectionLabel>Process Timeline</SectionLabel>
            <h2 className="font-serif text-4xl md:text-5xl mt-5">
              Five steps. <span className="text-teal">Ten minutes.</span>
            </h2>
            <p className="mt-4 text-ink/65 text-lg">
              Applying Everipe TAEC requires zero complex machinery, training, or specialized climate-controlled environments.
            </p>
          </div>
          
          {/* Horizontal timeline track on large screens, vertical list on mobile */}
          <div className="relative grid md:grid-cols-5 gap-8 mb-20 reveal">
            {/* Connecting dashed line in desktop layout */}
            <div className="hidden md:block absolute top-7 left-12 right-12 h-0.5 border-t border-dashed border-ink/15 z-0" />
            
            {STEPS.map((step, i) => (
              <div key={step.num} className="relative z-10 group">
                <div className="w-14 h-14 rounded-full bg-cream border border-ink/10 flex items-center justify-center font-serif text-2xl text-teal font-bold group-hover:bg-teal group-hover:text-white group-hover:border-teal transition-all duration-300 shadow-md">
                  {step.num}
                </div>
                <h3 className="font-serif text-xl font-bold mt-6 mb-2 text-ink group-hover:text-teal transition-colors duration-300">{step.label}</h3>
                <p className="text-ink/65 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="aspect-[21/9] rounded-3xl overflow-hidden p-2 bg-cream/30 border border-ink/5 shadow-xl reveal">
            <img 
              src={hero} 
              alt="Workers applying Everipe spray in an East African packhouse" 
              loading="lazy" 
              className="w-full h-full object-cover rounded-2xl" 
            />
          </div>
        </div>
      </section>

      {/* VALIDATION & REGULATORY */}
      <section className="py-28 md:py-36 bg-cream border-t border-ink/5">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 reveal">
              <span className="label-eyebrow text-teal">Compliance</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-5">
                Validated where it <span className="text-teal">matters most.</span>
              </h2>
              <p className="mt-6 text-ink/70 leading-relaxed">
                Everipe coating has been rigorously evaluated in field tests, academic labs, and supply-chain shipping paths across East Africa and Europe.
              </p>
              <div className="mt-8 flex flex-col gap-4">
                {[
                  "Co-designed with East African crop research stations",
                  "Aligned with EU and FDA produce import policies",
                  "Verified zero flavor, scent, or color alterations"
                ].map((pt, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                    <span className="text-sm text-ink/80 font-medium">{pt}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 reveal">
              {[
                { title: "Food-Safe (FDA GRAS)", desc: "Uses natural biopolymers classified as food ingredients." },
                { title: "No Flavor Change", desc: "Allows natural crop flavor profiles to express without alteration." },
                { title: "Allergen-Free", desc: "Formulated without nuts, soy, gluten, or animal derivatives." },
                { title: "Eco-Benign", desc: "100% biodegradable and completely soil-compatible." },
                { title: "No PPE Needed", desc: "Completely safe to apply without masks, gloves, or suits." }
              ].map((p, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-ink/5 hover:border-teal/30 hover:-translate-y-1 transition-all duration-300 shadow-sm flex flex-col justify-between">
                  <h4 className="font-serif text-base font-bold text-ink mb-2">{p.title}</h4>
                  <p className="text-xs text-ink/65 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* TECH CTA */}
      <section className="relative py-32 bg-ink text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal/20 via-forest/10 to-transparent" />
        <div className="container-x relative max-w-3xl reveal z-10">
          <SectionLabel>Request Research</SectionLabel>
          <h2 className="font-serif text-4xl md:text-6xl mt-5">
            Read the science <br />
            behind <span className="text-teal">Everipe TAEC.</span>
          </h2>
          <p className="mt-6 text-white/60 text-lg max-w-xl mx-auto leading-relaxed">
            Our scientific white papers, laboratory validation records, and field study data are available for institutional partners.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link to="/our-story" className="btn-primary">Access Research Library <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
