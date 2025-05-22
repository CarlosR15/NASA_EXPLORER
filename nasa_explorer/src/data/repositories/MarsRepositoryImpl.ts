import { MarsRepository } from '../../domain/repositories/MarsRepository';
import { fetchMarsPhotos } from '../datasources/MarsRoverApi';
import { MarsPhoto } from '../../domain/entities/MarsPhoto';

export class MarsRepositoryImpl implements MarsRepository {
  async getPhotosBySol(sol: number, page = 1): Promise<MarsPhoto[]> {
    return await fetchMarsPhotos(sol, page);
  }
}
