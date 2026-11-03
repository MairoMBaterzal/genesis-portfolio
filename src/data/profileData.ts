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
  title: "B2B Cold Outbound & Email Systems Specialist",
  subtitle: "Former Co-Founder of StylSensei. I build and operate cold outbound infrastructure (Plusvibe, Instantly, Smartlead across 6,000+ mailboxes and 500,000+ monthly sends) delivering qualified C-suite meetings with a 22.4% positive reply rate and 1% bounce rate.",
  location: "Remote (Philippines · US Eastern / Pacific Overlap)",
  email: "genesisauza9@gmail.com",
  phone: "+63 991 502 5407",
  linkedin: "https://www.linkedin.com/in/genesis-auza-a07873361/",
  headshotUrl: "/genesis-headshot.jpg",
  highlights: [
    {
      label: "Monthly Send Capacity",
      value: "500,000+",
      detail: "Plusvibe, Instantly & Smartlead secondary domain fleet",
    },
    {
      label: "Active Mailbox Fleet",
      value: "6,000+",
      detail: "Secondary inboxes warmed & rotated across isolated DNS pools",
    },
    {
      label: "Positive Replies (Cluster)",
      value: "7,090+",
      detail: "22.4% positive response rate across 451,749 targeted B2B prospects",
    },
    {
      label: "Verified Bounce Rate",
      value: "< 3.0%",
      detail: "Strict sub-3% deliverability SLA held across all client dispatches",
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
