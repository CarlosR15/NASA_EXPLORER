import { createSlice } from '@reduxjs/toolkit';
import { fetchDonkiEventsThunk } from '../thunks/donkiThunks';
import { DonkiEvent } from '../../domain/entities/DonkiEvent';

//interfaz de donkistate
interface DonkiState {
  events: DonkiEvent[];
  loading: boolean;
  error: string | null;
}

//define estado inicial de donkistate
const initialState: DonkiState = {
  events: [],
  loading: false,
  error: null,
};

// crea un slice de redux toolkit para la funcionalidad de DONKI
const donkiSlice = createSlice({
  name: 'donki',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //caso para cuando fetchapodthunk esta pendiente
      .addCase(fetchDonkiEventsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      //caso para cuando fetchapodthunk esta listo
      .addCase(fetchDonkiEventsThunk.fulfilled, (state, action) => {
        state.events = action.payload;
        state.loading = false;
      })
      //caso para cuando fetchapodthunk esta rechazado
      .addCase(fetchDonkiEventsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || 'Failed to fetch DONKI events';
      });
  },
});

export default donkiSlice.reducer;