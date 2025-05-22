import React, { useEffect } from 'react';
import { View, FlatList, Text, Image } from 'react-native';
import { useMarsRoverViewModel } from '../viewmodels/MarsRoverViewModel';
import { AnimatedButton } from '../components/buttons/AnimatedButton';
import ClockLoader from '../components/loaders/ClockLoader';

//componente marsroverscreen
export const MarsRoverScreen = () => {
  //hook personalizado para obtener datos
  const { photos, loading, error, fetchPhotos } = useMarsRoverViewModel();
  const [sol, setSol] = React.useState(1000);

  // useEffect hook que se ejecuta después de cada renderizado si la dependencia 'sol (dia marciano) ha cambiado.
  useEffect(() => {
    fetchPhotos(sol);
  }, [sol]);

  if (loading) return <ClockLoader/>; // si esta cargando muestra clockloader
  if (error) return <Text>Error: {error}</Text>; //si hay un error lo muestra

  return (
    <View>
      <AnimatedButton title="Previous Day" onPress={() => setSol(s => s - 1)} />
      <AnimatedButton title="Next Day" onPress={() => setSol(s => s + 1)} />
      <Text style={{alignSelf: 'center'}}>Sol: {sol}</Text>
      
      <FlatList
        data={photos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Image 
            source={{ uri: item.img_src }} 
            style={{ width: 300, height: 300, alignSelf: 'center' }}
          />
        )}
      />
    </View>
  );
}