import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import veggie from "@/assets/veggie-vegetables.jpg";
import fruity from "@/assets/fruity-fruits.jpg";
import bloomy from "@/assets/bloomy-flowers.jpg";
import { BeforeAfter } from "@/components/BeforeAfter";

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
  const uDays = parseInt(v.shelfLifeUncoated, 10) || 7;
  const cDays = parseInt(v.shelfLifeCoated, 10) || 21;
  const gain = Math.round(((cDays - uDays) / uDays) * 100);
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
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl">
            <div><div className="font-serif text-4xl md:text-5xl">{uDays}d</div><div className="text-white/55 text-sm mt-1">Uncoated</div></div>
            <div><div className="font-serif text-4xl md:text-5xl text-teal">{cDays}d</div><div className="text-white/55 text-sm mt-1">Coated</div></div>
            <div><div className="font-serif text-4xl md:text-5xl">+{gain}%</div><div className="text-white/55 text-sm mt-1">Shelf-life gain</div></div>
          </div>
        </div>
      </section>

      {/* DRAGGABLE COMPARISON */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-x">
          <div className="max-w-3xl">
            <span className="label-eyebrow text-teal">Drag to compare</span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl mt-4 leading-[1.02]">Coated vs uncoated.</h2>
            <p className="mt-5 text-lg text-ink/70">Same harvest. Same ambient storage. Drag the handle to reveal the difference TAEC makes.</p>
          </div>
          <div className="mt-12 reveal">
            <BeforeAfter src={v.img} alt={`${v.name} coated vs uncoated comparison`} />
            <div className="mt-4 text-center text-sm text-ink/50 font-mono tracking-wider">← drag to reveal →</div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-cream pb-20">
        <div className="container-x">
          <span className="label-eyebrow text-teal">Shelf-life timeline</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3 leading-tight max-w-2xl">Week by week, post-harvest.</h2>
          <div className="mt-12 space-y-6">
            <TimelineRow label="Uncoated" days={uDays} max={Math.max(uDays, cDays)} tone="ink" />
            <TimelineRow label="Coated" days={cDays} max={Math.max(uDays, cDays)} tone="teal" />
          </div>
          <div className="mt-6 flex justify-between text-xs text-ink/40 font-mono tracking-wider max-w-full">
            <span>Day 0</span>
            <span>Day {Math.round(Math.max(uDays, cDays) / 2)}</span>
            <span>Day {Math.max(uDays, cDays)}</span>
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

function TimelineRow({ label, days, max, tone }: { label: string; days: number; max: number; tone: "ink" | "teal" }) {
  const pct = (days / max) * 100;
  const fill = tone === "teal" ? "bg-teal" : "bg-ink/70";
  const text = tone === "teal" ? "text-teal" : "text-ink";
  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <span className={`label-eyebrow ${text}`}>{label}</span>
        <span className={`font-serif text-2xl ${text}`}>{days} days</span>
      </div>
      <div className="h-3 rounded-full bg-ink/10 overflow-hidden">
        <div className={`h-full ${fill} rounded-full transition-all duration-1000`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}