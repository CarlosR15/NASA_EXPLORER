import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../presentation/screens/HomeScreen';
import { DescriptionScreen } from '../presentation/screens/DescriptionScreen';

const Tab = createBottomTabNavigator();

export default function TabsNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Explorar APIs" component={HomeScreen} />
      <Tab.Screen name="Acerca de la App" component={DescriptionScreen} />
    </Tab.Navigator>
  );
} 