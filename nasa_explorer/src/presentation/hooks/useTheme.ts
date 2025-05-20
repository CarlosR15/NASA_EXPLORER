import { useColorScheme } from 'react-native';
import { DefaultTheme, DarkTheme, Theme as NavigationTheme } from '@react-navigation/native';
import { MD3LightTheme, MD3DarkTheme, PaperTheme } from 'react-native-paper';

export function useTheme(): {
  isDarkContext: boolean;
  navigationTheme: NavigationTheme;
  paperTheme: PaperTheme;
} {
  const scheme = useColorScheme();
  const isDarkContext = scheme === 'dark';
  return {
    isDarkContext,
    navigationTheme: isDarkContext ? DarkTheme : DefaultTheme,
    paperTheme: isDarkContext ? MD3DarkTheme : MD3LightTheme,
  };
}