import { createSlice } from '@reduxjs/toolkit';
import { fetchDonkiEventsThunk } from '../thunks/donkiThunks';
import { DonkiEvent } from '../../domain/entities/DonkiEvent';

interface DonkiState {
  events: DonkiEvent[];
  loading: boolean;
  error: string | null;
}

const initialState: DonkiState = {
  events: [],
  loading: false,
  error: null,
};

const donkiSlice = createSlice({
  name: 'donki',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDonkiEventsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDonkiEventsThunk.fulfilled, (state, action) => {
        state.events = action.payload;
        state.loading = false;
      })
      .addCase(fetchDonkiEventsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || 'Failed to fetch DONKI events';
      });
  },
});

export default donkiSlice.reducer;