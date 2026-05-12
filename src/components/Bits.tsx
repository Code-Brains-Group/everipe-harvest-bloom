import { useEffect, useRef, useState } from "react";

export function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <span className={`label-eyebrow text-teal ${className}`}>{children}</span>;
}

export function Stat({ value, label, color = "text-white" }: { value: string; label: string; color?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState("0");
  useEffect(() => {
    const m = value.match(/^(\d+)(.*)$/);
    if (!m) { setShown(value); return; }
    const target = parseInt(m[1], 10);
    const suffix = m[2];
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          let cur = 0;
          const step = Math.max(1, Math.round(target / 40));
          const id = setInterval(() => {
            cur += step;
            if (cur >= target) { setShown(target + suffix); clearInterval(id); }
            else setShown(cur + suffix);
          }, 30);
          io.disconnect();
        }
      });
    }, { threshold: 0.4 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [value]);
  return (
    <div ref={ref} className="text-center md:text-left">
      <div className={`font-serif font-bold leading-none ${color} text-6xl md:text-7xl lg:text-[5.5rem]`}>{shown}</div>
      <div className={`mt-3 text-sm md:text-base ${color === "text-white" ? "text-white/70" : "text-ink/65"}`}>{label}</div>
    </div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="label-eyebrow text-teal mb-4">{children}</div>;
}
