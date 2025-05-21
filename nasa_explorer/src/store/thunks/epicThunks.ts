import { createAsyncThunk } from '@reduxjs/toolkit';
import { EpicRepositoryImpl } from '../../data/repositories/EpicRepositoryImpl';
import { EpicRemoteDataSource } from '../../data/datasources/EpicRemoteDataSource';
import { FetchEpicImagesUseCase } from '../../application/usecases/fetchEpicImages';

export const fetchEpicImagesThunk = createAsyncThunk(
  'epic/fetchImages',
  async () => {
    const remoteDataSource = new EpicRemoteDataSource();
    const repo = new EpicRepositoryImpl(remoteDataSource);
    const useCase = new FetchEpicImagesUseCase(repo);
    return await useCase.execute();
  }
);