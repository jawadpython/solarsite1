# Tawfir Energy - Solar Solutions Website

A modern, multilingual website for Tawfir Energy, showcasing solar energy solutions in Morocco.

## Features

- 🌍 **Multilingual Support**: French and Arabic (RTL support)
- 🎨 **Modern Design**: Bold, contemporary UI with vibrant colors
- 📱 **Fully Responsive**: Optimized for all devices
- ⚡ **Performance Optimized**: Fast loading with Next.js 14
- 🎯 **SEO Friendly**: Optimized metadata and structure

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# For production
vercel --prod
```

### Environment Variables

No environment variables are required for basic deployment. The site works out of the box.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── [locale]/          # Locale-based routing
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── sections/          # Page sections
│   ├── Navbar.tsx         # Navigation
│   └── Footer.tsx         # Footer
├── lib/                   # Utilities
│   ├── i18n.ts           # i18n configuration
│   └── translations.ts   # Translation helper
├── messages/              # Translation files
│   ├── fr.json           # French translations
│   └── ar.json           # Arabic translations
├── public/                # Static assets
└── middleware.ts         # Locale middleware
```

## Build Output

The build generates static pages for all locales:
- `/fr` - French homepage
- `/ar` - Arabic homepage
- `/fr/about`, `/ar/about` - About pages
- `/fr/services`, `/ar/services` - Services pages
- And more...

## Performance

- ✅ Static Site Generation (SSG)
- ✅ Optimized images
- ✅ Code splitting
- ✅ CSS optimization
- ✅ Production build size: ~87KB First Load JS

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private - Tawfir Energy
