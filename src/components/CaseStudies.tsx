import React, { useState } from 'react';
import {
  Briefcase,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Award,
  Zap,
  Terminal,
  Server,
  FileCheck,
  Sliders,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { caseStudiesData, CaseStudy } from '../data/caseStudiesData';
import { MetricBadge } from './MetricBadge';

interface CaseStudiesProps {
  onNavigateToWorkflows: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onNavigateToWorkflows }) => {
  const [selectedId, setSelectedId] = useState<string>(caseStudiesData[0].id);
  const [warmupDay, setWarmupDay] = useState<number>(14);

  const activeStudy = caseStudiesData.find(cs => cs.id === selectedId) || caseStudiesData[0];

  // Warmup curve calculation for StylSensei visual asset
  const getWarmupVolume = (day: number) => {
    if (day <= 3) return { perBox: 3, totalDaily: 18000, status: 'Initial Handshake & Seed Pool' };
    if (day <= 7) return { perBox: 8, totalDaily: 48000, status: 'ESP Reputation Ramping' };
    if (day <= 14) return { perBox: 18, totalDaily: 108000, status: 'Target Outreach Expansion' };
    return { perBox: 28, totalDaily: 168000, status: 'Full 500k/mo Production Velocity' };
  };

  const warmupStats = getWarmupVolume(warmupDay);

  return (
    <div className="space-y-10 pb-16 animate-in fade-in duration-300">
      
      {/* 1. Header & Switcher */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1">
              <Briefcase className="w-4 h-4" />
              <span>Section 02 • Case Studies & Proof of Work</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              What I Did: Production Case Studies
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Real systems engineered, commercial metrics achieved, and enterprise challenges solved.
            </p>
          </div>

          <button
            onClick={onNavigateToWorkflows}
            className="self-start sm:self-auto flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition cursor-pointer"
          >
            <span>Jump to Workflow Simulator</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Case Study Selection Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {caseStudiesData.map((study) => {
            const isSelected = study.id === selectedId;
            return (
              <button
                key={study.id}
                onClick={() => setSelectedId(study.id)}
                className={`flex flex-col text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-br from-slate-900 to-slate-900/90 border-cyan-500/60 shadow-xl shadow-cyan-950/40 ring-1 ring-cyan-500/50'
                    : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                    isSelected ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {study.badge}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">{study.period}</span>
                </div>

                <h3 className={`text-sm font-bold truncate ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                  {study.client}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                  {study.tagline}
                </p>

                <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-baseline justify-between">
                  <span className="text-xs text-slate-400 font-medium">Hero Metric:</span>
                  <span className="text-xs font-bold text-cyan-400 font-mono">{study.heroMetric.value} {study.heroMetric.label}</span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* 2. Active Case Study Deep-Dive */}
      <section className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 space-y-8 shadow-2xl">
        
        {/* Case Study Banner & Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pb-6 border-b border-slate-800">
          
          <div className="lg:col-span-8 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold font-mono uppercase px-2.5 py-1 rounded-md bg-cyan-950 text-cyan-300 border border-cyan-800/60">
                {activeStudy.role}
              </span>
              <span className="text-xs text-slate-400">{activeStudy.period}</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              {activeStudy.tagline}
            </h2>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {activeStudy.techStack.map((tech, i) => (
                <span key={i} className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-950 text-slate-300 border border-slate-800">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 p-4 rounded-2xl bg-slate-950/80 border border-cyan-500/30 flex flex-col items-center text-center justify-center">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              {activeStudy.heroMetric.label}
            </span>
            <span className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-mono mt-1">
              {activeStudy.heroMetric.value}
            </span>
            <span className="text-[11px] text-emerald-400 font-medium mt-1 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Verified Production Metric
            </span>
          </div>

        </div>

        {/* 4 Key Metrics Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {activeStudy.keyMetrics.map((km, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
              <div className="text-xl sm:text-2xl font-bold font-mono text-white">{km.value}</div>
              <div className="text-xs font-semibold text-slate-300 mt-1">{km.label}</div>
              <div className="text-[11px] text-slate-500 mt-0.5">{km.subtext}</div>
            </div>
          ))}
        </div>

        {/* Challenge vs Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Challenge */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <span>The Operational Challenge</span>
            </h3>
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-slate-200 leading-relaxed">
              {activeStudy.challenge}
            </div>

            {/* Presenter Talking Points Card */}
            <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-800/40 space-y-2 mt-4">
              <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-cyan-400" />
                <span>Screen-Share Talking Points</span>
              </span>
              <ul className="space-y-1.5">
                {activeStudy.presenterTalkingPoints.map((tp, i) => (
                  <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>{tp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Solution */}
          <div className="lg:col-span-7 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <span>Genesis's Engineering Solution</span>
            </h3>
            <div className="space-y-2.5">
              {activeStudy.solution.map((sol, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{sol}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Architecture Flow Timeline */}
        <div className="pt-6 border-t border-slate-800 space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>Architecture & Execution Pipeline</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {activeStudy.architectureFlow.map((step) => (
              <div key={step.stepNumber} className="relative p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-xs flex items-center justify-center font-mono">
                      0{step.stepNumber}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                      {step.tag}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">{step.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Asset & Deliverable Showcase */}
        <div className="pt-6 border-t border-slate-800 space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
            <FileCheck className="w-4 h-4" />
            <span>Actual Outputs & Production Deliverables</span>
          </h3>

          {/* Interactive Feature for StylSensei: 21-Day Warmup Curve Simulator */}
          {activeStudy.id === 'stylsensei-outbound-engine' && (
            <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 border border-cyan-500/30 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-cyan-400" />
                    <span>Interactive Deliverability Simulator: 21-Day Inbox Warmup Ramp</span>
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Drag the slider to inspect daily volume allocation across 6,000+ secondary mailboxes.
                  </p>
                </div>

                <div className="px-3 py-1 rounded-lg bg-cyan-950 text-cyan-300 font-mono text-xs border border-cyan-800/60">
                  Day {warmupDay} of 21
                </div>
              </div>

              <input
                type="range"
                min="1"
                max="21"
                value={warmupDay}
                onChange={(e) => setWarmupDay(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
              />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-slate-400 block text-[11px]">Volume Per Mailbox:</span>
                  <span className="text-lg font-bold text-white font-mono">{warmupStats.perBox} emails/day</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-slate-400 block text-[11px]">Cluster Daily Send Capacity:</span>
                  <span className="text-lg font-bold text-cyan-400 font-mono">{warmupStats.totalDaily.toLocaleString()} emails/day</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-slate-400 block text-[11px]">Algorithm Phase:</span>
                  <span className="text-xs font-semibold text-emerald-400">{warmupStats.status}</span>
                </div>
              </div>
            </div>
          )}

          {/* Deliverables Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeStudy.deliverables.map((del, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-white">{del.name}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-cyan-400 border border-slate-800 uppercase">
                      {del.type}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">{del.description}</p>
                </div>

                {del.dataSnippet && (
                  <pre className="mt-3 p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-cyan-300 overflow-x-auto whitespace-pre-wrap">
                    {del.dataSnippet}
                  </pre>
                )}
              </div>
            ))}
          </div>

        </div>

      </section>

    </div>
  );
};
