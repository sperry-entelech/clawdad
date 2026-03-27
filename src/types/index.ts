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

// --- Niche page data interfaces ---

export interface HeroData {
  sectionLabel: string;
  headlineWhite: string;
  headlineAccent: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary?: string;
  ctaSecondaryHref?: string;
}

export interface PainPointItem {
  number: string;
  title: string;
  description: string;
}

export interface ProblemData {
  sectionLabel: string;
  headlineWhite: string;
  headlineGray: string;
  description: string;
  painPoints: PainPointItem[];
}

export interface BridgeStep {
  label: string;
  sublabel: string;
}

export interface SolutionData {
  sectionLabel: string;
  headlineWhite: string;
  headlineAccent: string;
  description: string;
  bridgeSteps: [BridgeStep, BridgeStep, BridgeStep];
}

export interface AgentShowcaseData {
  sectionLabel: string;
  headlineWhite: string;
  headlineGray: string;
  description: string;
  agents: AgentConfig[];
  customBuildCta?: {
    label: string;
    title: string;
    description: string;
    buttonLabel: string;
  };
}

export interface ProofPointsData {
  points: ProofPoint[];
}

export interface HowItWorksData {
  sectionLabel: string;
  headlineWhite: string;
  headlineGray: string;
  description: string;
  steps: ProcessStep[];
}

export interface FAQData {
  sectionLabel: string;
  headlineWhite: string;
  headlineGray: string;
  faqs: FAQ[];
}

export interface CTAData {
  sectionLabel: string;
  headlineWhite: string;
  headlineAccent: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  footnote: string;
}

export interface NichePageMeta {
  title: string;
  description: string;
}

// --- ROI Math (cascade visualization) ---

export interface RoiMathStep {
  value: string;
  label: string;
  annotation?: string;
}

export interface RoiMathData {
  sectionLabel: string;
  headlineWhite: string;
  headlineGray: string;
  description: string;
  steps: RoiMathStep[];
  bottomLine: string;
}

// --- Qualifier (industry badges + criteria) ---

export interface QualifierCriterion {
  text: string;
}

export interface QualifierData {
  sectionLabel: string;
  headlineWhite: string;
  headlineGray: string;
  description: string;
  industries: string[];
  criteria: QualifierCriterion[];
  antiQualifier?: string;
}

// --- Niche page root ---

export interface NichePageData {
  slug: string;
  meta: NichePageMeta;
  hero: HeroData;
  problem: ProblemData;
  solution?: SolutionData;
  agentShowcase?: AgentShowcaseData;
  proofPoints?: ProofPointsData;
  howItWorks?: HowItWorksData;
  faq?: FAQData;
  cta: CTAData;
  roiMath?: RoiMathData;
  qualifier?: QualifierData;
  minimal?: boolean;
}
