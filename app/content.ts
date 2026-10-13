// All site content lives here — edit this file to update the website.

export const profile = {
  name: "Pujitha Nannapaneni",
  role: "Product Portfolio Management Leader",
  location: "Dallas–Fort Worth",
  intro:
    "I lead product portfolio strategy in life sciences, and I build the AI agents that help teams make those calls with better data.",
  linkedin: "https://www.linkedin.com/in/pujanan/",
  github: "https://github.com/nannapp12",
};

// Career timeline. Months are 1–12; an end of null means "present".
export type Role = {
  title: string;
  company: string;
  start: [number, number];
  end: [number, number] | null;
  duration: string;
};

export const roles: Role[] = [
  { title: "Senior Manager", company: "AbbVie", start: [2012, 5], end: [2021, 7], duration: "9 yrs 3 mos" },
  { title: "Associate Director", company: "Cibus", start: [2021, 8], end: [2021, 12], duration: "5 mos" },
  { title: "Director", company: "Adaptive Biotechnologies", start: [2021, 12], end: [2022, 4], duration: "5 mos" },
  { title: "Principal Consultant", company: "Seagen", start: [2022, 4], end: [2024, 6], duration: "2 yrs 3 mos" },
  { title: "Partner", company: "Archents", start: [2024, 6], end: null, duration: "2 yrs 5 mos" },
];

export const timelineEnd: [number, number] = [2026, 10];

export const about = [
  "My career started at AbbVie, where I spent more than nine years. From there I took leadership roles at Cibus, Adaptive Biotechnologies and Seagen, and today I'm a Partner at Archents.",
  "The thread through all of it is portfolio thinking: deciding which products deserve investment, steering them through their life cycle, and grounding those decisions in data rather than instinct.",
  "I now build AI agents myself, connecting them to enterprise data, adding guardrails, and deploying them, because leading AI-driven change goes better when you know how the pieces fit.",
];

export const workOn = [
  "Product portfolio management",
  "Drug development and life cycle management",
  "Medical device development",
  "Data analysis",
  "AI agents, RAG and guardrails",
];

// Stages used in the builds grid, in pipeline order.
export const stages = ["Data", "Retrieval", "Guardrails", "Deploy", "Interface"] as const;
export type Stage = (typeof stages)[number];

export type Build = {
  name: string;
  summary: string;
  stack: string;
  covers: Stage[];
  url: string;
};

const repo = (name: string) => `https://github.com/nannapp12/${name}`;

export const builds: Build[] = [
  {
    name: "Multi-source orders agent",
    summary:
      "Answers order questions in Microsoft Foundry when the orders are split across Azure Databricks, MySQL and Snowflake, each reached through its own MCP server.",
    stack: "Microsoft Foundry, MCP, Databricks, MySQL, Snowflake, Python",
    covers: ["Data"],
    url: repo("Scenario1-multiorder-agent"),
  },
  {
    name: "PTO agent with RAG",
    summary:
      "Reads the employee handbook through PostgreSQL and pgvector, checks start dates in Databricks, and works out PTO accrual with hallucination guardrails.",
    stack: "PostgreSQL, pgvector, Databricks, Python",
    covers: ["Data", "Retrieval", "Guardrails"],
    url: repo("Scenario2-PTO-agent-with-RAG-and-hallucination-guardrails"),
  },
  {
    name: "Natural-language SQL agent",
    summary: "Turns plain-English questions into PostgreSQL queries, with a do-not-query list that keeps sensitive tables off limits.",
    stack: "PostgreSQL, Python",
    covers: ["Data", "Guardrails"],
    url: repo("Scenario7-SQL-Agent"),
  },
  {
    name: "Agent platform on Kubernetes",
    summary:
      "Packages the web front end, both agent APIs and the MCP servers as separate Docker images and runs them on Kubernetes.",
    stack: "Docker, Kubernetes, Bicep",
    covers: ["Deploy", "Interface"],
    url: `${profile.github}?tab=repositories`,
  },
  {
    name: "Personal relationship planner",
    summary: "A single-file app, built from my own contact list, that tracks how I keep in touch with the people who matter.",
    stack: "HTML, JavaScript",
    covers: ["Interface"],
    url: repo("Scenario5-PersonalPlannerAssistant"),
  },
  {
    name: "Focus timer",
    summary: "A 25-minute focus timer with start, pause and reset, and a progress ring that drains as you work.",
    stack: "HTML, CSS, JavaScript",
    covers: ["Interface"],
    url: repo("Scenario4-BuildSimpleTimerAgent"),
  },
];

export const education = [
  { school: "Northwestern University, Kellogg School of Management", detail: "Master of Business Administration" },
  {
    school: "University of Cincinnati, Carl H. Lindner College of Business",
    detail: "Master's in Management Information Systems. Member of the Association for India's Development, Cincinnati Chapter.",
  },
];

export const certifications = [
  { name: "Drug Development and Life Cycle Management", issuer: "Drug Information Association" },
  { name: "Medical Device Development", issuer: "Prof. Josh Simon" },
];
