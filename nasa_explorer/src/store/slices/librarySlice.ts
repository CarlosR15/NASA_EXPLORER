import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchLibraryThunk } from '../thunks/libraryThunks';
import { NasaMedia } from '../../domain/entities/NasaMedia';

//interfaz de librarystate
interface LibraryState {
  media: NasaMedia[];
  loading: boolean;
  error: string | null;
}

//define estado inicial de librarystate
const initialState: LibraryState = {
  media: [],
  loading: false,
  error: null,
};

const librarySlice = createSlice({
  name: 'library',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //caso para cuando fetchapodthunk esta pendiente
      .addCase(fetchLibraryThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      //caso para cuando fetchapodthunk esta listo
      .addCase(fetchLibraryThunk.fulfilled, (state, action: PayloadAction<NasaMedia[]>) => {
        state.media = action.payload;
        state.loading = false;
      })
      //caso para cuando fetchapodthunk esta rechazado
      .addCase(fetchLibraryThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = typeof action.payload === 'string' ? action.payload : 'Failed to fetch media library';
      });
  },
});

export default librarySlice.reducer;