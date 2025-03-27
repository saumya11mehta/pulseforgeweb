import { Metadata } from "next";
import PricingPage from "./page";

export const metadata: Metadata = {
  title: "Pricing - PulseForge",
  description: "Simple, transparent pricing plans for PulseForge fitness tracking app",
};

export default function PricingLayout() {
  return <PricingPage />;
} 