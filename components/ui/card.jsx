import { cn } from "@/lib/utils";

export function Card({ className, hover = false, ...props }) {
  return (
    <div
      className={cn(
        "rounded-card border border-line bg-white",
        hover && "transition-all duration-200 hover:-translate-y-1 hover:shadow-float hover:border-primary-soft",
        className,
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }) {
  return <div className={cn("p-6 pb-0", className)} {...props} />;
}

export function CardTitle({ className, as: Comp = "h3", ...props }) {
  return <Comp className={cn("font-bold text-base leading-snug", className)} {...props} />;
}

export function CardContent({ className, ...props }) {
  return <div className={cn("p-6", className)} {...props} />;
}

/**
 * Emplacement en attente de contenu.
 *
 * Utilisé partout où le site actuel n'a pas encore de données (réalisations,
 * articles, témoignages) : la structure du thème reste visible, sans qu'aucun
 * contenu ne soit inventé.
 */
export function PlaceholderCard({ title, hint, icon: Icon, className }) {
  return (
    <div
      className={cn(
        "rounded-card border-2 border-dashed border-line bg-white/50 p-6 text-center",
        className,
      )}
    >
      {Icon && <Icon size={28} className="mx-auto text-line" aria-hidden="true" />}
      <p className="mt-3 text-sm text-slateink">{title}</p>
      {hint && <p className="mt-1 text-xs text-slateink/70">{hint}</p>}
    </div>
  );
}
