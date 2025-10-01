'use client';

import { Home, MapPin, Trophy, User } from 'lucide-react';
import { useState } from 'react';

type NavItem = 'home' | 'map' | 'impact' | 'profile';

export function BottomNav() {
  const [active, setActive] = useState<NavItem>('home');

  const navItems = [
    { id: 'home' as NavItem, icon: Home, label: 'Home' },
    { id: 'map' as NavItem, icon: MapPin, label: 'Map' },
    { id: 'impact' as NavItem, icon: Trophy, label: 'Impact' },
    { id: 'profile' as NavItem, icon: User, label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 glass-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-around">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive 
                    ? 'bg-primary bg-opacity-10 text-primary' 
                    : 'text-text-muted hover:text-fg'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
