import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Clawdad | Done-for-You AI Agent Deployment",
  description:
    "Production OpenClaw agent systems deployed to your infrastructure. Frontier technology, honest deployment, early access pricing. From discovery call to running agents in weeks.",
  openGraph: {
    title: "Clawdad | Done-for-You AI Agent Deployment",
    description:
      "Production OpenClaw agent systems deployed to your infrastructure. Frontier technology, honest deployment, early access pricing.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
