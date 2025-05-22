import { useColorScheme, Platform } from 'react-native';
import { DefaultTheme, DarkTheme, Theme as NavigationTheme } from '@react-navigation/native';
import { MD3LightTheme, MD3DarkTheme, MD3Theme  } from 'react-native-paper';

//define un hook personalizado que proporciona informacion del tema
export function useTheme(): {
  isDarkContext: boolean; //indica si el contexto actual es oscuro
  navigationTheme: NavigationTheme;
  paperTheme: MD3Theme ;
} {
  const scheme = useColorScheme();
  const isWeb = Platform.OS === 'web';

  const isDarkContext = isWeb ? false : scheme === 'dark';
  return {
    isDarkContext,
    navigationTheme: isDarkContext ? DarkTheme : DefaultTheme,
    paperTheme: isDarkContext ? MD3DarkTheme : MD3LightTheme,
  };
}