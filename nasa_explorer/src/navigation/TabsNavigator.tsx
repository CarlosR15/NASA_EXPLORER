import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../presentation/screens/HomeScreen';
import { DescriptionScreen } from '../presentation/screens/DescriptionScreen';
import { Ionicons } from '@expo/vector-icons';

//crea instancia de bottomtab
const Tab = createBottomTabNavigator();

//define y exporta tabsnavigator
export default function TabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const iconName =
            route.name === 'Explorar APIs'
              ? focused ? 'planet' : 'planet-outline'
              : route.name === 'Acerca de la App'
                ? focused ? 'information-circle' : 'information-circle-outline'
                : 'ellipse';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007aff',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Explorar APIs" component={HomeScreen} />
      <Tab.Screen name="Acerca de la App" component={DescriptionScreen} />
    </Tab.Navigator>
  );
}