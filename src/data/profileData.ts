export interface ProfileData {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  headshotUrl: string;
  highlights: {
    label: string;
    value: string;
    detail: string;
  }[];
  education: {
    degree: string;
    school: string;
    period: string;
    major: string;
  };
  training: {
    program: string;
    institution: string;
    period: string;
    topics: string[];
  };
  achievements: {
    title: string;
    issuer: string;
    detail: string;
    icon: string;
  }[];
  certifications: string[];
}

export const profileData: ProfileData = {
  name: "Genesis L. Auza",
  title: "B2B Cold Outbound & GTM Email Specialist",
  subtitle: "I build and operate high-scale outbound email engines (6,000+ mailboxes, 500k monthly volume) that book qualified B2B pipeline without burning domains—backed by technical AI scraping and automated CRM triage.",
  location: "Remote (Philippines · US Eastern / Pacific Overlap)",
  email: "genesisauza9@gmail.com",
  phone: "+63 991 502 5407",
  linkedin: "https://www.linkedin.com/in/genesis-auza-a07873361/",
  headshotUrl: "/genesis-headshot.jpg",
  highlights: [
    {
      label: "Monthly Outbound Scale",
      value: "500K+",
      detail: "Emails delivered monthly with strict SPF/DKIM/DMARC",
    },
    {
      label: "Mailboxes Orchestrated",
      value: "6,000+",
      detail: "Warmed secondary inboxes under continuous health telemetry",
    },
    {
      label: "Deliverability SLA",
      value: "< 2.8%",
      detail: "Sub-5% hard bounce SLA consistently maintained",
    },
    {
      label: "Lead Scraping & AI",
      value: "500+ Leads",
      detail: "Autonomous Telegram/DeepSeek/Apify scraper to Google Sheets",
    },
  ],
  education: {
    degree: "Bachelor of Science in Information and Technology",
    school: "Bulacan State University (Malolos, PH)",
    period: "08/2018 - 07/2022",
    major: "Major in Business & Data Analytics",
  },
  training: {
    program: "Data Associate Scholar",
    institution: "Project Sparta (Development Academy of the Philippines)",
    period: "08/2021 - 07/2022",
    topics: [
      "Operational Analysis",
      "Data Visualization",
      "SQL Programming",
      "Statistical Modeling",
    ],
  },
  achievements: [
    {
      title: "Impact Award (Nominated Twice)",
      issuer: "IQVIA Enterprise Analytics (Q4 & Q5)",
      detail: "Recognized for great overall performance, rapid tool familiarization, workflow optimization, and high-clarity stakeholder presentations.",
      icon: "Award",
    },
    {
      title: "Project Sparta Data Scholar",
      issuer: "Development Academy of the Philippines",
      detail: "Selected for prestigious government-sponsored data science & business analytics fellowship.",
      icon: "GraduationCap",
    },
  ],
  certifications: [
    "Essential Excel Skills for Data Preparation & Analysis (March 2022)",
    "SQL Programming for Business Users (March 2022)",
    "Data Visualization Fundamentals (May 2022)",
    "Analytics Applications in Finance & Risk (February 2022)",
    "Design Thinking for Analytics (February 2022)",
  ],
};
