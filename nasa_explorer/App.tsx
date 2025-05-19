import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { ApodScreen } from './src/presentation/screens/ApodScreen';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <ApodScreen />
    </SafeAreaView>
  );
}
