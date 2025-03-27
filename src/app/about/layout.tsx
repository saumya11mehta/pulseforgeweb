import { Metadata } from 'next';
import AboutPage from './page';

export const metadata: Metadata = {
  title: 'About Us | PulseForge',
  description: 'Learn about the team behind PulseForge, the ultimate workout tracking application.',
};

export default function AboutLayout() {
  return <AboutPage />;
} 