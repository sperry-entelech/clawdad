import { CALENDLY_URL } from "@/lib/data";
import type { NichePageData } from "@/types";

export const reactivationPage: NichePageData = {
  slug: "reactivation",
  meta: {
    title: "Lead Reactivation — Ntelech",
    description:
      "Turn old leads sitting in your CRM into booked appointments. No retainer, no setup fee — pay per appointment.",
  },
  minimal: true,

  hero: {
    sectionLabel: "lead reactivation",
    headlineWhite: "the leads in your CRM aren't dead.",
    headlineAccent: "you just stopped calling.",
    description:
      "you've got thousands of old leads sitting in your CRM collecting dust. your sales team only works fresh ones. we reach out to the rest, find out who's still interested, and put appointments on your calendar.",
    ctaPrimary: "Book a Call",
    ctaSecondary: "See How It Works",
    ctaSecondaryHref: "#how-it-works",
  },

  problem: {
    sectionLabel: "the problem",
    headlineWhite: "old leads don't work themselves.",
    headlineGray: "and nobody's going to.",
    description:
      "your CRM is full of people who raised their hand once. here's what's happening to them right now.",
    painPoints: [
      {
        number: "01",
        title: "your sales team only works fresh leads",
        description:
          "the moment a lead goes cold, it disappears. reps chase new inbound because that's what hits their numbers. meanwhile, thousands of contacts sit in your CRM that nobody opens.",
      },
      {
        number: "02",
        title: "following up at scale is a staffing problem",
        description:
          "you'd need to hire an entire team just to call through old lists. the math doesn't justify the headcount — until you see what those leads are actually worth.",
      },
      {
        number: "03",
        title: "every month that passes, they cool off more",
        description:
          "some of them bought from a competitor. some of them haven't. some of them are ready right now and nobody's asking. the longer you wait, the fewer you'll recover.",
      },
    ],
  },

  howItWorks: {
    sectionLabel: "how it works",
    headlineWhite: "three steps.",
    headlineGray: "we handle the middle one.",
    description:
      "you send us a list. we work it. appointments show up on your calendar.",
    steps: [
      {
        number: "01",
        title: "send us your list",
        description:
          "export your old leads from whatever CRM you use. CSV, spreadsheet, direct integration — we'll take it however you've got it.",
        price: "5 minutes",
      },
      {
        number: "02",
        title: "we reach out and qualify",
        description:
          "we contact every lead, find out who's still interested, and qualify them against your criteria. you don't lift a finger.",
        price: "we handle it",
      },
      {
        number: "03",
        title: "appointments on your calendar",
        description:
          "qualified, interested leads get booked directly onto your team's calendar. you just show up and close.",
        price: "your calendar",
      },
    ],
  },

  roiMath: {
    sectionLabel: "the math",
    headlineWhite: "here's what you're sitting on.",
    headlineGray: "do the math yourself.",
    description:
      "most companies are shocked when they see what their old leads are actually worth.",
    steps: [
      {
        value: "10,000",
        label: "old leads in your CRM",
        annotation: "collecting dust",
      },
      {
        value: "1%",
        label: "respond and qualify",
        annotation: "conservative estimate",
      },
      {
        value: "100",
        label: "booked appointments",
      },
      {
        value: "$3,000+",
        label: "campaign value",
        annotation: "at $30/appointment",
      },
    ],
    bottomLine:
      "companies with 100K+ old leads? that's a $30,000+ campaign. sitting in a CRM nobody's touching.",
  },

  qualifier: {
    sectionLabel: "who this is for",
    headlineWhite: "this works if you have the leads.",
    headlineGray: "most companies do.",
    description:
      "we work best with businesses that have large CRM databases of old leads they haven't contacted in months.",
    industries: [
      "insurance",
      "real estate",
      "construction",
      "home services",
      "solar",
      "roofing",
      "auto",
      "healthcare",
      "property management",
    ],
    criteria: [
      { text: "you have 5,000+ leads sitting in a CRM" },
      { text: "most of them haven't been contacted in 90+ days" },
      { text: "you have a sales team that can take appointments" },
      { text: "you sell a service or product worth $500+" },
    ],
    antiQualifier:
      "if you're a startup with 200 leads, this isn't the right fit. we need volume to make the math work.",
  },

  cta: {
    sectionLabel: "next step",
    headlineWhite: "ready to find out",
    headlineAccent: "what's hiding in your CRM?",
    description:
      "book a 15-minute call. we'll look at your numbers together and tell you exactly what to expect.",
    buttonLabel: "Book a Call",
    buttonHref: CALENDLY_URL,
    footnote:
      "no retainer. no setup fee. you pay per booked appointment.",
  },
};
