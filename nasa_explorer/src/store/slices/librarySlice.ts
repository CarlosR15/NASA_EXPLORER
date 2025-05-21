import { createSlice } from '@reduxjs/toolkit';
import { fetchLibraryThunk } from '../thunks/libraryThunks';

const librarySlice = createSlice({
  name: 'library',
  initialState: {
    media: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLibraryThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLibraryThunk.fulfilled, (state, action) => {
        state.media = action.payload;
        state.loading = false;
      })
      .addCase(fetchLibraryThunk.rejected, (state) => {
        state.loading = false;
        state.error = 'Failed to fetch media library';
      });
  },
});

export default librarySlice.reducer;