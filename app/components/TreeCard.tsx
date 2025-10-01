'use client';

import { MapPin, Calendar, CheckCircle2, Clock, Users } from 'lucide-react';

interface TreeCardProps {
  id: string;
  species: string;
  plantingDate: string;
  location: string;
  imageUrl: string;
  verificationStatus: 'pending' | 'verified' | 'community';
  onClick?: () => void;
}

export function TreeCard({
  species,
  plantingDate,
  location,
  imageUrl,
  verificationStatus,
  onClick,
}: TreeCardProps) {
  const statusConfig = {
    pending: {
      icon: Clock,
      label: 'Pending',
      className: 'badge-pending',
    },
    verified: {
      icon: CheckCircle2,
      label: 'Verified',
      className: 'badge-verified',
    },
    community: {
      icon: Users,
      label: 'Community',
      className: 'badge-community',
    },
  };

  const status = statusConfig[verificationStatus];
  const StatusIcon = status.icon;

  return (
    <div className="tree-card" onClick={onClick}>
      <div className="relative h-48 bg-surface">
        <img
          src={imageUrl}
          alt={species}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3">
          <span className={status.className}>
            <StatusIcon className="w-4 h-4" />
            {status.label}
          </span>
        </div>
      </div>
      
      <div className="p-4 space-y-3">
        <h3 className="text-lg font-semibold text-fg">{species}</h3>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-text-muted">
            <Calendar className="w-4 h-4" />
            <span>Planted {plantingDate}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-text-muted">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
