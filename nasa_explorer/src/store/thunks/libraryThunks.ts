import { createAsyncThunk } from '@reduxjs/toolkit';
import { NasaMediaRepositoryImpl } from '../../data/repositories/NasaMediaRepositoryImpl';
import { fetchMediaLibrary } from '../../application/usecases/fetchMediaLibrary';

export const fetchLibraryThunk = createAsyncThunk(
  'library/fetchMedia',
  async (query: string) => {
    const repo = new NasaMediaRepositoryImpl();
    return await fetchMediaLibrary(repo, query);
  }
);