import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import logo from '../assets/205b05877122ea0ef4940e05207ea62b694ea64e.png';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl liquid-header">
      <div className="px-6 flex h-16 items-center justify-center">
        <button 
          onClick={() => onNavigate('home')}
          className="mr-4 flex items-center hover:opacity-80 transition-opacity"
        >
          <img 
            src={logo} 
            alt="PowerStemSolutions" 
            className="h-10 w-auto"
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`transition-colors hover:text-slate-900 ${
                currentPage === item.id 
                  ? 'text-slate-900 font-semibold' 
                  : 'text-slate-600'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Additional header content can go here */}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            className="md:hidden text-slate-900 hover:text-slate-700 hover:bg-slate-200/50 liquid-glow"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 border border-slate-300/40 md:hidden liquid-glass rounded-3xl">
          <nav className="px-6 flex flex-col space-y-4 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMenuOpen(false);
                }}
                className={`text-left transition-colors hover:text-slate-900 ${
                  currentPage === item.id 
                    ? 'text-slate-900 font-semibold' 
                    : 'text-slate-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}