'use client';

import { Sprout, MapPin, CheckCircle2, Share2 } from 'lucide-react';

export function WelcomeHero() {
  return (
    <div className="glass-card p-8 mb-8">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary bg-opacity-10 rounded-full mb-4">
          <Sprout className="w-8 h-8 text-primary" />
        </div>
        
        <h1 className="text-4xl font-bold text-fg">
          Plant trees. Prove impact.
        </h1>
        
        <p className="text-lg text-text-muted max-w-2xl mx-auto">
          Track every tree you plant, verify survival through satellite imagery, 
          and showcase your environmental legacy with a shareable portfolio.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="space-y-2">
            <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mx-auto">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-fg">Log Plantings</h3>
            <p className="text-sm text-text-muted">
              Drop a pin, upload a photo, and create a permanent record
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-12 h-12 bg-success bg-opacity-10 rounded-lg flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6 text-success" />
            </div>
            <h3 className="font-semibold text-fg">Verify Survival</h3>
            <p className="text-sm text-text-muted">
              Satellite and community validation proves your trees are thriving
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-lg flex items-center justify-center mx-auto">
              <Share2 className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-semibold text-fg">Share Impact</h3>
            <p className="text-sm text-text-muted">
              Generate a portfolio to showcase on LinkedIn and social media
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
