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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#FAFAF7] border border-[#E3E1DA] shadow-2xl p-6 sm:p-8 text-[#141412]">
        
        {/* Modal Controls */}
        <div className="sticky top-0 z-10 flex items-center justify-between pb-4 border-b border-[#E3E1DA] bg-[#FAFAF7]">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#2A48D0]">
            Verified Candidate Resume
          </span>
          <div className="flex items-center gap-2 font-mono">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#EBE9E1] text-[#141412] hover:bg-[#D5D3CB] text-xs font-medium transition cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#EBE9E1] text-[#141412] hover:bg-[#D5D3CB] text-xs font-medium transition cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded text-[#6B6960] hover:text-[#141412] transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="mt-6 space-y-6">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#E3E1DA]">
            <div className="flex items-center gap-4">
              <img
                src={profileData.headshotUrl}
                alt={profileData.name}
                className="w-14 h-14 rounded-full object-cover ring-1 ring-[#E3E1DA]"
              />
              <div>
                <h2 className="text-xl font-bold text-[#141412] tracking-tight">{profileData.name}</h2>
                <p className="text-xs font-mono text-[#2A48D0] font-semibold">{profileData.title}</p>
                <p className="text-xs text-[#6B6960] mt-0.5">{profileData.location}</p>
              </div>
            </div>

            <div className="text-xs font-mono text-[#55534B] space-y-1">
              <div>Email: {profileData.email}</div>
              <div>Phone: {profileData.phone}</div>
            </div>
          </div>

          {/* Honors */}
          <div className="p-4 rounded-xl bg-[#EBE9E1]/60 border border-[#E3E1DA] space-y-2">
            <span className="text-xs font-mono font-bold text-[#141412] uppercase tracking-wider block">
              ★ Honors & Recognition
            </span>
            <div className="text-xs text-[#55534B] space-y-1">
              <p>• <strong>Impact Award Nominee (Q4 & Q5)</strong> — IQVIA Enterprise Analytics</p>
              <p>• <strong>Project Sparta Data Associate Scholar</strong> — Development Academy of the Philippines</p>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <span className="text-xs font-mono font-bold text-[#141412] uppercase tracking-wider block">
              Professional Experience
            </span>

            <div className="space-y-4 text-xs">
              <div className="space-y-1">
                <div className="flex justify-between font-mono">
                  <strong className="text-sm font-bold text-[#141412]">StylSensei — Co-Founder & Outbound Lead</strong>
                  <span className="text-[#6B6960]">06/2025 – 06/2026</span>
                </div>
                <p className="text-[#55534B]">
                  Managed outbound infrastructure across 6,000+ secondary mailboxes sending 500k+ emails monthly. Sub-5% bounce rate SLA, SPF/DKIM/DMARC alignment, AI reply triage, and closing high-ticket B2B retainers.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between font-mono">
                  <strong className="text-sm font-bold text-[#141412]">Premier Fitness — AI Automation Developer</strong>
                  <span className="text-[#6B6960]">02/2025 – 06/2025</span>
                </div>
                <p className="text-[#55534B]">
                  Engineered N8N workflows connecting OpenAI, Google Sheets, and legacy ERPs. Reduced manual effort by 40% and cut lead response time to &lt;15 seconds.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between font-mono">
                  <strong className="text-sm font-bold text-[#141412]">IQVIA — Sr. Database Support Associate</strong>
                  <span className="text-[#6B6960]">10/2022 – 02/2025</span>
                </div>
                <p className="text-[#55534B]">
                  Administered enterprise databases on HUE Impala and MySQL. Automated web scraping and SQL pipelines (40% effort reduction) and trained 30+ stakeholders on Looker self-serve querying.
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="pt-4 border-t border-[#E3E1DA]">
            <span className="text-xs font-mono font-bold text-[#141412] uppercase tracking-wider block mb-1">
              Education
            </span>
            <div className="flex justify-between text-xs font-mono">
              <div>
                <strong>BS in Information and Technology</strong> (Major in Business & Data Analytics)
                <div className="text-[#6B6960]">Bulacan State University</div>
              </div>
              <span className="text-[#6B6960]">2018 – 2022</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
