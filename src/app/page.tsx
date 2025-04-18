'use client';

import Image from "next/image";
import Button from '@/components/Button';
import Card from '@/components/Card';
import { FaChartBar, FaCalendarAlt, FaBullseye } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

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
                <a href="https://play.google.com/store/apps/details?id=com.eternal.pulseforge" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex justify-center sm:justify-start">
                  <Image 
                    src="/play/GetItOnGooglePlay_Badge_Web_color_English.png"
                    alt="Get it on Google Play"
                    width={200}
                    height={60}
                    className="w-full max-w-[280px] h-auto sm:w-[200px]"
                  />
                </a>
                <Button
                  variant="primary"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-primary-on w-full sm:w-auto"
                  onClick={() => router.push('/features')}
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-[500px] md:w-72 md:h-[580px]">
                <Image
                  src="/screenshots/login-portrait.png"
                  alt="PulseForge App Screenshot"
                  fill
                  sizes="(max-width: 768px) 256px, 288px"
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


      {/* Call to Action */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-surface-on">
            Ready to transform your fitness journey?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-surface-on-variant">
            Download PulseForge today and experience the future of workout tracking.
          </p>
          <a href="https://play.google.com/store/apps/details?id=com.eternal.pulseforge" target="_blank" rel="noopener noreferrer" className="inline-block w-full max-w-xs">
            <Image 
              src="/play/GetItOnGooglePlay_Badge_Web_color_English.png"
              alt="Get it on Google Play"
              width={240}
              height={70}
              className="object-contain w-full"
            />
          </a>
        </div>
      </section>
    </>
  );
}

// Features data
const features = [
  {
    title: "Comprehensive Tracking",
    description: "Track every aspect of your workout: sets, reps, weights, rest time, and even your personal notes.",
    icon: <GiWeightLiftingUp className="w-6 h-6 text-primary" />,
  },
  {
    title: "Detailed Analytics",
    description: "Get insights into your performance with visual representations of your progress over time.",
    icon: <FaChartBar className="w-6 h-6 text-primary" />,
  },
  {
    title: "Workout Planning",
    description: "Plan your workouts in advance and follow structured routines tailored to your goals.",
    icon: <FaCalendarAlt className="w-6 h-6 text-primary" />,
  },
  {
    title: "Goal Setting",
    description: "Set measurable fitness goals and track your journey toward achieving them.",
    icon: <FaBullseye className="w-6 h-6 text-primary" />,
  },
];

