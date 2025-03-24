'use client';

import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

// Metadata is moved to a separate file since 'use client' components can't export metadata
// This will be handled by layout.tsx or a separate metadata.tsx file

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    // Basic validation
    if (!formState.name || !formState.email || !formState.subject || !formState.message) {
      setSubmitError('All fields are required');
      setIsSubmitting(false);
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setSubmitError('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }
    
    try {
      if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID) {
        throw new Error('EmailJS service ID or template ID is missing');
      }
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formState
      );

      setSubmitSuccess(true);
      setFormState({
      
  name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Failed to send message');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-secondary text-primary-on py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Have questions or feedback? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-surface-on">Get In Touch</h2>
                <p className="text-surface-on-variant mb-8">
                  Have a question about PulseForge or need help with your account? 
                  Our team is here to help you.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-surface-on">Email</h3>
                      <p className="text-surface-on-variant">contact@pulseforgeapp.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-surface-on">Send us a Message</h2>
                
                {submitSuccess ? (
                  <div className="bg-secondary/10 border border-secondary/20 text-secondary-on-container px-4 py-3 rounded">
                    <p className="font-medium">Message sent successfully!</p>
                    <p className="text-sm">We&apos;ll get back to you as soon as possible.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-surface-on mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-outline rounded-md focus:ring-primary focus:border-primary bg-surface-container text-surface-on"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-surface-on mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-outline focus:ring-primary focus:border-primary bg-surface-container text-surface-on"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-surface-onmb-1">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-outline rounded-md focus:ring-primary focus:border-primary bg-surface-container text-surface-on"
                      >
                        <option value="">Select a subject</option>
                        <option value="support">General Support</option>
                        <option value="feedback">App Feedback</option>
                        <option value="bug">Report a Bug</option>
                        <option value="feature">Feature Request</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-surface-on mb-1">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 border border-outline focus:ring-primary focus:border-primary bg-surface-container text-surface-on"
                      ></textarea>
                    </div>
                    
                    {submitError && (
                      <div className="bg-error/10 border border-error/20 text-error-on-container px-4 py-3 rounded">
                        {submitError}
                      </div>
                    )}
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-primary-on bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-70"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 