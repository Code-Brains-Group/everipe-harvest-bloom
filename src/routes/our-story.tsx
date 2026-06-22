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
      {
        name: "description",
        content:
          "From a Kenyan farm paradox to a plant-based coating being developed for postharvest protection.",
      },
    ],
  }),
  component: Story,
});

function Story() {
  return (
    <>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src={aerial}
          alt="Aerial view of Kenyan farmland at golden hour"
          className="absolute inset-0 w-full h-full object-cover"
        />
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
            <img
              src={farm}
              alt="A Kenyan farmer holding fresh avocados"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="reveal">
            <SectionLabel>Inspired by farmers</SectionLabel>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
              Harvests were growing. <span className="text-teal">Value was disappearing.</span>
            </h2>
            <p className="text-lg text-ink/75 leading-relaxed">
              Growing up in rural Kenya, we saw how much effort it takes to grow food. Families invested months of labor, money, and hope into each season, often depending on a single harvest to pay for school fees and basic needs. When the fields finally produced well, it felt like things were changing for the better. But after harvest, a different reality set in. Without reliable storage, cooling, or fast access to markets, a large share of fresh produce would spoil before reaching buyers. Fruit that represented months of work would sometimes rot along roadsides or at collection points, especially when transport delays or market gluts occurred. The problem was not production—it was what happened after harvest. We started this work because that loss felt unnecessary. It is not just wasted food; it is lost income for farmers, wasted land and water, and missed opportunities for rural communities. Our focus is postharvest preservation, where small improvements can have large impacts. We are developing science-based technologies that help fresh produce stay stable for longer as it moves through real supply chains, especially in environments where cold storage is limited or unreliable. We are also exploring ways to convert agricultural waste into useful materials that can help protect harvested crops, turning a local problem into part of the solution. Our goal is simple: reduce avoidable food loss and help farmers capture more value from what they already grow.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-teal text-white py-32 md:py-40 text-center">
        <div className="container-x reveal">
          <h2 className="font-serif text-4xl md:text-7xl leading-tight max-w-4xl mx-auto">
            The problem was not growing more. It was keeping harvests valuable long enough to sell.
          </h2>
          <p className="mt-8 max-w-2xl mx-auto text-white/75 text-lg">
            No cold storage. Long, broken roads. Middlemen with the only trucks. Farmers had hours,
            not days, to sell.
          </p>
        </div>
      </section>

      <section className="py-32 md:py-44 bg-cream text-center">
        <div className="container-x max-w-4xl reveal">
          <p className="font-serif text-3xl md:text-5xl leading-tight">
            "What if protection could be as simple as <span className="text-teal">a spray?"</span>
          </p>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-white">
        <div className="container-x grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden reveal">
            <img
              src={macro}
              alt="Macro view of TAEC coating on produce"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="reveal">
            <SectionLabel>The answer</SectionLabel>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
              It was <span className="text-teal">TAEC.</span>
            </h2>
            <p className="text-lg text-ink/75 mb-5">
              A practical coating approach for places where cold storage is limited, expensive, or
              inconsistent.
            </p>
            <p className="text-lg text-ink/75">
              We are developing and validating a plant-based layer that can help crops tolerate real
              supply chain stress.
            </p>
            <Link to="/technology" className="btn-primary mt-10 inline-flex">
              See how it works <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-28 bg-forest text-white text-center">
        <div className="container-x reveal">
          <h2 className="font-serif text-4xl md:text-5xl mb-10">Want to be part of it?</h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-forest font-medium"
          >
            Partner With Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
