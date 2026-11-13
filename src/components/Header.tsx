import React, { useState } from 'react';
import { Menu, X, ArrowRight, Zap } from 'lucide-react';

interface HeaderProps {
  onEnterDashboard: () => void;
}

export function Header({ onEnterDashboard }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Study Planner', href: '#planner' },
    { name: 'Mastery Hub', href: '#mastery' },
    { name: 'AI Tutor', href: '#tutor' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-(--border)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-(--accent) rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(245,184,0,0.3)] group-hover:scale-110 transition-transform">
              <Zap className="text-(--bg) fill-current" size={24} />
            </div>
            <span className="text-2xl font-bold tracking-tight text-(--fg)">
              be topper
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-(--muted) hover:text-(--accent) transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={onEnterDashboard}
              className="flex items-center gap-2 bg-(--accent) hover:bg-(--accent-hover) text-(--bg) px-6 py-2.5 rounded-full font-semibold transition-all hover:shadow-[0_0_20px_rgba(245,184,0,0.4)] active:scale-95"
            >
              Start Learning
              <ArrowRight size={18} />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-(--fg) hover:bg-(--card) rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden glass border-t border-(--border) animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-4 text-base font-medium text-(--fg) hover:text-(--accent) border-b border-(--border)"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-6">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onEnterDashboard();
                }}
                className="w-full flex items-center justify-center gap-2 bg-(--accent) text-(--bg) px-6 py-4 rounded-xl font-bold"
              >
                Enter Dashboard
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
