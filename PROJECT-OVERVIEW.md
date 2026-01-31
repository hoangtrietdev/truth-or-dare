# 🎮 Truth or Dare PWA - Project Overview

## 📋 Project Summary

A production-ready Progressive Web App built as a futuristic Truth or Dare game with Boyplaydn aesthetics. Built with Next.js 14 (Pages Router), TypeScript, Tailwind CSS, and Framer Motion.

## 🏗️ Architecture

### Core Technologies
- **Framework**: Next.js 14.1.0 (Pages Router)
- **Language**: TypeScript 5.3.3
- **Styling**: Tailwind CSS 3.4.1
- **Animations**: Framer Motion 11.0.3
- **HTTP Client**: Axios 1.6.5 (custom instance)
- **Notifications**: React Hot Toast 2.4.1
- **PWA**: next-pwa 5.6.0

### API Integration
- **Source**: Truth or Dare Bot API (https://api.truthordarebot.xyz/v1)
- **Endpoints**:
  - `/truth?rating={pg|pg13|r}` - Get truth questions
  - `/dare?rating={pg|pg13|r}` - Get dare challenges
  - `/random?rating={pg|pg13|r}` - Get random truth or dare
- **Rate Limiting**: Monitored via headers (`X-RateLimit-Remaining`, `X-RateLimit-Reset`)

## 📁 Project Structure

```
truth-dare-app/
├── public/
│   ├── manifest.json              # PWA manifest configuration
│   ├── icon.svg                   # Icon design reference
│   └── ICON-GUIDE.md             # Icon generation instructions
│
├── src/
│   ├── lib/
│   │   └── axios.ts              # Custom Axios instance with interceptors
│   │
│   ├── pages/
│   │   ├── _app.tsx              # App wrapper with Toaster provider
│   │   ├── _document.tsx         # HTML document with PWA meta tags
│   │   └── index.tsx             # Main game page (game engine)
│   │
│   └── styles/
│       └── globals.css           # Global styles + Tailwind + animations
│
├── next.config.js                # Next.js + PWA configuration
├── tailwind.config.js            # Tailwind customization (colors, animations)
├── tsconfig.json                 # TypeScript configuration
├── postcss.config.js             # PostCSS configuration
├── package.json                  # Dependencies and scripts
├── .gitignore                    # Git ignore rules
│
├── README.md                     # Full project documentation
├── QUICKSTART.md                 # Quick start guide (2-minute setup)
└── DEPLOYMENT.md                 # Deployment guide (Vercel)
```

## 🎯 Key Features

### 1. Game Modes
- **Truth**: Fetch truth questions only
- **Dare**: Fetch dare challenges only
- **Both**: Random selection (truth or dare)

### 2. Content Rating System
- **PG**: Family-friendly content
- **PG-13**: Teen-appropriate content
- **R**: Adult content (18+ mode)
- Toggle switch with smooth animations

### 3. Rate Limit Handling
- **Proactive Monitoring**: Tracks remaining API calls via headers
- **User Warnings**: Shows toast when approaching limit (≤5 requests)
- **429 Error Handling**: Graceful error display with countdown
- **Request Blocking**: Prevents requests until rate limit resets

### 4. PWA Capabilities
- **Installable**: Add to home screen (iOS/Android/Desktop)
- **Offline Support**: Service worker caching
- **Native Feel**: Standalone display mode
- **Optimized**: Fast loading and smooth performance

### 5. UI/UX Design
- **Theme**: Dark Boyplaydn with glassmorphism
- **Colors**: Cyan (#06B6D4), Purple (#8B5CF6), Pink (#EC4899)
- **Typography**: Inter (body) + Orbitron (headings)
- **Animations**: 
  - Card swipe effects
  - Glow animations
  - Float animations
  - Smooth transitions
- **Responsive**: Mobile-first, scales to desktop

## 🔧 Configuration Files

### next.config.js
- PWA configuration via `next-pwa`
- Service worker generation
- Build optimizations
- SWC minification

### tailwind.config.js
- Custom color palette (cyber theme)
- Custom animations (glow, float, slide-up)
- Keyframe definitions
- Extended utility classes

### tsconfig.json
- Strict mode enabled
- Path aliases (`@/*` → `./src/*`)
- ES modules support
- DOM types included

### manifest.json
- App name and description
- Theme colors (#020617, #06B6D4)
- Icon specifications (192, 384, 512)
- Standalone display mode
- Portrait orientation

## 📦 Dependencies

### Production
```json
{
  "axios": "^1.6.5",           // HTTP client
  "framer-motion": "^11.0.3",  // Animations
  "next": "^14.1.0",           // Framework
  "react": "^18.2.0",          // UI library
  "react-dom": "^18.2.0",      // React DOM
  "react-hot-toast": "^2.4.1"  // Notifications
}
```

### Development
```json
{
  "@types/node": "^20.11.5",
  "@types/react": "^18.2.48",
  "@types/react-dom": "^18.2.18",
  "autoprefixer": "^10.4.17",
  "eslint": "^8.56.0",
  "eslint-config-next": "^14.1.0",
  "next-pwa": "^5.6.0",
  "postcss": "^8.4.33",
  "tailwindcss": "^3.4.1",
  "typescript": "^5.3.3"
}
```

## 🎨 Design System

### Color Palette
```css
cyber-darker:  #020617  /* Background base */
cyber-dark:    #0F172A  /* Secondary background */
cyber-cyan:    #06B6D4  /* Primary accent */
cyber-purple:  #8B5CF6  /* Secondary accent */
cyber-pink:    #EC4899  /* Tertiary accent */
```

### Typography
- **Headings**: Orbitron (900, 700, 600)
- **Body**: Inter (400, 500, 600, 700)
- **Tracking**: Wide for uppercase text

### Effects
- **Glassmorphism**: `backdrop-blur` + transparent backgrounds
- **Neon Glow**: Animated box-shadows
- **Float Animation**: Subtle up/down movement
- **Gradient Overlays**: Multi-color backgrounds

## 🚀 Scripts

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 📊 Performance Targets

- **Lighthouse Performance**: 90+
- **Lighthouse PWA**: 90+
- **Lighthouse Accessibility**: 90+
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s

## 🔐 Security

- No sensitive data stored
- No authentication required
- API calls are read-only
- Rate limiting prevents abuse
- HTTPS required for PWA features

## 🧪 Testing Checklist

- [ ] All game modes work (Truth/Dare/Both)
- [ ] 18+ toggle updates rating correctly
- [ ] Rate limit warnings appear at ≤5 requests
- [ ] 429 errors are handled gracefully
- [ ] Animations are smooth (60 FPS)
- [ ] PWA installs on mobile devices
- [ ] PWA installs on desktop browsers
- [ ] Responsive on all screen sizes
- [ ] Toast notifications appear correctly
- [ ] Loading states display properly

## 📈 Future Enhancements

Potential improvements:
- [ ] Add history/favorites feature
- [ ] Implement multiplayer mode
- [ ] Add custom question categories
- [ ] Include sound effects
- [ ] Add share functionality
- [ ] Implement dark/light theme toggle
- [ ] Add language support (i18n)
- [ ] Include analytics tracking
- [ ] Add user profiles
- [ ] Implement offline mode with cached questions

## 🤝 Contributing

This is a template project designed for easy customization and extension. Feel free to:
- Fork and modify
- Add new features
- Improve the design
- Optimize performance
- Fix bugs

## 📝 License

MIT License - Use freely for personal or commercial projects.

## 🙏 Acknowledgments

- **API**: Truth or Dare Bot (https://docs.truthordarebot.xyz/)
- **Fonts**: Google Fonts (Inter & Orbitron)
- **Framework**: Vercel Next.js team
- **Styling**: Tailwind Labs

## 📞 Support & Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind Docs**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **PWA Guide**: https://web.dev/progressive-web-apps/

---

**Built with 💜 as a showcase of modern web development practices**
