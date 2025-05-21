import { createSlice } from '@reduxjs/toolkit';
import { fetchEpicImagesThunk } from '../thunks/epicThunks';
import { EpicImage } from '../../domain/entities/EpicImage';

const initialState = {
  images: [] as EpicImage[],
  loading: false,
  error: null as string | null,
};

const epicSlice = createSlice({
  name: 'epic',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEpicImagesThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEpicImagesThunk.fulfilled, (state, action) => {
        state.images = action.payload;
        state.loading = false;
      })
      .addCase(fetchEpicImagesThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load EPIC images';
      });
  },
});

export default epicSlice.reducer;