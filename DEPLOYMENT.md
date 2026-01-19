# Vercel Deployment Guide

## Pre-Deployment Checklist

✅ **Build Test**: Project builds successfully (`npm run build`)
✅ **TypeScript**: No type errors
✅ **Linting**: No linting errors
✅ **Static Generation**: All pages generate correctly
✅ **Dependencies**: All dependencies are in package.json

## Quick Deploy Steps

### 1. Push to Git Repository

```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### 2. Deploy to Vercel

#### Via Vercel Dashboard:
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your Git repository
4. Vercel will auto-detect:
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
5. Click "Deploy"

#### Via Vercel CLI:
```bash
npm i -g vercel
vercel
```

### 3. Post-Deployment

After deployment, verify:
- ✅ Homepage loads correctly
- ✅ French locale (`/fr`) works
- ✅ Arabic locale (`/ar`) works with RTL
- ✅ All navigation links work
- ✅ Language switcher functions
- ✅ All pages are accessible

## Build Configuration

The project uses:
- **Framework**: Next.js 14 (auto-detected by Vercel)
- **Node Version**: 18.x (default on Vercel)
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `.next` (auto-detected)

## Environment Variables

**No environment variables required** - the site works out of the box.

## Custom Domain Setup

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Performance Optimization

The site is already optimized:
- ✅ Static Site Generation (SSG)
- ✅ Image optimization enabled
- ✅ Code splitting
- ✅ CSS minification
- ✅ Production build size: ~87KB First Load JS

## Troubleshooting

### Build Fails
- Check Node.js version (should be 18+)
- Ensure all dependencies are in package.json
- Run `npm install` before building

### Pages Not Found
- Verify middleware.ts is in root
- Check locale routing configuration
- Ensure all pages are in `app/[locale]/` directory

### Styling Issues
- Verify Tailwind CSS is configured
- Check `tailwind.config.ts` exists
- Ensure `postcss.config.mjs` is present

## Support

For Vercel-specific issues, check:
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
