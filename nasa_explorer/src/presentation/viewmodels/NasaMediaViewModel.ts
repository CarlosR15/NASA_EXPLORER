import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchLibraryThunk } from '../../store/thunks/libraryThunks';
import { RootState } from '../../store/store';
import { useAppDispatch } from '../../presentation/hooks/useAppDispatch';

//hook personalizado para obtener los datos
export const useNasaMediaViewModel = (query: string) => {
  const dispatch = useAppDispatch();
  const { media, loading, error } = useSelector((state: RootState) => state.library);

  useEffect(() => {
    if (query) {
      dispatch(fetchLibraryThunk(query));
    }
  }, [dispatch, query]);

  return { media, loading, error };
};