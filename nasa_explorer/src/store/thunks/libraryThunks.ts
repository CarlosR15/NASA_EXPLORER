import { createAsyncThunk } from '@reduxjs/toolkit';
import { NasaMediaRepositoryImpl } from '../../data/repositories/NasaMediaRepositoryImpl';
import { fetchMediaLibrary } from '../../application/usecases/fetchMediaLibrary';

// Crea un thunk asincrono llamado 'fetchLibraryThunk' para obtener elementos de la biblioteca de iamgenes de la NASA
export const fetchLibraryThunk = createAsyncThunk(
  'library/fetchMedia',
  // función asincrona recibe una 'query' que sirve para buscar en la biblioteca
  async (query: string) => {
    const repo = new NasaMediaRepositoryImpl();
    // el resultado de esta llamada sera el payload de la accion 'fulfilled'
    return await fetchMediaLibrary(repo, query);
  }
);