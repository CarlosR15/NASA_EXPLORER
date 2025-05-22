import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationState, PartialState } from '@react-navigation/native';

export function useNavigationState() {
  // estado para almacenar el estado de navegacion, esta como undefined por defecto
  const [initialStateNavigation, setInitialStateNavigation] =
    useState<PartialState<NavigationState> | undefined>();

  //estado booleano para saber si el estado de navegacion ha sido cargado
  const [isReady, setIsReady] = useState(false);

  //funcion para cargar el estado de navegacion
  const loadStateNavigation = async () => {
    try {
      //intenta obtener el string del estado de navegador
      const savedStateString = await AsyncStorage.getItem('NAVIGATION_STATE');
      // si se encontro un string se parsea, si no el state sera undefined
      const state = savedStateString
        ? (JSON.parse(savedStateString) as PartialState<NavigationState>)
        : undefined;
      // actualiza el estado
      setInitialStateNavigation(state);
    } finally {
      //independientemente de si la carga fue exitosa o no, se marca como isReady
      setIsReady(true);
    }
  };

  //funcion para guardar el estado de navegacion
  const saveStateNavigation = async (state: NavigationState) => {
    await AsyncStorage.setItem('NAVIGATION_STATE', JSON.stringify(state));
  };

  //funcion para eliminar el estado de navegacion
  const clearStateNavigation = async () => {
    await AsyncStorage.removeItem('NAVIGATION_STATE');
  };

  return {
    initialStateNavigation,
    isReady,
    loadStateNavigation,
    saveStateNavigation,
    clearStateNavigation,
  };
}