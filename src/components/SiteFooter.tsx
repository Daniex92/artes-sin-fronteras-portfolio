import { Link } from "@tanstack/react-router";
import { LogoSlot } from "./LogoSlot";

const SOCIALS = [
  { label: "WhatsApp", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Facebook", href: "#" },
];

export function SiteFooter() {
  return (
    <footer id="contacto" className="px-5 pt-16 pb-10 sm:px-8">
      <div className="glass mx-auto w-[min(1200px,100%)] rounded-2xl px-6 py-10 sm:px-10">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex items-center gap-4">
            <LogoSlot className="h-12 w-12" />
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div>
                <p className="font-display text-sm font-semibold tracking-[0.18em] uppercase">
                  Sergio Guzmán
                </p>
                <p className="mt-1 text-xs text-muted-foreground">Pintor y escultor</p>
              </div>
            </Link>
          </div>

          <ul className="flex flex-wrap items-center justify-center gap-5 text-xs tracking-[0.14em] uppercase">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="link-underline text-muted-foreground transition-colors hover:text-gold"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Sergio Guzmán | Sitio web diseñado y desarrollado por <a href="https://danielsierra.online" target="_blank" rel="noopener noreferrer" className="link-underline text-muted-foreground transition-colors hover:text-gold">Daniel Sierra</a>.
        </div>
      </div>
    </footer>
  );
}
