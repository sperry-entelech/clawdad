import type { AgentConfig, ProofPoint, FAQ, ProcessStep } from "@/types";

export const CALENDLY_URL = "#book-call";

export const agentConfigs: AgentConfig[] = [
  {
    id: "gtm-outbound",
    name: "GTM Outbound Machine",
    tagline: "Replace your SDR team with a 6-agent pipeline that prospects, qualifies, and books meetings 24/7.",
    agentCount: 6,
    setupTime: "5-7 days",
    pipeline: ["Mine", "Enrich", "Score", "Write", "Send", "Research"],
    outcomes: [
      "Automated lead sourcing from 10+ data providers",
      "AI-personalized cold emails at scale",
      "CRM-integrated pipeline with auto follow-up",
      "Deliverability monitoring & inbox rotation",
    ],
    proofQuote: "Replaced a $200K/yr hire with $130/mo in tooling. First qualified meetings booked in week one.",
    proofAttribution: "B2B SaaS Founder",
    featured: true,
  },
  {
    id: "real-estate-wholesaler",
    name: "Real Estate Wholesaler",
    tagline: "Automated deal-finding machine that texts, qualifies, pulls comps, and generates offers.",
    agentCount: 4,
    setupTime: "3-5 days",
    pipeline: ["Text", "Qualify", "Comp", "Offer"],
    outcomes: [
      "Automated skip-tracing & texting campaigns",
      "AI qualification based on motivation signals",
      "Instant comp analysis with ARV estimates",
      "Auto-generated offer letters ready to send",
    ],
    proofQuote: "Processing 50 deals a month on 5 hours of work. The agents handle everything up to the offer.",
    proofAttribution: "Wholesaler, TX",
  },
  {
    id: "local-business-sales",
    name: "Local Business Sales Org",
    tagline: "A full AI sales team: scouts leads, builds intel, crafts outreach, and manages the pipeline.",
    agentCount: 6,
    setupTime: "7-10 days",
    pipeline: ["Scout", "Intel", "Builder", "Outreach", "Closer", "Growth"],
    outcomes: [
      "Local business discovery & verification",
      "Deep business intelligence dossiers",
      "Multi-channel outreach (email + LinkedIn + phone)",
      "Pipeline management with stage automation",
    ],
    proofQuote: "It's like running an org chart of sales reps that never sleep. Three demos booked the first week.",
    proofAttribution: "Agency Owner",
  },
  {
    id: "content-engine",
    name: "Content Engine",
    tagline: "Plan, write, and publish content across channels — on autopilot.",
    agentCount: 3,
    setupTime: "2-3 days",
    pipeline: ["Plan", "Write", "Publish"],
    outcomes: [
      "Editorial calendar auto-generated from strategy",
      "SEO-optimized blog posts & social content",
      "Multi-platform publishing (blog, LinkedIn, X)",
      "Performance tracking & topic refinement",
    ],
    proofQuote: "14 blog posts and 2 newsletters per cycle. Content quality rivals our best human writer.",
    proofAttribution: "Marketing Director",
  },
];

export const proofPoints: ProofPoint[] = [
  { metric: "$200K → $130/mo", context: "SDR replacement" },
  { metric: "50 deals/mo", context: "on 5 hrs work" },
  { metric: "$41K in week 1", context: "pipeline generated" },
  { metric: "$4,200 saved", context: "per month avg" },
  { metric: "3 demos", context: "first week live" },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery Call",
    description: "30-minute deep dive into your workflow, tech stack, and goals. We map your agent architecture and give you a go/no-go recommendation — no pressure, no pitch.",
    price: "$150",
    priceNote: "credited toward build",
  },
  {
    number: "02",
    title: "Architecture & Build",
    description: "We design your agent pipeline, configure OpenClaw, build custom skills, set up integrations, and test everything end-to-end before you touch it.",
    price: "$1,500–2,500",
  },
  {
    number: "03",
    title: "Handoff & Training",
    description: "Loom walkthrough of your entire system. Documentation. 2 weeks of tuning included — we adjust prompts, skills, and flows until it runs clean.",
    price: "Included",
  },
  {
    number: "04",
    title: "Ongoing Support",
    description: "Optional monthly retainer for monitoring, optimization, new agent builds, and priority support. Or go fully independent — your system, your call.",
    price: "$500–1,000/mo",
    priceNote: "or rev share",
  },
];

export const faqs: FAQ[] = [
  {
    question: "What is OpenClaw?",
    answer: "OpenClaw is an open-source AI agent framework that lets you deploy autonomous agents capable of browsing the web, managing files, calling APIs, and executing complex multi-step workflows. Think of it as giving an AI a computer to work from — not just a chat box to type in.",
  },
  {
    question: "Why not just set it up myself?",
    answer: "You absolutely can — OpenClaw is open source. But most non-technical founders spend 10-40 hours on CLI setup, Node.js configuration, API wiring, and security hardening before a single agent runs. We've done hundreds of deployments. We get you live in days, configured correctly, with production-grade security from the start.",
  },
  {
    question: "What if my use case isn't listed?",
    answer: "The agent configs shown are starting points — our most requested setups. Every deployment is custom-fit to your workflow during the discovery call. If you have a unique use case, we'll design a bespoke agent architecture for it. That's the whole point of the discovery call.",
  },
  {
    question: "How do you handle security?",
    answer: "Every deployment includes API key rotation, sandboxed execution environments, rate limiting, cost caps, and audit logging. We follow the principle of least privilege — agents only get access to the tools and data they need. No wide-open permissions, no shared credentials.",
  },
  {
    question: "What are the ongoing costs after setup?",
    answer: "Your agent infrastructure runs on your own accounts — typically $50-200/mo in API costs depending on usage volume. The optional support retainer ($500-1,000/mo) covers monitoring, optimization, and new builds. You can cancel anytime and keep everything.",
  },
  {
    question: "Do I need technical knowledge to run the agents after handoff?",
    answer: "No. We build dashboards and simple interfaces for managing your agents. The Loom walkthrough covers everything. Most clients manage their systems independently within a week of handoff. If you get stuck, we're a Slack message away during the tuning period.",
  },
  {
    question: "Can I change the agent configuration later?",
    answer: "Yes — that's the advantage of owning the infrastructure. You can modify prompts, add new skills, adjust workflows, or add entirely new agents. On the support plan, we handle changes for you. Independent clients can modify configs directly or bring us in for specific builds.",
  },
  {
    question: "How is this different from ChatGPT or other AI tools?",
    answer: "ChatGPT is a conversation tool — you type, it responds. OpenClaw agents are autonomous workers that execute multi-step workflows without human intervention. They browse the web, call APIs, process data, send emails, and chain tasks together. It's the difference between asking someone a question and hiring someone to do the job.",
  },
];
