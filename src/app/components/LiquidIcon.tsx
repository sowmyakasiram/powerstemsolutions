import { ReactNode } from 'react';

interface LiquidIconProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'accent';
}

export function LiquidIcon({ children, size = 'md', color = 'secondary' }: LiquidIconProps) {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  };

  const colorClasses = {
    primary: 'from-[var(--primary)]/20 to-[var(--primary)]/10 text-[var(--primary)]',
    secondary: 'from-[var(--secondary)]/20 to-[var(--secondary)]/10 text-[var(--secondary)]',
    accent: 'from-[var(--accent)]/20 to-[var(--accent)]/10 text-[var(--accent)]'
  };

  return (
    <div
      className={`
        ${sizeClasses[size]}
        ${colorClasses[color]}
        rounded-2xl
        backdrop-blur-md
        bg-gradient-to-br
        border border-white/20
        shadow-lg
        flex items-center justify-center
        transition-all duration-300
        hover:scale-110 hover:shadow-xl
      `}
      style={{
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      {children}
    </div>
  );
}
