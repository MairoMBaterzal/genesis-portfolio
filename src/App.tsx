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
  Menu,
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  // Tech stack items for sleek infinite marquee (Exact matches from reference image + outbound stack)
  const techStack = [
    { name: "PLUSVIBE", logo: "/logos/plusvibe.svg" },
    { name: "SENDPILOT", logo: "/logos/sendpilot.svg" },
    { name: "CLAUDE", logo: "/logos/claude.svg" },
    { name: "INSTANTLY", logo: "/logos/instantly.png" },
    { name: "SMARTLEAD", logo: "/logos/smartlead.png" },
    { name: "MILLIONVERIFIER", logo: "/logos/millionverifier-badge.svg" },
    { name: "APOLLO", logo: "/logos/apollo.svg" },
    { name: "APIFY", logo: "/logos/apify.svg" },
    { name: "PROSPEO", logo: "/logos/prospeo.png" },
    { name: "LEAD MAGIC", logo: "/logos/leadmagic.svg" },
    { name: "GHL", logo: "/logos/gohighlevel.png" },
    { name: "MAKE.COM", logo: "/logos/make.svg" },
    { name: "CHATGPT", logo: "/logos/chatgpt.svg" },
    { name: "SALES NAVIGATOR", logo: "/logos/sales-navigator.svg" },
    { name: "CLAY", logo: "/logos/clay.png" },
    { name: "HUBSPOT", logo: "/logos/hubspot.svg" },
    { name: "N8N", logo: "/logos/n8n.svg" },
    { name: "CLOUDFLARE", logo: "/logos/cloudflare.svg" },
    { name: "HEYREACH", logo: "/logos/heyreach.svg" }
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

      {/* FLOATING NAVBAR (DESKTOP PILL + RESPONSIVE MOBILE PILL & DROPDOWN) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <nav className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center">
        {/* DESKTOP NAVBAR PILL (MD AND UP) */}
        <div className="hidden md:flex items-center gap-3 sm:gap-6 px-4 sm:px-7 py-2 sm:py-2.5 rounded-full obsidian-card text-xs sm:text-sm font-medium text-zinc-200 relative overflow-hidden whitespace-nowrap shadow-xl">
          <a href="#stack" className="hover:text-white transition whitespace-nowrap">Stack</a>
          <a href="#work" className="hover:text-white transition whitespace-nowrap">Work & Proofs</a>
          <a href="#about" className="hover:text-white transition whitespace-nowrap">About</a>
          <a href="#workflow" className="hover:text-white transition whitespace-nowrap">Workflow</a>
          <span className="text-zinc-600 select-none">|</span>
          <button
            onClick={() => setShowResumeModal(true)}
            className="hover:text-white transition flex items-center gap-1 cursor-pointer whitespace-nowrap"
          >
            Resume <span className="text-xs">↗</span>
          </button>
          <a
            href={`mailto:${profileData.email}`}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white text-zinc-950 font-bold text-xs sm:text-sm hover:bg-zinc-200 transition shadow-md cursor-pointer ml-1 interactive-button whitespace-nowrap"
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

        {/* MOBILE FLOATING NAVBAR PILL (UNDER MD) */}
        <div className="flex md:hidden items-center justify-between w-[calc(100vw-1.5rem)] max-w-sm px-3.5 py-2 rounded-full obsidian-card text-xs font-medium text-zinc-200 relative overflow-hidden shadow-2xl border border-white/10">
          <a href="#work" className="flex items-center gap-2 font-bold text-white text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="tracking-tight">Genesis Auza</span>
          </a>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setShowResumeModal(true)}
              className="px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-zinc-200 font-semibold text-[11px] transition flex items-center gap-1 cursor-pointer"
            >
              Resume <span>↗</span>
            </button>
            <a
              href={`mailto:${profileData.email}`}
              className="px-2.5 py-1 rounded-full bg-white text-zinc-950 font-bold text-[11px] hover:bg-zinc-200 transition shadow-xs flex items-center gap-1 cursor-pointer"
            >
              <Mail className="w-3 h-3 text-zinc-950" />
              <span>Talk</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition ml-0.5 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Interactive Scroll Progress Indicator */}
          <div
            className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-emerald-400 via-sky-400 to-yellow-400 transition-all duration-100 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* MOBILE DROPDOWN DRAWER */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 w-[calc(100vw-1.5rem)] max-w-sm rounded-2xl obsidian-card p-3 shadow-2xl border border-white/15 animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="flex flex-col space-y-0.5 text-left">
              <a
                href="#stack"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl hover:bg-white/10 text-xs font-bold text-zinc-200 hover:text-white transition flex items-center justify-between"
              >
                <span>Production Tech Stack</span>
                <span className="text-[10px] font-mono text-zinc-500">Tools</span>
              </a>
              <a
                href="#work"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl hover:bg-white/10 text-xs font-bold text-zinc-200 hover:text-white transition flex items-center justify-between"
              >
                <span>Work & Proofs</span>
                <span className="text-[10px] font-mono text-zinc-500">645k+ sends</span>
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl hover:bg-white/10 text-xs font-bold text-zinc-200 hover:text-white transition flex items-center justify-between"
              >
                <span>Experience & Track Record</span>
                <span className="text-[10px] font-mono text-zinc-500">StylSensei</span>
              </a>
              <a
                href="#workflow"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl hover:bg-white/10 text-xs font-bold text-zinc-200 hover:text-white transition flex items-center justify-between"
              >
                <span>Outbound Workflow</span>
                <span className="text-[10px] font-mono text-zinc-500">Pipeline Spec</span>
              </a>
            </div>

            <div className="mt-2 pt-2 border-t border-white/10 flex items-center gap-2">
              <button
                onClick={() => {
                  setShowResumeModal(true);
                  setMobileMenuOpen(false);
                }}
                className="flex-1 py-2 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-bold text-white transition text-center cursor-pointer"
              >
                View Full Resume ↗
              </button>
              <a
                href={`mailto:${profileData.email}`}
                className="flex-1 py-2 px-3 rounded-xl bg-white text-zinc-950 text-xs font-extrabold transition text-center hover:bg-zinc-200 cursor-pointer"
              >
                Email Genesis
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Container - Expanded width for edge-to-edge breathing room */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-28 sm:pt-32 pb-28">

        {/* HERO HEADER ROW */}
        <section className="pb-4 sm:pb-5 border-b border-zinc-900/15">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-5 sm:gap-7">

              {/* Profile Avatar with Enhanced 3D Liquid Glass Floating Aura Behind It */}
              <div className="relative shrink-0 group cursor-pointer">
                <div className="absolute -inset-4 sm:-inset-5 pointer-events-none select-none -z-10 transition-transform duration-500 group-hover:scale-110">
                  {/* Large Primary Luminous Fluid Halo */}
                  <div
                    className="absolute -bottom-2.5 -left-3.5 w-28 h-22 sm:w-34 sm:h-26 rounded-[45%_55%_65%_35%] bg-gradient-to-tr from-sky-400/90 via-indigo-400/85 to-pink-400/90 blur-[6px] transform -rotate-12 animate-pulse"
                    style={{ animationDuration: '4s' }}
                  />
                  {/* Secondary Warm Inner Glow */}
                  <div
                    className="absolute -top-2 -right-2 w-20 h-20 rounded-full bg-gradient-to-bl from-amber-300/70 via-rose-300/60 to-transparent blur-[8px]"
                  />
                  {/* 3D Translucent Liquid Glass Droplets with Specular Highlights */}
                  <div className="absolute -top-3.5 left-1.5 w-5 h-4 sm:w-6 sm:h-4.5 rounded-full bg-gradient-to-br from-white/90 via-[#fccaa7] to-[#f9a875] border border-white/80 shadow-[0_4px_12px_rgba(249,168,117,0.45),inset_0_1px_2px_rgba(255,255,255,0.9)] animate-float-slow" />
                  <div className="absolute -top-4 left-10 sm:left-12 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-gradient-to-br from-white/95 via-[#fde7ae] to-[#facc15] border border-white/80 shadow-[0_4px_10px_rgba(250,204,21,0.4),inset_0_1px_2px_rgba(255,255,255,0.9)] animate-float-reverse" />
                  <div className="absolute -top-2 right-0.5 w-4.5 h-4 sm:w-5 sm:h-4.5 rounded-full bg-gradient-to-br from-white/90 via-[#e8c5e5] to-[#c084fc] border border-white/75 shadow-[0_4px_12px_rgba(192,132,252,0.4),inset_0_1px_2px_rgba(255,255,255,0.9)] animate-float-slow" />
                  <div className="absolute top-8 -right-3.5 w-5.5 h-4.5 rounded-[50%_60%_40%_50%] bg-gradient-to-br from-white/90 via-[#98d4dc] to-[#38bdf8] border border-white/75 shadow-[0_4px_12px_rgba(56,189,248,0.4),inset_0_1px_2px_rgba(255,255,255,0.9)] animate-float-reverse" />
                  <div className="absolute -bottom-1.5 -right-2 w-4.5 h-4.5 rounded-full bg-gradient-to-br from-white/90 via-sky-300 to-blue-500 border border-white/80 shadow-[0_4px_12px_rgba(59,130,246,0.45),inset_0_1px_2px_rgba(255,255,255,0.9)] animate-float-slow" />
                  <div className="absolute top-6 -left-3.5 w-4 h-5 rounded-[60%_40%_50%_50%] bg-gradient-to-br from-white/90 via-[#c4b5fd] to-[#818cf8] border border-white/75 shadow-[0_4px_12px_rgba(129,140,248,0.4),inset_0_1px_2px_rgba(255,255,255,0.9)] animate-float-reverse" />
                </div>

                {/* Headshot Squircle */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-white/95 shadow-[0_14px_30px_-6px_rgba(0,0,0,0.28)] bg-zinc-900 relative z-10 transition-transform duration-300 group-hover:rotate-1">
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
        </section>

        {/* EDITORIAL HEADLINE & SUBHEADLINE (2 CLEAN LINES, CRO-OPTIMIZED, NO REDUNDANT CARDS) */}
        <section className="mt-6 sm:mt-8 space-y-4 max-w-4xl mx-auto text-center">
          {/* Clean 2-Line Headline (Restored gradient on outbound systems) */}
          <h2 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-black text-zinc-950 tracking-tight leading-[1.15] max-w-3xl mx-auto">
            I build and operate modern{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600">
              outbound systems
            </span>{' '}
            for high-growth B2B companies.
          </h2>

          {/* Subheadline (Clean, no buzzwords) */}
          <p className="text-base sm:text-lg md:text-xl text-zinc-700 leading-relaxed font-normal max-w-2xl mx-auto">
            Managing secondary domains, verified account sourcing, inbox deliverability, and automated CRM routing.
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
          </div>
        </section>

        {/* 1. TECH STACKS SECTION (MINIMALIST PILLS - STACK I RUN SPEC) */}
        <section id="stack" className="scroll-mt-24 mt-8 sm:mt-10 pt-4 border-t border-zinc-900/10 text-center">
          {/* Centered Minimal Tracking Header (Matching Reference Image) */}
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-[11px] font-mono font-bold tracking-widest text-sky-700/80 uppercase">
              STACK I RUN
            </span>
          </div>

          {/* 1-Line Infinite Marquee Moving Left (True CSS Alpha Mask - Zero Box Smudges) */}
          <div className="relative w-full overflow-hidden py-2 marquee-mask">
            <div className="animate-marquee flex items-center gap-2.5 sm:gap-3">
              {[...techStack, ...techStack].map((tool, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-zinc-950 text-white shadow-sm hover:scale-105 transition-transform duration-200 shrink-0 cursor-default border border-zinc-800"
                >
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="w-4 h-4 sm:w-4.5 sm:h-4.5 rounded-full object-contain shrink-0"
                    loading="lazy"
                  />
                  <span className="text-[11px] sm:text-xs font-mono font-bold tracking-wider uppercase text-zinc-200 whitespace-nowrap">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. PROOFS & TELEMETRY SECTION (WORK & PROOFS - AWS 3-COLUMN ALIGNMENT WITH IOS GLASS & REFINED SANS FONT) */}
        <section id="work" className="scroll-mt-24 mt-12 sm:mt-16 space-y-10 pt-6 border-t border-zinc-900/10">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-700 block mb-1">
                WORK & PROOFS
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight sm:whitespace-nowrap">
                Past Campaign Results<span className="text-emerald-600">.</span>
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
                {/* Top Visual Screenshot Container - Recessed iOS 27 Liquid Glass Frame */}
                <div className="p-2.5 pb-0">
                  <div className="aspect-[16/10] rounded-[1.1rem] bg-zinc-950 overflow-hidden relative border border-white/70 shadow-xs">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-30 group-hover:opacity-10 transition" />
                  </div>
                </div>

                {/* Bottom Content Area */}
                <div className="p-5 sm:p-6 pt-4 flex flex-col justify-between flex-1 space-y-4">
                  <div className="space-y-3.5">
                    {/* 3.1 & 3.2: Green Case Study Pill & Enhanced Category Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 text-emerald-900 text-[11px] font-bold shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        Case Study
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-white/35 border border-white/70 text-[11px] font-mono font-semibold text-zinc-800 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]">
                        {proj.tag}
                      </span>
                    </div>

                    {/* 3.3: iOS 27 Liquid Glass KPI Callout Capsule */}
                    <div className="px-3.5 py-2 rounded-xl bg-white/38 backdrop-blur-md border border-white/85 shadow-[inset_0_1.5px_1.5px_rgba(255,255,255,0.95),0_2px_8px_rgba(15,23,42,0.04)] flex items-baseline justify-between gap-2 group-hover:bg-white/55 transition">
                      <span className="text-2xl font-black font-sans text-emerald-600 tracking-tight">
                        {proj.statValue}
                      </span>
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-700 truncate">
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

                  {/* 3.4: Single Clean Interactive Bottom CTA Link (Removed duplicate Inspect links) */}
                  <div className="pt-3 border-t border-zinc-900/10 mt-auto flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 text-sm font-bold text-zinc-950 group-hover:text-emerald-600 transition-colors">
                      <span>View campaign proof</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. RESUME TIMELINE (POLYWORK STYLE WITH APPLE IOS GLASS) */}
        <section id="about" className="scroll-mt-24 mt-12 sm:mt-16 space-y-8 pt-6 border-t border-zinc-900/10 text-left">
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

        {/* 5. WORKFLOW ARCHITECTURE (SIMPLE INTEGRATED OUTBOUND ENGINE SPEC) */}
        <section id="workflow" className="scroll-mt-24 mt-14 sm:mt-20 space-y-8 pt-6 border-t border-zinc-900/10 text-left">
          {/* Header */}
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-700 block">
              GTM & OUTBOUND WORKFLOW
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight">
              An integrated system behind pipeline generation<span className="text-emerald-600">.</span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 max-w-2xl font-normal leading-relaxed">
              Connecting secondary domain infrastructure, waterfall enrichment, AI intent triage, and automated CRM routing.
            </p>
          </div>

          {/* Workflow Diagram Card (Obsidian Canvas) */}
          <div className="rounded-3xl obsidian-card p-6 sm:p-10 lg:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
            {/* Subtle radial ambient background glow */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

              {/* Main Vertical Linear Flow (Steps 01 -> 04) */}
              <div className="lg:col-span-8 flex flex-col items-center space-y-0 w-full relative z-10">

                {/* STEP 01: INFRASTRUCTURE HUB */}
                <div className="w-full rounded-2xl bg-white/[0.04] border border-white/10 p-5 sm:p-6 hover:border-emerald-500/40 transition shadow-sm text-left relative group">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400">
                      HUB · STEP 01
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                      Domains · Inboxes · Warmup
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    Inbox Provisioning & Sending Infrastructure
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1 font-normal leading-relaxed">
                    Secondary domain setup with verified DNS (SPF, DKIM, DMARC). Provisioning Google Workspace, Microsoft 365, and Zapmail accounts rotated across Smartlead, Instantly, and PlusVibe warmup pools.
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-3.5 pt-3 border-t border-white/[0.07]">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 border border-white/10 text-[11px] font-mono text-zinc-200">
                      <img src="/logos/google-workspace.svg" alt="Google Workspace" className="w-3.5 h-3.5 object-contain" />
                      <span>Google Workspace</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 border border-white/10 text-[11px] font-mono text-zinc-200">
                      <img src="/logos/microsoft.svg" alt="Microsoft 365" className="w-3.5 h-3.5 object-contain" />
                      <span>Microsoft 365</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 border border-white/10 text-[11px] font-mono text-zinc-200">
                      <img src="/logos/smartlead.png" alt="Smartlead" className="w-3.5 h-3.5 object-contain" />
                      <span>Smartlead</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 border border-white/10 text-[11px] font-mono text-zinc-200">
                      <img src="/logos/instantly.png" alt="Instantly" className="w-3.5 h-3.5 object-contain" />
                      <span>Instantly</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 border border-white/10 text-[11px] font-mono text-zinc-200">
                      <img src="/logos/plusvibe.svg" alt="PlusVibe" className="w-3.5 h-3.5 object-contain" />
                      <span>PlusVibe</span>
                    </span>
                  </div>
                </div>

                {/* Vertical Connector Line 1 */}
                <div className="w-[2px] h-6 sm:h-7 bg-gradient-to-b from-emerald-500/60 to-sky-400/60 relative my-0.5">
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                {/* STEP 02: LEAD EXTRACTION & WATERFALL ENRICHMENT */}
                <div className="w-full rounded-2xl bg-white/[0.04] border border-white/10 p-5 sm:p-6 hover:border-emerald-500/40 transition shadow-sm text-left relative group">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-sky-400">
                      DATA LAYER · STEP 02
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                      Scraping · MX Validation
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    Waterfall Enrichment & Verification
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1 font-normal leading-relaxed">
                    Custom scraping pipelines sourcing verified decision-makers, validating MX records, and holding strict sub-3% bounce SLA.
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-3.5 pt-3 border-t border-white/[0.07]">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 border border-white/10 text-[11px] font-mono text-zinc-200">
                      <img src="/logos/apollo.svg" alt="Apollo" className="w-3.5 h-3.5 object-contain" />
                      <span>Apollo</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 border border-white/10 text-[11px] font-mono text-zinc-200">
                      <img src="/logos/clay.png" alt="Clay" className="w-3.5 h-3.5 object-contain" />
                      <span>Clay</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 border border-white/10 text-[11px] font-mono text-zinc-200">
                      <img src="/logos/millionverifier-badge.svg" alt="MillionVerifier" className="w-3.5 h-3.5 object-contain" />
                      <span>MillionVerifier</span>
                    </span>
                  </div>
                </div>

                {/* Vertical Connector Line 2 */}
                <div className="w-[2px] h-6 sm:h-7 bg-gradient-to-b from-sky-400/60 to-purple-400/60 relative my-0.5">
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                </div>

                {/* STEP 03: PERMISSION SEQUENCES & AI REPLY TRIAGE */}
                <div className="w-full rounded-2xl bg-white/[0.04] border border-white/10 p-5 sm:p-6 hover:border-emerald-500/40 transition shadow-sm text-left relative group">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-purple-400">
                      EXECUTION · STEP 03
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                      Copywriting · Reply Triage
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    Permission Sequences & Intent Classification
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1 font-normal leading-relaxed">
                    Conversational opening hooks driving 22.4% reply rates. Real-time AI classification for positive interest, objections, and follow-ups.
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-3.5 pt-3 border-t border-white/[0.07]">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 border border-white/10 text-[11px] font-mono text-zinc-200">
                      <img src="/logos/claude.svg" alt="Claude" className="w-3.5 h-3.5 object-contain" />
                      <span>Claude</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 border border-white/10 text-[11px] font-mono text-zinc-200">
                      <img src="/logos/chatgpt.svg" alt="ChatGPT" className="w-3.5 h-3.5 object-contain" />
                      <span>ChatGPT</span>
                    </span>
                  </div>
                </div>

                {/* Vertical Connector Line 3 */}
                <div className="w-[2px] h-6 sm:h-7 bg-gradient-to-b from-purple-400/60 to-emerald-400/60 relative my-0.5">
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                {/* STEP 04: REAL-TIME CRM & SLACK TRIAGE */}
                <div className="w-full rounded-2xl bg-white/[0.04] border border-white/10 p-5 sm:p-6 hover:border-emerald-500/40 transition shadow-sm text-left relative group">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400">
                      PIPELINE & DEALS · STEP 04
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                      Webhooks · Calendar Booking
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    Sub-15 Min Lead Routing & Deal Closing
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1 font-normal leading-relaxed">
                    Automated webhook dispatch pushing booked C-suite discovery calls straight into client Slack channels and CRM deal pipelines.
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-3.5 pt-3 border-t border-white/[0.07]">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 border border-white/10 text-[11px] font-mono text-zinc-200">
                      <img src="/logos/n8n.svg" alt="n8n" className="w-3.5 h-3.5 object-contain" />
                      <span>n8n</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 border border-white/10 text-[11px] font-mono text-zinc-200">
                      <img src="/logos/slack.svg" alt="Slack" className="w-3.5 h-3.5 object-contain" />
                      <span>Slack</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 border border-white/10 text-[11px] font-mono text-zinc-200">
                      <img src="/logos/hubspot.svg" alt="HubSpot" className="w-3.5 h-3.5 object-contain" />
                      <span>HubSpot</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 border border-white/10 text-[11px] font-mono text-zinc-200">
                      <img src="/logos/gohighlevel.png" alt="GHL" className="w-3.5 h-3.5 object-contain" />
                      <span>GHL</span>
                    </span>
                  </div>
                </div>

              </div>

              {/* Side Panel: Connected Continuous Optimization Feedback Loop */}
              <div className="lg:col-span-4 flex flex-col justify-between items-center text-left relative py-2">
                {/* Mobile Connector Line (Visible below lg) */}
                <div className="lg:hidden w-[2px] h-6 border-l-2 border-dashed border-emerald-500/50 -mt-6 mb-2" />

                {/* Top Return Loop Connector Curve (Desktop lg+): Curves from Feedback Card back into Step 01 */}
                <div className="hidden lg:flex w-full flex-1 items-end justify-center relative pointer-events-none">
                  <svg className="w-full h-full min-h-[140px] overflow-visible" viewBox="0 0 240 160" fill="none">
                    <path
                      d="M 120 160 L 120 48 Q 120 16 88 16 L -32 16"
                      stroke="rgba(16, 185, 129, 0.22)"
                      strokeWidth="2"
                      vectorEffect="non-scaling-stroke"
                      fill="none"
                    />
                    <path
                      d="M 120 160 L 120 48 Q 120 16 88 16 L -32 16"
                      stroke="#34d399"
                      strokeWidth="2"
                      strokeDasharray="6 6"
                      vectorEffect="non-scaling-stroke"
                      className="animate-dash-flow"
                      fill="none"
                    />
                    {/* Arrowhead pointing left into Step 01 */}
                    <path
                      d="M -25 11 L -33 16 L -25 21"
                      stroke="#34d399"
                      strokeWidth="2"
                      vectorEffect="non-scaling-stroke"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Feedback Loop Card */}
                <div className="p-6 rounded-2xl bg-emerald-950/45 border border-emerald-500/35 space-y-3 relative w-full shadow-[0_0_40px_-10px_rgba(16,185,129,0.25)] z-10">
                  <div className="flex items-center justify-between gap-2">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>FEEDBACK LOOP</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400/70">STEP 04 ↺ 01</span>
                  </div>
                  <h4 className="text-base font-bold text-white tracking-tight">
                    Continuous Deliverability & ICP Calibration
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed">
                    Closed deals and response signals automatically loop back to the infrastructure hub — adjusting sending volume, pruning fatigued copy, and protecting domain health.
                  </p>
                  <div className="pt-2.5 border-t border-emerald-500/20 text-[11px] font-mono text-emerald-400/95 font-medium flex items-center gap-2">
                    <span>⚡ Zero primary root domain burn</span>
                  </div>
                </div>

                {/* Bottom Outbound Loop Connector Curve (Desktop lg+): Curves from Step 04 up into Feedback Card */}
                <div className="hidden lg:flex w-full flex-1 items-start justify-center relative pointer-events-none">
                  <svg className="w-full h-full min-h-[140px] overflow-visible" viewBox="0 0 240 160" fill="none">
                    <path
                      d="M -32 144 L 88 144 Q 120 144 120 112 L 120 0"
                      stroke="rgba(16, 185, 129, 0.22)"
                      strokeWidth="2"
                      vectorEffect="non-scaling-stroke"
                      fill="none"
                    />
                    <path
                      d="M -32 144 L 88 144 Q 120 144 120 112 L 120 0"
                      stroke="#34d399"
                      strokeWidth="2"
                      strokeDasharray="6 6"
                      vectorEffect="non-scaling-stroke"
                      className="animate-dash-flow"
                      fill="none"
                    />
                    <circle cx="-32" cy="144" r="3.5" fill="#34d399" />
                  </svg>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* 5. CLOSING CTA (Seated Photo + High-Contrast Obsidian Container) */}
        <section className="mt-12 sm:mt-16 rounded-3xl p-8 sm:p-12 obsidian-card text-white flex flex-col md:flex-row items-center gap-8 lg:gap-12 text-left shadow-2xl">
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
              Whether you need secondary domain infrastructure, step-1 reply campaigns, or real-time CRM routing, let's talk.
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
