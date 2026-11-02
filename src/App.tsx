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
  Workflow,
  Briefcase,
  GraduationCap,
  Award
} from 'lucide-react';
import { profileData } from './data/profileData';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeLightbox, setActiveLightbox] = useState<{ url: string; title: string; caption: string } | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  // Polywork-style skill pills
  const skillPills = [
    { label: "Cold Outbound", icon: Send },
    { label: "Secondary Domains", icon: Globe },
    { label: "Plusvibe.ai", icon: Flame },
    { label: "Instantly.ai", icon: Send },
    { label: "Smartlead", icon: Radio },
    { label: "Apollo.io", icon: Search },
    { label: "Clay Enrichment", icon: Database },
    { label: "MillionVerifier", icon: ShieldCheck },
    { label: "HubSpot CRM", icon: Layers },
    { label: "GoHighLevel", icon: Workflow },
    { label: "n8n Automation", icon: Cpu },
    { label: "SQL & Python", icon: Terminal },
  ];

  // OFF+BRAND style Case Studies / Our Work
  const projects = [
    {
      id: "01",
      client: "Single Campaign Cluster",
      title: "645,355 Dispatches · 7,090 Positive Replies",
      tags: ["● Outbound Fleet", "△ 22.4% Positive Rate", "⁂ 1.0% Bounce"],
      summary: "Live Instantly campaign metrics across 451,749 targeted B2B decision-makers. Step-1 permission sequence architecture driving 7,090 verified positive leads with zero root-domain burn.",
      image: "/proof/instantly-645k-stats.png",
      statValue: "7,090+",
      statLabel: "Positive C-Suite Replies"
    },
    {
      id: "02",
      client: "Healthcare & Tech Services",
      title: "Live C-Suite Meeting Feeds Delivered Directly to Client Slack",
      tags: ["● Slack Delivery", "△ Presidents & CEOs", "⁂ Sub-15 Min Handoff"],
      summary: "Automated webhook infrastructure booking confirmed discovery meetings for Founders, Presidents, and Partners across Taylor Hospitality, Cedar Landscape, Fantastic Fungi, YogaMedics, and Rubbit.",
      image: "/proof/slack-booked-meetings-feed-1.png",
      statValue: "22.4%",
      statLabel: "Cluster Positive Rate"
    },
    {
      id: "03",
      client: "Practice Growth Co",
      title: "40+ Qualified Medical Calls · 6 Closed High-Ticket Retainers",
      tags: ["● Medical B2B", "△ 40+ Discovery Calls", "⁂ 6 Retainers Won"],
      summary: "Engineered multi-mailbox outbound campaign targeting private practice clinic directors, generating over 40 booked calls and 6 closed long-term agency retainers.",
      image: "/proof/slack-booked-meetings-feed-2.png",
      statValue: "6 Retainers",
      statLabel: "Closed Won Agency Retainers"
    },
    {
      id: "04",
      client: "Healthcare M&A Advisory",
      title: "$150k+ Pipeline · 12 Off-Market Clinic Acquisition Deals Monthly",
      tags: ["● M&A Sourcing", "△ Off-Market Deals", "⁂ $150k+ Pipeline"],
      summary: "Sourced off-market healthcare acquisition opportunities directly from practice owners, adding over $150,000 in active advisory pipeline value monthly.",
      image: "/proof/slack-booked-meeting-taylor.png",
      statValue: "$150k+",
      statLabel: "Active Advisory Deal Pipeline"
    },
    {
      id: "05",
      client: "StylSensei Methodology",
      title: "Outbound Velocity & Deal Handling Strategy",
      tags: ["● Outbound Playbook", "△ Objection Handling", "⁂ Rapid Qualification"],
      summary: "Co-Founder breakdown of cold outbound reply triage: eliminating friction, real-time lead routing, and turning momentum into signed retainers.",
      image: "/proof/linkedin-post-outbound.png",
      statValue: "< 3.0%",
      statLabel: "Hard Bounce SLA Maintained"
    }
  ];

  // Tech stack items for infinite marquee
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
    <div className="min-h-screen bg-[#060709] text-[#EDEDED] font-sans selection:bg-white selection:text-black relative">

      {/* OFF+BRAND Style Minimal Top Bar */}
      <header className="sticky top-0 z-40 bg-[#060709]/90 backdrop-blur-xl border-b border-white/[0.08] px-6 sm:px-12 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-extrabold tracking-tight text-white text-lg sm:text-xl">
              GENESIS AUZA<span className="text-emerald-400">.</span>
            </span>
            <span className="hidden sm:inline-block text-xs font-mono text-zinc-500 uppercase tracking-widest pl-3 border-l border-zinc-800">
              GTM OUTBOUND SYSTEMS
            </span>
          </div>

          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
              <a href="#work" className="hover:text-white transition">Our Work</a>
              <a href="#stack" className="hover:text-white transition">Stack</a>
              <a href="#experience" className="hover:text-white transition">Experience</a>
            </nav>

            <a
              href={`mailto:${profileData.email}`}
              className="px-5 py-2 rounded-full bg-white text-black text-xs sm:text-sm font-bold hover:bg-zinc-200 transition shadow-sm cursor-pointer"
            >
              Contact Me
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-6 sm:px-12 pt-12 sm:pt-16 pb-32 space-y-24">

        {/* HERO SECTION: POLYWORK × OFF+BRAND PERSONAL IDENTITY */}
        <section className="space-y-8 max-w-4xl text-left">

          {/* Profile Identity Bar (Polywork Style) */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-white/15 shadow-2xl bg-zinc-900 shrink-0">
              <img
                src={profileData.headshotUrl}
                alt={profileData.name}
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                  Genesis Auza
                </h1>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available for Outbound Roles
                </span>
              </div>

              <p className="text-base sm:text-lg text-zinc-300 font-medium">
                Former Co-Founder @ StylSensei · B2B Cold Outbound & GTM Email Systems Specialist
              </p>
              <p className="text-xs sm:text-sm text-zinc-500 font-mono">
                Remote (Philippines · US Eastern & Pacific Business Hours Overlap)
              </p>
            </div>
          </div>

          {/* Polywork Style Skill Badges */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {skillPills.map((pill, idx) => {
              const Icon = pill.icon;
              return (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-white/10 text-xs sm:text-sm font-medium text-zinc-200 hover:border-white/20 transition cursor-default"
                >
                  <Icon className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{pill.label}</span>
                </span>
              );
            })}
          </div>

          {/* Human Bio & Open-To Line (Polywork Style) */}
          <div className="space-y-4 pt-2">
            <p className="text-lg sm:text-2xl text-white font-bold leading-snug">
              I build and run cold email infrastructure that books qualified C-suite pipeline for high-ticket B2B agencies and SaaS companies.
            </p>

            <div className="p-4 rounded-xl bg-zinc-900/50 border border-white/[0.08] text-sm sm:text-base text-zinc-300">
              <span className="font-bold text-white">I'm open to: </span>
              full-time or contract <strong className="text-white">B2B Outbound Specialist</strong> roles, dedicated secondary domain fleet builds, cold email deliverability auditing, and CRM lead triage workflows.
            </div>
          </div>

          {/* Direct Contact CTAs (With Email Kept on Headline) */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <a
              href={`mailto:${profileData.email}`}
              className="px-6 py-3.5 rounded-full bg-white text-black font-extrabold text-sm hover:bg-zinc-200 transition shadow-xl shadow-white/10 flex items-center gap-2.5 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Email: {profileData.email}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-5 py-3.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 font-mono text-sm transition flex items-center gap-2 cursor-pointer"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-zinc-400" />}
              <span>{copiedEmail ? 'Copied genesisauza9@gmail.com' : 'Copy Email'}</span>
            </button>

            <button
              onClick={() => setShowResumeModal(true)}
              className="px-5 py-3.5 rounded-full bg-transparent hover:bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white font-mono text-sm transition flex items-center gap-2 cursor-pointer"
            >
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>View Resume</span>
            </button>
          </div>

        </section>

        {/* 1. TECH STACKS SECTION (ABOVE WORK - OFF+BRAND STYLE MARQUEE) */}
        <section id="stack" className="space-y-4 pt-6 border-t border-white/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 block mb-1">
                PRODUCTION TOOLING
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Operating Engines & Tech Stack
              </h2>
            </div>
            <span className="text-xs font-mono text-zinc-500">
              Running 500k+ Monthly Outbound Volume
            </span>
          </div>

          {/* 1-Line Infinite Marquee Moving Left */}
          <div className="relative w-full overflow-hidden py-4">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#060709] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#060709] to-transparent z-10 pointer-events-none" />

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

        {/* 2. OUR WORK / CASE STUDIES (OFF+BRAND STYLE SHOWCASE) */}
        <section id="work" className="space-y-12 pt-6 border-t border-white/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 block mb-1">
                OUR WORK & PROOFS
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                Selected Work & Campaign Telemetry<span className="text-emerald-400">.</span>
              </h2>
            </div>
            <p className="text-sm font-mono text-zinc-400">
              Real client campaign data & meeting deliveries
            </p>
          </div>

          {/* Top 4 Performance Numbers */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/[0.08] text-left">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1 font-semibold">
                MONTHLY SEND SCALE
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold font-mono text-white tracking-tight">
                500K+
              </div>
              <span className="text-xs sm:text-sm text-zinc-400 mt-2 block">
                Dispatched monthly with 0 domain burn
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/[0.08] text-left">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1 font-semibold">
                POSITIVE REPLIES
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold font-mono text-emerald-400 tracking-tight">
                7,090+
              </div>
              <span className="text-xs sm:text-sm text-zinc-400 mt-2 block font-mono">
                Single cluster positive response
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/[0.08] text-left">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1 font-semibold">
                RESPONSE RATE
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold font-mono text-white tracking-tight">
                22.4%
              </div>
              <span className="text-xs sm:text-sm text-zinc-400 mt-2 block">
                Across 451,749 targeted B2B leads
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/[0.08] text-left">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1 font-semibold">
                HARD BOUNCE SLA
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold font-mono text-emerald-400 tracking-tight">
                &lt; 3.0%
              </div>
              <span className="text-xs sm:text-sm text-zinc-400 mt-2 block">
                Strict deliverability preservation
              </span>
            </div>
          </div>

          {/* OFF+BRAND Style Showcase Project Cards */}
          <div className="space-y-12">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                onClick={() => setActiveLightbox({ url: proj.image, title: proj.title, caption: proj.summary })}
                className="group cursor-pointer rounded-3xl overflow-hidden bg-zinc-900/40 border border-white/[0.08] hover:border-white/20 transition duration-300"
              >
                {/* Visual Showcase (Big cinematic preview) */}
                <div className="aspect-[16/9] sm:aspect-[21/9] bg-black overflow-hidden relative">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition" />
                  
                  {/* Top inspect pill */}
                  <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-xs font-mono text-white">
                    Inspect ↗
                  </div>
                </div>

                {/* OFF+BRAND Metadata Bar */}
                <div className="p-6 sm:p-8 space-y-4 text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/[0.08]">
                    <div className="space-y-1">
                      <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">
                        {proj.client}
                      </span>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight group-hover:text-emerald-400 transition">
                        {proj.title}
                      </h3>
                    </div>

                    <div className="text-left sm:text-right shrink-0">
                      <div className="text-2xl font-bold font-mono text-white">
                        {proj.statValue}
                      </div>
                      <div className="text-xs font-mono text-zinc-400">
                        {proj.statLabel}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
                    {proj.summary}
                  </p>

                  {/* OFF+BRAND style dot/triangle/asterisk tags */}
                  <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-mono text-zinc-400">
                    {proj.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-3 py-1 rounded-full bg-zinc-800/80 border border-zinc-700/60 text-zinc-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* 3. RESUME TIMELINE (POLYWORK STYLE) */}
        <section id="experience" className="space-y-8 pt-6 border-t border-white/[0.08] text-left">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-white/10">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 block mb-1">
                CAREER TIMELINE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Experience & Track Record<span className="text-emerald-400">.</span>
              </h2>
            </div>
            <button
              onClick={() => setShowResumeModal(true)}
              className="text-sm font-mono text-emerald-400 hover:text-emerald-300 transition"
            >
              Open Full Resume Modal ↗
            </button>
          </div>

          {/* Polywork-style timeline items */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/[0.08] space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-mono text-emerald-400 font-semibold">
                <span>08/2024 – Present · 1 yr 4 mos</span>
                <span className="text-zinc-500">Full-Time</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Co-Founder & GTM Outbound Lead · StylSensei
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
                Managed scalable cold email operations across 6,000+ warmed secondary mailboxes and 500k+ monthly dispatches. Owned end-to-end reply triage, objection handling, and prospect qualification, booking high-intent C-suite discovery calls directly into client calendars.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/[0.08] space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-mono text-zinc-400 font-semibold">
                <span>10/2023 – 08/2024 · 10 mos</span>
                <span className="text-zinc-500">Contract</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                AI & Outbound Automation Developer · Premier Fitness
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
                Engineered N8N workflows connecting OpenAI, Google Sheets, and CRM lead capture pipelines. Reduced manual lead handling time by 40% and cut lead response time to &lt;15 seconds.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/[0.08] space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-mono text-zinc-400 font-semibold">
                <span>08/2022 – 10/2023 · 1 yr 2 mos</span>
                <span className="text-zinc-500">Enterprise</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Database & Analytics Associate · IQVIA
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
                Administered healthcare data pipelines on HUE Impala and MySQL. Automated ETL and web scraping routines with Python & SQL, cutting manual data prep by 40%. Twice nominated for <strong className="text-white">IQVIA Impact Awards (Q4 & Q5)</strong>.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/[0.08] space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-mono text-zinc-400 font-semibold">
                <span>08/2018 – 07/2022 · 4 yrs</span>
                <span className="text-zinc-500">Education</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                BS in Information Technology (Business & Data Analytics) · Bulacan State University
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
                Selected as a <strong className="text-white">Data Associate Scholar</strong> by Project Sparta (Development Academy of the Philippines).
              </p>
            </div>
          </div>
        </section>

        {/* 4. CLOSING CTA (Matches Image 5 with Uncropped Full Seated Photo) */}
        <section className="rounded-3xl p-8 sm:p-12 bg-zinc-900/60 border border-white/[0.08] flex flex-col md:flex-row items-center gap-8 lg:gap-12 text-left">
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
            <p className="text-base text-zinc-300 font-normal">
              Available for full-time or contract B2B outbound operator roles with US business hours overlap.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href={`mailto:${profileData.email}`}
                className="px-6 py-3.5 rounded-full bg-white text-black font-extrabold text-sm hover:bg-zinc-200 transition shadow-lg flex items-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Email Genesis: {profileData.email}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => setShowResumeModal(true)}
                className="px-5 py-3.5 rounded-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white font-mono text-sm transition cursor-pointer"
              >
                View Resume
              </button>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm font-mono text-zinc-500">
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md cursor-pointer animate-in fade-in duration-150"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="rounded-2xl max-w-5xl max-h-[92vh] overflow-hidden border border-white/15 bg-zinc-950 shadow-2xl relative flex flex-col"
          >
            <div className="flex items-center justify-between p-4 bg-zinc-900 border-b border-white/10">
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
            <div className="overflow-auto max-h-[78vh] bg-black flex items-center justify-center p-2">
              <img
                src={activeLightbox.url}
                alt={activeLightbox.title}
                className="max-h-[74vh] object-contain rounded-lg"
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
