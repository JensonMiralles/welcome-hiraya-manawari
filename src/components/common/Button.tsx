import { type ButtonHTMLAttributes, type ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-sans font-medium tracking-wide transition-all duration-400 ease-elegant focus:outline-none focus:ring-2 focus:ring-gold/50 focus:ring-offset-2 focus:ring-offset-ivory disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-gold text-charcoal-800 hover:bg-gold-500 hover:shadow-gold active:bg-gold-600",
    secondary:
      "bg-charcoal text-ivory hover:bg-charcoal-600 active:bg-charcoal-700",
    outline:
      "bg-transparent border-2 border-gold text-gold hover:bg-gold/10 active:bg-gold/20",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm rounded-full",
    md: "px-7 py-3.5 text-base rounded-full",
    lg: "px-10 py-5 text-lg rounded-full",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
