import { useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';

export function useConnectivity() {
  const [isConnected, setIsConnected] = useState(true);
  const [connectionType, setConnectionType] = useState('unknown');

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected ?? true);
      setConnectionType(state.type);
    });
    return () => unsubscribe();
  }, []);

  return { isConnected, connectionType };
}
