# PulseForge Website

This is the official marketing website for PulseForge, a comprehensive workout tracking application available on the Google Play Store.

## Features

- Modern design using Next.js and Tailwind CSS
- Responsive layout for mobile, tablet, and desktop
- Marketing pages showcasing app features
- Contact form for user inquiries
- Privacy policy and other legal pages

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd pulseforgeweb
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app/` - Main application pages
- `src/components/` - Reusable UI components
- `public/` - Static assets like images and icons 
- `scripts/` - Utility scripts for build and deployment

## App-Ads.txt Generation

The project includes automatic generation of the `app-ads.txt` file using environment variables. This file is required for app advertising platforms to verify the ownership of your app.

### Configuration

You can configure the app-ads.txt content in the `.env.local` file using either:

1. A complete content string:
```
APP_ADS_CONTENT=google.com, pub-1234567890123456, DIRECT, f080187651473589
```

2. Individual components:
```
AD_NETWORK=google.com
PUBLISHER_ID=pub-1234567890123456
AD_RELATIONSHIP=DIRECT
CERTIFICATION_AUTHORITY_ID=f080187651473589
```

### Generation

The app-ads.txt file is automatically generated during the build process. You can also generate it manually:

```bash
npm run generate-app-ads
```

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [React](https://reactjs.org/) - JavaScript library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library

## License

This project is proprietary and not open for redistribution.

## Contact

For questions or support, please email support@pulseforge.com
