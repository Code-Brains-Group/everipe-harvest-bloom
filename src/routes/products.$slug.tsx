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
  pilotFocus: string;
  validationChecks: string[];
  application: string;
  notes: string;
};

const VARIANTS: Record<string, Variant> = {
  "cut-flowers": {
    slug: "cut-flowers",
    name: "Cut Flowers",
    line: "Bloomy",
    img: bloomy,
    pilotFocus:
      "Measure turgor, petal quality, and visible dehydration through airport handling and flight stress.",
    validationChecks: [
      "Turgor retention",
      "Petal browning",
      "Stem-end decay",
      "Buyer-facing vase quality",
    ],
    application: "Packhouse spray or dip protocol selected with the export partner",
    notes:
      "Designed for cut-flower lanes where warm staging and dry cargo conditions can reduce quality before arrival.",
  },
  "veggie-tomato": {
    slug: "veggie-tomato",
    name: "Veggie Tomato",
    line: "Veggie",
    img: veggie,
    pilotFocus:
      "Assess firmness, water loss, softening, and visible surface defects in warm retail handling.",
    validationChecks: ["Firmness curve", "Weight loss", "Skin defects", "Customer-ready ripeness"],
    application: "Light spray protocol validated against untreated controls",
    notes:
      "Tomato pilots must balance slower spoilage with predictable ripening and acceptable flavor.",
  },
  "veggie-kali": {
    slug: "veggie-kali",
    name: "Veggie Kali (Pepper)",
    line: "Veggie",
    img: veggie,
    pilotFocus: "Study gloss, wrinkling, stem-end quality, and surface decay on hot peppers.",
    validationChecks: ["Gloss retention", "Wrinkling", "Stem quality", "Surface decay"],
    application: "Crop-specific spray protocol developed during pilot setup",
    notes:
      "Pepper validation should focus on visible shelf quality and whether treatment affects normal market handling.",
  },
  "veggie-cucumber": {
    slug: "veggie-cucumber",
    name: "Veggie Cucumber",
    line: "Veggie",
    img: veggie,
    pilotFocus:
      "Measure shriveling, weight loss, and skin pitting in non-refrigerated transit and display.",
    validationChecks: ["Shrivel score", "Weight loss", "Skin pitting", "Buyer acceptance"],
    application: "Spray protocol selected for harvest maturity and lane conditions",
    notes:
      "Cucumber pilots should track moisture stress carefully because appearance changes quickly after harvest.",
  },
  "veggie-hoho": {
    slug: "veggie-hoho",
    name: "Veggie Hoho (Capsicum)",
    line: "Veggie",
    img: veggie,
    pilotFocus: "Assess firmness, gloss, color, and surface defects on sweet peppers.",
    validationChecks: ["Firmness", "Color stability", "Surface spotting", "Packhouse fit"],
    application: "Spray protocol validated through treated and untreated lots",
    notes: "Hoho pilots should document quality changes from packhouse to retail display.",
  },
  "veggie-bean": {
    slug: "veggie-bean",
    name: "Veggie Bean",
    line: "Veggie",
    img: veggie,
    pilotFocus:
      "Measure pod yellowing, snap texture, and moisture loss in short-cycle export lanes.",
    validationChecks: ["Pod color", "Snap texture", "Weight loss", "Decay incidence"],
    application: "Mist or spray protocol selected for crop handling",
    notes: "Bean pilots should be short, tightly controlled, and focused on visible buyer quality.",
  },
  "fruity-avo": {
    slug: "fruity-avo",
    name: "Fruity Avo (Avocado)",
    line: "Fruity",
    img: fruity,
    pilotFocus:
      "Answer whether treatment slows over-ripening and spotting without delaying edible ripeness too far.",
    validationChecks: ["Ripening curve", "Weight loss", "Skin spotting", "Eating quality"],
    application: "Peel-focused protocol reviewed for residue and sensory impact",
    notes:
      "Avocado validation must make the buyer experience clear: fruit should arrive protected and still ripen predictably.",
  },
  "fruity-ananas": {
    slug: "fruity-ananas",
    name: "Fruity Ananas (Pineapple)",
    line: "Fruity",
    img: fruity,
    pilotFocus:
      "Study rind and crown quality, base rot, weight loss, and sensory quality after transit.",
    validationChecks: ["Crown quality", "Base rot", "Weight loss", "Flavor and aroma"],
    application: "Rind and crown protocol defined with the packhouse team",
    notes: "Pineapple pilots should separate rind protection from fruit eating quality.",
  },
  "fruity-papaya": {
    slug: "fruity-papaya",
    name: "Fruity Papaya (Pawpaw)",
    line: "Fruity",
    img: fruity,
    pilotFocus: "Measure softening, skin yellowing, surface mold, and consumer-ready ripeness.",
    validationChecks: ["Softening", "Skin color", "Surface mold", "Eating quality"],
    application: "Rind-focused spray protocol validated with controls",
    notes:
      "Papaya validation should keep ripening behavior central because the edible window can be narrow.",
  },
  "fruity-apples": {
    slug: "fruity-apples",
    name: "Fruity Apples",
    line: "Fruity",
    img: fruity,
    pilotFocus: "Assess bruising, crunch, skin quality, and flavor after warm display conditions.",
    validationChecks: ["Bruising", "Crunch", "Skin quality", "Flavor"],
    application: "Spray protocol reviewed for edible-skin residue and sensory impact",
    notes:
      "Apple pilots require extra safety and sensory scrutiny because the treated skin may be eaten.",
  },
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
        { title: `${v.name} — ${v.line} pilot | Everipe` },
        { name: "description", content: `${v.name}: ${v.pilotFocus} ${v.notes}` },
        { property: "og:image", content: v.img },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-serif text-5xl text-ink">Variety not found</h1>
        <Link to="/products" className="btn-primary mt-8 inline-flex">
          Back to pilot areas
        </Link>
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
      <section className="bg-[#17726d] text-white pt-40 pb-20">
        <div className="container-x">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> All pilot areas
          </Link>
          <span className="label-eyebrow text-white/60 mt-8 block">
            {v.line} · Pilot Application
          </span>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-[8.5rem] mt-3 leading-[0.95] text-white font-bold">
            {v.name}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
            {v.pilotFocus}
          </p>
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl">
            <div>
              <div className="font-serif text-4xl md:text-5xl font-bold text-white/85">Pilot</div>
              <div className="text-white/55 text-xs uppercase tracking-wider mt-1">Stage</div>
            </div>
            <div>
              <div className="font-serif text-4xl md:text-5xl font-bold text-teal">Control</div>
              <div className="text-white/55 text-xs uppercase tracking-wider mt-1">Required</div>
            </div>
            <div>
              <div className="font-serif text-4xl md:text-5xl font-bold text-teal">Review</div>
              <div className="text-white/55 text-xs uppercase tracking-wider mt-1">
                Before Claims
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-cream py-24 border-b border-border">
        <div className="container-x">
          <span className="label-eyebrow text-teal">Validation Plan</span>
          <h2 className="font-serif text-4xl md:text-5xl text-ink mt-3 leading-tight max-w-2xl font-bold">
            Measure the crop before publishing performance numbers.
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              [
                "01",
                "Control lot",
                "Run untreated produce through the same harvest, packing, and transit conditions.",
              ],
              [
                "02",
                "Treated lot",
                "Apply the agreed Everipe protocol and track the same quality measures.",
              ],
              [
                "03",
                "Partner review",
                "Compare quality, ripening, safety, sensory, and commercial relevance before sharing claims.",
              ],
            ].map(([num, title, desc]) => (
              <div key={num} className="border border-border bg-white rounded-2xl p-6">
                <div className="font-serif text-5xl text-teal">{num}</div>
                <h3 className="font-serif text-2xl mt-4 text-ink">{title}</h3>
                <p className="mt-2 text-sm text-ink/65 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="bg-cream py-24">
        <div className="container-x grid md:grid-cols-3 gap-10">
          <div className="reveal bg-[#17726d]/5 p-8 rounded-2xl border border-[#17726d]/20 shadow-sm">
            <span className="label-eyebrow text-[#17726d] block mb-3">Application Process</span>
            <p className="font-serif text-2xl leading-snug text-[#17726d] font-bold">
              {v.application}
            </p>
          </div>
          <div className="reveal bg-[#17726d]/5 p-8 rounded-2xl border border-[#17726d]/20 shadow-sm">
            <span className="label-eyebrow text-[#17726d] block mb-3">Validation Checks</span>
            <ul className="space-y-2">
              {v.validationChecks.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-2 text-[#17726d]/80 text-sm font-medium"
                >
                  <span className="w-2 h-2 rounded-full bg-[#17726d] mt-1.5 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal bg-[#17726d]/5 p-8 rounded-2xl border border-[#17726d]/20 shadow-sm">
            <span className="label-eyebrow text-[#17726d] block mb-3">Technical Notes</span>
            <p className="text-[#17726d]/75 leading-relaxed text-sm">{v.notes}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#17726d] text-white py-24 md:py-32">
        <div className="container-x text-center max-w-3xl">
          <h3 className="font-serif text-4xl md:text-5xl font-bold">
            Design a {v.name} pilot with real controls.
          </h3>
          <p className="mt-4 text-white/60 text-base leading-relaxed">
            Partner with us to run a focused validation study customized for your crop, buyer
            requirements, and logistics lane.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-white text-[#17726d] font-semibold hover:bg-cream transition-colors shadow-lg"
          >
            Request a Pilot <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
