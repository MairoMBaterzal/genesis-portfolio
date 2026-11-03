import React, { useState, useEffect } from 'react';
import {
  X,
  Printer,
  Copy,
  Check,
  Award,
  GraduationCap,
  Briefcase,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { profileData } from '../data/profileData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  // Close on Escape key & disable background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `
Genesis L. Auza
${profileData.title}
Email: ${profileData.email} | Phone: ${profileData.phone}
LinkedIn: ${profileData.linkedin} | Location: ${profileData.location}

PROFESSIONAL SUMMARY:
${profileData.subtitle}

CORE OUTBOUND METRICS:
• 500,000+ Monthly Outbound Send Scale across 6,000+ warmed secondary mailboxes
• 7,090+ Positive C-Suite Replies with 22.4% response rate
• Strict < 3.0% Hard Bounce SLA maintained with 0 domain burn

EXPERIENCE:
1. StylSensei — Former Co-Founder & Outbound Lead (08/2024 – Present · 1 yr 4 mos)
• Managed scalable cold email operations across 6,000+ warmed secondary mailboxes and 500k+ monthly dispatches with zero primary domain burn.
• Maintained strict sub-3% hard bounce SLA, complete SPF/DKIM/DMARC authentication, and multi-ESP inbox rotation (Plusvibe, Instantly, Smartlead).
• Owned end-to-end reply triage, objection handling, and prospect qualification, booking high-intent C-suite discovery calls directly into client calendars.
• Closed high-ticket B2B retainer clients by auditing outbound architecture and building customized multi-inbox fleets.

2. Premier Fitness — AI & Outbound Automation Developer (10/2023 – 08/2024 · 10 mos)
• Engineered N8N workflows connecting OpenAI, Google Sheets, and CRM lead capture pipelines.
• Built custom API connectors for lead enrichment and CRM tag triage, reducing lead response time to <15 seconds.
• Automated weekly data hygiene, duplicate removal, and email verification to protect sender reputations.

3. IQVIA — Database & Analytics Associate (08/2022 – 10/2023 · 1 yr 2 mos)
• Administered enterprise healthcare analytics databases on HUE Impala and MySQL.
• Automated web scraping and SQL/Python ETL data pipelines, cutting manual data preparation by 40%.
• Nominated twice for IQVIA Impact Awards (Q4 & Q5) for workflow optimization and cross-functional reporting.

EDUCATION & FELLOWSHIPS:
• BS in Information and Technology (Major in Business & Data Analytics) — Bulacan State University (2018 – 2022)
• Project Sparta Data Associate Scholar — Development Academy of the Philippines (2021 – 2022)

HONORS:
• Impact Award Nominee (Twice: Q4 & Q5) — IQVIA Enterprise Analytics
• Project Sparta Fellowship Scholar — DAP
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-zinc-950/45 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-[#fdfbfd]/95 sm:bg-white/95 backdrop-blur-3xl border border-white/80 shadow-[0_24px_70px_rgba(24,24,27,0.16)] text-zinc-900 overflow-hidden font-sans"
      >
        {/* Top Control Bar (Sticky iOS Frosted Header) */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 border-b border-zinc-200/80 bg-white/90 backdrop-blur-xl">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Verified Candidate CV
            </span>
            <span className="hidden sm:inline-block text-xs text-zinc-500 font-medium">
              Available for B2B Outbound Roles
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-100 hover:bg-zinc-200/80 text-zinc-800 border border-zinc-200 text-xs font-semibold transition cursor-pointer active:scale-95 shadow-2xs"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-zinc-600" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-semibold transition cursor-pointer active:scale-95 shadow-xs"
            >
              <Printer className="w-3.5 h-3.5 text-zinc-200" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close resume modal"
              className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-500 hover:text-zinc-900 transition flex items-center justify-center cursor-pointer ml-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto px-6 sm:px-9 py-7 space-y-8">

          {/* 1. Header Profile Banner */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-zinc-200/80">
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="relative">
                <img
                  src={profileData.headshotUrl}
                  alt={profileData.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover shadow-md ring-2 ring-emerald-500/20"
                />
                <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center shadow-xs" title="Available">
                  <span className="w-2 h-2 rounded-full bg-white" />
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
                    {profileData.name}
                  </h1>
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1d9bf0] text-white shadow-xs shrink-0" title="Verified Professional">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </span>
                </div>
                <p className="text-sm sm:text-base font-bold text-emerald-800 mt-0.5">
                  {profileData.title}
                </p>
                <p className="text-xs sm:text-sm text-zinc-600 mt-0.5 flex items-center gap-1.5 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  {profileData.location}
                </p>
              </div>
            </div>

            {/* Quick Contact Chips */}
            <div className="flex flex-wrap sm:flex-col gap-2 w-full sm:w-auto">
              <a
                href={`mailto:${profileData.email}`}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-zinc-200 hover:border-zinc-300 text-xs font-medium text-zinc-800 hover:text-zinc-950 shadow-2xs transition"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-700" />
                <span>{profileData.email}</span>
              </a>

              <a
                href={`tel:${profileData.phone}`}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-zinc-200 hover:border-zinc-300 text-xs font-medium text-zinc-800 hover:text-zinc-950 shadow-2xs transition"
              >
                <Phone className="w-3.5 h-3.5 text-sky-600" />
                <span>{profileData.phone}</span>
              </a>

              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-zinc-200 hover:border-zinc-300 text-xs font-medium text-zinc-800 hover:text-zinc-950 shadow-2xs transition"
              >
                <svg className="w-3.5 h-3.5 fill-[#0a66c2]" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.62 1.62 0 1 0 0-3.24 1.62 1.62 0 0 0 0 3.24M5.07 18.5h2.78v-8.37H5.07v8.37Z" />
                </svg>
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3 h-3 text-zinc-400 ml-auto" />
              </a>
            </div>
          </div>

          {/* 2. Executive Summary */}
          <div className="p-5 rounded-2xl bg-white/70 border border-zinc-200/90 shadow-2xs space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-700 block">
              PROFESSIONAL SUMMARY
            </span>
            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
              Former Co-Founder of StylSensei. I engineer and operate high-scale cold outbound infrastructure (<strong className="text-zinc-950 font-semibold">Plusvibe, Instantly, Smartlead across 6,000+ mailboxes and 500,000+ monthly sends</strong>), delivering qualified C-suite deal flow with a verified <strong className="text-zinc-950 font-semibold">22.4% positive response rate</strong> and strict <strong className="text-zinc-950 font-semibold">sub-3% hard bounce rate SLA</strong>.
            </p>
          </div>

          {/* 3. Core Outbound KPI Metrics (Apple iOS Frosted Glass Cards) */}
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-500 block mb-3">
              VERIFIED OPERATIONAL TELEMETRY
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div className="p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-semibold block">
                  Monthly Scale
                </span>
                <span className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight block">
                  500K+
                </span>
                <span className="text-xs text-zinc-600 font-medium block">
                  Monthly sends, 0 burn
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-700 font-semibold block">
                  Positive Replies
                </span>
                <span className="text-2xl sm:text-3xl font-black text-emerald-600 tracking-tight block">
                  7,090+
                </span>
                <span className="text-xs text-zinc-600 font-medium block">
                  Verified C-suite leads
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-semibold block">
                  Response Rate
                </span>
                <span className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight block">
                  22.4%
                </span>
                <span className="text-xs text-zinc-600 font-medium block">
                  Across 451k targets
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-700 font-semibold block">
                  Bounce SLA
                </span>
                <span className="text-2xl sm:text-3xl font-black text-emerald-600 tracking-tight block">
                  &lt; 3.0%
                </span>
                <span className="text-xs text-zinc-600 font-medium block">
                  Strict DNS preservation
                </span>
              </div>
            </div>
          </div>

          {/* 4. Honors & Recognition */}
          <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 space-y-3">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-700" />
              <span className="text-xs font-mono font-bold text-emerald-900 uppercase tracking-wider">
                Honors & Notable Recognition
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-white/80 border border-emerald-100 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-zinc-950 text-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Impact Award Nominee (Twice: Q4 & Q5)</span>
                </div>
                <p className="text-xs text-zinc-600 pl-5">
                  IQVIA Enterprise Analytics · Recognized for operational optimization and speed.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/80 border border-emerald-100 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-zinc-950 text-sm">
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Project Sparta Data Scholar</span>
                </div>
                <p className="text-xs text-zinc-600 pl-5">
                  Development Academy of the Philippines · Competitive national data analytics fellowship.
                </p>
              </div>
            </div>
          </div>

          {/* 5. Professional Experience */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-1 border-b border-zinc-200/80">
              <Briefcase className="w-4 h-4 text-emerald-700" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-700">
                Work Experience & Track Record
              </span>
            </div>

            <div className="space-y-4">
              {/* Role 1: StylSensei */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs space-y-3 hover:border-zinc-300 transition">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="text-lg font-black text-zinc-950 tracking-tight">
                      StylSensei
                    </h3>
                    <p className="text-sm font-bold text-emerald-800">
                      Former Co-Founder & Outbound Lead
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 font-semibold">
                    <span>08/2024 – Present · 1 yr 4 mos</span>
                    <span className="px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-700 text-[11px]">Full-Time</span>
                  </div>
                </div>

                <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed font-normal list-disc pl-5">
                  <li>
                    Built and scaled outbound infrastructure across <strong className="text-zinc-950 font-semibold">6,000+ warmed secondary mailboxes</strong> dispatching 500,000+ targeted cold emails monthly with 0 primary domain burn.
                  </li>
                  <li>
                    Delivered <strong className="text-zinc-950 font-semibold">7,090+ positive C-suite responses</strong> (22.4% reply rate) through rigorous A/B copywriting iterations and enriched B2B data clustering.
                  </li>
                  <li>
                    Maintained strict <strong className="text-zinc-950 font-semibold">&lt; 3% hard bounce SLA</strong> with SPF/DKIM/DMARC DNS isolation, custom tracking domains, and automated deliverability monitors.
                  </li>
                  <li>
                    Managed end-to-end reply triage, objection handling, and lead routing into GoHighLevel and HubSpot to book qualified sales calls directly into client pipelines.
                  </li>
                </ul>
              </div>

              {/* Role 2: Premier Fitness */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs space-y-3 hover:border-zinc-300 transition">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="text-lg font-black text-zinc-950 tracking-tight">
                      Premier Fitness
                    </h3>
                    <p className="text-sm font-bold text-zinc-800">
                      AI & Outbound Automation Developer
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 font-semibold">
                    <span>10/2023 – 08/2024 · 10 mos</span>
                    <span className="px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-700 text-[11px]">Contract</span>
                  </div>
                </div>

                <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed font-normal list-disc pl-5">
                  <li>
                    Architected automated N8N workflows bridging lead generation capture forms to CRM pipelines and instant Slack alert channels.
                  </li>
                  <li>
                    Integrated OpenAI and webhook triggers for automated lead enrichment and CRM triage, cutting lead response latency to &lt;15 seconds.
                  </li>
                  <li>
                    Engineered automated list verification routines to filter bad emails prior to sequence enrollment, preventing spam flags.
                  </li>
                </ul>
              </div>

              {/* Role 3: IQVIA */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs space-y-3 hover:border-zinc-300 transition">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="text-lg font-black text-zinc-950 tracking-tight">
                      IQVIA
                    </h3>
                    <p className="text-sm font-bold text-zinc-800">
                      Database & Analytics Associate
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 font-semibold">
                    <span>08/2022 – 10/2023 · 1 yr 2 mos</span>
                    <span className="px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-700 text-[11px]">Full-Time</span>
                  </div>
                </div>

                <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed font-normal list-disc pl-5">
                  <li>
                    Managed enterprise healthcare databases across HUE Impala and MySQL environments with high data integrity.
                  </li>
                  <li>
                    Wrote Python and SQL automation scripts that eliminated 40% of manual repetitive reporting tasks.
                  </li>
                  <li>
                    Twice nominated for the prestigious IQVIA Impact Award (Q4 & Q5) for outstanding analytics execution and cross-team impact.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 6. Technical Stack & Outbound Toolkit */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 pb-1 border-b border-zinc-200/80">
              <Cpu className="w-4 h-4 text-emerald-700" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-700">
                Outbound Systems & Technical Toolkit
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-4 rounded-xl bg-white border border-zinc-200/80 space-y-1.5">
                <strong className="text-zinc-950 font-bold block text-sm">Sending Fleets & Deliverability</strong>
                <p className="text-zinc-600 leading-relaxed">
                  Plusvibe, Instantly, Smartlead, SendGrid, Amazon SES, Google Workspace & Microsoft 365 secondary domain fleets, SPF / DKIM / DMARC authentication, Cloudflare DNS.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-zinc-200/80 space-y-1.5">
                <strong className="text-zinc-950 font-bold block text-sm">Lead Enrichment & Automation</strong>
                <p className="text-zinc-600 leading-relaxed">
                  Clay, Apollo.io, Apify web scrapers, Telegram Bot with DeepSeek & Whisper voice transcribers, MillionVerifier, Google Sheets ETL, N8N, Zapier.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-zinc-200/80 space-y-1.5">
                <strong className="text-zinc-950 font-bold block text-sm">CRM & Inbound Triage</strong>
                <p className="text-zinc-600 leading-relaxed">
                  GoHighLevel (GHL), HubSpot CRM, instant webhook lead distribution, automated calendar booking, sentiment classification.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-zinc-200/80 space-y-1.5">
                <strong className="text-zinc-950 font-bold block text-sm">Database & Analytics</strong>
                <p className="text-zinc-600 leading-relaxed">
                  SQL Programming, Python automation scripts, MySQL, HUE Impala, deliverability telemetry dashboards, bounce diagnosis.
                </p>
              </div>
            </div>
          </div>

          {/* 7. Education & Fellowship */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 pb-1 border-b border-zinc-200/80">
              <GraduationCap className="w-4 h-4 text-emerald-700" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-700">
                Education & Scholar Fellowships
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-4 rounded-xl bg-white border border-zinc-200/80 space-y-1">
                <div className="flex items-center justify-between">
                  <strong className="text-zinc-950 font-bold text-sm">Bulacan State University</strong>
                  <span className="font-mono text-zinc-500 font-semibold">2018 – 2022</span>
                </div>
                <p className="text-zinc-700 font-medium">
                  Bachelor of Science in Information and Technology
                </p>
                <p className="text-emerald-800 font-semibold">
                  Major in Business & Data Analytics
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-zinc-200/80 space-y-1">
                <div className="flex items-center justify-between">
                  <strong className="text-zinc-950 font-bold text-sm">Project Sparta (DAP)</strong>
                  <span className="font-mono text-zinc-500 font-semibold">2021 – 2022</span>
                </div>
                <p className="text-zinc-700 font-medium">
                  Data Associate Scholar Fellowship
                </p>
                <p className="text-zinc-500">
                  Development Academy of the Philippines · Analytics & SQL
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="pt-4 border-t border-zinc-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Full credentials, campaign metrics & references available upon request.</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="hover:text-zinc-900 font-bold transition underline cursor-pointer"
              >
                Print to PDF
              </button>
              <span>·</span>
              <a
                href={`mailto:${profileData.email}`}
                className="hover:text-emerald-800 font-bold transition underline cursor-pointer"
              >
                Contact Genesis
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
