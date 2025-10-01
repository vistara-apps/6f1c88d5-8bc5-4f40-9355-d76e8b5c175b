'use client';

import { AlertCircle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-6">
      <div className="glass-card p-8 max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 bg-error bg-opacity-10 rounded-full flex items-center justify-center mx-auto">
          <AlertCircle className="w-8 h-8 text-error" />
        </div>
        
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-fg">Something went wrong!</h2>
          <p className="text-text-muted">
            We encountered an error while loading TreePal. Please try again.
          </p>
        </div>

        <button
          onClick={reset}
          className="btn-primary w-full"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
