import { LogoSlot } from "./LogoSlot";

const SOCIALS = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "WhatsApp", href: "#" },
  { label: "Email", href: "#" },
];

export function SiteFooter() {
  return (
    <footer id="contacto" className="px-5 pt-16 pb-10 sm:px-8">
      <div className="glass mx-auto w-[min(1200px,100%)] rounded-2xl px-6 py-10 sm:px-10">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex items-center gap-4">
            <LogoSlot className="h-12 w-12" />
            <div>
              <p className="font-display text-sm font-semibold tracking-[0.18em] uppercase">
                Artes sin Fronteras
              </p>
              <p className="mt-1 text-xs text-muted-foreground">Pintura estilo Ráquira · Colombia</p>
            </div>
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
          © {new Date().getFullYear()} Artes sin Fronteras. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
