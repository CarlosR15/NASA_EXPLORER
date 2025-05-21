import React from 'react';
import { View, FlatList, Text, Image, ActivityIndicator, StyleSheet } from 'react-native';
import { useEpicViewModel } from '../viewmodels/EpicViewModel';
import { EpicRepositoryImpl } from '../../data/repositories/EpicRepositoryImpl';
import { EpicRemoteDataSource } from '../../data/datasources/EpicRemoteDataSource';
import { FetchEpicImagesUseCase } from '../../application/usecases/fetchEpicImages';

const repo = new EpicRepositoryImpl(new EpicRemoteDataSource());
const useCase = new FetchEpicImagesUseCase(repo);

export function EpicScreen() {
  const { images, loading, error, isEmpty } = useEpicViewModel();

  if (loading) return <ActivityIndicator size="large" style={{ marginTop: 20 }} />;
  if (error) return <Text style={styles.error}>{error}</Text>;
  if (isEmpty) return <Text style={styles.error}>No EPIC images available</Text>;

  return (
    <FlatList
      contentContainerStyle={{ padding: 10 }}
      data={images}
      renderItem={({ item }) => (
        <View style={styles.imageContainer}>
          <Image 
            source={{ uri: item.image }} 
            style={styles.image}
            resizeMode="cover"
          />
          <Text style={styles.date}>{new Date(item.date).toLocaleDateString()}</Text>
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

const styles = StyleSheet.create({
  error: { color: 'red' },
  imageContainer: { padding: 10 },
  image: { width: '100%', height: 200 },
  date: { textAlign: 'center' }
}); 