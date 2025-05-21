import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export const DescriptionScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sobre esta App</Text>
      <Text style={styles.paragraph}>
        Esta aplicación fue creada con React Native y TypeScript siguiendo los principios de Clean Architecture y el patrón MVVM.
      </Text>
      <Text style={styles.paragraph}>
        Puedes explorar distintas APIs públicas de la NASA, incluyendo:
        - APOD 
        - Mars Rover 
        - EPIC 
        - DONKI 
        - Image Library
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
  },
});