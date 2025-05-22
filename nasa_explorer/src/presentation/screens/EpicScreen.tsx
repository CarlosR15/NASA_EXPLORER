import React from 'react';
import { View, FlatList, Text, Image, ActivityIndicator, StyleSheet, Switch, Platform, Dimensions } from 'react-native';
import { useEpicViewModel } from '../viewmodels/EpicViewModel';
import { useEpicTheme } from '../hooks/useEpicTheme';
import { PaperProvider, useTheme as usePaperTheme } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { setEpicTheme } from '../../store/slices/themeSlice';
import { RootState } from '../../store/store';
import ClockLoader from '../components/loaders/ClockLoader';

export function EpicScreen() {
  //hook personalizado para epic para obtener los estados
  const { images, loading, error, isEmpty } = useEpicViewModel();
  //obtiene dispatch de redux
  const dispatch = useDispatch();
  const { isDark, paperTheme } = useEpicTheme(); //obtiene informacion sobre el tema
  const currentMode = useSelector((state: RootState) => state.theme.epicMode);

  const isWeb = Platform.OS === 'web'; //conprobacion si esta en web
    const windowHeight = Dimensions.get('window').height; //obtener altura de la ventana
    const windowWidth = Dimensions.get('window').width; //obtener anchura de la ventana
  
    //define los estilos de las imagenes, adaptandose a la web
    const imageStyles = {
      height: isWeb ? windowHeight * 0.5 : 200,
    width: isWeb ? windowWidth * 0.6 : '100%' as const,
      borderRadius: 8,
      alignSelf: 'center' as const
    };

  //funcion para cambiar entre tema claro y oscuro
  const toggleTheme = () => {
    dispatch(setEpicTheme(currentMode === 'dark' ? 'light' : 'dark'));
  };

  if (loading) return <ClockLoader/>; // si esta cargando muestra clockloader
  if (error) return <Text style={styles.error}>{error}</Text>; //si hay un error lo muestra
  if (isEmpty) return <Text style={styles.error}>No EPIC images available</Text>; //si no encuentra nada la api muestra el mensaje

  return (
    <PaperProvider theme={paperTheme}>
      <View style={[styles.container, { backgroundColor: paperTheme.colors.background }]}>
        <View style={styles.toggleRow}>
          <Text style={{ color: paperTheme.colors.onBackground }}>Modo oscuro</Text>
          <Switch value={isDark} onValueChange={toggleTheme} />
        </View>
        <FlatList
          contentContainerStyle={{ padding: 10 }}
          data={images}
          renderItem={({ item }) => (
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: item.image }}
                style={imageStyles}
                resizeMode="cover"
              />
              <Text style={[styles.date, { color: paperTheme.colors.onBackground }]}>
                {new Date(item.date).toLocaleDateString()}
              </Text>
            </View>
          )}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  error: { color: 'red', margin: 10 },
  container: { flex: 1 },
  toggleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 16,
  },
  imageContainer: { padding: 10 },
  date: { textAlign: 'center', marginTop: 4 },
});