import React, { useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, Linking, Button, StyleSheet } from 'react-native';
import { useDonkiViewModel } from '../viewmodels/DonkiViewModel';
import { AnimatedButton } from '../components/buttons/AnimatedButton';
import ClockLoader from '../components/loaders/ClockLoader';

//define el componente funcional donkiscreen
export const DonkiScreen = () => {
  const { events, loading, error, fetchEvents } = useDonkiViewModel();
  const [daysBack] = useState(30); //estado de dias en los que se va a buscar el evento CME

  //funcion para recargar los datos
  const refreshData = () => {
    fetchEvents(daysBack);
  };

  if (loading) return <ClockLoader/>; // si esta cargando muestra clockloader
  if (error) return <Text style={styles.error}>{error}</Text>; //si hay un error lo muestra

  return (
    <View style={styles.container}>
      <View style={styles.controls}>
        <AnimatedButton title="Refrescar" onPress={refreshData} />
      </View>

      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.eventCard}>
            <Text style={styles.eventType}>{item.eventType}</Text>
            <Text>Source: {item.source}</Text>
            <Text>Date: {new Date(item.startTime).toLocaleDateString()}</Text>
            <Text 
              style={styles.link} 
              onPress={() => item.link && Linking.openURL(item.link)}>
              More info
            </Text>
          </View>
        )}
        ListEmptyComponent={<Text>No events found for this period</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  controls: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 },
  loader: { marginTop: 20 },
  error: { color: 'red', textAlign: 'center', marginTop: 20 },
  eventCard: { padding: 15, borderBottomWidth: 1, borderColor: '#eee' },
  eventType: { fontWeight: 'bold', fontSize: 16 },
  link: { color: 'blue', marginTop: 5 }
});