import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/Hero";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHeading } from "@/components/SectionHeading";
import { ArtworkCard } from "@/components/ArtworkCard";
import { PanoramaViewer } from "@/components/PanoramaViewer";
import { ARTWORKS } from "@/data/artworks";
import { CUADROS } from "@/data/cuadros";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sergio Guzmán | Lorem ipsum" },
      {
        name: "description",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      },
      { property: "og:title", content: "Sergio Guzmán | Lorem ipsum" },
      {
        property: "og:description",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

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
              eyebrow="Mejores obras de arte"
              title="Obras Importantes"
              description="Aquí se presentan algunas de mis obras más destacadas, que reflejan mi estilo único y mi pasión por el arte."
            />

            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {[
                {
                  k: "Lorem",
                  v: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                },
                {
                  k: "Ipsum",
                  v: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                },
                {
                  k: "Dolor",
                  v: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
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

        {/* CATÁLOGO CUADROS */}
        <section id="catalogo" className="px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto w-[min(1200px,100%)]">
            <SectionHeading
              eyebrow="Catalogo de Cuadros"
              title="Cuadros de barro vivo y otros"
              description="Colección de cuadros de barro vivo y otras obras de arte."
            />

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {CUADROS.map((a) => (
                <ArtworkCard key={a.title} cuadros={a} type="cuadro" />
              ))}
            </div>
          </div>
        </section>

        {/* CATÁLOGO MURALES*/}
        <section id="panoramas" className="px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto w-[min(1200px,100%)]">
            <SectionHeading
              eyebrow="Catalogo de Murales"
              title="Murales de barro vivo y otros"
              description="Colección de murales de barro vivo y otras obras de arte."
            />

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {ARTWORKS.map((a) => (
                <ArtworkCard key={a.title} cuadros={a} type="artwork" />
              ))}
            </div>

<<<<<<< Updated upstream
            {/* Visor panorámico 360° (Photo Sphere Viewer, npm) */}
            <SphericalViewer title="Galería inmersiva · Artes sin Fronteras" />
=======
            {/* Visor panorámico 360° (Pannellum vía CDN) */}
            <PanoramaViewer title="Lorem ipsum · Sergio Guzmán" />
>>>>>>> Stashed changes
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
