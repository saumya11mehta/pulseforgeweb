'use client';

import Image from 'next/image';
import Card from '../../components/Card';
import Button from '@/components/Button';
import ClosedBetaForm from '@/components/ClosedBetaForm';
import { useState } from 'react';

export default function About() {
  const [isBetaFormOpen, setIsBetaFormOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-secondary text-primary-on py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">About PulseForge</h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto px-2">
            Our mission is to make fitness tracking simple, insightful, and motivating.
          </p>
          <div className="mt-8">
            <Button
              variant="primary"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-primary-on"
              onClick={() => setIsBetaFormOpen(true)}
            >
              Apply for Closed Beta
            </Button>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-10 md:py-16 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8 text-center text-surface-on">Our Story</h2>
          <div className="prose prose-sm sm:prose-base lg:prose-lg mx-auto text-surface-on-variant px-2">
            <p>
              PulseForge was developed by Saumya Mehta in 2025 with a clear vision: to create a workout tracking app
              that combines powerful functionality with an exceptional user interface. The primary goal was to make
              fitness tracking not just effective, but also enjoyable and intuitive.
            </p>
            <p className="mt-3 md:mt-4">
              As a developer passionate about both fitness and technology, Saumya recognized the need for a workout
              tracking solution that would stand out not just for its features, but for its user experience. The
              focus was on creating an app that would make tracking workouts feel natural and engaging.
            </p>
            <p className="mt-3 md:mt-4">
              After extensive development and testing, PulseForge is set to launch on the Google Play Store,
              bringing its innovative approach to workout tracking to users worldwide. The app represents the
              perfect blend of functionality and design, making it an ideal companion for anyone on their fitness journey.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-10 md:py-16 bg-surface-container">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 md:mb-12 text-center text-surface-on">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl text-primary">{value.icon}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-surface-on">{value.title}</h3>
                <p className="text-sm sm:text-base text-surface-on-variant">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-10 md:py-16 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 md:mb-12 text-center text-surface-on">Meet Our Team</h2>
          <div className="grid grid-cols-1 max-w-xs sm:max-w-sm md:max-w-md mx-auto">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto relative mb-3 md:mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 144px, 192px"
                    className="object-cover rounded-full"
                    priority
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-surface-on">{member.name}</h3>
                <p className="text-sm sm:text-base text-surface-on-variant">{member.role}</p>
              </div>
            ))}
          </div>
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

const values = [
  {
    icon: "🔍",
    title: "Transparency",
    description: "We believe in being open about our practices and honest with our users. Your data is yours, and we're committed to protecting it."
  },
  {
    icon: "🚀",
    title: "Innovation",
    description: "We continuously strive to improve our app with cutting-edge features that enhance the workout tracking experience."
  },
  {
    icon: "❤️",
    title: "User-Centric",
    description: "Every feature we develop is based on real user feedback and needs. Your success is our success."
  }
];

const team = [
  {
    name: "Saumya Mehta",
    role: "Founder & Developer",
    image: "/team/saumya.jpg"
  },
]; 