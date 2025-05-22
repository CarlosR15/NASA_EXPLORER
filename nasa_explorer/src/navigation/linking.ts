export const linking = {
  prefixes: ['nasaapp://', 'https://nasaapp.com'],
  config: {
    screens: {
      Inicio: {
        path: 'inicio',
        screens: {
          'Explorar APIs': 'explorar',
          'Acerca de la App': 'acerca',
        },
      },
      APOD: 'apod',
      'Mars Rover': 'mars',
      EPIC: 'epic',
      Donki: 'donki',
      'NASA Library': 'library',
    },
  },
};