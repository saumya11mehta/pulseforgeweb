import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - PulseForge",
  description: "Frequently asked questions about PulseForge fitness tracking app",
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
} 