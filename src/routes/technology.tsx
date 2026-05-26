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
  Cpu 
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
      <section className="relative min-h-[95vh] flex items-center pt-32 pb-24 overflow-hidden bg-[#17726d] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),transparent_50%)]" />
        <img 
          src={macro} 
          alt="Macro view of biotech protective coating on produce" 
          className="absolute inset-0 w-full h-full object-cover opacity-35" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#17726d] via-[#17726d]/90 to-transparent" />
        <div className="container-x relative text-white max-w-6xl z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider bg-white/10 border border-white/20 text-white uppercase mb-6 backdrop-blur-sm">
            <FlaskConical className="w-3.5 h-3.5 text-white" /> Polymer Physics & Biotechnology
          </span>
          <h1 className="font-serif font-bold text-5xl md:text-7xl lg:text-[5.5rem] mt-4 leading-[0.95] tracking-tight text-white">
            Science that works <br />
            when <span className="text-white underline decoration-white/30">infrastructure fails.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed">
            TAEC (Thermal Adaptive Edible Coating) is a molecular protective shield. By applying a 1.2-micrometer biopolymer layer, we regulate crop respiration directly at the surface—eliminating the need for energy-intensive refrigerated transport.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#molecular-mechanics" className="px-6 py-3.5 rounded-full text-sm font-semibold bg-white text-[#17726d] hover:bg-white/95 transition-all duration-300 shadow-md inline-flex items-center gap-2">Explore Polymer Mechanics <ArrowRight className="w-4 h-4" /></a>
            <a href="#performance-metrics" className="px-6 py-3.5 rounded-full text-sm font-semibold border border-white/30 text-white hover:bg-white/10 transition-all duration-300 inline-flex items-center gap-2">View Validation Data</a>
          </div>
        </div>
      </section>

      {/* MOLECULAR MECHANICS & THERMAL ADAPTABILITY (DEEP TECH SPOTLIGHT) */}
      <section id="molecular-mechanics" className="py-28 md:py-36 bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Polymer physics explanation */}
            <div className="lg:col-span-6 reveal">
              <span className="label-eyebrow text-[#17726d]">Molecular Mechanics</span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight mt-5 text-ink font-bold">
                The science of a <span className="text-[#17726d]">smart thermal membrane.</span>
              </h2>
              <p className="mt-6 text-lg text-ink/75 leading-relaxed">
                Unlike static wax barriers or plastic wraps, Everipe TAEC behaves like a living, breathable membrane. Derived entirely from plant polysaccharides, the biopolymer matrix reacts dynamically to temperature shifts in the supply chain.
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-[#17726d]/10 border border-[#17726d]/20 flex items-center justify-center text-[#17726d] shrink-0 mt-1">
                    <Thermometer className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-ink font-bold">High Temperatures: Swelling Matrix</h4>
                    <p className="text-sm text-ink/65 mt-1 leading-relaxed">
                      As heat climbs, the biopolymer chains undergo molecular swelling, naturally constricting the membrane's microscopic pores. This limits oxygen intake precisely when the crop's metabolic rate tries to accelerate, preventing rapid decay.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-[#17726d]/10 border border-[#17726d]/20 flex items-center justify-center text-[#17726d] shrink-0 mt-1">
                    <RefreshCw className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-ink font-bold">Cool Temperatures: Pores Relax</h4>
                    <p className="text-sm text-ink/65 mt-1 leading-relaxed">
                      In cooler environments, the matrix relaxes and contracts, expanding pore sizes. This allows normal gas diffusion and completely prevents anaerobic fermentation, ensuring the produce breathes healthily and retains its natural flavor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column: Lab Tech Specs Sheet (Glowing Console Dashboard) */}
            <div className="lg:col-span-6 reveal">
              <div className="bg-[#17726d] text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                
                <div className="flex items-center gap-3 border-b border-white/15 pb-5 mb-6">
                  <span className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white">
                    <Cpu className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="text-[10px] text-white/70 uppercase tracking-widest font-mono block">Biopolymer Terminal</span>
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
                    <div key={i} className="flex justify-between gap-4 border-b border-white/10 pb-3">
                      <span className="text-white/60 shrink-0">{spec.label}</span>
                      <span className="text-white font-bold text-right">{spec.val}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 flex items-center justify-between bg-white/10 border border-white/15 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                    <span className="text-xs text-white font-mono">Polymer System: STABLE</span>
                  </div>
                  <span className="text-[10px] text-white/50 font-mono">V.2.4-AMB</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PERFORMANCE VISUALIZER / SHELF LIFE COMPARISON DATA */}
      <section id="performance-metrics" className="py-24 md:py-32 bg-white border-t border-border">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            <div className="lg:col-span-5 reveal">
              <SectionLabel>Scientific Validation</SectionLabel>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight mt-5 text-ink font-bold">
                Data-driven <span className="text-[#17726d]">preservation metrics.</span>
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
                  <div key={i} className="bg-white p-5 rounded-2xl border border-border shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <stat.icon className="w-5 h-5 text-[#17726d]" />
                      <span className="font-bold text-sm text-ink">{stat.label}</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-ink/65">Coated with Everipe</span>
                        <span className="font-bold text-[#17726d]">{stat.coated}</span>
                      </div>
                      <div className="w-full bg-[#17726d]/10 h-2 rounded-full overflow-hidden">
                        <div className="bg-[#17726d] h-full rounded-full" style={{ width: stat.coated }} />
                      </div>
                      <div className="flex justify-between items-center text-xs mt-1">
                        <span className="text-ink/65">Uncoated (Control Group)</span>
                        <span className="font-bold text-slate-500">{stat.uncoated}</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-slate-400 h-full rounded-full" style={{ width: stat.uncoated }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-border shadow-xl reveal">
              <div className="flex justify-between items-center mb-8 border-b border-border pb-4">
                <div>
                  <span className="text-xs text-[#17726d] uppercase tracking-widest font-bold">Real-world Study</span>
                  <h3 className="font-serif text-2xl text-ink mt-1 font-bold">Produce Shelf-Life Timeline</h3>
                </div>
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#17726d]/10 text-[#17726d] border border-[#17726d]/20">
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
                  <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-border hover:bg-[#17726d]/5 transition-all duration-300">
                    <div>
                      <h4 className="font-serif text-lg text-ink font-bold">{item.crop}</h4>
                      <span className="text-xs text-ink/55">Preservation window comparison</span>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <div className="text-xs text-slate-400">Without Cold Chain</div>
                        <div className="text-sm font-semibold text-slate-400 line-through">{item.standard}</div>
                      </div>
                      <div className="text-[#17726d] text-xl font-bold flex items-center justify-center">→</div>
                      <div className="text-right">
                        <div className="text-xs text-[#17726d] font-bold">With Everipe</div>
                        <div className="text-base font-bold text-[#17726d]">{item.everipe}</div>
                      </div>
                      <div className="px-3 py-1 rounded bg-[#17726d]/10 border border-[#17726d]/20 text-[#17726d] text-sm font-bold">
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

      {/* MOLECULAR PROPERTIES - FLAGSHIP GREEN BIOTECH GRID */}
      <section id="molecular-properties" className="py-28 md:py-36 bg-[#17726d] text-white">
        <div className="container-x">
          <div className="max-w-3xl mb-20 reveal">
            <span className="label-eyebrow text-white/80">Scientific Mechanism</span>
            <h2 className="font-serif text-4xl md:text-6xl mt-5 text-white font-bold">
              Six properties. <br />
              <span className="text-white underline decoration-white/20">One simple spray.</span>
            </h2>
            <p className="mt-4 text-white/80 text-lg leading-relaxed">
              TAEC alters the physical boundaries of fresh produce at a molecular scale, slowing chemical degradation while preserving cell structure.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROPS.map(({ icon: Icon, stat, t, d }, i) => (
              <div 
                key={t} 
                className="group relative bg-white/10 border border-white/20 rounded-3xl p-8 hover:bg-white/15 hover:border-white/30 transition-all duration-300 reveal shadow-md"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#17726d] transition-all duration-300">
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </span>
                  <div className="font-serif text-5xl font-bold text-white">
                    {stat}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 tracking-tight text-white">{t}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{d}</p>
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
            <h2 className="font-serif text-4xl md:text-5xl mt-5 text-ink font-bold">
              Five steps. <span className="text-[#17726d]">Ten minutes.</span>
            </h2>
            <p className="mt-4 text-ink/65 text-lg">
              Applying Everipe TAEC requires zero complex machinery, training, or specialized climate-controlled environments.
            </p>
          </div>
          
          {/* Horizontal timeline track on large screens, vertical list on mobile */}
          <div className="relative grid md:grid-cols-5 gap-8 mb-20 reveal">
            {/* Connecting dashed line in desktop layout */}
            <div className="hidden md:block absolute top-7 left-12 right-12 h-0.5 border-t border-dashed border-[#17726d]/20 z-0" />
            
            {STEPS.map((step, i) => (
              <div key={step.num} className="relative z-10 group">
                <div className="w-14 h-14 rounded-full bg-white border border-[#17726d] flex items-center justify-center font-serif text-2xl text-[#17726d] font-bold group-hover:bg-[#17726d] group-hover:text-white group-hover:border-[#17726d] transition-all duration-300 shadow-md">
                  {step.num}
                </div>
                <h3 className="font-serif text-xl font-bold mt-6 mb-2 text-ink group-hover:text-[#17726d] transition-colors duration-300">{step.label}</h3>
                <p className="text-ink/65 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="aspect-[21/9] rounded-3xl overflow-hidden p-2 bg-slate-50 border border-border shadow-xl reveal">
            <img 
              src={hero} 
              alt="Workers applying Everipe spray in an East African packhouse" 
              loading="lazy" 
              className="w-full h-full object-cover rounded-2xl" 
            />
          </div>
        </div>
      </section>

      {/* VALIDATION & REGULATORY - SAFETY & COMPLIANCE */}
      <section className="py-28 md:py-36 bg-white border-t border-border">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 reveal">
              <span className="label-eyebrow text-[#17726d]">Safety & Toxicology</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-5 font-bold text-ink leading-tight">
                100% food-safe.<br />
                Globally compliant.
              </h2>
              <p className="mt-6 text-ink/75 leading-relaxed text-lg">
                Everipe TAEC has been rigorously evaluated under rigorous agricultural protocols, academic lab trials, and commercial shipping operations across East Africa and Europe.
              </p>
              <div className="mt-8 flex flex-col gap-4">
                {[
                  "Co-designed with East African crop research stations",
                  "Aligned with EU and FDA produce import policies",
                  "Verified zero flavor, scent, or color alterations"
                ].map((pt, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#17726d] shrink-0 mt-0.5" />
                    <span className="text-sm text-ink/80 font-medium">{pt}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 reveal">
              {[
                { title: "FDA GRAS Designated", desc: "Formulated using exclusively plant-based polysaccharides and lipids designated as Generally Recognized as Safe (GRAS) under FDA guidelines." },
                { title: "EU Food-Contact Authorized", desc: "Fully approved under European Union food safety standards (Regulation (EC) No 1935/2004) for direct application on agricultural exports." },
                { title: "Zero Chemical Residue", desc: "100% organic, synthetic-chemical-free plant biopolymer formulation that leaves absolute zero toxic residue on crops." },
                { title: "Soil Assimilation", desc: "The bio-protective matrix completely degrades naturally into soil nutrients within 14 days post-consumption." },
                { title: "Hypoallergenic Shield", desc: "100% free from nuts, soy, gluten, or animal derivatives. Taste-free, odorless, and completely invisible." },
                { title: "Operational Safety", desc: "Classified as non-hazardous. Farm workers apply it via standard spray lines with zero need for specialized PPE masks." }
              ].map((p, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-border hover:border-[#17726d]/30 hover:-translate-y-1 transition-all duration-300 shadow-sm flex flex-col justify-between">
                  <h4 className="font-serif text-base font-bold text-ink mb-2">{p.title}</h4>
                  <p className="text-xs text-ink/65 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* TECH CTA - UPGRADED BIOTECH DOCUMENT HUB */}
      <section className="relative py-32 bg-[#17726d] text-white overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="container-x relative max-w-6xl reveal z-10 grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider bg-white/10 border border-white/20 text-white uppercase mb-6 backdrop-blur-sm">
              <FlaskConical className="w-3.5 h-3.5 text-white" /> Institutional Repository
            </span>
            <h2 className="font-serif text-4xl md:text-6xl mt-5 font-bold leading-tight text-white">
              Read the science <br />
              behind <span className="text-white underline decoration-white/30">Everipe TAEC.</span>
            </h2>
            <p className="mt-6 text-white/80 text-lg leading-relaxed">
              Our peer-reviewed white papers, laboratory validation records, and multi-season agronomic field studies are open for institutional partners, commercial growers, and academic researchers.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/our-story" className="px-6 py-3.5 rounded-full text-sm font-semibold bg-white text-[#17726d] hover:bg-white/95 transition-all duration-300 shadow-md inline-flex items-center gap-2">Access Research Library <ArrowRight className="w-4 h-4" /></Link>
              <Link to="/contact" className="px-6 py-3.5 rounded-full text-sm font-semibold border border-white/30 text-white hover:bg-white/10 transition-all duration-300 inline-flex items-center gap-2">Request Safety Briefing</Link>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            {[
              {
                title: "STEC Biopolymer Matrix Dynamics",
                desc: "Study of polysaccharide-lipid matrix physics and gaseous transfer rates under extreme flight and ground thermal strain.",
                stat: "14 pages · PDF",
                badge: "Whitepaper",
                icon: FlaskConical
              },
              {
                title: "East Africa Field Trials & Vase-Life",
                desc: "Agronomic field trial data demonstrating 3.5× shelf-life extensions and turgor retention in cut flowers and export mangoes.",
                stat: "24 pages · PDF · 2025",
                badge: "Field Study",
                icon: Activity
              },
              {
                title: "FDA GRAS & EU Regulatory Memo",
                desc: "Full toxicology profiles, safe application parameters, and formal international safety compliance classifications.",
                stat: "8 pages · PDF",
                badge: "Compliance Brief",
                icon: ShieldCheck
              }
            ].map((doc, idx) => (
              <div key={idx} className="group/card bg-white/10 border border-white/15 hover:border-white/35 rounded-2xl p-5 hover:bg-white/15 transition-all duration-300 shadow-lg cursor-pointer">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono bg-white/15 border border-white/20 text-white uppercase font-bold mb-2">
                      {doc.badge}
                    </span>
                    <h4 className="font-serif text-lg text-white font-bold group-hover/card:text-white transition-colors duration-300">{doc.title}</h4>
                    <p className="text-xs text-white/70 mt-1 leading-relaxed">{doc.desc}</p>
                    <span className="text-[10px] text-white/40 font-mono mt-3 block">{doc.stat}</span>
                  </div>
                  <span className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white/60 group-hover/card:bg-white group-hover/card:text-[#17726d] group-hover/card:border-white transition-all duration-300 shrink-0">
                    <doc.icon className="w-4 h-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
