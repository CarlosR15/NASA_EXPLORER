import { NasaPhoto } from '../entities/NasaPhoto';

export interface NasaRepository {
  getApod(): Promise<NasaPhoto>;
}
