import { useDispatch, useSelector } from 'react-redux';
import { fetchMarsPhotosThunk } from '../../store/thunks/marsThunks';
import { RootState, AppDispatch  } from '../../store/store';

//hook personalizado para obtener los datos
export const useMarsRoverViewModel = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { photos, loading, error } = useSelector((state: RootState) => state.mars);

  const fetchPhotos = (sol: number = 1000) => { 
    dispatch(fetchMarsPhotosThunk(sol)); 
  };

  return { photos, loading, error, fetchPhotos };
};  