import type { AgentConfig, ProofPoint, FAQ, ProcessStep } from "@/types";

export const CALENDLY_URL = "#book-call";

export const agentConfigs: AgentConfig[] = [
  {
    id: "gtm-outbound",
    name: "GTM Outbound Machine",
    tagline: "Replace your SDR team with a 6-agent pipeline that prospects, qualifies, and books meetings 24/7.",
    agentCount: 6,
    setupTime: "2-3 weeks",
    pipeline: ["Mine", "Enrich", "Score", "Write", "Send", "Research"],
    outcomes: [
      "Automated lead sourcing from 10+ data providers",
      "AI-personalized cold emails at scale",
      "CRM-integrated pipeline with auto follow-up",
      "Deliverability monitoring & inbox rotation",
    ],
    proofQuote: "Most requested starting architecture. Designed for B2B companies replacing manual outbound with autonomous agent pipelines.",
    proofAttribution: "Starting config",
    featured: true,
  },
  {
    id: "real-estate-wholesaler",
    name: "Real Estate Wholesaler",
    tagline: "Automated deal-finding machine that texts, qualifies, pulls comps, and generates offers.",
    agentCount: 4,
    setupTime: "2-3 weeks",
    pipeline: ["Text", "Qualify", "Comp", "Offer"],
    outcomes: [
      "Automated skip-tracing & texting campaigns",
      "AI qualification based on motivation signals",
      "Instant comp analysis with ARV estimates",
      "Auto-generated offer letters ready to send",
    ],
    proofQuote: "Built for high-volume deal flow. Agents handle everything from first contact through offer generation.",
    proofAttribution: "Starting config",
  },
  {
    id: "local-business-sales",
    name: "Local Business Sales Org",
    tagline: "A full AI sales team: scouts leads, builds intel, crafts outreach, and manages the pipeline.",
    agentCount: 6,
    setupTime: "3-4 weeks",
    pipeline: ["Scout", "Intel", "Builder", "Outreach", "Closer", "Growth"],
    outcomes: [
      "Local business discovery & verification",
      "Deep business intelligence dossiers",
      "Multi-channel outreach (email + LinkedIn + phone)",
      "Pipeline management with stage automation",
    ],
    proofQuote: "Our most complex starting architecture. Six coordinated agents running a full sales operation autonomously.",
    proofAttribution: "Starting config",
  },
  {
    id: "content-engine",
    name: "Content Engine",
    tagline: "Plan, write, and publish content across channels — on autopilot.",
    agentCount: 3,
    setupTime: "1-2 weeks",
    pipeline: ["Plan", "Write", "Publish"],
    outcomes: [
      "Editorial calendar auto-generated from strategy",
      "SEO-optimized blog posts & social content",
      "Multi-platform publishing (blog, LinkedIn, X)",
      "Performance tracking & topic refinement",
    ],
    proofQuote: "Fastest to deploy. Three agents handling the entire content lifecycle from strategy through publishing.",
    proofAttribution: "Starting config",
  },
];

export const proofPoints: ProofPoint[] = [
  { metric: "$9K", context: "flat setup" },
  { metric: "$1,600/mo", context: "ongoing support" },
  { metric: "2–4 weeks", context: "to running agents" },
  { metric: "24/7", context: "autonomous operation" },
  { metric: "You own it", context: "your infrastructure" },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery Call",
    description: "30-minute deep dive into your workflow, tech stack, and goals. We map your agent architecture and give you a straight answer on fit — no pressure, no pitch.",
    price: "Free",
  },
  {
    number: "02",
    title: "Architecture & Build",
    description: "We design your agent pipeline, configure OpenClaw, build custom skills, set up integrations, and test everything end-to-end before you touch it.",
    price: "$9,000",
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
    description: "Monthly retainer for monitoring, optimization, new agent builds, and priority support. Or go fully independent — your system, your call.",
    price: "$1,600/mo",
  },
];

export const faqs: FAQ[] = [
  {
    question: "What is OpenClaw?",
    answer: "OpenClaw is a proprietary AI agent framework that deploys autonomous agents capable of browsing the web, managing files, calling APIs, and executing complex multi-step workflows. Think of it as giving an AI a computer to work from — not just a chat box to type in. It's actively evolving technology, and we're transparent about that.",
  },
  {
    question: "Is this technology proven?",
    answer: "Honest answer: this is frontier technology. OpenClaw is proprietary, actively evolving, and relatively new. We don't have 10 years of case studies. What we do have is production-grade technical capability, deep understanding of the workflows that benefit from autonomous agents, and the integrity to tell you exactly what we know works and what's still experimental. Our clients are early adopters who understand that getting in first means accepting some frontier risk — and that's exactly why the opportunity is so large.",
  },
  {
    question: "Why not just set it up myself?",
    answer: "You can try — but most non-technical founders spend 10-40 hours on CLI setup, Node.js configuration, API wiring, and security hardening before a single agent runs. We've done the hard work of learning this technology so you don't have to. You get production-grade security and a working system in weeks, not months.",
  },
  {
    question: "What if my use case isn't listed?",
    answer: "The agent configs shown are starting architectures — the most common workflows we're designing for. Every deployment is custom-fit to your workflow during the discovery call. If you have a unique use case, we'll design a bespoke agent architecture for it. That's the whole point of the discovery call.",
  },
  {
    question: "How do you handle security?",
    answer: "Every deployment includes API key rotation, sandboxed execution environments, rate limiting, cost caps, and audit logging. We follow the principle of least privilege — agents only get access to the tools and data they need. No wide-open permissions, no shared credentials.",
  },
  {
    question: "What are the ongoing costs after setup?",
    answer: "Your agent infrastructure runs on your own accounts — typically $50-200/mo in API costs depending on usage volume. The support retainer ($1,600/mo) covers monitoring, optimization, and adjustments. You can cancel anytime and keep everything you've built.",
  },
  {
    question: "Do I need technical knowledge to run the agents after handoff?",
    answer: "No. We build dashboards and simple interfaces for managing your agents. The Loom walkthrough covers everything. Most clients manage their systems independently within a week of handoff. If you get stuck, we're a message away during the tuning period.",
  },
  {
    question: "How is this different from ChatGPT or other AI tools?",
    answer: "ChatGPT is a conversation tool — you type, it responds. OpenClaw agents are autonomous workers that execute multi-step workflows without human intervention. They browse the web, call APIs, process data, send emails, and chain tasks together. It's the difference between asking someone a question and hiring someone to do the job.",
  },
];
