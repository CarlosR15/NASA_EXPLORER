import { useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';

//hook que hace que se conosca si el dispositivo esta conectado a internet
export function useConnectivity() {
  //estado que indica si esta conectado (true por defecto)
  const [isConnected, setIsConnected] = useState(true);
  //estado que almacena que tipo de conexion se tiene
  const [connectionType, setConnectionType] = useState('unknown');

  useEffect(() => {
    //se suscribe a los cambios de estados de red
    const unsubscribe = NetInfo.addEventListener(state => {
      //actualizacion de si esta conectado o no
      setIsConnected(state.isConnected ?? true);
      //actualiza el tipo de conexion
      setConnectionType(state.type);
    });

    //limpia la suscripcion 
    return () => unsubscribe();
  }, []);

  //retorna el estado de conexion
  return { isConnected, connectionType };
}
