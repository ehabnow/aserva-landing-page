import { type ReactNode } from "react"

type ButtonVariant = "primary" | "secondary" | "ghost"
type ButtonSize = "default" | "lg"

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  onClick?: () => void
  id?: string
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "relative bg-slate-950 text-white magic-border hover:bg-[#0a0f1c] shadow-[0_18px_48px_-22px_rgba(99,102,241,0.4)]",
  secondary:
    "border border-slate-800 bg-white/5 text-white shadow-sm backdrop-blur hover:border-slate-600 hover:bg-white/10",
  ghost:
    "text-slate-400 hover:text-white hover:bg-white/5",
}

const sizeStyles: Record<ButtonSize, string> = {
  default: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "default",
  className = "",
  onClick,
  id,
}: ButtonProps): ReactNode {
  const baseClassName =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 cursor-pointer"

  const combinedClassName = `${baseClassName} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={combinedClassName} id={id}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={combinedClassName} id={id}>
      {children}
    </button>
  )
}
