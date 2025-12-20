import { ReactNode } from 'react';

interface LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function Link({ href, children, className = '' }: LinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Update URL without page reload
    window.history.pushState({}, '', href);
    
    // Dispatch custom event to notify app of route change
    window.dispatchEvent(new CustomEvent('routechange', { detail: { href } }));
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
