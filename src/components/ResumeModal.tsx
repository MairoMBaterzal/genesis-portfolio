import React, { useState } from 'react';
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
  MapPin
} from 'lucide-react';
import { profileData } from '../data/profileData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `
Genesis L. Auza
Email: ${profileData.email} | Phone: ${profileData.phone}
LinkedIn: ${profileData.linkedin} | Location: ${profileData.location}

SUMMARY:
${profileData.subtitle}

CORE EXPERTISE:
• Cold Outbound & Sending Fleets: Plusvibe, Instantly, Smartlead, 6,000+ mailboxes, 500k/mo sends, SPF/DKIM/DMARC, < 3% hard bounce SLA
• AI Lead Scraping & Enrichment: Apollo, Clay, Apify, Telegram Bot with DeepSeek & Whisper, Google Sheets sync
• Pipeline & CRM Triage: GoHighLevel, HubSpot CRM, tag-to-deal automation, instant Slack alerts, same-day routing
• Deliverability Diagnostics: Plusvibe, Instantly.ai, Smartlead, MillionVerifier, Cloudflare DNS

EXPERIENCE:
1. Former Co-Founder & Outbound Lead | StylSensei (08/2024 – Present · 1 yr 4 mos)
• Managed scalable cold outbound infrastructure using Plusvibe across 6,000+ warmed secondary mailboxes, dispatching 500,000+ emails monthly with 22.4% positive reply rates and < 3% hard bounce rate.
• Owned end-to-end reply triage, objection handling, prospect qualification, booking high-intent discovery calls directly into client calendars and CRMs.
• Closed high-ticket B2B retainer clients by auditing outbound architecture and building customized multi-inbox fleets.

2. AI & Outbound Automation Developer | Premier Fitness (10/2023 – 08/2024 · 10 mos)
• Designed N8N workflows connecting lead capture forms to CRM and email notification pipelines.
• Built custom API connectors for OpenAI, Google Sheets, and CRM tag management, reducing lead response time to <15 seconds.
• Automated weekly data hygiene and email verification to protect sender scores.

3. Database & Analytics Associate | IQVIA (08/2022 – 10/2023 · 1 yr 2 mos)
• Administered enterprise healthcare analytics databases on HUE Impala and MySQL.
• Automated ETL and data scraping routines with Python & SQL, cutting manual data prep by 40%.
• Nominated twice for IQVIA Impact Awards (Q4 & Q5) for workflow optimization and stakeholder enablement.

EDUCATION & TRAINING:
• BS in Information and Technology (Major in Business & Data Analytics) - Bulacan State University (08/2018 - 07/2022)
• Data Associate Scholar - Project Sparta (Development Academy of the Philippines) (08/2021 - 07/2022)

ACHIEVEMENTS:
• Impact Award Nominee (Twice on Q4 and Q5) at IQVIA
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-150">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0e1117] border border-white/[0.08] shadow-2xl p-6 sm:p-8 text-zinc-100">

        {/* Modal Controls */}
        <div className="sticky top-0 z-10 flex items-center justify-between pb-4 border-b border-white/[0.08] bg-[#0e1117]">
          <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-zinc-400">
            Verified Candidate Resume
          </span>
          <div className="flex items-center gap-2 font-mono">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-xs font-medium transition cursor-pointer text-zinc-300"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-zinc-400" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-xs font-medium transition cursor-pointer text-zinc-300"
            >
              <Printer className="w-3.5 h-3.5 text-zinc-400" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded text-zinc-400 hover:text-white transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="mt-6 space-y-6">

          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-4">
              <img
                src={profileData.headshotUrl}
                alt={profileData.name}
                className="w-14 h-14 rounded-xl object-cover border border-white/10"
              />
              <div>
                <h2 className="text-xl font-semibold text-white tracking-tight">{profileData.name}</h2>
                <p className="text-xs font-mono text-zinc-400 font-medium">{profileData.title}</p>
                <p className="text-xs text-zinc-500 mt-0.5">{profileData.location}</p>
              </div>
            </div>

            <div className="text-xs font-mono text-zinc-400 space-y-1">
              <div>Email: {profileData.email}</div>
              <div>Phone: {profileData.phone}</div>
            </div>
          </div>

          {/* Honors */}
          <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/[0.06] space-y-2">
            <span className="text-[11px] font-mono font-medium text-zinc-300 uppercase tracking-wider block">
              ★ Honors & Recognition
            </span>
            <div className="text-xs text-zinc-400 space-y-1 font-light">
              <p>• <strong className="text-zinc-200">Impact Award Nominee (Q4 & Q5)</strong> — IQVIA Enterprise Analytics</p>
              <p>• <strong className="text-zinc-200">Project Sparta Data Associate Scholar</strong> — Development Academy of the Philippines</p>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <span className="text-[11px] font-mono font-medium text-zinc-400 uppercase tracking-wider block">
              Professional Experience
            </span>

            <div className="space-y-4 text-xs">
              <div className="space-y-1.5 p-4 rounded-xl bg-zinc-950/60 border border-white/[0.06]">
                <div className="flex justify-between font-mono">
                  <strong className="text-sm font-semibold text-white">StylSensei — Former Co-Founder & Outbound Lead</strong>
                  <span className="text-zinc-400">08/2024 – Present · 1 yr 4 mos</span>
                </div>
                <p className="text-zinc-400 font-light leading-relaxed">
                  Managed outbound infrastructure across 6,000+ secondary mailboxes sending 500k+ emails monthly. Maintained a sub-3% hard bounce rate SLA, SPF/DKIM/DMARC alignment, AI reply triage, and closing high-ticket B2B retainer clients.
                </p>
              </div>

              <div className="space-y-1.5 p-4 rounded-xl bg-zinc-950/60 border border-white/[0.06]">
                <div className="flex justify-between font-mono">
                  <strong className="text-sm font-semibold text-white">Premier Fitness — AI & Outbound Automation Developer</strong>
                  <span className="text-zinc-400">10/2023 – 08/2024 · 10 mos</span>
                </div>
                <p className="text-zinc-400 font-light leading-relaxed">
                  Engineered N8N workflows connecting OpenAI, Google Sheets, and CRM lead capture pipelines. Reduced manual effort by 40% and cut lead response time to &lt;15 seconds.
                </p>
              </div>

              <div className="space-y-1.5 p-4 rounded-xl bg-zinc-950/60 border border-white/[0.06]">
                <div className="flex justify-between font-mono">
                  <strong className="text-sm font-semibold text-white">IQVIA — Database & Analytics Associate</strong>
                  <span className="text-zinc-400">08/2022 – 10/2023 · 1 yr 2 mos</span>
                </div>
                <p className="text-zinc-400 font-light leading-relaxed">
                  Administered enterprise databases on HUE Impala and MySQL. Automated web scraping and SQL pipelines (40% effort reduction) and earned two consecutive Impact Award nominations (Q4 & Q5).
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="pt-4 border-t border-white/[0.08]">
            <span className="text-[11px] font-mono font-medium text-zinc-400 uppercase tracking-wider block mb-1">
              Education
            </span>
            <div className="flex justify-between text-xs font-mono">
              <div>
                <strong className="text-white">BS in Information and Technology</strong> (Major in Business & Data Analytics)
                <div className="text-zinc-400">Bulacan State University</div>
              </div>
              <span className="text-zinc-400">2018 – 2022</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
