import React from 'react';
import { Zap, Mail, Globe, Link as LinkIcon, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-(--bg) border-t border-(--border) pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-(--accent) rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(245,184,0,0.2)]">
                <Zap className="text-(--bg) fill-current" size={20} />
              </div>
              <span className="text-xl font-bold tracking-tight text-(--fg)">
                be topper
              </span>
            </div>
            <p className="text-(--muted) text-sm leading-relaxed">
              Empowering students from Class 9 to competitive exams with cutting-edge AI technology. Master your syllabus, ace your exams, and become a topper.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-(--card) border border-(--border) flex items-center justify-center text-(--muted) hover:text-(--accent) hover:border-(--accent) transition-all" aria-label="Email">
                <Mail size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-(--card) border border-(--border) flex items-center justify-center text-(--muted) hover:text-(--accent) hover:border-(--accent) transition-all" aria-label="Website">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-(--card) border border-(--border) flex items-center justify-center text-(--muted) hover:text-(--accent) hover:border-(--accent) transition-all" aria-label="Links">
                <LinkIcon size={18} />
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-(--fg) mb-6">Platform</h4>
            <ul className="space-y-4">
              <li><a href="#features" className="text-(--muted) hover:text-(--accent) text-sm transition-colors">Features</a></li>
              <li><a href="#planner" className="text-(--muted) hover:text-(--accent) text-sm transition-colors">Study Planner</a></li>
              <li><a href="#mastery" className="text-(--muted) hover:text-(--accent) text-sm transition-colors">Mastery Hub</a></li>
              <li><a href="#tutor" className="text-(--muted) hover:text-(--accent) text-sm transition-colors">AI Tutor</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-(--fg) mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-(--muted) hover:text-(--accent) text-sm transition-colors">Study Guides</a></li>
              <li><a href="#" className="text-(--muted) hover:text-(--accent) text-sm transition-colors">Exam Tips</a></li>
              <li><a href="#" className="text-(--muted) hover:text-(--accent) text-sm transition-colors">Community</a></li>
              <li><a href="#" className="text-(--muted) hover:text-(--accent) text-sm transition-colors">Help Center</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-(--fg) mb-6">Stay Updated</h4>
            <p className="text-(--muted) text-sm mb-4">Get the latest study strategies and AI updates.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-(--card) border border-(--border) rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-(--accent) text-(--fg)"
              />
              <button className="bg-(--accent) text-(--bg) px-4 py-2 rounded-xl font-bold text-sm hover:shadow-[0_0_15px_rgba(245,184,0,0.3)] transition-all active:scale-95">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-(--border) flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-(--muted) text-xs">
            © {new Date().getFullYear()} be topper. All rights reserved. Built for academic excellence.
          </div>
          <div className="flex gap-8 text-xs font-medium text-(--muted)">
            <a href="#" className="hover:text-(--fg) transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-(--fg) transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-(--fg) transition-colors">Cookie Policy</a>
          </div>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs font-bold text-(--accent) uppercase tracking-widest"
          >
            Back to top
            <div className="w-8 h-8 rounded-full border border-(--accent) flex items-center justify-center group-hover:bg-(--accent) group-hover:text-(--bg) transition-all">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
