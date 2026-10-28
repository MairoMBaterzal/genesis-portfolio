export interface WorkPhase {
  phaseNumber: number;
  phaseName: string;
  tagline: string;
  duration: string;
  color: string;
  objectives: string[];
  deliverables: string[];
  genesisQuote: string;
  checklist: string[];
}

export interface OperatingStandard {
  category: string;
  title: string;
  description: string;
  sla: string;
  icon: string;
}

export const howIWorkPhases: WorkPhase[] = [
  {
    phaseNumber: 1,
    phaseName: "Discovery & System Audit",
    tagline: "Uncovering bottlenecks, auditing API endpoints, and mapping raw data schemas.",
    duration: "Phase 1 • Days 1 – 3",
    color: "from-blue-500 to-cyan-500",
    objectives: [
      "Audit existing technology stack, CRM schemas, API rate limits, and authentication constraints.",
      "Identify manual friction points causing lost time (e.g. the 40% repetitive manual effort at IQVIA & Premier Fitness).",
      "Map out data flow contracts, security requirements, and primary vs secondary domain protections.",
      "Define quantitative success metrics (e.g. <5% bounce rate, <15s lead response, zero data drift)."
    ],
    deliverables: [
      "System Architecture & Data Flow Contract",
      "API & Rate Limit Feasibility Matrix",
      "Clear Project Milestone Roadmap & Timeframe"
    ],
    genesisQuote: "Before writing a single N8N node or SQL query, I audit the full data lifecycle so we build an architecture that scales without breaking under pressure.",
    checklist: [
      "Webhook and payload payload schemas documented",
      "DNS records (SPF, DKIM, DMARC) pre-verified",
      "Authentication credentials isolated in secure environment variables",
      "Core stakeholder KPIs aligned"
    ]
  },
  {
    phaseNumber: 2,
    phaseName: "Modular Architecture & Sandbox Prototyping",
    tagline: "Building resilient N8N workflows, custom scripts, and error-catch mechanisms.",
    duration: "Phase 2 • Days 4 – 7",
    color: "from-cyan-500 to-teal-500",
    objectives: [
      "Construct modular N8N pipelines with discrete sub-workflows to prevent memory leaks.",
      "Implement custom JavaScript and Python code nodes for data sanitation and formatting.",
      "Integrate OpenAI models with strict JSON schema response formatting.",
      "Build dead-letter queues and automated error-catch branches with instant Slack/Telegram alerting."
    ],
    deliverables: [
      "Functional Staging / Sandbox Workflow Blueprint",
      "Mock Payload Unit Test Suites & Boundary Cases",
      "Automated Anomaly Alerting Webhooks"
    ],
    genesisQuote: "Production systems will experience API timeouts and dirty payloads. I build self-healing pipelines with automatic retries and dead-letter buffering.",
    checklist: [
      "Idempotency verified: duplicate webhooks do not create duplicate CRM deals",
      "Exponential backoff configured on all 3rd party API calls",
      "Graceful fallbacks implemented for AI rate limits or schema deviations",
      "Environment variables separated between dev and production"
    ]
  },
  {
    phaseNumber: 3,
    phaseName: "Canary Rollout & Stress Testing",
    tagline: "Staged deployment, volume ramp curves, and deliverability validation.",
    duration: "Phase 3 • Days 8 – 14",
    color: "from-teal-500 to-emerald-500",
    objectives: [
      "Execute staged traffic migration (10% -> 25% -> 50% -> 100% volume).",
      "Enforce 21-day email mailbox warmup ramp curves (max 25-30 emails/day per box).",
      "Monitor deliverability telemetry: hard bounce rates, spam complaint rates, and DNS alignment.",
      "Verify end-to-end data synchronization between ERP, CRM, and BI reporting tables."
    ],
    deliverables: [
      "Live Deliverability & Sync Health Dashboard",
      "Stress-Test Execution Telemetry Report",
      "Confirmed Zero-Error Canary Gate Signoff"
    ],
    genesisQuote: "Scaling is about discipline. By gradually increasing volume and actively monitoring deliverability, we maintain sub-5% bounce rates across thousands of inboxes.",
    checklist: [
      "Bounce rate confirmed below 3.5% across all sending pools",
      "Database partition write speeds validated under load",
      "CRM deal attribution verified across sales reps",
      "Real-time alerting tested via synthetic error injections"
    ]
  },
  {
    phaseNumber: 4,
    phaseName: "Documentation, Training & Handover",
    tagline: "Empowering stakeholders, authoring SOPs, and enabling self-service analytics.",
    duration: "Phase 4 • Ongoing Support",
    color: "from-emerald-500 to-blue-500",
    objectives: [
      "Produce comprehensive SOPs and video walkthroughs (Notion / Loom) for internal teams.",
      "Deploy self-service Looker / BI dashboards so stakeholders can answer questions independently.",
      "Conduct interactive stakeholder training workshops (proven with 30+ business users at IQVIA).",
      "Establish automated daily/weekly executive summary digests."
    ],
    deliverables: [
      "End-to-End Operational SOP & Runbook",
      "Self-Service Looker / BI Dashboards",
      "Stakeholder Training Sessions & Q&A Recordings",
      "Ongoing Infrastructure Sentinel Monitoring"
    ],
    genesisQuote: "True engineering success means the client's internal team can understand, operate, and self-serve from the system with zero confusion.",
    checklist: [
      "Runbook with step-by-step troubleshooting guide delivered",
      "Cross-functional teams trained on Looker & SQL querying",
      "Nominated twice for Impact Award at IQVIA for presentation & training excellence",
      "Continuous automated health sentinel active"
    ]
  }
];

export const operatingStandards: OperatingStandard[] = [
  {
    category: "Deliverability SLA",
    title: "Sub-5% Hard Bounce Guarantee",
    description: "Every outbound domain and secondary mailbox is monitored every 15 minutes. Any box touching 4.5% bounce is auto-quarantined and rotated.",
    sla: "< 5.0% Bounce Rate (Avg 2.4%)",
    icon: "ShieldCheck"
  },
  {
    category: "Workflow Resilience",
    title: "Zero-Data-Loss Idempotency",
    description: "All webhook ingestion endpoints verify unique event IDs to prevent duplicate transactions, double CRM bookings, or duplicate email sends.",
    sla: "100% Idempotent Execution",
    icon: "Cpu"
  },
  {
    category: "Response Time",
    title: "Sub-15 Second Lead Triage",
    description: "Incoming prospect replies and form submissions are classified by AI and synced to CRM/Slack within seconds, down from 4+ hours of manual delay.",
    sla: "< 15 Second Average Response",
    icon: "Zap"
  },
  {
    category: "Communication & Time Zones",
    title: "Proactive Async & Global Overlap",
    description: "Philippine-based with flexible overlap across US (EST/PST) and EU working hours. Async video walkthroughs, clear Notion SOPs, and daily sprint updates.",
    sla: "Direct daily comms & US overlap",
    icon: "Globe"
  }
];

