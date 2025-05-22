import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApodThunk } from '../../store/thunks/apodThunk';
import { RootState, AppDispatch } from '../../store/store';

//hook personalizado para obtener los datos
export const useApodViewModel = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { photo, loading, error } = useSelector((state: RootState) => state.apod);

  useEffect(() => {
    dispatch(fetchApodThunk());
  }, [dispatch]);

  return { photo, loading, error };
};