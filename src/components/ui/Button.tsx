import { cn } from "../../lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { ButtonHTMLAttributes, FC } from "react";

const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-xl sm:text-base text-sm font-medium font-nunito transition-color focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-slate-900 text-white hover:bg-slate-800",
        ghost: "bg-transparent hover:text-slate-900 hover:bg-slate-200",
        primary:
          "bg-[#1A3A5F] text-white hover:bg-[#1A3A5F] hover:bg-opacity-90",
        success:
          "bg-[#F3F8F4] text-[#1E5542] hover:bg-[#F3F8F4] hover:bg-opacity-90",
      },
      size: {
        default: "h-10 py-5 px-3 sm:py-6 sm:px-4",
        sm: "h-9 px-2",
        lg: "h-11 px-2 py-4 sm:h-11 sm:px-4 sm:py-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  variant,
  isLoading,
  size,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {children}
    </button>
  );
};

export default Button;
