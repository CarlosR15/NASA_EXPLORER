import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDonkiEventsThunk } from '../../store/thunks/donkiThunks';
import { RootState } from '../../store/store';

export const useDonkiViewModel = () => {
  const dispatch = useDispatch();
  const { events, loading, error } = useSelector((state: RootState) => state.donki);

  const fetchEvents = (daysBack = 30) => {
    const endDate = new Date().toISOString().split('T')[0];
    const startDate = new Date(Date.now() - daysBack * 24 * 60 * 60 * 1000)
      .toISOString()
      .split('T')[0];
    
    dispatch(fetchDonkiEventsThunk({ startDate, endDate }));
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return { events, loading, error, fetchEvents };
};