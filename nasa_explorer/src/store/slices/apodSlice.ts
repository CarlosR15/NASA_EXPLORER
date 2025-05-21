import { createSlice } from '@reduxjs/toolkit';
import { NasaPhoto } from '../../domain/entities/NasaPhoto';
import { fetchApodThunk } from '../thunks/apodThunk';

interface ApodState {
  photo: NasaPhoto | null;
  loading: boolean;
  error: string | null;
}

const initialState: ApodState = {
  photo: null,
  loading: false,
  error: null,
};

const apodSlice = createSlice({
  name: 'apod',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchApodThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchApodThunk.fulfilled, (state, action) => {
        state.photo = action.payload;
        state.loading = false;
      })
      .addCase(fetchApodThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error';
      });
  },
});

export default apodSlice.reducer;