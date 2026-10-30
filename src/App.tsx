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
      title: "n8n Multi-Modal Lead Agent",
      badge: "AI AGENT WORKFLOW",
      caption: "Telegram trigger, voice/text router, Whisper speech-to-text, and DeepSeek tools agent with memory.",
      url: "/case-studies/n8n-agent-architecture.png"
    },
    {
      title: "Apify Apollo Scraper Sub-Workflow",
      badge: "ENRICHMENT WORKER",
      caption: "Modular pipeline parsing Apollo parameters, stripping duplicates, and syncing to Google Sheets.",
      url: "/case-studies/n8n-scraper-subworkflow.png"
    },
    {
      title: "Telegram Bot Live Interaction",
      badge: "ON-DEMAND EXTRACTION",
      caption: "User prompts bot for 500 salon leads in Texas; bot autonomously executes and returns sheet link.",
      url: "/case-studies/telegram-interaction.png"
    },
    {
      title: "Verified 500-Lead Output Dataset",
      badge: "LIVE DELIVERABLE",
      caption: "Enriched columns: Name, Email, Phone, Company, Job Title, Seniority, Website, and LinkedIn URL.",
      url: "/case-studies/scraped-google-sheet.png"
    }
  ];

  const tools = [
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
    <div className="min-h-screen bg-[#090A0F] text-[#F1F5F9] font-sans selection:bg-[#4F46E5] selection:text-white">
      
      {/* Background radial glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-indigo-500/10 via-sky-500/5 to-transparent blur-3xl opacity-60" />
      </div>

      {/* Floating Top Navigation */}
      <header className="sticky top-4 z-40 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="rounded-full bg-[#12151E]/80 backdrop-blur-xl border border-white/10 px-4 sm:px-6 py-2.5 flex items-center justify-between shadow-2xl shadow-black/60">
          
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full overflow-hidden ring-1 ring-white/20 group-hover:ring-indigo-400 transition">
              <img
                src={profileData.headshotUrl}
                alt={profileData.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-bold text-white tracking-tight">
                Genesis Auza
              </span>
              <span className="hidden md:inline-flex items-center gap-1.5 text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for Outbound Roles
              </span>
            </div>
          </a>

          <nav className="hidden sm:flex items-center gap-6 text-xs font-medium text-slate-300">
            <a href="#pillars" className="hover:text-white transition">The Engine</a>
            <a href="#proof" className="hover:text-white transition">Proof & Assets</a>
            <a href="#stack" className="hover:text-white transition">Stack</a>
            <a href="#about" className="hover:text-white transition">About</a>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowResumeModal(true)}
              className="text-xs font-mono text-slate-400 hover:text-white transition px-2 py-1"
            >
              Resume ↗
            </button>
            <a
              href={`mailto:${profileData.email}`}
              className="px-3.5 py-1.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold tracking-wide transition shadow-md shadow-indigo-950 flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Hire Genesis</span>
            </a>
          </div>

        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-20 space-y-24">
        
        {/* HERO SECTION */}
        <section className="space-y-8 text-center sm:text-left">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>B2B Cold Outbound · GTM Email Engines · AI-Verified Data</span>
          </div>

          <div className="space-y-4 max-w-3xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              I build & run cold email engines that book <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-white bg-clip-text text-transparent">qualified B2B pipeline.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              Operating 1,000 to 20,000+ daily sends across dedicated secondary domain fleets with zero domain burn. Instantly & Smartlead deliverability, AI-verified lead scraping, human-first copy, and GoHighLevel/HubSpot CRM triage.
            </p>
          </div>

          {/* Quick CTA Actions */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-2">
            <a
              href={`mailto:${profileData.email}`}
              className="px-5 py-2.5 rounded-xl bg-white text-slate-950 font-semibold text-xs tracking-wide hover:bg-slate-200 transition shadow-lg shadow-white/5 flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Email Genesis ({profileData.email})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-4 py-2.5 rounded-xl bg-[#131622] border border-white/10 text-slate-300 hover:text-white font-mono text-xs transition flex items-center gap-2 cursor-pointer"
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-4">
            
            <div className="glow-card p-5 rounded-2xl">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                MONTHLY SEND SCALE
              </span>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight">
                500,000+
              </div>
              <span className="text-xs text-indigo-300 mt-1 block font-light">
                Emails delivered monthly
              </span>
            </div>

            <div className="glow-card p-5 rounded-2xl">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                MAILBOXES MANAGED
              </span>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight">
                6,000+
              </div>
              <span className="text-xs text-indigo-300 mt-1 block font-light">
                Secondary inboxes warmed
              </span>
            </div>

            <div className="glow-card p-5 rounded-2xl">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                HARD BOUNCE RATE
              </span>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400 tracking-tight">
                &lt; 2.8%
              </div>
              <span className="text-xs text-slate-400 mt-1 block font-light">
                Strict sub-5% SLA target
              </span>
            </div>

            <div className="glow-card p-5 rounded-2xl">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                AI LEAD EXTRACTION
              </span>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight">
                500+ Leads
              </div>
              <span className="text-xs text-indigo-300 mt-1 block font-light">
                On-demand Telegram scraper
              </span>
            </div>

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
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition cursor-pointer ${
                    isActive
                      ? 'bg-indigo-600 text-white font-semibold shadow-md shadow-indigo-950'
                      : 'bg-[#12151E] text-slate-400 hover:text-white border border-white/5 hover:border-white/10'
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
                  Most cold outbound fails because teams send from their root company domain, get flagged, and kill their business email. I build and manage isolated secondary domain fleets across Google Workspace and Microsoft 365 with strict cryptographic authentication.
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
                    "Hi {`{First Name}`}, noticed you rank well for general services in {`{City}`}, but competitors two blocks down are picking up all the high-ticket search volume on Google Maps.<br/>
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

        {/* SECTION 3: VISUAL PROOF & ACTUAL DELIVERABLES */}
        <section id="proof" className="space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-indigo-400 block mb-1">
                ACTUAL ARTIFACTS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Visual proof & live outputs.
              </h2>
            </div>
            <a
              href="https://docs.google.com/spreadsheets/d/1SqyXWaz-lVrfNpFQIKRTjDBoeZagXfY4x1ucOi1ZqKs/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition"
            >
              <span>Inspect Live 500-Lead Google Sheet ↗</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {proofAssets.map((asset, idx) => (
              <div
                key={idx}
                onClick={() => setActiveLightbox(asset)}
                className="glow-card rounded-2xl overflow-hidden cursor-pointer group"
              >
                <div className="aspect-[16/10] bg-black/50 overflow-hidden relative">
                  <img
                    src={asset.url}
                    alt={asset.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-indigo-300 uppercase">
                    {asset.badge}
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between gap-3">
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition">
                      {asset.title}
                    </h4>
                    <p className="text-xs text-slate-400 line-clamp-1 mt-0.5 font-light">
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

        </section>

        {/* SECTION 4: OPERATOR STACK */}
        <section id="stack" className="space-y-6">
          
          <div className="flex items-baseline justify-between">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-indigo-400">
              OPERATING STACK
            </span>
            <span className="text-xs font-mono text-slate-500">
              Daily Production Tooling
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {tools.map((t, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl bg-[#12151E] border border-white/5 hover:border-indigo-500/30 transition flex items-center justify-between"
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

        {/* SECTION 5: ABOUT GENESIS */}
        <section id="about" className="space-y-6 pt-6 border-t border-white/10">
          
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-indigo-400 block">
            ABOUT GENESIS
          </span>

          <div className="max-w-3xl space-y-4 text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            <p>
              I studied <strong className="text-white font-medium">Business & Data Analytics</strong> at Bulacan State University and was selected as a <strong className="text-white font-medium">Data Associate Scholar</strong> by Project Sparta (Development Academy of the Philippines).
            </p>

            <p>
              I spent years working with enterprise databases and analytics pipelines at <strong className="text-white font-medium">IQVIA</strong> on HUE Impala and MySQL—earning two consecutive <strong className="text-white font-medium">Impact Award nominations (Q4 & Q5)</strong> for workflow optimization and stakeholder enablement. 
            </p>

            <p>
              Today, I channel that technical rigor into building and scaling outbound B2B email engines (managing 6,000+ mailboxes and 500k monthly volume at <strong className="text-white font-medium">StylSensei</strong>). I make sure the domain infrastructure, scrapers, and copy work in unison so your sales team opens their calendars to qualified decision-makers.
            </p>
          </div>

        </section>

        {/* SECTION 6: CLOSING CTA */}
        <section className="glow-card rounded-3xl p-8 sm:p-12 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
          
          <div className="space-y-2 max-w-xl">
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

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href={`mailto:${profileData.email}`}
              className="px-6 py-3 rounded-xl bg-white text-slate-950 font-bold text-xs hover:bg-slate-200 transition shadow-lg shadow-white/5 flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Email Genesis</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => setShowResumeModal(true)}
              className="px-5 py-3 rounded-xl bg-transparent border border-white/10 text-slate-300 hover:text-white font-mono text-xs transition cursor-pointer"
            >
              View Resume
            </button>
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
            className="relative max-w-4xl w-full rounded-2xl bg-[#12151E] border border-white/15 p-5 shadow-2xl space-y-3 cursor-default"
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
