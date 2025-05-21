import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEpicImagesThunk } from '../../store/thunks/epicThunks';
import { RootState } from '../../store/store';

export const useEpicViewModel = () => {
  const dispatch = useDispatch();
  const { images, loading, error } = useSelector((state: RootState) => state.epic);

  useEffect(() => {
    dispatch(fetchEpicImagesThunk());
  }, [dispatch]);

  const isEmpty = !loading && !error && images.length === 0;

  return { images, loading, error, isEmpty };
};