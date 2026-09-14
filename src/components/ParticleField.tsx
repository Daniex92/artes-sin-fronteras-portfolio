import { cn } from "@/lib/utils";

const PARTICLES = Array.from({ length: 28 }, (_, i) => {
  const seed = (i * 67) % 100;
  return {
    left: `${(seed * 2.7) % 100}%`,
    top: `${(seed * 3.1) % 100}%`,
    size: 2 + (i % 4),
    duration: `${10 + (i % 7) * 1.8}s`,
    delay: `${(i % 9) * 0.9}s`,
    beige: i % 3 === 0,
  };
});

/** Partículas decorativas en CSS puro para el fondo. */
export function ParticleField({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className={cn(
            "animate-particle absolute rounded-full",
            p.beige ? "bg-beige/50" : "bg-gold/60",
          )}
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            ["--particle-duration" as string]: p.duration,
            ["--particle-delay" as string]: p.delay,
          }}
        />
      ))}
    </div>
  );
}
