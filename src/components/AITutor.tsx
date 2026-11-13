import React, { useState, useRef, useEffect } from 'react';
import { 
  Send, 
  Image as ImageIcon, 
  Plus, 
  Sparkles, 
  PenTool, 
  X, 
  Maximize2, 
  Info,
  MessageSquare,
  Globe,
  Link as LinkIcon,
  ChevronRight
} from 'lucide-react';
import { INITIAL_CHAT, ChatMessage } from '../data';

export function AITutor() {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_CHAT);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showMathKeyboard, setShowMathKeyboard] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (text: string = inputValue) => {
    if (!text.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate Socratic AI Response
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: getSocraticResponse(text),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getSocraticResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    if (lowerInput.includes('quadratic') || lowerInput.includes('x^2') || lowerInput.includes('x²')) {
      return "Quadratic equations are fascinating! To help you solve this, let's look at the structure. Do you think we should try factoring it first, or would the quadratic formula be more reliable here? What do the coefficients tell you?";
    }
    if (lowerInput.includes('force') || lowerInput.includes('newton')) {
      return "Newton's laws help us understand everything from falling apples to orbiting planets. If we apply a force to an object, what two factors do you think determine how much it will accelerate? (Hint: Think about the object's 'heaviness').";
    }
    return "That's a great starting point for our session. Before I give you the full breakdown, could you explain what part of this concept feels the most confusing right now? Understanding your 'stuck point' helps us master it faster!";
  };

  const handleSnapAndSolve = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      handleSend("I've uploaded a photo of a geometry problem involving triangles.");
    }, 3000);
  };

  const mathSymbols = ['√', 'π', '∞', 'Σ', '∫', 'Δ', 'θ', '²', '³', '±', '≠', '≈'];

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] max-w-5xl mx-auto animate-fade-in">
      {/* Tutor Header */}
      <div className="p-4 lg:p-6 border-b border-(--border) flex items-center justify-between bg-(--bg)/50 backdrop-blur-md sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-(--accent) flex items-center justify-center text-(--bg) shadow-[0_0_20px_rgba(245,184,0,0.2)]">
            <Sparkles size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold">Socratic AI Tutor</h1>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-(--muted) font-medium">Ready to guide you</span>
            </div>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-3">
          <button className="p-2 text-(--muted) hover:text-(--fg) hover:bg-(--card) rounded-xl transition-all">
            <Info size={20} />
          </button>
          <div className="h-8 w-px bg-(--border)" />
          <div className="flex -space-x-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-(--bg) bg-(--card) flex items-center justify-center text-[10px] font-bold">
                {String.fromCharCode(64 + i)}
              </div>
            ))}
          </div>
          <span className="text-xs text-(--muted) ml-2 font-medium">1.2k students online</span>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 lg:p-8 space-y-8">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
          >
            <div className={`flex gap-4 max-w-[85%] sm:max-w-[70%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center text-xs font-bold ${
                msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-(--accent) text-(--bg)'
              }`}>
                {msg.role === 'user' ? 'U' : 'AI'}
              </div>
              <div className="space-y-2">
                <div className={`p-4 rounded-2xl leading-relaxed text-sm sm:text-base ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none' 
                    : 'glass border border-(--border) rounded-tl-none'
                }`}>
                  {msg.content.split('\n').map((line, i) => (
                    <p key={i} className={i > 0 ? 'mt-3' : ''}>
                      {line.split('**').map((part, j) => 
                        j % 2 === 1 ? <strong key={j} className="text-(--accent)">{part}</strong> : part
                      )}
                    </p>
                  ))}
                </div>
                <div className={`text-[10px] font-bold text-(--muted) uppercase tracking-widest ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                  {msg.timestamp}
                </div>
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start animate-fade-in">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-lg bg-(--accent) text-(--bg) flex items-center justify-center text-xs font-bold">
                AI
              </div>
              <div className="glass border border-(--border) p-4 rounded-2xl rounded-tl-none flex gap-1">
                <div className="w-1.5 h-1.5 bg-(--muted) rounded-full animate-bounce" />
                <div className="w-1.5 h-1.5 bg-(--muted) rounded-full animate-bounce [animation-delay:0.2s]" />
                <div className="w-1.5 h-1.5 bg-(--muted) rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          </div>
        )}

        {isAnalyzing && (
          <div className="flex justify-center">
            <div className="glass border border-(--accent)/30 p-6 rounded-3xl max-w-sm w-full text-center space-y-4 animate-pulse">
              <div className="w-16 h-16 bg-(--accent)/10 rounded-2xl flex items-center justify-center mx-auto">
                <PenTool className="text-(--accent)" size={32} />
              </div>
              <div>
                <h3 className="font-bold">Snap-and-Solve Active</h3>
                <p className="text-xs text-(--muted)">AI is scanning the image for mathematical structures and text...</p>
              </div>
              <div className="w-full h-1.5 bg-(--card) rounded-full overflow-hidden">
                <div className="h-full bg-(--accent) animate-[loading_3s_ease-in-out]" style={{ width: '100%' }} />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 lg:p-8 bg-gradient-to-t from-(--bg) to-transparent">
        <div className="max-w-4xl mx-auto relative">
          {/* Math Keyboard Overlay */}
          {showMathKeyboard && (
            <div className="absolute bottom-full left-0 mb-4 glass border border-(--border) p-3 rounded-2xl grid grid-cols-6 gap-2 animate-fade-in">
              {mathSymbols.map(s => (
                <button 
                  key={s}
                  onClick={() => setInputValue(prev => prev + s)}
                  className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-(--accent) hover:text-(--bg) transition-all font-serif text-lg"
                >
                  {s}
                </button>
              ))}
              <button 
                onClick={() => setShowMathKeyboard(false)}
                className="col-span-6 mt-2 py-1 text-[10px] font-bold uppercase text-(--muted) hover:text-(--fg)"
              >
                Close Symbols
              </button>
            </div>
          )}

          <div className="glass border border-(--border) rounded-3xl p-2 flex items-end gap-2 focus-within:border-(--accent)/50 transition-all shadow-2xl">
            <div className="flex items-center gap-1 pb-1 pl-2">
              <button 
                onClick={handleSnapAndSolve}
                className="p-2.5 text-(--muted) hover:text-(--accent) hover:bg-(--card) rounded-xl transition-all"
                title="Snap and Solve"
              >
                <ImageIcon size={22} />
              </button>
              <button 
                onClick={() => setShowMathKeyboard(!showMathKeyboard)}
                className="p-2.5 text-(--muted) hover:text-(--accent) hover:bg-(--card) rounded-xl transition-all"
                title="Math Symbols"
              >
                <span className="font-serif text-xl leading-none">Σ</span>
              </button>
            </div>

            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="Ask be topper anything... (e.g., 'Explain photosynthesis' or 'Solve x²-4=0')"
              className="flex-1 bg-transparent border-none focus:ring-0 py-3 px-2 text-sm sm:text-base resize-none max-h-32 min-h-[44px]"
              rows={1}
            />

            <button 
              onClick={() => handleSend()}
              disabled={!inputValue.trim() || isTyping}
              className="p-3 bg-(--accent) text-(--bg) rounded-2xl hover:shadow-[0_0_15px_rgba(245,184,0,0.4)] transition-all disabled:opacity-50 disabled:hover:shadow-none group"
            >
              <Send size={22} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <button 
              onClick={() => handleSend("Explain the Socratic Method")}
              className="text-[10px] font-bold text-(--muted) hover:text-(--accent) uppercase tracking-widest flex items-center gap-1.5"
            >
              <MessageSquare size={12} />
              How this works
            </button>
            <button 
              onClick={() => handleSend("Help me with my homework")}
              className="text-[10px] font-bold text-(--muted) hover:text-(--accent) uppercase tracking-widest flex items-center gap-1.5"
            >
              <PenTool size={12} />
              Homework Help
            </button>
            <button 
              className="text-[10px] font-bold text-(--muted) hover:text-(--accent) uppercase tracking-widest flex items-center gap-1.5"
            >
              <Globe size={12} />
              Search Web
            </button>
          </div>
        </div>
      </div>

      {/* Floating Action for Mobile Snap */}
      <button 
        onClick={handleSnapAndSolve}
        className="fixed bottom-24 right-6 sm:hidden w-14 h-14 bg-(--accent) text-(--bg) rounded-full shadow-2xl flex items-center justify-center z-20 active:scale-90 transition-transform"
      >
        <ImageIcon size={24} />
      </button>
    </div>
  );
}
