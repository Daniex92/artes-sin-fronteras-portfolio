import { LogoSlot } from "./LogoSlot";

const LINKS = [
  { label: "Home", href: "#inicio" },
  { label: "About", href: "#sobre" },
  { label: "Catálogo", href: "#catalogo" },
  { label: "Contacto", href: "#contacto" },
];

export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Navegación principal"
        className="glass-strong mx-auto mt-3 flex w-[min(1200px,94%)] items-center justify-between rounded-full px-4 py-2.5 sm:px-6"
      >
        <a href="#inicio" className="flex items-center gap-3">
          <LogoSlot className="h-9 w-9 shrink-0" />
          <span className="font-display hidden text-sm font-semibold tracking-[0.18em] text-foreground uppercase sm:block">
            Artes sin Fronteras
          </span>
        </a>

        <ul className="flex items-center gap-4 text-xs tracking-[0.14em] uppercase sm:gap-7 sm:text-[0.7rem]">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="link-underline text-muted-foreground transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
