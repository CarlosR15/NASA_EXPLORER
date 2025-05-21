import React, { useState } from 'react';
import { View, Text, TextInput, Image, FlatList, ActivityIndicator } from 'react-native';
import { useNasaMediaViewModel } from '../viewmodels/NasaMediaViewModel';

export const NasaMediaScreen = () => {
  const [query, setQuery] = useState('moon');
  const { media, loading } = useNasaMediaViewModel(query);

  return (
    <View style={{ padding: 16 }}>
      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="Buscar imágenes (e.g. Mars)"
        onSubmitEditing={() => {}}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 8,
          borderRadius: 8,
          marginBottom: 12,
        }}
      />

      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={media}
          keyExtractor={(item) => item.nasa_id}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 16 }}>
              <Image
                source={{ uri: item.previewUrl }}
                style={{ height: 200, borderRadius: 10 }}
                resizeMode="cover"
              />
              <Text style={{ fontWeight: 'bold', marginTop: 8 }}>{item.title}</Text>
              <Text style={{ color: '#666' }}>{item.date_created}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};
