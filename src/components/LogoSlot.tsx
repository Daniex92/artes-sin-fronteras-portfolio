import { cn } from "@/lib/utils";
import Logo from "@/assets/Logo.png";
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
        <img src={Logo} alt={label} className="h-full w-full object-contain" />
      )}
    </div>
  );
}
