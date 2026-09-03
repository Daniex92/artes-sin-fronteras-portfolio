import { useEffect, useRef, useState } from "react";

import "pannellum/build/pannellum.css";

/**
 * Visor 360° con Pannellum instalado como dependencia npm (sin depender de CDNs).
 *
 * Para cambiar la obra inmersiva basta con reemplazar PANORAMA_URL por la URL
 * de tu propia imagen equirectangular (relación 2:1, mínimo 2048x1024).
 * Ver README.md → "Visor 360° (Pannellum)".
 */
export const PANORAMA_URL = "https://pannellum.org/images/alma.jpg"; // ← PLACEHOLDER equirectangular 2:1

type PannellumViewer = { destroy: () => void };

declare global {
  interface Window {
    pannellum?: {
      viewer: (el: string | HTMLElement, config: Record<string, unknown>) => PannellumViewer;
    };
  }
}

export function PanoramaViewer({ src = PANORAMA_URL, title }: { src?: string; title?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let viewer: PannellumViewer | undefined;
    let cancelled = false;

    (async () => {
      // Import dinámico: el bundle de Pannellum sólo se carga en el navegador.
      if (!window.pannellum) await import("pannellum/build/pannellum.js");
      if (cancelled || !ref.current) return;
      if (!window.pannellum) throw new Error("Pannellum no se inicializó");

      ref.current.innerHTML = "";
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
        crossOrigin: "anonymous",
        backgroundColor: [0.04, 0.04, 0.04],
      });
      setStatus("ready");
    })().catch((e) => {
      console.error("[PanoramaViewer]", e);
      if (!cancelled) setStatus("error");
    });

    return () => {
      cancelled = true;
      try {
        viewer?.destroy();
      } catch {
        /* noop */
      }
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
        {status === "error"
          ? "El visor 360° no está disponible en este momento"
          : "Haz clic y arrastra para explorar la obra en 360°"}
      </figcaption>
    </figure>
  );
}
