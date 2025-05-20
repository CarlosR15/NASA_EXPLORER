import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    // aqui van los reducers para las apis
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;