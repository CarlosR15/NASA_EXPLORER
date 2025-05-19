import React from 'react';
import { View, Text, Image, ActivityIndicator, ScrollView } from 'react-native';
import { useApodViewModel } from '../viewmodels/ApodViewModel';

export const ApodScreen = () => {
  const { photo, loading } = useApodViewModel();

  if (loading) return <ActivityIndicator style={{ marginTop: 50 }} size="large" />;

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{photo?.title}</Text>
      <Text style={{ color: 'gray', marginBottom: 10 }}>{photo?.date}</Text>
      <Image source={{ uri: photo?.url }} style={{ height: 250, borderRadius: 10 }} />
      <Text style={{ marginTop: 20 }}>{photo?.explanation}</Text>
    </ScrollView>
  );
};
