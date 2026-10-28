import React, { useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  FileText,
  Workflow,
  Sparkles,
  Layers,
  Briefcase,
  Compass,
  MessageSquareQuote
} from 'lucide-react';

interface PresenterBarProps {
  activeTab: number;
  setActiveTab: (tab: number) => void;
  showCueSheet: boolean;
  setShowCueSheet: (show: boolean) => void;
  isPitchMode: boolean;
}

export const PresenterBar: React.FC<PresenterBarProps> = ({
  activeTab,
  setActiveTab,
  showCueSheet,
  setShowCueSheet,
  isPitchMode,
}) => {
  const slides = [
    { id: 0, title: "01: Competency & Stack", icon: Layers },
    { id: 1, title: "02: Case Studies & Results", icon: Briefcase },
    { id: 2, title: "03: Workflow Blueprints & Outputs", icon: Workflow },
    { id: 3, title: "04: How I Work & Standards", icon: Compass },
  ];

  // Handle keyboard arrow navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        setActiveTab(Math.min(activeTab + 1, slides.length - 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        setActiveTab(Math.max(activeTab - 1, 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeTab, setActiveTab, slides.length]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  return (
    <div className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-40 transition-all duration-300 ${
      isPitchMode ? 'scale-100 opacity-100' : 'hover:opacity-100 opacity-90'
    }`}>
      <div className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-2xl shadow-black/80 backdrop-blur-xl">
        
        {/* Previous Slide */}
        <button
          onClick={() => setActiveTab(Math.max(activeTab - 1, 0))}
          disabled={activeTab === 0}
          className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none transition cursor-pointer"
          title="Previous Page (Left Arrow ←)"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Slide Indicators */}
        <div className="flex items-center gap-1.5 px-2">
          {slides.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                activeTab === s.id
                  ? 'w-7 bg-cyan-400 shadow-sm shadow-cyan-500'
                  : 'w-2 bg-slate-700 hover:bg-slate-500'
              }`}
              title={s.title}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="px-2 text-xs font-mono font-medium text-slate-300 flex items-center gap-1.5">
          <span className="text-cyan-400 font-bold">0{activeTab + 1}</span>
          <span className="text-slate-600">/</span>
          <span className="text-slate-400">04</span>
          <span className="hidden sm:inline text-slate-400 ml-1 truncate max-w-[150px]">
            {slides[activeTab].title.split(': ')[1]}
          </span>
        </div>

        {/* Next Slide */}
        <button
          onClick={() => setActiveTab(Math.min(activeTab + 1, slides.length - 1))}
          disabled={activeTab === slides.length - 1}
          className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none transition cursor-pointer"
          title="Next Page (Right Arrow →)"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        <div className="w-[1px] h-4 bg-slate-700 mx-1" />

        {/* Talking Points Trigger */}
        <button
          onClick={() => setShowCueSheet(!showCueSheet)}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium transition cursor-pointer ${
            showCueSheet
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
          title="Toggle Presenter Talking Points for this view"
        >
          <MessageSquareQuote className="w-3.5 h-3.5" />
          <span className="hidden md:inline">Talking Points</span>
        </button>

        {/* Fullscreen Toggle */}
        <button
          onClick={toggleFullscreen}
          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
          title="Toggle Fullscreen"
        >
          <Maximize2 className="w-3.5 h-3.5" />
        </button>

      </div>
    </div>
  );
};

