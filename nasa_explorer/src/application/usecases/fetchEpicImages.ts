import { EpicRepository } from '../../domain/repositories/EpicRepository';
import { EpicImage } from '../../domain/entities/EpicImage';

export class FetchEpicImagesUseCase {
  constructor(private repository: EpicRepository) {}

  async execute(): Promise<EpicImage[]> {
    return this.repository.fetchEpicImages();
  }
}
