import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/Hero";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHeading } from "@/components/SectionHeading";
import { ArtworkCard, type Artwork } from "@/components/ArtworkCard";
import { SphericalViewer } from "@/components/SphericalViewer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Artes sin Fronteras | Pintura estilo Ráquira" },
      {
        name: "description",
        content:
          "Portafolio de arte contemporáneo con pintura estilo Ráquira: obras coloridas, detalladas y vibrantes inspiradas en la tradición boyacense.",
      },
      { property: "og:title", content: "Artes sin Fronteras | Pintura estilo Ráquira" },
      {
        property: "og:description",
        content:
          "Obras coloridas, detalladas y vibrantes que unen la tradición artesanal de Ráquira con el arte contemporáneo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const ARTWORKS: Artwork[] = [
  {
    title: "Barro Vivo",
    technique: "Acrílico sobre lienzo",
    image:
      "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?auto=format&fit=crop&w=800&q=70",
  },
  {
    title: "Feria de Colores",
    technique: "Mixta sobre madera",
    image:
      "https://images.unsplash.com/photo-1552083375-1447ce886485?auto=format&fit=crop&w=800&q=70",
  },
  {
    title: "Alfarera",
    technique: "Óleo sobre lienzo",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=70",
  },
  {
    title: "Rutas del Altiplano",
    technique: "Acrílico y pan de oro",
    image:
      "https://images.unsplash.com/photo-1531913764164-f85c52e6e654?auto=format&fit=crop&w=800&q=70",
  },
  {
    title: "Fiesta de Ráquira",
    technique: "Acrílico sobre lienzo",
    image:
      "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?auto=format&fit=crop&w=800&q=70",
  },
  {
    title: "Memoria de Arcilla",
    technique: "Mixta sobre papel",
    image:
      "https://images.unsplash.com/photo-1487147264018-f937fba0c817?auto=format&fit=crop&w=800&q=70",
  },
];

function Index() {
  return (
    <div className="min-h-screen">
      <SiteNav />

      <main>
        <Hero />

        {/* ABOUT */}
        <section id="sobre" className="px-5 py-20 sm:px-8 lg:py-24">
          <div className="mx-auto w-[min(1200px,100%)]">
            <SectionHeading
              eyebrow="Sobre el artista"
              title="Tradición que se pinta a sí misma"
              description="El estilo Ráquira nace de la alfarería boyacense: figuras cálidas, patrones repetidos y una paleta que celebra la vida. Cada pieza traduce ese lenguaje al lienzo con capas de detalle y color."
            />

            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {[
                {
                  k: "Color",
                  v: "Paletas vibrantes construidas por capas para lograr profundidad y luz.",
                },
                {
                  k: "Detalle",
                  v: "Trazo minucioso inspirado en los grabados de la cerámica tradicional.",
                },
                {
                  k: "Raíz",
                  v: "Cada obra parte de una historia local y termina en un lenguaje universal.",
                },
              ].map((item) => (
                <div
                  key={item.k}
                  className="glass rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow"
                >
                  <p className="text-xs tracking-[0.24em] text-gold-soft uppercase">{item.k}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.v}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CATÁLOGO */}
        <section id="catalogo" className="px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto w-[min(1200px,100%)]">
            <SectionHeading
              eyebrow="Catálogo"
              title="Obras seleccionadas"
              description="Imágenes de referencia temporales. Cada obra podrá abrirse en un recorrido inmersivo 360°."
            />

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {ARTWORKS.map((a) => (
                <ArtworkCard key={a.title} artwork={a} />
              ))}
            </div>

            {/* Visor panorámico 360° (Photo Sphere Viewer, npm) */}
            <SphericalViewer title="Galería inmersiva · Artes sin Fronteras" />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
