import clsx from 'clsx';
import React from 'react';

type LunarButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { 
  variant?: 'primary' | 'secondary'; 
  size?: 'md' | 'lg';
};

export function LunarButton({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  ...props 
}: LunarButtonProps) {
  const base = "inline-flex items-center justify-center rounded-xl font-medium lunar-transition focus:outline-none focus-visible:ring-2";
  
  const sizes = { 
    md: "px-4 h-10 text-sm", 
    lg: "px-6 h-12 text-base" 
  };
  
  const variants = {
    primary: clsx(
      "text-white shadow-lunar-md",
      "supports-[hover]:hover:opacity-95"
    ),
    secondary: clsx(
      "bg-white border",
      "supports-[hover]:hover:bg-[var(--lunar-muted)]"
    )
  };

  return (
    <button 
      className={clsx(base, sizes[size], variants[variant], className)} 
      style={
        variant === 'primary' 
          ? { backgroundColor: 'var(--lunar-text)' }
          : { 
              color: 'var(--lunar-text)', 
              borderColor: 'var(--lunar-border)' 
            }
      }
      {...props} 
    />
  );
}

