import { createSlice, PayloadAction } from '@reduxjs/toolkit';

//funcion para obtener la hora 
const getHour = (time: string) => parseInt(time.split(':')[0], 10);

//funcionar para determinar el tema
const getThemeFromHour = (hour: number): 'light' | 'dark' =>
  hour >= 6 && hour <= 18 ? 'light' : 'dark';

//crea un slice de redux toolkit
export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    //estado inicial general para la app light
    mode: 'light' as 'light' | 'dark',
    epicMode: 'light' as 'light' | 'dark',
  },
  reducers: {
    // reducer para actualizar el modo de tema general basandose en una cadena de tiempo proporcionada
    updateThemeFromTime: (state, action: PayloadAction<string>) => {
      const hour = getHour(action.payload);
      state.mode = getThemeFromHour(hour);
    },
    // reducer para establecer explicitamente el modo de tema de la seccion EPIC
    setEpicTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.epicMode = action.payload;
    },
    // reducer para actualizar el modo de tema de la seccion EPIC basandose en una cadena de fecha y hora proporcionada
    updateEpicThemeFromDateTime: (state, action: PayloadAction<string>) => {
      const date = new Date(action.payload);
      state.epicMode = getThemeFromHour(date.getHours());
    },
  },
});

export const { updateThemeFromTime, setEpicTheme, updateEpicThemeFromDateTime } = themeSlice.actions;
export default themeSlice.reducer;