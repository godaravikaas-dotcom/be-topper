import React from 'react';
import { 
  LayoutDashboard, 
  Calendar, 
  BookOpen, 
  MessageSquare, 
  LogOut, 
  Zap,
  Settings,
  ChevronRight
} from 'lucide-react';

interface DashboardSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onExit: () => void;
}

export function DashboardSidebar({ activeTab, setActiveTab, onExit }: DashboardSidebarProps) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'planner', label: 'Study Planner', icon: Calendar },
    { id: 'mastery', label: 'Mastery Hub', icon: BookOpen },
    { id: 'tutor', label: 'AI Tutor', icon: MessageSquare },
  ];

  return (
    <aside className="w-64 h-screen sticky top-0 flex flex-col border-r border-(--border) bg-(--bg) z-40">
      {/* Brand Logo */}
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 bg-(--accent) rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(245,184,0,0.2)]">
          <Zap className="text-(--bg) fill-current" size={18} />
        </div>
        <span className="text-xl font-bold tracking-tight text-(--fg)">
          be topper
        </span>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        <div className="text-[10px] font-bold text-(--muted) uppercase tracking-widest px-3 mb-4">
          Main Menu
        </div>
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center justify-between px-3 py-3 rounded-xl transition-all group ${
                isActive 
                  ? 'bg-(--accent) text-(--bg) font-bold shadow-[0_4px_12px_rgba(245,184,0,0.2)]' 
                  : 'text-(--muted) hover:bg-(--card) hover:text-(--fg)'
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon size={20} className={isActive ? 'text-(--bg)' : 'text-(--muted) group-hover:text-(--accent)'} />
                <span className="text-sm">{item.label}</span>
              </div>
              {isActive && <ChevronRight size={16} />}
            </button>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-(--border) space-y-2">
        <button className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-(--muted) hover:bg-(--card) hover:text-(--fg) transition-all text-sm">
          <Settings size={20} />
          Settings
        </button>
        <button 
          onClick={onExit}
          className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-all text-sm font-medium"
        >
          <LogOut size={20} />
          Exit Dashboard
        </button>
      </div>

      {/* User Profile Mini-Card */}
      <div className="p-4 bg-(--card) m-4 rounded-2xl border border-(--border)">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-(--accent) to-amber-600 flex items-center justify-center text-(--bg) font-bold">
            JD
          </div>
          <div className="overflow-hidden">
            <div className="text-sm font-bold truncate">John Doe</div>
            <div className="text-[10px] text-(--muted) truncate">Class 10 • Science</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
