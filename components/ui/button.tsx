import Link from "next/link";
import clsx from "clsx";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

const variants = {
  primary: "bg-accent text-white hover:bg-accent-dark",
  secondary: "border border-slate-200 hover:border-slate-300 hover:bg-slate-50",
  ghost: "text-slate-600 hover:text-slate-900"
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base"
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className,
  type = "button",
  onClick
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center rounded-full font-medium transition-colors",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
