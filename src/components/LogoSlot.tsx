import { cn } from "@/lib/utils";

type LogoSlotProps = {
  /** Ruta al SVG externo, ej: "/logo.svg". Si no existe, se muestra el placeholder. */
  src?: string;
  className?: string;
  label?: string;
};

/**
 * Espacio reservado para el logo SVG externo.
 * Basta con pasar `src="/logo.svg"` cuando el archivo esté disponible.
 */
export function LogoSlot({ src, className, label = "Artes sin Fronteras" }: LogoSlotProps) {
  return (
    <div
      data-logo-slot
      className={cn(
        "flex items-center justify-center overflow-hidden rounded-md",
        !src && "glass border-dashed",
        className,
      )}
    >
      {src ? (
        <img src={src} alt={label} className="h-full w-full object-contain" />
      ) : (
        <span className="px-2 text-[10px] font-medium tracking-[0.22em] text-gold-soft uppercase">
          Logo
        </span>
      )}
    </div>
  );
}
