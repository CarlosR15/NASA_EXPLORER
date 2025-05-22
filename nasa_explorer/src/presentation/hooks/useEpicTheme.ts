import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { MD3DarkTheme, MD3LightTheme, MD3Theme  } from 'react-native-paper';
import { DarkTheme, DefaultTheme, Theme as NavigationTheme } from '@react-navigation/native';

//hook personalizado que devuelve los temas dependiendo de epic
export function useEpicTheme(): {
  isDark: boolean;
  navigationTheme: NavigationTheme;
  paperTheme: MD3Theme ;
} {

  const epicMode = useSelector((state: RootState) => state.theme.epicMode);
  //define el modo actual a uscuro
  const isDark = epicMode === 'dark';

  //retorna los temas tanto de navegacion como de paper
  return {
    isDark,
    navigationTheme: isDark ? DarkTheme : DefaultTheme, //tema react-navigation
    paperTheme: isDark ? MD3DarkTheme : MD3LightTheme, //tema react-native-paper
  };
}