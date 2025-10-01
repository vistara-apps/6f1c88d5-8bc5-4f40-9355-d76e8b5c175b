'use client';

import { Wallet, ConnectWallet } from '@coinbase/onchainkit/wallet';
import { Name, Avatar } from '@coinbase/onchainkit/identity';
import { Sprout } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 glass-card border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Sprout className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-fg">TreePal</h1>
              <p className="text-xs text-text-muted">Plant. Verify. Grow.</p>
            </div>
          </div>

          <Wallet>
            <ConnectWallet>
              <div className="flex items-center gap-3 px-4 py-2 bg-surface border border-border rounded-lg hover:bg-opacity-80 transition-all duration-200">
                <Avatar className="w-8 h-8" />
                <Name className="text-sm font-medium text-fg" />
              </div>
            </ConnectWallet>
          </Wallet>
        </div>
      </div>
    </header>
  );
}
