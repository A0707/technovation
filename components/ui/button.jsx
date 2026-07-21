import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-bold uppercase tracking-wide transition-all disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-primary-bright focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        // Action principale — bleu.
        default: "bg-primary text-white hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-card",
        // Devis / conversion — orange, une seule par écran.
        accent: "bg-accent text-white hover:bg-accent-dark hover:-translate-y-0.5 hover:shadow-card",
        // Sur fond sombre.
        ghost: "text-white ring-2 ring-white/85 hover:bg-white hover:text-ink",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
        subtle: "bg-surface text-ink hover:bg-line",
      },
      size: {
        default: "h-12 px-6 text-sm",
        sm: "h-10 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

/** `asChild` permet de rendre un <a> avec le style du bouton. */
export function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export { buttonVariants };
