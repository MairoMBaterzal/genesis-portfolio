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
  Globe
} from 'lucide-react';
import { profileData } from './data/profileData';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [expandedBuild, setExpandedBuild] = useState<number | null>(null);
  const [activeLightbox, setActiveLightbox] = useState<{ url: string; title: string; caption: string } | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const builds = [
    {
      id: 1,
      title: "Autonomous AI agents & lead scraping",
      badge: "CANVA PORTFOLIO",
      metric: "500 LEADS / RUN",
      summary: "Multi-modal voice & text Telegram bot with OpenAI Whisper transcription, DeepSeek reasoning, and an Apify Apollo scraping sub-workflow. Extracts, deduplicates, and delivers 500+ verified B2B leads directly into Google Sheets on demand.",
      liveLink: "https://docs.google.com/spreadsheets/d/1SqyXWaz-lVrfNpFQIKRTjDBoeZagXfY4x1ucOi1ZqKs/edit?usp=sharing",
      liveLinkLabel: "Live 500-Lead Google Sheet ↗",
      images: [
        {
          title: "n8n Lead Agent Architecture",
          caption: "Telegram trigger, voice/text router, Whisper speech-to-text, and DeepSeek tools agent with memory.",
          url: "/case-studies/n8n-agent-architecture.png"
        },
        {
          title: "Apify Apollo Scraper Sub-Workflow",
          caption: "Modular N8N sub-pipeline parsing Apollo parameters, stripping duplicates, and syncing to Google Sheets.",
          url: "/case-studies/n8n-scraper-subworkflow.png"
        },
        {
          title: "Telegram Bot Mobile Interaction",
          caption: "User prompts bot for 500 salon leads in Texas; bot autonomously executes and returns sheet link.",
          url: "/case-studies/telegram-interaction.png"
        },
        {
          title: "Verified 500-Lead Output Dataset",
          caption: "Enriched columns: Name, Email, Phone, Company, Job Title, Seniority, Website, and LinkedIn URL.",
          url: "/case-studies/scraped-google-sheet.png"
        }
      ]
    },
    {
      id: 2,
      title: "Client acquisition & outbound sending fleets",
      badge: "STYLSENSEI",
      metric: "6,000+ INBOXES",
      summary: "Scaled cold outbound infrastructure across 6,000+ warmed secondary mailboxes sending 500,000+ emails monthly. Maintained strict SPF, DKIM, and DMARC authentication with sub-2.8% hard bounce rates and automated AI reply qualification into client calendars.",
      highlights: [
        "Multi-tenant domain isolation preventing root domain reputation burn",
        "Automated 21-day volume ramp curve (1 → 5 → 15 → 30 emails/day per box)",
        "AI reply triage: categorizing positive intent vs objections and booking discovery calls within 90 seconds"
      ]
    },
    {
      id: 3,
      title: "Enterprise database & ETL pipelines",
      badge: "IQVIA",
      metric: "40% EFFORT SAVED",
      summary: "Administered and maintained enterprise healthcare databases on HUE Impala and MySQL. Automated complex web scraping and SQL mining pipelines, reducing manual query turnaround by 40%. Nominated twice for the Impact Award (Q4 & Q5) for tool familiarization and Looker training.",
      highlights: [
        "HUE Impala query optimization with partition pruning for sub-second report execution",
        "Automated Python data mining scripts with exponential backoff and schema validation",
        "Conducted training sessions for 30+ business stakeholders on Looker and SQL for self-service analytics"
      ]
    },
    {
      id: 4,
      title: "CRM, ERP & operations automation",
      badge: "PREMIER FITNESS",
      metric: "< 15S RESPONSE",
      summary: "Designed and implemented modular N8N automation pipelines connecting web form capture, OpenAI semantic analysis, Google Sheets, and legacy ERP systems. Reduced administrative workload by 40% and dropped lead response time from 4 hours to <15 seconds.",
      highlights: [
        "Custom API connectors handling token refreshes, rate-limiting, and error fallback",
        "OpenAI API function calling extracting member fitness goals and calculating urgency scores",
        "Real-time bi-directional data sync between legacy ERP and executive reporting sheets"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#141412] font-sans">
      
      {/* Container */}
      <div className="max-w-[1120px] mx-auto px-6 py-12 sm:py-20 space-y-20">
        
        {/* Top Header & Identity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Personal Intro & Numbers (Like itstamhn.com) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden ring-1 ring-[#E3E1DA] shrink-0 bg-slate-200">
                <img
                  src={profileData.headshotUrl}
                  alt={profileData.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[#141412]">
                  {profileData.name}
                </h1>
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#2A48D0] block">
                  AI Automation Architect & Enterprise Data Engineer
                </span>
                <span className="text-xs text-[#6B6960] flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Available for Contract & Full-Time</span>
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-[15px] leading-relaxed text-[#55534B]">
              I build autonomous AI workflows, high-scale outbound sending infrastructure, and enterprise data systems that eliminate manual work.
            </p>

            {/* Clean Mini Stats Table (Exactly like itstamhn) */}
            <div className="border-t border-[#E3E1DA] font-mono text-xs">
              <div className="flex justify-between py-2.5 border-b border-[#E3E1DA]">
                <span className="text-[#6B6960]">MONTHLY OUTBOUND</span>
                <span className="font-semibold text-[#141412]">500,000+ emails</span>
              </div>
              <div className="flex justify-between py-2.5 border-b border-[#E3E1DA]">
                <span className="text-[#6B6960]">INBOXES MANAGED</span>
                <span className="font-semibold text-[#141412]">6,000+ warmed</span>
              </div>
              <div className="flex justify-between py-2.5 border-b border-[#E3E1DA]">
                <span className="text-[#6B6960]">MANUAL EFFORT CUT</span>
                <span className="font-semibold text-[#2A48D0]">40% verified</span>
              </div>
              <div className="flex justify-between py-2.5 border-b border-[#E3E1DA]">
                <span className="text-[#6B6960]">HARD BOUNCE SLA</span>
                <span className="font-semibold text-emerald-700">&lt; 2.8% achieved</span>
              </div>
              <div className="flex justify-between py-2.5 border-b border-[#E3E1DA]">
                <span className="text-[#6B6960]">HONORS</span>
                <span className="font-semibold text-[#141412]">2x Impact Award Nominee</span>
              </div>
            </div>

            {/* Direct Contact Links */}
            <div className="pt-2 flex flex-col gap-2 font-mono text-xs text-[#55534B]">
              <div className="flex items-center justify-between">
                <a href={`mailto:${profileData.email}`} className="text-[#141412] font-semibold hover:text-[#2A48D0] transition">
                  {profileData.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="text-[11px] text-[#6B6960] hover:text-[#141412] transition cursor-pointer flex items-center gap-1"
                >
                  {copiedEmail ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="flex items-center justify-between">
                <span>{profileData.phone}</span>
                <span className="text-[#6B6960]">PH / US Overlap</span>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={() => setShowResumeModal(true)}
                  className="text-[#2A48D0] font-semibold hover:underline cursor-pointer flex items-center gap-1"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View Verified Resume ↗</span>
                </button>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6B6960] hover:text-[#141412] transition"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Headline & Value Statement */}
          <div className="lg:col-span-7 space-y-8 pt-2">
            
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#141412] leading-[1.15]">
              Own the systems that eliminate your team's manual work.
            </h2>

            <p className="text-base sm:text-lg text-[#55534B] leading-relaxed font-normal">
              More pipeline, zero wasted hours. I architect autonomous n8n workflows, scalable outbound sending fleets, and enterprise SQL databases that run reliably 24/7 without breaking under load.
            </p>

            {/* Proof Badges Strip */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1.5 rounded-full bg-[#EBE9E1] text-[#141412] font-mono text-xs font-medium">
                ★ 6,000+ MAILBOXES SCALED
              </span>
              <span className="px-3 py-1.5 rounded-full bg-[#EBE9E1] text-[#141412] font-mono text-xs font-medium">
                40% MANUAL TIME SAVED
              </span>
              <span className="px-3 py-1.5 rounded-full bg-[#EBE9E1] text-[#141412] font-mono text-xs font-medium">
                HUE IMPALA AT IQVIA
              </span>
              <span className="px-3 py-1.5 rounded-full bg-[#EBE9E1] text-[#141412] font-mono text-xs font-medium">
                DEEPSEEK & OPENAI AGENTS
              </span>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href={`mailto:${profileData.email}`}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded bg-[#141412] text-[#FAFAF7] font-semibold text-sm hover:bg-[#2A48D0] transition shadow-sm"
              >
                <span>Tell me what you want to automate</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

        {/* WHAT I BUILD (Clean bordered rows exactly like itstamhn.com) */}
        <div className="space-y-6 pt-10 border-t border-[#E3E1DA]">
          
          <div className="flex items-baseline justify-between">
            <span className="font-mono text-xs uppercase tracking-widest text-[#6B6960]">
              What I Build
            </span>
            <span className="font-mono text-xs text-[#6B6960]">
              4 Production Systems
            </span>
          </div>

          <div className="divide-y divide-[#E3E1DA] border-t border-b border-[#E3E1DA]">
            {builds.map((item) => {
              const isExpanded = expandedBuild === item.id;
              return (
                <div key={item.id} className="py-7 clrow space-y-4">
                  
                  {/* Row Header */}
                  <div
                    onClick={() => setExpandedBuild(isExpanded ? null : item.id)}
                    className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 cursor-pointer group"
                  >
                    <h3 className="clttl text-xl sm:text-2xl font-bold tracking-tight text-[#141412] transition">
                      {item.title}
                    </h3>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="font-mono text-[11px] text-[#2A48D0] font-semibold tracking-wider">
                        {item.metric}
                      </span>
                      <span className="clarr font-mono text-sm text-[#6B6960] transition">
                        {isExpanded ? '↑' : '→'}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm sm:text-[15px] leading-relaxed text-[#55534B] max-w-2xl font-normal">
                    {item.summary}
                  </p>

                  {/* Highlights checklist if not expanded */}
                  {item.highlights && !isExpanded && (
                    <ul className="space-y-1 text-xs text-[#6B6960] font-mono">
                      {item.highlights.slice(0, 2).map((h, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span>•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Live link if present */}
                  {item.liveLink && (
                    <div className="pt-1">
                      <a
                        href={item.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#2A48D0] hover:underline"
                      >
                        <span>{item.liveLinkLabel}</span>
                      </a>
                    </div>
                  )}

                  {/* Expandable Visual Proof (Canva Portfolio Screenshots) */}
                  {isExpanded && item.images && (
                    <div className="pt-4 space-y-4 animate-in fade-in duration-150">
                      <span className="text-[11px] font-mono text-[#6B6960] uppercase tracking-wider block">
                        Visual Artifacts from Canva Portfolio (Click to enlarge):
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {item.images.map((img, idx) => (
                          <div
                            key={idx}
                            onClick={() => setActiveLightbox({ url: img.url, title: img.title, caption: img.caption })}
                            className="p-2 rounded-xl bg-white border border-[#E3E1DA] hover:border-[#2A48D0] transition cursor-pointer group/img"
                          >
                            <div className="aspect-[16/9] rounded-lg overflow-hidden bg-slate-900 flex items-center justify-center">
                              <img src={img.url} alt={img.title} className="w-full h-full object-cover group-hover/img:scale-105 transition" />
                            </div>
                            <div className="pt-2 px-1">
                              <span className="text-xs font-semibold text-[#141412] group-hover/img:text-[#2A48D0] transition block">
                                {img.title} ↗
                              </span>
                              <span className="text-[11px] text-[#6B6960] line-clamp-1">
                                {img.caption}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Expandable full highlights for others */}
                  {isExpanded && item.highlights && (
                    <div className="pt-2 space-y-1.5 text-xs text-[#55534B] border-t border-[#E3E1DA]/60">
                      {item.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2A48D0] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>

        {/* ABOUT (Clean, readable, 2 paragraphs like itstamhn.com) */}
        <div className="space-y-6 pt-10 border-t border-[#E3E1DA]">
          
          <span className="font-mono text-xs uppercase tracking-widest text-[#6B6960] block">
            About
          </span>

          <div className="max-w-2xl space-y-5 text-base sm:text-[17px] text-[#37352E] leading-[1.7] font-normal">
            <p>
              I'm Genesis Auza. I studied Business & Data Analytics at Bulacan State University and was selected as a Data Associate Scholar by Project Sparta (Development Academy of the Philippines), building deep foundations in operational analysis, SQL programming, and data engineering.
            </p>

            <p className="text-[#55534B]">
              At <strong>IQVIA</strong>, I maintained large-scale enterprise databases on HUE Impala and MySQL, automating Python and SQL data extraction pipelines that cut manual effort by <strong>40%</strong> and training 30+ stakeholders on Looker self-serve BI—earning two consecutive <strong>Impact Award nominations (Q4 & Q5)</strong>. At <strong>Premier Fitness</strong>, I built autonomous N8N pipelines connecting OpenAI and legacy ERPs. As Co-Founder of <strong>StylSensei</strong>, I engineered cold outbound sending infrastructure across <strong>6,000+ secondary mailboxes</strong> delivering 500,000+ monthly emails with sub-5% bounce rates.
            </p>

            <p className="text-[#55534B]">
              Based in the Philippines, working asynchronously with teams across the US and globally. Your morning standup finds finished systems.
            </p>
          </div>

        </div>

        {/* HOW I WORK (4 Minimalist Steps) */}
        <div className="space-y-6 pt-10 border-t border-[#E3E1DA]">
          
          <span className="font-mono text-xs uppercase tracking-widest text-[#6B6960] block">
            How I Work & Operating SLAs
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-white border border-[#E3E1DA] space-y-2">
              <span className="font-mono text-xs font-semibold text-[#2A48D0]">01. AUDIT & SPECS</span>
              <h4 className="text-sm font-bold text-[#141412]">System Discovery</h4>
              <p className="text-xs text-[#55534B] leading-relaxed">
                Audit existing APIs, rate limits, database schemas, and identify repetitive manual friction points.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E3E1DA] space-y-2">
              <span className="font-mono text-xs font-semibold text-[#2A48D0]">02. MODULAR BUILD</span>
              <h4 className="text-sm font-bold text-[#141412]">Sandbox Architecture</h4>
              <p className="text-xs text-[#55534B] leading-relaxed">
                Build idempotent N8N / Python workflows with isolated environments, automatic retries, and error alerting.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E3E1DA] space-y-2">
              <span className="font-mono text-xs font-semibold text-[#2A48D0]">03. CANARY RAMP</span>
              <h4 className="text-sm font-bold text-[#141412]">Deliverability SLA</h4>
              <p className="text-xs text-[#55534B] leading-relaxed">
                21-day volume escalation curves maintaining strict sub-5% bounce rates across secondary domain fleets.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E3E1DA] space-y-2">
              <span className="font-mono text-xs font-semibold text-[#2A48D0]">04. HANDOVER</span>
              <h4 className="text-sm font-bold text-[#141412]">Team Enablement</h4>
              <p className="text-xs text-[#55534B] leading-relaxed">
                Loom walkthroughs, clear SOP documentation, and training internal teams to self-serve (proven at IQVIA).
              </p>
            </div>
          </div>

        </div>

        {/* CALL TO ACTION (Clean, Bold, exactly like itstamhn) */}
        <div className="pt-12 pb-6 border-t border-[#E3E1DA] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          
          <div className="space-y-1.5">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#141412]">
              Tell me what you want to automate.
            </h2>
            <p className="text-sm sm:text-base text-[#55534B]">
              I'll send back what I'd build.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profileData.email}`}
              className="px-6 py-3.5 rounded bg-[#141412] text-[#FAFAF7] font-semibold text-sm hover:bg-[#2A48D0] transition shadow-sm"
            >
              Email Genesis ({profileData.email})
            </a>
          </div>

        </div>

        {/* Clean Minimalist Footer */}
        <div className="border-t border-[#E3E1DA] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#6B6960]">
          <div>
            <span>GENESIS AUZA · AI AUTOMATION & ENTERPRISE DATA</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`mailto:${profileData.email}`} className="hover:text-[#141412] transition">
              {profileData.email}
            </a>
            <span>·</span>
            <span>{profileData.phone}</span>
            <span>·</span>
            <button onClick={() => setShowResumeModal(true)} className="hover:text-[#141412] transition cursor-pointer">
              Resume ↗
            </button>
          </div>
        </div>

      </div>

      {/* Resume Modal */}
      <ResumeModal
        isOpen={showResumeModal}
        onClose={() => setShowResumeModal(false)}
      />

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div
          onClick={() => setActiveLightbox(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-150 cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full rounded-2xl bg-white border border-[#E3E1DA] p-5 shadow-2xl space-y-3 cursor-default"
          >
            <div className="flex items-center justify-between pb-2 border-b border-[#E3E1DA]">
              <div>
                <h4 className="text-base font-bold text-[#141412]">{activeLightbox.title}</h4>
                <p className="text-xs text-[#55534B]">{activeLightbox.caption}</p>
              </div>
              <button
                onClick={() => setActiveLightbox(null)}
                className="px-3 py-1 rounded bg-[#EBE9E1] text-[#141412] hover:bg-[#D5D3CB] text-xs font-mono transition cursor-pointer"
              >
                Close ✕
              </button>
            </div>
            <div className="rounded-xl overflow-hidden bg-slate-900 flex items-center justify-center max-h-[70vh]">
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
