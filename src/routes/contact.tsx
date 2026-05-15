import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Mail, MapPin, Building2 } from "lucide-react";
import { useState } from "react";
import { SectionLabel } from "@/components/Bits";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Partner with Everipe" },
      { name: "description", content: "Talk to the Everipe team about deploying TAEC across your farm, packhouse, or supply chain." },
    ],
  }),
  component: Contact,
});

const ROLES = ["Farmer / Cooperative", "Exporter", "Retailer / Distributor", "Investor", "Press", "Other"];

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="pt-40 pb-20 md:pt-48 md:pb-28 bg-cream">
        <div className="container-x grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <SectionLabel>Get in Touch</SectionLabel>
            <h1 className="font-serif text-5xl md:text-6xl leading-[1.05]">
              Let's keep more harvests <span className="text-teal">alive.</span>
            </h1>
            <p className="mt-6 text-lg text-ink/70 leading-relaxed">
              Whether you grow, ship, sell, or invest in fresh produce — we'd love to talk about how TAEC can extend your shelf life and reduce waste.
            </p>

            <ul className="mt-12 space-y-6">
              <li className="flex gap-4">
                <Mail className="w-5 h-5 text-teal mt-1 shrink-0" />
                <div>
                  <div className="label-eyebrow text-ink/55">Email</div>
                  <a href="mailto:hello@everipe.com" className="text-ink hover:text-teal">hello@everipe.com</a>
                </div>
              </li>
              <li className="flex gap-4">
                <MapPin className="w-5 h-5 text-teal mt-1 shrink-0" />
                <div>
                  <div className="label-eyebrow text-ink/55">Headquarters</div>
                  <div className="text-ink">Nairobi, Kenya</div>
                </div>
              </li>
              <li className="flex gap-4">
                <Building2 className="w-5 h-5 text-teal mt-1 shrink-0" />
                <div>
                  <div className="label-eyebrow text-ink/55">Partnerships</div>
                  <a href="mailto:partners@everipe.com" className="text-ink hover:text-teal">partners@everipe.com</a>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-border"
            >
              {sent ? (
                <div className="py-16 text-center">
                  <h3 className="font-serif text-3xl text-teal">Thank you.</h3>
                  <p className="mt-4 text-ink/70">We'll be in touch within two business days.</p>
                </div>
              ) : (
                <div className="grid gap-5">
                  <h2 className="font-serif text-2xl mb-2">Tell us about your operation</h2>
                  <div className="grid md:grid-cols-2 gap-5">
                    <Field label="Full name" name="name" required />
                    <Field label="Company" name="company" required />
                  </div>
                  <Field label="Email" name="email" type="email" required />
                  <div>
                    <label className="label-eyebrow text-ink/60 block mb-2">I am a…</label>
                    <select name="role" className="w-full rounded-xl border border-border bg-cream/40 px-4 py-3 text-ink focus:outline-none focus:border-teal">
                      {ROLES.map((r) => <option key={r}>{r}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="label-eyebrow text-ink/60 block mb-2">How can we help?</label>
                    <textarea name="message" rows={5} required className="w-full rounded-xl border border-border bg-cream/40 px-4 py-3 text-ink focus:outline-none focus:border-teal" />
                  </div>
                  <button type="submit" className="btn-primary mt-2 self-start">
                    Send message <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-xs text-ink/50 mt-2">We respect your data. No spam, ever.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="label-eyebrow text-ink/60 block mb-2">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-border bg-cream/40 px-4 py-3 text-ink focus:outline-none focus:border-teal"
      />
    </div>
  );
}
