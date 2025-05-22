import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';

import RootNavigator from './src/navigation/RootNavigator';
import { linking } from './src/navigation/linking';
import { store } from './src/store/store';

import { useTheme } from './src/presentation/hooks/useTheme';
import { useConnectivity } from './src/presentation/hooks/useConnectivity';
import { useNavigationState } from './src/presentation/hooks/useNavigationState';
import ClockLoader from './src/presentation/components/loaders/ClockLoader';

// componente funcional que contiene la logica principal de la aplicacion
function AppContent() {
  // utiliza el hook personalizado useTheme para obtener el tema de Paper
  const {
    paperTheme,
    isDarkContext,
    navigationTheme,
  } = useTheme();

  // utiliza el hook personalizado useConnectivity para obtener el estado de la conexion a internet
  const {
    isConnected,
    connectionType,
  } = useConnectivity();

  // utiliza el hook personalizado useNavigationState para gestionar la persistencia del estado de navegacion
  const {
    initialStateNavigation,
    isReady,
    saveStateNavigation,
    loadStateNavigation,
    clearStateNavigation,
  } = useNavigationState();

  // efecto que se ejecuta una sola vez al montar el componente para cargar el estado de navegación guardado
  useEffect(() => {
    loadStateNavigation(); // recupera el estado guardado de navegación
  }, []);

  // si no esta listo muestra un indicador de carga
  if (!isReady) {
    return <ClockLoader explain="Cargando navegación..." />;
  }

  return (
    <PaperProvider theme={paperTheme}>
      <StatusBar style={isDarkContext ? 'light' : 'dark'} />
      <NavigationContainer
        initialState={initialStateNavigation}
        linking={linking}
        theme={navigationTheme}
        onStateChange={(state) => {
          if (state) saveStateNavigation(state);
        }}
      >
        <RootNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={styles.container}>
        <AppContent />
      </GestureHandlerRootView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
