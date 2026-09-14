export type Artwork = {
  slug: string;
  title: string;
  technique: string;
  image: string;
  year: string;
  description: string;
  details: string;
  panorama?: string;
};

const PLACEHOLDER_PANORAMA = "/assets/preview360.jpg";
const BarroVivoPanorama = "/assets/preview02.jpg";

export const ARTWORKS: Artwork[] = [
  /* Barro VIVO - Cuadro de barro vivo sobre lienzo */
  {
    slug: "barro-vivo",
    title: "Cuadro de barro vivo",
    technique: "Cuadro de barro vivo sobre lienzo de algodón y bastidor de madera",
    image:
      "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?auto=format&fit=crop&w=1200&q=80",
    year: "2026",
    description:
      "Este cuadro representa la esencia del barro vivo en la tradición artística local.",
    details: "Cuadro de lienzo · 80 × 100 cm",
    panorama: BarroVivoPanorama,
  },

  /* Cuadro 2 */
  {
    slug: "feria-de-colores",
    title: "Feria de Colores",
    technique: "Técnica mixta sobre lienzo",
    image:
      "https://images.unsplash.com/photo-1552083375-1447ce886485?auto=format&fit=crop&w=1200&q=80",
    year: "2026",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
    details: "Técnica mixta · 70 × 90 cm",
    panorama: PLACEHOLDER_PANORAMA,
  },

  /* Cuadro 3 */
  {
    slug: "alfarera",
    title: "Alfarera",
    technique: "Técnica mixta sobre lienzo",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80",
    year: "2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.",
    details: "Técnica mixta · 60 × 80 cm",
    panorama: PLACEHOLDER_PANORAMA,
  },

  /* Cuadro 4 */
  {
    slug: "rutas-del-altiplano",
    title: "Lorem Ipsum IV",
    technique: "Lorem ipsum dolor",
    image:
      "https://images.unsplash.com/photo-1531913764164-f85c52e6e654?auto=format&fit=crop&w=1200&q=80",
    year: "2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit.",
    details: "Lorem ipsum · 90 × 120 cm",
    panorama: PLACEHOLDER_PANORAMA,
  },

  /* Cuadro 5 */
  {
    slug: "fiesta-de-raquira",
    title: "Lorem Ipsum V",
    technique: "Lorem ipsum dolor",
    image:
      "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?auto=format&fit=crop&w=1200&q=80",
    year: "2026",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat.",
    details: "Lorem ipsum · 80 × 100 cm",
    panorama: PLACEHOLDER_PANORAMA,
  },

  /* Cuadro 6 */
  {
    slug: "memoria-de-arcilla",
    title: "Lorem Ipsum VI",
    technique: "Lorem ipsum dolor",
    image:
      "https://images.unsplash.com/photo-1487147264018-f937fba0c817?auto=format&fit=crop&w=1200&q=80",
    year: "2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sunt in culpa qui officia deserunt.",
    details: "Lorem ipsum · 50 × 70 cm",
    panorama: PLACEHOLDER_PANORAMA,
  },
];

export function getArtwork(slug: string) {
  return ARTWORKS.find((artwork) => artwork.slug === slug);
}
