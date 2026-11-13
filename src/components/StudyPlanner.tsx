import React, { useState } from 'react';
import { 
  Calendar, 
  Plus, 
  Upload, 
  CheckCircle, 
  Circle, 
  ArrowRight, 
  BookOpen, 
  Zap, 
  Target,
  FileText,
  Clock,
  ChevronRight
} from 'lucide-react';
import { STUDY_PLAN, StudyTask } from '../data';

export function StudyPlanner() {
  const [tasks, setTasks] = useState<StudyTask[]>(STUDY_PLAN);
  const [showSetup, setShowSetup] = useState(false);

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const completedCount = tasks.filter(t => t.completed).length;
  const progress = Math.round((completedCount / tasks.length) * 100);

  // Group tasks by day
  const days = Array.from(new Set(tasks.map(t => t.day))).sort((a, b) => a - b);

  return (
    <div className="p-6 lg:p-10 max-w-6xl mx-auto animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div>
          <h1 className="text-3xl font-bold mb-2">Exam Study Planner</h1>
          <p className="text-(--muted)">Your AI-generated roadmap to academic excellence.</p>
        </div>
        <button 
          onClick={() => setShowSetup(true)}
          className="flex items-center justify-center gap-2 bg-(--accent) text-(--bg) px-6 py-3 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(245,184,0,0.3)] transition-all active:scale-95"
        >
          <Plus size={20} />
          Create New Plan
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="glass p-6 rounded-2xl border border-(--border)">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
              <Target size={20} />
            </div>
            <span className="text-sm font-medium text-(--muted)">Target Exam</span>
          </div>
          <div className="text-xl font-bold">Finals 2025</div>
          <div className="text-xs text-(--muted) mt-1">March 15, 2025 (45 days left)</div>
        </div>
        <div className="glass p-6 rounded-2xl border border-(--border)">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-lg bg-(--accent)/10 flex items-center justify-center text-(--accent)">
              <Zap size={20} />
            </div>
            <span className="text-sm font-medium text-(--muted)">Overall Progress</span>
          </div>
          <div className="flex items-end justify-between mb-2">
            <div className="text-2xl font-bold">{progress}%</div>
            <div className="text-xs text-(--muted)">{completedCount}/{tasks.length} Tasks</div>
          </div>
          <div className="w-full h-2 bg-(--card) rounded-full overflow-hidden">
            <div 
              className="h-full bg-(--accent) transition-all duration-500" 
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <div className="glass p-6 rounded-2xl border border-(--border)">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400">
              <Clock size={20} />
            </div>
            <span className="text-sm font-medium text-(--muted)">Daily Streak</span>
          </div>
          <div className="text-2xl font-bold">12 Days</div>
          <div className="text-xs text-(--muted) mt-1">Keep it up, topper!</div>
        </div>
      </div>

      {/* Setup Modal Simulation */}
      {showSetup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-(--bg)/80 backdrop-blur-sm">
          <div className="glass w-full max-w-lg rounded-3xl border border-(--border) p-8 animate-fade-in">
            <h2 className="text-2xl font-bold mb-6">Configure Your Roadmap</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-(--muted) mb-2">Exam Date</label>
                <input type="date" className="w-full bg-(--card) border border-(--border) rounded-xl px-4 py-3 focus:outline-none focus:border-(--accent)" />
              </div>
              <div>
                <label className="block text-sm font-medium text-(--muted) mb-2">Target Subjects</label>
                <div className="flex flex-wrap gap-2">
                  {['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English'].map(s => (
                    <button key={s} className="px-4 py-2 rounded-full border border-(--border) text-sm hover:border-(--accent) transition-colors">
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <div className="border-2 border-dashed border-(--border) rounded-2xl p-8 text-center hover:border-(--accent)/50 transition-colors cursor-pointer group">
                <Upload className="mx-auto text-(--muted) group-hover:text-(--accent) mb-3" size={32} />
                <p className="text-sm font-medium">Upload Syllabus (PDF/Image)</p>
                <p className="text-xs text-(--muted) mt-1">AI will analyze and chunk your content</p>
              </div>
              <div className="flex gap-3 pt-4">
                <button onClick={() => setShowSetup(false)} className="flex-1 py-3 rounded-xl border border-(--border) font-bold hover:bg-(--card)">Cancel</button>
                <button onClick={() => setShowSetup(false)} className="flex-1 py-3 rounded-xl bg-(--accent) text-(--bg) font-bold">Generate Plan</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Roadmap Timeline */}
      <div className="space-y-12">
        {days.map(day => (
          <div key={day} className="relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-(--accent) flex flex-col items-center justify-center text-(--bg) shadow-[0_0_15px_rgba(245,184,0,0.2)]">
                <span className="text-[10px] font-bold uppercase leading-none">Day</span>
                <span className="text-xl font-black leading-none">{day}</span>
              </div>
              <div className="h-px flex-1 bg-(--border)" />
              <span className="text-xs font-bold text-(--muted) uppercase tracking-widest">
                {day === 1 ? 'Today' : day === 2 ? 'Tomorrow' : `Upcoming`}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tasks.filter(t => t.day === day).map(task => (
                <div 
                  key={task.id} 
                  className={`group glass p-5 rounded-2xl border transition-all ${
                    task.completed ? 'border-green-500/30 bg-green-500/5' : 'border-(--border) hover:border-(--accent)/50'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                          task.action === 'Revise' ? 'bg-blue-500/20 text-blue-400' : 
                          task.action === 'Practice' ? 'bg-purple-500/20 text-purple-400' : 
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {task.action}
                        </span>
                        <span className="text-[10px] font-bold text-(--muted) uppercase tracking-wider">
                          {task.subject}
                        </span>
                      </div>
                      <h3 className={`font-bold leading-tight ${task.completed ? 'text-(--muted) line-through' : 'text-(--fg)'}`}>
                        {task.topic}
                      </h3>
                    </div>
                    <button 
                      onClick={() => toggleTask(task.id)}
                      className={`shrink-0 transition-colors ${task.completed ? 'text-green-500' : 'text-(--muted) hover:text-(--accent)'}`}
                    >
                      {task.completed ? <CheckCircle size={24} fill="currentColor" className="text-green-500 fill-green-500/20" /> : <Circle size={24} />}
                    </button>
                  </div>
                  
                  <p className="text-sm text-(--muted) mb-6 line-clamp-2">
                    {task.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-(--border)">
                    <button className="flex items-center gap-2 text-xs font-bold text-(--accent) hover:underline">
                      {task.action === 'Revise' ? (
                        <><BookOpen size={14} /> Start Revision</>
                      ) : task.action === 'Practice' ? (
                        <><Zap size={14} /> Generate Quiz</>
                      ) : (
                        <><FileText size={14} /> Take Test</>
                      )}
                    </button>
                    <ChevronRight size={16} className="text-(--muted) group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Empty State / Footer Tip */}
      <div className="mt-20 p-8 rounded-3xl bg-gradient-to-br from-(--accent)/10 to-transparent border border-(--accent)/20 text-center">
        <div className="w-12 h-12 bg-(--accent) rounded-2xl flex items-center justify-center text-(--bg) mx-auto mb-4">
          <Target size={24} />
        </div>
        <h3 className="text-xl font-bold mb-2">Ready for the next challenge?</h3>
        <p className="text-(--muted) max-w-md mx-auto mb-6">
          Your AI tutor is ready to help you master these concepts. Click on any task to start a guided learning session.
        </p>
        <button className="inline-flex items-center gap-2 text-(--accent) font-bold hover:underline">
          View Full Syllabus Progress
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
