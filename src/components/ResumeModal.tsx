import React, { useState } from 'react';
import {
  X,
  Printer,
  Copy,
  Check,
  Award,
  GraduationCap,
  Briefcase,
  Layers,
  Mail,
  Phone,
  MapPin,
  ExternalLink
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

SKILLS:
• AI & Workflow Automation: N8N (Design, implementation, custom scripting in JavaScript & Python), Webhooks, OpenAI API
• Backend & Database Management: PowerBI, MySQL, HUE Impala, Azure, Excel, Access, SQL
• API Integrations: REST, GraphQL, webhooks, Data scraping, mining

EXPERIENCE:
1. Co-Founder | StylSensei (06/2025 – 06/2026)
• Managed scalable cold outbound infrastructure across 6,000+ warmed secondary mailboxes, sending 500,000+ emails monthly while maintaining strict SPF, DKIM, DMARC authentication and sub-5% bounce rates.
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

ACHIEVEMENTS & CERTIFICATIONS:
• Impact Award Nominee (Twice on Q4 and Q5) at IQVIA
• Essential Excel Skills for Data Preparation and Analysis
• SQL Programming for Business Users
• Data Visualization Fundamentals
• Analytics Applications in Finance and Risk
• Design Thinking for Analytics
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-150">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl shadow-black p-6 sm:p-8">
        
        {/* Modal Controls */}
        <div className="sticky top-0 z-10 flex items-center justify-between pb-4 border-b border-slate-800 bg-slate-900">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Verified Candidate Resume
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 transition cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied to Clipboard' : 'Copy Text'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 transition cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="mt-6 space-y-6 text-slate-200">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-4">
              <img
                src={profileData.headshotUrl}
                alt={profileData.name}
                className="w-16 h-16 rounded-xl object-cover ring-2 ring-cyan-500/40"
              />
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight">{profileData.name}</h2>
                <p className="text-sm font-semibold text-cyan-400 mt-0.5">{profileData.title}</p>
                <p className="text-xs text-slate-400 mt-1">{profileData.subtitle}</p>
              </div>
            </div>

            <div className="flex flex-col gap-1 text-xs text-slate-300">
              <a href={`mailto:${profileData.email}`} className="flex items-center gap-2 hover:text-cyan-400 transition">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{profileData.email}</span>
              </a>
              <a href={`tel:${profileData.phone}`} className="flex items-center gap-2 hover:text-cyan-400 transition">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{profileData.phone}</span>
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{profileData.location}</span>
              </div>
            </div>
          </div>

          {/* Impact Awards & Certifications */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 via-cyan-500/10 to-blue-500/10 border border-amber-500/20">
            <div className="flex items-center gap-2 text-amber-300 font-bold text-xs uppercase tracking-wider mb-2">
              <Award className="w-4 h-4" />
              <span>Honors & Certifications</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <span className="font-semibold text-white block">🏆 Impact Award Nominee (Q4 & Q5)</span>
                <span className="text-slate-400 text-[11px]">IQVIA Enterprise Analytics — Recognized for great overall performance, fast tool familiarization, and executive presentations.</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <span className="font-semibold text-white block">🎓 Project Sparta Data Scholar</span>
                <span className="text-slate-400 text-[11px]">Development Academy of the Philippines — Operational Analysis, SQL & Data Visualization.</span>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {profileData.certifications.map((c, i) => (
                <span key={i} className="text-[11px] px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-700/80">
                  ✓ {c}
                </span>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-4">
              <Briefcase className="w-4 h-4" />
              <span>Professional Experience</span>
            </div>

            <div className="space-y-6">
              {/* StylSensei */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-bold text-white">Co-Founder & Outbound Infrastructure Lead</h3>
                  <span className="text-xs font-mono text-cyan-400">StylSensei • 06/2025 – 06/2026 (Remote, PH)</span>
                </div>
                <ul className="mt-3 space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                  <li>Managed scalable cold outbound infrastructure across <strong>6,000+ warmed secondary mailboxes</strong>, sending <strong>500,000+ emails monthly</strong> while maintaining strict SPF, DKIM, DMARC authentication and sub-5% bounce rates.</li>
                  <li>Ran the full sales cycle for agency acquisition: audited prospect systems, delivered customized proposals, and closed high-ticket B2B retainer clients.</li>
                  <li>Owned end-to-end reply management, objection handling, and prospect qualification, booking high-intent discovery calls directly into client calendars and CRMs.</li>
                  <li>Managed client campaign deliverables, inbox management, and quality assurance to ensure consistent pipeline delivery.</li>
                </ul>
              </div>

              {/* Premier Fitness */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-bold text-white">AI Automation Developer</h3>
                  <span className="text-xs font-mono text-cyan-400">Premier Fitness • 02/2025 – 06/2025 (Remote, US)</span>
                </div>
                <ul className="mt-3 space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                  <li>Designed and implemented N8N workflows to automate client processes (CRM integration, data synchronization, API-driven tasks).</li>
                  <li>Built custom API connectors for platforms like OpenAI, Google Sheets, and ERP systems to streamline data flows.</li>
                  <li>Optimized data pipelines for real-time analytics and reporting, <strong>reducing manual effort by 40%</strong> for clients.</li>
                  <li>Collaborated with startups to architect scalable automation solutions, aligning with business goals.</li>
                </ul>
              </div>

              {/* IQVIA */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-bold text-white">Sr. Database Support Associate</h3>
                  <span className="text-xs font-mono text-cyan-400">IQVIA • 10/2022 – 02/2025 (Remote, PH)</span>
                </div>
                <ul className="mt-3 space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                  <li>Managed and maintained large-scale databases, ensuring data integrity, security, and performance optimization for enterprise systems.</li>
                  <li>Automated data scraping and mining processes using Python and SQL, <strong>reducing manual effort by 40%</strong> and improving data accessibility for analytics teams.</li>
                  <li>Collaborated with cross-functional teams to troubleshoot database issues, implement API integrations, and optimize workflows.</li>
                  <li>Documented database processes and provided training to stakeholders on tools like Looker and SQL for self-service analytics.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start justify-between">
              <div>
                <h4 className="text-sm font-bold text-white">Bachelor of Science in Information and Technology</h4>
                <p className="text-xs text-cyan-400 font-medium mt-0.5">Major in Business & Data Analytics</p>
                <p className="text-xs text-slate-400 mt-1">Bulacan State University (Malolos, PH)</p>
              </div>
              <span className="text-xs font-mono text-slate-400">08/2018 - 07/2022</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
