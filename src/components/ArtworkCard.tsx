<<<<<<< Updated upstream
export type Artwork = {
  title: string;
  technique: string;
  image: string;
  /** Reservado para el visor 360° (Photo Sphere Viewer). Placeholder por ahora. */
  panorama?: string;
};
=======
import { Link } from "@tanstack/react-router";

import type { Artwork } from "@/data/artworks";
import type { Cuadros } from "@/data/cuadros";

type ArtItem = Artwork | Cuadros;

export function ArtworkCard({ cuadros, type = "cuadro" }: { cuadros: ArtItem; type?: "cuadro" | "artwork" }) {
  const route = type === "cuadro" ? "/cuadro/$slug" : "/obra/$slug";
>>>>>>> Stashed changes

  return (
    <Link
      to={route}
      params={{ slug: cuadros.slug }}
      className="glass group overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-glow"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={cuadros.image}
          alt={`Placeholder de la obra ${cuadros.title}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="flex items-center justify-between gap-3 px-5 py-4">
        <div>
          <h3 className="text-base font-semibold text-foreground">{cuadros.title}</h3>
          <p className="mt-1 text-xs tracking-[0.14em] text-muted-foreground uppercase">
            {cuadros.technique}
          </p>
        </div>
        <span className="text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          →
        </span>
      </div>
    </Link>
  );
}
