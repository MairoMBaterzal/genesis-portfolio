import React, { useState } from 'react';
import {
  Sparkles,
  Presentation,
  FileText,
  Mail,
  Phone,
  Copy,
  Check,
  ChevronDown,
  MonitorPlay,
  Layers,
  Briefcase,
  GitGraph,
  Workflow,
  Compass
} from 'lucide-react';
import { profileData } from '../data/profileData';

interface NavbarProps {
  activeTab: number;
  setActiveTab: (tab: number) => void;
  isPitchMode: boolean;
  setIsPitchMode: (mode: boolean) => void;
  showCueSheet: boolean;
  setShowCueSheet: (show: boolean) => void;
  openResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  isPitchMode,
  setIsPitchMode,
  showCueSheet,
  setShowCueSheet,
  openResumeModal,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showContactMenu, setShowContactMenu] = useState(false);

  const navItems = [
    { id: 0, label: "01 / Competency & Stack", shortLabel: "Competency", icon: Layers },
    { id: 1, label: "02 / Case Studies", shortLabel: "Case Studies", icon: Briefcase },
    { id: 2, label: "03 / Interactive Workflows", shortLabel: "Workflows", icon: Workflow },
    { id: 3, label: "04 / How I Work & SOPs", shortLabel: "How I Work", icon: Compass },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          
          {/* Brand & Profile Section */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="relative group cursor-pointer" onClick={() => setActiveTab(0)}>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden ring-2 ring-cyan-500/40 group-hover:ring-cyan-400 transition-all shadow-md shadow-cyan-950/30">
                <img
                  src={profileData.headshotUrl}
                  alt={profileData.name}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    // Fallback to initials if image path fails
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-slate-950 rounded-full" title="Available for Roles" />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h1 className="text-sm sm:text-base font-bold text-white truncate hover:text-cyan-400 transition cursor-pointer" onClick={() => setActiveTab(0)}>
                  {profileData.name}
                </h1>
                <span className="hidden md:inline-flex items-center gap-1 text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/60">
                  <Sparkles className="w-2.5 h-2.5 text-cyan-400" /> Proof Deck
                </span>
              </div>
              <p className="text-xs text-slate-400 truncate hidden sm:block">
                AI Automation Architect & Enterprise Data Engineer
              </p>
            </div>
          </div>

          {/* Center Navigation Tabs (The 4 presentation slides) */}
          <nav className="hidden lg:flex items-center bg-slate-900/90 p-1.5 rounded-xl border border-slate-800">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-950'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Tools */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Pitch / Screen-Share Mode Toggle */}
            <button
              onClick={() => setIsPitchMode(!isPitchMode)}
              className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                isPitchMode
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-sm shadow-amber-950'
                  : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
              title="Toggle Screen-Sharing Presenter Mode"
            >
              <Presentation className={`w-3.5 h-3.5 ${isPitchMode ? 'text-amber-400 animate-pulse' : 'text-slate-400'}`} />
              <span className="hidden sm:inline">{isPitchMode ? 'Pitch Mode Active' : 'Screen-Share Mode'}</span>
            </button>

            {/* Presenter Talking Points Sheet Toggle */}
            <button
              onClick={() => setShowCueSheet(!showCueSheet)}
              className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                showCueSheet
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
              title="Presenter Talking Points Cheat-Sheet"
            >
              <MonitorPlay className="w-3.5 h-3.5 text-cyan-400" />
              <span>Talking Points</span>
            </button>

            {/* Resume Trigger */}
            <button
              onClick={openResumeModal}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900 text-slate-300 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 transition cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden md:inline">Verified Resume</span>
              <span className="md:hidden">Resume</span>
            </button>

            {/* Direct Contact Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowContactMenu(!showContactMenu)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-sm shadow-cyan-950 transition cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Contact</span>
                <ChevronDown className="w-3 h-3 opacity-80" />
              </button>

              {showContactMenu && (
                <div className="absolute right-0 mt-2 w-64 rounded-xl bg-slate-900/95 border border-slate-700/80 p-2 shadow-xl shadow-black/80 backdrop-blur-md z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-2 py-1.5 border-b border-slate-800 text-[11px] font-medium text-slate-400">
                    Get in Touch with Genesis Auza
                  </div>

                  <a
                    href={`mailto:${profileData.email}`}
                    className="flex items-center justify-between p-2 rounded-lg text-xs text-slate-200 hover:bg-slate-800 hover:text-cyan-300 transition"
                  >
                    <div className="flex items-center gap-2 truncate">
                      <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="truncate">{profileData.email}</span>
                    </div>
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="w-full flex items-center justify-between p-2 rounded-lg text-xs text-slate-200 hover:bg-slate-800 hover:text-cyan-300 transition text-left cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                      <span>{copiedEmail ? 'Email Copied!' : 'Copy Email Address'}</span>
                    </div>
                  </button>

                  <a
                    href={`tel:${profileData.phone}`}
                    className="flex items-center gap-2 p-2 rounded-lg text-xs text-slate-200 hover:bg-slate-800 hover:text-cyan-300 transition"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{profileData.phone}</span>
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 rounded-lg text-xs text-slate-200 hover:bg-slate-800 hover:text-cyan-300 transition"
                  >
                    <svg className="w-3.5 h-3.5 text-blue-400 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              )}
            </div>

          </div>

        </div>

        {/* Mobile Navigation Row */}
        <div className="lg:hidden flex items-center justify-between py-2 border-t border-slate-800/60 overflow-x-auto gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-cyan-600 text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Icon className="w-3 h-3" />
                <span>{item.shortLabel}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
