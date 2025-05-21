import { MarsRepository } from '../../domain/repositories/MarsRepository';
import { MarsPhoto } from '../../domain/entities/MarsPhoto';

export class GetMarsPhotos {
  constructor(private marsRepository: MarsRepository) {}

  async execute(sol: number, page = 1): Promise<MarsPhoto[]> {
    return await this.marsRepository.getPhotosBySol(sol, page);
  }
}
    