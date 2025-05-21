import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApodThunk } from '../../store/thunks/apodThunk';
import { RootState } from '../../store/store';

export const useApodViewModel = () => {
  const dispatch = useDispatch();
  const { photo, loading, error } = useSelector((state: RootState) => state.apod);

  useEffect(() => {
    dispatch(fetchApodThunk());
  }, [dispatch]);

  return { photo, loading, error };
};