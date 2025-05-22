import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchApod } from '../../application/usecases/fetchApod';
import { NasaRepositoryImpl } from '../../data/repositories/NasaRepositoryImpl';
import { NasaPhoto } from '../../domain/entities/NasaPhoto';
import { storage } from '../../core/utils/storage';

// define la clave para almacenar en el almacenamiento local (offline)
const STORAGE_KEY = 'offline_apod';

// crea un thunk asincrono llamado 'fetchApodThunk' que realiza la lógica para obtener la foto APOD
export const fetchApodThunk = createAsyncThunk<NasaPhoto>(
  'apod/fetchApod',
  async (_, { rejectWithValue }) => {
    try {
      const result = await fetchApod(NasaRepositoryImpl)();
      // guarda el resultado exitoso en el almacenamiento local
      await storage.setItem(STORAGE_KEY, JSON.stringify(result));
      // retorna el resultado
      return result;
    } catch (error) {
      console.warn('[APOD] Error de red. Intentando cache...');

      try {
        // intenta obtener datos APOD cacheados del almacenamiento local
        const cached = await storage.getItem(STORAGE_KEY);
        if (cached) { // si los hay los parsea y retorna
          return JSON.parse(cached);
        } else {
          // si no hay datos cacheados rechaza la promesa especifica
          return rejectWithValue('No hay datos guardados para APOD.');
        }
      } catch {
        // Si falla la lectura de la cache rechaza la promes
        return rejectWithValue('No se pudo recuperar datos offline.');
      }
    }
  }
);