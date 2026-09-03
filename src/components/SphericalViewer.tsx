import { useEffect, useRef, useState } from "react";

import "photo-sphere-viewer/dist/photo-sphere-viewer.css";

/**
 * Visor 360° con Photo Sphere Viewer instalado como dependencia npm (sin CDN).
 *
 * Para cambiar la obra inmersiva basta con reemplazar PANORAMA_URL por la URL
 * de tu propia imagen equirectangular (relación 2:1, mínimo 2048x1024).
 * Ver README.md → "Visor 360° (Photo Sphere Viewer)".
 */
export const PANORAMA_URL = "https://pannellum.org/images/alma.jpg"; // ← PLACEHOLDER equirectangular 2:1

type PSVViewer = { destroy: () => void };

export function SphericalViewer({
  src = PANORAMA_URL,
  title,
  autorotate = true,
}: {
  src?: string;
  title?: string;
  autorotate?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let viewer: PSVViewer | undefined;
    let cancelled = false;

    (async () => {
      // Import dinámico: la librería sólo se carga en el navegador.
      const { Viewer } = await import("photo-sphere-viewer");
      if (cancelled || !ref.current) return;

      ref.current.innerHTML = "";
      viewer = new Viewer({
        container: ref.current,
        panorama: src,
        caption: title ?? "",
        loadingTxt: "Cargando…",
        // Zoom: rueda del mouse + botones +/- del navbar
        mousewheel: true,
        navbar: ["zoom", "move", "caption", "fullscreen"],
        defaultZoomLvl: 50,
        // Arrastre con mouse/touch habilitado por defecto
        moveSpeed: 1,
        // Rotación automática suave (opcional, se pausa al interactuar)
        autorotateDelay: autorotate ? 2500 : null,
        autorotateIdle: autorotate,
        autorotateSpeed: "0.4rpm",
        touchmoveTwoFingers: false,
        mouseMoveCtrlKey: false,
      });
      setStatus("ready");
    })().catch((e) => {
      console.error("[SphericalViewer]", e);
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
  }, [src, title, autorotate]);

  return (
    <figure className="mt-12">
      <div className="glass overflow-hidden rounded-2xl p-2">
        <div
          id="spherical-viewer"
          ref={ref}
          className="h-[400px] w-full overflow-hidden rounded-xl bg-surface sm:h-[450px] lg:h-[500px]"
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
