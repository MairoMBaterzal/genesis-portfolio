import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Mail,
  Copy,
  Check,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  FileText,
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
  Workflow,
  Briefcase,
  GraduationCap,
  Award,
  Zap,
  Activity,
  Server
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { profileData } from './data/profileData';
import { ResumeModal } from './components/ResumeModal';
import { InteractiveBackground } from './components/InteractiveBackground';

export function App() {
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeLightbox, setActiveLightbox] = useState<{ url: string; title: string; caption: string } | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll progress for the interactive navbar bar
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = (e?: React.MouseEvent) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(profileData.email).catch(() => {});
      }
    } catch (_) {}
    setCopiedEmail(true);

    try {
      if (e) {
        const el = (e.currentTarget || e.target) as HTMLElement;
        if (el && typeof el.getBoundingClientRect === 'function') {
          const rect = el.getBoundingClientRect();
          const x = (rect.left + rect.width / 2) / window.innerWidth;
          const y = (rect.top + rect.height / 2) / window.innerHeight;
          confetti({
            particleCount: 35,
            spread: 60,
            origin: { x, y },
            colors: ['#10b981', '#38bdf8', '#f472b6', '#facc15', '#818cf8'],
            disableForReducedMotion: true
          });
        }
      }
    } catch (_) {}

    setTimeout(() => setCopiedEmail(false), 2500);
  };

  // Tech stack items for infinite marquee (1 line moving to the left)
  const techStack = [
    { name: "Plusvibe.ai", role: "Outbound Tooling", icon: Flame, color: "text-amber-500" },
    { name: "Instantly.ai", role: "Sending & Warmup", icon: Send, color: "text-blue-500" },
    { name: "Smartlead", role: "Inbox Warmup & Sends", icon: Radio, color: "text-indigo-500" },
    { name: "HubSpot CRM", role: "Pipeline & Deals", icon: Layers, color: "text-orange-500" },
    { name: "GoHighLevel", role: "CRM Automations", icon: Workflow, color: "text-emerald-600" },
    { name: "Apollo.io", role: "B2B Lead Data", icon: Search, color: "text-cyan-600" },
    { name: "Clay.com", role: "Enrichment", icon: Database, color: "text-purple-600" },
    { name: "MillionVerifier", role: "Deliverability", icon: ShieldCheck, color: "text-green-600" },
    { name: "Cloudflare DNS", role: "SPF / DKIM / DMARC", icon: Globe, color: "text-amber-600" },
    { name: "n8n Workflow", role: "Logic Automations", icon: Cpu, color: "text-pink-600" },
    { name: "Python & SQL", role: "Data Scraping", icon: Terminal, color: "text-yellow-600" },
    { name: "OpenAI Whisper", role: "Voice Transcribe", icon: Sparkles, color: "text-teal-600" }
  ];

  // AWS AI Agents style 3-column aligned Case Study Cards
  const projects = [
    {
      id: "01",
      tag: "Outbound Systems",
      client: "Single Campaign Cluster",
      title: "645,355 Emails Sent · 7,090 Positive Replies",
      summary: "Live Instantly campaign metrics across 451,749 targeted B2B decision-makers. Step-1 permission sequence architecture driving 7,090 verified positive leads with zero root-domain burn.",
      image: "/proof/instantly-645k-stats.png",
      statValue: "7,090+",
      statLabel: "Positive C-Suite Replies"
    },
    {
      id: "02",
      tag: "Slack Delivery",
      client: "Healthcare & Tech Services",
      title: "Live C-Suite Meeting Feeds Delivered Directly to Client Slack",
      summary: "Automated webhook infrastructure booking confirmed discovery meetings for Founders, Presidents, and Partners across Taylor Hospitality, Cedar Landscape, and Fantastic Fungi.",
      image: "/proof/slack-booked-meetings-feed-1.png",
      statValue: "22.4%",
      statLabel: "Cluster Positive Rate"
    },
    {
      id: "03",
      tag: "Medical B2B",
      client: "Practice Growth Co",
      title: "40+ Qualified Medical Calls · 6 Closed High-Ticket Retainers",
      summary: "Engineered multi-mailbox outbound campaign targeting private practice clinic directors, generating over 40 booked calls and 6 closed long-term agency retainers.",
      image: "/proof/slack-booked-meetings-feed-2.png",
      statValue: "6 Retainers",
      statLabel: "Closed Won Retainers"
    },
    {
      id: "04",
      tag: "M&A Sourcing",
      client: "Healthcare M&A Advisory",
      title: "$150k+ Pipeline · 12 Off-Market Clinic Acquisition Deals Monthly",
      summary: "Sourced off-market healthcare acquisition opportunities directly from practice owners, adding over $150,000 in active advisory pipeline value monthly.",
      image: "/proof/slack-booked-meeting-taylor.png",
      statValue: "$150k+",
      statLabel: "Active M&A Pipeline"
    },
    {
      id: "05",
      tag: "Outbound Playbook",
      client: "StylSensei Methodology",
      title: "Outbound Velocity & Deal Handling Strategy",
      summary: "Co-Founder breakdown of cold outbound reply triage: eliminating friction, real-time lead routing, and turning momentum into signed retainers.",
      image: "/proof/linkedin-post-outbound.png",
      statValue: "< 3.0%",
      statLabel: "Hard Bounce SLA"
    },
    {
      id: "06",
      tag: "Enrichment Engine",
      client: "Apollo & Clay Waterfall",
      title: "Automated Lead Extraction & Deliverability Verification",
      summary: "Custom n8n and Python scraping pipelines verifying 100k+ B2B contacts across MillionVerifier, protecting sender scores and maintaining sub-3% bounce SLA.",
      image: "/case-studies/n8n-agent-architecture.png",
      statValue: "98.7%",
      statLabel: "Verified Deliverability"
    }
  ];

  return (
    <div className="min-h-screen relative text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white">

      {/* 60FPS HARDWARE-ACCELERATED INTERACTIVE CANVAS MESH BACKGROUND */}
      <InteractiveBackground />

      {/* FLOATING NAVBAR PILL (IMAGE 1 SPEC - OBSIDIAN GLASS WITH SCROLL PROGRESS) */}
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center">
        <div className="flex items-center gap-4 sm:gap-6 px-5 sm:px-7 py-2.5 rounded-full obsidian-card text-xs sm:text-sm font-medium text-zinc-200 relative overflow-hidden">
          <a href="#work" className="hover:text-white transition">Work & Proofs</a>
          <a href="#stack" className="hover:text-white transition">Stack</a>
          <a href="#engine" className="hover:text-white transition">The Engine</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <span className="text-zinc-600 select-none">|</span>
          <button
            onClick={() => setShowResumeModal(true)}
            className="hover:text-white transition flex items-center gap-1 cursor-pointer"
          >
            Resume <span className="text-xs">↗</span>
          </button>
          <a
            href={`mailto:${profileData.email}`}
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white text-zinc-950 font-bold text-xs sm:text-sm hover:bg-zinc-200 transition shadow-md cursor-pointer ml-1 interactive-button"
          >
            <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-950" />
            <span>Let's talk</span>
          </a>

          {/* Interactive Scroll Progress Indicator along pill border bottom */}
          <div
            className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-emerald-400 via-sky-400 to-yellow-400 transition-all duration-100 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </nav>

      {/* Main Container - Expanded width for edge-to-edge breathing room */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-28 sm:pt-36 pb-32 space-y-16 sm:space-y-20">

        {/* HERO HEADER ROW */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-5 sm:gap-7">

              {/* Profile Avatar with Biosites Organic Floating Aura Behind It */}
              <div className="relative shrink-0 group cursor-pointer">
                <div className="absolute -inset-4 sm:-inset-5 pointer-events-none select-none -z-10 transition-transform duration-500 group-hover:scale-110">
                  {/* Large Primary Fluid Drop */}
                  <div
                    className="absolute -bottom-2 -left-3 w-28 h-20 sm:w-32 sm:h-24 rounded-[45%_55%_65%_35%] bg-gradient-to-tr from-[#38bdf8] via-[#818cf8] to-[#f472b6] opacity-80 blur-[2px] transform -rotate-12 animate-pulse"
                    style={{ animationDuration: '4s' }}
                  />
                  {/* Floating Pebble Droplets */}
                  <div className="absolute -top-3 left-2 w-5 h-4 sm:w-6 sm:h-5 rounded-full bg-[#fccaa7] opacity-90 shadow-sm" />
                  <div className="absolute -top-4 left-10 sm:left-12 w-4 h-3 sm:w-5 sm:h-4 rounded-full bg-[#fde7ae] opacity-95 shadow-sm" />
                  <div className="absolute -top-2 right-1 sm:right-0 w-5 h-4 rounded-full bg-[#e0bed9] opacity-90 shadow-sm" />
                  <div className="absolute top-8 -right-3 w-6 h-5 rounded-[50%_60%_40%_50%] bg-[#98d4dc] opacity-85 shadow-sm" />
                  <div className="absolute -bottom-1 -right-2 w-5 h-5 rounded-full bg-[#38bdf8] opacity-90 shadow-sm" />
                  <div className="absolute top-6 -left-3 w-4 h-5 rounded-[60%_40%_50%_50%] bg-[#afa4cc] opacity-85 shadow-sm" />
                </div>

                {/* Headshot Squircle */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-white/90 shadow-2xl bg-zinc-900 relative z-10 transition-transform duration-300 group-hover:rotate-1">
                  <img
                    src={profileData.headshotUrl}
                    alt={profileData.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Title & Role Info (B2B line directly BELOW Former Co-Founder) */}
              <div className="space-y-1.5 text-left">
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight">
                    Genesis Auza
                  </h1>
                  {/* Charcoal Gray Verified Rosette Badge Tick */}
                  <span className="inline-flex items-center" title="Verified Outbound Specialist">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-800 shrink-0 drop-shadow-2xs" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.67-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.67-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.33 2.33 4.99-4.99 1.42 1.42-6.41 6.4z" />
                      <path d="M10.54 16.2L6.8 12.46l1.41-1.42 2.33 2.33 4.99-4.99 1.42 1.42-6.41 6.4z" fill="#ffffff" />
                    </svg>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/85 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-medium shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Available for Outbound Roles
                  </span>
                </div>
                <div className="space-y-0.5">
                  <p className="text-sm sm:text-base font-bold text-zinc-800 tracking-tight">
                    Former Co-Founder @ StylSensei
                  </p>
                  <p className="text-xs sm:text-sm font-mono text-zinc-600 font-medium">
                    B2B Cold Outbound & Email Systems
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Clean Horizontal Divider */}
          <div className="w-full border-b border-zinc-900/15 pt-2" />
        </section>

        {/* EDITORIAL HEADLINE & SUBHEADLINE (2 CLEAN LINES, CRO-OPTIMIZED, NO REDUNDANT CARDS) */}
        <section className="space-y-5 max-w-4xl mx-auto text-center py-2 sm:py-4">
          {/* Category Tracker */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full ios-glass text-xs font-mono font-semibold text-zinc-700 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>OUTBOUND SYSTEMS · 2026</span>
          </div>

          {/* Clean 2-Line Headline (Unified font, authoritative, no disqualifying niche) */}
          <h2 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-black text-zinc-950 tracking-tight leading-[1.15] max-w-3xl mx-auto">
            I build and operate modern outbound systems for high-growth B2B companies.
          </h2>

          {/* Clean 2-Line Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-zinc-700 leading-relaxed font-normal max-w-2xl mx-auto">
            End-to-end cold email infrastructure: secondary domain fleets, deliverability preservation, enriched lead sourcing, and automated CRM triage.
          </p>

          {/* Centered Contact Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <a
              href={`mailto:${profileData.email}`}
              className="px-6 py-3.5 rounded-full bg-zinc-950 text-white font-extrabold text-sm sm:text-base hover:bg-zinc-800 transition shadow-xl shadow-zinc-950/20 flex items-center gap-2.5 cursor-pointer interactive-button"
            >
              <Mail className="w-4 h-4 text-white" />
              <span>Email: {profileData.email}</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </a>

            <button
              onClick={(e) => handleCopyEmail(e)}
              className="px-5 py-3.5 rounded-full ios-glass hover:bg-white/50 text-zinc-900 text-sm font-bold transition flex items-center gap-2 cursor-pointer shadow-sm interactive-button"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-zinc-600" />}
              <span>{copiedEmail ? 'Copied' : 'Copy Email'}</span>
            </button>

            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3.5 rounded-full ios-glass hover:bg-white/50 text-zinc-900 text-sm font-bold transition flex items-center gap-2 cursor-pointer shadow-sm interactive-button"
            >
              <svg className="w-4 h-4 fill-[#0a66c2]" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.62 1.62 0 1 0 0-3.24 1.62 1.62 0 0 0 0 3.24M5.07 18.5h2.78v-8.37H5.07v8.37Z" />
              </svg>
              <span>LinkedIn</span>
            </a>

            <button
              onClick={() => setShowResumeModal(true)}
              className="px-5 py-3.5 rounded-full ios-glass hover:bg-white/50 text-zinc-900 text-sm font-bold transition flex items-center gap-2 cursor-pointer shadow-sm interactive-button"
            >
              <FileText className="w-4 h-4 text-emerald-600" />
              <span>View Resume</span>
            </button>
          </div>
        </section>

        {/* 1. TECH STACKS SECTION (ABOVE PROOFS - 1-LINE MARQUEE WITH APPLE IOS GLASS) */}
        <section id="stack" className="space-y-4 pt-4 border-t border-zinc-900/10">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-700 block mb-1">
                PRODUCTION TOOLING
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight">
                Production Tech Stack & Tools
              </h2>
            </div>
            <span className="text-xs font-mono text-zinc-700 font-semibold">
              Production Infrastructure · 500k+ Monthly Volume
            </span>
          </div>

          {/* 1-Line Infinite Marquee Moving Left (iOS Glass Pills) */}
          <div className="relative w-full overflow-hidden py-4">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#faeef2]/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#faeef2]/80 to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee flex items-center gap-4">
              {[...techStack, ...techStack].map((tool, idx) => {
                const Icon = tool.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3.5 px-6 py-4 rounded-2xl ios-glass text-zinc-950 shadow-xs transition shrink-0 cursor-default"
                  >
                    <Icon className="w-6 h-6 text-zinc-900 shrink-0" />
                    <div className="text-left">
                      <div className="text-base font-extrabold tracking-tight text-zinc-950 whitespace-nowrap">
                        {tool.name}
                      </div>
                      <div className="text-xs font-mono text-zinc-600 font-semibold whitespace-nowrap">
                        {tool.role}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 2. PROOFS & TELEMETRY SECTION (WORK & PROOFS - AWS 3-COLUMN ALIGNMENT WITH IOS GLASS & REFINED SANS FONT) */}
        <section id="work" className="space-y-10 pt-4 border-t border-zinc-900/10">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-700 block mb-1">
                WORK & PROOFS
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-zinc-950 tracking-tight">
                Selected Work & Campaign Proof<span className="text-emerald-600">.</span>
              </h2>
            </div>
            <p className="text-sm font-mono text-zinc-700 font-medium">
              Verified client campaign data & meeting deliveries
            </p>
          </div>

          {/* Top 4 Performance Numbers (2nd Image Fix: Refined, elegant sans font & iOS Glass) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-6 rounded-2xl ios-glass text-left">
              <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-zinc-500 block mb-1">
                MONTHLY SEND SCALE
              </span>
              <div className="text-3xl sm:text-4xl font-black font-sans text-zinc-950 tracking-tight">
                500K+
              </div>
              <span className="text-xs sm:text-sm text-zinc-600 mt-1.5 block font-medium">
                Sent monthly with 0 primary domain burn
              </span>
            </div>

            <div className="p-6 rounded-2xl ios-glass text-left">
              <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-zinc-500 block mb-1">
                POSITIVE REPLIES
              </span>
              <div className="text-3xl sm:text-4xl font-black font-sans text-emerald-600 tracking-tight">
                7,090+
              </div>
              <span className="text-xs sm:text-sm text-zinc-600 mt-1.5 block font-medium">
                Single cluster positive response
              </span>
            </div>

            <div className="p-6 rounded-2xl ios-glass text-left">
              <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-zinc-500 block mb-1">
                RESPONSE RATE
              </span>
              <div className="text-3xl sm:text-4xl font-black font-sans text-zinc-950 tracking-tight">
                22.4%
              </div>
              <span className="text-xs sm:text-sm text-zinc-600 mt-1.5 block font-medium">
                Across 451,749 targeted B2B leads
              </span>
            </div>

            <div className="p-6 rounded-2xl ios-glass text-left">
              <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-zinc-500 block mb-1">
                HARD BOUNCE SLA
              </span>
              <div className="text-3xl sm:text-4xl font-black font-sans text-emerald-600 tracking-tight">
                &lt; 3.0%
              </div>
              <span className="text-xs sm:text-sm text-zinc-600 mt-1.5 block font-medium">
                Strict deliverability preservation
              </span>
            </div>
          </div>

          {/* AWS 3-COLUMN ALIGNED PROOF CARDS (3rd Image Fix: Case study placed above 7,090+, unobstructed preview, no link collision) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                onClick={() => setActiveLightbox({ url: proj.image, title: proj.title, caption: proj.summary })}
                className="aws-glow-card group cursor-pointer flex flex-col overflow-hidden text-left"
              >
                {/* Top Visual Screenshot Container - 100% Unobstructed Preview */}
                <div className="aspect-[16/10] bg-zinc-950 overflow-hidden relative">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover:opacity-15 transition" />

                  {/* Floating Inspect Pill (Top-Right) */}
                  <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-mono text-white opacity-0 group-hover:opacity-100 transition duration-200">
                    Inspect ↗
                  </div>
                </div>

                {/* Bottom Content Area (Case Study placed directly above the metric, unobstructed, no link collision) */}
                <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                  <div className="space-y-3">
                    {/* Case Study Pill & Category Tag Placed Above the Metric */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-800 text-[11px] font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        Case Study
                      </span>
                      <span className="text-xs font-mono font-medium text-zinc-500">{proj.tag}</span>
                    </div>

                    {/* Metric Highlight (Placed directly below Case Study badge) */}
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black font-sans text-emerald-600 tracking-tight">
                        {proj.statValue}
                      </span>
                      <span className="text-xs font-medium text-zinc-600 truncate max-w-[180px]">
                        {proj.statLabel}
                      </span>
                    </div>

                    {/* Headline turns emerald GREEN on hover */}
                    <h3 className="text-lg sm:text-xl font-black text-zinc-950 tracking-tight leading-snug group-hover:text-emerald-600 transition duration-200">
                      {proj.title}
                    </h3>

                    {/* Description: high contrast, crisp font, perfectly readable on hover */}
                    <p className="text-sm text-zinc-700 leading-relaxed font-normal line-clamp-3 group-hover:text-zinc-950 transition duration-200">
                      {proj.summary}
                    </p>
                  </div>

                  {/* Interactive Bottom CTA Link (No collision, cleanly spaced) */}
                  <div className="pt-3 border-t border-zinc-900/10 mt-auto flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 text-sm font-bold text-zinc-950 group-hover:text-emerald-600 transition-colors">
                      <span>View campaign proof</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                    </div>
                    <span className="text-xs font-mono text-zinc-400 font-semibold group-hover:text-zinc-600 transition-colors">
                      Inspect ↗
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. THE ENGINE / ARCHITECTURAL PILLARS (APPLE IOS GLASS) */}
        <section id="engine" className="space-y-8 pt-6 border-t border-zinc-900/10 text-left">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-700 block mb-1">
                SYSTEM ARCHITECTURE
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight">
                The Outbound Engine<span className="text-emerald-600">.</span>
              </h2>
            </div>
            <span className="text-xs font-mono text-zinc-700 font-semibold">
              Zero Primary Domain Burn · Instant Lead Triage
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 sm:p-7 rounded-2xl ios-glass space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-800 shadow-xs">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-zinc-950 tracking-tight">
                1. Secondary Fleet & DNS Isolation
              </h3>
              <p className="text-base text-zinc-700 leading-relaxed">
                Complete isolation of client core root domains. Multi-inbox distribution with strictly calibrated SPF, DKIM, DMARC, and custom tracking domains across rotating IP pools.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl ios-glass space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-800 shadow-xs">
                <Send className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-zinc-950 tracking-tight">
                2. Step-1 Permission Sequences
              </h3>
              <p className="text-base text-zinc-700 leading-relaxed">
                Short, hyper-relevant conversational opening hooks. Eliminating sales fluff and friction to prompt immediate C-suite reply momentum, driving positive response rates to 22.4%.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl ios-glass space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-800 shadow-xs">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-zinc-950 tracking-tight">
                3. Sub-15 Min Lead Triage & Slack Feed
              </h3>
              <p className="text-base text-zinc-700 leading-relaxed">
                Real-time webhook notifications routing qualified positive prospects directly into client Slack channels and CRMs (HubSpot / GoHighLevel) for immediate sales closing.
              </p>
            </div>
          </div>
        </section>

        {/* 4. RESUME TIMELINE (POLYWORK STYLE WITH APPLE IOS GLASS) */}
        <section id="about" className="space-y-8 pt-6 border-t border-zinc-900/10 text-left">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-zinc-900/10">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-700 block mb-1">
                CAREER TIMELINE
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight">
                Experience & Track Record<span className="text-emerald-600">.</span>
              </h2>
            </div>
            <button
              onClick={() => setShowResumeModal(true)}
              className="text-sm text-emerald-800 hover:text-emerald-950 font-bold transition cursor-pointer interactive-button flex items-center gap-1.5"
            >
              <FileText className="w-4 h-4" />
              <span>View Full Resume ↗</span>
            </button>
          </div>

          {/* Polywork-style timeline items with iOS glass */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl ios-glass space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-mono text-emerald-800 font-bold">
                <span>05/2025 – 09/2026 · 1 yr 5 mos</span>
                <span className="text-zinc-500 font-medium">Full-Time</span>
              </div>
              <h3 className="text-xl font-black text-zinc-950">
                Co-Founder & Outbound Lead · StylSensei
              </h3>
              <p className="text-base text-zinc-700 font-normal leading-relaxed">
                Managed scalable cold email operations across 6,000+ warmed secondary mailboxes and 500k+ monthly sends. Owned end-to-end reply triage, objection handling, and prospect qualification, booking high-intent C-suite discovery calls directly into client calendars.
              </p>
            </div>

            <div className="p-6 rounded-2xl ios-glass space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-mono text-zinc-600 font-bold">
                <span>07/2024 – 05/2025 · 11 mos</span>
                <span className="text-zinc-500 font-medium">Full-Time</span>
              </div>
              <h3 className="text-xl font-black text-zinc-950">
                n8n Developer · Premier Fitness
              </h3>
              <p className="text-base text-zinc-700 font-normal leading-relaxed">
                Engineered N8N workflows connecting OpenAI, Google Sheets, and CRM lead capture pipelines. Reduced manual lead handling time by 40% and cut lead response time to &lt;15 seconds.
              </p>
            </div>

            <div className="p-6 rounded-2xl ios-glass space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-mono text-zinc-600 font-bold">
                <span>08/2022 – 07/2024 · 2 yrs</span>
                <span className="text-zinc-500 font-medium">Full-Time</span>
              </div>
              <h3 className="text-xl font-black text-zinc-950">
                Sr. Database Support Associate · IQVIA
              </h3>
              <p className="text-base text-zinc-700 font-normal leading-relaxed">
                Administered healthcare data pipelines on HUE Impala and MySQL. Automated ETL and web scraping routines with Python & SQL, cutting manual data prep by 40%. Twice nominated for <strong className="text-zinc-950">IQVIA Impact Awards (Q4 & Q5)</strong>.
              </p>
            </div>

            <div className="p-6 rounded-2xl ios-glass space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-mono text-zinc-600 font-bold">
                <span>08/2018 – 07/2022 · 4 yrs</span>
                <span className="text-zinc-500 font-medium">Education</span>
              </div>
              <h3 className="text-xl font-black text-zinc-950">
                BS in Information Technology (Business & Data Analytics) · Bulacan State University
              </h3>
              <p className="text-base text-zinc-700 font-normal leading-relaxed">
                Selected as a <strong className="text-zinc-950">Data Associate Scholar</strong> by Project Sparta (Development Academy of the Philippines).
              </p>
            </div>
          </div>
        </section>

        {/* 5. CLOSING CTA (Seated Photo + High-Contrast Obsidian Container) */}
        <section className="rounded-3xl p-8 sm:p-12 obsidian-card text-white flex flex-col md:flex-row items-center gap-8 lg:gap-12 text-left shadow-2xl">
          <div className="w-48 sm:w-56 md:w-60 lg:w-64 shrink-0 aspect-square rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-black">
            <img
              src="/genesis-full-seated.jpg"
              alt="Genesis Auza - B2B Outbound Specialist"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="flex-1 space-y-4">
            <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider block">
              NEXT STEP
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to launch or scale your outbound pipeline?
            </h3>
            <p className="text-base text-zinc-300 font-normal leading-relaxed">
              Whether you need secondary domain fleet deployment, step-1 reply campaigns, or real-time CRM triage routing, let's talk.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href={`mailto:${profileData.email}`}
                className="px-6 py-3.5 rounded-full bg-white text-zinc-950 font-extrabold text-sm hover:bg-zinc-200 transition shadow-xl shadow-white/10 flex items-center gap-2 cursor-pointer interactive-button"
              >
                <Mail className="w-4 h-4 text-zinc-950" />
                <span>Email Genesis: {profileData.email}</span>
                <ArrowRight className="w-4 h-4 text-zinc-950" />
              </a>

              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-mono text-sm transition flex items-center gap-2 cursor-pointer interactive-button"
              >
                <ExternalLink className="w-4 h-4" />
                <span>LinkedIn Profile ↗</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-900/10 py-8 text-center text-xs font-mono text-zinc-600 font-medium">
        Genesis Auza · Outbound Infrastructure & B2B Cold Email Specialist · {profileData.email}
      </footer>

      {/* LIGHTBOX MODAL */}
      {activeLightbox && (
        <div
          onClick={() => setActiveLightbox(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col rounded-2xl bg-zinc-950 border border-white/20 overflow-hidden shadow-2xl"
          >
            <div className="flex items-center justify-between p-4 border-b border-zinc-800 bg-zinc-900/80">
              <div>
                <h4 className="text-base font-bold text-white">{activeLightbox.title}</h4>
                <p className="text-xs font-mono text-zinc-400">{activeLightbox.caption}</p>
              </div>
              <button
                onClick={() => setActiveLightbox(null)}
                className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="overflow-auto p-4 flex items-center justify-center bg-black/60">
              <img
                src={activeLightbox.url}
                alt={activeLightbox.title}
                className="max-h-[75vh] w-auto object-contain rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      )}

      {/* RESUME MODAL */}
      <ResumeModal
        isOpen={showResumeModal}
        onClose={() => setShowResumeModal(false)}
      />

    </div>
  );
}

export default App;
