import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const tagVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "text-white text-xs sm:text-sm font-medium bg-white/15 backdrop-blur-md rounded-full px-2.5 py-1 sm:px-3 border border-white/20",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export function Tag({ className, icon, intent, children, ...props }) {
  return (
    <div className={cn(tagVariants({ intent }), className)} {...props}>
      {icon && <span className="mr-1">{icon}</span>}
      {children}
    </div>
  )
}


