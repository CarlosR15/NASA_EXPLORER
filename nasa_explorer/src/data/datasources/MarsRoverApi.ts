import axios from 'axios';
import { MarsPhoto } from '../../domain/entities/MarsPhoto';

const BASE_URL = 'https://api.nasa.gov/mars-photos/api/v1';

//funcion para obtener imagenes del rover de la nasa en un sol (dia marciano/aproximadamente 24 horas y 40 minutos en Marte)
export const fetchMarsPhotos = async (sol: number, page = 1): Promise<MarsPhoto[]> => {
  try {
    // realiza una petición GET al endpoint de fotos del rover
    const res = await axios.get(`${BASE_URL}/rovers/curiosity/photos`, {
      params: { 
        sol, // dia marciano solicitado
        page, // pagina de resultados
        api_key: process.env.EXPO_PUBLIC_NASA_API_KEY
      }
    });
    // devuelve el arreglo de fotos o un arreglo vacio
    return res.data.photos || [];
  } catch (error) {
    // manejo de errores
    console.error('Mars API Error:', error);
    throw new Error('Failed to fetch Mars photos');
  }
};