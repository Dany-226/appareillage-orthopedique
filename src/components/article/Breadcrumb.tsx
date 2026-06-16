import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type BreadcrumbItem = { label: string; href?: string };

type Props = {
  items: BreadcrumbItem[];
  light?: boolean;
};

export default function Breadcrumb({ items, light = false }: Props) {
  const mutedColor = light ? "text-white/60" : "text-muted-foreground";
  const activeColor = light ? "text-white font-medium" : "text-brand-text font-medium";
  const hoverColor = light
    ? "text-white/60 hover:text-white"
    : "text-muted-foreground hover:text-brand-teal";
  const chevronColor = light ? "text-white/30" : "text-muted-foreground/50";

  return (
    <nav
      aria-label="Fil d'Ariane"
      className={`flex items-center gap-1.5 py-4 text-sm ${mutedColor}`}
    >
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && (
            <ChevronRight
              size={13}
              className={`${chevronColor} flex-none`}
              aria-hidden
            />
          )}
          {item.href ? (
            <Link
              href={item.href}
              className={`${hoverColor} transition-colors duration-150 focus-ring rounded`}
            >
              {item.label}
            </Link>
          ) : (
            <span className={activeColor} aria-current="page">
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
