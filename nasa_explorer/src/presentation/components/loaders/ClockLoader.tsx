import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

// componente clockloader que acepta prop explain
export default function ClockLoader({ explain }: { explain?: string }) {
  //retorno de vista que muestra indicador de carga y si se tiene un texto explain debajo
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
      {explain && <Text style={{ marginTop: 10 }}>{explain}</Text>}
    </View>
  );
}
