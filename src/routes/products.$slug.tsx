import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import veggie from "@/assets/veggie-vegetables.jpg";
import fruity from "@/assets/fruity-fruits.jpg";
import bloomy from "@/assets/bloomy-flowers.jpg";

type Variant = {
  slug: string;
  name: string;
  line: "Bloomy" | "Veggie" | "Fruity";
  img: string;
  shelfLifeUncoated: string;
  shelfLifeCoated: string;
  pathogens: string[];
  application: string;
  notes: string;
};

const VARIANTS: Record<string, Variant> = {
  rose:      { slug: "rose",      name: "Rose",      line: "Bloomy", img: bloomy, shelfLifeUncoated: "7 days",  shelfLifeCoated: "21 days", pathogens: ["Botrytis cinerea", "Pseudomonas"],            application: "Post-harvest dip, 30 seconds", notes: "Maintains turgor and petal colour for sea-freight from Naivasha to Rotterdam." },
  tomato:    { slug: "tomato",    name: "Tomato",    line: "Veggie", img: veggie, shelfLifeUncoated: "10 days", shelfLifeCoated: "24 days", pathogens: ["Alternaria", "Rhizopus"],                     application: "Spray, 8 ml / kg",            notes: "Slows ethylene-driven softening; firmness retained at ambient 22°C." },
  kale:      { slug: "kale",      name: "Kale",      line: "Veggie", img: veggie, shelfLifeUncoated: "4 days",  shelfLifeCoated: "12 days", pathogens: ["Erwinia", "Xanthomonas"],                     application: "Fine mist, 5 ml / kg",        notes: "Reduces yellowing and limpness; chlorophyll preserved." },
  cucumber:  { slug: "cucumber",  name: "Cucumber",  line: "Veggie", img: veggie, shelfLifeUncoated: "8 days",  shelfLifeCoated: "20 days", pathogens: ["Pythium", "Penicillium"],                     application: "Spray, 6 ml / kg",            notes: "Prevents shrivel and skin pitting in non-refrigerated transit." },
  pepper:    { slug: "pepper",    name: "Pepper",    line: "Veggie", img: veggie, shelfLifeUncoated: "9 days",  shelfLifeCoated: "22 days", pathogens: ["Colletotrichum", "Botrytis"],                 application: "Spray, 7 ml / kg",            notes: "Glossy finish retained; reduces stem-end rot." },
  bean:      { slug: "bean",      name: "Bean",      line: "Veggie", img: veggie, shelfLifeUncoated: "5 days",  shelfLifeCoated: "14 days", pathogens: ["Sclerotinia", "Rhizoctonia"],                 application: "Mist, 4 ml / kg",             notes: "Snap-crisp texture maintained; reduced fibre toughening." },
  avocado:   { slug: "avocado",   name: "Avocado",   line: "Fruity", img: fruity, shelfLifeUncoated: "9 days",  shelfLifeCoated: "28 days", pathogens: ["Colletotrichum gloeosporioides"],             application: "Dip, 12 seconds",             notes: "Slows respiration & oil-darkening; ideal for sea-freight to EU/Middle East." },
  pineapple: { slug: "pineapple", name: "Pineapple", line: "Fruity", img: fruity, shelfLifeUncoated: "12 days", shelfLifeCoated: "30 days", pathogens: ["Thielaviopsis", "Penicillium"],               application: "Crown spray, 10 ml / fruit",  notes: "Prevents black rot at the crown; preserves Brix sugars." },
  mango:     { slug: "mango",     name: "Mango",     line: "Fruity", img: fruity, shelfLifeUncoated: "10 days", shelfLifeCoated: "26 days", pathogens: ["Anthracnose", "Stem-end rot"],                application: "Dip, 15 seconds",             notes: "Skin remains taut; ripening slowed by ~14 days." },
  papaya:    { slug: "papaya",    name: "Papaya",    line: "Fruity", img: fruity, shelfLifeUncoated: "7 days",  shelfLifeCoated: "21 days", pathogens: ["Phytophthora", "Colletotrichum"],             application: "Spray, 8 ml / kg",            notes: "Reduces latex bleed and surface mould." },
  apple:     { slug: "apple",     name: "Apple",     line: "Fruity", img: fruity, shelfLifeUncoated: "21 days", shelfLifeCoated: "60 days", pathogens: ["Penicillium expansum", "Botryosphaeria"],      application: "Spray, 5 ml / kg",            notes: "Ambient-temperature storage equivalent to controlled-atmosphere cold." },
};

export const Route = createFileRoute("/products/$slug")({
  beforeLoad: ({ params }) => {
    if (!VARIANTS[params.slug]) throw notFound();
  },
  head: ({ params }) => {
    const v = VARIANTS[params.slug];
    if (!v) return { meta: [{ title: "Variety not found | Everipe" }] };
    return {
      meta: [
        { title: `${v.name} — ${v.line} coating | Everipe` },
        { name: "description", content: `${v.name}: shelf life from ${v.shelfLifeUncoated} (uncoated) to ${v.shelfLifeCoated} (coated). ${v.notes}` },
        { property: "og:image", content: v.img },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-serif text-5xl">Variety not found</h1>
        <Link to="/products" className="btn-primary mt-8 inline-flex">Back to products</Link>
      </div>
    </div>
  ),
  component: VariantPage,
});

function VariantPage() {
  const { slug } = Route.useParams();
  const v = VARIANTS[slug]!;
  return (
    <>
      <section className="bg-forest text-white pt-40 pb-20">
        <div className="container-x">
          <Link to="/products" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm">
            <ArrowLeft className="w-4 h-4" /> All products
          </Link>
          <span className="label-eyebrow text-white/60 mt-8 block">{v.line} · Variety</span>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-[8.5rem] mt-3 leading-[0.95]">{v.name}</h1>
          <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl">{v.notes}</p>
        </div>
      </section>

      {/* COATED VS UNCOATED */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-x">
          <div className="max-w-3xl">
            <span className="label-eyebrow text-teal">Side-by-side · Day 14</span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl mt-4 leading-[1.02]">Coated vs uncoated.</h2>
            <p className="mt-5 text-lg text-ink/70">Same harvest. Same ambient storage. One difference — the TAEC coating.</p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Uncoated */}
            <div className="reveal">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-ink/5">
                <img
                  src={v.img}
                  alt={`Uncoated ${v.name} after ${v.shelfLifeUncoated}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  style={{ filter: "grayscale(0.55) brightness(0.78) contrast(0.92) sepia(0.25)" }}
                />
                <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-ink/80 text-white text-xs uppercase tracking-widest">Uncoated</div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="font-serif text-3xl">Day 14</div>
                  <div className="text-sm text-white/80">Shrivel · pathogen pressure · loss of market value</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="mt-5 flex items-baseline gap-3">
                <div className="font-serif text-4xl text-ink/80">{v.shelfLifeUncoated}</div>
                <div className="text-sm text-ink/50">average shelf life</div>
              </div>
            </div>

            {/* Coated */}
            <div className="reveal">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-ink/5">
                <img
                  src={v.img}
                  alt={`Coated ${v.name} after ${v.shelfLifeCoated}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  style={{ filter: "saturate(1.15) brightness(1.05) contrast(1.05)" }}
                />
                <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-teal text-white text-xs uppercase tracking-widest inline-flex items-center gap-1.5"><Check className="w-3 h-3" /> Coated</div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="font-serif text-3xl">Day 14</div>
                  <div className="text-sm text-white/80">Firm · vibrant · market-ready</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="mt-5 flex items-baseline gap-3">
                <div className="font-serif text-4xl text-teal">{v.shelfLifeCoated}</div>
                <div className="text-sm text-ink/50">with TAEC coating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="bg-cream pb-28 md:pb-36">
        <div className="container-x grid md:grid-cols-3 gap-10">
          <div className="reveal">
            <span className="label-eyebrow text-teal">Application</span>
            <p className="mt-3 font-serif text-2xl leading-snug">{v.application}</p>
          </div>
          <div className="reveal">
            <span className="label-eyebrow text-teal">Pathogen targets</span>
            <ul className="mt-3 space-y-2">
              {v.pathogens.map(p => (
                <li key={p} className="flex items-start gap-2 text-ink/80"><span className="w-1.5 h-1.5 rounded-full bg-teal mt-2.5" />{p}</li>
              ))}
            </ul>
          </div>
          <div className="reveal">
            <span className="label-eyebrow text-teal">Field notes</span>
            <p className="mt-3 text-ink/75 leading-relaxed">{v.notes}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-white py-24 md:py-32">
        <div className="container-x text-center">
          <h3 className="font-serif text-4xl md:text-5xl">Trial {v.name} on your next harvest.</h3>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-white text-ink font-medium hover:bg-cream">
            Request a trial <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}