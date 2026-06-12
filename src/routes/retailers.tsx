import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import retail from "@/assets/retailer-produce.jpg";
import veg from "@/assets/veggie-vegetables.jpg";
import fruit from "@/assets/fruity-fruits.jpg";
import { SectionLabel } from "@/components/Bits";

export const Route = createFileRoute("/retailers")({
  head: () => ({
    meta: [
      { title: "For Retailers — Everipe" },
      { name: "description", content: "Reduce shrinkage. Extend shelf life. Delight customers." },
    ],
  }),
  component: Retailers,
});

function Retailers() {
  return (
    <>
      <section className="relative h-[95vh] flex items-end overflow-hidden">
        <img src={retail} alt="Premium supermarket produce display" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
        <div className="container-x relative pb-24 text-white max-w-4xl">
          <span className="label-eyebrow text-white/70">For Retailers</span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mt-4 leading-[0.98]">
            Reduce shrinkage. Delight customers. Without changing a thing.
          </h1>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-cream">
        <div className="container-x grid md:grid-cols-4 gap-6">
          {[["Shrinkage", "Produce departments lose meaningful volume to spoilage every week."],
            ["Turnover costs", "Discounting, repricing, restocking."],
            ["Storage costs", "Refrigeration eats margin."],
            ["Perception", "Customers walk away from wilted shelves."],
          ].map(([t, d]) => (
            <div key={t} className="reveal">
              <h3 className="font-serif text-2xl">{t}</h3>
              <p className="mt-2 text-ink/65 text-sm">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-28 md:py-36 bg-white">
        <div className="container-x space-y-24">
          {[
            { t: "Extend shelf life", d: "Produce stays sale-ready longer on display.", img: veg, flip: false },
            { t: "Reduce shrinkage", d: "Cut waste in tomato, berry and stone-fruit categories.", img: fruit, flip: true },
            { t: "Optimize storage", d: "Lower cold-storage demand. Free up backroom capacity.", img: retail, flip: false },
          ].map(({ t, d, img, flip }) => (
            <div key={t} className={`grid md:grid-cols-2 gap-10 items-center ${flip ? "md:[&>:first-child]:order-2" : ""}`}>
              <div className="aspect-[4/3] rounded-3xl overflow-hidden reveal">
                <img src={img} alt={t} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="reveal">
                <h3 className="font-serif text-4xl md:text-5xl">{t}</h3>
                <p className="mt-5 text-lg text-ink/70">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-28 md:py-36 bg-cream">
        <div className="container-x">
          <SectionLabel>Illustrative example</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl mb-4 reveal">500kg tomatoes per week.</h2>
          <p className="text-ink/65 max-w-2xl mb-12">A worked example of how reduced shrinkage could translate into savings. Real outcomes depend on category, climate and operations.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-10 rounded-2xl reveal">
              <div className="label-eyebrow text-ink/50 mb-5">Without Everipe</div>
              <Stats rows={[["Weekly waste", "30%"], ["Annual loss (kg)", "7,800"], ["Annual loss ($)", "$19,500"]]} />
            </div>
            <div className="bg-teal text-white p-10 rounded-2xl reveal">
              <div className="label-eyebrow text-white/60 mb-5">With Everipe (target)</div>
              <Stats rows={[["Weekly waste", "5%"], ["Annual loss (kg)", "1,300"], ["Annual loss ($)", "$3,380"]]} />
            </div>
          </div>
          <div className="text-center mt-14 reveal">
            <div className="font-serif text-7xl md:text-8xl text-teal">$16,120</div>
            <div className="text-ink/65 mt-2">Illustrative annual savings · per category, per store</div>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-ink text-white">
        <div className="container-x text-center">
          <h2 className="font-serif text-4xl md:text-5xl max-w-3xl mx-auto">Want to pilot Everipe in your stores?</h2>
          <Link to="/contact" className="btn-primary mt-10 inline-flex">Talk to our retail team <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </>
  );
}

function Stats({ rows }: { rows: [string, string][] }) {
  return (
    <table className="w-full text-sm">
      <tbody className="divide-y divide-current/10">
        {rows.map(([k, v], i) => (
          <tr key={k} className={i === rows.length - 1 ? "font-semibold text-base" : ""}>
            <td className="py-3">{k}</td>
            <td className="py-3 text-right font-serif">{v}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
