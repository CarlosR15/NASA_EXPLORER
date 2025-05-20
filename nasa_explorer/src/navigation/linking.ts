export const linking = {
  prefixes: ['nasaapp://'],
  config: {
    screens: {
      Inicio: {
        screens: {
          "Explorar APIs": 'home',
          "Acerca de la App": 'about',
        },
      },
      APOD: 'apod',
      'Mars Rover': 'mars',
      EPIC: 'epic',
      'Asteroids (NEO)': 'neo',
      Donki: 'donki',
    },
  },
};