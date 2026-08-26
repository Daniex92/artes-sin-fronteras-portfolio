import { LogoSlot } from "./LogoSlot";
import { ParticleField } from "./ParticleField";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1000&q=70";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden px-5 pt-28 pb-20 sm:px-8 lg:pt-36 lg:pb-28"
    >
      <ParticleField />

      <div className="relative mx-auto grid w-[min(1200px,100%)] items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Columna izquierda */}
        <div className="animate-rise">
          <LogoSlot className="mb-8 h-20 w-20 sm:h-24 sm:w-24" />

          <p className="text-[0.7rem] tracking-[0.32em] text-gold-soft uppercase">
            Pintura estilo Ráquira
          </p>

          <h1 className="text-gradient-gold animate-shimmer mt-4 text-4xl leading-[1.05] font-bold sm:text-5xl lg:text-6xl">
            Artes sin Fronteras
          </h1>

          <p className="mt-5 max-w-md text-base text-beige/90 sm:text-lg">
            Color, detalle y tradición boyacense
            <br className="hidden sm:block" /> llevados al lienzo contemporáneo.
          </p>

          <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
            Cada obra nace del oficio artesanal de Ráquira y se transforma en una pieza vibrante,
            minuciosa y viva. Un puente entre la memoria del barro y la mirada del arte actual, sin
            fronteras ni etiquetas.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#catalogo"
              className="group relative inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold tracking-wide text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              Explorar Obras
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contacto"
              className="glass inline-flex items-center rounded-full px-7 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:text-gold"
            >
              Hablemos
            </a>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="animate-rise [--rise-delay:150ms]">
          <figure className="glass relative mx-auto w-full max-w-lg rounded-2xl p-2.5 shadow-glow">
            <div className="aspect-4/5 overflow-hidden rounded-xl">
              {/* Placeholder: reemplazar por la obra real */}
              <img
                src={HERO_IMAGE}
                alt="Obra placeholder de pintura colorida estilo Ráquira"
                loading="eager"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <figcaption className="flex items-center justify-between px-3 py-3 text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
              <span>Obra destacada</span>
              <span className="text-gold-soft">Acrílico · 2026</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
