'use client';

import { Plus } from 'lucide-react';

export function PlantTreeButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-24 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-modal hover:bg-primary-hover transition-all duration-200 flex items-center justify-center z-40 hover:scale-110"
    >
      <Plus className="w-6 h-6" />
    </button>
  );
}
