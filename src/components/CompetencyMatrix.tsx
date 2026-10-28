import React, { useState } from 'react';
import {
  Sparkles,
  Code2,
  Cpu,
  Layers,
  Database,
  Server,
  ArrowRight,
  CheckCircle2,
  Copy,
  Check,
  Terminal,
  ExternalLink,
  Award,
  Zap,
  Globe
} from 'lucide-react';
import { profileData } from '../data/profileData';
import { competenciesData, CompetencyItem } from '../data/competenciesData';
import { MetricBadge } from './MetricBadge';

interface CompetencyMatrixProps {
  onNavigateToWorkflows: () => void;
  onNavigateToCaseStudies: () => void;
}

export const CompetencyMatrix: React.FC<CompetencyMatrixProps> = ({
  onNavigateToWorkflows,
  onNavigateToCaseStudies,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeCodeModal, setActiveCodeModal] = useState<CompetencyItem | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  const categories = [
    'All',
    'AI & Workflow Automation',
    'Outbound Infrastructure',
    'Data Engineering & SQL',
    'API & System Integrations',
  ];

  const filteredCompetencies = selectedCategory === 'All'
    ? competenciesData
    : competenciesData.filter(c => c.category === selectedCategory);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="space-y-10 pb-16 animate-in fade-in duration-300">
      
      {/* 1. Hero Executive Proof Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-950 border border-slate-800 p-6 sm:p-10 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Headshot & Identity */}
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="relative mb-5">
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden ring-4 ring-cyan-500/30 shadow-2xl shadow-cyan-950/50">
                <img
                  src={profileData.headshotUrl}
                  alt={profileData.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 px-3 py-1 rounded-full bg-slate-900/95 border border-emerald-500/50 text-emerald-300 text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Verified Architect</span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {profileData.name}
            </h1>
            <p className="text-sm font-semibold text-cyan-400 mt-1">
              {profileData.title}
            </p>
            <p className="text-xs text-slate-400 mt-2 max-w-sm">
              {profileData.subtitle}
            </p>

            <div className="mt-4 flex flex-wrap gap-2 justify-center sm:justify-start">
              <span className="text-[11px] px-2.5 py-1 rounded-md bg-slate-800/90 text-slate-300 border border-slate-700/60 flex items-center gap-1">
                <Globe className="w-3 h-3 text-cyan-400" /> Remote (PH • US Overlap)
              </span>
              <span className="text-[11px] px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                <Award className="w-3 h-3 text-amber-400" /> 2x Impact Award Nominee
              </span>
            </div>
          </div>

          {/* Value Proposition & Live Numbers */}
          <div className="lg:col-span-8 space-y-6">
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Screen-Share Executive Summary</span>
              </div>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                "I specialize in bridging high-volume automation with enterprise data reliability. Whether orchestrating <strong className="text-white font-semibold">6,000+ secondary mailboxes sending 500k emails monthly</strong> with sub-5% bounce rates, building <strong className="text-white font-semibold">autonomous N8N AI workflows</strong>, or writing <strong className="text-white font-semibold">optimized SQL on HUE Impala</strong> at IQVIA that cut manual effort by 40%—my work is measurable, resilient, and production-tested."
              </p>
            </div>

            {/* 4 Core Hero Proof Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              <MetricBadge
                value="500K+"
                label="Monthly Outbound"
                subtext="Emails dispatched / month"
                color="cyan"
              />
              <MetricBadge
                value="6,000+"
                label="Inboxes Managed"
                subtext="Zero-burn secondary pools"
                color="indigo"
              />
              <MetricBadge
                value="40%"
                label="Manual Effort Cut"
                subtext="Verified at IQVIA & Premier"
                color="emerald"
              />
              <MetricBadge
                value="< 5.0%"
                label="Hard Bounce SLA"
                subtext="Sub-5% maintained at scale"
                color="amber"
              />
            </div>

            {/* Quick Action Navigation */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onNavigateToWorkflows}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-950 transition cursor-pointer"
              >
                <Zap className="w-4 h-4" />
                <span>Inspect Live Workflows & Actual Outputs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={onNavigateToCaseStudies}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 transition cursor-pointer"
              >
                <span>View Full Case Studies (StylSensei, Premier, IQVIA)</span>
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Competency Grid with Category Filter */}
      <section className="space-y-6">
        
        {/* Section Heading & Category Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <Layers className="w-5 h-5 text-cyan-400" />
              <span>Competency Matrix & Technical Stack</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              What I know, what I build, and production artifacts matching my experience.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-white font-semibold shadow-md shadow-cyan-950'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Competency Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCompetencies.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between rounded-2xl bg-slate-900/70 border border-slate-800 p-5 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all duration-300 shadow-lg hover:shadow-cyan-950/30"
            >
              <div>
                {/* Header Tags */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-cyan-950 text-cyan-300 border border-cyan-800/60">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-800/40">
                    {item.experienceLevel}
                  </span>
                </div>

                {/* Title & Context */}
                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition">
                  {item.title}
                </h3>
                <p className="text-xs font-medium text-cyan-400/90 mt-0.5">
                  Applied at: {item.roleContext}
                </p>

                <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                  {item.description}
                </p>

                {/* Capabilities Checklist */}
                <div className="mt-4 space-y-1.5">
                  {item.capabilities.slice(0, 3).map((cap, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-[11px] leading-snug">{cap}</span>
                    </div>
                  ))}
                </div>

                {/* Proof Metric */}
                <div className="mt-4 p-2 rounded-lg bg-slate-950/80 border border-slate-800/80 text-[11px] font-medium text-emerald-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>{item.metricProof}</span>
                </div>
              </div>

              {/* Tools & Inspect Action */}
              <div className="mt-5 pt-4 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1 mb-3">
                  {item.tools.map((t, i) => (
                    <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setActiveCodeModal(item)}
                  className="w-full flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-cyan-600 text-slate-200 hover:text-white transition cursor-pointer group/btn"
                >
                  <Code2 className="w-3.5 h-3.5 text-cyan-400 group-hover/btn:text-white" />
                  <span>Inspect Code & Blueprint</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* 3. Code & Blueprint Inspection Modal */}
      {activeCodeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-150">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-900 border border-cyan-500/40 shadow-2xl shadow-black p-6">
            
            {/* Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1">
                  <Terminal className="w-4 h-4" />
                  <span>Production Code & Schema Blueprint</span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  {activeCodeModal.codeSnippet.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {activeCodeModal.codeSnippet.explanation}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopyCode(activeCodeModal.codeSnippet.code)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 transition cursor-pointer"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? 'Copied!' : 'Copy Code'}</span>
                </button>
                <button
                  onClick={() => setActiveCodeModal(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Code Block */}
            <div className="mt-4 rounded-xl bg-slate-950 border border-slate-800 p-4 font-mono text-xs text-slate-200 overflow-x-auto">
              <pre className="leading-relaxed">
                <code>{activeCodeModal.codeSnippet.code}</code>
              </pre>
            </div>

            {/* Footer with Role Context */}
            <div className="mt-4 p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Applied Context: <strong className="text-cyan-400">{activeCodeModal.roleContext}</strong></span>
              <span className="text-emerald-400 font-semibold">{activeCodeModal.metricProof}</span>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

