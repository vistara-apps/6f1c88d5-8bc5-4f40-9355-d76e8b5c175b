'use client';

import { useTheme } from '../components/ThemeProvider';
import { Header } from '../components/Header';
import { ImpactStats } from '../components/ImpactStats';
import { TreeCard } from '../components/TreeCard';

export default function ThemePreview() {
  const { theme, setTheme } = useTheme();

  const themes = [
    { id: 'default', name: 'Default (Nature)', description: 'Forest green with earth tones' },
    { id: 'celo', name: 'Celo', description: 'Black with yellow accents' },
    { id: 'solana', name: 'Solana', description: 'Dark purple with magenta' },
    { id: 'base', name: 'Base', description: 'Dark blue with Base blue' },
    { id: 'coinbase', name: 'Coinbase', description: 'Navy with Coinbase blue' },
  ];

  return (
    <div className="min-h-screen bg-bg">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        <div className="glass-card p-8">
          <h1 className="text-3xl font-bold text-fg mb-4">Theme Preview</h1>
          <p className="text-text-muted mb-6">
            Switch between different blockchain themes to see how TreePal adapts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => setTheme(t.id as any)}
                className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                  theme === t.id
                    ? 'border-primary bg-primary bg-opacity-10'
                    : 'border-border hover:border-primary'
                }`}
              >
                <h3 className="font-semibold text-fg mb-1">{t.name}</h3>
                <p className="text-sm text-text-muted">{t.description}</p>
              </button>
            ))}
          </div>
        </div>

        <section>
          <h2 className="text-2xl font-semibold text-fg mb-6">Impact Stats Preview</h2>
          <ImpactStats
            totalTrees={12}
            verifiedTrees={8}
            carbonOffset={156}
            survivalRate={92}
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-fg mb-6">Tree Card Preview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TreeCard
              id="1"
              species="Oak Tree"
              plantingDate="Mar 15, 2024"
              location="Central Park, NY"
              imageUrl="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=400"
              verificationStatus="verified"
            />
            <TreeCard
              id="2"
              species="Pine Tree"
              plantingDate="Apr 2, 2024"
              location="Golden Gate Park, SF"
              imageUrl="https://images.unsplash.com/photo-1511497584788-876760111969?w=400"
              verificationStatus="pending"
            />
            <TreeCard
              id="3"
              species="Maple Tree"
              plantingDate="May 10, 2024"
              location="Hyde Park, London"
              imageUrl="https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400"
              verificationStatus="community"
            />
          </div>
        </section>

        <div className="glass-card p-8">
          <h2 className="text-2xl font-semibold text-fg mb-4">Button Styles</h2>
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary">Primary Button</button>
            <button className="btn-secondary">Secondary Button</button>
            <button className="badge-verified">Verified Badge</button>
            <button className="badge-pending">Pending Badge</button>
            <button className="badge-community">Community Badge</button>
          </div>
        </div>
      </main>
    </div>
  );
}
