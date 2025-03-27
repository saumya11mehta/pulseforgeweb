import { Metadata } from 'next';
import FeaturesPage from './page';

export const metadata: Metadata = {
  title: 'Features | PulseForge',
  description: 'Discover the powerful features of PulseForge, the ultimate workout tracking application.',
};

export default function FeaturesLayout() {
  return <FeaturesPage />;
} 