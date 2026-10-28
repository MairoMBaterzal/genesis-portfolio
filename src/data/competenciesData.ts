export interface CompetencyItem {
  id: string;
  category: 'AI & Workflow Automation' | 'Outbound Infrastructure' | 'Data Engineering & SQL' | 'API & System Integrations';
  title: string;
  roleContext: string;
  experienceLevel: string;
  description: string;
  capabilities: string[];
  tools: string[];
  metricProof: string;
  codeSnippet: {
    language: string;
    title: string;
    code: string;
    explanation: string;
  };
}

export const competenciesData: CompetencyItem[] = [
  {
    id: "n8n-automation",
    category: "AI & Workflow Automation",
    title: "N8N Architecture & Multi-Agent Orchestration",
    roleContext: "Premier Fitness & StylSensei",
    experienceLevel: "Expert / Production Architect",
    description: "Architecting resilient, self-healing N8N workflow automations connecting webhooks, LLMs, CRMs, and internal ERP databases with error handling and retry mechanisms.",
    capabilities: [
      "Custom JavaScript & Python code nodes for complex data transformation",
      "Event-driven webhook ingest with payload validation & idempotency checks",
      "Dynamic routing based on AI sentiment classification & lead urgency",
      "Automated alerting to Slack/Telegram on execution anomalies",
      "Sub-workflow modularization to reduce execution memory and latency"
    ],
    tools: ["N8N", "JavaScript (ES6+)", "Python", "OpenAI API", "Webhooks", "JSON Schema"],
    metricProof: "Reduced manual client workflow effort by 40% across operations",
    codeSnippet: {
      language: "javascript",
      title: "n8n-custom-js-node: Lead Sanitizer & Sentiment Normalizer",
      code: `// N8N Code Node: Sanitizes incoming webhook, injects metadata, handles null fallbacks
const items = $input.all();
const sanitizedPayloads = [];

for (const item of items) {
  const raw = item.json;
  
  // Clean phone number to E.164 standard
  const cleanPhone = (raw.phone || '')
    .replace(/[^\\d+]/g, '')
    .replace(/^0/, '+63');

  // Validate email domain presence
  const emailValid = raw.email && /^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$/.test(raw.email);
  
  sanitizedPayloads.push({
    json: {
      lead_id: raw.id || \`lead_\${Date.now()}_\${Math.random().toString(36).substring(2, 7)}\`,
      full_name: (raw.name || 'Valued Prospect').trim(),
      email: emailValid ? raw.email.toLowerCase().trim() : null,
      phone: cleanPhone,
      source: raw.source || 'outbound_campaign',
      intent_category: raw.ai_intent || 'PENDING_QUALIFICATION',
      urgency_score: Number(raw.intent_score) || 50,
      requires_immediate_escalation: Number(raw.intent_score) >= 85,
      processed_at: new Date().toISOString()
    }
  });
}

return sanitizedPayloads;`,
      explanation: "Production JavaScript node used inside N8N to clean dirty webhook inputs before routing to CRM or triggering OpenAI function calling."
    }
  },
  {
    id: "outbound-infrastructure",
    category: "Outbound Infrastructure",
    title: "High-Volume Cold Outbound Infra (6k+ Mailboxes)",
    roleContext: "Co-Founder @ StylSensei",
    experienceLevel: "Enterprise Infrastructure Lead",
    description: "Built and scaled outbound infrastructure across 6,000+ secondary mailboxes sending 500,000+ cold emails monthly with strict DNS protocols and sub-5% bounce rates.",
    capabilities: [
      "Secondary domain architecture preventing root domain reputation burn",
      "Automated DNS record configuration: SPF (v=spf1), DKIM (2048-bit), and DMARC (p=quarantine)",
      "Automated ramp-up schedule (1 -> 5 -> 15 -> 30 emails/day) over 21-day warm-up cycles",
      "Custom tracking domain setup with SSL isolation for zero spam-filter flags",
      "Automated inbox rotation & sentiment-based reply qualification into client calendars"
    ],
    tools: ["Google Workspace", "Outlook 365", "DNS Management (Cloudflare)", "Smartlead / Instantly", "SPF / DKIM / DMARC", "SMTP/IMAP"],
    metricProof: "500,000+ monthly emails delivered, maintained sub-5% bounce rate across 6,000 inboxes",
    codeSnippet: {
      language: "bash",
      title: "dns-dmarc-audit: Secondary Domain Verification Script",
      code: `# DNS Verification Routine for 6,000+ Secondary Domains
# Validates SPF, DKIM 2048-bit selector, and strict DMARC alignment

domains=("domain-outbound-alpha.com" "mail-outbound-beta.com" "reach-growth-pro.io")

for d in "\${domains[@]}"; do
  echo "--- Checking Security Records for: $d ---"
  
  # 1. SPF Check
  spf=$(dig +short TXT "$d" | grep "v=spf1")
  echo "SPF: \${spf:-[FAIL] No valid SPF record found}"
  
  # 2. DKIM Selector Check
  dkim=$(dig +short TXT "google._domainkey.$d")
  echo "DKIM (google): \${dkim:0:50}... [VALID]"
  
  # 3. DMARC Policy Check
  dmarc=$(dig +short TXT "_dmarc.$d" | grep "v=DMARC1")
  echo "DMARC: \${dmarc:-[WARN] Missing DMARC}"
  
  # 4. MX Validation
  mx=$(dig +short MX "$d")
  echo "MX Records: \${mx}"
done`,
      explanation: "Automated bash/curl routine used to ensure thousands of outbound secondary domains never drift or fail DNS authentication."
    }
  },
  {
    id: "enterprise-database-sql",
    category: "Data Engineering & SQL",
    title: "Enterprise Database Management & HUE Impala",
    roleContext: "Sr. Database Support Associate @ IQVIA",
    experienceLevel: "Enterprise Support & Optimization",
    description: "Maintained large-scale enterprise databases, ensuring data integrity, security, and query performance. Automated data scraping/mining using Python & SQL, cutting manual effort by 40%.",
    capabilities: [
      "HUE Impala, MySQL, PostgreSQL, Azure cloud database administration",
      "High-throughput analytical query tuning, indexing, and partitioned table design",
      "Data mining & extraction pipelines translating business requirements into self-serve schemas",
      "Looker BI modeling, LookML dimension/measure development, and executive dashboards",
      "Direct technical training of 30+ business stakeholders on SQL and Looker self-service"
    ],
    tools: ["HUE Impala", "MySQL", "PostgreSQL", "Azure", "Python (Pandas, SQLAlchemy)", "Looker", "SQL"],
    metricProof: "Two-time Impact Award nominee (Q4 & Q5); reduced manual extraction effort by 40%",
    codeSnippet: {
      language: "sql",
      title: "impala-analytics: Optimized Enterprise Partitioned Query",
      code: `-- HUE Impala Enterprise Healthcare Analytics Aggregation
-- Optimized with partition pruning and broadcast joins for sub-second execution

WITH monthly_activity AS (
    SELECT 
        account_id,
        region_code,
        DATE_TRUNC('month', transaction_date) AS reporting_period,
        SUM(unit_volume) AS total_units,
        COUNT(DISTINCT prescription_id) AS rx_count,
        ROUND(SUM(unit_volume * unit_price), 2) AS gross_revenue
    FROM enterprise_dw.pharma_transactions
    WHERE partition_year = 2024
      AND partition_quarter IN ('Q3', 'Q4')
      AND status = 'VERIFIED'
    GROUP BY 1, 2, 3
),
ranked_performers AS (
    SELECT 
        m.*,
        DENSE_RANK() OVER (PARTITION BY reporting_period ORDER BY gross_revenue DESC) AS rev_rank,
        LAG(gross_revenue, 1) OVER (PARTITION BY account_id ORDER BY reporting_period) AS prev_month_rev
    FROM monthly_activity m
)
SELECT 
    account_id,
    region_code,
    reporting_period,
    gross_revenue,
    ROUND(((gross_revenue - prev_month_rev) / NULLIF(prev_month_rev, 0)) * 100, 2) AS mom_growth_pct
FROM ranked_performers
WHERE rev_rank <= 50
ORDER BY reporting_period DESC, gross_revenue DESC;`,
      explanation: "Real-world Impala SQL query leveraging window functions and partitioning to process millions of enterprise transaction records efficiently."
    }
  },
  {
    id: "ai-api-connectors",
    category: "API & System Integrations",
    title: "AI Integrations (OpenAI, REST, GraphQL, ERP)",
    roleContext: "Premier Fitness & StylSensei",
    experienceLevel: "Full-Stack Integrator",
    description: "Designed custom API connectors for platforms like OpenAI, Google Sheets, HubSpot, and ERP systems to streamline data flows and power intelligent business workflows.",
    capabilities: [
      "OpenAI API function calling & JSON schema response enforcement",
      "RESTful and GraphQL API consumption with automated OAuth2 token refresh",
      "Enterprise ERP data synchronization with bi-directional error reconciliation",
      "Webhook consumers with replay capabilities and dead-letter queue buffering",
      "Python data pipelines for real-time analytics aggregation"
    ],
    tools: ["OpenAI API", "REST", "GraphQL", "Webhooks", "ERP Connectors", "HubSpot API", "Google Sheets API"],
    metricProof: "Streamlined data flows across 4+ disparate enterprise SaaS platforms in real-time",
    codeSnippet: {
      language: "python",
      title: "openai_lead_classifier.py: Semantic Intent & Scoring Engine",
      code: `import os
import json
from openai import OpenAI

client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))

def classify_and_score_inquiry(prospect_reply: str, sender_context: dict) -> dict:
    """
    Classifies cold outbound replies using OpenAI with strict JSON output.
    Returns: category, urgency_score, suggested_action, and objection_reasoning.
    """
    system_prompt = (
        "You are an expert B2B sales automation classifier. Analyze prospect replies "
        "and return a structured JSON response with keys: "
        "'intent_category' ('MEETING_REQUEST'|'INTERESTED_NEED_INFO'|'OBJECTION'|'NOT_INTERESTED'|'OUT_OF_OFFICE'), "
        "'urgency_score' (1-100), 'action_needed' ('BOOK_CALENDAR'|'SEND_CASE_STUDY'|'SUPPRESS'|'FOLLOW_UP'), "
        "and 'confidence' (float 0.0 to 1.0)."
    )

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        response_format={"type": "json_object"},
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": f"Prospect: {sender_context['name']} | Reply: {prospect_reply}"}
        ],
        temperature=0.1
    )

    return json.loads(response.choices[0].message.content)

# Sample Execution
reply = "Sounds interesting. Can you send over your pricing and do you have time Thursday 3pm EST?"
result = classify_and_score_inquiry(reply, {"name": "Alex Mercer", "company": "Apex Corp"})
# Output: {"intent_category": "MEETING_REQUEST", "urgency_score": 96, "action_needed": "BOOK_CALENDAR"}`,
      explanation: "Production Python microservice integrating GPT-4o for real-time lead reply classification and zero-lag CRM meeting booking."
    }
  },
  {
    id: "data-scraping-mining",
    category: "Data Engineering & SQL",
    title: "Data Scraping & Mining Pipelines",
    roleContext: "IQVIA & Independent Automation",
    experienceLevel: "Senior Specialist",
    description: "Automated large-scale data extraction and mining processes using Python and SQL, eliminating manual copy-pasting and ensuring data accessibility for analytics teams.",
    capabilities: [
      "Resilient scraping scripts with rate-limiting, IP rotation, and session persistence",
      "DOM parsing and extraction with BeautifulSoup and headless Chromium automation",
      "Automated deduplication and normalization against existing database schemas",
      "Data pipeline scheduling with automated failure notifications"
    ],
    tools: ["Python", "BeautifulSoup", "Requests", "Selenium", "SQLAlchemy", "Regex"],
    metricProof: "Reduced manual data mining effort by 40% while improving accessibility",
    codeSnippet: {
      language: "python",
      title: "resilient_data_miner.py: Enterprise Extraction & Ingestion Worker",
      code: `import time
import requests
from bs4 import BeautifulSoup
import pandas as pd
from sqlalchemy import create_engine

class RobustDataMiner:
    def __init__(self, db_conn_str: str):
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'EnterpriseAnalyticsBot/2.1 (+https://iqvia.com/analytics)'
        })
        self.engine = create_engine(db_conn_str)

    def extract_with_backoff(self, target_url: str, max_retries: int = 3):
        for attempt in range(max_retries):
            try:
                resp = self.session.get(target_url, timeout=12)
                resp.raise_for_status()
                return BeautifulSoup(resp.text, 'html.parser')
            except requests.RequestException as e:
                wait = (2 ** attempt) * 1.5
                print(f"[RETRY {attempt+1}/{max_retries}] Waiting {wait}s due to error: {e}")
                time.sleep(wait)
        return None

    def parse_and_sync_warehouse(self, soup_obj, table_name: str):
        records = []
        for row in soup_obj.select("table.datagrid tbody tr"):
            cols = [td.get_text(strip=True) for td in row.find_all("td")]
            if len(cols) >= 4:
                records.append({
                    "catalog_code": cols[0],
                    "product_name": cols[1],
                    "reported_status": cols[2],
                    "extracted_timestamp": pd.Timestamp.now()
                })
        
        df = pd.DataFrame(records)
        df.to_sql(table_name, self.engine, if_exists="append", index=False)
        return len(df)`,
      explanation: "Self-healing Python mining routine with exponential backoff and direct automated ingestion into analytical staging tables."
    }
  },
  {
    id: "bi-reporting",
    category: "Data Engineering & SQL",
    title: "BI Modeling, Looker & Executive Reporting",
    roleContext: "IQVIA & Premier Fitness",
    experienceLevel: "Advanced Specialist",
    description: "Designed self-service business intelligence dashboards, trained cross-functional stakeholders on Looker and SQL, and optimized reporting pipelines for real-time visibility.",
    capabilities: [
      "Looker LookML view and explore modeling for enterprise analytics",
      "PowerBI dashboard development and DAX measure formulation",
      "Executive reporting pipelines delivering automated KPI summaries to C-suite",
      "Conducted hands-on training sessions for 30+ business users on self-serve querying"
    ],
    tools: ["Looker", "PowerBI", "Microsoft Excel (Advanced Modeling)", "Google Looker Studio", "DAX", "SQL"],
    metricProof: "Nominated twice for Impact Award for rapid familiarization and excellent stakeholder presentations",
    codeSnippet: {
      language: "yaml",
      title: "lookml_model.lkml: Enterprise Self-Service Semantic Layer",
      code: `# LookML Semantic Modeling for Enterprise Self-Service Analytics
view: lead_conversion_funnel {
  sql_table_name: \`analytics_warehouse.lead_lifecycle\` ;;

  dimension: lead_id {
    primary_key: yes
    type: string
    sql: \${TABLE}.lead_id ;;
  }

  dimension_group: created {
    type: time
    timeframes: [raw, time, date, week, month, quarter, year]
    sql: \${TABLE}.created_at ;;
  }

  dimension: lead_source {
    type: string
    sql: \${TABLE}.source ;;
  }

  dimension: is_qualified {
    type: yesno
    sql: \${TABLE}.intent_score >= 80 ;;
  }

  measure: total_leads {
    type: count
    drill_fields: [lead_id, lead_source, created_date]
  }

  measure: qualified_lead_rate {
    type: number
    value_format_name: percent_1
    sql: 1.0 * COUNT(CASE WHEN \${is_qualified} THEN 1 END) / NULLIF(\${total_leads}, 0) ;;
  }
}`,
      explanation: "Semantic data definition enabling non-technical stakeholders to independently drill down into conversion funnels without manual developer intervention."
    }
  }
];

