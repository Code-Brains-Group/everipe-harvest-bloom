import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import hero from "@/assets/home-fruits-veg.png";
import bloomy from "@/assets/bloomy-flowers.jpg";
import veggie from "@/assets/veggie-vegetables.jpg";
import fruity from "@/assets/fruity-fruits.jpg";
import farmer from "@/assets/farmer-happy-produce.jpg";
import port from "@/assets/exporter-port.jpg";
import retail from "@/assets/retailer-produce.jpg";
import aerial from "@/assets/story-aerial.jpg";
import crisisDecay from "@/assets/crisis-decay.png";
import solutionShield from "@/assets/solution-shield.png";
import { SectionLabel } from "@/components/Bits";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Everipe — Plant-Based Postharvest Protection" },
      {
        name: "description",
        content:
          "Everipe is developing a plant-based coating to help fresh produce stay fresher for longer in real-world supply chains.",
      },
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
          alt="Vibrant array of fresh fruits and vegetables protected by Everipe TAEC coating"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-ink/40" />
        <div className="relative container-x pb-20 md:pb-28 pt-32 text-white">
          <div className="max-w-4xl">
            <span className="label-eyebrow text-white/70">
              Climate-tech · Postharvest protection
            </span>
            <h1 className="font-serif font-bold mt-5 text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
              Eliminating food loss through the world’s first thermally adaptive coating.
            </h1>
            <p className="mt-7 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Everipe is validating TAEC with growers, exporters, and retailers who need practical
              postharvest protection in hot, unpredictable supply chains.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/technology" className="btn-primary">
                Explore the Technology <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/our-story" className="btn-outline text-white">
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="py-28 md:py-40 bg-cream">
        <div className="container-x grid md:grid-cols-2 gap-16 md:gap-24">
          <div className="reveal">
            <SectionLabel>Our Mission</SectionLabel>
            <h2 className="font-serif text-2xl md:text-3xl leading-snug">
              To reduce postharvest food loss by 40% through scalable produce stabilization technologies.
            </h2>
          </div>
          <div className="reveal">
            <SectionLabel>Our Vision</SectionLabel>
            <h2 className="font-serif text-2xl md:text-3xl leading-snug">
              A future where every harvested crop reaches its destination with maximum value, quality, and minimal loss.
            </h2>
          </div>
        </div>
      </section>

      {/* PROBLEM STATEMENT / THE CRISIS */}
      <section className="bg-teal text-white py-28 md:py-40">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left Column: Why Now Narrative & Description */}
            <div className="lg:col-span-5 reveal">
              <span className="label-eyebrow text-white/70">The Post-Harvest Crisis</span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mt-5">
                Why Now?
              </h2>
              <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed font-serif">
                Population growth, climate change, and supply chain complexity are converging.
              </p>
              <p className="mt-4 text-white/70 leading-relaxed">
                We cannot solve this with infrastructure alone. Everipe is building and validating a
                practical coating approach for the places where cold storage is limited, costly, or
                inconsistent.
              </p>
            </div>

            {/* Right Column: Visual Showcase of Crisis vs. Solution */}
            <div className="lg:col-span-7 reveal">
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Crisis Card */}
                <div className="relative group rounded-2xl overflow-hidden bg-ink/30 border border-white/10 p-4">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-black/20">
                    <img
                      src={crisisDecay}
                      alt="Food loss crisis: Decaying lemons in transport crates"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="absolute top-6 left-6 px-3 py-1 rounded-full text-xs font-semibold tracking-wider bg-rose-500/90 text-white uppercase backdrop-blur-sm">
                    The Crisis
                  </span>
                  <div className="mt-4">
                    <h4 className="font-serif text-lg text-white">Post-Harvest Waste</h4>
                    <p className="text-xs text-white/60 mt-1 leading-relaxed">
                      High ambient heat and lack of cold storage lead to severe mold proliferation
                      and decay within hours of harvest.
                    </p>
                  </div>
                </div>

                {/* Solution Card */}
                <div className="relative group rounded-2xl overflow-hidden bg-ink/30 border border-white/10 p-4">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-black/20">
                    <img
                      src={solutionShield}
                      alt="Everipe Solution: Shielded fresh avocado and mango"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="absolute top-6 left-6 px-3 py-1 rounded-full text-xs font-semibold tracking-wider bg-teal text-white uppercase backdrop-blur-sm">
                    The Solution
                  </span>
                  <div className="mt-4">
                    <h4 className="font-serif text-lg text-white">Dynamic Protection</h4>
                    <p className="text-xs text-white/60 mt-1 leading-relaxed">
                      Everipe's biopolymer coating is designed to slow the drivers of moisture loss,
                      surface decay, and uneven ripening.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards Band (Interactive Grid at the bottom) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            {[
              {
                value: "$1.2T",
                label: "Lost Annually",
                desc: "Global economic value of post-harvest food waste.",
              },
              {
                value: "1.3B",
                label: "Tons Wasted",
                desc: "Total edible food lost or thrown away every single year.",
              },
              {
                value: "45%",
                label: "Produce Lost",
                desc: "Fruits & vegetables spoiled before ever reaching consumers.",
              },
              {
                value: "+60%",
                label: "More Food Needed",
                desc: "Additional food requirement to feed 10B people by 2050.",
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="font-serif text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <h3 className="text-sm font-semibold text-white/90 mb-1">{stat.label}</h3>
                <p className="text-xs text-white/60 leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR SOLUTION */}
      <section className="py-28 md:py-40 bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6 reveal">
              <SectionLabel>Our Solution</SectionLabel>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight mt-5">
                Adding a protective layer where{" "}
                <span className="text-teal">cold chains break down.</span>
              </h2>
              <p className="mt-6 text-lg text-ink/75 leading-relaxed">
                TAEC is a plant-derived biopolymer coating designed to create a breathable shield
                over fresh produce.
              </p>
              <p className="mt-4 text-lg text-ink/75 leading-relaxed">
                We are validating how it can slow respiration, moisture loss, and surface decay
                under hot, real-world handling conditions.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {[
                  {
                    title: "Breathable Barrier",
                    desc: "Designed to reduce moisture stress without sealing produce completely.",
                    spec: "Pilot focus",
                  },
                  {
                    title: "Crop-Specific Testing",
                    desc: "Each crop and maturity stage needs its own validation protocol.",
                    spec: "Under validation",
                  },
                  {
                    title: "Surface Decay Control",
                    desc: "Aims to slow mold and skin spotting during warm handling windows.",
                    spec: "Measured in trials",
                  },
                  {
                    title: "Safety Review",
                    desc: "Food-contact and sensory checks are part of every partner pilot.",
                    spec: "Partner review",
                  },
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="border border-ink/10 rounded-2xl p-5 hover:border-teal/30 hover:bg-cream/30 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="font-serif text-lg text-ink mb-1.5">{feature.title}</h3>
                      <p className="text-ink/65 text-xs leading-relaxed mb-3">{feature.desc}</p>
                    </div>
                    <span className="inline-flex self-start px-2 py-0.5 rounded text-[10px] font-mono bg-teal/5 border border-teal/20 text-teal uppercase font-bold">
                      {feature.spec}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link to="/technology" className="btn-primary inline-flex">
                  How the Tech Works <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 reveal">
              <div className="bg-cream/40 rounded-3xl p-6 md:p-8 border border-ink/5 flex flex-col items-center">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white flex items-center justify-center p-4">
                  <img
                    src={solutionShield}
                    alt="Illustration of Everipe protection around fresh produce"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="mt-6 text-center">
                  <span className="label-eyebrow text-teal">Validation Roadmap</span>
                  <h4 className="font-serif text-xl mt-2 text-ink">
                    Pilot studies before public performance claims
                  </h4>
                  <p className="text-xs text-ink/65 mt-2 max-w-md leading-relaxed">
                    We are prioritizing controlled crop trials, sensory checks, safety review, and
                    transparent reporting before publishing shelf-life numbers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT LINES */}
      <section className="py-28 md:py-40 bg-cream">
        <div className="container-x">
          <div className="max-w-2xl mb-16 reveal">
            <SectionLabel>Pilot application areas</SectionLabel>
            <h2 className="font-serif text-4xl md:text-6xl">
              One platform. <span className="text-teal">Crop-specific</span> validation.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Bloomy",
                tag: "Cut Flowers",
                desc: "Testing flower freshness through warm handling and transit windows.",
                img: bloomy,
                bg: "bg-bloomy",
                accent: "text-bloomy-accent",
              },
              {
                name: "Veggie",
                tag: "Fresh Vegetables",
                desc: "Assessing moisture retention and surface decay on high-value vegetables.",
                img: veggie,
                bg: "bg-veggie",
                accent: "text-veggie-accent",
              },
              {
                name: "Fruity",
                tag: "Fresh Fruits",
                desc: "Validating crop-specific approaches for peel and rind-protected fruits.",
                img: fruity,
                bg: "bg-fruity",
                accent: "text-fruity-accent",
              },
            ].map((p) => (
              <Link
                key={p.name}
                to="/contact"
                className={`${p.bg} rounded-3xl p-7 flex flex-col gap-6 transition-all duration-300 hover:-translate-y-2 reveal`}
              >
                <div className="flex items-center justify-between">
                  <span className="label-eyebrow text-ink/55">{p.tag}</span>
                  <span className={`${p.accent} text-sm flex items-center gap-1`}>
                    Discuss pilot <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
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


    </>
  );
}

function WhoItsFor() {
  const tabs = [
    {
      id: "farmers",
      label: "Farmers",
      img: farmer,
      h: "Reduce losses. Grow income.",
      pts: [
        "Reduce pressure to sell immediately",
        "Test longer market windows",
        "Model price upside with real harvest data",
      ],
      to: "/farmers",
    },
    {
      id: "exporters",
      label: "Exporters",
      img: port,
      h: "Protect quality through stressful transit.",
      pts: [
        "Measure heat exposure during loading",
        "Test transit buffers lane by lane",
        "Track buyer quality at arrival",
        "Evaluate premium market opportunities",
      ],
      to: "/exporters",
    },
    {
      id: "retailers",
      label: "Retailers",
      img: retail,
      h: "Less shrinkage. Happier shoppers.",
      pts: [
        "Reduce produce shrinkage",
        "Extend display shelf life",
        "Lower storage requirements",
        "Improve customer perception",
      ],
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
            <h2 className="font-serif text-4xl md:text-5xl">
              Whoever keeps food <span className="text-teal">moving.</span>
            </h2>
          </div>
          <div className="flex gap-1 p-1 bg-cream rounded-full self-start">
            {tabs.map((tab, i) => (
              <button
                key={tab.id}
                onClick={() => setActive(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${active === i ? "bg-teal text-white" : "text-ink/60 hover:text-ink"}`}
              >
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
            <Link to={t.to} className="btn-primary mt-10 inline-flex">
              Explore for {t.label} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
