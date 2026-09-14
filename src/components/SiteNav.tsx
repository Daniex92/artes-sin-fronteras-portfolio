import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";

import { LogoSlot } from "./LogoSlot";

const LINKS = [
  { label: "Inicio", href: "/", hash: undefined },
  { label: "Sobre", href: "/", hash: "sobre" },
  { label: "Catalogo", href: "/", hash: "catalogo" },
  { label: "Panoramas", href: "/", hash: "panoramas" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Cierra con Escape y bloquea el scroll del body mientras el drawer está abierto.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Navegación principal"
        className="glass-strong mx-auto mt-3 flex w-[min(1200px,94%)] items-center justify-between rounded-full px-4 py-2.5 sm:px-6"
      >
        <Link to="/" className="flex items-center gap-3">
          <LogoSlot className="h-9 w-9 shrink-0" />
          <span className="font-display text-sm font-semibold tracking-[0.18em] text-foreground uppercase">
            Arte Sin Fronteras
          </span>
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-7 text-[0.7rem] tracking-[0.14em] uppercase md:flex">
          {LINKS.map((l) => (
            <li key={l.label}>
              <Link
                to={l.href}
                hash={l.hash}
                className="link-underline text-muted-foreground transition-colors hover:text-gold"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile: botón hamburguesa */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Abrir menú"
          aria-expanded={open}
          aria-controls="mobile-drawer"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-gold transition-colors hover:bg-gold/10 md:hidden"
        >
          <span className="sr-only">Abrir menú</span>
          <span aria-hidden className="flex flex-col gap-[5px]">
            <span className="block h-[2px] w-5 bg-current" />
            <span className="block h-[2px] w-5 bg-current" />
            <span className="block h-[2px] w-5 bg-current" />
          </span>
        </button>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden={!open}
        className={`fixed inset-0 z-40 bg-background/70 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer / offcanvas desde la izquierda */}
      <div
        id="mobile-drawer"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        className={`glass-strong fixed top-0 left-0 z-50 flex h-full w-[min(78vw,320px)] flex-col gap-8 px-6 py-6 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LogoSlot className="h-9 w-9 shrink-0" />
            <span className="font-display text-xs font-semibold tracking-[0.18em] uppercase">
              Sergio Guzmán
            </span>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Cerrar menú"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-gold transition-colors hover:bg-gold/10"
          >
            ✕
          </button>
        </div>

        <ul className="flex flex-col gap-1 text-sm tracking-[0.14em] uppercase">
          {LINKS.map((l) => (
            <li key={l.label}>
              <Link
                to={l.href}
                hash={l.hash}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 text-muted-foreground transition-colors hover:bg-gold/10 hover:text-gold"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-auto text-xs text-muted-foreground">Lorem ipsum dolor sit amet</p>
      </div>
    </header>
  );
}
