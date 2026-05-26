import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Plane, ShieldCheck, Thermometer, Droplet, Clock } from "lucide-react";
import port from "@/assets/exporter-port.jpg";
import air from "@/assets/exporter-air-freight.jpg";
import produce from "@/assets/exporter-produce.jpg";
import perishable from "@/assets/exporter-perishable.jpg";
import { SectionLabel } from "@/components/Bits";

export const Route = createFileRoute("/exporters")({
  head: () => ({
    meta: [
      { title: "For Exporters — Everipe" },
      { name: "description", content: "Protect high-value air cargo. Shield cut flowers and premium produce from tarmac thermal shock, flight delays, and cabin dehydration." },
    ],
  }),
  component: Exporters,
});

const TABLE = [
  ["Cut Flowers", "25 days (Vase)", "45 days (Vase)", "+80%"],
  ["Fruity Avo", "28 days (Shelf)", "58 days (Shelf)", "+107%"],
  ["Fruity Papaya", "25 days (Shelf)", "48 days (Shelf)", "+92%"],
  ["Veggie Kali", "26 days (Shelf)", "48 days (Shelf)", "+85%"],
];

function Exporters() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[95vh] flex items-end overflow-hidden bg-[#17726d]">
        <img src={port} alt="Air cargo shipping crates at airport logistics hub" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17726d] via-[#17726d]/70 to-transparent" />
        <div className="container-x relative pb-24 text-white max-w-5xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider bg-white/10 border border-white/20 uppercase mb-6 backdrop-blur-sm">
            <Plane className="w-3.5 h-3.5" /> Air Freight Optimization
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mt-4 leading-[0.98] text-white">
            Protecting Air Cargo.<br />
            Surviving Tarmac Shock.
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed">
            Shield high-value flower and premium produce flights from tarmac temperature spikes, custom delays, and cabin dehydration.
          </p>
        </div>
      </section>

      {/* THE CHALLENGE */}
      <section className="py-28 md:py-36 bg-white">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>The Flight-Gap Reality</SectionLabel>
            <h2 className="font-serif text-4xl md:text-6xl text-ink leading-tight mt-4 font-bold">
              Air speed is useless if ground handling fails.
            </h2>
            <div className="mt-10 space-y-6 text-ink/80 text-lg leading-relaxed">
              <p>
                Air cargo is the chosen pipeline for ultra-perishables like cut flowers and premium fresh vegetables.
                Exporters pay huge premiums for speed to preserve freshness, but runway speed does not guarantee cold chain integrity.
              </p>
              <p>
                The primary driver of crop rejection is <strong className="text-[#17726d]">tarmac thermal shock</strong>. During airport loading, customs staging,
                and pallet transfers, fresh exports sit on hot concrete under the direct sun—often soaring above 35°C—with zero active cooling.
              </p>
              <p>
                Once in flight, the depressurized, low-humidity air in cargo holds accelerates crop respiration and moisture loss.
                By the time your shipment reaches buyers in Europe or the Middle East, its shelf life is already cut in half.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-white border border-[#17726d]/15 p-6 rounded-2xl text-ink shadow-sm">
                <Thermometer className="w-7 h-7 text-red-500 mb-3" />
                <div className="font-serif text-2xl font-bold text-ink">Tarmac Heat</div>
                <p className="text-xs text-ink/70 mt-2 leading-relaxed">
                  Direct runway solar loading triggers metabolic spikes and rapid moisture decay.
                </p>
              </div>
              <div className="bg-[#17726d] text-white p-6 rounded-2xl shadow-md">
                <Plane className="w-7 h-7 mb-3 text-white/80" />
                <div className="font-serif text-2xl font-bold text-white">Cargo Dehydration</div>
                <p className="text-xs text-white/80 mt-2 leading-relaxed">
                  Low-humidity cabin environments draw moisture out of leaves and skin rapidly.
                </p>
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <img src={air} alt="Pallets of fresh crops ready for plane loading" loading="lazy" width={1600} height={1024} className="rounded-2xl w-full h-64 object-cover" />
              <div className="bg-white border border-[#17726d]/15 p-6 rounded-2xl text-ink shadow-sm">
                <Clock className="w-7 h-7 text-[#17726d] mb-3" />
                <div className="font-serif text-2xl font-bold text-ink">Customs Holds</div>
                <p className="text-xs text-ink/70 mt-2 leading-relaxed">
                  Airport delays and inspections disrupt cold storage, exposing produce to ambient heat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE SOLUTION */}
      <section className="py-28 md:py-36 bg-[#17726d] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.06),transparent_50%)]" />
        <div className="container-x relative">
          <span className="label-eyebrow text-white/70 block mb-4">The Solution</span>
          <h2 className="font-serif text-4xl md:text-6xl mt-4 max-w-4xl leading-tight text-white font-bold">
            A molecular cold shield for every high-value flight.
          </h2>
          <p className="mt-8 text-xl text-white/85 max-w-3xl leading-relaxed">
            Everipe TAEC behaves like a living, breathable membrane on the crop's surface. When refrigeration fails during
            tarmac transfers or flight delays, the biopolymer matrix reacts dynamically, constricting pores to block decay
            and halt water loss directly at the boundary layer.
          </p>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              { icon: Thermometer, stat: "−85%", title: "Tarmac Spikes", desc: "Allows flowers and produce to survive direct sun exposure and loading delays without ripening surges." },
              { icon: Droplet, stat: "60%", title: "Moisture Lock", desc: "Retains organic crop weight and flower turgor, resisting the extreme dry air of pressurized cargo cabins." },
              { icon: ShieldCheck, stat: "3–4×", title: "Arrival Window", desc: "Guarantees premium aesthetic presentation, crisp foliage, and extended shelf life post-flight." },
            ].map(({ icon: Icon, stat, title, desc }) => (
              <div key={title} className="bg-white/10 border border-white/15 p-10 rounded-2xl hover:bg-white/15 transition-all duration-300">
                <Icon className="w-8 h-8 mb-6 text-white" />
                <div className="font-serif text-6xl mb-3 text-white font-bold">{stat}</div>
                <h3 className="font-serif text-2xl text-white font-bold">{title}</h3>
                <p className="mt-3 text-white/70 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERISHABLES STORY */}
      <section className="py-28 md:py-36 bg-white">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <img src={perishable} alt="High-quality cut flowers packaged for flight" loading="lazy" width={1600} height={1024} className="rounded-2xl w-full h-[600px] object-cover order-2 lg:order-1" />
          <div className="order-1 lg:order-2">
            <SectionLabel>Premium Floral & Veggie Transit</SectionLabel>
            <h2 className="font-serif text-4xl md:text-5xl text-ink mt-4 leading-tight font-bold">
              Cut flowers are exported on flights. Keep them fresh.
            </h2>
            <p className="mt-8 text-ink/80 text-lg leading-relaxed">
              Stems cut in Naivasha or crops packed in Central Kenya depend heavily on air transit to hit European and Middle
              Eastern retail hubs in pristine shape. Flowers represent the highest density of air exports—but they are also
              the most vulnerable to thermal shock during airport loading.
            </p>
            <p className="mt-6 text-ink/80 text-lg leading-relaxed">
              By locking in cellular hydration and blocking fungal spores from propagating in the cargo holds, Everipe shields your
              investments through flight legs, airport delays, and ground distribution—assuring flawless quality on the buyer's table.
            </p>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="bg-[#17726d] text-white py-28 md:py-36">
        <div className="container-x">
          <span className="label-eyebrow text-white/70 block mb-4">Air Cargo Metrics</span>
          <h2 className="font-serif text-4xl md:text-5xl mb-12 mt-4 text-white font-bold">Quality preservation under flight profiles.</h2>
          <div className="overflow-x-auto rounded-2xl border border-white/15 bg-white/5">
            <table className="w-full text-left">
              <thead className="bg-white/10">
                <tr className="text-xs uppercase tracking-wider text-white/70">
                  {["Product Category", "Standard Flight", "With Everipe Protection", "Vase/Shelf Life Gain"].map(h => (
                    <th key={h} className="px-6 py-5">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {TABLE.map(r => (
                  <tr key={r[0]} className="font-serif hover:bg-white/5 transition-colors duration-200">
                    <td className="px-6 py-6 text-xl text-white font-bold">{r[0]}</td>
                    <td className="px-6 py-6 text-white/60">{r[1]}</td>
                    <td className="px-6 py-6 text-xl text-white">{r[2]}</td>
                    <td className="px-6 py-6 text-white font-bold font-mono">{r[3]}</td>
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
              <SectionLabel>The Outcome</SectionLabel>
              <h2 className="font-serif text-4xl md:text-6xl text-ink mt-4 leading-tight font-bold">
                Deliver pristine stems. Zero rejections.
              </h2>
              <div className="mt-10 space-y-5 text-ink/80 text-lg leading-relaxed">
                <p>
                  Flight carrier logistics and custom controls are often out of your direct influence. By applying Everipe
                  TAEC right at the packhouse, you gain absolute quality insurance through airport delays, flight layovers, and tarmac sun exposure.
                </p>
                <p>
                  Phytosanitary inspections pass predictably. Buyers receive firm, vibrant fruits and high-turgor flowers that retain
                  lasting freshness in their vases. Rejections disappear, contracts expand, and export margins remain protected.
                </p>
              </div>
              <div className="mt-12">
                <Link to="/contact" className="px-6 py-3.5 rounded-full text-sm font-semibold bg-[#17726d] text-white hover:bg-[#0e534f] transition-all duration-300 shadow-md inline-flex items-center gap-2">
                  Talk to our export engineers <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <img src={produce} alt="Premium fresh avocados and export fruits in pristine condition" loading="lazy" width={1600} height={1024} className="rounded-2xl w-full h-[600px] object-cover" />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 md:py-36 bg-[#17726d] text-white">
        <div className="container-x grid md:grid-cols-2 gap-12">
          {[
            ["Naivasha flowers sit for hours on hot airport tarmac prior to flights. By using Everipe, our stems resist tarmac shock completely—rejections at Brussels fell to absolute zero.", "Flower Exporter & Grower, Naivasha"],
            ["Cargo hold air is notoriously dry, causing paper-like skin on export papayas. Everipe retains natural hydration perfectly, ensuring plump arrivals that fetch premium market prices.", "Tropical Perishables Exporter, East Africa"],
          ].map(([q, a]) => (
            <div key={a} className="border-l-4 border-white/40 pl-8">
              <p className="font-serif text-3xl leading-snug text-white">"{q}"</p>
              <p className="mt-6 text-sm text-white/70 font-mono uppercase tracking-wider">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
