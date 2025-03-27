'use client';

import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

interface ClosedBetaFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ClosedBetaForm({ isOpen, onClose }: ClosedBetaFormProps) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    deviceType: 'android',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
    if (!formState.name || !formState.email) {
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

    if (formState.deviceType === 'ios') {
      setSubmitError('Sorry, the beta is currently only for Android devices.');
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formState.name,
          email: formState.email,
          subject: 'Closed Beta Application',
          message: `New Closed Beta Application:\nName: ${formState.name}\nEmail: ${formState.email}\nDevice Type: ${formState.deviceType}`,
        }
      );
      setSubmitSuccess(true);
      // Reset form after successful submission
      setFormState({
        name: '',
        email: '',
        deviceType: 'android',
      });
    } catch {
      setSubmitError('Failed to submit application. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-surface rounded-2xl p-8 max-w-md w-full mx-4 shadow-xl">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-surface-on">Apply for Closed Beta</h2>
          <p className="mt-2 text-surface-on-variant">
            Limited spots available. We&apos;ll review applications and get back to you soon.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-surface-on">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border-outline bg-surface-variant px-4 py-2.5 text-surface-on focus:border-primary focus:ring-primary"
              required
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-surface-on">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border-outline bg-surface-variant px-4 py-2.5 text-surface-on focus:border-primary focus:ring-primary"
              required
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="deviceType" className="block text-sm font-medium text-surface-on">
              Device Type
            </label>
            <select
              id="deviceType"
              name="deviceType"
              value={formState.deviceType}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border-outline bg-surface-variant px-4 py-2.5 text-surface-on focus:border-primary focus:ring-primary"
              style={{ backgroundColor: 'var(--color-surface-container)', color: 'var(--color-surface-text)' }}
              required
            >
              <option style={{ backgroundColor: 'var(--color-surface-container)', color: 'var(--color-surface-text)' }} value="android">Android</option>
              <option style={{ backgroundColor: 'var(--color-surface-container)', color: 'var(--color-surface-text)' }} value="ios">iOS</option>
            </select>
          </div>
          {submitError && (
            <div className="text-error text-sm bg-error/10 p-3 rounded-lg">{submitError}</div>
          )}
          {submitSuccess && (
            <div className="text-success text-sm bg-success/10 p-3 rounded-lg">
              Successfully applied for closed beta! We&apos;ll be in touch soon.
            </div>
          )}
          <div className="flex justify-end space-x-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 text-sm font-medium text-surface-on bg-surface-variant rounded-lg hover:bg-surface-variant/80 transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2.5 text-sm font-medium text-primary-on bg-primary rounded-lg hover:bg-primary/90 disabled:opacity-50 transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 