import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Plane, Ship, ShieldCheck, TrendingDown } from "lucide-react";
import port from "@/assets/exporter-port.jpg";
import sea from "@/assets/exporter-sea-freight.jpg";
import air from "@/assets/exporter-air-freight.jpg";
import produce from "@/assets/exporter-produce.jpg";
import perishable from "@/assets/exporter-perishable.jpg";
import { SectionLabel } from "@/components/Bits";

export const Route = createFileRoute("/exporters")({
  head: () => ({
    meta: [
      { title: "For Exporters — Everipe" },
      { name: "description", content: "Ship perishables fully by sea. Skip costly air freight. Pass inspections. Reach further markets." },
    ],
  }),
  component: Exporters,
});

const TABLE = [
  ["Mango", "5–7 days", "21+ days", "+200%"],
  ["Avocado", "10–14 days", "35+ days", "+150%"],
  ["Cut Flowers", "7 days", "21 days", "+200%"],
  ["Papaya", "4–6 days", "18+ days", "+200%"],
];

function Exporters() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[95vh] flex items-end overflow-hidden bg-[#17726d]">
        <img src={port} alt="Reefer container at port" className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17726d] via-[#17726d]/70 to-transparent" />
        <div className="container-x relative pb-24 text-white max-w-5xl">
          <span className="label-eyebrow text-white/80">For Exporters</span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mt-4 leading-[0.98] text-white">
            One Ship. No Air Freight. Fresh on Arrival.
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed">
            Move your entire perishable shipment by sea — without losing a single crate to spoilage.
          </p>
        </div>
      </section>

      {/* THE CHALLENGE */}
      <section className="py-28 md:py-36 bg-white">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel><span className="text-[#17726d]">The Reality of Exporting Fresh</span></SectionLabel>
            <h2 className="font-serif text-4xl md:text-6xl text-[#17726d] leading-tight mt-4">
              Today, exporters are forced into an impossible choice.
            </h2>
            <div className="mt-10 space-y-6 text-[#17726d]/80 text-lg leading-relaxed">
              <p>
                Sea freight is the backbone of global trade. It is cheaper, greener, and built for bulk.
                But for fruits, flowers, and other perishables, the journey is too long. Quality breaks
                before the ship docks.
              </p>
              <p>
                So exporters compromise. They split a single shipment between sea and air —
                sending part by ocean, then rushing the rest through congested airports to beat the clock.
              </p>
              <p>
                Add the layers of regulatory bodies, phytosanitary inspections, and strict cold-chain
                requirements, and a single missed deadline can cost an entire container.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src={sea} alt="Sea freight container ship" loading="lazy" width={1600} height={1024} className="rounded-2xl w-full h-64 object-cover" />
              <div className="bg-[#17726d] text-white p-6 rounded-2xl">
                <Ship className="w-7 h-7 mb-3" />
                <div className="font-serif text-3xl">Sea</div>
                <p className="text-sm text-white/80 mt-2">Cheap. Bulky. Too slow for fresh.</p>
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="bg-white border-2 border-[#17726d] p-6 rounded-2xl text-[#17726d]">
                <Plane className="w-7 h-7 mb-3" />
                <div className="font-serif text-3xl">Air</div>
                <p className="text-sm text-[#17726d]/70 mt-2">Fast. Expensive. The only fallback.</p>
              </div>
              <img src={air} alt="Air freight loading" loading="lazy" width={1600} height={1024} className="rounded-2xl w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* THE SHIFT */}
      <section className="py-28 md:py-36 bg-[#17726d] text-white relative overflow-hidden">
        <div className="container-x relative">
          <SectionLabel><span className="text-white/70">The Shift</span></SectionLabel>
          <h2 className="font-serif text-4xl md:text-6xl mt-4 max-w-4xl leading-tight">
            With our coating, the split shipment disappears.
          </h2>
          <p className="mt-8 text-xl text-white/85 max-w-3xl leading-relaxed">
            Mangoes, avocados, papayas, and cut flowers stay export-grade for weeks, not days.
            You ship everything by sea — one route, one cost, one container.
            No emergency air freight. No spoilage panic.
          </p>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              { icon: TrendingDown, stat: "−60%", title: "Freight Cost", desc: "Replace air with sea and cut logistics spend by more than half." },
              { icon: Ship, stat: "100%", title: "Sea Freight", desc: "Move full shipments by ocean — even the most perishable SKUs." },
              { icon: ShieldCheck, stat: "−85%", title: "Rejections", desc: "Arrive within spec. Pass inspections by regulators on the first try." },
            ].map(({ icon: Icon, stat, title, desc }) => (
              <div key={title} className="bg-white text-[#17726d] p-10 rounded-2xl">
                <Icon className="w-8 h-8 mb-6" />
                <div className="font-serif text-6xl mb-3">{stat}</div>
                <h3 className="font-serif text-2xl">{title}</h3>
                <p className="mt-3 text-[#17726d]/70 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERISHABLES STORY */}
      <section className="py-28 md:py-36 bg-white">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <img src={perishable} alt="Fresh flowers and fruits ready for export" loading="lazy" width={1600} height={1024} className="rounded-2xl w-full h-[600px] object-cover order-2 lg:order-1" />
          <div className="order-1 lg:order-2">
            <SectionLabel><span className="text-[#17726d]">Flowers. Fruits. Anything fresh.</span></SectionLabel>
            <h2 className="font-serif text-4xl md:text-5xl text-[#17726d] mt-4 leading-tight">
              The categories that pay the highest air-freight premium.
            </h2>
            <p className="mt-8 text-[#17726d]/80 text-lg leading-relaxed">
              A rose cut in Naivasha. A mango harvested in Machakos. An avocado packed in Murang'a.
              All of them race the same clock — and all of them currently rely on partial air freight
              to reach Europe, the Middle East, and Asia in time.
            </p>
            <p className="mt-6 text-[#17726d]/80 text-lg leading-relaxed">
              Our coating extends shelf life by 3 to 4 times. Suddenly a 21-day sea voyage
              isn't a risk — it's the most profitable route on the map.
            </p>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="bg-[#17726d] text-white py-28 md:py-36">
        <div className="container-x">
          <SectionLabel><span className="text-white/70">Shelf-life extension</span></SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl mb-12 mt-4 text-white">By crop. By route.</h2>
          <div className="overflow-x-auto rounded-2xl border border-white/20 bg-white/5">
            <table className="w-full text-left">
              <thead className="bg-white/10">
                <tr className="text-xs uppercase tracking-wider text-white/70">
                  {["Product", "Without Coating", "With Everipe", "Improvement"].map(h => (
                    <th key={h} className="px-6 py-5">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {TABLE.map(r => (
                  <tr key={r[0]} className="font-serif">
                    <td className="px-6 py-6 text-xl text-white">{r[0]}</td>
                    <td className="px-6 py-6 text-white/60">{r[1]}</td>
                    <td className="px-6 py-6 text-xl text-white">{r[2]}</td>
                    <td className="px-6 py-6 text-white font-semibold">{r[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* OUTCOME */}
      <section className="py-28 md:py-36 bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel><span className="text-[#17726d]">The Outcome</span></SectionLabel>
              <h2 className="font-serif text-4xl md:text-6xl text-[#17726d] mt-4 leading-tight">
                Ship further. Spend less. Lose nothing.
              </h2>
              <div className="mt-10 space-y-5 text-[#17726d]/80 text-lg leading-relaxed">
                <p>
                  Markets that were once unreachable for fresh produce — distant ports in Asia,
                  the Middle East, North America — become accessible by sea alone.
                </p>
                <p>
                  Regulatory inspections become predictable. Quality at port-of-entry is consistent.
                  Buyers stop rejecting shipments. Contracts get longer. Margins grow.
                </p>
              </div>
              <div className="mt-12">
                <Link to="/contact" className="btn-primary">Talk to our exporter team <ArrowRight className="w-4 h-4" /></Link>
              </div>
            </div>
            <img src={produce} alt="Export-grade mangoes and avocados" loading="lazy" width={1600} height={1024} className="rounded-2xl w-full h-[600px] object-cover" />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 md:py-36 bg-[#17726d] text-white">
        <div className="container-x grid md:grid-cols-2 gap-12">
          {[
            ["We replaced 80% of our air freight with sea routes. Margins doubled in six months.", "Hassan Ahmed · Mango Exporter, East Africa"],
            ["Our buyers in Europe stopped rejecting shipments. The savings paid for the program in one quarter.", "Carlos Mendoza · Avocado Exporter, Latin America"],
          ].map(([q, a]) => (
            <div key={a} className="border-l-2 border-white/30 pl-8">
              <p className="font-serif text-3xl leading-snug text-white">"{q}"</p>
              <p className="mt-6 text-sm text-white/70 label-eyebrow">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
