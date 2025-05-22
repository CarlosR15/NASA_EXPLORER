import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEpicImagesThunk } from '../../store/thunks/epicThunks';
import { RootState, AppDispatch } from '../../store/store';
import { updateEpicThemeFromDateTime } from '../../store/slices/themeSlice';

//hook personalizado para obtener los datos
export const useEpicViewModel = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { images, loading, error } = useSelector((state: RootState) => state.epic);

  useEffect(() => {
    dispatch(fetchEpicImagesThunk())
      .unwrap()
      .then((payload) => {
        if (payload && payload.length > 0) {
          dispatch(updateEpicThemeFromDateTime(payload[0].date));
        }
      })
      .catch(() => {});
  }, [dispatch]);

  const isEmpty = !loading && !error && images.length === 0;

  return { images, loading, error, isEmpty };
};