export type Artwork = {
  title: string;
  technique: string;
  image: string;
  /** Reservado para el visor 360° (Pannellum). Placeholder por ahora. */
  panorama?: string;
};

export function ArtworkCard({ artwork }: { artwork: Artwork }) {
  return (
    <article
      className="glass group overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-glow"
      data-panorama={artwork.panorama ?? undefined}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={artwork.image}
          alt={`Placeholder de la obra ${artwork.title}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="flex items-center justify-between gap-3 px-5 py-4">
        <div>
          <h3 className="text-base font-semibold text-foreground">{artwork.title}</h3>
          <p className="mt-1 text-xs tracking-[0.14em] text-muted-foreground uppercase">
            {artwork.technique}
          </p>
        </div>
        <span className="text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          →
        </span>
      </div>
    </article>
  );
}
