import { Link } from './Link';
//import logoImage from 'figma:asset/ad3d58b30c4e80cea88b04f971e329b6eaeb3101.png';
import logoImage from './figma/logo.png';
export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[var(--glass-background)] border-b border-[var(--glass-border)] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img 
                src={logoImage} 
                alt="PowerStem Solutions" 
                className="h-12 w-auto" 
                style={{ mixBlendMode: 'multiply' }}
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-[var(--foreground)] hover:text-[var(--secondary)] transition-colors relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--secondary)] transition-all group-hover:w-full" />
            </Link>
            <Link
              href="/about"
              className="text-[var(--foreground)] hover:text-[var(--secondary)] transition-colors relative group"
            >
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--secondary)] transition-all group-hover:w-full" />
            </Link>
            <Link
              href="/services"
              className="text-[var(--foreground)] hover:text-[var(--secondary)] transition-colors relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--secondary)] transition-all group-hover:w-full" />
            </Link>
            <Link
              href="/contact"
              className="text-[var(--foreground)] hover:text-[var(--secondary)] transition-colors relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--secondary)] transition-all group-hover:w-full" />
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-xl bg-gradient-to-br from-[var(--secondary)] to-[var(--primary)] text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-[var(--muted)] transition-colors"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}