import { Outlet, createFileRoute, Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import bloomy from "@/assets/bloomy-flowers.jpg";
import veggie from "@/assets/veggie-vegetables.jpg";
import fruity from "@/assets/fruity-fruits.jpg";
import { VariantCarousel } from "@/components/VariantCarousel";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Bloomy, Veggie, Fruity | Everipe" },
      { name: "description", content: "Three product lines. Variety-specific protective coatings across flowers, vegetables, and fruits." },
    ],
  }),
  component: ProductsLayout,
});

function ProductsLayout() {
  const path = useRouterState({ select: (state) => state.location.pathname });
  return path === "/products" || path === "/products/" ? <Products /> : <Outlet />;
}

function Products() {
  return (
    <>
      <section className="bg-forest text-white pt-40 pb-28 md:pb-36">
        <div className="container-x">
          <span className="label-eyebrow text-white/60">Products</span>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-[8.5rem] mt-5 max-w-5xl leading-[0.95]">
            Protective Shields for Peak Freshness.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-white/70 max-w-2xl">
            Three product lines. Variety-specific formulation. One mission—keep harvests fresh, longer.
          </p>
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl">
            <div><div className="font-serif text-4xl md:text-5xl">3</div><div className="text-white/60 text-sm mt-1">Product lines</div></div>
            <div><div className="font-serif text-4xl md:text-5xl">10</div><div className="text-white/60 text-sm mt-1">Crop varieties</div></div>
            <div><div className="font-serif text-4xl md:text-5xl">100%</div><div className="text-white/60 text-sm mt-1">Plant-derived</div></div>
          </div>
        </div>
      </section>

      {/* BLOOMY */}
      <section className="bg-cream py-28 md:py-36">
        <div className="container-x grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 aspect-[4/3] rounded-3xl overflow-hidden reveal border border-border shadow-md">
            <img src={bloomy} alt="Cut flowers being sprayed with Everipe protective mist" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="md:col-span-5 reveal">
            <span className="label-eyebrow text-teal">Bloomy · Cut Flowers</span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl mt-4 leading-[1.02]">Protect flower flights. Perfect turgor.</h2>
            <p className="mt-6 text-lg text-ink/70">A vase-life extension coating designed for flight transit—protects petals and foliage during airport delays and cabin dehydration.</p>
            <ul className="mt-7 space-y-3 text-ink/80">
              {["+40% vase life", "−85% tarmac heat damage", "+14d display buffer", "Retains premium stem turgor"].map(b => (
                <li key={b} className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-teal mt-2.5" />{b}</li>
              ))}
            </ul>
            <Link to="/products/$slug" params={{ slug: "cut-flowers" }} className="btn-primary mt-8">Explore Cut Flowers <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      {/* VEGGIE */}
      <section className="bg-cream py-28 md:py-36 border-t border-border">
        <div className="container-x">
          <div className="max-w-3xl reveal">
            <span className="label-eyebrow text-teal">Veggie · Fresh Vegetables</span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl mt-4 leading-[1.02]">Extend shelf life. Eliminate pathogens.</h2>
            <p className="mt-6 text-lg text-ink/70 max-w-xl">A 70% shelf-life extension across our vegetable line. Tap any variety to view shelf-life data and applications.</p>
          </div>
          <VariantCarousel
            lineLabel="Veggie"
            items={[
              { slug: "veggie-tomato", name: "Veggie Tomato", img: veggie },
              { slug: "veggie-kali", name: "Veggie Kali", img: veggie },
              { slug: "veggie-cucumber", name: "Veggie Cucumber", img: veggie },
              { slug: "veggie-hoho", name: "Veggie Hoho", img: veggie },
              { slug: "veggie-bean", name: "Veggie Bean", img: veggie },
            ]}
          />
        </div>
      </section>

      {/* FRUITY */}
      <section className="bg-cream py-28 md:py-36 border-t border-border">
        <div className="container-x">
          <div className="max-w-3xl reveal">
            <span className="label-eyebrow text-teal">Fruity · Fresh Fruits</span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl mt-4 leading-[1.02]">Variety-specific protection.</h2>
            <p className="mt-6 text-lg text-ink/70 max-w-xl">3× longer shelf life across our fruit line. Tap any variety to view shelf-life data and applications.</p>
          </div>
          <VariantCarousel
            lineLabel="Fruity"
            items={[
              { slug: "fruity-avo", name: "Fruity Avo", img: fruity },
              { slug: "fruity-ananas", name: "Fruity Ananas", img: fruity },
              { slug: "fruity-papaya", name: "Fruity Papaya", img: fruity },
              { slug: "fruity-apples", name: "Fruity Apples", img: fruity },
            ]}
          />
        </div>
      </section>

      {/* DUAL CTA */}
      <section className="grid md:grid-cols-2 border-t border-border">
        <div className="bg-cream py-24 md:py-32 px-8 md:px-16 text-center md:text-left border-r border-border">
          <h3 className="font-serif text-3xl md:text-4xl text-ink">Ready to extend your supply chain's window?</h3>
          <Link to="/contact" className="btn-primary mt-8">Request a Product Trial <ArrowRight className="w-4 h-4" /></Link>
        </div>
        <div className="bg-ink py-24 md:py-32 px-8 md:px-16 text-white text-center md:text-left">
          <h3 className="font-serif text-3xl md:text-4xl text-white">Ready to reduce postharvest loss?</h3>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-white text-ink font-medium hover:bg-cream">Schedule a Consultation <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </>
  );
}
