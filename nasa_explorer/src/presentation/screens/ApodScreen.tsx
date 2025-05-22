import React from 'react';
import { Text, Image, ScrollView, Platform, Dimensions } from 'react-native';
import { useApodViewModel } from '../viewmodels/ApodViewModel';
import ClockLoader from '../components/loaders/ClockLoader';

export const ApodScreen = () => {
  const { photo, loading } = useApodViewModel();
  const isWeb = Platform.OS === 'web'; //conprobacion si esta en web
  const windowHeight = Dimensions.get('window').height; //comprobacion de altura para las iamgenes en web

  //define los estilos de las imagenes, adaptandose a la web
  const imageHeight = isWeb ? windowHeight * 0.5 : 250;

  const imageStyles = {
    height: imageHeight,
    borderRadius: 10
  };

  if (loading) return <ClockLoader />;// si esta cargando muestra clockloader

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{photo?.title}</Text>
      <Text style={{ color: 'gray', marginBottom: 10 }}>{photo?.date}</Text>
      <Image source={{ uri: photo?.url }} style={imageStyles} />
      <Text style={{ marginTop: 20 }}>{photo?.explanation}</Text>
    </ScrollView>
  );
};