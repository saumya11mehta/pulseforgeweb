'use client';

import Image from "next/image";
import Button from '@/components/Button';
import Card from '@/components/Card';
import { FaChartBar, FaCalendarAlt, FaBullseye } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";
import ClosedBetaForm from '@/components/ClosedBetaForm';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isBetaFormOpen, setIsBetaFormOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="from-primary to-primary/50 bg-gradient-to-b text-primary-on py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Track Your Fitness Journey with PulseForge
              </h1>
              <p className="mt-4 text-lg md:text-xl text-primary-on/90">
                The ultimate workout tracking companion that helps you achieve your fitness goals.
                Monitor progress, analyze performance, and stay motivated.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  variant="primary"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-primary-on"
                  onClick={() => setIsBetaFormOpen(true)}
                >
                  Apply for Closed Beta
                </Button>
                <Link href="/features">
                  <Button
                    variant="primary"
                    className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-primary-on"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-[500px] md:w-72 md:h-[580px]">
                <Image
                  src="/screenshots/login-portrait.png"
                  alt="PulseForge App Screenshot"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-surface-on">
              Why Choose PulseForge?
            </h2>
            <p className="mt-4 text-lg text-surface-on-variant">
              Our app is designed to make your fitness journey easier, more effective, and more enjoyable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-surface-on">{feature.title}</h3>
                <p className="text-surface-on-variant">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-20 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-surface-on">
              What Our Users Say
            </h2>
            <p className="mt-4 text-lg text-surface-on-variant">
              Thousands of fitness enthusiasts trust PulseForge for their workout tracking needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="p-8 border border-outline"
              >
                <div className="flex items-center mb-4">
                  <div className="flex text-primary">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
                <p className="text-surface-on-variant mb-6">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-surface rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-surface-on">{testimonial.name}</h4>
                    <p className="text-sm text-surface-on-variant">{testimonial.title}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 from-primary/50 to-primary bg-gradient-to-b text-primary-on">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Transform Your Workouts?</h2>
          <p className="mt-4 text-xl text-primary-on/80 max-w-2xl mx-auto">
            Join thousands of fitness enthusiasts who have taken their training to the next level with PulseForge.
          </p>
          <Button
            variant="primary"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-primary-on mt-8"
            onClick={() => setIsBetaFormOpen(true)}
          >
            Apply for Closed Beta
          </Button>
        </div>
      </section>

      {/* Closed Beta Form Modal */}
      <ClosedBetaForm 
        isOpen={isBetaFormOpen} 
        onClose={() => setIsBetaFormOpen(false)} 
      />
    </>
  );
}

const features = [
  {
    icon: <FaChartBar size={24} className="text-primary" />,
    title: 'Advanced Analytics',
    description: 'Track your progress with detailed charts and insights that help you understand your performance over time.',
  },
  {
    icon: <FaCalendarAlt size={24} className="text-primary" />,
    title: 'Workout Planning',
    description: 'Plan your workouts in advance with our intuitive calendar and scheduling tools.',
  },
  {
    icon: <FaBullseye size={24} className="text-primary" />,
    title: 'Goal Setting',
    description: 'Set personalized fitness goals and track your journey to achieving them.',
  },
  {
    icon: <GiWeightLiftingUp size={24} className="text-primary" />,
    title: 'Detailed Exercise Library',
    description: 'Access a comprehensive library of exercises with proper form instructions.',
  },
];

