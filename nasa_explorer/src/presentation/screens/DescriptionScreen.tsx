import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export const DescriptionScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.paragraph}>
        Esta aplicación fue creada con React Native y TypeScript utilizando CLEAN y MVVM.
      </Text>
      <Text style={styles.paragraph}> Puedes explorar distintas APIs públicas de la NASA, incluyendo: </Text>

       <View style={styles.list}>
        <Text style={styles.listItem}>• APOD</Text>
        <Text style={styles.listItem}>• Mars Rover</Text>
        <Text style={styles.listItem}>• EPIC</Text>
        <Text style={styles.listItem}>• DONKI</Text>
        <Text style={styles.listItem}>• Image Library</Text>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
  },
 list: {
    paddingLeft: 10,
  },
  listItem: {
    fontSize: 16,
    marginVertical: 4,
    color: '#444',
  },
});