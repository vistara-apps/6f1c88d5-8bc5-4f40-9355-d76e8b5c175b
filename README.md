# TreePal - Base Mini App

Plant trees. Prove impact. Grow your environmental legacy.

## Features

- 🌳 **Tree Planting Logger**: Drop a pin, upload a photo, track every tree
- ✅ **Satellite Verification**: Prove tree survival with NASA FIRMS data
- 📊 **Impact Portfolio**: Shareable webpage with all your plantings
- 🗺️ **Local Meetups**: Connect with nearby planters for group events
- 🏆 **Team Challenges**: Corporate CSR dashboards and competitions
- 📈 **Growth Tracker**: Upload photos over time, earn badges
- 🎯 **Farcaster Integration**: Share plantings as frames with embedded CTAs

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (via OnchainKit)
- **Styling**: Tailwind CSS with custom design system
- **Authentication**: MiniKit (Base Wallet)
- **Maps**: Mapbox GL JS
- **Images**: Uploadcare CDN

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy `.env.local.example` to `.env.local` and add your API keys:
   ```bash
   cp .env.local.example .env.local
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000)

## Theme Support

TreePal supports multiple blockchain themes:
- **Default**: Nature-inspired forest green theme
- **Celo**: Black background with yellow accents
- **Solana**: Dark purple with magenta accents
- **Base**: Dark blue with Base blue accents
- **Coinbase**: Navy with Coinbase blue accents

Visit `/theme-preview` to see all themes in action.

## Environment Variables

Required environment variables:

- `NEXT_PUBLIC_ONCHAINKIT_API_KEY`: Get from [Coinbase Developer Platform](https://portal.cdp.coinbase.com/)
- `NEXT_PUBLIC_MAPBOX_TOKEN`: Get from [Mapbox](https://account.mapbox.com/)
- `NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY`: Get from [Uploadcare](https://uploadcare.com/)

## Project Structure

```
app/
├── components/          # Reusable UI components
│   ├── Header.tsx
│   ├── BottomNav.tsx
│   ├── TreeCard.tsx
│   ├── ImpactStats.tsx
│   └── ThemeProvider.tsx
├── theme-preview/       # Theme showcase page
├── layout.tsx          # Root layout with providers
├── page.tsx            # Home page
├── globals.css         # Global styles and theme tokens
└── providers.tsx       # OnchainKit provider setup
```

## Design System

TreePal uses a comprehensive design system with:
- **Colors**: CSS custom properties for easy theming
- **Typography**: Inter font with semantic sizing
- **Spacing**: Consistent spacing scale (xs to xxl)
- **Shadows**: Card, card-hover, and modal shadows
- **Animations**: Fade-in, scale-in, and slide-up transitions

## License

MIT
