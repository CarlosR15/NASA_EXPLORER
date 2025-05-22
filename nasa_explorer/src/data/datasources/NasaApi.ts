import api from '../../infrastructure/apiClient';

export const NasaApi = {
  //peticion para api apod
  getApod: async () => {
    // obtiene la respuesta
    const res = await api.get('/planetary/apod');
    // devuelve los datos de la respuesta
    return res.data;
  },
};
