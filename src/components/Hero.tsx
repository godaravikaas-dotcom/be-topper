import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, GraduationCap, Zap } from 'lucide-react';

interface HeroProps {
  onEnterDashboard: () => void;
}

export function Hero({ onEnterDashboard }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,184,0,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-(--accent) opacity-5 blur-[120px] rounded-full" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-(--accent) opacity-5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-(--border) mb-8 animate-fade-in">
            <Sparkles size={16} className="text-(--accent)" />
            <span className="text-sm font-medium text-(--muted)">
              The Future of Learning is Here
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1]">
            Master Your Exams with <br />
            <span className="text-(--accent) drop-shadow-[0_0_15px_rgba(245,184,0,0.3)]">
              AI Precision
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-(--muted) mb-12 max-w-2xl mx-auto leading-relaxed">
            From Class 9 to competitive exams, <span className="text-(--fg) font-semibold">be topper</span> transforms how you study. 
            Get personalized roadmaps, instant mastery tools, and a Socratic AI tutor that actually teaches.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <button
              onClick={onEnterDashboard}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-(--accent) hover:bg-(--accent-hover) text-(--bg) px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:shadow-[0_0_30px_rgba(245,184,0,0.4)] active:scale-95 group"
            >
              Start Your Journey
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#features"
              className="w-full sm:w-auto flex items-center justify-center gap-2 glass hover:bg-(--card-hover) text-(--fg) px-8 py-4 rounded-2xl font-bold text-lg transition-all border border-(--border)"
            >
              Explore Features
            </a>
          </div>

          {/* Trust Indicators / Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-(--border)">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-(--card) flex items-center justify-center mb-2">
                <GraduationCap className="text-(--accent)" size={24} />
              </div>
              <span className="text-2xl font-bold">9th - 12th+</span>
              <span className="text-sm text-(--muted)">Target Audience</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-(--card) flex items-center justify-center mb-2">
                <Zap className="text-(--accent)" size={24} />
              </div>
              <span className="text-2xl font-bold">Instant</span>
              <span className="text-sm text-(--muted)">AI Generation</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-(--card) flex items-center justify-center mb-2">
                <ShieldCheck className="text-(--accent)" size={24} />
              </div>
              <span className="text-2xl font-bold">100% Free</span>
              <span className="text-sm text-(--muted)">Open Access</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-(--card) flex items-center justify-center mb-2">
                <Sparkles className="text-(--accent)" size={24} />
              </div>
              <span className="text-2xl font-bold">Socratic</span>
              <span className="text-sm text-(--muted)">Learning Style</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
