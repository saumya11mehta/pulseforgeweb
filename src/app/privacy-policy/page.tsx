import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | PulseForge',
  description: 'PulseForge workout tracking app privacy policy. Learn how we collect, use, and protect your data.',
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
        <p>
          Welcome to PulseForge (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We respect your privacy and are committed to protecting your personal data. 
          This privacy policy explains how we collect, use, and protect information about you when you use our mobile application PulseForge (the &quot;App&quot;).
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
        <p>We collect the following types of information:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>
            <strong>Personal Information:</strong> When you create an account, we collect your name and Google login details through OAuth authentication.
          </li>
          <li>
            <strong>Health and Fitness Data:</strong> We collect data you input into the App, such as body measurements and workout logs which are essential for the app&apos;s functionality.
          </li>
          <li>
            <strong>Device Information:</strong> While we currently do not collect device information, we may collect this information in the future to improve our services.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Data Storage and Sync</h2>
        <p>
          By default, all your information is stored locally on your device. We offer an optional cloud sync feature that allows you to sync your data with Google Drive. 
          This feature is only enabled when you explicitly choose to do so. When enabled, your data will be securely synced with your Google Drive account.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Provide and maintain the App&apos;s core functionality</li>
          <li>Enable cloud sync with Google Drive when requested</li>
          <li>Display personalized content and features</li>
          <li>Improve our services</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Services</h2>
        <p>
          We use Google AdMob for displaying advertisements in our app. We do not share any of your personal information with third-party providers. 
          Any data sharing with Google services (such as Google Drive sync) only occurs with your explicit consent.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights and Choices</h2>
        <p>
          You have control over your data:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>You can choose whether to enable cloud sync with Google Drive</li>
          <li>You can access and modify your data through the app</li>
          <li>You can delete your account and associated data at any time</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
        <p>
          We take reasonable measures to protect your personal information. When using cloud sync, your data is encrypted during transmission 
          and storage. However, no security system is impenetrable, and we cannot guarantee the security of your information.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to this Privacy Policy</h2>
        <p>
          We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the &quot;Last updated&quot; date. 
          You are advised to review this privacy policy periodically for any changes.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
        <p>
          If you have any questions about this privacy policy, please contact us at:
        </p>
        <p>
          <strong>Email:</strong> privacy@pulseforgeapp.com
        </p>
      </div>
    </div>
  );
} 