# 🎮 Truth or Dare - Boyplaydn Edition

A high-performance Progressive Web App (PWA) built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Features a futuristic Boyplaydn aesthetic with glassmorphism effects.

## ✨ Features

- 🎯 **3 Game Modes**: Truth, Dare, or Both (Random)
- 🔞 **18+ Mode Toggle**: Switch between PG, PG-13, and R-rated content
- 🚀 **PWA Support**: Install as a native app on mobile devices
- ⚡ **Rate Limit Handling**: Smart API rate limit detection and user notifications
- 🎨 **Boyplaydn UI**: Dark theme with neon accents and glassmorphism
- 🌊 **Smooth Animations**: Powered by Framer Motion
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (Pages Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **HTTP Client**: Axios with custom interceptors
- **PWA**: next-pwa
- **Notifications**: react-hot-toast

## 📦 Installation

1. **Install dependencies**:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. **Run development server**:
```bash
npm run dev
```

3. **Open** [http://localhost:3000](http://localhost:3000) in your browser

## 🚀 Deployment (Vercel)

1. **Push to GitHub**:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and deploy

3. **Environment Variables** (if needed):
   - No environment variables required for this project

## 🎨 Project Structure

```
truth-dare-app/
├── public/
│   ├── manifest.json          # PWA manifest
│   └── icons/                 # App icons (add your own)
├── src/
│   ├── lib/
│   │   └── axios.ts          # Custom Axios instance with rate limiting
│   ├── pages/
│   │   ├── _app.tsx          # App wrapper with providers
│   │   ├── _document.tsx     # HTML document with PWA meta tags
│   │   └── index.tsx         # Main game page
│   └── styles/
│       └── globals.css       # Global styles and Tailwind
├── next.config.js            # Next.js config with PWA
├── tailwind.config.js        # Tailwind customization
└── tsconfig.json             # TypeScript config
```

## 🎯 API Integration

This app uses the [Truth or Dare Bot API](https://docs.truthordarebot.xyz/api-docs).

### Endpoints:
- `GET /v1/truth?rating={pg|pg13|r}` - Get a truth question
- `GET /v1/dare?rating={pg|pg13|r}` - Get a dare challenge
- `GET /v1/wyr?rating={pg|pg13|r}` - Get wyr truth or dare

### Rate Limiting:
- The app monitors `X-RateLimit-Remaining` and `X-RateLimit-Reset` headers
- Displays warnings when approaching limit
- Handles 429 errors with user-friendly messages
- Automatically blocks requests until rate limit resets

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the Boyplaydn color scheme:
```js
colors: {
  cyber: {
    purple: '#8B5CF6',
    cyan: '#06B6D4',
    pink: '#EC4899',
    // ... add your colors
  },
}
```

### Animations
Modify animations in `tailwind.config.js` or add custom CSS in `globals.css`.

### PWA Settings
Update `public/manifest.json` for app name, colors, and icons.

## 📱 PWA Setup

### Icons Required:
Place these in the `public/` folder:
- `icon-192x192.png`
- `icon-384x384.png`
- `icon-512x512.png`
- `favicon.ico`
- `favicon-16x16.png`
- `favicon-32x32.png`

You can generate icons from a single image using [Real Favicon Generator](https://realfavicongenerator.net/).

## 🔧 Build for Production

```bash
npm run build
npm start
```

## 📄 License

MIT License - feel free to use this project for your own purposes!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🙏 Credits

- API: [Truth or Dare Bot](https://docs.truthordarebot.xyz/)
- Fonts: [Google Fonts](https://fonts.google.com/) (Inter & Orbitron)
- Icons: Design your own or use a tool like Figma/Canva

---

**Made with 💜 by Boyplaydn**
