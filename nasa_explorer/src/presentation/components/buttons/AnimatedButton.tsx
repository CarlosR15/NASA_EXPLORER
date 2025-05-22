import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

//define los props para el boton animado
interface AnimatedButtonProps {
  title: string;
  onPress: () => void;
}

// componente animatedbutton
export const AnimatedButton = ({ title, onPress }: AnimatedButtonProps) => {
  //valor para escalar boton (se usa para la animacion)
  const scale = useSharedValue(1);

  //estilo animado que usa transformacion de escala
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Pressable
      onPressIn={() => {
        scale.value = withSpring(0.95);
      }}
      onPressOut={() => {
        scale.value = withSpring(1);
      }}
      onPress={onPress}
    >
      <Animated.View style={[styles.button, animatedStyle]}>
        <Text style={styles.text}>{title}</Text>
      </Animated.View>
    </Pressable>
  );
};

//estilos del boton y texto
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6200ee',
    padding: 12,
    marginVertical: 6,
    borderRadius: 10,
    alignItems: 'center',
    width: 160,
    alignSelf: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});