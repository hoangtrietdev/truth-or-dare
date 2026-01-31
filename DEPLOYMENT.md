# 🚀 Deployment Guide

## Prerequisites
- Node.js 18.x or higher
- npm, yarn, or pnpm
- Git
- A Vercel account (free tier works great)

## Step 1: Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

## Step 2: Test Locally

```bash
# Development mode
npm run dev

# Production build test
npm run build
npm start
```

Visit `http://localhost:3000` to test the app.

## Step 3: Generate PWA Icons

Before deploying, you should generate proper app icons:

1. Visit https://realfavicongenerator.net/
2. Upload a 512×512 px icon (use the design in `/public/icon.svg` as reference)
3. Download the generated icons
4. Place them in the `/public` folder

Required files:
- `icon-192x192.png`
- `icon-384x384.png`
- `icon-512x512.png`
- `favicon.ico`
- `favicon-16x16.png`
- `favicon-32x32.png`

## Step 4: Deploy to Vercel

### Method A: Vercel CLI (Fastest)

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Method B: GitHub Integration (Recommended)

1. **Initialize Git repository**:
```bash
git init
git add .
git commit -m "Initial commit: Truth or Dare PWA"
```

2. **Push to GitHub**:
```bash
# Create a new repository on GitHub first
git remote add origin https://github.com/YOUR_USERNAME/truth-dare-pwa.git
git branch -M main
git push -u origin main
```

3. **Deploy via Vercel Dashboard**:
   - Go to https://vercel.com/new
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

4. **Auto-deployments**:
   - Every push to `main` branch will auto-deploy
   - Pull requests create preview deployments

## Step 5: Post-Deployment

### Test PWA Installation

**On Mobile (iOS/Android)**:
1. Open your deployed URL in Safari (iOS) or Chrome (Android)
2. Tap the share button
3. Tap "Add to Home Screen"
4. Test the installed app

**On Desktop (Chrome/Edge)**:
1. Visit your deployed URL
2. Look for the install icon in the address bar
3. Click "Install"
4. Test the installed app

### Performance Testing

1. **Lighthouse Audit**:
   - Open Chrome DevTools
   - Go to "Lighthouse" tab
   - Run audit for Performance, PWA, Accessibility
   - Aim for 90+ scores

2. **Test Rate Limiting**:
   - Click the button rapidly to fetch many questions
   - Verify rate limit warnings appear
   - Verify 429 error handling works

## Optimization Tips

### 1. Configure Custom Domain
In Vercel dashboard:
- Go to Settings → Domains
- Add your custom domain
- Follow DNS configuration instructions

### 2. Enable Analytics
```bash
# Install Vercel Analytics
npm install @vercel/analytics
```

Add to `_app.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
```

### 3. Environment Variables (if needed)
In Vercel dashboard:
- Go to Settings → Environment Variables
- Add any API keys or secrets
- Redeploy to apply changes

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### PWA Not Installing
- Check that all icons exist in `/public`
- Verify `manifest.json` is valid
- Test on HTTPS (required for PWA)
- Check browser console for errors

### Rate Limit Issues
- The API has generous limits
- Rate limit info is stored in memory (resets on page refresh)
- In production, implement Redis/KV for persistent rate limit tracking

## Production Checklist

- [ ] All icons generated and placed in `/public`
- [ ] Test app on multiple devices
- [ ] Run Lighthouse audit (scores 90+)
- [ ] Test PWA installation on mobile
- [ ] Test rate limit handling
- [ ] Verify all game modes work (Truth/Dare/Both)
- [ ] Test 18+ toggle functionality
- [ ] Check responsive design on all screen sizes
- [ ] Test error handling (network issues, API errors)
- [ ] Add custom domain (optional)
- [ ] Set up analytics (optional)

## Monitoring

### Vercel Analytics
- View deployment logs in Vercel dashboard
- Monitor performance metrics
- Track visitor analytics

### Error Tracking (Optional)
Consider integrating:
- Sentry for error tracking
- LogRocket for session replay
- Google Analytics for user behavior

## Updates & Maintenance

```bash
# Update dependencies
npm update

# Check for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

## Support

- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Docs**: https://vercel.com/docs
- **API Docs**: https://docs.truthordarebot.xyz/

---

**Happy Deploying! 🚀**
