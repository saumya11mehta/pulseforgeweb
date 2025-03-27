'use client';

import Card from "@/components/Card";
import Button from "@/components/Button";
import ClosedBetaForm from '@/components/ClosedBetaForm';
import { useState } from 'react';

const faqs = [
  {
    question: "What is PulseForge?",
    answer: "PulseForge is a comprehensive fitness tracking app that helps you monitor your workouts, set goals, and track your progress. It offers a range of features including custom workout templates and progress tracking."
  },
  {
    question: "Is PulseForge available on iOS?",
    answer: "Currently, PulseForge is only available on Android devices through the Google Play Store. We are working on an iOS version and plan to release it in the near future."
  },
  {
    question: "Is PulseForge free to use?",
    answer: "PulseForge offers a free basic plan with limited ads. For ad-free access to the app, we offer premium subscription plan. Check our pricing page for more details."
  },
  {
    question: "How do I track my workouts?",
    answer: "After downloading PulseForge, you can track your workouts by creating custom workout routines and selecting from our library of exercises or by adding your own exercises. The app allows you to log sets, reps, weights, and rest times, and provides analytics to track your progress over time."
  },
  {
    question: "How does PulseForge protect my privacy?",
    answer: "We take your privacy seriously. PulseForge only collects data necessary for the app's functionality, and we never sell your personal information to third parties. You can read our full privacy policy for more details."
  },
  {
    question: "How can I contact support?",
    answer: "If you have any issues or questions not covered in our FAQ, please visit our Contact page to submit a support ticket, or email us directly at support@pulseforge.com."
  }
];

export default function FAQ() {
  const [isBetaFormOpen, setIsBetaFormOpen] = useState(false);

  return (
    <div className="bg-background min-h-screen">
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-surface-on mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-surface-on-variant max-w-3xl mx-auto">
            Find answers to common questions about PulseForge and how it can help you achieve your fitness goals.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 mb-16">
          {faqs.map((faq, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-surface-on">
                {faq.question}
              </h3>
              <p className="text-surface-on-variant">
                {faq.answer}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-surface-on mb-4">
            Still have questions?
          </h2>
          <p className="text-surface-on-variant mb-8 max-w-2xl mx-auto">
            If you couldn&apos;t find the answer to your question, feel free to contact our support team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              variant="primary" 
              className="px-8 py-3 rounded-full"
            >
              Contact Support
            </Button>
            <Button 
              variant="secondary"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full shadow-lg"
              onClick={() => setIsBetaFormOpen(true)}
            >
              Apply for Closed Beta
            </Button>
          </div>
        </div>
      </section>

      {/* Closed Beta Form Modal */}
      <ClosedBetaForm 
        isOpen={isBetaFormOpen} 
        onClose={() => setIsBetaFormOpen(false)} 
      />
    </div>
  );
} 