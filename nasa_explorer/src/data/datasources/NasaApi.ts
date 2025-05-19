import api from '../../infrastructure/apiClient';

export const NasaApi = {
  getApod: async () => {
    const res = await api.get('/planetary/apod');
    return res.data;
  },
};
