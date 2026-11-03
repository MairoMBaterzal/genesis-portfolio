export interface CaseStudy {
  id: string;
  client: string;
  period: string;
  role: string;
  tagline: string;
  badge: string;
  heroMetric: {
    value: string;
    label: string;
  };
  keyMetrics: {
    label: string;
    value: string;
    subtext: string;
  }[];
  challenge: string;
  solution: string[];
  techStack: string[];
  visualAssets?: {
    title: string;
    caption: string;
    imageUrl: string;
  }[];
  liveOutputUrl?: string;
  deliverables: {
    name: string;
    description: string;
    type: 'architecture' | 'code' | 'dashboard' | 'sop';
    dataSnippet?: string;
  }[];
  architectureFlow: {
    stepNumber: number;
    title: string;
    description: string;
    tag: string;
  }[];
  presenterTalkingPoints: string[];
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: "stylsensei-outbound-engine",
    client: "StylSensei (Former Co-Founder)",
    period: "06/2025 – 06/2026",
    role: "Former Co-Founder & Outbound Infrastructure Lead",
    tagline: "Scalable Cold Outbound Engine: 6,000+ Mailboxes, 645k+ Dispatches, 7,090 Positive Replies & 1.0% Bounce Rate",
    badge: "Scale & Revenue Infrastructure",
    heroMetric: {
      value: "645,355",
      label: "Verified Emails Dispatched",
    },
    keyMetrics: [
      {
        label: "Positive Replies",
        value: "7,090",
        subtext: "22.4% positive reply rate",
      },
      {
        label: "Leads Contacted",
        value: "451,749",
        subtext: "4.9% overall reply rate",
      },
      {
        label: "Hard Bounce Rate",
        value: "1.0%",
        subtext: "Strict deliverability held",
      },
      {
        label: "Secondary Inboxes",
        value: "6,000+",
        subtext: "Isolated DNS pools",
      },
    ],
    challenge:
      "High-ticket B2B agencies and growth firms need predictable qualified meetings without risking primary root domains or getting blacklisted by Google and Microsoft spam filters. Scaling to hundreds of thousands of dispatches requires strict DNS authentication, automated inbox warm-up, continuous deliverability monitoring, rapid reply triage, and real-time CRM calendar booking.",
    solution: [
      "Engineered an automated DNS provisioning system across 6,000+ warmed secondary mailboxes using custom tracking domains, SPF, and 2048-bit DKIM keys.",
      "Maintained a verified 1.0% bounce rate across 645,355 total sends and 451,749 leads contacted with zero root domain reputation loss.",
      "Generated 7,090 positive replies (22.4% positive conversion rate) by testing human-first, pain-focused angles with low-friction permission asks.",
      "Orchestrated sub-15 minute reply classification and triage: parsed inbound replies, flagged high-intent responses, and booked discovery calls into client CRMs and calendars.",
      "Closed high-ticket B2B retainer clients and drove qualified C-suite meetings for clients including Practice Growth Co, Taylor Hospitality, Cedar Landscape, Fantastic Fungi, and Healthcare M&A groups."
    ],
    techStack: [
      "Plusvibe.ai",
      "Instantly.ai / Smartlead",
      "Cloudflare DNS / API",
      "SPF / DKIM / DMARC",
      "GoHighLevel & HubSpot CRM",
      "Apollo.io & Clay.com",
      "MillionVerifier",
      "Slack Webhooks",
      "OpenAI API"
    ],
    visualAssets: [
      {
        title: "Verified 645,355 Sends Campaign Dashboard",
        caption: "Instantly performance metrics: 451,749 leads contacted, 7,090 positive replies (22.4%), 1.0% bounce rate, 0% unsubscribe.",
        imageUrl: "/proof/instantly-645k-stats.png"
      },
      {
        title: "Live C-Suite Slack Delivery: Healthcare & Enterprise",
        caption: "MEETING_BOOKED alerts routed to client channels for Presidents, CEOs, and Partners (Cedar Landscape, Phosis, Alliance Environmental, YogaMedics).",
        imageUrl: "/proof/slack-booked-meetings-feed-1.png"
      },
      {
        title: "Live C-Suite Slack Delivery: Brands & Founders",
        caption: "Booked calls handed off to closers for Founders & CEOs (Timeless Tartans, Rubbit, Fantastic Fungi).",
        imageUrl: "/proof/slack-booked-meetings-feed-2.png"
      },
      {
        title: "Sub-15 Minute Lead Triage & Handshake",
        caption: "Taylor Hospitality prospect handoff directly to client Brand Manager Carrie with phone, verified email, and scheduled EST slot.",
        imageUrl: "/proof/slack-booked-meeting-taylor.png"
      }
    ],
    architectureFlow: [
      {
        stepNumber: 1,
        title: "Multi-Domain DNS Provisioning",
        description: "Automated creation of secondary domains with isolated SPF, DKIM (2048-bit), and DMARC (p=quarantine) policies.",
        tag: "Infrastructure"
      },
      {
        stepNumber: 2,
        title: "21-Day Warmup Protocol",
        description: "Programmatic volume escalation with AI peer-to-peer inbox replies to build high sender reputation.",
        tag: "Warmup"
      },
      {
        stepNumber: 3,
        title: "Rotated Sending Engine",
        description: "645k+ emails distributed evenly at max 25-30 emails per inbox per day to maintain zero spam flags.",
        tag: "Delivery"
      },
      {
        stepNumber: 4,
        title: "Reply Triage & Calendar Booking",
        description: "Evaluates inbound sentiment, flags high-intent responses, and automatically alerts Slack & inserts meetings into client calendars.",
        tag: "Conversion"
      }
    ],
    deliverables: [
      {
        name: "Secondary Domain DNS Health Matrix",
        description: "Continuous telemetry verifying MX, SPF, DKIM, and DMARC across 6,000+ mailboxes.",
        type: "dashboard",
        dataSnippet: `DNS Matrix Status: 6,140 / 6,140 Healthy
• SPF: v=spf1 include:_spf.google.com ~all (100% Valid)
• DKIM: 2048-bit selector active on all secondary zones
• DMARC: v=DMARC1; p=quarantine; pct=100; rua=mailto:dmarc-reports@...
• Custom Tracking Domain: SSL-secured, zero shared pool footprint`
      },
      {
        name: "Automated Reply Classifier & Calendar Booking Logic",
        description: "Production webhook flow qualifying prospect replies and scheduling meetings directly in CRM.",
        type: "architecture",
        dataSnippet: `Workflow Payload Handshake:
Inbound Email -> IMAP Listener -> Intent Classifier -> {
  "intent": "POSITIVE_INTEREST",
  "urgency": 94,
  "action": "AUTO_CALENDLY_DISPATCH",
  "assigned_rep": "Executive Closer",
  "crm_stage": "Discovery Call Scheduled"
}`
      }
    ],
    presenterTalkingPoints: [
      "Highlight the verified 645,355 total dispatches with a 22.4% positive reply rate (7,090 positive replies).",
      "Explain why 6,000+ secondary mailboxes were necessary: total root domain protection and zero spam penalties.",
      "Showcase the sub-15 minute Slack booking handoffs for C-suite decision-makers across healthcare, hospitality, and D2C brands."
    ]
  },
  {
    id: "n8n-telegram-lead-agent",
    client: "Autonomous AI Lead Generation Bot",
    period: "2025 – Production",
    role: "AI Automation Developer & Lead Architect",
    tagline: "Voice & Text AI Agent: Scrapes 500+ B2B Leads via Telegram, DeepSeek, Apify & Google Sheets",
    badge: "AI Agent & Web Scraping",
    heroMetric: {
      value: "500+",
      label: "Enriched B2B Leads Scraped on Demand",
    },
    keyMetrics: [
      {
        label: "Input Modality",
        value: "Voice & Text",
        subtext: "Whisper speech-to-text",
      },
      {
        label: "AI Reasoning Core",
        value: "DeepSeek / Gemini",
        subtext: "Tools Agent with Memory",
      },
      {
        label: "Extraction Engine",
        value: "Apify Apollo",
        subtext: "LinkedIn profile enrichment",
      },
      {
        label: "Deduplication",
        value: "100%",
        subtext: "Automated Google Sheet sync",
      },
    ],
    challenge:
      "Sales development reps and agency founders waste hours manually searching Apollo and LinkedIn, filtering criteria, copy-pasting contact info, and formatting spreadsheets. They needed an on-demand AI assistant that accepts natural voice notes or text prompts on Telegram and autonomously delivers clean, deduplicated prospect lists directly into organized Google Sheets.",
    solution: [
      "Engineered an autonomous multi-modal N8N workflow accepting voice notes and text messages via Telegram Bot API.",
      "Routed audio messages through Telegram's file downloader into OpenAI Whisper for instant, accurate voice transcription.",
      "Configured an N8N Tools Agent powered by DeepSeek Chat Model (with dynamic Google Gemini fallback) and conversational session memory.",
      "Built a modular leadScraping sub-workflow calling Apify's Apollo LinkedIn Scraper API with dynamic search parameter URL construction.",
      "Integrated automated deduplication and field normalization before appending verified prospect records into Google Sheets in real-time."
    ],
    techStack: [
      "n8n Workflow Engine",
      "Telegram Bot API",
      "DeepSeek Chat Model",
      "OpenAI Whisper (Speech-to-Text)",
      "Apify (Apollo LinkedIn Scraper)",
      "Google Gemini API",
      "Google Sheets API",
      "Relevance AI"
    ],
    liveOutputUrl: "https://docs.google.com/spreadsheets/d/1SqyXWaz-lVrfNpFQIKRTjDBoeZagXfY4x1ucOi1ZqKs/edit?usp=sharing",
    visualAssets: [
      {
        title: "N8N Lead Agent Architecture",
        caption: "Full multi-modal workflow showing voice transcription, DeepSeek chat agent, and sub-workflow routing.",
        imageUrl: "/case-studies/n8n-agent-architecture.png"
      },
      {
        title: "Apify Scraping & Deduplication Sub-Workflow",
        caption: "Modular N8N pipeline parsing Apollo queries, stripping duplicate entries, and appending clean rows to Google Sheets.",
        imageUrl: "/case-studies/n8n-scraper-subworkflow.png"
      },
      {
        title: "Telegram Conversational Bot Interface",
        caption: "Real interaction where user requests 500 leads for salons in Texas, automatically fulfilled by the bot.",
        imageUrl: "/case-studies/telegram-interaction.png"
      },
      {
        title: "Verified 500-Lead Output Sheet",
        caption: "Enriched prospect records: Full Name, Email, Phone, Location, Company Name, Job Title, Seniority, Website & LinkedIn URL.",
        imageUrl: "/case-studies/scraped-google-sheet.png"
      }
    ],
    architectureFlow: [
      {
        stepNumber: 1,
        title: "Multi-Modal Telegram Ingestion",
        description: "Listens for voice notes or text queries from sales reps on Telegram (e.g. 'Scrape 500 salon leads in Texas').",
        tag: "Trigger"
      },
      {
        stepNumber: 2,
        title: "Speech-to-Text & Reasoning",
        description: "Downloads audio, transcribes with Whisper, and routes to DeepSeek / Gemini Agent with memory context.",
        tag: "AI Reasoning"
      },
      {
        stepNumber: 3,
        title: "Apify Scraper Sub-Workflow",
        description: "Constructs Apollo search query URL, extracts target profiles, and strips duplicates automatically.",
        tag: "Extraction"
      },
      {
        stepNumber: 4,
        title: "Google Sheet Sync & Telegram Ping",
        description: "Appends 500 enriched rows into client Google Sheets and sends confirmation link directly to the user.",
        tag: "Delivery"
      }
    ],
    deliverables: [
      {
        name: "Production N8N Workflow Blueprints",
        description: "Two interconnected workflows: Main conversational Tools Agent + Apollo scraping worker.",
        type: "architecture",
        dataSnippet: `Agent Routing Hierarchy:
Telegram Trigger -> [Voice/Text Router] -> OpenAI Whisper -> DeepSeek Tools Agent -> [Tool: leadScraping] -> Apify Apollo Actor -> Deduplicate -> Google Sheets Append -> Telegram Reply`
      },
      {
        name: "Live 500-Lead Output Spreadsheet",
        description: "Real-world dataset generated autonomously with verified business contact columns.",
        type: "dashboard",
        dataSnippet: `Generated Sheet Columns:
• Full Name • Email Address • Phone Number • Country • Location • Industry
• Company Name • Job Title • Seniority • Website URL • LinkedIn URL`
      }
    ],
    presenterTalkingPoints: [
      "Demonstrates multi-modal capability: Handling both voice notes and text in the same n8n workflow using Whisper and DeepSeek.",
      "Shows modular architecture: Isolating heavy scraping jobs into sub-workflows prevents memory spikes on the main bot.",
      "Point to the real output: Share the live Google Sheet link with 500 verified, deduplicated business contacts."
    ]
  },
  {
    id: "premier-fitness-n8n-automation",
    client: "Premier Fitness",
    period: "02/2025 - 06/2025",
    role: "AI Automation Developer",
    tagline: "Autonomous N8N Operations: Multi-System Data Synchronization & 40% Manual Effort Reduction",
    badge: "AI & Process Automation",
    heroMetric: {
      value: "40%",
      label: "Manual Effort Reduction",
    },
    keyMetrics: [
      {
        label: "Lead Response Time",
        value: "< 15s",
        subtext: "Down from 4+ hours",
      },
      {
        label: "Sync Accuracy",
        value: "99.9%",
        subtext: "Zero orphaned ERP records",
      },
      {
        label: "Integrations Built",
        value: "4+",
        subtext: "OpenAI, ERP, Sheets, CRM",
      },
      {
        label: "Execution Latency",
        value: "320ms",
        subtext: "Real-time webhook pipelines",
      },
    ],
    challenge:
      "Premier Fitness struggled with fragmented SaaS tools: prospective member leads came through web forms and social ads, but staff had to manually copy details into their legacy ERP and CRM systems. This caused delayed follow-ups (averaging 4 hours), data entry errors, and required 15+ hours per week of manual clerical work.",
    solution: [
      "Designed and deployed modular N8N automation workflows connecting front-end capture, OpenAI semantic analysis, Google Sheets, and legacy ERP APIs.",
      "Built custom API connectors with token management, payload sanitation, and automatic retry policies handling transient network failures.",
      "Integrated OpenAI to parse member fitness goals from unstructured text, assigning urgency scores and automatically drafting personalized intro messages.",
      "Automated real-time data synchronization between ERP systems and executive reporting sheets, reducing manual effort by 40% across administrative teams.",
      "Collaborated closely with startup leadership to translate evolving business objectives into resilient, scalable automation blueprints."
    ],
    techStack: [
      "N8N Workflow Engine",
      "OpenAI API (GPT-4o)",
      "Custom REST API Connectors",
      "Legacy ERP Systems",
      "Google Sheets API",
      "HubSpot / CRM Webhooks",
      "JavaScript Code Nodes"
    ],
    architectureFlow: [
      {
        stepNumber: 1,
        title: "Unified Webhook Ingestion",
        description: "Captures lead data from web landing pages and ad channels in real time with schema validation.",
        tag: "Ingest"
      },
      {
        stepNumber: 2,
        title: "AI Semantic Goal Analysis",
        description: "OpenAI parses freeform user goals, predicts member lifetime value tier, and formats structured parameters.",
        tag: "AI Processing"
      },
      {
        stepNumber: 3,
        title: "ERP & CRM Bi-Directional Sync",
        description: "Custom connector upserts member profile into legacy ERP and creates synchronized deal in CRM.",
        tag: "Integration"
      },
      {
        stepNumber: 4,
        title: "Real-Time Telemetry & Alerting",
        description: "Appends transaction record to executive tracking sheets and dispatches instant push notification to staff.",
        tag: "Reporting"
      }
    ],
    deliverables: [
      {
        name: "N8N Custom Connector Architecture",
        description: "Modular node pipeline handling authentication, rate-limiting, and error fallback.",
        type: "code",
        dataSnippet: `// Connector Core Logic:
async function syncToErp(memberPayload) {
  const token = await getValidOAuthToken();
  const res = await fetch('https://erp.premierfitness.internal/api/v2/members', {
    method: 'POST',
    headers: { 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json' },
    body: JSON.stringify(memberPayload)
  });
  if (!res.ok) throw new Error(\`ERP Sync Failed: \${res.statusText}\`);
  return await res.json();
}`
      },
      {
        name: "Real-Time Executive Analytics Pipeline",
        description: "Automated pipeline synchronizing daily trial conversions directly into Google Sheets and BI summaries.",
        type: "dashboard",
        dataSnippet: `Reporting Pipeline Status: Live
• Daily Automated Runs: 24/7 (Instantaneous triggers)
• Manual Data Entry Reduction: 40% verified
• Error Catch Rate: 100% captured via N8N Error Trigger to Slack #alerts`
      }
    ],
    presenterTalkingPoints: [
      "Walk the interviewer through how N8N connects legacy tools without requiring expensive rip-and-replace software.",
      "Demonstrate the 40% time savings: explain how freeing staff from copy-pasting directly boosted lead conversion and trial attendance.",
      "Explain how edge cases (API drops, duplicate submissions) were handled automatically using N8N error branches."
    ]
  },
  {
    id: "iqvia-enterprise-database-analytics",
    client: "IQVIA (Enterprise Healthcare Analytics)",
    period: "10/2022 - 02/2025",
    role: "Sr. Database Support Associate",
    tagline: "Enterprise Database Management, Automated Mining & Self-Service Analytics Architecture",
    badge: "Enterprise Scale & Impact Award",
    heroMetric: {
      value: "2x",
      label: "Impact Award Nominee (Q4 & Q5)",
    },
    keyMetrics: [
      {
        label: "Manual Effort Reduction",
        value: "40%",
        subtext: "Python & SQL automation",
      },
      {
        label: "Stakeholders Trained",
        value: "30+",
        subtext: "Looker & SQL self-service",
      },
      {
        label: "Database Tech",
        value: "Impala / SQL",
        subtext: "High-volume data warehouse",
      },
      {
        label: "Data Integrity SLA",
        value: "99.98%",
        subtext: "Enterprise healthcare standard",
      },
    ],
    challenge:
      "At IQVIA, enterprise analytics teams relied heavily on manual data scraping, tedious SQL query runs, and ad-hoc report requests. This caused significant bottlenecks for data delivery, high operational overhead, and dependencies on database specialists for standard business questions.",
    solution: [
      "Automated complex data scraping and mining processes using Python and SQL on HUE Impala and MySQL, cutting repetitive manual turnaround by 40%.",
      "Administered and optimized large-scale enterprise databases, enforcing rigorous data integrity, partition management, and security compliance.",
      "Collaborated with cross-functional technical teams to troubleshoot database issues, implement API integrations, and streamline ETL workflows.",
      "Authored comprehensive database documentation and conducted training sessions for cross-functional stakeholders on Looker and SQL for self-service analytics.",
      "Nominated twice for the prestigious Impact Award (Q4 & Q5) for outstanding performance, rapid tool familiarization, and presentation excellence."
    ],
    techStack: [
      "HUE Impala",
      "MySQL & PostgreSQL",
      "Python (Pandas, BeautifulSoup)",
      "Looker (LookML & Dashboards)",
      "Azure Cloud",
      "Enterprise SQL Optimization",
      "Advanced Excel & Data Modeling"
    ],
    architectureFlow: [
      {
        stepNumber: 1,
        title: "Automated Data Scraping & Mining",
        description: "Scheduled Python mining scripts ingest raw healthcare market datasets with automated retries and schema checks.",
        tag: "Mining"
      },
      {
        stepNumber: 2,
        title: "HUE Impala Partitioning & Staging",
        description: "Data loaded into partitioned analytical warehouse tables with indexing optimized for heavy multi-table joins.",
        tag: "Data Warehouse"
      },
      {
        stepNumber: 3,
        title: "Looker Self-Service Semantic Layer",
        description: "Modeled LookML views and explores allowing business users to slice and dice data without writing raw SQL.",
        tag: "BI Modeling"
      },
      {
        stepNumber: 4,
        title: "Stakeholder Empowerment & SOPs",
        description: "Conducted hands-on training sessions and produced SOP documentation for business analysts across departments.",
        tag: "Governance"
      }
    ],
    deliverables: [
      {
        name: "Enterprise Data Mining Automation Engine",
        description: "Python and SQL extraction routines that reduced manual query preparation time by 40%.",
        type: "code",
        dataSnippet: `# Enterprise Mining Pipeline
# Reduced manual turnaround from 3 days to under 20 minutes
# Automated schema validation and Impala bulk insertion`
      },
      {
        name: "Looker Self-Service BI Implementation & Training",
        description: "Standardized dimensions, measures, and intuitive dashboards adopted by 30+ enterprise stakeholders.",
        type: "sop",
        dataSnippet: `Stakeholder Training Modules Conducted:
1. SQL Fundamentals for Business Users (Cohort analysis & aggregations)
2. Looker Self-Serve Exploration (Building custom reports without dev tickets)
3. Data Governance & Anomaly Detection Checklist`
      }
    ],
    presenterTalkingPoints: [
      "Highlight the Impact Award nominations in consecutive quarters (Q4 & Q5): proof of fast learning curve and high presentation standards.",
      "Show how technical optimization directly translates to business enablement: training 30+ stakeholders so they could answer their own queries in Looker.",
      "Emphasize enterprise reliability: working with large-scale data systems (HUE Impala, Azure) requiring zero tolerance for data corruption or downtime."
    ]
  }
];
