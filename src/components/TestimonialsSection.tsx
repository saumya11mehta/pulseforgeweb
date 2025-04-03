'use client';

import Card from '@/components/Card';
import Image from 'next/image';

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-surface">
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
    </section>
  );
}

const testimonials = [
  {
    text: "PulseForge has completely transformed how I track my workouts. The analytics are incredibly detailed!",
    name: "Alex Johnson",
    title: "Fitness Enthusiast",
    avatar: "/avatars/user1.jpg",
  },
  {
    text: "As a personal trainer, I recommend PulseForge to all my clients. It's intuitive and comprehensive.",
    name: "Sarah Miller",
    title: "Certified Personal Trainer",
    avatar: "/avatars/user2.jpg",
  },
  {
    text: "The goal setting feature has helped me stay consistent with my workouts for the first time ever.",
    name: "Michael Chen",
    title: "Marathon Runner",
    avatar: "/avatars/user3.jpg",
  },
]; 