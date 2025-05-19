import { useState, useEffect } from 'react';
import { NasaPhoto } from '../../domain/entities/NasaPhoto';
import { fetchApod } from '../../application/usecases/fetchApod';
import { NasaRepositoryImpl } from '../../data/repositories/NasaRepositoryImpl';

export const useApodViewModel = () => {
  const [photo, setPhoto] = useState<NasaPhoto | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const result = await fetchApod(NasaRepositoryImpl)();
      setPhoto(result);
      setLoading(false);
    };
    load();
  }, []);

  return { photo, loading };
};
