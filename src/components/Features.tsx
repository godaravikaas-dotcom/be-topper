import React from 'react';
import { 
  Clock, 
  Layers, 
  MessageSquare, 
  PenTool, 
  CheckCircle2, 
  ArrowRight,
  Brain,
  FileText,
  Mic,
  Target
} from 'lucide-react';
import { FEATURES_LIST } from '../data';

export function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Engineered for <span className="text-(--accent)">Academic Excellence</span>
          </h2>
          <p className="text-(--muted) text-lg max-w-2xl mx-auto">
            We've combined advanced multimodal AI with proven pedagogical techniques to create the ultimate study companion for students from Class 9 to competitive exams.
          </p>
        </div>

        {/* High-Level Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {FEATURES_LIST.map((feature, index) => (
            <div 
              key={index} 
              className="glass p-8 rounded-3xl border border-(--border) hover:border-(--accent) transition-all group"
            >
              <div className="w-12 h-12 bg-(--card) rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="text-(--accent)" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-(--muted) text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Detailed Feature 1: Study Planner */}
        <div id="planner" className="grid lg:grid-cols-2 gap-16 items-center mb-32 scroll-mt-24">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-(--accent)/10 border border-(--accent)/20 text-(--accent) text-xs font-bold uppercase tracking-wider mb-6">
              <Clock size={14} />
              Exam-Point-of-View
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Intelligent Study Planner</h3>
            <p className="text-(--muted) text-lg mb-8 leading-relaxed">
              Stop guessing what to study. Input your exam date and syllabus, and our AI constructs a dynamic roadmap that prioritizes high-weightage topics.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                'Day-to-day dynamic syllabus chunking',
                'Automated practice worksheet generation',
                'Active-recall revision triggers',
                'Adaptive scheduling based on your pace'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-(--accent) mt-1 shrink-0" size={20} />
                  <span className="text-(--fg)/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2 glass rounded-3xl p-4 border border-(--border) relative">
            <div className="absolute inset-0 bg-(--accent) opacity-5 blur-3xl rounded-full" />
            <div className="relative bg-(--bg) rounded-2xl border border-(--border) overflow-hidden shadow-2xl">
              <div className="p-4 border-b border-(--border) flex items-center justify-between bg-(--card)">
                <span className="font-bold text-sm">Exam Roadmap: Finals 2025</span>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500/50" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                  <div className="w-2 h-2 rounded-full bg-green-500/50" />
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4 p-3 rounded-xl bg-(--accent)/10 border border-(--accent)/20">
                  <div className="w-10 h-10 rounded-lg bg-(--accent) flex items-center justify-center text-(--bg) font-bold">12</div>
                  <div>
                    <div className="text-xs text-(--accent) font-bold">TODAY'S FOCUS</div>
                    <div className="text-sm font-semibold">Quadratic Equations • Revise</div>
                  </div>
                </div>
                <div className="space-y-3 opacity-50">
                  {[13, 14, 15].map(day => (
                    <div key={day} className="flex items-center gap-4 p-3 rounded-xl border border-(--border)">
                      <div className="w-10 h-10 rounded-lg bg-(--card) flex items-center justify-center text-(--muted) font-bold">{day}</div>
                      <div className="h-2 w-32 bg-(--card) rounded-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Feature 2: Mastery Hub */}
        <div id="mastery" className="grid lg:grid-cols-2 gap-16 items-center mb-32 scroll-mt-24">
          <div className="glass rounded-3xl p-4 border border-(--border) relative">
            <div className="absolute inset-0 bg-(--accent) opacity-5 blur-3xl rounded-full" />
            <div className="relative grid grid-cols-2 gap-4">
              {[
                { icon: FileText, label: 'Smart Notes' },
                { icon: Brain, label: 'Flashcards' },
                { icon: Target, label: 'Blueprint' },
                { icon: Mic, label: 'Audio Summary' }
              ].map((tool, i) => (
                <div key={i} className="bg-(--card) p-6 rounded-2xl border border-(--border) flex flex-col items-center text-center gap-3 hover:border-(--accent)/50 transition-colors">
                  <tool.icon className="text-(--accent)" size={32} />
                  <span className="text-sm font-bold">{tool.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-(--accent)/10 border border-(--accent)/20 text-(--accent) text-xs font-bold uppercase tracking-wider mb-6">
              <Layers size={14} />
              Content Mastery Hub
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Turn Any Content into Mastery</h3>
            <p className="text-(--muted) text-lg mb-8 leading-relaxed">
              Upload your textbook PDFs, lecture notes, or syllabus. be topper instantly extracts the high-yield concepts and creates your personalized revision toolkit.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-(--card) border border-(--border) flex items-center justify-center">
                  <FileText className="text-(--accent)" size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">High-Yield Revision Notes</h4>
                  <p className="text-sm text-(--muted)">Structured summaries with highlighted keywords and derivations.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-(--card) border border-(--border) flex items-center justify-center">
                  <Brain className="text-(--accent)" size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Active Recall Flashcards</h4>
                  <p className="text-sm text-(--muted)">AI-generated decks designed for spaced repetition and long-term memory.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Feature 3: AI Tutor */}
        <div id="tutor" className="grid lg:grid-cols-2 gap-16 items-center scroll-mt-24">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-(--accent)/10 border border-(--accent)/20 text-(--accent) text-xs font-bold uppercase tracking-wider mb-6">
              <MessageSquare size={14} />
              Socratic AI Tutor
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Don't Just Get Answers. <br />Understand Them.</h3>
            <p className="text-(--muted) text-lg mb-8 leading-relaxed">
              Our AI doesn't just dump the solution. It uses the Socratic method to guide you through the logic, asking the right questions to help you solve it yourself.
            </p>
            <div className="p-6 rounded-2xl bg-(--card) border border-(--border) mb-8">
              <div className="flex items-center gap-3 mb-4">
                <PenTool className="text-(--accent)" size={20} />
                <span className="font-bold">Snap-and-Solve</span>
              </div>
              <p className="text-sm text-(--muted) leading-relaxed">
                Stuck on a math problem? Take a photo. Our tutor analyzes the image, identifies the concept, and starts a guided walkthrough.
              </p>
            </div>
            <button className="flex items-center gap-2 text-(--accent) font-bold hover:underline group">
              Try the AI Tutor now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="order-1 lg:order-2 glass rounded-3xl p-6 border border-(--border) relative min-h-[400px] flex flex-col">
            <div className="flex-1 space-y-4">
              <div className="flex justify-end">
                <div className="bg-(--accent) text-(--bg) px-4 py-2 rounded-2xl rounded-tr-none text-sm font-medium max-w-[80%]">
                  How do I find the roots of x² - 5x + 6 = 0?
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-(--card) border border-(--border) px-4 py-3 rounded-2xl rounded-tl-none text-sm leading-relaxed max-w-[85%]">
                  <p className="mb-2">Great question! To solve this, let's look at the middle term (-5x) and the constant (6).</p>
                  <p className="font-semibold text-(--accent)">Can you think of two numbers that multiply to 6 but add up to -5?</p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-(--accent) text-(--bg) px-4 py-2 rounded-2xl rounded-tr-none text-sm font-medium">
                  Is it -2 and -3?
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-(--card) border border-(--border) px-4 py-3 rounded-2xl rounded-tl-none text-sm leading-relaxed max-w-[85%]">
                  <p>Spot on! Now, let's use those to factor the equation into (x - 2)(x - 3) = 0. What does that tell you about the values of x?</p>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-(--border) flex gap-2">
              <div className="flex-1 h-10 bg-(--bg) rounded-full border border-(--border) px-4 flex items-center text-(--muted) text-xs">
                Type your response...
              </div>
              <div className="w-10 h-10 bg-(--accent) rounded-full flex items-center justify-center text-(--bg)">
                <ArrowRight size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
