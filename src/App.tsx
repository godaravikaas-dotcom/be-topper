import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { DashboardSidebar } from './components/DashboardSidebar';
import { StudyPlanner } from './components/StudyPlanner';
import { MasteryHub } from './components/MasteryHub';
import { AITutor } from './components/AITutor';

export function App() {
  const [isDashboard, setIsDashboard] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderDashboardContent = () => {
    switch (activeTab) {
      case 'planner':
        return <StudyPlanner />;
      case 'mastery':
        return <MasteryHub />;
      case 'tutor':
        return <AITutor />;
      default:
        return (
          <div className="p-10 animate-fade-in">
            <h1 className="text-3xl font-bold mb-4">Welcome back, Student!</h1>
            <p className="text-(--muted)">Select a tool from the sidebar to begin your learning session.</p>
          </div>
        );
    }
  };

  if (isDashboard) {
    return (
      <div className="flex min-h-screen bg-(--bg)">
        <title>Dashboard | be topper</title>
        <DashboardSidebar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          onExit={() => setIsDashboard(false)} 
        />
        <main className="flex-1 overflow-y-auto">
          {renderDashboardContent()}
        </main>
      </div>
    );
  }

  return (
    <div className="bg-(--bg) text-(--fg) min-h-screen">
      <title>be topper | AI Learning Platform</title>
      <Header onEnterDashboard={() => setIsDashboard(true)} />
      <main>
        <Hero onEnterDashboard={() => setIsDashboard(true)} />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
