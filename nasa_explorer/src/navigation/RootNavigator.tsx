import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabsNavigator from './TabsNavigator';
import { ApodScreen } from '../presentation/screens/ApodScreen';
import { MarsRoverScreen  } from '../presentation/screens/MarsRoverScreen';
import { EpicScreen } from '../presentation/screens/EpicScreen';
import { NasaMediaScreen } from '../presentation/screens/NasaMediaScreen';
import { DonkiScreen } from '../presentation/screens/DonkiScreen';

// crea una instancia drawer navigator
const Drawer = createDrawerNavigator();

//define y exporta rootnavigator
export default function RootNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Inicio">
      <Drawer.Screen name="Inicio" component={TabsNavigator} />
      <Drawer.Screen name="APOD" component={ApodScreen} />
      <Drawer.Screen name="Mars Rover" component={MarsRoverScreen} />
      <Drawer.Screen name="EPIC" component={EpicScreen} />
      <Drawer.Screen name="NASA Library" component={NasaMediaScreen} />
      <Drawer.Screen name="Donki" component={DonkiScreen} />
    </Drawer.Navigator>
  );
}
