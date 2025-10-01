'use client';

import { Sprout, CheckCircle2, TrendingUp, Award } from 'lucide-react';

interface ImpactStatsProps {
  totalTrees: number;
  verifiedTrees: number;
  carbonOffset: number;
  survivalRate: number;
}

export function ImpactStats({
  totalTrees,
  verifiedTrees,
  carbonOffset,
  survivalRate,
}: ImpactStatsProps) {
  const stats = [
    {
      icon: Sprout,
      label: 'Trees Planted',
      value: totalTrees.toString(),
      color: 'text-primary',
    },
    {
      icon: CheckCircle2,
      label: 'Verified',
      value: verifiedTrees.toString(),
      color: 'text-success',
    },
    {
      icon: TrendingUp,
      label: 'Carbon Offset',
      value: `${carbonOffset}kg`,
      color: 'text-accent',
    },
    {
      icon: Award,
      label: 'Survival Rate',
      value: `${survivalRate}%`,
      color: 'text-warning',
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        
        return (
          <div key={stat.label} className="metric-card">
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-10 h-10 rounded-lg bg-opacity-10 flex items-center justify-center ${stat.color}`}>
                <Icon className={`w-5 h-5 ${stat.color}`} />
              </div>
            </div>
            
            <div className="space-y-1">
              <p className="text-2xl font-bold text-fg">{stat.value}</p>
              <p className="text-sm text-text-muted">{stat.label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
