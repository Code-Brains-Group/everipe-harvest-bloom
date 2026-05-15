import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import port from "@/assets/exporter-port.jpg";
import { SectionLabel } from "@/components/Bits";

export const Route = createFileRoute("/exporters")({
  head: () => ({
    meta: [
      { title: "For Exporters — Everipe" },
      { name: "description", content: "Switch from air to sea freight. Open distant markets. Reduce rejections." },
    ],
  }),
  component: Exporters,
});

const STEPS = [
  ["01", "Assess Routes"], ["02", "Pilot & Measure"], ["03", "Work with Suppliers"],
  ["04", "Negotiate Contracts"], ["05", "Communicate Benefit"], ["06", "Scale"],
];

const TABLE = [
  ["Mango", "5–7 days", "21+ days", "+200%"],
  ["Avocado", "10–14 days", "35+ days", "+150%"],
  ["Papaya", "4–6 days", "18+ days", "+200%"],
  ["Cut Flowers", "7 days", "21 days", "+200%"],
];

function Exporters() {
  return (
    <>
      <section className="relative h-[95vh] flex items-end overflow-hidden">
        <img src={port} alt="Reefer container at East African port" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 to-transparent" />
        <div className="container-x relative pb-24 text-white max-w-4xl">
          <span className="label-eyebrow text-white/70">For Exporters</span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mt-4 leading-[0.98]">
            Cold chains break. Transit gets longer. Quality can't wait.
          </h1>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-cream">
        <div className="container-x grid md:grid-cols-3 gap-8">
          {[
            ["Shift to sea freight", "Cut freight cost up to 60% without sacrificing quality on arrival.", "60%"],
            ["Reach distant markets", "Open routes that simply weren't viable for fresh produce before.", "+14d"],
            ["Reduce rejections", "Predictable quality at port-of-entry inspections.", "−85%"],
          ].map(([t, d, s]) => (
            <div key={t} className="bg-white p-10 rounded-2xl reveal">
              <div className="font-serif text-5xl text-teal mb-4">{s}</div>
              <h3 className="font-serif text-2xl">{t}</h3>
              <p className="mt-3 text-ink/65 text-sm">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-teal text-white py-28 md:py-36">
        <div className="container-x">
          <SectionLabel><span className="text-white/70">Shelf-life extension</span></SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl mb-12 reveal">By crop. By route.</h2>
          <div className="overflow-x-auto rounded-2xl border border-white/15">
            <table className="w-full text-left">
              <thead className="bg-white/5">
                <tr className="text-xs uppercase tracking-wider text-white/60">
                  {["Product", "Without", "With Everipe", "Improvement"].map(h => (
                    <th key={h} className="px-6 py-5">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {TABLE.map(r => (
                  <tr key={r[0]} className="font-serif">
                    <td className="px-6 py-6 text-xl">{r[0]}</td>
                    <td className="px-6 py-6 text-white/60">{r[1]}</td>
                    <td className="px-6 py-6 text-xl">{r[2]}</td>
                    <td className="px-6 py-6 text-cream font-semibold">{r[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-cream">
        <div className="container-x">
          <SectionLabel>Strategy</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl mb-14 reveal">Six steps to sea-freight conversion.</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {STEPS.map(([n, t]) => (
              <div key={n} className="reveal">
                <div className="font-serif text-5xl text-teal/80">{n}</div>
                <div className="mt-2 text-sm font-medium">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-white">
        <div className="container-x grid md:grid-cols-2 gap-10">
          {[
            ["We replaced 80% of our air freight with sea routes. Margins doubled in six months.", "Hassan Ahmed · Mango Exporter, East Africa"],
            ["Our buyers in Europe stopped rejecting shipments. The savings paid for the program in one quarter.", "Carlos Mendoza · Avocado Exporter, Latin America"],
          ].map(([q, a]) => (
            <div key={a} className="reveal">
              <p className="font-serif text-3xl leading-snug">"{q}"</p>
              <p className="mt-6 text-sm text-ink/55 label-eyebrow">{a}</p>
            </div>
          ))}
        </div>
        <div className="container-x mt-16">
          <Link to="/our-story" className="btn-primary">Talk to our exporter team <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </>
  );
}
