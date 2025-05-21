import { NasaMedia } from '../entities/NasaMedia';

export interface NasaMediaRepository {
  getImageLibrary(query: string): Promise<NasaMedia[]>;
}
