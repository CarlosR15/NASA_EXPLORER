import axios from 'axios';

const BASE_URL = 'https://api.nasa.gov/DONKI';

export const DonkiApiService = {
  //obtener eventos CME
  async getCmeEvents(startDate: string, endDate: string): Promise<any[]> {
    try {
      //solicitud get a la api DONKI 
      const response = await axios.get(`${BASE_URL}/CME`, {
        params: {
          // Fecha de inicio en formato YYYY-MM-DD
          startDate,
          // Fecha de fin en formato YYYY-MM-DD
          endDate,
          api_key: process.env.EXPO_PUBLIC_NASA_API_KEY,
        },
      });
      //retorna los datos de la respuesta o la respuesta del error
      return response.data || [];
    } catch (error) { //manejo de errores
      //error tipo axios
      if (axios.isAxiosError(error)) {
        console.error('DONKI API Error:', error.response?.data || error.message);
      } else if (error instanceof Error) {
        //error standard
        console.error('Unexpected error:', error.message);
      } else {
        //error desconocido
        console.error('Unknown error:', error);
      }
      throw new Error('Error fetching DONKI events');
    }
  },
};