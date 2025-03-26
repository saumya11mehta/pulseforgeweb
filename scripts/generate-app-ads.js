import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { config } from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

config({ path: '.env.local' });

// Example environment variables that might be used for app-ads.txt
// These should be defined in your .env.local or other environment configuration
const APP_ADS_CONTENT = process.env.APP_ADS_CONTENT || '';
const AD_NETWORK = process.env.AD_NETWORK || 'google.com';
const PUBLISHER_ID = process.env.PUBLISHER_ID || '123456789';
const RELATIONSHIP = process.env.AD_RELATIONSHIP || 'DIRECT';
const CERTIFICATION_AUTHORITY_ID = process.env.CERTIFICATION_AUTHORITY_ID || '';

// Create app-ads.txt content
// Format: <ad network domain>, <publisher ID>, <relationship>, <certification authority ID>
let content = '';

if (APP_ADS_CONTENT) {
  // Use the pre-configured content if available
  content = APP_ADS_CONTENT;
} else {
  // Generate based on individual variables
  content = `${AD_NETWORK}, ${PUBLISHER_ID}, ${RELATIONSHIP}`;
  if (CERTIFICATION_AUTHORITY_ID) {
    content += `, ${CERTIFICATION_AUTHORITY_ID}`;
  }
}

// Define the output path
const outputPath = path.join(__dirname, '../public/app-ads.txt');

// Write the file
fs.writeFileSync(outputPath, content);

console.log(`app-ads.txt has been generated at: ${outputPath}`); 