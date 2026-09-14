export type Cuadros = {
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

export const CUADROS: Cuadros[] = [
  /* Barro VIVO - Cuadro de barro vivo sobre lienzo */
  {
    slug: "Prueba de Cuadro",
    title: "CUADRO DE PRUEBA",
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
];

export function getCuadro(slug: string) {
  return CUADROS.find((cuadro) => cuadro.slug === slug);
}
