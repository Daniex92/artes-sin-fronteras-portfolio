# Artes sin Fronteras

Portafolio de arte con pintura estilo Ráquira. Construido con TanStack Start, React,
TypeScript y Tailwind CSS.

## Development

```sh
npm i
npm run dev
```

---

## Logo

Coloca tu logo SVG en `public/logo.svg`. El componente `LogoSlot` lo usa
automáticamente y muestra un marcador dorado si el archivo no existe.

---

## Visor 360° (Pannellum)

El visor vive en `src/components/PanoramaViewer.tsx` y carga Pannellum desde CDN
(`https://pannellum.org/js/pannellum.js` + su CSS), sin dependencias npm.
Se renderiza en el contenedor `<div id="pannellum-viewer">` dentro de la sección
**Catálogo** con altura responsiva de 400–500 px y controles de zoom, arrastre y
pantalla completa habilitados.

### Cómo reemplazar la imagen

1. Sube tu panorámica a `public/` (por ejemplo `public/panoramas/obra-01.jpg`)
   o a un hosting/CDN propio.
2. Abre `src/components/PanoramaViewer.tsx` y cambia la constante:

   ```ts
   export const PANORAMA_URL = "/panoramas/obra-01.jpg";
   ```

3. Guarda: el visor se recarga con la nueva obra.

También puedes pasar la imagen por prop, sin tocar la constante:

```tsx
<PanoramaViewer src="/panoramas/obra-02.jpg" title="Feria de Colores 360°" />
```

### Formato recomendado

| Requisito   | Valor                                              |
| ----------- | -------------------------------------------------- |
| Proyección  | Equirectangular (esférica, 360° × 180°)            |
| Relación    | Exactamente 2:1                                    |
| Resolución  | Mínimo 2048 × 1024 px; ideal 4096 × 2048 px        |
| Formato     | JPG (calidad 80–85) para el mejor peso/definición   |
| Peso        | Idealmente < 3 MB para una carga rápida en móvil    |

Si la relación no es 2:1, la escena aparecerá estirada o con costuras visibles.

### 360° equirectangular vs. imagen 2D plana

- **360° equirectangular**: una sola imagen que envuelve toda la esfera alrededor
  del espectador. Los bordes izquierdo y derecho se unen y el usuario puede girar,
  mirar arriba/abajo y acercarse. Se genera con cámara 360 (Insta360, Ricoh Theta),
  con un panorama cosido en Lightroom/PTGui, o con un render 3D exportado en modo
  panorámico. Es el único formato válido para el visor de esta página.
- **Imagen 2D plana**: una foto normal (por ejemplo 4:3 o 1:1), como las del
  catálogo. No tiene información de esfera: si la cargas en Pannellum se verá
  deformada y con un hueco negro al girar. Estas imágenes van en las tarjetas de
  obra (`ArtworkCard`), no en el visor.

Regla práctica: si la imagen se puede "recorrer girando en todas direcciones", es
360°; si es un cuadro que se mira de frente, es 2D y va en el catálogo.

---

## Placeholders actuales

- Obras del catálogo: imágenes temporales de Unsplash en `src/routes/index.tsx`
  (array `ARTWORKS`).
- Panorámica 360°: placeholder equirectangular en `PANORAMA_URL`.
