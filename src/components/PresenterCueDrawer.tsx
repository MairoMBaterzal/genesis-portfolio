import React from 'react';
import {
  X,
  MessageSquareQuote,
  Target,
  Sparkles,
  HelpCircle,
  Lightbulb,
  CheckCircle2,
  Minimize2
} from 'lucide-react';

interface PresenterCueDrawerProps {
  activeTab: number;
  isOpen: boolean;
  onClose: () => void;
}

export const PresenterCueDrawer: React.FC<PresenterCueDrawerProps> = ({
  activeTab,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const talkingPointsMap = [
    {
      tab: 0,
      title: "Page 1: Competency & Technical Depth",
      timeAllocation: "2 - 3 Minutes",
      mainGoal: "Establish credibility across N8N, high-volume email infrastructure, and enterprise data engineering.",
      bullets: [
        "Introduce yourself as an AI Automation Architect & Enterprise Data Engineer with hands-on scale: 500,000+ monthly outbound emails and enterprise SQL at IQVIA.",
        "Emphasize the dual capability: You don't just 'connect tools'—you write custom JavaScript/Python code nodes and architect multi-database pipelines.",
        "Point to the 40% manual effort reduction metric verified across both Premier Fitness and IQVIA.",
        "Offer to show them actual code snippets or DNS audit routines by clicking any card."
      ],
      interviewerQuestions: [
        {
          q: "What makes you different from someone who just clicks around in Zapier or Make?",
          a: "I architect idempotent systems with custom JS/Python code nodes, database partitioning, and enterprise error-catch policies—tested on 6,000+ inboxes and IQVIA healthcare data."
        }
      ]
    },
    {
      tab: 1,
      title: "Page 2: Proven Case Studies",
      timeAllocation: "3 - 5 Minutes",
      mainGoal: "Prove commercial results, high volume delivery, and problem-solving through real numbers.",
      bullets: [
        "StylSensei: Walk through how you orchestrated 6,000+ warmed secondary mailboxes and 500,000 emails/month while keeping hard bounce rates under 2.8%. Highlight that you also closed B2B retainers directly.",
        "Premier Fitness: Explain how N8N unified disparate ERP, CRM, and OpenAI systems to cut manual clerical work by 40% and drop response times to under 15 seconds.",
        "IQVIA: Emphasize the enterprise scale (HUE Impala, MySQL), automated Python mining, and the 2x Impact Award nomination for presentations and tool adoption."
      ],
      interviewerQuestions: [
        {
          q: "How did you maintain a sub-5% bounce rate at 500k monthly scale?",
          a: "Automated list cleaning, multi-domain DNS isolation (SPF/DKIM/DMARC), 21-day warmup curves, and auto-quarantining any mailbox touching 4.5% bounce."
        }
      ]
    },
    {
      tab: 2,
      title: "Page 3: Interactive Workflows & Outputs",
      timeAllocation: "3 - 4 Minutes",
      mainGoal: "Deliver the 'wow' moment by walking through live node execution and inspecting real JSON schemas.",
      bullets: [
        "Click the 'Run Live Simulation' button on screen to demonstrate the data flowing through nodes in real-time.",
        "Click on the OpenAI node or Sanitizer node to show the input payload, custom JavaScript, and structured output.",
        "Explain how error-handling is built into every step so the automation never hangs silently in production.",
        "Switch between the 3 blueprints: Lead Triage, Mailbox Sentinel, and Enterprise Scraping to show versatility."
      ],
      interviewerQuestions: [
        {
          q: "How do you handle API rate limits and unexpected schema changes?",
          a: "Exponential backoff retries, schema validation gates, and dead-letter queue routing with immediate Slack alerts."
        }
      ]
    },
    {
      tab: 3,
      title: "Page 4: How I Work & Standards (SOPs)",
      timeAllocation: "2 - 3 Minutes",
      mainGoal: "Show that you are reliable, structured, self-directed, and communicate clearly.",
      bullets: [
        "Walk through your 4-phase framework: Discovery & Audit -> Modular Sandbox Architecture -> Canary Rollout -> SOP Documentation & Training.",
        "Mention your Looker/SQL training experience at IQVIA: you don't keep knowledge siloed; you train internal teams so they can self-serve.",
        "Highlight your communication habits: proactive Loom walkthroughs, documented Notion runbooks, and direct overlap with US/global time zones.",
        "Close with readiness to conduct an audit or tackle a pilot automation within week one."
      ],
      interviewerQuestions: [
        {
          q: "How do you manage timezone differences?",
          a: "I work with US and EU overlap, use asynchronous video documentation (Loom), and keep daily sprint updates transparent in Slack/Notion."
        }
      ]
    }
  ];

  const currentCue = talkingPointsMap[activeTab] || talkingPointsMap[0];

  return (
    <div className="fixed top-20 right-4 z-50 w-80 sm:w-96 max-h-[calc(100vh-120px)] overflow-y-auto rounded-2xl bg-slate-900/95 border border-cyan-500/30 shadow-2xl shadow-black/90 p-5 backdrop-blur-xl animate-in slide-in-from-right duration-200">
      
      {/* Header */}
      <div className="flex items-start justify-between gap-3 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400">
            <MessageSquareQuote className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              Presenter Talking Points
            </h3>
            <span className="text-[11px] text-cyan-400 font-medium">
              {currentCue.timeAllocation} target
            </span>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Main Focus */}
      <div className="mt-3 p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300">
        <div className="flex items-center gap-1.5 font-semibold text-cyan-300 mb-1">
          <Target className="w-3.5 h-3.5" />
          <span>Screen-Share Objective</span>
        </div>
        <p className="text-slate-300 text-[11px] leading-relaxed">
          {currentCue.mainGoal}
        </p>
      </div>

      {/* Key Talking Points */}
      <div className="mt-4">
        <h4 className="text-xs font-semibold text-slate-200 flex items-center gap-1.5 mb-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>What to emphasize on this slide:</span>
        </h4>
        <ul className="space-y-2">
          {currentCue.bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Common Question Handler */}
      {currentCue.interviewerQuestions.length > 0 && (
        <div className="mt-4 pt-3 border-t border-slate-800">
          <h4 className="text-xs font-semibold text-amber-300 flex items-center gap-1.5 mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>Likely Interview Question:</span>
          </h4>
          {currentCue.interviewerQuestions.map((qa, idx) => (
            <div key={idx} className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs">
              <p className="font-semibold text-slate-200 mb-1">Q: "{qa.q}"</p>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                <strong className="text-amber-300">Answer: </strong>
                {qa.a}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Hint */}
      <p className="mt-3 text-[10px] text-slate-500 text-center">
        Tip: Press <kbd className="px-1 py-0.5 bg-slate-800 rounded text-slate-300">←</kbd> or <kbd className="px-1 py-0.5 bg-slate-800 rounded text-slate-300">→</kbd> to change slides while talking.
      </p>

    </div>
  );
};

