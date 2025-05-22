import { createAsyncThunk } from '@reduxjs/toolkit';
import { EpicRepositoryImpl } from '../../data/repositories/EpicRepositoryImpl';
import { EpicRemoteDataSource } from '../../data/datasources/EpicRemoteDataSource';
import { FetchEpicImagesUseCase } from '../../application/usecases/fetchEpicImages';

// crea un thunk asincrono llamado 'fetchEpicImagesThunk' para obtener las imagenes EPIC
export const fetchEpicImagesThunk = createAsyncThunk(
  'epic/fetchImages',
  async () => {
    // crea una instancia de la fuente de datos remota para las imagenes EPIC
    const remoteDataSource = new EpicRemoteDataSource();
    // crea una instancia se inyecta la fuente de datos remota a 
    const repo = new EpicRepositoryImpl(remoteDataSource);
    // crea una instancia del caso de uso para obtener las imagenes EPIC inyectando el repositorio
    const useCase = new FetchEpicImagesUseCase(repo);
    return await useCase.execute();
  }
);