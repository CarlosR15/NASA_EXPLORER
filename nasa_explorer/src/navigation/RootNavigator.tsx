import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabsNavigator from './TabsNavigator';
import { ApodScreen } from '@/presentation/screens/ApodScreen';
import { MarsScreen } from '@/presentation/screens/MarsScreen';
import { EpicScreen } from '@/presentation/screens/EpicScreen';
import { NeoScreen } from '@/presentation/screens/NeoScreen';
import { DonkiScreen } from '@/presentation/screens/DonkiScreen';

const Drawer = createDrawerNavigator();

export default function RootNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Tabs">
      <Drawer.Screen name="Inicio" component={TabsNavigator} />
      <Drawer.Screen name="APOD" component={ApodScreen} />
      <Drawer.Screen name="Mars Rover" component={MarsScreen} />
      <Drawer.Screen name="EPIC" component={EpicScreen} />
      <Drawer.Screen name="Asteroids (NEO)" component={NeoScreen} />
      <Drawer.Screen name="Donki" component={DonkiScreen} />
    </Drawer.Navigator>
  );
}
