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
  Award,
  Zap,
  ShieldCheck,
  Cpu,
  Layers,
  Database,
  Terminal,
  Workflow,
  Sparkles,
  Copy,
  Check
} from 'lucide-react';
import { profileData } from './data/profileData';
import { competenciesData } from './data/competenciesData';
import { caseStudiesData } from './data/caseStudiesData';
import { workflowsData } from './data/workflowsData';
import { howIWorkPhases, operatingStandards } from './data/howIWorkData';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [activeWorkflowTab, setActiveWorkflowTab] = useState(0);
  const [expandedPayloadNode, setExpandedPayloadNode] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeLightbox, setActiveLightbox] = useState<{ url: string; title: string; caption: string } | null>(null);

  const stackItems = [
    'N8N', 'Python', 'SQL', 'HUE Impala', 'OpenAI API', 'Smartlead',
    'Google Workspace', 'Outlook 365', 'HubSpot CRM', 'Looker', 'PowerBI',
    'Cloudflare DNS', 'Webhooks', 'PostgreSQL', 'Azure Cloud', 'REST & GraphQL',
    'BeautifulSoup', 'Selenium', 'Data Mining', 'SPF / DKIM / DMARC'
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const selectedWorkflow = workflowsData[activeWorkflowTab] || workflowsData[0];

  return (
    <div className="min-h-screen bg-[#090D14] text-[#E2E8F0] selection:bg-[#38BDF8] selection:text-slate-950">
      
      {/* 1. Sleek Sticky Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#090D14]/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo / Name */}
          <a href="#main" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full overflow-hidden ring-1 ring-white/20 group-hover:ring-sky-400 transition">
              <img
                src={profileData.headshotUrl}
                alt={profileData.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <span className="font-semibold text-white tracking-tight group-hover:text-sky-300 transition">
                {profileData.name}
              </span>
              <span className="block text-[11px] text-slate-400 font-mono">
                genesisauza.com
              </span>
            </div>
          </a>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#competencies" className="hover:text-white transition">Competencies</a>
            <a href="#case-studies" className="hover:text-white transition">Case Studies</a>
            <a href="#workflows" className="hover:text-white transition">Workflows</a>
            <a href="#how-i-work" className="hover:text-white transition">How I Work</a>
            <button
              onClick={() => setShowResumeModal(true)}
              className="text-slate-400 hover:text-sky-300 transition cursor-pointer flex items-center gap-1"
            >
              Resume
            </button>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${profileData.email}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-slate-950 font-semibold text-xs tracking-wide hover:bg-sky-300 transition shadow-sm"
            >
              <span>Hire me</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </header>

      {/* 2. Hero Section */}
      <section id="main" className="pt-16 pb-20 sm:pt-24 sm:pb-28 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Headline & Intro */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-500/30 text-sky-300 text-xs font-mono font-medium">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                <span>AI Automation & Enterprise Data Systems</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-normal tracking-tight text-white leading-[1.12]">
                Build better businesses with <span className="italic font-serif text-sky-300">automated systems.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-light">
                I help founders, agencies, and enterprise teams build practical AI automations, high-scale outbound infrastructure, and resilient data pipelines that eliminate manual work.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#case-studies"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-950 font-semibold text-sm hover:bg-sky-300 transition shadow-md"
                >
                  <span>Explore Case Studies</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${profileData.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 border border-white/10 text-white font-medium text-sm hover:bg-slate-800 transition"
                >
                  <Mail className="w-4 h-4 text-sky-400" />
                  <span>Get in touch</span>
                </a>
              </div>

              {/* Verified Metrics Strip */}
              <div className="pt-6 grid grid-cols-3 gap-6 border-t border-white/10 max-w-lg">
                <div>
                  <div className="text-2xl sm:text-3xl font-mono font-bold text-white">500K+</div>
                  <div className="text-xs text-slate-400 mt-1">Monthly Outbound Volume</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-mono font-bold text-white">6,000+</div>
                  <div className="text-xs text-slate-400 mt-1">Mailboxes Orchestrated</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-mono font-bold text-white">40%</div>
                  <div className="text-xs text-slate-400 mt-1">Manual Effort Cut</div>
                </div>
              </div>

            </div>

            {/* Right Column: Genesis Portrait */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-72 sm:w-88 aspect-[4/5] rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl bg-gradient-to-b from-slate-800/40 to-slate-950">
                <img
                  src={profileData.headshotUrl}
                  alt={profileData.name}
                  className="w-full h-full object-cover object-top filter contrast-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090D14] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-5 left-5 right-5 p-3.5 rounded-2xl bg-slate-950/80 border border-white/10 backdrop-blur-md">
                  <span className="text-xs font-semibold text-white block">Genesis L. Auza</span>
                  <span className="text-[11px] text-slate-400 font-mono">Available for Contract & Full-Time Systems Roles</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Stack I Run (Infinite Ticker) */}
      <section className="py-6 border-b border-white/5 bg-slate-950/60 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-3 flex items-center justify-between">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-500">
            Stack I run & deploy
          </span>
          <span className="text-xs font-mono text-slate-500">
            Production Validated
          </span>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee gap-3 py-1">
            {[...stackItems, ...stackItems].map((item, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-full bg-slate-900 border border-white/10 text-xs font-mono text-slate-300 whitespace-nowrap shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4. About Section ("Hi, I'm Genesis") */}
      <section id="about" className="py-20 sm:py-28 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
          
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-sky-400">
              About
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal text-white tracking-tight">
              Hi, I'm Genesis.
            </h2>
          </div>

          <div className="prose prose-invert max-w-none text-base sm:text-lg text-slate-300 font-light leading-relaxed space-y-6">
            <p>
              I didn't start in automation by accident. I studied <strong className="text-white font-medium">Business & Data Analytics</strong> at Bulacan State University and was selected as a <strong className="text-white font-medium">Data Associate Scholar</strong> by Project Sparta (Development Academy of the Philippines), where I built rigorous foundations in operational analysis, SQL programming, and statistical modeling.
            </p>

            <p>
              At <strong className="text-white font-medium">IQVIA</strong>, I worked as a Sr. Database Support Associate managing enterprise-scale databases on HUE Impala and MySQL. I automated complex data scraping and mining workflows using Python and SQL, reducing manual turnaround time by <strong className="text-white font-medium">40%</strong> and training 30+ stakeholders on Looker self-service querying. This earned me two consecutive nominations for the <strong className="text-white font-medium">Impact Award (Q4 & Q5)</strong>.
            </p>

            <p>
              At <strong className="text-white font-medium">Premier Fitness</strong>, I stepped in as an AI Automation Developer to eliminate administrative friction—building unified N8N workflows connecting OpenAI, Google Sheets, and legacy ERP systems, reducing manual effort by <strong className="text-white font-medium">40%</strong> and shrinking lead response times from 4 hours to under 15 seconds.
            </p>

            <p>
              As Co-Founder of <strong className="text-white font-medium">StylSensei</strong>, I engineered an outbound sales engine across <strong className="text-white font-medium">6,000+ warmed secondary mailboxes</strong>, sending 500,000+ emails monthly while maintaining strict SPF, DKIM, and DMARC authentication with sub-5% bounce rates. I also ran the full sales cycle—auditing systems, delivering proposals, and closing high-ticket B2B retainers.
            </p>

            {/* Core Quote Box */}
            <div className="my-8 p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-white/10 space-y-2">
              <p className="text-xl sm:text-2xl font-serif italic text-white leading-snug">
                "Businesses don't scale because people work longer hours. They scale because they build better systems."
              </p>
              <span className="text-xs font-mono text-sky-400 block pt-1">
                — Genesis L. Auza, Systems Mindset
              </span>
            </div>

            <p>
              Today, I bring this hands-on engineering rigor to companies that want to automate their workflows, protect their domain reputations, and build data systems that scale effortlessly without breaking under load.
            </p>
          </div>

        </div>
      </section>

      {/* 5. Competencies Section (The Systems Grid: 01, 02, 03, 04) */}
      <section id="competencies" className="py-20 sm:py-28 border-b border-white/5 bg-[#080C13]">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-sky-400">
              Competencies
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-white tracking-tight">
              What I build that you can rely on.
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl font-light">
              Battle-tested frameworks, infrastructure architecture, and data engineering capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 01 */}
            <div className="p-8 rounded-3xl bg-slate-900/50 border border-white/10 hover:border-sky-500/30 transition flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-sky-400 font-bold tracking-widest">01</span>
                <h3 className="text-xl sm:text-2xl font-normal text-white mt-2 mb-3">
                  AI & Workflow Automation
                </h3>
                <p className="text-sm text-slate-400 font-light leading-relaxed">
                  Autonomous N8N workflows connecting webhooks, LLMs, CRMs, and internal ERP databases with error handling and retry mechanisms.
                </p>
                <ul className="mt-6 space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>Custom JavaScript & Python code nodes for complex transformations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>Event-driven webhook ingest with payload validation & idempotency checks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>OpenAI API structured JSON function calling for lead intent scoring</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Tools: N8N, JS, Python, OpenAI</span>
                <span className="text-emerald-400 font-semibold">40% Effort Cut</span>
              </div>
            </div>

            {/* Card 02 */}
            <div className="p-8 rounded-3xl bg-slate-900/50 border border-white/10 hover:border-sky-500/30 transition flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-sky-400 font-bold tracking-widest">02</span>
                <h3 className="text-xl sm:text-2xl font-normal text-white mt-2 mb-3">
                  High-Scale Outbound Infrastructure
                </h3>
                <p className="text-sm text-slate-400 font-light leading-relaxed">
                  Multi-tenant outbound infrastructure across 6,000+ secondary mailboxes sending 500,000+ monthly emails with strict sub-5% bounce rates.
                </p>
                <ul className="mt-6 space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>Zero-burn secondary domain isolation protecting primary root domains</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>Automated SPF (v=spf1), DKIM (2048-bit), and DMARC (p=quarantine) alignment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>Programmatic 21-day warmup curves & sentiment-based CRM reply booking</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Tools: Smartlead, Instantly, Cloudflare DNS</span>
                <span className="text-emerald-400 font-semibold">&lt; 2.8% Bounce</span>
              </div>
            </div>

            {/* Card 03 */}
            <div className="p-8 rounded-3xl bg-slate-900/50 border border-white/10 hover:border-sky-500/30 transition flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-sky-400 font-bold tracking-widest">03</span>
                <h3 className="text-xl sm:text-2xl font-normal text-white mt-2 mb-3">
                  Enterprise Database & SQL Systems
                </h3>
                <p className="text-sm text-slate-400 font-light leading-relaxed">
                  Enterprise database administration on HUE Impala, MySQL, and Azure. High-throughput query tuning, partitioned table design, and data governance.
                </p>
                <ul className="mt-6 space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>HUE Impala analytical partition pruning for sub-second report execution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>Automated data integrity validation & deduplication routines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>Trained 30+ cross-functional stakeholders on SQL & Looker self-serve BI</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Tools: HUE Impala, MySQL, Azure, Looker</span>
                <span className="text-amber-400 font-semibold">2x Impact Award</span>
              </div>
            </div>

            {/* Card 04 */}
            <div className="p-8 rounded-3xl bg-slate-900/50 border border-white/10 hover:border-sky-500/30 transition flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-sky-400 font-bold tracking-widest">04</span>
                <h3 className="text-xl sm:text-2xl font-normal text-white mt-2 mb-3">
                  Data Scraping, Mining & Reporting
                </h3>
                <p className="text-sm text-slate-400 font-light leading-relaxed">
                  Automated web scraping pipelines with exponential backoff and session persistence, feeding directly into Looker, PowerBI, and executive spreadsheets.
                </p>
                <ul className="mt-6 space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>Python extraction scripts using BeautifulSoup, Selenium, and Requests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>LookML semantic view modeling and self-service explore development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>Automated KPI digests delivered daily to executive stakeholders</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Tools: Python, BeautifulSoup, Looker, PowerBI</span>
                <span className="text-emerald-400 font-semibold">Self-Service BI</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. Case Studies Section ("What I Did") */}
      <section id="case-studies" className="py-20 sm:py-28 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-sky-400">
              Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-white tracking-tight">
              Real systems. Proven outcomes.
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl font-light">
              Detailed breakdown of problems tackled, technical solutions implemented, and verified metrics.
            </p>
          </div>

          <div className="space-y-12">
            {caseStudiesData.map((study, idx) => (
              <div
                key={study.id}
                className="p-8 sm:p-10 rounded-3xl bg-slate-900/40 border border-white/10 hover:border-white/20 transition space-y-8"
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-white/5 pb-6">
                  <div>
                    <span className="text-xs font-mono text-sky-400 font-semibold">
                      Case Study 0{idx + 1} • {study.client}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-normal text-white mt-1">
                      {study.tagline}
                    </h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-slate-400">{study.period}</span>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-800 text-sky-300 border border-white/10">
                      {study.role}
                    </span>
                  </div>
                </div>

                {/* 4 Metrics Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {study.keyMetrics.map((km, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-slate-950/60 border border-white/5">
                      <div className="text-xl sm:text-2xl font-mono font-bold text-white">{km.value}</div>
                      <div className="text-xs font-medium text-slate-300 mt-1">{km.label}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">{km.subtext}</div>
                    </div>
                  ))}
                </div>

                {/* Challenge & Solution */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-sm">
                  
                  <div className="lg:col-span-5 space-y-3">
                    <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                      The Challenge
                    </h4>
                    <p className="text-slate-300 font-light leading-relaxed p-5 rounded-2xl bg-slate-950/40 border border-white/5">
                      {study.challenge}
                    </p>
                  </div>

                  <div className="lg:col-span-7 space-y-3">
                    <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                      Genesis's Solution & Execution
                    </h4>
                    <ul className="space-y-2.5">
                      {study.solution.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-300 font-light leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Architecture Step Boxes */}
                <div className="pt-4 border-t border-white/5 space-y-3">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500">
                    System Architecture
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {study.architectureFlow.map((step) => (
                      <div key={step.stepNumber} className="p-4 rounded-2xl bg-slate-950/70 border border-white/5">
                        <span className="text-[10px] font-mono font-bold text-sky-400 block mb-1">
                          STEP 0{step.stepNumber} • {step.tag}
                        </span>
                        <h5 className="text-xs font-bold text-white mb-1">{step.title}</h5>
                        <p className="text-[11px] text-slate-400 leading-snug">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual Assets & Live Outputs (From Canva Portfolio) */}
                {study.visualAssets && study.visualAssets.length > 0 && (
                  <div className="pt-6 border-t border-white/5 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400 block">
                          Visual Proof & n8n Artifacts
                        </span>
                        <span className="text-xs text-slate-400 font-light">
                          Production n8n canvas blueprints, multi-modal Telegram bot interface, and live scraped output.
                        </span>
                      </div>

                      {study.liveOutputUrl && (
                        <a
                          href={study.liveOutputUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 hover:text-white hover:bg-emerald-900/60 transition text-xs font-mono font-medium shadow-sm"
                        >
                          <span>Open Live 500-Lead Google Sheet</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {study.visualAssets.map((asset, aIdx) => (
                        <div
                          key={aIdx}
                          onClick={() => setActiveLightbox({ url: asset.imageUrl, title: asset.title, caption: asset.caption })}
                          className="group relative rounded-2xl overflow-hidden bg-slate-950 border border-white/10 hover:border-sky-500/40 transition cursor-pointer"
                        >
                          <div className="aspect-[16/9] w-full overflow-hidden bg-slate-900 flex items-center justify-center">
                            <img
                              src={asset.imageUrl}
                              alt={asset.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                            />
                          </div>
                          <div className="p-3.5 bg-slate-950/90 border-t border-white/5 flex items-center justify-between gap-2">
                            <div>
                              <h5 className="text-xs font-semibold text-white group-hover:text-sky-300 transition">
                                {asset.title}
                              </h5>
                              <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5 font-light">
                                {asset.caption}
                              </p>
                            </div>
                            <span className="text-[10px] font-mono text-slate-500 group-hover:text-sky-400 transition shrink-0">
                              Enlarge ↗
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Workflows Section ("Actual Outputs & Visual Blueprints") */}
      <section id="workflows" className="py-20 sm:py-28 border-b border-white/5 bg-[#080C13]">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-sky-400">
              Workflows & Outputs
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-white tracking-tight">
              Actual outputs. Transparent schemas.
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl font-light">
              Click through the pipeline blueprints below to inspect the step-by-step logic, input/output JSON schemas, and custom code nodes.
            </p>
          </div>

          {/* Workflow Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4">
            {workflowsData.map((wf, idx) => (
              <button
                key={wf.id}
                onClick={() => {
                  setActiveWorkflowTab(idx);
                  setExpandedPayloadNode(null);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition cursor-pointer ${
                  activeWorkflowTab === idx
                    ? 'bg-white text-slate-950 font-semibold shadow-sm'
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                0{idx + 1}. {wf.title.split(' Pipeline')[0].split(' Sentinel')[0]}
              </button>
            ))}
          </div>

          {/* Active Workflow Blueprint */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/40 border border-white/10 space-y-8">
            
            <div className="space-y-2">
              <span className="text-xs font-mono text-sky-400 font-semibold">
                {selectedWorkflow.category}
              </span>
              <h3 className="text-2xl font-normal text-white">
                {selectedWorkflow.title}
              </h3>
              <p className="text-sm text-slate-300 font-light">
                {selectedWorkflow.subtitle}
              </p>
              <div className="inline-flex items-center gap-2 pt-1 text-xs font-mono text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Business Result: {selectedWorkflow.businessImpact}</span>
              </div>
            </div>

            {/* Step-by-Step Flow Nodes */}
            <div className="space-y-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500">
                Pipeline Nodes & Handshakes
              </span>

              <div className="grid grid-cols-1 gap-4">
                {selectedWorkflow.nodes.map((node, i) => {
                  const isExpanded = expandedPayloadNode === node.id;
                  return (
                    <div
                      key={node.id}
                      className="p-5 rounded-2xl bg-slate-950/80 border border-white/10 hover:border-sky-500/30 transition space-y-4"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <span className="w-7 h-7 rounded-lg bg-sky-950 border border-sky-800/60 text-sky-300 text-xs font-mono font-bold flex items-center justify-center">
                            0{i + 1}
                          </span>
                          <div>
                            <h4 className="text-sm font-semibold text-white">{node.name}</h4>
                            <span className="text-xs font-mono text-slate-400">{node.config.runtime}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono text-slate-400">
                            Latency: <strong className="text-emerald-400">{node.executionStats.latencyMs}ms</strong>
                          </span>
                          <button
                            onClick={() => setExpandedPayloadNode(isExpanded ? null : node.id)}
                            className="px-3 py-1 rounded-lg bg-slate-900 border border-white/10 text-xs font-mono text-sky-300 hover:text-white hover:bg-slate-800 transition cursor-pointer flex items-center gap-1"
                          >
                            <span>{isExpanded ? 'Hide Payload' : 'View Payload Schema'}</span>
                            {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                          </button>
                        </div>
                      </div>

                      <p className="text-xs text-slate-300 font-light leading-relaxed">
                        {node.summary}
                      </p>

                      {/* Expandable Payload Schema & Code */}
                      {isExpanded && (
                        <div className="pt-4 border-t border-white/10 space-y-4 animate-in fade-in duration-200">
                          {node.customScript && (
                            <div className="space-y-1.5">
                              <span className="text-[11px] font-mono text-amber-300 font-semibold block">
                                Custom Node Script:
                              </span>
                              <pre className="p-3.5 rounded-xl bg-slate-900 border border-white/5 font-mono text-xs text-slate-300 overflow-x-auto max-h-52">
                                <code>{node.customScript}</code>
                              </pre>
                            </div>
                          )}

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <span className="text-[11px] font-mono text-slate-400 block mb-1">
                                Input JSON:
                              </span>
                              <pre className="p-3 rounded-xl bg-slate-900 border border-white/5 font-mono text-xs text-slate-300 overflow-x-auto max-h-48">
                                <code>{JSON.stringify(node.inputPayload, null, 2)}</code>
                              </pre>
                            </div>
                            <div>
                              <span className="text-[11px] font-mono text-emerald-400 block mb-1">
                                Output JSON:
                              </span>
                              <pre className="p-3 rounded-xl bg-slate-900 border border-emerald-900/30 font-mono text-xs text-emerald-300 overflow-x-auto max-h-48">
                                <code>{JSON.stringify(node.outputPayload, null, 2)}</code>
                              </pre>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. How I Work Section ("The Delivery Framework & SLAs") */}
      <section id="how-i-work" className="py-20 sm:py-28 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-sky-400">
              How I Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-white tracking-tight">
              My standard operating workflow.
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl font-light">
              From audit and discovery to modular sandbox build, canary rollout, and stakeholder handover.
            </p>
          </div>

          {/* 4 Phases */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {howIWorkPhases.map((phase) => (
              <div
                key={phase.phaseNumber}
                className="p-8 rounded-3xl bg-slate-900/40 border border-white/10 hover:border-white/20 transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-xs font-mono text-sky-400 font-bold tracking-widest">
                      PHASE 0{phase.phaseNumber}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {phase.duration.split('• ')[1]}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-normal text-white mb-2">
                    {phase.phaseName}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 font-light mb-4">
                    {phase.tagline}
                  </p>

                  <ul className="space-y-2 text-xs text-slate-300 font-light">
                    {phase.objectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5">
                  <span className="text-[11px] font-mono text-slate-500 block mb-1">Verified Deliverables:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {phase.deliverables.map((del, i) => (
                      <span key={i} className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-950 text-slate-300 border border-white/5">
                        {del}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Operating Standards & SLAs */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/30 border border-white/10 space-y-6">
            <h3 className="text-xl font-normal text-white">
              Production SLAs & Standards
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {operatingStandards.map((std, i) => (
                <div key={i} className="p-4 rounded-2xl bg-slate-950/60 border border-white/5">
                  <span className="text-[11px] font-mono text-slate-500 block uppercase">{std.category}</span>
                  <h4 className="text-sm font-semibold text-white mt-1 mb-1">{std.title}</h4>
                  <p className="text-xs text-slate-400 font-light leading-relaxed mb-3">{std.description}</p>
                  <span className="text-xs font-mono font-semibold text-emerald-400">{std.sla}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 9. Next Step & Contact Section */}
      <section id="contact" className="py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-sky-400">
              Next Step
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal text-white tracking-tight">
              Better businesses aren't built by chance.
            </h2>
            <p className="text-xl sm:text-2xl font-serif italic text-sky-300">
              They're built with better systems.
            </p>
          </div>

          <p className="text-base text-slate-300 font-light max-w-xl mx-auto leading-relaxed">
            Hire me to audit your tech stack, build your outbound email infrastructure, or architect autonomous AI pipelines that eliminate manual work.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`mailto:${profileData.email}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-slate-950 font-semibold text-sm hover:bg-sky-300 transition shadow-lg"
            >
              <Mail className="w-4 h-4" />
              <span>Email me ({profileData.email})</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-slate-900 border border-white/10 text-slate-300 font-mono text-xs hover:text-white hover:bg-slate-800 transition cursor-pointer"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
              <span>{copiedEmail ? 'Copied to clipboard' : 'Copy email address'}</span>
            </button>
          </div>

          <div className="pt-8 text-xs font-mono text-slate-500 flex flex-wrap items-center justify-center gap-4">
            <span>Direct Call: {profileData.phone}</span>
            <span>•</span>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              LinkedIn
            </a>
            <span>•</span>
            <button onClick={() => setShowResumeModal(true)} className="hover:text-white transition cursor-pointer">
              Download Full Resume
            </button>
          </div>

        </div>
      </section>

      {/* 10. Minimalist Footer */}
      <footer className="border-t border-white/5 py-8 text-center text-xs text-slate-600 font-mono">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© 2026 Genesis L. Auza</span>
          <span>AI Automation Architect & Enterprise Data Systems</span>
          <a href={`mailto:${profileData.email}`} className="text-slate-500 hover:text-slate-300 transition">
            {profileData.email}
          </a>
        </div>
      </footer>

      {/* Resume Modal */}
      <ResumeModal
        isOpen={showResumeModal}
        onClose={() => setShowResumeModal(false)}
      />

      {/* Screenshot Lightbox Modal */}
      {activeLightbox && (
        <div
          onClick={() => setActiveLightbox(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-150 cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full rounded-2xl bg-slate-900 border border-white/20 p-4 shadow-2xl space-y-3 cursor-default"
          >
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <div>
                <h4 className="text-base font-semibold text-white">{activeLightbox.title}</h4>
                <p className="text-xs text-slate-400 font-light">{activeLightbox.caption}</p>
              </div>
              <button
                onClick={() => setActiveLightbox(null)}
                className="px-3 py-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white text-xs font-mono transition cursor-pointer"
              >
                Close ✕
              </button>
            </div>
            <div className="rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center max-h-[75vh]">
              <img
                src={activeLightbox.url}
                alt={activeLightbox.title}
                className="w-full h-auto max-h-[75vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
