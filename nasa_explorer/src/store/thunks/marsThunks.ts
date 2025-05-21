import { createAsyncThunk } from '@reduxjs/toolkit';
import { MarsRepositoryImpl } from '../../data/repositories/MarsRepositoryImpl';
import { GetMarsPhotos } from '../../application/usecases/GetMarsPhotos';

export const fetchMarsPhotosThunk = createAsyncThunk(
  'mars/fetchPhotos',
  async (sol: number, { rejectWithValue }) => {  // Añade rejectWithValue
    try {
      const repo = new MarsRepositoryImpl();
      const useCase = new GetMarsPhotos(repo);
      return await useCase.execute(sol);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);