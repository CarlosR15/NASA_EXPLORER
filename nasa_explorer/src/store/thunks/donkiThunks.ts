import { createAsyncThunk } from '@reduxjs/toolkit';
import { DonkiRepositoryImpl } from '../../data/repositories/DonkiRepositoryImpl';
import { GetDonkiEventsUseCase } from '../../application/usecases/GetDonkiEventsUseCase';

// crea un thunk asíncrono llamado 'fetchDonkiEventsThunk' para obtener eventos DONKI
export const fetchDonkiEventsThunk = createAsyncThunk(
  'donki/fetchEvents',
  // la funcion asincrona recibe un objeto con 'startDate' y 'endDate' como parámetros y un objeto para manejar errores
  async ({ startDate, endDate }: { startDate: string; endDate: string }, { rejectWithValue }) => {
    try {
      // crea una instancia de la implementación del repositorio de DONKI
      const repo = new DonkiRepositoryImpl();
      const useCase = new GetDonkiEventsUseCase(repo);
      return await useCase.execute(startDate, endDate);
    } catch (error) {
      if (error instanceof Error) {
        // si el error es una instancia de la clase 'Error' devuelve su mensaje
        return rejectWithValue(error.message);
      }
      // si el error no es una instancia de 'Error' devuelve un mensaje de error generico
      return rejectWithValue('Error desconocido');
    }
  }
);