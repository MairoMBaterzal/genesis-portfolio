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
• Cold Outbound & Sending Fleets: Plusvibe, Instantly, Smartlead, 6,000+ mailboxes, 500k/mo sends, SPF/DKIM/DMARC, sub-1.0% bounce rate
• AI Lead Scraping & Enrichment: Apollo, Clay, Apify, Telegram Bot with DeepSeek & Whisper, Google Sheets sync
• Pipeline & CRM Triage: GoHighLevel, HubSpot CRM, tag-to-deal automation, instant Slack alerts, same-day routing
• Deliverability Diagnostics: Plusvibe, Instantly.ai, Smartlead, MillionVerifier, Cloudflare DNS

EXPERIENCE:
1. Co-Founder & Outbound Lead | StylSensei (06/2025 – 06/2026)
• Managed scalable cold outbound infrastructure using Plusvibe across 6,000+ warmed secondary mailboxes, dispatching 500,000+ emails monthly while maintaining 22.4% positive response rates and a 1.0% hard bounce rate.
• Ran the full sales cycle for agency acquisition: audited prospect systems, delivered customized proposals, and closed high-ticket B2B retainer clients.
• Owned end-to-end reply management, objection handling, prospect qualification, booking high-intent discovery calls directly into client calendars and CRMs.

2. AI Automation Developer | Premier Fitness (02/2025 - 06/2025)
• Designed and implemented N8N workflows to automate client processes (CRM integration, data synchronization, API-driven tasks).
• Built custom API connectors for platforms like OpenAI, Google Sheets, and ERP systems.
• Optimized data pipelines for real-time analytics and reporting, reducing manual effort by 40%.

3. Sr. Database Support Associate | IQVIA (10/2022 - 02/2025)
• Managed and maintained large-scale databases, ensuring data integrity, security, and performance optimization for enterprise systems.
• Automated data scraping and mining processes using Python and SQL, reducing manual effort by 40%.
• Collaborated with cross-functional teams, implemented API integrations, and optimized workflows.
• Documented database processes and provided training to stakeholders on Looker and SQL for self-service analytics.

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#181d2c] border border-white/10 shadow-2xl p-6 sm:p-8 text-[#F1F5F9]">

        {/* Modal Controls */}
        <div className="sticky top-0 z-10 flex items-center justify-between pb-4 border-b border-white/10 bg-[#181d2c]">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400">
            Verified Candidate Resume
          </span>
          <div className="flex items-center gap-2 font-mono">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-xs font-medium transition cursor-pointer text-slate-200"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-xs font-medium transition cursor-pointer text-slate-200"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded text-slate-400 hover:text-white transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="mt-6 space-y-6">

          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-4">
              <img
                src={profileData.headshotUrl}
                alt={profileData.name}
                className="w-14 h-14 rounded-full object-cover ring-2 ring-indigo-500/30"
              />
              <div>
                <h2 className="text-xl font-bold text-white tracking-tight">{profileData.name}</h2>
                <p className="text-xs font-mono text-indigo-400 font-semibold">{profileData.title}</p>
                <p className="text-xs text-slate-400 mt-0.5">{profileData.location}</p>
              </div>
            </div>

            <div className="text-xs font-mono text-slate-400 space-y-1">
              <div>Email: {profileData.email}</div>
              <div>Phone: {profileData.phone}</div>
            </div>
          </div>

          {/* Honors */}
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">
              ★ Honors & Recognition
            </span>
            <div className="text-xs text-slate-300 space-y-1 font-light">
              <p>• <strong>Impact Award Nominee (Q4 & Q5)</strong> — IQVIA Enterprise Analytics</p>
              <p>• <strong>Project Sparta Data Associate Scholar</strong> — Development Academy of the Philippines</p>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">
              Professional Experience
            </span>

            <div className="space-y-5 text-xs">
              <div className="space-y-1.5 p-4 rounded-xl bg-black/30 border border-white/5">
                <div className="flex justify-between font-mono">
                  <strong className="text-sm font-bold text-white">StylSensei — Co-Founder & Outbound Lead</strong>
                  <span className="text-indigo-400">06/2025 – 06/2026</span>
                </div>
                <p className="text-slate-300 font-light leading-relaxed">
                  Managed outbound infrastructure across 6,000+ secondary mailboxes sending 500k+ emails monthly. Sub-2.8% bounce rate SLA, SPF/DKIM/DMARC alignment, AI reply triage, and closing high-ticket B2B retainer clients.
                </p>
              </div>

              <div className="space-y-1.5 p-4 rounded-xl bg-black/30 border border-white/5">
                <div className="flex justify-between font-mono">
                  <strong className="text-sm font-bold text-white">Premier Fitness — AI Automation Developer</strong>
                  <span className="text-indigo-400">02/2025 – 06/2025</span>
                </div>
                <p className="text-slate-300 font-light leading-relaxed">
                  Engineered N8N workflows connecting OpenAI, Google Sheets, and legacy ERPs. Reduced manual effort by 40% and cut lead response time to &lt;15 seconds.
                </p>
              </div>

              <div className="space-y-1.5 p-4 rounded-xl bg-black/30 border border-white/5">
                <div className="flex justify-between font-mono">
                  <strong className="text-sm font-bold text-white">IQVIA — Sr. Database Support Associate</strong>
                  <span className="text-indigo-400">10/2022 – 02/2025</span>
                </div>
                <p className="text-slate-300 font-light leading-relaxed">
                  Administered enterprise databases on HUE Impala and MySQL. Automated web scraping and SQL pipelines (40% effort reduction) and trained 30+ stakeholders on Looker self-serve querying.
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="pt-4 border-t border-white/10">
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block mb-1">
              Education
            </span>
            <div className="flex justify-between text-xs font-mono">
              <div>
                <strong className="text-white">BS in Information and Technology</strong> (Major in Business & Data Analytics)
                <div className="text-slate-400">Bulacan State University</div>
              </div>
              <span className="text-indigo-400">2018 – 2022</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
