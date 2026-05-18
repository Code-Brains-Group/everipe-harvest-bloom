import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import aerial from "@/assets/story-aerial.jpg";
import farm from "@/assets/farmer-portrait.jpg";
import macro from "@/assets/tech-macro.jpg";
import { SectionLabel } from "@/components/Bits";

export const Route = createFileRoute("/our-story")({
  head: () => ({
    meta: [
      { title: "Our Story — Everipe" },
      { name: "description", content: "From a Kenyan farm paradox to a thermally adaptive coating that protects food across continents." },
    ],
  }),
  component: Story,
});

function Story() {
  return (
    <>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img src={aerial} alt="Aerial view of Kenyan farmland at golden hour" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-ink/30" />
        <div className="relative bg-cream max-w-3xl mx-6 px-10 py-16 md:px-16 md:py-24 rounded-2xl text-center reveal shadow-2xl">
          <span className="label-eyebrow text-teal">Our Story</span>
          <p className="font-serif text-3xl md:text-5xl leading-tight mt-6">
            We're building a world where <span className="text-teal">every harvest counts.</span>
          </p>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-cream">
        <div className="container-x grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden reveal">
            <img src={farm} alt="A Kenyan farmer holding fresh avocados" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="reveal">
            <SectionLabel>Inspired by farmers</SectionLabel>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">Yields increased. <span className="text-teal">But something was still wrong.</span></h2>
            <p className="text-lg text-ink/75 mb-5">We grew up around farms in rural Kenya. We watched yields rise as climate-smart practices spread.</p>
            <p className="text-lg text-ink/75">And we watched income stay flat. Bumper harvests became bumper losses.</p>
          </div>
        </div>
      </section>

      <section className="bg-teal text-white py-32 md:py-40 text-center">
        <div className="container-x reveal">
          <h2 className="font-serif text-4xl md:text-7xl leading-tight max-w-4xl mx-auto">Bumper harvests became losses.</h2>
          <p className="mt-8 max-w-2xl mx-auto text-white/75 text-lg">No cold storage. Long, broken roads. Middlemen with the only trucks. Farmers had hours, not days, to sell.</p>
        </div>
      </section>

      <section className="py-32 md:py-44 bg-cream text-center">
        <div className="container-x max-w-4xl reveal">
          <p className="font-serif text-3xl md:text-5xl leading-tight">"What if protection could be as simple as <span className="text-teal">a spray?"</span></p>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-white">
        <div className="container-x grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden reveal">
            <img src={macro} alt="Macro view of TAEC coating on produce" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="reveal">
            <SectionLabel>The answer</SectionLabel>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">It was <span className="text-teal">TAEC.</span></h2>
            <p className="text-lg text-ink/75 mb-5">No cold chain. No electricity. No specialist training.</p>
            <p className="text-lg text-ink/75">Just spray and store. A plant-based, edible coating that adapts to the temperatures of real supply chains.</p>
            <Link to="/technology" className="btn-primary mt-10 inline-flex">See how it works <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      <section className="py-28 bg-forest text-white text-center">
        <div className="container-x reveal">
          <h2 className="font-serif text-4xl md:text-5xl mb-10">Want to be part of it?</h2>
          <Link to="/our-story" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-forest font-medium">Partner With Us <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </>
  );
}
