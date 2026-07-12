import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { selected?: boolean };
export function Chip({ selected = false, className = "", ...props }: Props) {
  return <button type="button" className={`chip ${className}`} aria-pressed={selected} {...props} />;
}
