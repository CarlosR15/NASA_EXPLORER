import { NasaMediaRepository } from '../../domain/repositories/NasaMediaRepository';
import { NasaMedia } from '../../domain/entities/NasaMedia';

export const fetchMediaLibrary = async (
  repository: NasaMediaRepository,
  query: string
): Promise<NasaMedia[]> => {
  return repository.getImageLibrary(query);
};
