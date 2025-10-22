import clsx from "clsx";

interface HeroEyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export function HeroEyebrow({ children, className }: HeroEyebrowProps) {
  return (
    <div
      role="note"
      aria-label="Product positioning"
      className={clsx(
        "mx-auto inline-flex items-center justify-center rounded-full",
        "border px-4 py-1.5 text-sm font-medium tracking-wide",
        "bg-white/70 backdrop-blur",
        "text-[var(--lunar-navy)]",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-0",
        "lunar-transition",
        "supports-[hover]:hover:bg-white",
        className
      )}
      style={{
        borderColor: 'var(--lunar-border)',
        '--tw-ring-color': 'var(--lunar-accent)'
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

