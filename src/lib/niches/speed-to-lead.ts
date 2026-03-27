import { CALENDLY_URL } from "@/lib/data";
import type { NichePageData } from "@/types";

export const speedToLeadPage: NichePageData = {
  slug: "speed-to-lead",
  meta: {
    title: "Speed to Lead — Ntelech",
    description:
      "Your leads go cold in 5 minutes. Your team responds in 5 hours. We fix that — qualified appointments, booked automatically.",
  },
  minimal: true,

  hero: {
    sectionLabel: "speed to lead",
    headlineWhite: "your leads go cold in 5 minutes.",
    headlineAccent: "your team responds in 5 hours.",
    description:
      "the average company takes 47 hours to follow up on a new lead. by then, the prospect has talked to three competitors. we make sure yours is the first response — every time.",
    ctaPrimary: "Book a Call",
    ctaSecondary: "See How It Works",
    ctaSecondaryHref: "#how-it-works",
  },

  problem: {
    sectionLabel: "the problem",
    headlineWhite: "hiring setters doesn't scale.",
    headlineGray: "and they ghost you anyway.",
    description:
      "you've tried throwing people at it. here's what keeps happening.",
    painPoints: [
      {
        number: "01",
        title: "leads decay by the minute",
        description:
          "a lead that fills out your form is 21x more likely to qualify if contacted within 5 minutes. after 30 minutes, the odds crater. your team isn't built for that kind of speed.",
      },
      {
        number: "02",
        title: "setters ghost, burn out, or underperform",
        description:
          "you hire a setter at $45K–$65K. they ramp for 3 months, hit their stride for 2, and then quit or start phoning it in. meanwhile, leads pile up untouched.",
      },
      {
        number: "03",
        title: "staffing doesn't scale with demand",
        description:
          "run a campaign that generates 500 leads in a week? your team can't absorb that. but hiring another body takes months. the leads die while you're posting job ads.",
      },
    ],
  },

  howItWorks: {
    sectionLabel: "how it works",
    headlineWhite: "three steps.",
    headlineGray: "you only do the first one.",
    description:
      "point your lead sources at us. we handle qualification and booking.",
    steps: [
      {
        number: "01",
        title: "connect your lead sources",
        description:
          "forms, ads, landing pages — wherever leads come in. we plug in and start responding within seconds of submission.",
        price: "10 minutes",
      },
      {
        number: "02",
        title: "we qualify and engage",
        description:
          "every lead gets contacted immediately. we ask your qualification questions, filter out the tire kickers, and move real prospects forward.",
        price: "we handle it",
      },
      {
        number: "03",
        title: "appointments on your calendar",
        description:
          "qualified leads get booked directly onto your closers' calendars. they show up to conversations that are already halfway to closed.",
        price: "your calendar",
      },
    ],
  },

  roiMath: {
    sectionLabel: "the math",
    headlineWhite: "what speed actually costs you.",
    headlineGray: "it's not what you think.",
    description:
      "a single setter costs $55K/yr. they work 8 hours a day, 5 days a week. leads come in 24/7.",
    steps: [
      {
        value: "$55K",
        label: "setter salary per year",
        annotation: "before benefits",
      },
      {
        value: "40hrs",
        label: "weekly coverage",
        annotation: "leads come in 168",
      },
      {
        value: "76%",
        label: "of leads go untouched",
        annotation: "outside business hours",
      },
      {
        value: "$0",
        label: "our setup fee",
        annotation: "pay per appointment",
      },
    ],
    bottomLine:
      "you're paying a full salary to cover a quarter of your lead flow. the rest just dies.",
  },

  qualifier: {
    sectionLabel: "who this is for",
    headlineWhite: "this works if leads matter.",
    headlineGray: "and yours aren't getting called fast enough.",
    description:
      "we work best with businesses that generate consistent inbound leads but can't respond fast enough to convert them.",
    industries: [
      "home services",
      "solar",
      "roofing",
      "insurance",
      "real estate",
      "legal",
      "med spa",
      "auto",
      "SaaS",
    ],
    criteria: [
      { text: "you generate 100+ inbound leads per month" },
      { text: "your average response time is over 30 minutes" },
      { text: "you have closers who can take booked appointments" },
      { text: "your deal value is $500+ per customer" },
    ],
    antiQualifier:
      "if you get 10 leads a month, you don't need us — you need to pick up the phone faster.",
  },

  cta: {
    sectionLabel: "next step",
    headlineWhite: "stop losing leads",
    headlineAccent: "to your own response time.",
    description:
      "book a 15-minute call. we'll look at your lead flow and tell you exactly how many you're losing.",
    buttonLabel: "Book a Call",
    buttonHref: CALENDLY_URL,
    footnote:
      "no retainer. no setup fee. you pay per booked appointment.",
  },
};
