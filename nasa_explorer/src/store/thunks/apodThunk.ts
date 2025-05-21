import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchApod } from '../../application/usecases/fetchApod';
import { NasaRepositoryImpl } from '../../data/repositories/NasaRepositoryImpl';

export const fetchApodThunk = createAsyncThunk(
  'apod/fetchApod',
  async () => {
    const result = await fetchApod(NasaRepositoryImpl)();
    return result;
  }
);