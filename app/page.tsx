'use client';

import { useState } from 'react';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { WelcomeHero } from './components/WelcomeHero';
import { ImpactStats } from './components/ImpactStats';
import { TreeCard } from './components/TreeCard';
import { PlantTreeButton } from './components/PlantTreeButton';

// Mock data for demonstration
const mockTrees = [
  {
    id: '1',
    species: 'Oak Tree',
    plantingDate: 'Mar 15, 2024',
    location: 'Central Park, NY',
    imageUrl: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=400',
    verificationStatus: 'verified' as const,
  },
  {
    id: '2',
    species: 'Pine Tree',
    plantingDate: 'Apr 2, 2024',
    location: 'Golden Gate Park, SF',
    imageUrl: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=400',
    verificationStatus: 'pending' as const,
  },
  {
    id: '3',
    species: 'Maple Tree',
    plantingDate: 'May 10, 2024',
    location: 'Hyde Park, London',
    imageUrl: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400',
    verificationStatus: 'community' as const,
  },
];

export default function Home() {
  const [showPlantModal, setShowPlantModal] = useState(false);

  return (
    <div className="min-h-screen bg-bg pb-24">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        <WelcomeHero />

        <section>
          <h2 className="text-2xl font-semibold text-fg mb-6">Your Impact</h2>
          <ImpactStats
            totalTrees={12}
            verifiedTrees={8}
            carbonOffset={156}
            survivalRate={92}
          />
        </section>

        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-fg">Recent Plantings</h2>
            <button className="text-sm text-primary hover:text-primary-hover font-medium">
              View All
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockTrees.map((tree) => (
              <TreeCard
                key={tree.id}
                {...tree}
                onClick={() => console.log('Tree clicked:', tree.id)}
              />
            ))}
          </div>
        </section>

        <section className="glass-card p-8">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h2 className="text-2xl font-semibold text-fg">
              Ready to plant your first tree?
            </h2>
            <p className="text-text-muted">
              Start building your environmental legacy today. Every tree counts.
            </p>
            <button
              onClick={() => setShowPlantModal(true)}
              className="btn-primary"
            >
              Plant Your First Tree
            </button>
          </div>
        </section>
      </main>

      <PlantTreeButton onClick={() => setShowPlantModal(true)} />
      <BottomNav />
    </div>
  );
}
