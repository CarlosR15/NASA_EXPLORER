import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const getHour = (time: string) => parseInt(time.split(':')[0], 10);

const getThemeFromHour = (hour: number): 'light' | 'dark' => {
  return hour >= 6 && hour <= 18 ? 'light' : 'dark';
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    mode: 'light' as 'light' | 'dark',
  },
  reducers: {
    updateThemeFromTime: (state, action: PayloadAction<string>) => {
      const hour = getHour(action.payload);
      state.mode = getThemeFromHour(hour);
    },
  },
});

export const { updateThemeFromTime } = themeSlice.actions;
export default themeSlice.reducer;