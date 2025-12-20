import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className = '', hover = true }: GlassCardProps) {
  return (
    <div
      className={`
        rounded-3xl
        backdrop-blur-xl
        bg-[var(--glass-background)]
        border border-[var(--glass-border)]
        shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]
        p-8
        transition-all duration-300
        ${hover ? 'hover:shadow-[0_8px_48px_0_rgba(31,38,135,0.25)] hover:scale-[1.02]' : ''}
        ${className}
      `}
      style={{
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
    >
      {children}
    </div>
  );
}
