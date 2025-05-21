import React, { useEffect } from 'react';
import { View, FlatList, Text, Image, Button } from 'react-native';
import { useMarsRoverViewModel } from '../viewmodels/MarsRoverViewModel';

export const MarsRoverScreen = () => {
  const { photos, loading, error, fetchPhotos } = useMarsRoverViewModel();
  const [sol, setSol] = React.useState(1000);

  useEffect(() => {
    fetchPhotos(sol);
  }, [sol]);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <View>
      <Button title="Previous Day" onPress={() => setSol(s => s - 1)} />
      <Button title="Next Day" onPress={() => setSol(s => s + 1)} />
      <Text>Sol: {sol}</Text>
      
      <FlatList
        data={photos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Image 
            source={{ uri: item.img_src }} 
            style={{ width: 300, height: 300 }}
          />
        )}
      />
    </View>
  );
}