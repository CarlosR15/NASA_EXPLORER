import { createSlice } from '@reduxjs/toolkit';
import { fetchMarsPhotosThunk } from '../thunks/marsThunks';
import { MarsPhoto } from '../../domain/entities/MarsPhoto';

interface MarsState {
  photos: MarsPhoto[];
  loading: boolean;
  error: string | null;
}

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
      .addCase(fetchMarsPhotosThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMarsPhotosThunk.fulfilled, (state, action) => {
        state.photos = action.payload;
        state.loading = false;
      })
      .addCase(fetchMarsPhotosThunk.rejected, (state) => {
        state.loading = false;
        state.error = 'Failed to fetch Mars photos';
      });
  },
});

export default marsSlice.reducer;