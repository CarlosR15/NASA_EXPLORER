import { createAsyncThunk } from '@reduxjs/toolkit';
import { DonkiRepositoryImpl } from '../../data/repositories/DonkiRepositoryImpl';
import { GetDonkiEventsUseCase } from '../../application/usecases/GetDonkiEventsUseCase';

export const fetchDonkiEventsThunk = createAsyncThunk(
  'donki/fetchEvents',
  async ({ startDate, endDate }: { startDate: string; endDate: string }, { rejectWithValue }) => {
    try {
      const repo = new DonkiRepositoryImpl();
      const useCase = new GetDonkiEventsUseCase(repo);
      return await useCase.execute(startDate, endDate);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);