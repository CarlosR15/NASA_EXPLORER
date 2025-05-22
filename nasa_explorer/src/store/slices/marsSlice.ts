import { createSlice } from '@reduxjs/toolkit';
import { fetchMarsPhotosThunk } from '../thunks/marsThunks';
import { MarsPhoto } from '../../domain/entities/MarsPhoto';

//interfaz de marsstate
interface MarsState {
  photos: MarsPhoto[];
  loading: boolean;
  error: string | null;
}

//define estado inicial de marsstate
const initialState: MarsState = {
  photos: [],
  loading: false,
  error: null,
};

const marsSlice = createSlice({
  name: 'mars',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //caso para cuando fetchapodthunk esta pendiente
      .addCase(fetchMarsPhotosThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      //caso para cuando fetchapodthunk esta listo
      .addCase(fetchMarsPhotosThunk.fulfilled, (state, action) => {
        state.photos = action.payload;
        state.loading = false;
      })
      //caso para cuando fetchapodthunk esta rechazado
      .addCase(fetchMarsPhotosThunk.rejected, (state) => {
        state.loading = false;
        state.error = 'Failed to fetch Mars photos';
      });
  },
});

export default marsSlice.reducer;