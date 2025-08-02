import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";

const buttonStyles = cva(
  "font-semibold flex items-center justify-center space-x-2 transform transition-all duration-200 focus:outline-none cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-primary rounded-md text-white hover:bg-secondary shadow-primary/70 hover:shadow-secondary/90 px-6 py-3 sm:px-8 sm:py-4",
        secondary:
          "bg-tertiary rounded-md text-white border border-secondary hover:bg-secondary shadow-secondary/40 hover:shadow-secondary/70 px-6 py-3 sm:px-8 sm:py-4",
        error:
          "bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-200",
        scroll:
          "absolute top-1/2 -translate-y-1/2 z-10 bg-tertiary/50 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-tertiary/70 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/50",
      },
      size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2",
        lg: "px-6 py-3 sm:px-8 sm:py-4",
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
      fullWidth: false,
      disabled: false,
    },
  }
);
export const Button = ({
  variant,
  size,
  icon,
  iconPosition = "left",
  loading = false,
  fullWidth,
  disabled,
  children,
  className,
  ...rest
}) => {
  return (
    <button
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      className={cn(
        buttonStyles({ variant, size, fullWidth, disabled: disabled || loading }),
        !disabled && !loading && variant !== "error" && "hover:scale-[1.05]",
        className
      )}
      {...rest}
    >
      {loading ? (
        <Loader2 className="w-5 h-5 animate-spin text-white" aria-label="Loading" />
      ) : icon && iconPosition === "left" ? (
        icon
      ) : null}

      {children && <span>{children}</span>}

      {icon && iconPosition === "right" && !loading ? icon : null}
    </button>
  );
};

Button.displayName = "Button";