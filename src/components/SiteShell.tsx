import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/technology", label: "Technology" },
  { to: "/products", label: "Products" },
  { to: "/farmers", label: "Farmers" },
  { to: "/exporters", label: "Exporters" },
  { to: "/retailers", label: "Retailers" },
  { to: "/our-story", label: "Our Story" },
] as const;

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => { setOpen(false); }, [path]);

  return (
    <div className="min-h-screen bg-cream text-ink">
      <header
        className="fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-cream/95 backdrop-blur border-b border-border"
      >
        <div className="container-x flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="w-8 h-8 rounded-full grid place-items-center font-serif text-lg font-bold bg-teal text-white">e</span>
            <span className="font-serif text-xl font-semibold tracking-tight text-teal">everipe</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                className="text-sm font-medium transition-colors text-ink/70 hover:text-teal"
                activeProps={{ className: "text-teal" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <Link to="/contact" className="text-sm px-4 py-2 rounded-full border border-ink/20 text-ink hover:bg-ink hover:text-cream">
              Partner With Us
            </Link>
            <Link to="/contact" className="btn-primary text-sm !py-2.5">Get in Touch</Link>
          </div>
          <button onClick={() => setOpen(true)} className="lg:hidden p-2 text-ink" aria-label="Menu">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] bg-teal text-white animate-fade-in">
          <div className="container-x flex items-center justify-between h-16 md:h-20">
            <span className="font-serif text-xl font-semibold">everipe</span>
            <button onClick={() => setOpen(false)} className="p-2" aria-label="Close"><X className="w-6 h-6" /></button>
          </div>
          <nav className="flex flex-col items-center gap-7 mt-16">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} className="font-serif text-3xl">{n.label}</Link>
            ))}
            <Link to="/contact" className="mt-6 px-6 py-3 rounded-full bg-white text-teal font-medium">Get in Touch</Link>
          </nav>
        </div>
      )}

      <main>{children}</main>

      <footer className="bg-forest text-white/80">
        <div className="container-x py-20">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-8 h-8 rounded-full bg-white text-forest grid place-items-center font-serif font-bold">e</span>
                <span className="font-serif text-xl text-white">everipe</span>
              </div>
              <p className="font-serif text-2xl text-white/90 leading-snug max-w-sm">
                Where every harvest counts.
              </p>
            </div>
            <FooterCol title="Everipe" links={[["About", "/our-story"], ["Technology", "/technology"], ["Products", "/products"]]} />
            <FooterCol title="Stakeholders" links={[["Farmers", "/farmers"], ["Exporters", "/exporters"], ["Retailers", "/retailers"]]} />
            <FooterCol title="Contact" links={[["hello@everipe.com", "mailto:hello@everipe.com"], ["Partner with Us", "/contact"], ["Get in Touch", "/contact"]]} />
          </div>
          <div className="mt-16 pt-8 border-t border-white/15 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-white/55">
            <p>© 2024 Everipe. Advanced Postharvest Protection for Global Supply Chains.</p>
            <p>Built in Kenya · Deployed worldwide</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="label-eyebrow text-white/60 mb-4">{title}</h4>
      <ul className="space-y-2.5 text-sm">
        {links.map(([l, h]) => (
          <li key={l}>
            {h.startsWith("/") ? (
              <Link to={h} className="hover:text-white transition-colors">{l}</Link>
            ) : (
              <a href={h} className="hover:text-white transition-colors">{l}</a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
