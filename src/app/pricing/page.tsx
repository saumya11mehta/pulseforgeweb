'use client';

import Card from "@/components/Card";
import Button from "@/components/Button";
import { CheckIcon } from "@heroicons/react/24/outline";
import ClosedBetaForm from '@/components/ClosedBetaForm';
import { useState } from 'react';

const plans = [
  {
    name: "Basic",
    price: "Free",
    description: "Essential features to get started with your fitness journey",
    features: [
      "Track unlimited workouts",
      "Full exercise library",
      "Personal records tracking",
      "In-depth analytics with graphs",
    ],
    buttonText: "Apply for Beta",
    isPopular: false,
    buttonVariant: "secondary" as const
  },
  {
    name: "Premium",
    price: "$7.99",
    period: "once",
    description: "Advanced features for serious fitness enthusiasts",
    features: [
      "Track unlimited workouts",
      "Full exercise library",
      "Personal records tracking",
      "In-depth analytics with graphs",
      "No ads",
    ],
    buttonText: "Apply for Beta",
    isPopular: true,
    buttonVariant: "primary" as const
  },
  // {
  //   name: "Family",
  //   price: "$19.99",
  //   period: "per month",
  //   description: "Share the fitness journey with your loved ones",
  //   features: [
  //     "All Premium features included",
  //     "Up to 5 family member accounts",
  //     "Family challenges and competitions",
  //     "Shared progress tracking",
  //     "Family workout suggestions",
  //     "24/7 customer support"
  //   ],
  //   buttonText: "Choose Family Plan",
  //   isPopular: false,
  //   buttonVariant: "secondary" as const
  // }
];

export default function Pricing() {
  const [isBetaFormOpen, setIsBetaFormOpen] = useState(false);

  return (
    <div className="bg-surface min-h-screen">
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-surface-on mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-surface-on-variant max-w-3xl mx-auto">
            Choose the plan that fits your fitness needs. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className={`grid gap-8 mb-16 ${
          plans.length === 2 
            ? 'lg:grid-cols-2 max-w-4xl mx-auto' 
            : 'lg:grid-cols-3'
        }`}>
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`p-8 flex flex-col relative ${
                plan.isPopular ? "border-2 border-primary" : ""
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-on py-1 px-4 text-sm font-medium rounded-bl-xl rounded-tr-xl">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-surface-on mb-2">
                {plan.name}
              </h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-surface-on">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-surface-on-variant ml-2">
                    {plan.period}
                  </span>
                )}
              </div>
              <p className="text-surface-on-variant mb-6">
                {plan.description}
              </p>
              <ul className="mb-8 space-y-3 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                    <span className="text-surface-on-variant">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.buttonVariant}
                className="w-full py-3 rounded-full font-medium"
                onClick={() => setIsBetaFormOpen(true)}
              >
                {plan.buttonText}
              </Button>
            </Card>
          ))}
        </div>

        {/* <div className="bg-surface-container rounded-2xl p-8 sm:p-10 text-center">
          <h2 className="text-2xl font-bold text-surface-on mb-4">
            Need a custom plan for your organization?
          </h2>
          <p className="text-surface-on-variant mb-8 max-w-2xl mx-auto">
            We offer special pricing for gyms, fitness studios, and corporate wellness programs. Contact us to discuss your specific requirements.
          </p>
          <Button 
            variant="primary" 
            className="px-8 py-3 rounded-full"
          >
            Contact Sales
          </Button>
        </div> */}
      </section>

      {/* Closed Beta Form Modal */}
      <ClosedBetaForm 
        isOpen={isBetaFormOpen} 
        onClose={() => setIsBetaFormOpen(false)} 
      />
    </div>
  );
} 