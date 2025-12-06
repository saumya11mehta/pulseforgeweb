'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FiInstagram } from 'react-icons/fi';
import { SiDiscord } from 'react-icons/si';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <footer className="bg-primary text-primary-on">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <div className="flex items-center">
              <Image
                src="/logo.svg"
                alt="PulseForge Logo"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <Image
                src="/logo-text.svg"
                alt="PulseForge"
                width={120}
                height={20}
                style={{ width: 'auto' }}
                className="ml-2 h-5"
              />
            </div>
            <p className="mt-4 text-primary-on/70 max-w-md">
              Track your workouts, set goals, and achieve fitness success with PulseForge. 
              The most comprehensive workout tracking application available on Google Play Store.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.instagram.com/pulseforgeapp/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary-on transition-colors">
                <FiInstagram className="h-6 w-6" />
              </a>
              <a href="https://discord.gg/9GhpQ9b4Ep" target="_blank" rel="noopener noreferrer" aria-label="Discord" className="hover:text-primary-on transition-colors">
                <SiDiscord className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-primary-on/70 hover:text-primary-on transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-on/70 hover:text-primary-on transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-primary-on/70 hover:text-primary-on transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                {isMounted && (
                  <a 
                    href="https://www.pulseforgeapp.com/privacy-policy" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary-on/70 hover:text-primary-on transition-colors"
                    aria-label="Privacy Policy (opens in a new tab)"
                  >
                    Privacy Policy
                  </a>
                )}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-on/20 text-center text-sm text-primary-on/70">
          <p>&copy; {new Date().getFullYear()} PulseForge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 