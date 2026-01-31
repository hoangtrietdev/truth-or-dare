# 🎯 Quick Start Guide

Get your Truth or Dare PWA running in 2 minutes!

## 1️⃣ Install Dependencies

```bash
npm install
```

## 2️⃣ Start Development Server

```bash
npm run dev
```

## 3️⃣ Open Your Browser

Navigate to [http://localhost:3000](http://localhost:3000)

## 🎮 How to Play

1. **Choose a Mode**: Truth, Dare, or Both (Random)
2. **Toggle 18+ Mode**: Switch content rating (PG → R)
3. **Click "Start Game"**: Get your first challenge
4. **Click "Next Challenge"**: Keep the fun going!

## 📱 Test PWA Features

### On Desktop (Chrome/Edge):
- Look for the install icon (⊕) in the address bar
- Click to install as desktop app

### On Mobile:
- Open in Safari (iOS) or Chrome (Android)
- Tap Share → "Add to Home Screen"
- Launch from home screen like a native app

## 🎨 Customize

Want to personalize? Edit these files:

- **Colors**: `tailwind.config.js`
- **Content**: `src/pages/index.tsx`
- **Styles**: `src/styles/globals.css`
- **PWA Settings**: `public/manifest.json`

## 🚀 Deploy to Production

```bash
# Build for production
npm run build

# Test production build locally
npm start

# Deploy to Vercel (see DEPLOYMENT.md for details)
```

## ⚡ Key Features

- ✅ **3 Game Modes**: Truth, Dare, Both
- ✅ **18+ Toggle**: PG/PG-13/R ratings
- ✅ **Rate Limit Protection**: Smart API monitoring
- ✅ **PWA Ready**: Install as native app
- ✅ **Responsive**: Mobile-first design
- ✅ **Animated**: Smooth Framer Motion effects
- ✅ **Boyplaydn Theme**: Neon + Glassmorphism

## 🛠️ Tech Stack

- Next.js 14 (Pages Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Axios
- React Hot Toast

## 📚 Documentation

- Full details: `README.md`
- Deployment guide: `DEPLOYMENT.md`
- Icon generation: `public/ICON-GUIDE.md`

## 🆘 Troubleshooting

**Port already in use?**
```bash
npm run dev -- -p 3001
```

**Dependencies not installing?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build errors?**
```bash
npm run build
# Check terminal for specific error messages
```

## 🎉 That's It!

You now have a fully functional Truth or Dare PWA running locally. 

**Next Steps**:
1. Generate proper icons (see `public/ICON-GUIDE.md`)
2. Customize the design to your liking
3. Deploy to Vercel (see `DEPLOYMENT.md`)

**Made with 💜 using Next.js**
