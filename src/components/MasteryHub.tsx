import React, { useState } from 'react';
import { 
  Upload, 
  FileText, 
  Brain, 
  Target, 
  Mic, 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  RotateCcw, 
  Download, 
  Share2,
  Play,
  Pause,
  Volume2,
  Sparkles
} from 'lucide-react';
import { MASTERY_TOOLS, FLASHCARDS } from '../data';

export function MasteryHub() {
  const [selectedToolId, setSelectedToolId] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const activeTool = MASTERY_TOOLS.find(t => t.id === selectedToolId);

  const handleUpload = () => {
    setIsUploading(true);
    // Simulate AI processing
    setTimeout(() => {
      setIsUploading(false);
      setSelectedToolId('notes');
    }, 2000);
  };

  const nextCard = () => {
    setIsFlipped(false);
    setCurrentCardIndex((prev) => (prev + 1) % FLASHCARDS.length);
  };

  const prevCard = () => {
    setIsFlipped(false);
    setCurrentCardIndex((prev) => (prev - 1 + FLASHCARDS.length) % FLASHCARDS.length);
  };

  return (
    <div className="p-6 lg:p-10 max-w-6xl mx-auto animate-fade-in">
      {!selectedToolId ? (
        <>
          {/* Initial View: Upload & Tool Selection */}
          <div className="mb-12">
            <h1 className="text-3xl font-bold mb-2">Content Mastery Hub</h1>
            <p className="text-(--muted)">Upload your study material and let AI transform it into high-yield learning tools.</p>
          </div>

          <div 
            onClick={handleUpload}
            className={`relative mb-12 border-2 border-dashed border-(--border) rounded-3xl p-12 text-center hover:border-(--accent)/50 transition-all cursor-pointer group overflow-hidden ${isUploading ? 'pointer-events-none' : ''}`}
          >
            {isUploading ? (
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 border-4 border-(--accent)/20 border-t-(--accent) rounded-full animate-spin" />
                <p className="text-lg font-bold animate-pulse">AI is analyzing your content...</p>
                <p className="text-sm text-(--muted)">Extracting key concepts and generating mastery tools</p>
              </div>
            ) : (
              <>
                <div className="absolute inset-0 bg-(--accent) opacity-0 group-hover:opacity-[0.02] transition-opacity" />
                <div className="w-20 h-20 bg-(--card) rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Upload className="text-(--accent)" size={40} />
                </div>
                <h2 className="text-2xl font-bold mb-2">Drop your files here</h2>
                <p className="text-(--muted) mb-6">Support for PDF, TXT, and Images (Handwritten notes welcome!)</p>
                <button className="bg-(--accent) text-(--bg) px-8 py-3 rounded-xl font-bold">
                  Select Files
                </button>
              </>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MASTERY_TOOLS.map((tool) => (
              <button
                key={tool.id}
                onClick={() => setSelectedToolId(tool.id)}
                className="glass p-8 rounded-3xl border border-(--border) hover:border-(--accent) transition-all text-left group"
              >
                <div className="w-12 h-12 bg-(--card) rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <tool.icon className="text-(--accent)" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{tool.title}</h3>
                <p className="text-(--muted) text-sm leading-relaxed">
                  {tool.description}
                </p>
              </button>
            ))}
          </div>
        </>
      ) : (
        /* Tool Content View */
        <div className="animate-fade-in">
          <button 
            onClick={() => setSelectedToolId(null)}
            className="flex items-center gap-2 text-(--muted) hover:text-(--fg) mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Mastery Hub
          </button>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Navigation for Tools */}
            <div className="lg:w-64 shrink-0 space-y-2">
              {MASTERY_TOOLS.map((tool) => (
                <button
                  key={tool.id}
                  onClick={() => setSelectedToolId(tool.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    selectedToolId === tool.id 
                      ? 'bg-(--accent) text-(--bg) font-bold' 
                      : 'text-(--muted) hover:bg-(--card)'
                  }`}
                >
                  <tool.icon size={18} />
                  <span className="text-sm">{tool.title}</span>
                </button>
              ))}
            </div>

            {/* Main Content Area */}
            <div className="flex-1 glass rounded-3xl border border-(--border) overflow-hidden flex flex-col min-h-[600px]">
              <div className="p-6 border-b border-(--border) flex items-center justify-between bg-(--card)">
                <div className="flex items-center gap-3">
                  {activeTool && <activeTool.icon className="text-(--accent)" size={24} />}
                  <h2 className="font-bold text-lg">{activeTool?.title}</h2>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-(--muted) hover:text-(--fg) hover:bg-(--border) rounded-lg transition-all">
                    <Download size={20} />
                  </button>
                  <button className="p-2 text-(--muted) hover:text-(--fg) hover:bg-(--border) rounded-lg transition-all">
                    <Share2 size={20} />
                  </button>
                </div>
              </div>

              <div className="flex-1 p-8">
                {selectedToolId === 'notes' && (
                  <div className="max-w-3xl mx-auto space-y-8">
                    <div className="p-6 rounded-2xl bg-(--accent)/5 border border-(--accent)/20">
                      <div className="flex items-center gap-2 text-(--accent) mb-4">
                        <Sparkles size={18} />
                        <span className="text-xs font-bold uppercase tracking-wider">AI Executive Summary</span>
                      </div>
                      <p className="text-lg font-medium leading-relaxed">
                        This chapter covers the fundamental principles of <span className="text-(--accent)">Quadratic Equations</span>, focusing on the derivation of the quadratic formula and the practical application of the discriminant in determining root types.
                      </p>
                    </div>
                    
                    <section>
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <div className="w-1.5 h-6 bg-(--accent) rounded-full" />
                        Key Concepts & Derivations
                      </h3>
                      <div className="space-y-4 text-(--muted) leading-relaxed">
                        <p>The standard form of a quadratic equation is <code className="bg-(--card) px-2 py-1 rounded text-(--fg)">ax² + bx + c = 0</code>, where a ≠ 0.</p>
                        <div className="bg-(--card) p-6 rounded-2xl border border-(--border) my-6">
                          <h4 className="text-(--fg) font-bold mb-2">The Quadratic Formula</h4>
                          <p className="text-2xl text-center py-4 font-serif text-(--fg)">
                            x = [-b ± √(b² - 4ac)] / 2a
                          </p>
                        </div>
                        <p>The term <span className="text-(--fg) font-bold">b² - 4ac</span> is known as the discriminant (D). It determines the nature of the roots without solving the equation.</p>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <div className="w-1.5 h-6 bg-(--accent) rounded-full" />
                        High-Yield Summary Table
                      </h3>
                      <div className="overflow-hidden rounded-xl border border-(--border)">
                        <table className="w-full text-left text-sm">
                          <thead className="bg-(--card) text-(--fg)">
                            <tr>
                              <th className="p-4 border-b border-(--border)">Condition</th>
                              <th className="p-4 border-b border-(--border)">Nature of Roots</th>
                            </tr>
                          </thead>
                          <tbody className="text-(--muted)">
                            <tr>
                              <td className="p-4 border-b border-(--border)">D &gt; 0</td>
                              <td className="p-4 border-b border-(--border)">Two distinct real roots</td>
                            </tr>
                            <tr>
                              <td className="p-4 border-b border-(--border)">D = 0</td>
                              <td className="p-4 border-b border-(--border)">Two equal real roots</td>
                            </tr>
                            <tr>
                              <td className="p-4 border-b border-(--border)">D &lt; 0</td>
                              <td className="p-4 border-b border-(--border)">No real roots (Complex)</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </section>
                  </div>
                )}

                {selectedToolId === 'flashcards' && (
                  <div className="h-full flex flex-col items-center justify-center">
                    <div className="w-full max-w-md perspective-1000">
                      <div 
                        onClick={() => setIsFlipped(!isFlipped)}
                        className={`relative w-full aspect-[4/3] cursor-pointer transition-all duration-500 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}
                      >
                        {/* Front */}
                        <div className="absolute inset-0 backface-hidden glass rounded-3xl border-2 border-(--border) flex flex-col items-center justify-center p-10 text-center">
                          <span className="absolute top-6 left-6 text-[10px] font-bold text-(--accent) uppercase tracking-widest">Question</span>
                          <p className="text-xl font-bold leading-relaxed">
                            {FLASHCARDS[currentCardIndex].question}
                          </p>
                          <span className="absolute bottom-6 text-xs text-(--muted)">Click to reveal answer</span>
                        </div>
                        {/* Back */}
                        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-(--accent) rounded-3xl flex flex-col items-center justify-center p-10 text-center text-(--bg)">
                          <span className="absolute top-6 left-6 text-[10px] font-bold uppercase tracking-widest opacity-60">Answer</span>
                          <p className="text-xl font-bold leading-relaxed">
                            {FLASHCARDS[currentCardIndex].answer}
                          </p>
                          <span className="absolute bottom-6 text-xs opacity-60">Click to flip back</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-12 flex items-center gap-8">
                      <button 
                        onClick={prevCard}
                        className="w-12 h-12 rounded-full border border-(--border) flex items-center justify-center hover:bg-(--card) transition-colors"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <div className="text-sm font-bold">
                        {currentCardIndex + 1} <span className="text-(--muted)">/ {FLASHCARDS.length}</span>
                      </div>
                      <button 
                        onClick={nextCard}
                        className="w-12 h-12 rounded-full border border-(--border) flex items-center justify-center hover:bg-(--card) transition-colors"
                      >
                        <ChevronRight size={24} />
                      </button>
                    </div>
                    <button 
                      onClick={() => {setCurrentCardIndex(0); setIsFlipped(false);}}
                      className="mt-8 flex items-center gap-2 text-xs font-bold text-(--muted) hover:text-(--accent) transition-colors"
                    >
                      <RotateCcw size={14} />
                      Reset Deck
                    </button>
                  </div>
                )}

                {selectedToolId === 'audio' && (
                  <div className="max-w-2xl mx-auto h-full flex flex-col items-center justify-center text-center">
                    <div className="w-24 h-24 bg-(--accent)/10 rounded-full flex items-center justify-center mb-8 relative">
                      <div className="absolute inset-0 bg-(--accent) opacity-20 rounded-full animate-ping" />
                      <Mic className="text-(--accent)" size={40} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">5-Minute Chapter Breakdown</h3>
                    <p className="text-(--muted) mb-10">Listen to an expert teacher explain the core concepts of this chapter while you're on the go.</p>
                    
                    <div className="w-full glass p-6 rounded-2xl border border-(--border) mb-8">
                      <div className="flex items-center gap-4 mb-6">
                        <button className="w-12 h-12 bg-(--accent) rounded-full flex items-center justify-center text-(--bg)">
                          <Play size={24} fill="currentColor" />
                        </button>
                        <div className="flex-1">
                          <div className="h-1.5 w-full bg-(--card) rounded-full overflow-hidden">
                            <div className="h-full bg-(--accent) w-1/3" />
                          </div>
                          <div className="flex justify-between mt-2 text-[10px] font-bold text-(--muted)">
                            <span>1:42</span>
                            <span>5:00</span>
                          </div>
                        </div>
                        <Volume2 size={20} className="text-(--muted)" />
                      </div>
                      <div className="flex justify-center gap-8">
                        <button className="text-(--muted) hover:text-(--fg)"><ChevronLeft size={24} /></button>
                        <button className="text-(--muted) hover:text-(--fg)"><Pause size={24} /></button>
                        <button className="text-(--muted) hover:text-(--fg)"><ChevronRight size={24} /></button>
                      </div>
                    </div>

                    <div className="text-left w-full">
                      <h4 className="text-sm font-bold mb-3 text-(--muted) uppercase tracking-wider">Audio Script Preview</h4>
                      <div className="p-4 rounded-xl bg-(--card) border border-(--border) text-sm text-(--muted) italic">
                        "Hey there! Today we're diving into Quadratic Equations. Think of them as the 'U-shaped' curves of the math world. We'll start by looking at why the 'a' term can never be zero..."
                      </div>
                    </div>
                  </div>
                )}

                {selectedToolId === 'blueprint' && (
                  <div className="max-w-3xl mx-auto">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="text-2xl font-bold">Exam Weightage Blueprint</h3>
                      <div className="px-4 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold">
                        High Priority Chapter
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      {[
                        { title: 'Nature of Roots & Discriminant', weight: '45%', importance: 'Critical', color: 'text-red-400' },
                        { title: 'Quadratic Formula Application', weight: '30%', importance: 'High', color: 'text-orange-400' },
                        { title: 'Factorization Methods', weight: '15%', importance: 'Medium', color: 'text-yellow-400' },
                        { title: 'Word Problems (Real-world)', weight: '10%', importance: 'Low', color: 'text-blue-400' },
                      ].map((item, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-(--card) border border-(--border) flex items-center justify-between group hover:border-(--accent)/30 transition-all">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-(--bg) border border-(--border) flex items-center justify-center font-bold text-(--accent)">
                              {item.weight}
                            </div>
                            <div>
                              <h4 className="font-bold">{item.title}</h4>
                              <span className={`text-[10px] font-bold uppercase tracking-widest ${item.color}`}>
                                {item.importance} Priority
                              </span>
                            </div>
                          </div>
                          <Target size={20} className="text-(--muted) group-hover:text-(--accent) transition-colors" />
                        </div>
                      ))}
                    </div>

                    <div className="mt-10 p-6 rounded-2xl border border-(--accent)/20 bg-(--accent)/5">
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <Sparkles size={16} className="text-(--accent)" />
                        Topper's Strategy
                      </h4>
                      <p className="text-sm text-(--muted) leading-relaxed">
                        Focus 70% of your practice time on the Discriminant and Quadratic Formula. These appear in 90% of past paper questions for this chapter. Don't spend too much time on complex word problems until you've mastered the core mechanics.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
