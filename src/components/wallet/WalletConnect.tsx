'use client';

import { useNimiqPay } from '@/hooks/useNimiqPay';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Wallet, Shield, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export function WalletConnect() {
  const { isReady, isInNimiqPay, selectedAccount, balance, connect, isConnecting } = useNimiqPay();
  const [copied, setCopied] = useState(false);

  const formatAddress = (addr: string) => {
    if (!addr) return '';
    if (addr.length <= 16) return addr;
    return `${addr.slice(0, 8)}...${addr.slice(-6)}`;
  };

  const handleCopy = () => {
    if (selectedAccount) {
      navigator.clipboard.writeText(selectedAccount);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!isReady) {
    return (
      <Card className="bg-white/5 border-white/10">
        <CardContent className="p-6 text-center space-y-3">
          <div className="flex justify-center">
            <div className="p-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20">
              <Wallet className="h-8 w-8 text-blue-400" />
            </div>
          </div>
          <div>
            <h4 className="text-white font-medium">Connect Wallet</h4>
            <p className="text-sm text-gray-400 mt-1">
              {isInNimiqPay ? 'Connect your Nimiq Pay wallet' : 'Run this app in Nimiq Pay for wallet features'}
            </p>
          </div>
          <Button onClick={connect} disabled={isConnecting} className="w-full bg-gradient-to-r from-blue-500 to-purple-600">
            {isConnecting ? 'Connecting...' : 'Connect Wallet'}
          </Button>
          {!isInNimiqPay && (
            <p className="text-xs text-gray-500">💡 Open via <span className="font-mono">nimiqpay://miniapp?url=...</span></p>
          )}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white/5 border-white/10">
      <CardContent className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 bg-gradient-to-r from-blue-500 to-purple-600">
              <AvatarFallback><Wallet className="h-5 w-5 text-white" /></AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-white font-mono text-sm">{formatAddress(selectedAccount || '')}</span>
                <button onClick={handleCopy} className="text-gray-400 hover:text-white transition-colors">
                  {copied ? <Check className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
                </button>
              </div>
              <div className="text-green-400 font-semibold text-sm">{balance} NIM</div>
            </div>
          </div>
          <Badge variant="outline" className="border-green-400 text-green-400">
            <Shield className="h-3 w-3 mr-1" /> Connected
          </Badge>
        </div>
        {isInNimiqPay && (
          <div className="text-xs text-gray-500 border-t border-white/10 pt-2">🔒 Secure connection via Nimiq Pay</div>
        )}
      </CardContent>
    </Card>
  );
}
