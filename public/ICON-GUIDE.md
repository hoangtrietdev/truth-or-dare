# Truth or Dare PWA - Icon Generation Guide

## Required Icons

You need to create the following icon files for your PWA:

- `icon-192x192.png` (192×192 px)
- `icon-384x384.png` (384×384 px)
- `icon-512x512.png` (512×512 px)
- `favicon.ico` (32×32 px)
- `favicon-16x16.png` (16×16 px)
- `favicon-32x32.png` (32×32 px)

## Quick Generation Methods

### Option 1: Use Real Favicon Generator (Recommended)
1. Go to https://realfavicongenerator.net/
2. Upload a 512×512 px image
3. Customize settings for iOS, Android, etc.
4. Download and extract to `/public` folder

### Option 2: Use Figma/Canva
1. Create a 512×512 px artboard
2. Design your icon with the Boyplaydn theme
3. Export as PNG at different sizes
4. Convert one to ICO format using an online converter

### Option 3: Use ImageMagick (Command Line)
If you have a single 512×512 px PNG called `icon-master.png`:

```bash
# Generate different sizes
convert icon-master.png -resize 192x192 public/icon-192x192.png
convert icon-master.png -resize 384x384 public/icon-384x384.png
convert icon-master.png -resize 512x512 public/icon-512x512.png
convert icon-master.png -resize 32x32 public/favicon-32x32.png
convert icon-master.png -resize 16x16 public/favicon-16x16.png
convert icon-master.png -resize 32x32 public/favicon.ico
```

## Design Tips

- Use the Boyplaydn color palette (Cyan #06B6D4, Purple #8B5CF6, Pink #EC4899)
- Keep the design simple and recognizable at small sizes
- Use high contrast for visibility
- Consider using "T/D" or a dice icon as the main element
- Add a subtle glow effect for the Boyplaydn aesthetic

## Temporary Placeholder

Until you create your icons, the app will still work but won't have proper icons when installed as a PWA. The `icon.svg` file in `/public` serves as a reference for the design.
