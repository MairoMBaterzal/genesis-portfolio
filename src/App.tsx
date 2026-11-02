import React, { useState } from 'react';
import {
  ArrowRight,
  Mail,
  Phone,
  CheckCircle2,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  FileText,
  Copy,
  Check,
  ShieldCheck,
  Zap,
  Layers,
  Sparkles,
  Database,
  Terminal,
  Send,
  Sliders,
  Award,
  Globe
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
      title: "Single Campaign Cluster: 645,355 Dispatches · 7,090 Positive Replies",
      badge: "CAMPAIGN CLUSTER SNAPSHOT",
      caption: "Live Instantly campaign metrics across 451,749 leads: 22.4% positive reply rate (7,090 positive leads) and a 1.0% bounce rate. Sequences prioritized high-converting Step 1 permission asks with automatic reply-stops preserving domain reputation.",
      url: "/proof/instantly-645k-stats.png"
    },
    {
      title: "Live C-Suite Meetings: Healthcare & Services",
      badge: "SLACK CALENDAR DELIVERY",
      caption: "Real-time MEETING_BOOKED alerts delivered directly to client Slack channels for Presidents, CEOs, and Partners (Cedar Landscape, Phosis, Alliance Environmental, YogaMedics).",
      url: "/proof/slack-booked-meetings-feed-1.png"
    },
    {
      title: "Live C-Suite Meetings: Brands & Tech Founders",
      badge: "SLACK CALENDAR DELIVERY",
      caption: "Qualified meetings booked and handed off to closers for Founders & CEOs (Timeless Tartans, Rubbit, Fantastic Fungi).",
      url: "/proof/slack-booked-meetings-feed-2.png"
    },
    {
      title: "Sub-15 Min Lead Triage: Taylor Hospitality",
      badge: "RAPID QUALIFICATION",
      caption: "Direct prospect handoff to client Brand Manager Carrie with verified contact info, phone, website, and scheduled EST discovery meeting.",
      url: "/proof/slack-booked-meeting-taylor.png"
    },
    {
      title: "Outbound Velocity & Deal Handling Strategy",
      badge: "STYL SENSEI METHODOLOGY",
      caption: "Co-Founder breakdown of outbound reply handling: eliminating friction, real-time lead routing, and converting momentum into closed retainers.",
      url: "/proof/linkedin-post-outbound.png"
    }
  ];

  const tools = [
    { name: "Plusvibe.ai", cat: "Mailbox Infrastructure" },
    { name: "Instantly.ai", cat: "Sending & Warmup" },
    { name: "Smartlead", cat: "Outbound Engine" },
    { name: "HubSpot CRM", cat: "Pipeline & Deals" },
    { name: "GoHighLevel", cat: "CRM & Automations" },
    { name: "Apollo.io", cat: "B2B Lead Data" },
    { name: "Clay.com", cat: "Data Enrichment" },
    { name: "MillionVerifier", cat: "Deliverability" },
    { name: "Cloudflare DNS", cat: "SPF / DKIM / DMARC" },
    { name: "OpenAI Whisper", cat: "Voice Transcription" },
    { name: "DeepSeek API", cat: "Reasoning Agent" },
    { name: "n8n Workflow", cat: "Backend Logic" },
    { name: "Python & SQL", cat: "Data Pipelines" },
  ];

  return (
    <div className="min-h-screen bg-[#181f32] text-[#F1F5F9] font-sans selection:bg-[#4F46E5] selection:text-white">

      {/* Background radial glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-indigo-500/12 via-sky-500/6 to-transparent blur-3xl opacity-70" />
      </div>

      {/* Floating Top Navigation (Centered & Symmetrical) */}
      <header className="sticky top-4 z-40 flex justify-center px-4 pointer-events-auto">
        <div className="rounded-full bg-[#212b44]/90 backdrop-blur-xl border border-white/12 px-5 sm:px-7 py-2.5 flex items-center gap-4 sm:gap-7 shadow-2xl shadow-black/40">

          {/* Navigation Links */}
          <nav className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-slate-200">
            <a href="#proof" className="hover:text-white transition">Proof & Wins</a>
            <a href="#stack" className="hover:text-white transition">Stack</a>
            <a href="#pillars" className="hover:text-white transition">The Engine</a>
            <a href="#about" className="hover:text-white transition">About</a>
          </nav>

          {/* Symmetrical Divider */}
          <span className="w-px h-4 bg-white/20" />

          {/* Right Actions */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              onClick={() => setShowResumeModal(true)}
              className="text-xs sm:text-sm font-mono text-slate-300 hover:text-white transition px-2 py-1 cursor-pointer"
            >
              Resume ↗
            </button>
            <a
              href={`mailto:${profileData.email}`}
              className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-semibold tracking-wide transition shadow-md shadow-indigo-950 flex items-center gap-1.5 cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Let's talk</span>
            </a>
          </div>

        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-20 space-y-20">

        {/* HERO SECTION */}
        <section className="space-y-8 text-center sm:text-left">

          {/* Profile Identity Bar (Genesis Auza + Picture + Available Badge) */}
          <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-5 text-center sm:text-left">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden ring-4 ring-indigo-500/30 shadow-2xl shrink-0 bg-[#212b44]">
                <img
                  src={profileData.headshotUrl}
                  alt={profileData.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                    Genesis Auza
                  </h2>
                  <span className="inline-flex items-center gap-2 text-xs font-mono font-medium px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Available for Outbound Roles
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 font-mono">
                  Former Co-Founder @ StylSensei · B2B Cold Outbound & GTM Email Specialist
                </p>
              </div>
            </div>

            <div className="hidden lg:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-slate-300 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>GTM Outbound Infrastructure</span>
            </div>
          </div>

          <div className="space-y-4 max-w-3xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              I build & run cold email engines that book <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-white bg-clip-text text-transparent">qualified B2B pipeline.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              Operating 1,000 to 20,000+ daily sends across dedicated secondary domain fleets with zero domain burn. Plusvibe mailbox provisioning, Instantly & Smartlead deliverability, AI-verified lead scraping, human-first copy, and GoHighLevel/HubSpot CRM triage.
            </p>
          </div>

          {/* Specialized Niche Bar */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#212b44] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400 font-semibold block">
                SPECIALIZED NICHE & VERTICAL FOCUS
              </span>
              <p className="text-sm font-semibold text-white">
                High-Ticket B2B & Agency Cold Outbound Infrastructure
              </p>
              <p className="text-xs text-slate-300 font-light">
                Zero-burn secondary domain fleets via Plusvibe · Instantly & Smartlead warmup rotation · Sub-15 min CRM reply triage for B2B Agencies, SaaS, and High-Ticket Services.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="px-3 py-1 rounded-md bg-indigo-500/15 border border-indigo-500/30 text-[11px] font-mono text-indigo-300 font-semibold">
                Plusvibe / Instantly / Smartlead
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300">
                GoHighLevel / HubSpot
              </span>
            </div>
          </div>

          {/* Quick CTA Actions */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-1">
            <a
              href={`mailto:${profileData.email}`}
              className="px-5 py-2.5 rounded-xl bg-white text-slate-950 font-semibold text-xs tracking-wide hover:bg-slate-200 transition shadow-lg shadow-white/5 flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Let's talk ({profileData.email})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-4 py-2.5 rounded-xl bg-[#273352] border border-white/10 text-slate-200 hover:text-white font-mono text-xs transition flex items-center gap-2 cursor-pointer"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
              <span>{copiedEmail ? 'Copied to Clipboard' : 'Copy Email'}</span>
            </button>

            <button
              onClick={() => setShowResumeModal(true)}
              className="px-4 py-2.5 rounded-xl bg-transparent border border-white/10 text-slate-400 hover:text-white font-mono text-xs transition flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Verified Resume</span>
            </button>
          </div>

          {/* Stat Bento Grid (Mobbin-style metric cards) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-2">

            <div className="glow-card p-5 rounded-2xl text-left">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                MONTHLY SEND SCALE
              </span>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight">
                500,000+
              </div>
              <span className="text-xs text-indigo-300 mt-1 block font-light">
                Emails dispatched monthly
              </span>
            </div>

            <div className="glow-card p-5 rounded-2xl text-left">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                ACTIVE INBOX FLEET
              </span>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight">
                6,000+
              </div>
              <span className="text-xs text-indigo-300 mt-1 block font-light">
                Secondary inboxes warmed
              </span>
            </div>

            <div className="glow-card p-5 rounded-2xl text-left">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                HARD BOUNCE RATE
              </span>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400 tracking-tight">
                &lt; 3.0%
              </div>
              <span className="text-xs text-slate-400 mt-1 block font-light">
                Strict sub-3% deliverability SLA
              </span>
            </div>

            <div className="glow-card p-5 rounded-2xl text-left">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                POSITIVE REPLIES
              </span>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-indigo-300 tracking-tight">
                7,090+
              </div>
              <span className="text-xs text-emerald-400 mt-1 block font-light font-mono">
                22.4% response rate across 451k leads
              </span>
            </div>

          </div>

        </section>

        {/* SECTION 3: VISUAL PROOF & ACTUAL DELIVERABLES */}
        <section id="proof" className="space-y-8">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-indigo-400 block mb-1">
                CAMPAIGN PROOF & PRODUCTION DELIVERABLES
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Real outbound metrics & booked C-suite calls.
              </h2>
            </div>
            <a
              href="https://stylsensei.com/testimonials"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition"
            >
              <span>View Client Testimonials ↗</span>
            </a>
          </div>

          {/* Proof Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {proofAssets.map((asset, idx) => (
              <div
                key={idx}
                onClick={() => setActiveLightbox(asset)}
                className={`glow-card rounded-2xl overflow-hidden cursor-pointer group ${
                  idx === 0 ? 'sm:col-span-2' : ''
                }`}
              >
                <div className={`${idx === 0 ? 'aspect-[21/9]' : 'aspect-[16/10]'} bg-black/50 overflow-hidden relative`}>
                  <img
                    src={asset.url}
                    alt={asset.title}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition duration-300"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-indigo-300 uppercase">
                    {asset.badge}
                  </div>
                </div>
                <div className="p-4 sm:p-5 flex items-center justify-between gap-3">
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-indigo-300 transition">
                      {asset.title}
                    </h4>
                    <p className="text-xs text-slate-400 line-clamp-2 mt-0.5 font-light">
                      {asset.caption}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-slate-500 group-hover:text-white transition shrink-0">
                    Enlarge ↗
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* StylSensei Agency Client Results & Testimonials */}
          <div className="pt-6 space-y-4 border-t border-white/5">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-widest text-indigo-400 block mb-0.5">
                  STYLSENSEI AGENCY TRACK RECORD
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  High-ticket pipeline generated for clients.
                </h3>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono">
                <a
                  href="https://stylsensei.com/testimonials"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 transition"
                >
                  Client Testimonials ↗
                </a>
                <span className="text-slate-700">·</span>
                <a
                  href="https://stylsensei.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition"
                >
                  stylsensei.com ↗
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-[#212b44] border border-white/5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-indigo-400 px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20">
                    HIGH-TICKET B2B
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-400">
                    6 Closed Retainers
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Practice Growth Co</h4>
                  <p className="text-xs text-slate-300 font-light mt-1.5 leading-relaxed">
                    Delivered <strong className="text-white font-medium">40+ qualified discovery calls</strong> with medical practice owners and directors, converting 6 high-ticket clients via multi-mailbox targeted outbound.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#212b44] border border-white/5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-indigo-400 px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20">
                    HEALTHCARE M&A
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-400">
                    $150k+ Added Pipeline
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Healthcare Advisory</h4>
                  <p className="text-xs text-slate-300 font-light mt-1.5 leading-relaxed">
                    Sourced <strong className="text-white font-medium">12 off-market healthcare acquisition deals per month</strong> directly from clinic founders, generating over $150k in active advisory deal pipeline.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#212b44] border border-white/5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-indigo-400 px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20">
                    C-SUITE APPOINTMENTS
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-400">
                    22.4% Positive Rate
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Brands & Services</h4>
                  <p className="text-xs text-slate-300 font-light mt-1.5 leading-relaxed">
                    Booked calendar calls directly with CEOs, Presidents, and Partners across <strong className="text-white font-medium">Taylor Hospitality, Cedar Landscape, Fantastic Fungi, YogaMedics, Rubbit</strong>, and Timeless Tartans.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* SECTION 4: OPERATOR STACK */}
        <section id="stack" className="space-y-6">

          <div className="flex items-baseline justify-between">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-indigo-400">
              OPERATING STACK
            </span>
            <span className="text-xs font-mono text-slate-400">
              Daily Production Tooling
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {tools.map((t, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl bg-[#212b44] border border-white/5 hover:border-indigo-500/30 transition flex items-center justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-white block">
                    {t.name}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    {t.cat}
                  </span>
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              </div>
            ))}
          </div>

        </section>


        {/* SECTION 2: THE 4 OUTBOUND PILLARS (Interactive Bento Tabs) */}
        <section id="pillars" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-indigo-400 block mb-1">
                THE OUTBOUND MACHINE
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                What I run for founders & GTM teams.
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-light max-w-md">
              From DNS secondary domain fleets to AI-powered lead extraction and rapid CRM meeting triage.
            </p>
          </div>

          {/* Pill Selector */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
            {[
              { id: 'infrastructure', label: '01. Sending Fleets & DNS', icon: ShieldCheck },
              { id: 'scraping', label: '02. AI Scraping & Data', icon: Terminal },
              { id: 'copywriting', label: '03. Human Copywriting', icon: Send },
              { id: 'crm', label: '04. CRM & Reply Triage', icon: Layers },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition cursor-pointer ${isActive
                      ? 'bg-indigo-600 text-white font-semibold shadow-md shadow-indigo-950'
                      : 'bg-[#212b44] text-slate-300 hover:text-white border border-white/5 hover:border-white/10'
                    }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Card */}
          <div className="glow-card rounded-2xl p-6 sm:p-8 space-y-6">

            {activeTab === 'infrastructure' && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-4">
                  <div>
                    <span className="text-[11px] font-mono text-indigo-400 uppercase tracking-wider block">
                      DELIVERABILITY & DOMAIN FLEETS
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                      Dedicated Secondary Domains & Inboxing Hygiene
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md">
                    &lt; 2.8% Hard Bounce SLA
                  </span>
                </div>

                <p className="text-sm text-slate-300 font-light leading-relaxed max-w-3xl">
                  Most cold outbound fails because teams send from their root company domain, get flagged, and kill their business email. At StylSensei, we use Plusvibe to provision isolated secondary domain fleets across Google Workspace and Microsoft 365, rotating across Instantly and Smartlead with strict SPF, DKIM, and DMARC cryptographic authentication.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-black/30 border border-white/5 space-y-1.5">
                    <span className="text-xs font-bold text-white flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                      Strict DNS Alignment
                    </span>
                    <p className="text-xs text-slate-400 font-light leading-relaxed">
                      SPF (v=spf1), 2048-bit DKIM selectors, and strict DMARC quarantine policies configured across every domain.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-black/30 border border-white/5 space-y-1.5">
                    <span className="text-xs font-bold text-white flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                      21-Day Warmup Curves
                    </span>
                    <p className="text-xs text-slate-400 font-light leading-relaxed">
                      Programmatic send escalation (1 → 5 → 15 → 30 emails/day per box) with auto-throttle if bounce touches 3.5%.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-black/30 border border-white/5 space-y-1.5">
                    <span className="text-xs font-bold text-white flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                      Auto-Quarantine Sentinels
                    </span>
                    <p className="text-xs text-slate-400 font-light leading-relaxed">
                      Automated monitoring pausing degraded mailboxes and swapping in pre-warmed reserve boxes with zero downtime.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'scraping' && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-white/10 pb-4">
                  <div>
                    <span className="text-[11px] font-mono text-indigo-400 uppercase tracking-wider block">
                      DATA SCRAPING & VERIFICATION
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                      AI Lead Scraping & Zero-Bounce Verification
                    </h3>
                  </div>
                  <a
                    href="https://docs.google.com/spreadsheets/d/1SqyXWaz-lVrfNpFQIKRTjDBoeZagXfY4x1ucOi1ZqKs/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition"
                  >
                    <span>View Live 500-Lead Sheet ↗</span>
                  </a>
                </div>

                <p className="text-sm text-slate-300 font-light leading-relaxed max-w-3xl">
                  Bad data burns domains. I build custom scrapers and enrichment pipelines that pull decision-makers (Apollo, Clay, Google Maps, LinkedIn) and verify every single record through MillionVerifier before an email is queued.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-black/30 border border-white/5 space-y-1.5">
                    <span className="text-xs font-bold text-white flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                      Telegram AI Lead Bot
                    </span>
                    <p className="text-xs text-slate-400 font-light leading-relaxed">
                      Accepts voice notes or text prompts on Telegram, transcribes via Whisper, and triggers DeepSeek tools to scrape 500+ leads.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-black/30 border border-white/5 space-y-1.5">
                    <span className="text-xs font-bold text-white flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                      Exclusion & Suppression
                    </span>
                    <p className="text-xs text-slate-400 font-light leading-relaxed">
                      Automatic suppression against existing CRM deals, past clients, and competitors to avoid embarrassing outreach.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-black/30 border border-white/5 space-y-1.5">
                    <span className="text-xs font-bold text-white flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                      100% Verified Delivery
                    </span>
                    <p className="text-xs text-slate-400 font-light leading-relaxed">
                      All lists scrubbed for catch-alls, spam traps, and dead MX records to preserve domain sender scores.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'copywriting' && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-4">
                  <div>
                    <span className="text-[11px] font-mono text-indigo-400 uppercase tracking-wider block">
                      HUMAN COPYWRITING & ANGLES
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                      Short, Pain-Focused Copy with Soft Asks
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-indigo-300">
                    Zero AI Spam
                  </span>
                </div>

                <p className="text-sm text-slate-300 font-light leading-relaxed max-w-3xl">
                  Nobody reads 4-paragraph generic pitches. I write cold sequences that read like a real human typed them in 2 minutes on their phone. Focused on one specific pain point, with low-friction permission asks that actually get replies.
                </p>

                <div className="p-4 rounded-xl bg-black/40 border border-white/10 font-mono text-xs text-slate-300 space-y-2">
                  <div className="text-[11px] text-slate-400">Sample Campaign Architecture:</div>
                  <div className="text-white font-semibold">Subject: quick note for {`{First Name}`}</div>
                  <p className="text-slate-300 font-light leading-relaxed">
                    "Hi {`{First Name}`}, noticed you rank well for general services in {`{City}`}, but competitors two blocks down are picking up all the high-ticket search volume on Google Maps.<br />
                    Recorded a 2-minute video breakdown showing where you're losing local search traffic and how to claim those spots back. Mind if I send the link over here?"
                  </p>
                  <span className="text-[11px] text-emerald-400 block pt-1">
                    ✓ Proven 3.8% reply rate (low-commitment permission ask vs forced 20-min call)
                  </span>
                </div>
              </div>
            )}

            {activeTab === 'crm' && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-4">
                  <div>
                    <span className="text-[11px] font-mono text-indigo-400 uppercase tracking-wider block">
                      CRM & PIPELINE MANAGEMENT
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                      Sub-15 Minute Positive Reply Handshake
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-emerald-400">
                    GoHighLevel & HubSpot
                  </span>
                </div>

                <p className="text-sm text-slate-300 font-light leading-relaxed max-w-3xl">
                  A positive reply that sits as a bare tag is a lost deal. In GoHighLevel and HubSpot, I build the automated workflows so every positive response creates a deal opportunity, assigns a task to the closer, and alerts the team via Slack with the reply snippet.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-black/30 border border-white/5 space-y-1.5">
                    <span className="text-xs font-bold text-white flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                      Rapid Classification
                    </span>
                    <p className="text-xs text-slate-400 font-light leading-relaxed">
                      Positive replies flagged same day; "not now" scheduled for 60-day follow-ups; unsubscribes suppressed instantly.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-black/30 border border-white/5 space-y-1.5">
                    <span className="text-xs font-bold text-white flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                      Pipeline Visibility
                    </span>
                    <p className="text-xs text-slate-400 font-light leading-relaxed">
                      Clean deal stages: Positive Reply ➔ Discovery Scheduled ➔ Meeting Held ➔ Proposal Sent ➔ Closed Won.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-black/30 border border-white/5 space-y-1.5">
                    <span className="text-xs font-bold text-white flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                      Monday Weekly Reporting
                    </span>
                    <p className="text-xs text-slate-400 font-light leading-relaxed">
                      Metrics per campaign: Sends, Contacts Reached, Replies, Positive Rate, Meetings Booked, and Meetings Held.
                    </p>
                  </div>
                </div>
              </div>
            )}

          </div>

        </section>

                {/* SECTION 4: ABOUT GENESIS & TECHNICAL PEDIGREE */}
        <section id="about" className="glow-card rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-indigo-400">
                ABOUT GENESIS · TECHNICAL RIGOR & BACKGROUND
              </span>
            </div>
            <span className="text-xs font-mono text-slate-400">
              Enterprise Data Analytics ➔ Outbound Engineering
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-black/25 border border-white/5 space-y-2">
              <span className="text-[10px] font-mono text-indigo-400 font-semibold uppercase tracking-wider block">
                01. FOUNDATION & DATA SCHOLARSHIP
              </span>
              <h4 className="text-sm font-bold text-white">Bulacan State University</h4>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                BS in Information Technology (Business & Data Analytics). Selected as a <strong className="text-white font-medium">Data Associate Scholar</strong> by Project Sparta (Development Academy of the Philippines).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-black/25 border border-white/5 space-y-2">
              <span className="text-[10px] font-mono text-indigo-400 font-semibold uppercase tracking-wider block">
                02. ENTERPRISE RIGOR & SCALE
              </span>
              <h4 className="text-sm font-bold text-white">IQVIA Enterprise Analytics</h4>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Administered data pipelines on HUE Impala & MySQL. Earned <strong className="text-white font-medium">two consecutive Impact Award nominations (Q4 & Q5)</strong> for workflow optimization and stakeholder enablement.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-black/25 border border-white/5 space-y-2">
              <span className="text-[10px] font-mono text-indigo-400 font-semibold uppercase tracking-wider block">
                03. OPERATOR & CO-FOUNDER
              </span>
              <h4 className="text-sm font-bold text-white">StylSensei Outbound Systems</h4>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Built and managed cold email fleets across <strong className="text-white font-medium">6,000+ mailboxes</strong> and <strong className="text-white font-medium">500k+ monthly dispatches</strong>, delivering qualified C-suite pipeline with 22.4% positive replies.
              </p>
            </div>
          </div>
        </section>

{/* SECTION 6: CLOSING CTA */}
        <section className="glow-card rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 sm:gap-8 lg:gap-10">

          {/* Left: Uncropped Full Seated Photo */}
          <div className="w-44 sm:w-52 md:w-56 lg:w-64 shrink-0 aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#181f32]/80 ring-1 ring-white/5">
            <img
              src="/genesis-full-seated.jpg"
              alt="Genesis Auza - B2B Outbound Specialist"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Right: Text & Action Buttons Beside Photo */}
          <div className="flex-1 space-y-4 text-center md:text-left">
            <div className="space-y-2">
              <span className="text-xs font-mono text-indigo-400 font-semibold uppercase tracking-wider block">
                NEXT STEP
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Ready to launch or scale your outbound pipeline?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light">
                Available for full-time or contract B2B outbound operator roles with US business hours overlap.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-1">
              <a
                href={`mailto:${profileData.email}`}
                className="px-6 py-3 rounded-xl bg-white text-slate-950 font-bold text-xs hover:bg-slate-200 transition shadow-lg shadow-white/5 flex items-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Email Genesis</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => setShowResumeModal(true)}
                className="px-5 py-3 rounded-xl bg-[#212b44] border border-white/10 text-slate-200 hover:text-white font-mono text-xs transition cursor-pointer"
              >
                View Resume
              </button>
            </div>
          </div>

        </section>

        {/* FOOTER */}
        <footer className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            <span>GENESIS AUZA · B2B COLD OUTBOUND & GTM EMAIL SYSTEMS</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`mailto:${profileData.email}`} className="hover:text-white transition">
              {profileData.email}
            </a>
            <span>·</span>
            <span>{profileData.phone}</span>
            <span>·</span>
            <a href="https://linkedin.com/in/genesis-auza-a07873361/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              LinkedIn ↗
            </a>
          </div>
        </footer>

      </main>

      {/* Verified Resume Modal */}
      <ResumeModal
        isOpen={showResumeModal}
        onClose={() => setShowResumeModal(false)}
      />

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div
          onClick={() => setActiveLightbox(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-150 cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full rounded-2xl bg-[#212b44] border border-white/15 p-5 shadow-2xl space-y-3 cursor-default"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div>
                <h4 className="text-sm font-bold text-white">{activeLightbox.title}</h4>
                <p className="text-xs text-slate-400 font-light">{activeLightbox.caption}</p>
              </div>
              <button
                onClick={() => setActiveLightbox(null)}
                className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-white text-xs font-mono transition cursor-pointer"
              >
                Close ✕
              </button>
            </div>
            <div className="rounded-xl overflow-hidden bg-black/50 flex items-center justify-center max-h-[70vh]">
              <img
                src={activeLightbox.url}
                alt={activeLightbox.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
