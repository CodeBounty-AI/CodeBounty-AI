'use client';

import { useState, useEffect, useCallback } from 'react';
import { nimiqMiniApp } from '@/services/nimiq/mini-app.service';

export function useNimiqPay() {
  const [isReady, setIsReady] = useState(false);
  const [isInNimiqPay, setIsInNimiqPay] = useState(false);
  const [accounts, setAccounts] = useState<any[]>([]);
  const [selectedAccount, setSelectedAccount] = useState<string | null>(null);
  const [balance, setBalance] = useState('0');
  const [isConnecting, setIsConnecting] = useState(false);

  const connect = useCallback(async () => {
    if (isConnecting) return;
    setIsConnecting(true);
    try {
      await nimiqMiniApp.init();
      const isInApp = nimiqMiniApp.isRunningInNimiqPay();
      setIsInNimiqPay(isInApp);

      const accs = await nimiqMiniApp.listAccounts();
      setAccounts(accs);

      if (accs.length > 0) {
        setSelectedAccount(accs[0].address);
        const bal = await nimiqMiniApp.getBalance(accs[0].address);
        setBalance(bal);
      }
      setIsReady(true);
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    } finally {
      setIsConnecting(false);
    }
  }, [isConnecting]);

  useEffect(() => {
    if (typeof window !== 'undefined' && nimiqMiniApp.isRunningInNimiqPay()) {
      connect();
    }
  }, [connect]);

  return {
    isReady,
    isInNimiqPay,
    accounts,
    selectedAccount,
    balance,
    isConnecting,
    connect,
  };
}
