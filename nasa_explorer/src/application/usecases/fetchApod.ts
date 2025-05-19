import { NasaRepository } from '../../domain/repositories/NasaRepository';

export const fetchApod = (repo: NasaRepository) => {
  return async () => {
    return await repo.getApod();
  };
};
