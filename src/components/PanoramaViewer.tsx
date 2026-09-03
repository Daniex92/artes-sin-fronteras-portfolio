import { useEffect, useRef, useState } from "react";

/**
 * Visor 360° con Pannellum cargado desde CDN (sin dependencias npm).
 *
 * Para cambiar la obra inmersiva basta con reemplazar PANORAMA_URL por la URL
 * de tu propia imagen equirectangular (relación 2:1, mínimo 2048x1024).
 * Ver README.md → "Visor 360° (Pannellum)".
 */
export const PANORAMA_URL =
  "https://pannellum.org/images/alma.jpg"; // ← PLACEHOLDER equirectangular 2:1

// CDN oficial primero; si la red lo bloquea, se intenta un espejo.
const JS_SOURCES = [
  "https://pannellum.org/js/pannellum.js",
  "https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js",
];
const CSS_SOURCES = [
  "https://pannellum.org/css/pannellum.css",
  "https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css",
];

declare global {
  interface Window {
    pannellum?: {
      viewer: (el: string | HTMLElement, config: Record<string, unknown>) => { destroy: () => void };
    };
  }
}

function injectCss(href: string) {
  if (document.querySelector(`link[href="${href}"]`)) return;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  link.addEventListener("error", () => {
    const next = CSS_SOURCES[CSS_SOURCES.indexOf(href) + 1];
    if (next) injectCss(next);
  });
  document.head.appendChild(link);
}

function injectJs(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);
    const script = existing ?? document.createElement("script");
    script.addEventListener("load", () => resolve());
    script.addEventListener("error", () => reject(new Error(`No se pudo cargar ${src}`)));
    if (!existing) {
      script.src = src;
      script.async = true;
      document.head.appendChild(script);
    }
  });
}

async function loadOnce(): Promise<void> {
  if (window.pannellum) return;
  injectCss(CSS_SOURCES[0]!);
  let lastError: unknown;
  for (const src of JS_SOURCES) {
    try {
      await injectJs(src);
      if (window.pannellum) return;
    } catch (e) {
      lastError = e;
    }
  }
  throw lastError ?? new Error("Pannellum no disponible");
}

export function PanoramaViewer({ src = PANORAMA_URL, title }: { src?: string; title?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let viewer: { destroy: () => void } | undefined;
    let cancelled = false;

    loadOnce()
      .then(() => {
        if (cancelled || !ref.current || !window.pannellum) return;
        viewer = window.pannellum.viewer(ref.current, {
          type: "equirectangular",
          panorama: src,
          title,
          autoLoad: true,
          showZoomCtrl: true, // zoom con botones y rueda
          keyboardZoom: true,
          mouseZoom: true, // arrastre + rueda
          draggable: true,
          showFullscreenCtrl: true, // pantalla completa
          compass: false,
          hfov: 100,
          minHfov: 50,
          maxHfov: 120,
          backgroundColor: [0.04, 0.04, 0.04],
        });
      })
      .catch(() => setError(true));

    return () => {
      cancelled = true;
      viewer?.destroy();
    };
  }, [src, title]);

  return (
    <figure className="mt-12">
      <div className="glass overflow-hidden rounded-2xl p-2">
        <div
          id="pannellum-viewer"
          ref={ref}
          className="h-[400px] w-full rounded-xl bg-surface sm:h-[450px] lg:h-[500px]"
        />
      </div>
      <figcaption className="mt-4 text-center text-xs tracking-[0.24em] text-gold-soft uppercase">
        {error
          ? "El visor 360° no está disponible en este momento"
          : "Haz clic y arrastra para explorar la obra en 360°"}
      </figcaption>
    </figure>
  );
}
