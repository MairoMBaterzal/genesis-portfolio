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
  Wrench
} from 'lucide-react';
import { profileData } from '../data/profileData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

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

HONORS & RECOGNITION:
• Impact Award Nominee (Q4 & Q5) — IQVIA Enterprise Analytics
• Project Sparta Data Associate Scholar — Development Academy of the Philippines

PROFESSIONAL EXPERIENCE:
1. StylSensei — Former Co-Founder & Outbound Lead (08/2024 – 09/2026 · 2 yrs 2 mos)
• Managed outbound infrastructure across 6,000+ secondary mailboxes sending 500k+ emails monthly.
• Maintained a sub-3% hard bounce rate SLA, SPF/DKIM/DMARC alignment, AI reply triage, and closed high-ticket B2B retainer clients.
• Booked qualified discovery calls directly into client sales pipelines and CRMs.

2. Premier Fitness — AI & Outbound Automation Developer (10/2023 – 08/2024 · 10 mos)
• Engineered N8N workflows connecting OpenAI, Google Sheets, and CRM lead capture pipelines.
• Reduced manual effort by 40% and cut lead response time to <15 seconds.
• Automated weekly data hygiene and email verification to protect sender reputations.

3. IQVIA — Database & Analytics Associate (08/2022 – 10/2023 · 1 yr 2 mos)
• Administered enterprise databases on HUE Impala and MySQL.
• Automated web scraping and SQL/Python data pipelines, cutting manual preparation by 40%.
• Earned two consecutive Impact Award nominations (Q4 & Q5) for workflow optimization.

EDUCATION:
• BS in Information and Technology (Major in Business & Data Analytics) — Bulacan State University (2018 – 2022)

CORE SKILLS & TOOLS:
• Cold Email & Sending Fleets: Plusvibe, Instantly, Smartlead, Cloudflare DNS, SPF/DKIM/DMARC
• Automation & CRM: GoHighLevel, HubSpot CRM, N8N, Zapier, Webhooks
• Scraping & Data: Clay, Apollo.io, Apify, SQL, Python, MySQL, HUE Impala
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-zinc-950/40 backdrop-blur-md animate-in fade-in duration-150 overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[92vh] flex flex-col rounded-3xl bg-[#fdfbfd]/95 sm:bg-white/95 backdrop-blur-3xl border border-white/80 shadow-[0_24px_60px_rgba(24,24,27,0.14)] text-zinc-900 overflow-hidden font-sans"
      >
        {/* Top Sticky Controls Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 border-b border-zinc-200/80 bg-white/90 backdrop-blur-xl">
          <span className="text-xs font-mono font-bold tracking-wider uppercase text-zinc-500">
            Resume · Genesis Auza
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-100 hover:bg-zinc-200/80 text-zinc-800 border border-zinc-200 text-xs font-semibold transition cursor-pointer active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Copied</span>
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
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-semibold transition cursor-pointer active:scale-95"
            >
              <Printer className="w-3.5 h-3.5 text-zinc-200" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close resume"
              className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-500 hover:text-zinc-900 transition flex items-center justify-center cursor-pointer ml-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Clean Resume Body */}
        <div className="overflow-y-auto px-6 sm:px-8 py-6 space-y-7">

          {/* Header Profile */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-zinc-200/80">
            <div className="flex items-center gap-4">
              <img
                src={profileData.headshotUrl}
                alt={profileData.name}
                className="w-16 h-16 rounded-2xl object-cover shadow-sm ring-1 ring-zinc-200"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-extrabold text-zinc-950 tracking-tight">
                    {profileData.name}
                  </h1>
                  <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#1d9bf0] text-white shrink-0" title="Verified">
                    <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </span>
                </div>
                <p className="text-sm font-semibold text-emerald-800 mt-0.5">
                  {profileData.title}
                </p>
                <p className="text-xs text-zinc-500 mt-0.5 flex items-center gap-1 font-medium">
                  <MapPin className="w-3 h-3 text-zinc-400" />
                  {profileData.location}
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="text-xs text-zinc-600 space-y-1 sm:text-right font-medium">
              <div className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-zinc-400" />
                <a href={`mailto:${profileData.email}`} className="text-zinc-800 hover:text-emerald-800 transition">
                  {profileData.email}
                </a>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Phone className="w-3.5 h-3.5 text-zinc-400" />
                <a href={`tel:${profileData.phone}`} className="text-zinc-800 hover:text-emerald-800 transition">
                  {profileData.phone}
                </a>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5 pt-0.5">
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-emerald-800 hover:text-emerald-950 font-semibold transition"
                >
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Honors & Recognition */}
          <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200/70 space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-emerald-900">
              <Award className="w-3.5 h-3.5 text-emerald-700" />
              <span>Honors & Recognition</span>
            </div>
            <div className="text-sm text-zinc-700 space-y-1.5 pl-5 list-disc">
              <p>
                • <strong className="text-zinc-950 font-semibold">Impact Award Nominee (Q4 & Q5)</strong> — IQVIA Enterprise Analytics
              </p>
              <p>
                • <strong className="text-zinc-950 font-semibold">Project Sparta Data Associate Scholar</strong> — Development Academy of the Philippines
              </p>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-zinc-600 pb-1 border-b border-zinc-200/80">
              <Briefcase className="w-3.5 h-3.5 text-emerald-700" />
              <span>Professional Experience</span>
            </div>

            <div className="space-y-4">
              {/* StylSensei */}
              <div className="p-5 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-base font-bold text-zinc-950">
                    StylSensei — Former Co-Founder & Outbound Lead
                  </h3>
                  <span className="text-xs font-mono text-zinc-500 font-semibold">
                    08/2024 – 09/2026 · 2 yrs 2 mos
                  </span>
                </div>
                <p className="text-sm text-zinc-700 leading-relaxed font-normal">
                  Managed outbound infrastructure across 6,000+ secondary mailboxes sending 500k+ emails monthly. Maintained a sub-3% hard bounce rate SLA, SPF/DKIM/DMARC alignment, AI reply triage, and closing high-ticket B2B retainer clients.
                </p>
              </div>

              {/* Premier Fitness */}
              <div className="p-5 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-base font-bold text-zinc-950">
                    Premier Fitness — AI & Outbound Automation Developer
                  </h3>
                  <span className="text-xs font-mono text-zinc-500 font-semibold">
                    10/2023 – 08/2024 · 10 mos
                  </span>
                </div>
                <p className="text-sm text-zinc-700 leading-relaxed font-normal">
                  Engineered N8N workflows connecting OpenAI, Google Sheets, and CRM lead capture pipelines. Reduced manual effort by 40% and cut lead response time to &lt;15 seconds.
                </p>
              </div>

              {/* IQVIA */}
              <div className="p-5 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-base font-bold text-zinc-950">
                    IQVIA — Database & Analytics Associate
                  </h3>
                  <span className="text-xs font-mono text-zinc-500 font-semibold">
                    08/2022 – 10/2023 · 1 yr 2 mos
                  </span>
                </div>
                <p className="text-sm text-zinc-700 leading-relaxed font-normal">
                  Administered enterprise databases on HUE Impala and MySQL. Automated web scraping and SQL pipelines (40% effort reduction) and earned two consecutive Impact Award nominations (Q4 & Q5).
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-zinc-600 pb-1 border-b border-zinc-200/80">
              <GraduationCap className="w-3.5 h-3.5 text-emerald-700" />
              <span>Education</span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <strong className="text-sm font-bold text-zinc-950">
                  BS in Information and Technology
                </strong>{' '}
                <span className="text-sm text-zinc-600 font-normal">
                  (Major in Business & Data Analytics)
                </span>
                <div className="text-xs text-zinc-500 mt-0.5">
                  Bulacan State University
                </div>
              </div>
              <span className="text-xs font-mono text-zinc-500 font-semibold">
                2018 – 2022
              </span>
            </div>
          </div>

          {/* Core Skills & Tools */}
          <div className="space-y-3">
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-zinc-600 pb-1 border-b border-zinc-200/80">
              <Wrench className="w-3.5 h-3.5 text-emerald-700" />
              <span>Core Skills & Tools</span>
            </div>

            <div className="flex flex-wrap gap-2 text-xs">
              {[
                'Plusvibe',
                'Instantly.ai',
                'Smartlead',
                'SPF / DKIM / DMARC',
                'Secondary Domain Fleets',
                'GoHighLevel (GHL)',
                'HubSpot CRM',
                'N8N Automation',
                'Clay',
                'Apollo.io',
                'Apify Scraping',
                'SQL Programming',
                'Python ETL',
                'Cloudflare DNS',
                'MillionVerifier'
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-lg bg-zinc-100 border border-zinc-200 text-zinc-700 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
