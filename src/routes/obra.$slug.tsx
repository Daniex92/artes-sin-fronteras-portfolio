import { createFileRoute, Link } from "@tanstack/react-router";

import { PanoramaViewer } from "@/components/PanoramaViewer";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { getArtwork } from "@/data/artworks";
import Preview from "@/assets/Tempt.jpg";

export const Route = createFileRoute("/obra/$slug")({
  component: ArtworkDetail,
});

function ArtworkDetail() {
  const { slug } = Route.useParams();
  const artwork = getArtwork(slug);

  if (!artwork) {
    return (
      <div className="min-h-screen">
        <SiteNav />
        <main className="mx-auto flex min-h-[60vh] w-[min(1200px,100%)] flex-col items-start justify-center px-5 py-20 sm:px-8">
          <p className="text-xs tracking-[0.24em] text-gold-soft uppercase">Lorem ipsum</p>
          <h1 className="mt-4 font-display text-4xl text-foreground">Lorem ipsum dolor sit amet</h1>
          <Link
            to="/"
            hash="catalogo"
            className="mt-8 text-sm text-gold underline-offset-4 hover:underline"
          >
            Prueba para volver al catálogo
          </Link>
        </main>
        <SiteFooter />
      </div>
    );
  }

  const PANORAMA_URL =
  "Preview" in artwork ? artwork.Preview : Preview;

  return (
    <div className="min-h-screen">
      <SiteNav />

      <main>
        <section className="px-5 pb-16 pt-12 sm:px-8 lg:pb-24 lg:pt-20">
          <div className="mx-auto w-[min(1200px,100%)]">
            <Link
              to="/"
              hash="catalogo"
              className="link-underline inline-flex text-xs tracking-[0.2em] text-muted-foreground uppercase transition-colors hover:text-gold"
            >
              ← Lorem ipsum
            </Link>

            <div className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:gap-16">
              <figure className="glass overflow-hidden rounded-2xl p-2 shadow-soft">
                <div className="aspect-[4/5] overflow-hidden rounded-xl bg-surface sm:aspect-[5/4] lg:aspect-[4/5]">
                  <img
                    src={artwork.image}
                    alt={`Lorem ipsum ${artwork.title}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              </figure>

              <div className="lg:pt-8">
                <p className="text-xs tracking-[0.24em] text-gold-soft uppercase">Detalles de la obra</p>
                <h1 className="mt-4 text-4xl leading-tight text-foreground sm:text-5xl">
                  {artwork.title}
                </h1>
                <p className="mt-5 text-sm tracking-[0.14em] text-muted-foreground uppercase">
                  {artwork.technique} · {artwork.year}
                </p>
                <div className="mt-8 h-px w-16 bg-gold" />
                <p className="mt-8 text-base leading-relaxed text-muted-foreground">
                  {artwork.description}
                </p>
                <p className="mt-6 text-sm text-beige">{artwork.details}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-gold/20 px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto w-[min(1200px,100%)]">
            <div className="max-w-2xl">
              <p className="text-xs tracking-[0.24em] text-gold-soft uppercase">Imagen 360 de la obra</p>
              <h2 className="mt-3 text-3xl text-foreground">En caso de que el mural lo requira, su imagen 360 estarà disponible para ver. {artwork.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Disponible para ver en 360 grados.
              </p>
            </div>
            <PanoramaViewer src={PANORAMA_URL} title={`Lorem ipsum · ${artwork.title}`} />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
