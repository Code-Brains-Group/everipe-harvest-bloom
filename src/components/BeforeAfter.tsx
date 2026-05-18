import { useCallback, useEffect, useRef, useState } from "react";

export function BeforeAfter({
  src,
  alt,
  uncoatedLabel = "Uncoated · Day 14",
  coatedLabel = "Coated · Day 14",
}: {
  src: string;
  alt: string;
  uncoatedLabel?: string;
  coatedLabel?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(2, Math.min(98, p)));
  }, []);

  useEffect(() => {
    const move = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return;
      const x = "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      update(x);
    };
    const up = () => { dragging.current = false; };
    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", move, { passive: true });
    window.addEventListener("mouseup", up);
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchend", up);
    };
  }, [update]);

  return (
    <div
      ref={ref}
      className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-ink/5 select-none cursor-ew-resize"
      onMouseDown={(e) => { dragging.current = true; update(e.clientX); }}
      onTouchStart={(e) => { dragging.current = true; update(e.touches[0].clientX); }}
    >
      {/* Coated (full) */}
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "saturate(1.18) brightness(1.05) contrast(1.05)" }}
        draggable={false}
      />
      {/* Uncoated (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img
          src={src}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "grayscale(0.6) brightness(0.72) contrast(0.92) sepia(0.3)" }}
          draggable={false}
        />
      </div>

      {/* Labels */}
      <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-ink/85 text-white text-[11px] uppercase tracking-widest">
        {uncoatedLabel}
      </div>
      <div className="absolute top-5 right-5 px-3 py-1.5 rounded-full bg-teal text-white text-[11px] uppercase tracking-widest">
        {coatedLabel}
      </div>

      {/* Divider + handle */}
      <div
        className="absolute top-0 bottom-0 w-px bg-white/90 shadow-[0_0_20px_rgba(0,0,0,0.4)]"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-0 w-12 h-12 rounded-full bg-white text-ink shadow-xl flex items-center justify-center font-mono text-xs">
          ‹ ›
        </div>
      </div>
    </div>
  );
}