import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";

export type VariantItem = { slug: string; name: string; img: string; tag?: string };

export function VariantCarousel({ items, lineLabel }: { items: VariantItem[]; lineLabel: string }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true,
    containScroll: "trimSnaps",
  });
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);
  const [progress, setProgress] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
    setProgress(Math.max(0, Math.min(1, emblaApi.scrollProgress())));
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("scroll", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const total = items.length;
  const numFmt = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="mt-12 reveal">
      <div className="overflow-hidden -mx-6 md:-mx-12 px-6 md:px-12" ref={emblaRef}>
        <div className="flex gap-5 md:gap-6">
          {items.map((it, i) => (
            <Link
              key={it.slug}
              to="/products/$slug"
              params={{ slug: it.slug }}
              className="group relative shrink-0 basis-[78%] sm:basis-[46%] md:basis-[34%] lg:basis-[26%] aspect-[4/5] rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all"
            >
              <img
                src={it.img}
                alt={it.name}
                loading={i < 2 ? "eager" : "lazy"}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/15 to-transparent" />
              <div className="absolute top-5 left-5 text-white/80 font-mono text-[11px] tracking-widest">
                {numFmt(i + 1)} / {numFmt(total)}
              </div>
              <div className="absolute bottom-0 inset-x-0 p-6">
                <div className="font-serif text-3xl md:text-4xl text-white leading-none">{it.name}</div>
                <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-white/80">
                  Coated vs uncoated
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
              <div className="absolute inset-0 ring-0 ring-teal/0 group-hover:ring-2 group-hover:ring-teal/40 rounded-3xl transition-all" />
            </Link>
          ))}
        </div>
      </div>

      {/* Creative pagination bar */}
      <div className="mt-10 flex items-end justify-between gap-8 flex-wrap">
        <div className="flex items-baseline gap-4">
          <span className="font-serif text-5xl md:text-6xl text-teal leading-none tabular-nums">{numFmt(selected + 1)}</span>
          <span className="text-ink/40 font-mono text-sm">/ {numFmt(total)}</span>
          <span className="hidden md:inline label-eyebrow text-ink/40 ml-3">{lineLabel} variety</span>
        </div>

        <div className="flex-1 min-w-[180px] max-w-md">
          <div className="h-px bg-ink/10 relative overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-teal transition-[width] duration-300"
              style={{ width: `${Math.max(8, progress * 100)}%` }}
            />
          </div>
          <div className="mt-4 flex gap-2">
            {snaps.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Go to ${items[i]?.name ?? `slide ${i + 1}`}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === selected ? "w-10 bg-teal" : "w-4 bg-ink/15 hover:bg-ink/30"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => emblaApi?.scrollPrev()}
            aria-label="Previous variety"
            className="w-12 h-12 rounded-full border border-ink/20 hover:border-teal hover:text-teal flex items-center justify-center transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            aria-label="Next variety"
            className="w-12 h-12 rounded-full border border-ink/20 hover:border-teal hover:text-teal flex items-center justify-center transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}