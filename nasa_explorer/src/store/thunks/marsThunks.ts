import { createAsyncThunk } from '@reduxjs/toolkit';
import { MarsRepositoryImpl } from '../../data/repositories/MarsRepositoryImpl';
import { GetMarsPhotos } from '../../application/usecases/GetMarsPhotos';

// crea un thunk asíncrono llamado 'fetchMarsPhotosThunk' para obtener fotos del rover de Marte
export const fetchMarsPhotosThunk = createAsyncThunk(
  'mars/fetchPhotos',
  // funcion asincrona recibe el numero de 'sol' (día marciano) como argumento
  async (sol: number, { rejectWithValue }) => { 
    try {
      const repo = new MarsRepositoryImpl();
      const useCase = new GetMarsPhotos(repo);
      return await useCase.execute(sol);
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Error desconocido');
    }
  }
);