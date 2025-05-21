import { useDispatch, useSelector } from 'react-redux';
import { fetchMarsPhotosThunk } from '../../store/thunks/marsThunks';
import { RootState } from '../../store/store';

export const useMarsRoverViewModel = () => {
  const dispatch = useDispatch();
  const { photos, loading, error } = useSelector((state: RootState) => state.mars);

  const fetchPhotos = (sol: number = 1000) => {  // Valor por defecto
    dispatch(fetchMarsPhotosThunk(sol));  // Envía solo el número
  };

  return { photos, loading, error, fetchPhotos };
};