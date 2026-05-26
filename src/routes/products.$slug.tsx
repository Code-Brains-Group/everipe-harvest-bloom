import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
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
  "cut-flowers": {
    slug: "cut-flowers",
    name: "Cut Flowers",
    line: "Bloomy",
    img: bloomy,
    shelfLifeUncoated: "7 days",
    shelfLifeCoated: "21 days",
    pathogens: ["Botrytis cinerea", "Pseudomonas carotovora"],
    application: "Post-harvest dip, 30 seconds",
    notes: "Maintains high stem turgor and fresh petal color through flight cabin dehydration and hot tarmac loading delays."
  },
  "veggie-tomato": {
    slug: "veggie-tomato",
    name: "Veggie Tomato",
    line: "Veggie",
    img: veggie,
    shelfLifeUncoated: "10 days",
    shelfLifeCoated: "24 days",
    pathogens: ["Alternaria alternata", "Rhizopus stolonifer"],
    application: "Spray, 8 ml / kg",
    notes: "Slows ethylene-driven cell ripening and skin softening; firmness is retained under room temperatures."
  },
  "veggie-kali": {
    slug: "veggie-kali",
    name: "Veggie Kali (Pepper)",
    line: "Veggie",
    img: veggie,
    shelfLifeUncoated: "9 days",
    shelfLifeCoated: "22 days",
    pathogens: ["Colletotrichum capsici", "Botrytis cinerea"],
    application: "Spray, 7 ml / kg",
    notes: "Protective coating for hot peppers (Kali). Retains high gloss, cuts stem-end rot, and prevents wrinkling."
  },
  "veggie-cucumber": {
    slug: "veggie-cucumber",
    name: "Veggie Cucumber",
    line: "Veggie",
    img: veggie,
    shelfLifeUncoated: "8 days",
    shelfLifeCoated: "20 days",
    pathogens: ["Pythium aphanidermatum", "Penicillium"],
    application: "Spray, 6 ml / kg",
    notes: "Locks in high moisture levels and prevents shriveling and skin pitting in non-refrigerated transit."
  },
  "veggie-hoho": {
    slug: "veggie-hoho",
    name: "Veggie Hoho (Capsicum)",
    line: "Veggie",
    img: veggie,
    shelfLifeUncoated: "9 days",
    shelfLifeCoated: "22 days",
    pathogens: ["Colletotrichum gloeosporioides", "Alternaria"],
    application: "Spray, 8 ml / kg",
    notes: "Formulation for sweet peppers (Hoho). Maintains structural firmness and prevents surface pathogen entry."
  },
  "veggie-bean": {
    slug: "veggie-bean",
    name: "Veggie Bean",
    line: "Veggie",
    img: veggie,
    shelfLifeUncoated: "5 days",
    shelfLifeCoated: "14 days",
    pathogens: ["Sclerotinia sclerotiorum", "Rhizoctonia solani"],
    application: "Mist, 4 ml / kg",
    notes: "Preserves snap-crisp fiber texture, halts bean pod yellowing, and stops moisture decay in shipping."
  },
  "fruity-avo": {
    slug: "fruity-avo",
    name: "Fruity Avo (Avocado)",
    line: "Fruity",
    img: fruity,
    shelfLifeUncoated: "9 days",
    shelfLifeCoated: "28 days",
    pathogens: ["Colletotrichum gloeosporioides", "Lasiodiplodia theobromae"],
    application: "Dip, 12 seconds",
    notes: "Smart biopolymer shield applied only on the inedible peel. Defends against weight shrink and skin spotting."
  },
  "fruity-ananas": {
    slug: "fruity-ananas",
    name: "Fruity Ananas (Pineapple)",
    line: "Fruity",
    img: fruity,
    shelfLifeUncoated: "12 days",
    shelfLifeCoated: "30 days",
    pathogens: ["Thielaviopsis paradoxa", "Penicillium funiculosum"],
    application: "Crown spray, 10 ml / fruit",
    notes: "Protects the pineapple rind and crown. Prevents base rot and locks in natural Brix sugars."
  },
  "fruity-papaya": {
    slug: "fruity-papaya",
    name: "Fruity Papaya (Pawpaw)",
    line: "Fruity",
    img: fruity,
    shelfLifeUncoated: "7 days",
    shelfLifeCoated: "21 days",
    pathogens: ["Phytophthora palmivora", "Colletotrichum gloeosporioides"],
    application: "Spray, 8 ml / kg",
    notes: "Applied on the inedible papaya rind. Suppresses latex bleeding, skin yellowing, and surface mold."
  },
  "fruity-apples": {
    slug: "fruity-apples",
    name: "Fruity Apples",
    line: "Fruity",
    img: fruity,
    shelfLifeUncoated: "21 days",
    shelfLifeCoated: "60 days",
    pathogens: ["Penicillium expansum", "Botryosphaeria dothidea"],
    application: "Spray, 5 ml / kg",
    notes: "Creates an atmospheric shield that preserves cellular crunch and retards soft bruising at room temp."
  }
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
        { name: "description", content: `${v.name}: shelf life extended from ${v.shelfLifeUncoated} (uncoated) to ${v.shelfLifeCoated} (coated). ${v.notes}` },
        { property: "og:image", content: v.img },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-serif text-5xl text-ink">Variety not found</h1>
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
          <Link to="/products" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors">
            <ArrowLeft className="w-4 h-4" /> All products
          </Link>
          <span className="label-eyebrow text-white/60 mt-8 block">{v.line} · Product Variety</span>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-[8.5rem] mt-3 leading-[0.95] text-white font-bold">{v.name}</h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">{v.notes}</p>
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl">
            <div><div className="font-serif text-4xl md:text-5xl font-bold text-white/85">{uDays}d</div><div className="text-white/55 text-xs uppercase tracking-wider mt-1">Uncoated</div></div>
            <div><div className="font-serif text-4xl md:text-5xl font-bold text-teal">{cDays}d</div><div className="text-white/55 text-xs uppercase tracking-wider mt-1">Coated</div></div>
            <div><div className="font-serif text-4xl md:text-5xl font-bold text-teal-accent">+{gain}%</div><div className="text-white/55 text-xs uppercase tracking-wider mt-1">Life Gain</div></div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-cream py-24 border-b border-border">
        <div className="container-x">
          <span className="label-eyebrow text-teal">Shelf-Life Extension Timeline</span>
          <h2 className="font-serif text-4xl md:text-5xl text-ink mt-3 leading-tight max-w-2xl font-bold">Week-by-week post-harvest comparison.</h2>
          <div className="mt-12 space-y-6">
            <TimelineRow label="Without Everipe Shield" days={uDays} max={Math.max(uDays, cDays)} tone="ink" />
            <TimelineRow label="With Everipe Shield" days={cDays} max={Math.max(uDays, cDays)} tone="teal" />
          </div>
          <div className="mt-6 flex justify-between text-xs text-ink/40 font-mono tracking-wider max-w-full">
            <span>Harvest Day 0</span>
            <span>Day {Math.round(Math.max(uDays, cDays) / 2)}</span>
            <span>Day {Math.max(uDays, cDays)}</span>
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="bg-cream py-24">
        <div className="container-x grid md:grid-cols-3 gap-10">
          <div className="reveal bg-white p-8 rounded-2xl border border-border shadow-sm">
            <span className="label-eyebrow text-teal block mb-3">Application Process</span>
            <p className="font-serif text-2xl leading-snug text-ink font-bold">{v.application}</p>
          </div>
          <div className="reveal bg-white p-8 rounded-2xl border border-border shadow-sm">
            <span className="label-eyebrow text-teal block mb-3">Pathogen Targets</span>
            <ul className="space-y-2">
              {v.pathogens.map(p => (
                <li key={p} className="flex items-start gap-2 text-ink/80 text-sm font-medium"><span className="w-1.5 h-1.5 rounded-full bg-teal mt-2 shrink-0" />{p}</li>
              ))}
            </ul>
          </div>
          <div className="reveal bg-white p-8 rounded-2xl border border-border shadow-sm">
            <span className="label-eyebrow text-teal block mb-3">Technical Notes</span>
            <p className="text-ink/75 leading-relaxed text-sm">{v.notes}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-white py-24 md:py-32">
        <div className="container-x text-center max-w-3xl">
          <h3 className="font-serif text-4xl md:text-5xl font-bold">Trial {v.name} on your next export flight.</h3>
          <p className="mt-4 text-white/60 text-base leading-relaxed">
            Partner with us to run full packhouse trials and validation studies customized for your specific logistics lane.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-white text-ink font-semibold hover:bg-cream transition-colors shadow-lg">
            Request a Packhouse Trial <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

function TimelineRow({ label, days, max, tone }: { label: string; days: number; max: number; tone: "ink" | "teal" }) {
  const pct = (days / max) * 100;
  const fill = tone === "teal" ? "bg-teal" : "bg-ink/60";
  const text = tone === "teal" ? "text-teal font-bold" : "text-ink font-semibold";
  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <span className={`label-eyebrow ${text}`}>{label}</span>
        <span className={`font-serif text-2xl ${text}`}>{days} days</span>
      </div>
      <div className="h-3 rounded-full bg-border overflow-hidden">
        <div className={`h-full ${fill} rounded-full transition-all duration-1000`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}