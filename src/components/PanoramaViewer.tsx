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

const PANNELLUM_JS = "https://pannellum.org/js/pannellum.js";
const PANNELLUM_CSS = "https://pannellum.org/css/pannellum.css";

declare global {
  interface Window {
    pannellum?: {
      viewer: (el: string | HTMLElement, config: Record<string, unknown>) => { destroy: () => void };
    };
  }
}

function loadOnce(): Promise<void> {
  if (window.pannellum) return Promise.resolve();

  if (!document.querySelector(`link[href="${PANNELLUM_CSS}"]`)) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = PANNELLUM_CSS;
    document.head.appendChild(link);
  }

  const existing = document.querySelector<HTMLScriptElement>(`script[src="${PANNELLUM_JS}"]`);
  const script = existing ?? document.createElement("script");
  const promise = new Promise<void>((resolve, reject) => {
    script.addEventListener("load", () => resolve());
    script.addEventListener("error", () => reject(new Error("No se pudo cargar Pannellum")));
  });
  if (!existing) {
    script.src = PANNELLUM_JS;
    script.async = true;
    document.head.appendChild(script);
  }
  return promise;
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
