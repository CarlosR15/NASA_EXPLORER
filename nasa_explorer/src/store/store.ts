import { configureStore } from '@reduxjs/toolkit';
import apodReducer from './slices/apodSlice';
import donkiReducer from './slices/donkiSlice';
import epicReducer from './slices/epicSlice';
import marsReducer from './slices/marsSlice';
import libraryReducer from './slices/librarySlice';
import themeReducer from './slices/themeSlice';

export const store = configureStore({
  reducer: {
    apod: apodReducer,
    donki: donkiReducer,
    epic: epicReducer,
    mars: marsReducer,
    library: libraryReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;