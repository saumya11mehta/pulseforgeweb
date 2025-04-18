'use client';

import Image from 'next/image';
// import Card from '../../components/Card';

export default function Features() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-secondary text-primary-on py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">Powerful Features</h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto px-2 mb-8">
            Discover all the ways PulseForge helps you track, optimize, and elevate your fitness journey.
          </p>
          <div className="flex justify-center">
            <a href="https://play.google.com/store/apps/details?id=com.eternal.pulseforge" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/play/GetItOnGooglePlay_Badge_Web_color_English.png"
                alt="Get it on Google Play"
                width={220}
                height={65}
                className="object-contain"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-10 md:py-16 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {featuresData.map((feature, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6 md:gap-12 mb-12 md:mb-20`}
            >
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <div className="bg-surface-container rounded-xl p-2 sm:p-4 relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
                  <Image 
                    src={feature.image}
                    alt={feature.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain p-2"
                    priority={index === 0}
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-surface-on">{feature.title}</h2>
                <p className="text-base sm:text-lg text-surface-on-variant mb-4 md:mb-6">{feature.description}</p>
                <ul className="space-y-2 md:space-y-3">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <div className="bg-primary rounded-full p-1 mr-3 mt-1 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 text-primary-on" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm sm:text-base text-surface-on-variant">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Features Grid */}
      {/* <section className="py-16 bg-surface-container">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-surface-on">More Great Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={24}
                    height={24}
                    className="text-primary"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-surface-on">{feature.title}</h3>
                <p className="text-surface-on-variant">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
}

const featuresData = [
  {
    title: "Workout Tracking",
    description: "Track every aspect of your workouts with precision and ease. Record sets, reps, weights, rest times, and more.",
    image: "/features/workout-tracking.png",
    benefits: [
      "Custom workout templates for quick starts",
      "Automatic tracking of personal records",
      "Rest timer with customizable alerts",
      "Exercise history and progress visualization"
    ]
  },
  {
    title: "In-depth Analytics",
    description: "Gain valuable insights into your performance with comprehensive analytics and visualization tools.",
    image: "/features/analytics.png",
    benefits: [
      "Performance trends over time",
      "See Daily, Weekly and Monthly progress",
      "Check your progress in the form of graphs",
    ]
  },
];