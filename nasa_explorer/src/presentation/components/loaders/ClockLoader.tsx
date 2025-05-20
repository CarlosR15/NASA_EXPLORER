import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

export default function ClockLoader({ explain }: { explain?: string }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
      {explain && <Text style={{ marginTop: 10 }}>{explain}</Text>}
    </View>
  );
}
