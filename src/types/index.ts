export interface AgentConfig {
  id: string;
  name: string;
  tagline: string;
  agentCount: number;
  setupTime: string;
  pipeline: string[];
  outcomes: string[];
  proofQuote: string;
  proofAttribution: string;
  featured?: boolean;
}

export interface ProofPoint {
  metric: string;
  context: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  price: string;
  priceNote?: string;
}
