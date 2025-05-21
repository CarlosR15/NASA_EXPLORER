import { EpicRepository } from '../../domain/repositories/EpicRepository';
import { EpicImage } from '../../domain/entities/EpicImage';
import { EpicRemoteDataSource } from '../datasources/EpicRemoteDataSource';

export class EpicRepositoryImpl implements EpicRepository {
  constructor(private remoteDataSource: EpicRemoteDataSource) {}

  async fetchEpicImages(): Promise<EpicImage[]> {
    return this.remoteDataSource.fetchEpicImages();
  }
}
