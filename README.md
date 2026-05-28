# Vidmark Media Website

Premium creative studio website for Vidmark Media, built to showcase brand identity, graphic design, video editing, social media creative, and digital campaign work.

## Features

- Brand-led landing experience with Vidmark visual identity
- Hero video, animated loading screen, and smooth page transitions
- Services, featured work, brand logo showcase, workflow, skills, and contact sections
- Responsive layout for desktop, tablet, and mobile
- EmailJS-powered contact form for project enquiries

## Tech Stack

- React 18
- Vite
- Framer Motion
- Lucide React
- OGL for the aurora loading effect
- EmailJS

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm

### Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the root directory with your EmailJS credentials:

   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Build for production:

   ```bash
   npm run build
   ```

## Deployment

This site is ready for deployment on Vercel, Netlify, or any static hosting provider that supports Vite builds.

Add the same EmailJS environment variables in your hosting dashboard before deploying.

## Brand

Vidmark Media creates premium graphic design, video editing, brand identity, social media creative, and visual systems for digital-first brands.
