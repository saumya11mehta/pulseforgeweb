'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-primary">
      <div className="container mx-auto px-2 sm:px-6 md:px-8 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg" 
                alt="PulseForge Logo"
                width={50}
                height={50}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
              />
            </Link>
            <Link href="/" className="flex items-center">
              <Image
                  src="/logo-text.svg"
                  alt="PulseForge"
                  width={150}
                  height={25}
                  style={{ width: 'auto' }}
                  className="ml-1 h-5 sm:h-6 md:h-7 lg:h-8"
                />
              </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/features" className="text-primary-on font-medium">
              Features
            </Link>
            <Link href="/about" className="text-primary-on font-medium">
              About Us
            </Link>
            <Link href="/pricing" className="text-primary-on font-medium">
              Pricing
            </Link>
            <Link href="/faq" className="text-primary-on font-medium">
              FAQ
            </Link>
            <Link href="/privacy-policy" className="text-primary-on font-medium">
              Privacy Policy
            </Link>
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              type="button"
              className="ml-1 inline-flex items-center justify-center p-1.5 rounded-md text-primary-on focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-on"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <FiX className="block h-5 w-5" aria-hidden="true" />
              ) : (
                <FiMenu className="block h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-primary">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b border-primary-on/20">
              <Link href="/" className="flex items-center">
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
                  className="ml-2 h-6"
                />
              </Link>
              <button
                type="button"
                className="p-2 rounded-md text-primary-on focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-on"
                onClick={toggleMenu}
              >
                <FiX className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <nav className="flex-1 px-4 py-6 space-y-4">
              <Link 
                href="/features" 
                className="block text-lg text-primary-on font-medium py-2"
                onClick={toggleMenu}
              >
                Features
              </Link>
              <Link 
                href="/about" 
                className="block text-lg text-primary-on font-medium py-2"
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link 
                href="/pricing" 
                className="block text-lg text-primary-on font-medium py-2"
                onClick={toggleMenu}
              >
                Pricing
              </Link>
              <Link 
                href="/faq" 
                className="block text-lg text-primary-on font-medium py-2"
                onClick={toggleMenu}
              >
                FAQ
              </Link>
              <Link 
                href="/privacy-policy" 
                className="block text-lg text-primary-on font-medium py-2"
                onClick={toggleMenu}
              >
                Privacy Policy
              </Link>
            </nav>
            <div className="p-4 border-t border-primary-on/20">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 