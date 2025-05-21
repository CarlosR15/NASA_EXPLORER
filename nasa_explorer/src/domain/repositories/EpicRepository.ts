import { EpicImage } from '../entities/EpicImage';

export interface EpicRepository {
  fetchEpicImages(): Promise<EpicImage[]>;
}