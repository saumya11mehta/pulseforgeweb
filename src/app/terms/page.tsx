'use client';

import React from 'react';

export default function TermsOfService() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-secondary text-primary-on py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Last updated: {currentDate}
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-lg max-w-none text-surface-on">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using PulseForge (&ldquo;the App&rdquo;), you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use the App.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
              <p>
                PulseForge is a workout tracking application that enables users to log workouts, track progress, 
                and set personal fitness goals. The App is available for Android devices through the Google Play Store.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
              <p>
                To use certain features of the App, you may be required to create an account. You are responsible 
                for maintaining the confidentiality of your account information and for all activities that occur 
                under your account.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
              <p>
                The App is available with both free and premium versions. The premium version is available through 
                a one-time purchase to remove advertisements. All purchases are final and non-refundable unless 
                required by applicable law.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">5. User Content</h2>
              <p>
                You retain all rights to any content you submit, post, or display on or through the App. By 
                submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, 
                reproduce, modify, and distribute your content for the purpose of providing and improving the App.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">6. Privacy</h2>
              <p>
                Your privacy is important to us. Our collection and use of personal information is governed by 
                our Privacy Policy, available at{' '}
                <a href="https://pulseforgeapp.com/privacy" className="text-primary hover:underline">
                  https://pulseforgeapp.com/privacy
                </a>.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">7. Health Disclaimer</h2>
              <p>
                The App is not a substitute for professional medical advice, diagnosis, or treatment. Always 
                seek the advice of your physician or other qualified health provider with any questions you may 
                have regarding a medical condition or before starting any exercise program.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, PulseForge shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages resulting from your use of or inability 
                to use the App.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. We will notify users of any material 
                changes through the App or via email. Continued use of the App after such modifications 
                constitutes acceptance of the updated terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of Ontario, Canada, 
                without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
              <p>
                For any questions regarding these Terms of Service, please contact us at{' '}
                <a href="mailto:support@pulseforgeapp.com" className="text-primary hover:underline">
                  support@pulseforgeapp.com
                </a>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
} 