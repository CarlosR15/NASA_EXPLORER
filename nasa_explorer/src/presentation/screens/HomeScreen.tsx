import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// definicion de las screens para consultar a las apis
const apiOptions = [
  { label: 'APOD', screen: 'APOD' },
  { label: 'Mars Rover', screen: 'Mars Rover' },
  { label: 'EPIC', screen: 'EPIC' },
  { label: 'DONKI', screen: 'Donki' },
  { label: 'Image Library', screen: 'NASA Library' },
];

//componente homescreen
export const HomeScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {apiOptions.map(({ label, screen }) => (
        <TouchableOpacity
          key={screen}
          style={styles.button}
          onPress={() => navigation.navigate(screen)}
        >
          <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  button: {
    width: '100%',
    backgroundColor: '#1a73e8',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});