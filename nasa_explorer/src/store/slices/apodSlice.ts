import { createSlice } from '@reduxjs/toolkit';
import { NasaPhoto } from '../../domain/entities/NasaPhoto';
import { fetchApodThunk } from '../thunks/apodThunk';

//interfaz de apodstate
interface ApodState {
  photo: NasaPhoto | null;
  loading: boolean;
  error: string | null;
}

//define estado inicial de apodstate
const initialState: ApodState = {
  photo: null,
  loading: false,
  error: null,
};

// crea un slice de redux toolkit para la funcionalidad de APOD
const apodSlice = createSlice({
  name: 'apod',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //caso para cuando fetchapodthunk esta pendiente
      .addCase(fetchApodThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      //caso para cuando fetchapodthunk esta listo
      .addCase(fetchApodThunk.fulfilled, (state, action) => {
        state.photo = action.payload;
        state.loading = false;
      })
      //caso para cuando fetchapodthunk esta rechazado
      .addCase(fetchApodThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error';
      });
  },
});

export default apodSlice.reducer;