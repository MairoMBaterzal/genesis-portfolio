import React, { useState } from 'react';
import {
  ArrowRight,
  Mail,
  Copy,
  Check,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Send,
  Layers,
  Sparkles,
  ExternalLink,
  X,
  Database,
  Cpu,
  Flame,
  Search,
  Globe,
  Radio,
  Workflow
} from 'lucide-react';
import { profileData } from './data/profileData';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeTab, setActiveTab] = useState<'infrastructure' | 'scraping' | 'copywriting' | 'crm'>('infrastructure');
  const [activeLightbox, setActiveLightbox] = useState<{ url: string; title: string; caption: string } | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const proofAssets = [
    {
      title: "645,355 Dispatches · 7,090 Positive Replies (Single Cluster)",
      badge: "LIVE INSTANTLY TELEMETRY",
      stat: "22.4% Positive Rate · 1.0% Bounce",
      caption: "Live Instantly campaign metrics across 451,749 targeted B2B prospects: 22.4% positive reply rate (7,090 positive leads) and a 1.0% bounce rate using Step 1 permission asks.",
      url: "/proof/instantly-645k-stats.png"
    },
    {
      title: "Live C-Suite Meetings: Healthcare & Services",
      badge: "SLACK CALENDAR DELIVERY",
      stat: "CEOs, Presidents, Partners",
      caption: "Real-time MEETING_BOOKED alerts delivered directly to client Slack channels for Presidents, CEOs, and Partners (Cedar Landscape, Phosis, Alliance Environmental, YogaMedics).",
      url: "/proof/slack-booked-meetings-feed-1.png"
    },
    {
      title: "Live C-Suite Meetings: Brands & Tech Founders",
      badge: "SLACK CALENDAR DELIVERY",
      stat: "Direct to Closers",
      caption: "Qualified meetings booked and handed off to closers for Founders & CEOs (Timeless Tartans, Rubbit, Fantastic Fungi).",
      url: "/proof/slack-booked-meetings-feed-2.png"
    },
    {
      title: "Sub-15 Min Lead Triage: Taylor Hospitality",
      badge: "RAPID QUALIFICATION",
      stat: "Scheduled EST Call",
      caption: "Direct prospect handoff to client Brand Manager Carrie with verified contact info, phone, website, and scheduled discovery meeting.",
      url: "/proof/slack-booked-meeting-taylor.png"
    },
    {
      title: "Outbound Velocity & Deal Handling Strategy",
      badge: "STYLSENSEI METHODOLOGY",
      stat: "Co-Founder Breakdown",
      caption: "Co-Founder breakdown of cold outbound reply triage: eliminating friction, real-time routing, and turning momentum into signed retainers.",
      url: "/proof/linkedin-post-outbound.png"
    }
  ];

  // Tech stack items for infinite marquee (with large, clear names and roles)
  const techStack = [
    { name: "Plusvibe.ai", role: "Outbound Tooling", icon: Flame },
    { name: "Instantly.ai", role: "Sending & Warmup", icon: Send },
    { name: "Smartlead", role: "Fleet Engine", icon: Radio },
    { name: "HubSpot CRM", role: "Pipeline & Deals", icon: Layers },
    { name: "GoHighLevel", role: "CRM Automations", icon: Workflow },
    { name: "Apollo.io", role: "B2B Lead Data", icon: Search },
    { name: "Clay.com", role: "Enrichment", icon: Database },
    { name: "MillionVerifier", role: "Deliverability", icon: ShieldCheck },
    { name: "Cloudflare DNS", role: "SPF / DKIM / DMARC", icon: Globe },
    { name: "n8n Workflow", role: "Logic Automations", icon: Cpu },
    { name: "Python & SQL", role: "Data Scraping", icon: Terminal },
    { name: "OpenAI Whisper", role: "Voice Transcribe", icon: Sparkles }
  ];

  return (
    <div className="min-h-screen bg-[#090b10] text-zinc-100 font-sans selection:bg-zinc-800 selection:text-white relative">

      {/* Floating Top Nav (Matches Image 1) */}
      <header className="sticky top-4 z-40 flex justify-center px-4 pointer-events-auto">
        <div className="rounded-full bg-[#12151d]/95 backdrop-blur-xl border border-white/10 px-6 py-2.5 flex items-center gap-6 shadow-2xl shadow-black/80">
          <nav className="flex items-center gap-5 text-sm font-mono text-zinc-300">
            <a href="#stack" className="hover:text-white transition">Stack</a>
            <a href="#proof" className="hover:text-white transition">Proof & Wins</a>
            <a href="#pillars" className="hover:text-white transition">The Engine</a>
            <a href="#about" className="hover:text-white transition">About</a>
          </nav>

          <span className="w-px h-4 bg-white/20" />

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowResumeModal(true)}
              className="text-sm font-mono text-zinc-300 hover:text-white transition px-2 py-1 cursor-pointer"
            >
              Resume ↗
            </button>
            <a
              href={`mailto:${profileData.email}`}
              className="px-4 py-1.5 rounded-full bg-white hover:bg-zinc-200 text-zinc-950 text-xs sm:text-sm font-bold tracking-tight transition shadow-sm flex items-center gap-1.5 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Let's talk</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-28 space-y-20 relative">

        {/* HERO SECTION (Clean, confident, human-first like Dribbble/Biosites reference) */}
        <section className="space-y-8">

          {/* Profile Identity Row (Matches Image 1) */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-5 text-left">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-white/15 shadow-xl bg-zinc-900 shrink-0">
                <img
                  src={profileData.headshotUrl}
                  alt={profileData.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    Genesis Auza
                  </h2>
                  <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-medium px-3.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Available for Outbound Roles
                  </span>
                </div>
                <p className="text-sm sm:text-base text-zinc-300 font-mono">
                  Former Co-Founder @ StylSensei · B2B Cold Outbound & GTM Email Systems
                </p>
              </div>
            </div>

            <div className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm font-mono">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>GTM Outbound Infrastructure</span>
            </div>
          </div>

          {/* Bold Headline & Direct Email Contact */}
          <div className="space-y-6 text-left max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              I build & run cold email engines that book qualified B2B pipeline.
            </h1>

            {/* Direct Contact CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href={`mailto:${profileData.email}`}
                className="px-6 py-3.5 rounded-xl bg-white text-zinc-950 font-bold text-sm tracking-tight hover:bg-zinc-200 transition shadow-lg shadow-white/10 flex items-center gap-2.5 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Email Genesis: {profileData.email}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="px-5 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 font-mono text-sm transition flex items-center gap-2 cursor-pointer"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-zinc-400" />}
                <span>{copiedEmail ? 'Copied genesisauza9@gmail.com' : 'Copy Email'}</span>
              </button>

              <button
                onClick={() => setShowResumeModal(true)}
                className="px-5 py-3.5 rounded-xl bg-zinc-900/60 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white font-mono text-sm transition flex items-center gap-2 cursor-pointer"
              >
                <Terminal className="w-4 h-4 text-zinc-400" />
                <span>Verified Resume</span>
              </button>
            </div>

            {/* Niche & Vertical Focus Card */}
            <div className="surface-card p-5 rounded-2xl border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold block">
                  SPECIALIZED NICHE & VERTICAL FOCUS
                </span>
                <p className="text-base font-bold text-white">
                  High-Ticket B2B & Agency Cold Outbound Infrastructure
                </p>
                <p className="text-sm text-zinc-300 font-normal">
                  Dedicated secondary domain fleets across Google Workspace & Microsoft 365, Instantly & Smartlead warmup, and sub-15 min CRM triage.
                </p>
              </div>
              <div className="flex items-center gap-2.5 shrink-0">
                <span className="px-3.5 py-1.5 rounded-lg bg-zinc-800 border border-zinc-700 text-xs font-mono text-zinc-200 font-semibold">
                  Instantly / Smartlead / Plusvibe
                </span>
                <span className="px-3.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400">
                  GoHighLevel / HubSpot
                </span>
              </div>
            </div>
          </div>

        </section>

        {/* 1. TECH STACKS SECTION (ABOVE CAMPAIGN PROOFS & TELEMETRY - Matches Image 2) */}
        <section id="stack" className="space-y-4 pt-4">
          <div className="text-center space-y-1.5">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 block">
              PRODUCTION OPERATING STACK
            </span>
            <p className="text-sm text-zinc-400">
              Battle-tested tools used daily to run high-volume cold email engines
            </p>
          </div>

          {/* 1-Line Infinite Marquee Moving Left */}
          <div className="relative w-full overflow-hidden py-4">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#090b10] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#090b10] to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee flex items-center gap-4">
              {[...techStack, ...techStack].map((tool, idx) => {
                const Icon = tool.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3.5 px-6 py-4 rounded-2xl bg-[#e4e9f0] text-zinc-950 shadow-md hover:bg-white transition shrink-0 cursor-default"
                  >
                    <Icon className="w-6 h-6 text-zinc-900 shrink-0" />
                    <div className="text-left">
                      <div className="text-base font-extrabold tracking-tight text-zinc-950 whitespace-nowrap">
                        {tool.name}
                      </div>
                      <div className="text-xs font-mono text-zinc-600 font-medium whitespace-nowrap">
                        {tool.role}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 2. CAMPAIGN PROOFS & TELEMETRY SECTION (DIRECTLY UNDER TECH STACK) */}
        <section id="proof" className="space-y-8">

          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-white/10">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 block mb-1">
                CAMPAIGN PROOFS & TELEMETRY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Verified Outbound Metrics & Booked Pipeline
              </h2>
            </div>
            <a
              href="https://stylsensei.com/testimonials"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-mono text-zinc-400 hover:text-white transition"
            >
              <span>View Client Testimonials ↗</span>
            </a>
          </div>

          {/* 4 Large, Clear Metric Cards (No Eye Strain, Large Fonts) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="surface-card p-6 rounded-2xl text-left border border-white/10">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1.5 font-semibold">
                MONTHLY SEND SCALE
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold font-mono text-white tracking-tight">
                500K+
              </div>
              <span className="text-sm text-zinc-400 mt-2 block font-normal">
                Dispatched monthly across client fleets
              </span>
            </div>

            <div className="surface-card p-6 rounded-2xl text-left border border-white/10">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1.5 font-semibold">
                POSITIVE REPLIES
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold font-mono text-zinc-100 tracking-tight">
                7,090+
              </div>
              <span className="text-sm text-emerald-400 mt-2 block font-mono font-semibold">
                Single cluster positive response
              </span>
            </div>

            <div className="surface-card p-6 rounded-2xl text-left border border-white/10">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1.5 font-semibold">
                RESPONSE RATE
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold font-mono text-zinc-100 tracking-tight">
                22.4%
              </div>
              <span className="text-sm text-zinc-400 mt-2 block font-normal">
                Across 451,749 targeted B2B leads
              </span>
            </div>

            <div className="surface-card p-6 rounded-2xl text-left border border-white/10">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1.5 font-semibold">
                HARD BOUNCE SLA
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold font-mono text-emerald-400 tracking-tight">
                &lt; 3.0%
              </div>
              <span className="text-sm text-zinc-400 mt-2 block font-normal">
                Zero domain burn protocol
              </span>
            </div>
          </div>

          {/* Proof Screenshot Cards (Linear / Cursor Feature Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
            {proofAssets.map((asset, idx) => (
              <div
                key={idx}
                onClick={() => setActiveLightbox(asset)}
                className={`surface-card rounded-2xl overflow-hidden cursor-pointer group border border-white/10 ${
                  idx === 0 ? 'sm:col-span-2' : ''
                }`}
              >
                {/* Window Chrome Header */}
                <div className="flex items-center justify-between px-5 py-3 bg-zinc-950 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-zinc-700" />
                    <span className="w-3 h-3 rounded-full bg-zinc-700" />
                    <span className="w-3 h-3 rounded-full bg-zinc-700" />
                    <span className="text-xs font-mono text-zinc-300 ml-1.5 font-semibold">
                      {asset.badge}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-emerald-400 font-bold">
                      {asset.stat}
                    </span>
                    <span className="text-xs font-mono text-zinc-400 group-hover:text-white transition font-medium">
                      Inspect ↗
                    </span>
                  </div>
                </div>

                <div className={`${idx === 0 ? 'aspect-[21/9]' : 'aspect-[16/10]'} bg-black overflow-hidden relative`}>
                  <img
                    src={asset.url}
                    alt={asset.title}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.01] transition duration-200"
                  />
                </div>

                <div className="p-5 flex items-start justify-between gap-4">
                  <div className="space-y-1.5 text-left">
                    <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-400 transition">
                      {asset.title}
                    </h4>
                    <p className="text-sm text-zinc-300 font-normal leading-relaxed">
                      {asset.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* B2B Testimonial & Case Outcome Cards (Dark Mode Reference) */}
          <div className="space-y-4 pt-6 border-t border-white/10">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
                PROVEN CLIENT OUTCOMES (STYLSENSEI TRACK RECORD)
              </span>
              <span className="text-sm font-mono text-zinc-400">
                Direct C-Suite Pipeline
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="surface-card p-6 rounded-2xl border border-white/10 space-y-4 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-300 px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 font-semibold">
                    HIGH-TICKET B2B
                  </span>
                  <span className="text-sm font-mono font-extrabold text-emerald-400">
                    6 Retainers Won
                  </span>
                </div>
                <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-normal">
                  "Delivered <strong className="text-white font-bold">40+ qualified discovery calls</strong> with medical clinic owners, resulting in 6 signed high-ticket retainers."
                </p>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span className="text-white font-bold">Practice Growth Co</span>
                  <span>Medical Niche</span>
                </div>
              </div>

              <div className="surface-card p-6 rounded-2xl border border-white/10 space-y-4 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-300 px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 font-semibold">
                    HEALTHCARE M&A
                  </span>
                  <span className="text-sm font-mono font-extrabold text-emerald-400">
                    $150k+ Added
                  </span>
                </div>
                <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-normal">
                  "Sourced <strong className="text-white font-bold">12 off-market healthcare acquisition deals monthly</strong> directly from clinic founders for our active advisory pipeline."
                </p>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span className="text-white font-bold">Healthcare Advisory</span>
                  <span>M&A Practice</span>
                </div>
              </div>

              <div className="surface-card p-6 rounded-2xl border border-white/10 space-y-4 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-300 px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 font-semibold">
                    C-SUITE MEETINGS
                  </span>
                  <span className="text-sm font-mono font-extrabold text-emerald-400">
                    22.4% Positive
                  </span>
                </div>
                <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-normal">
                  "Booked meetings directly with CEOs and Presidents across <strong className="text-white font-bold">Taylor Hospitality, Cedar Landscape, Fantastic Fungi</strong>, and Rubbit."
                </p>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span className="text-white font-bold">Brands & Services</span>
                  <span>B2B Pipeline</span>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* 3. THE 4 OUTBOUND PILLARS (Segmented Control Feature Tabs - Linear / Mobbin Style) */}
        <section id="pillars" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-white/10">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 block mb-1">
                THE OUTBOUND MACHINE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                How The Cold Email Engine Operates
              </h2>
            </div>
            <p className="text-sm text-zinc-400 font-normal max-w-sm">
              4-pillar architecture from secondary domains to closed meeting triage.
            </p>
          </div>

          {/* Segmented Control Feature Tabs */}
          <div className="flex items-center gap-2 p-2 rounded-2xl bg-zinc-950 border border-white/10 overflow-x-auto">
            {[
              { id: 'infrastructure', label: '01. Sending Fleets & DNS', icon: ShieldCheck },
              { id: 'scraping', label: '02. Lead Scraping & Data', icon: Terminal },
              { id: 'copywriting', label: '03. Human Copywriting', icon: Send },
              { id: 'crm', label: '04. CRM & Reply Triage', icon: Layers },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs sm:text-sm font-mono whitespace-nowrap transition cursor-pointer ${
                    isActive
                      ? 'bg-zinc-800 text-white font-bold border border-white/15 shadow-md'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Specification Sheet */}
          <div className="surface-card rounded-2xl p-6 sm:p-8 space-y-6 border border-white/10 text-left">
            {activeTab === 'infrastructure' && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/10 pb-4">
                  <div>
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block font-bold">PILLAR 01</span>
                    <h3 className="text-2xl font-bold text-white mt-1">
                      Dedicated Secondary Domains & Inboxing Hygiene
                    </h3>
                  </div>
                  <span className="text-xs sm:text-sm font-mono text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-3.5 py-1.5 rounded-full font-bold">
                    &lt; 2.8% Hard Bounce SLA
                  </span>
                </div>
                <p className="text-base text-zinc-300 leading-relaxed font-normal">
                  Root company domains are never used for cold sending. We configure dedicated secondary domain fleets across Google Workspace and Microsoft 365, rotated in Instantly and Smartlead with strict SPF, DKIM, and DMARC alignment.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-5 rounded-xl bg-zinc-950 border border-white/10 space-y-2">
                    <span className="text-sm font-bold text-white flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      Strict DNS Alignment
                    </span>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">SPF, 2048-bit DKIM selectors, and strict DMARC quarantine policies configured across every domain.</p>
                  </div>
                  <div className="p-5 rounded-xl bg-zinc-950 border border-white/10 space-y-2">
                    <span className="text-sm font-bold text-white flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      21-Day Warmup
                    </span>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">Programmatic ramp (1 → 5 → 15 → 30/day) with auto-pause if bounce touches 3.0%.</p>
                  </div>
                  <div className="p-5 rounded-xl bg-zinc-950 border border-white/10 space-y-2">
                    <span className="text-sm font-bold text-white flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      Reserve Fleets
                    </span>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">Pre-warmed reserve boxes standing by for instant swapping with zero sending downtime.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'scraping' && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/10 pb-4">
                  <div>
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block font-bold">PILLAR 02</span>
                    <h3 className="text-2xl font-bold text-white mt-1">
                      Lead Sourcing & Zero-Bounce Verification
                    </h3>
                  </div>
                  <a
                    href="https://docs.google.com/spreadsheets/d/1SqyXWaz-lVrfNpFQIKRTjDBoeZagXfY4x1ucOi1ZqKs/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-mono text-zinc-300 hover:text-white transition font-semibold"
                  >
                    View Live 500-Lead Sheet ↗
                  </a>
                </div>
                <p className="text-base text-zinc-300 leading-relaxed font-normal">
                  Bad data burns domains. Every lead list pulled from Apollo, Clay, and custom scrapers is thoroughly cleaned via MillionVerifier for catch-alls and spam traps before entering a sequence.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-5 rounded-xl bg-zinc-950 border border-white/10 space-y-2">
                    <span className="text-sm font-bold text-white flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      Targeted Sourcing
                    </span>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">Granular ICP filtering matching exact titles, verified emails, headcounts, and techs.</p>
                  </div>
                  <div className="p-5 rounded-xl bg-zinc-950 border border-white/10 space-y-2">
                    <span className="text-sm font-bold text-white flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      Scrubbing Traps
                    </span>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">MillionVerifier integration removing catch-alls, disposable inboxes, and spam traps.</p>
                  </div>
                  <div className="p-5 rounded-xl bg-zinc-950 border border-white/10 space-y-2">
                    <span className="text-sm font-bold text-white flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      CRM Suppression
                    </span>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">Automated exclusion lists preventing awkward outreach to current clients or active deals.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'copywriting' && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/10 pb-4">
                  <div>
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block font-bold">PILLAR 03</span>
                    <h3 className="text-2xl font-bold text-white mt-1">
                      Short, Pain-Focused Copy with Soft Asks
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-zinc-400 font-semibold">Zero AI Fluff</span>
                </div>
                <p className="text-base text-zinc-300 leading-relaxed font-normal">
                  Cold emails that read like marketing copy get archived. We write short, plain-text emails that sound like a quick note typed on a phone, asking for permission before sending resources.
                </p>
                <div className="p-5 rounded-xl bg-zinc-950 border border-white/10 font-mono text-sm text-zinc-300 space-y-2.5">
                  <div className="text-xs text-zinc-500 font-bold">Framework Architecture:</div>
                  <div className="text-white font-bold">Subject: quick note for {`{First Name}`}</div>
                  <p className="text-zinc-300 font-light leading-relaxed">
                    "Hi {`{First Name}`}, noticed you rank well for general terms in {`{City}`}, but competitors two blocks down are taking all the high-intent Google Maps inquiries.<br />
                    Put together a 2-min screen recording showing where the traffic is dropping and how to fix it. Okay to send it over here?"
                  </p>
                  <span className="text-xs text-emerald-400 block pt-1 font-bold">
                    ✓ Proven 3.8% reply rate (permission ask vs forced sales pitch)
                  </span>
                </div>
              </div>
            )}

            {activeTab === 'crm' && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/10 pb-4">
                  <div>
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block font-bold">PILLAR 04</span>
                    <h3 className="text-2xl font-bold text-white mt-1">
                      Sub-15 Minute Positive Reply Handshake
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 font-bold">GoHighLevel & HubSpot</span>
                </div>
                <p className="text-base text-zinc-300 leading-relaxed font-normal">
                  Unread positive replies kill deals. When an inbox receives a positive response, automated webhook triggers immediately notify the closer in Slack and create an opportunity card in HubSpot or GoHighLevel.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-5 rounded-xl bg-zinc-950 border border-white/10 space-y-2">
                    <span className="text-sm font-bold text-white flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      Instant Slack Alert
                    </span>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">Lead details and reply snippet posted to sales channel within seconds.</p>
                  </div>
                  <div className="p-5 rounded-xl bg-zinc-950 border border-white/10 space-y-2">
                    <span className="text-sm font-bold text-white flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      Pipeline Sync
                    </span>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">Automatic stage progression: Reply ➔ Discovery Booked ➔ Meeting Held ➔ Won.</p>
                  </div>
                  <div className="p-5 rounded-xl bg-zinc-950 border border-white/10 space-y-2">
                    <span className="text-sm font-bold text-white flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      Weekly Reporting
                    </span>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">Clear Monday summaries on sends, open rates, replies, and booked calls.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 4. ABOUT GENESIS & BACKGROUND */}
        <section id="about" className="surface-card rounded-2xl p-6 sm:p-8 space-y-6 border border-white/10 text-left">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/10 pb-4">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-300">
                ABOUT GENESIS · TECHNICAL PEDIGREE
              </span>
            </div>
            <span className="text-xs font-mono text-zinc-500">
              Data Analytics ➔ Outbound Systems
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-5 rounded-xl bg-zinc-950 border border-white/10 space-y-2">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider block">
                01. EDUCATION & SCHOLARSHIP
              </span>
              <h4 className="text-base font-bold text-white">Bulacan State University</h4>
              <p className="text-sm text-zinc-300 font-light leading-relaxed">
                BS in Information Technology (Business & Data Analytics). Selected as a <strong className="text-white font-medium">Data Associate Scholar</strong> by Project Sparta (Development Academy of the Philippines).
              </p>
            </div>

            <div className="p-5 rounded-xl bg-zinc-950 border border-white/10 space-y-2">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider block">
                02. ENTERPRISE RIGOR
              </span>
              <h4 className="text-base font-bold text-white">IQVIA Enterprise Analytics</h4>
              <p className="text-sm text-zinc-300 font-light leading-relaxed">
                Managed SQL & Impala data pipelines. Nominated twice for <strong className="text-white font-medium">IQVIA Impact Awards (Q4 & Q5)</strong> for workflow optimization and ETL automation.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-zinc-950 border border-white/10 space-y-2">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider block">
                03. OPERATOR & CO-FOUNDER
              </span>
              <h4 className="text-base font-bold text-white">StylSensei Outbound</h4>
              <p className="text-sm text-zinc-300 font-light leading-relaxed">
                Co-founded and scaled cold email operations across <strong className="text-white font-medium">6,000+ mailboxes</strong> and <strong className="text-white font-medium">500k+ monthly dispatches</strong> with a 22.4% positive response rate.
              </p>
            </div>
          </div>
        </section>

        {/* 5. CLOSING CTA (Matches Image 5 with Uncropped Full Seated Photo Beside Texts) */}
        <section className="surface-card rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 sm:gap-8 lg:gap-10 border border-white/10 shadow-2xl">

          {/* Left: Uncropped Full Seated Photo in Black Shirt */}
          <div className="w-48 sm:w-56 md:w-60 lg:w-64 shrink-0 aspect-square rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-zinc-950 ring-1 ring-white/10">
            <img
              src="/genesis-full-seated.jpg"
              alt="Genesis Auza - B2B Outbound Specialist"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Right: Text & Action Buttons Beside Photo */}
          <div className="flex-1 space-y-4 text-center md:text-left">
            <div className="space-y-2">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider block">
                NEXT STEP
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Ready to launch or scale your outbound pipeline?
              </h3>
              <p className="text-sm text-zinc-300 font-light">
                Available for full-time or contract B2B outbound operator roles with US business hours overlap.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3.5 pt-2">
              <a
                href={`mailto:${profileData.email}`}
                className="px-6 py-3.5 rounded-xl bg-white text-zinc-950 font-bold text-sm hover:bg-zinc-200 transition shadow-lg shadow-white/10 flex items-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Email Genesis: {profileData.email}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => setShowResumeModal(true)}
                className="px-5 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 font-mono text-sm transition cursor-pointer"
              >
                View Resume
              </button>
            </div>
          </div>

        </section>

        {/* FOOTER */}
        <footer className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm font-mono text-zinc-400">
          <div>
            <span>GENESIS AUZA · B2B COLD OUTBOUND & GTM EMAIL SYSTEMS</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`mailto:${profileData.email}`} className="hover:text-white transition">
              {profileData.email}
            </a>
            <span>·</span>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              LinkedIn ↗
            </a>
          </div>
        </footer>

      </main>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div
          onClick={() => setActiveLightbox(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-pointer animate-in fade-in duration-150"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="surface-card rounded-2xl max-w-4xl max-h-[90vh] overflow-hidden border border-white/10 shadow-2xl relative flex flex-col"
          >
            <div className="flex items-center justify-between p-4 bg-zinc-950 border-b border-white/10">
              <div>
                <h4 className="text-base font-bold text-white">{activeLightbox.title}</h4>
                <p className="text-xs sm:text-sm text-zinc-300 mt-0.5">{activeLightbox.caption}</p>
              </div>
              <button
                onClick={() => setActiveLightbox(null)}
                className="p-1 rounded text-zinc-400 hover:text-white transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="overflow-auto max-h-[75vh] bg-black flex items-center justify-center p-2">
              <img
                src={activeLightbox.url}
                alt={activeLightbox.title}
                className="max-h-[70vh] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}

      {/* Resume Modal */}
      <ResumeModal
        isOpen={showResumeModal}
        onClose={() => setShowResumeModal(false)}
      />

    </div>
  );
}

export default App;
