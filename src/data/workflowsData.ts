export interface WorkflowNode {
  id: string;
  name: string;
  type: 'trigger' | 'action' | 'ai' | 'condition' | 'database' | 'integration';
  icon: string;
  summary: string;
  config: {
    runtime: string;
    endpoint?: string;
    timeout?: string;
    retryPolicy?: string;
    description: string;
  };
  inputPayload: Record<string, any>;
  customScript?: string;
  outputPayload: Record<string, any>;
  executionStats: {
    latencyMs: number;
    memoryKb: number;
    status: 'success' | 'warning' | 'error';
  };
  coords: { x: number; y: number };
}

export interface WorkflowBlueprint {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  businessImpact: string;
  nodes: WorkflowNode[];
  edges: { from: string; to: string; label?: string }[];
  simulationLogs: {
    timestampOffsetMs: number;
    nodeId: string;
    logText: string;
    level: 'info' | 'success' | 'warn';
  }[];
}

export const workflowsData: WorkflowBlueprint[] = [
  {
    id: "telegram-ai-lead-scraper",
    title: "Autonomous Telegram Lead Generation Agent & Apify Scraper",
    subtitle: "Multi-modal voice & text Telegram bot, OpenAI Whisper transcription, DeepSeek reasoning agent with memory, and Apify Apollo scraping sub-workflow.",
    category: "AI Agent & Web Scraping (Canva Portfolio)",
    businessImpact: "Scraped, deduplicated, and enriched 500+ B2B leads into Google Sheets on demand via simple voice/text prompts.",
    nodes: [
      {
        id: "tg-node-1",
        name: "Telegram Trigger",
        type: "trigger",
        icon: "Send",
        summary: "Captures inbound voice notes or text prompts sent to @LeadGenerationJoeBot.",
        config: {
          runtime: "Telegram Bot API (Long Polling / Webhook)",
          endpoint: "POST /bot<TOKEN>/getUpdates",
          timeout: "5000ms",
          description: "Listens for voice notes (.ogg) or text commands from sales reps on Telegram."
        },
        inputPayload: {
          update_id: 8492011,
          message: {
            message_id: 142,
            from: { id: 9182371, first_name: "Genesis", username: "genesisauza" },
            chat: { id: 9182371, type: "private" },
            date: 1793205000,
            text: "Please create a list of 500 leads for Salons in Texas with owners and managers."
          }
        },
        outputPayload: {
          sender_id: 9182371,
          sender_name: "Genesis",
          raw_message_text: "Please create a list of 500 leads for Salons in Texas with owners and managers.",
          has_voice: false,
          content_type: "text"
        },
        executionStats: {
          latencyMs: 18,
          memoryKb: 340,
          status: "success"
        },
        coords: { x: 50, y: 140 }
      },
      {
        id: "tg-node-2",
        name: "Voice or Text Router",
        type: "condition",
        icon: "GitBranch",
        summary: "Rules node determining whether input is an audio file or raw text.",
        config: {
          runtime: "N8N Switch / IF Rules Node",
          description: "If voice file, routes to Telegram File Downloader -> OpenAI Whisper. If text, routes directly to Lead Agent."
        },
        inputPayload: {
          content_type: "text"
        },
        outputPayload: {
          route_taken: "TEXT_BRANCH",
          evaluation: "content_type == 'text' -> bypass Whisper, forward to Lead Agent"
        },
        executionStats: {
          latencyMs: 4,
          memoryKb: 90,
          status: "success"
        },
        coords: { x: 270, y: 140 }
      },
      {
        id: "tg-node-3",
        name: "Lead Generation Tools Agent",
        type: "ai",
        icon: "Sparkles",
        summary: "Autonomous N8N Tools Agent powered by DeepSeek Chat Model with conversation memory.",
        config: {
          runtime: "DeepSeek API (deepseek-chat) + Simple Memory",
          endpoint: "https://api.deepseek.com/chat/completions",
          timeout: "15000ms",
          description: "Parses target industry ('Salons'), geo ('Texas'), count (500), and invokes the leadScraping tool."
        },
        inputPayload: {
          system_prompt: "You are Lead Generation Joe. Use the leadScraping tool to find B2B prospects and save them to Google Sheets.",
          user_prompt: "Please create a list of 500 leads for Salons in Texas with owners and managers.",
          memory_history: ["Previous context: User asked for IT leads in NY"]
        },
        outputPayload: {
          action: "CALL_TOOL",
          tool_name: "leadScraping",
          tool_arguments: {
            industry: "salon",
            location: "Texas, United States",
            seniority: ["owner", "manager", "director"],
            target_count: 500
          },
          reasoning: "User requested 500 salon leads in Texas with decision-maker roles."
        },
        executionStats: {
          latencyMs: 420,
          memoryKb: 780,
          status: "success"
        },
        coords: { x: 500, y: 140 }
      },
      {
        id: "tg-node-4",
        name: "Apify Apollo LinkedIn Scraper",
        type: "action",
        icon: "Terminal",
        summary: "Sub-workflow executing Apify actor, extracting contacts, and filtering duplicates.",
        config: {
          runtime: "Apify REST API v2 + N8N Sub-Workflow",
          endpoint: "POST https://api.apify.com/v2/acts/apollo-scraper/run-sync",
          timeout: "60000ms",
          retryPolicy: "2 retries with backoff",
          description: "Runs Apollo query, extracts 500 verified records, removes duplicates, and appends to Google Sheets."
        },
        inputPayload: {
          industry: "salon",
          location: "Texas",
          limit: 500
        },
        customScript: `// N8N Sub-Workflow: Deduplication & Sheet Prep
const items = $input.all();
const seen = new Set();
const cleanLeads = [];

for (const item of items) {
  const email = (item.json.email || '').toLowerCase().trim();
  if (email && !seen.has(email)) {
    seen.add(email);
    cleanLeads.push({
      json: {
        full_name: item.json.name,
        email_address: email,
        phone_number: item.json.phone || 'N/A',
        country: 'United States',
        location: item.json.city + ', Texas',
        industry: 'salon',
        company_name: item.json.company_name,
        job_title: item.json.title,
        seniority: item.json.seniority || 'owner',
        website_url: item.json.website,
        linkedin_url: item.json.linkedin_url
      }
    });
  }
}
return cleanLeads;`,
        outputPayload: {
          scraped_count: 500,
          duplicates_removed: 14,
          google_sheet_rows_added: 500,
          sheet_url: "https://docs.google.com/spreadsheets/d/1SqyXWaz-lVrfNpFQIKRTjDBoeZagXfY4x1ucOi1ZqKs/edit?usp=sharing"
        },
        executionStats: {
          latencyMs: 1850,
          memoryKb: 4200,
          status: "success"
        },
        coords: { x: 730, y: 140 }
      },
      {
        id: "tg-node-5",
        name: "Telegram Response Dispatcher",
        type: "integration",
        icon: "Bell",
        summary: "Sends completion message with live Google Sheets link directly to Telegram.",
        config: {
          runtime: "Telegram Bot API",
          endpoint: "POST /bot<TOKEN>/sendMessage",
          timeout: "3000ms",
          description: "Dispatches friendly confirmation with sheet link to the sales rep."
        },
        inputPayload: {
          chat_id: 9182371,
          text: "Done! I've added 500 new salon leads in Texas to the Google Sheet. These include owners, managers, and directors."
        },
        outputPayload: {
          message_id: 143,
          delivered: true
        },
        executionStats: {
          latencyMs: 82,
          memoryKb: 150,
          status: "success"
        },
        coords: { x: 960, y: 140 }
      }
    ],
    edges: [
      { from: "tg-node-1", to: "tg-node-2", label: "Telegram Message" },
      { from: "tg-node-2", to: "tg-node-3", label: "Text Forwarded" },
      { from: "tg-node-3", to: "tg-node-4", label: "Tool Call: leadScraping" },
      { from: "tg-node-4", to: "tg-node-5", label: "500 Leads Synced" }
    ],
    simulationLogs: [
      { timestampOffsetMs: 0, nodeId: "tg-node-1", logText: "Telegram update received: user requested 500 salon leads in Texas", level: "info" },
      { timestampOffsetMs: 25, nodeId: "tg-node-2", logText: "Content router detected text input -> forwarded directly to Lead Agent", level: "info" },
      { timestampOffsetMs: 460, nodeId: "tg-node-3", logText: "DeepSeek Chat Model reasoned target filters -> triggered tool: leadScraping", level: "success" },
      { timestampOffsetMs: 2310, nodeId: "tg-node-4", logText: "Apify Apollo sub-workflow scraped 500 records, deduplicated, and appended to Google Sheets", level: "success" },
      { timestampOffsetMs: 2400, nodeId: "tg-node-5", logText: "Telegram confirmation sent to Genesis with Google Sheets URL in 2.4s total latency", level: "success" }
    ]
  },
  {
    id: "ai-lead-crm-sync",
    title: "AI Lead Qualification & Instant CRM Sync Pipeline",
    subtitle: "Real-time webhook ingestion, GPT-4o semantic intent scoring, ERP capacity check, and automated calendar dispatch.",
    category: "AI & Process Automation (Premier Fitness / StylSensei)",
    businessImpact: "Reduced response time from 4 hours to <15 seconds; eliminated 40% of manual data entry.",
    nodes: [
      {
        id: "node-1",
        name: "Webhook Trigger",
        type: "trigger",
        icon: "Webhook",
        summary: "Receives raw lead payload from landing pages and outbound replies.",
        config: {
          runtime: "N8N HTTP Webhook",
          endpoint: "POST /webhook/v1/inbound-lead",
          timeout: "5000ms",
          retryPolicy: "None (Entry Point)",
          description: "Listens for JSON payload containing prospect name, email, phone, and freeform text response."
        },
        inputPayload: {
          headers: {
            "content-type": "application/json",
            "x-forwarded-for": "198.51.100.42"
          },
          body: {
            prospect_name: "Marcus Vance",
            email: "marcus.vance@apexgroup.com",
            phone: "+1 (555) 234-8910",
            raw_text: "Hey Genesis, I saw your outbound breakdown. We have 4 sales reps and our CRM is a mess. Do you have 20 mins to show us how you set up the N8N workflows this Thursday afternoon?"
          }
        },
        outputPayload: {
          received_at: "2026-10-28T14:32:01.104Z",
          clean_email: "marcus.vance@apexgroup.com",
          prospect_name: "Marcus Vance",
          phone_raw: "+1 (555) 234-8910",
          inbound_channel: "Cold_Outbound_Reply"
        },
        executionStats: {
          latencyMs: 14,
          memoryKb: 412,
          status: "success"
        },
        coords: { x: 50, y: 140 }
      },
      {
        id: "node-2",
        name: "Data Sanitizer & Normalizer",
        type: "action",
        icon: "Code",
        summary: "Custom JS node enforcing E.164 phone formats and email domain validation.",
        config: {
          runtime: "Node.js (ES2022)",
          timeout: "2000ms",
          retryPolicy: "3 retries with exponential backoff",
          description: "Strips invalid characters, normalizes phone numbers to standard format, and flags corporate domains."
        },
        inputPayload: {
          prospect_name: "Marcus Vance",
          clean_email: "marcus.vance@apexgroup.com",
          phone_raw: "+1 (555) 234-8910"
        },
        customScript: `// N8N Custom Code Node: Sanitizer
const raw = $json;
const cleanPhone = raw.phone_raw.replace(/[^\\d+]/g, '');
const isCorporate = !raw.clean_email.match(/(gmail|yahoo|outlook|hotmail)\\.com$/i);

return {
  lead_id: 'ld_' + Date.now(),
  full_name: raw.prospect_name.trim(),
  email: raw.clean_email.toLowerCase(),
  phone_e164: cleanPhone,
  is_b2b_corporate: isCorporate,
  domain: raw.clean_email.split('@')[1],
  raw_message: raw.raw_text
};`,
        outputPayload: {
          lead_id: "ld_1793202812",
          full_name: "Marcus Vance",
          email: "marcus.vance@apexgroup.com",
          phone_e164: "+15552348910",
          is_b2b_corporate: true,
          domain: "apexgroup.com",
          status: "SANITIZED"
        },
        executionStats: {
          latencyMs: 8,
          memoryKb: 180,
          status: "success"
        },
        coords: { x: 260, y: 140 }
      },
      {
        id: "node-3",
        name: "OpenAI Semantic Intent",
        type: "ai",
        icon: "Sparkles",
        summary: "GPT-4o classifies prospect urgency, buyer tier, and meeting readiness.",
        config: {
          runtime: "OpenAI REST API (gpt-4o-mini)",
          endpoint: "POST /v1/chat/completions",
          timeout: "8000ms",
          retryPolicy: "2 retries on 429 / 5xx",
          description: "Enforces structured JSON format. Extracts sentiment, urgency score (1-100), and recommended action."
        },
        inputPayload: {
          model: "gpt-4o-mini",
          temperature: 0.1,
          response_format: { type: "json_object" },
          lead_text: "Hey Genesis, I saw your outbound breakdown. We have 4 sales reps and our CRM is a mess. Do you have 20 mins to show us how you set up the N8N workflows this Thursday afternoon?"
        },
        outputPayload: {
          intent: "HIGH_INTENT_MEETING_REQUEST",
          urgency_score: 95,
          buyer_tier: "TIER_1_B2B",
          pain_points: ["CRM disorder", "Team of 4 sales reps", "Automation pipeline need"],
          timeframe_requested: "Thursday afternoon",
          confidence: 0.98,
          recommended_route: "INSTANT_CALENDAR_DISPATCH"
        },
        executionStats: {
          latencyMs: 342,
          memoryKb: 620,
          status: "success"
        },
        coords: { x: 480, y: 140 }
      },
      {
        id: "node-4",
        name: "Intent Branch Router",
        type: "condition",
        icon: "GitBranch",
        summary: "Evaluates score >= 80 to route directly to VIP booking vs standard nurture.",
        config: {
          runtime: "N8N Switch / IF Condition",
          description: "Splits payload into True (High Urgency VIP lead) and False (Low Intent / Standard Nurture)."
        },
        inputPayload: {
          urgency_score: 95,
          intent: "HIGH_INTENT_MEETING_REQUEST"
        },
        outputPayload: {
          branch: "HIGH_URGENCY_VIP",
          evaluation: "PASSED: urgency_score >= 80 (Actual: 95)"
        },
        executionStats: {
          latencyMs: 3,
          memoryKb: 90,
          status: "success"
        },
        coords: { x: 700, y: 140 }
      },
      {
        id: "node-5",
        name: "CRM Upsert & Deal Creator",
        type: "integration",
        icon: "Database",
        summary: "Upserts contact in HubSpot/CRM and opens high-value discovery deal.",
        config: {
          runtime: "HubSpot API v3",
          endpoint: "POST /crm/v3/objects/contacts",
          timeout: "4000ms",
          retryPolicy: "Exponential backoff (3 attempts)",
          description: "Matches by email to prevent duplicate contacts, links corporate company record, and attaches deal."
        },
        inputPayload: {
          properties: {
            email: "marcus.vance@apexgroup.com",
            firstname: "Marcus",
            lastname: "Vance",
            lead_urgency: "95",
            lead_status: "VIP_QUALIFIED_DISCOVERY"
          }
        },
        outputPayload: {
          contact_id: "hs_9481029",
          deal_id: "deal_741029",
          deal_stage: "Discovery Call Requested",
          amount: 6000.00,
          status: "CREATED_AND_LINKED"
        },
        executionStats: {
          latencyMs: 185,
          memoryKb: 380,
          status: "success"
        },
        coords: { x: 920, y: 70 }
      },
      {
        id: "node-6",
        name: "Slack VIP Dispatch & Alert",
        type: "integration",
        icon: "Bell",
        summary: "Sends rich formatted notification card to sales closer with Calendly link.",
        config: {
          runtime: "Slack Webhook API",
          endpoint: "POST /services/T00/B00/XXXX",
          timeout: "3000ms",
          description: "Alerts executive rep with prospect context, pain points, and one-click phone dialer."
        },
        inputPayload: {
          channel: "#vip-leads-urgent",
          text: "🔥 High Intent Lead: Marcus Vance from apexgroup.com (Score 95/100). Needs Thursday afternoon discovery call."
        },
        outputPayload: {
          slack_message_ts: "1793202813.004200",
          delivered: true
        },
        executionStats: {
          latencyMs: 110,
          memoryKb: 210,
          status: "success"
        },
        coords: { x: 1140, y: 70 }
      }
    ],
    edges: [
      { from: "node-1", to: "node-2", label: "Raw Payload" },
      { from: "node-2", to: "node-3", label: "Sanitized JSON" },
      { from: "node-3", to: "node-4", label: "Intent Score: 95" },
      { from: "node-4", to: "node-5", label: "Score >= 80 (VIP)" },
      { from: "node-5", to: "node-6", label: "Deal Created" }
    ],
    simulationLogs: [
      { timestampOffsetMs: 0, nodeId: "node-1", logText: "Webhook listener received POST from landing form (200 OK)", level: "info" },
      { timestampOffsetMs: 30, nodeId: "node-2", logText: "Data sanitizer normalized phone to +15552348910 and verified corporate domain", level: "info" },
      { timestampOffsetMs: 380, nodeId: "node-3", logText: "OpenAI GPT-4o analyzed reply: Urgency 95/100, Tier: TIER_1_B2B", level: "success" },
      { timestampOffsetMs: 410, nodeId: "node-4", logText: "Condition router evaluated: 95 >= 80 -> Route to VIP Pipeline", level: "info" },
      { timestampOffsetMs: 600, nodeId: "node-5", logText: "CRM Contact #hs_9481029 & Deal #deal_741029 successfully created", level: "success" },
      { timestampOffsetMs: 720, nodeId: "node-6", logText: "Slack VIP notification dispatched to #vip-leads-urgent in 720ms total latency", level: "success" }
    ]
  },
  {
    id: "outbound-mailbox-sentinel",
    title: "6,000+ Mailbox Health & Deliverability Sentinel",
    subtitle: "Automated cron telemetry monitoring SMTP health, DNS record drift, hard bounce thresholds, and dynamic pool rotation.",
    category: "Infrastructure & Outbound Engineering (StylSensei)",
    businessImpact: "Protected 6,000+ warmed mailboxes; held hard bounce rates consistently below 2.8% at 500k monthly volume.",
    nodes: [
      {
        id: "mb-node-1",
        name: "Cron Schedule Trigger",
        type: "trigger",
        icon: "Clock",
        summary: "Executes every 15 minutes across all active mailbox clusters.",
        config: {
          runtime: "N8N Cron Interval (*/15 * * * *)",
          timeout: "60000ms",
          retryPolicy: "Immediate restart on failure",
          description: "Regular polling cycle inspecting deliverability stats across 6,000 secondary inboxes."
        },
        inputPayload: {
          cron_expression: "*/15 * * * *",
          execution_epoch: 1793203200,
          target_cluster_size: 6140
        },
        outputPayload: {
          batch_id: "audit_batch_20261028_1445",
          inboxes_to_poll: 6140,
          status: "POLL_INITIATED"
        },
        executionStats: {
          latencyMs: 12,
          memoryKb: 340,
          status: "success"
        },
        coords: { x: 50, y: 140 }
      },
      {
        id: "mb-node-2",
        name: "Fetch SMTP & ESP Telemetry",
        type: "integration",
        icon: "Server",
        summary: "Pulls hard bounce, spam complaints, and connection statuses via API.",
        config: {
          runtime: "Smartlead / Instantly / Google Workspace API",
          endpoint: "GET /api/v1/mailboxes/telemetry-batch",
          timeout: "15000ms",
          description: "Retrieves sending volume, soft/hard bounce events, and authentication state."
        },
        inputPayload: {
          time_window: "LAST_24_HOURS",
          metric_thresholds: { max_bounce_rate: 0.045 }
        },
        outputPayload: {
          total_audited: 6140,
          healthy_count: 6128,
          anomalies_detected: 12,
          flagged_mailboxes: [
            { email: "outreach@secondary-hub-49.com", bounce_rate: 0.052, reason: "Sudden bounce spike" },
            { email: "connect@growth-reach-12.com", bounce_rate: 0.048, reason: "DKIM DNS drift" }
          ]
        },
        executionStats: {
          latencyMs: 480,
          memoryKb: 1240,
          status: "warning"
        },
        coords: { x: 280, y: 140 }
      },
      {
        id: "mb-node-3",
        name: "Threshold Breach Evaluator",
        type: "condition",
        icon: "ShieldAlert",
        summary: "Identifies any inboxes exceeding 4.5% bounce or with DNS discrepancies.",
        config: {
          runtime: "Python Custom Evaluation Node",
          description: "Runs statistical anomaly check. If bounce > 4.5%, auto-quarantines the inbox to protect root domain reputation."
        },
        inputPayload: {
          anomalies_count: 12,
          hard_limit: 0.045
        },
        customScript: `# Mailbox Health Evaluator
def evaluate_inbox_health(inboxes):
    quarantine_list = []
    for box in inboxes:
        if box.get('bounce_rate', 0) > 0.045 or box.get('dns_verified') is False:
            quarantine_list.append({
                'mailbox': box['email'],
                'action': 'IMMEDIATE_PAUSE_AND_ROTATE',
                'severity': 'CRITICAL'
            })
    return quarantine_list`,
        outputPayload: {
          action_required: true,
          boxes_to_pause: 12,
          severity: "ELEVATED"
        },
        executionStats: {
          latencyMs: 15,
          memoryKb: 210,
          status: "success"
        },
        coords: { x: 510, y: 140 }
      },
      {
        id: "mb-node-4",
        name: "Auto-Pause & Pool Rotation",
        type: "action",
        icon: "RotateCw",
        summary: "Pauses compromised inboxes immediately and activates warm reserves.",
        config: {
          runtime: "Multi-ESP API Connector",
          endpoint: "POST /mailboxes/pause-and-swap",
          timeout: "5000ms",
          description: "Swaps degraded mailboxes with pre-warmed reserve inboxes without interrupting campaign delivery."
        },
        inputPayload: {
          paused_inboxes: 12,
          replacement_pool: "WARMED_TIER_A_RESERVES"
        },
        outputPayload: {
          paused_successfully: 12,
          activated_replacements: 12,
          campaign_disruption: "0% (Hot-swapped in 1.4s)"
        },
        executionStats: {
          latencyMs: 290,
          memoryKb: 430,
          status: "success"
        },
        coords: { x: 740, y: 140 }
      },
      {
        id: "mb-node-5",
        name: "Telegram / Slack Alert Sentinel",
        type: "integration",
        icon: "Send",
        summary: "Dispatches technical incident report with DNS repair instructions.",
        config: {
          runtime: "Telegram Bot API",
          endpoint: "POST /bot<TOKEN>/sendMessage",
          timeout: "2500ms",
          description: "Notifies Genesis Auza and infrastructure team with exact DKIM/SPF remediation steps."
        },
        inputPayload: {
          recipient: "@genesis_infra_sentinel",
          message: "⚠️ 12 Mailboxes auto-paused to maintain sub-5% SLA. 12 Warm reserve boxes hot-swapped into rotation."
        },
        outputPayload: {
          message_id: 849201,
          delivered: true
        },
        executionStats: {
          latencyMs: 95,
          memoryKb: 150,
          status: "success"
        },
        coords: { x: 970, y: 140 }
      }
    ],
    edges: [
      { from: "mb-node-1", to: "mb-node-2", label: "6,140 Inboxes" },
      { from: "mb-node-2", to: "mb-node-3", label: "Telemetry Matrix" },
      { from: "mb-node-3", to: "mb-node-4", label: "12 At-Risk Detected" },
      { from: "mb-node-4", to: "mb-node-5", label: "Hot Swap Executed" }
    ],
    simulationLogs: [
      { timestampOffsetMs: 0, nodeId: "mb-node-1", logText: "Cron schedule fired: querying 6,140 mailboxes across 48 domain zones", level: "info" },
      { timestampOffsetMs: 500, nodeId: "mb-node-2", logText: "Telemetry collected: 6,128 healthy, 12 exceeding 4.5% bounce threshold", level: "warn" },
      { timestampOffsetMs: 530, nodeId: "mb-node-3", logText: "Decision rule triggered: Auto-quarantine condition verified", level: "info" },
      { timestampOffsetMs: 840, nodeId: "mb-node-4", logText: "Swapped 12 degraded inboxes with 12 warmed reserve mailboxes. Zero campaign drop.", level: "success" },
      { timestampOffsetMs: 950, nodeId: "mb-node-5", logText: "Telegram Sentinel notification delivered to Genesis in 950ms.", level: "success" }
    ]
  }
];
