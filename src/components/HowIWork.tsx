import React, { useState } from 'react';
import {
  Compass,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Zap,
  Globe,
  Award,
  Users,
  FileText,
  Mail,
  Phone,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Terminal,
  Layers
} from 'lucide-react';
import { howIWorkPhases, operatingStandards, WorkPhase } from '../data/howIWorkData';
import { profileData } from '../data/profileData';

interface HowIWorkProps {
  openResumeModal: () => void;
}

export const HowIWork: React.FC<HowIWorkProps> = ({ openResumeModal }) => {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);
  const activePhase: WorkPhase = howIWorkPhases[activePhaseIndex];

  const getStandardIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return ShieldCheck;
      case 'Cpu': return Cpu;
      case 'Zap': return Zap;
      default: return Globe;
    }
  };

  return (
    <div className="space-y-10 pb-16 animate-in fade-in duration-300">
      
      {/* 1. Header */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1">
              <Compass className="w-4 h-4" />
              <span>Section 04 • Operational Methodology & Standards</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              How I Work: My Usual Workflow & Delivery Framework
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              How I transition from discovery to scalable, self-healing systems and train internal teams to self-serve.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={openResumeModal}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 transition cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>View Full Credentials</span>
            </button>
          </div>
        </div>

        {/* Phase Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {howIWorkPhases.map((phase, idx) => {
            const isSelected = activePhaseIndex === idx;
            return (
              <button
                key={phase.phaseNumber}
                onClick={() => setActivePhaseIndex(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 border-cyan-500/70 shadow-xl shadow-cyan-950/40 ring-1 ring-cyan-500/50'
                    : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-[10px] font-bold font-mono px-2 py-0.5 rounded ${
                    isSelected ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-800 text-slate-400'
                  }`}>
                    0{phase.phaseNumber}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">{phase.duration.split('• ')[1]}</span>
                </div>
                <h3 className={`text-xs sm:text-sm font-bold truncate ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                  {phase.phaseName}
                </h3>
              </button>
            );
          })}
        </div>
      </section>

      {/* 2. Active Phase Deep-Dive */}
      <section className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-2xl">
        
        {/* Phase Header */}
        <div className="pb-6 border-b border-slate-800 space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase px-2.5 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/60">
              Phase {activePhase.phaseNumber} • {activePhase.duration}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            {activePhase.phaseName}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            {activePhase.tagline}
          </p>
        </div>

        {/* Genesis's Quote / Mindset */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-slate-900 to-blue-500/10 border border-cyan-500/20">
          <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
            "{activePhase.genesisQuote}"
          </p>
          <span className="text-[11px] font-semibold text-cyan-400 block mt-2">
            — Genesis L. Auza, Engineering Mindset
          </span>
        </div>

        {/* Objectives & Deliverables Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Core Objectives */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Phase Objectives & Milestones</span>
            </h3>
            <div className="space-y-2">
              {activePhase.objectives.map((obj, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                  <span className="text-cyan-400 font-bold font-mono">0{i + 1}.</span>
                  <span>{obj}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tangible Deliverables & Quality Checklist */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-2 mb-3">
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Verified Deliverables</span>
              </h3>
              <div className="space-y-2">
                {activePhase.deliverables.map((del, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950/70 border border-emerald-900/30 text-xs text-emerald-300 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-xs font-semibold text-slate-300 block mb-2">
                Quality Gate & Verification:
              </span>
              <ul className="space-y-1.5">
                {activePhase.checklist.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-[11px] text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </section>

      {/* 3. Operating SLAs & Reliability Standards */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span>Production Operating Standards & SLAs</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            The strict rules and reliability thresholds I enforce in every production environment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {operatingStandards.map((std, i) => {
            const Icon = getStandardIcon(std.icon);
            return (
              <div key={i} className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-xl bg-slate-800 text-cyan-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase">
                      {std.category}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white mb-1.5">
                    {std.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {std.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 text-xs font-mono font-semibold text-emerald-300">
                  {std.sla}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Stakeholder Training & Enablement Philosophy (IQVIA proof) */}
      <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/80 to-slate-950 border border-amber-500/30 shadow-2xl space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Stakeholder Enablement & Impact Award Recognition</span>
          </div>
          <span className="text-xs font-mono text-slate-400">IQVIA Enterprise</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 space-y-2">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              "Great systems fail if your team can't use them."
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              At IQVIA, I didn't just build automated scraping scripts and manage HUE Impala databases—I authored comprehensive documentation and conducted training sessions on Looker and SQL for over 30 non-technical stakeholders. This directly earned me <strong className="text-white">two consecutive Impact Award nominations (Q4 and Q5)</strong> for presentation clarity and rapid tool enablement.
            </p>
          </div>

          <div className="lg:col-span-4 p-4 rounded-2xl bg-slate-950/80 border border-amber-500/20 text-center">
            <div className="text-2xl font-bold font-mono text-amber-400">30+ Users</div>
            <div className="text-xs text-slate-300 mt-1">Trained on SQL & Looker</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Zero reliance on repetitive tickets</div>
          </div>
        </div>
      </section>

      {/* 5. Final Screen-Share Closing Card */}
      <section className="p-8 rounded-3xl bg-gradient-to-r from-cyan-950/60 via-slate-900 to-blue-950/60 border border-cyan-500/40 text-center space-y-4 shadow-2xl">
        <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
          Ready to scale your automation, outbound infra, or data pipelines?
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
          I am available for high-impact automation engineering, outbound infrastructure architecture, or enterprise data roles with global overlap.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href={`mailto:${profileData.email}`}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-950 transition"
          >
            <Mail className="w-4 h-4" />
            <span>Email Genesis ({profileData.email})</span>
          </a>
          <a
            href={`tel:${profileData.phone}`}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 transition"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>Direct Call ({profileData.phone})</span>
          </a>
        </div>
      </section>

    </div>
  );
};

