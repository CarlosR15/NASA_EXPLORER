import axios from 'axios';
import { DonkiEvent } from '../../domain/entities/DonkiEvent';

const BASE_URL = 'https://api.nasa.gov/DONKI';

export const DonkiApiService = {
  async getCmeEvents(startDate: string, endDate: string): Promise<any[]> {
    try {
      const response = await axios.get(`${BASE_URL}/CME`, {
        params: {
          startDate,
          endDate,
          api_key: process.env.EXPO_PUBLIC_NASA_API_KEY || 'DEMO_KEY',
        },
      });
      return response.data || [];
    } catch (error) {
      console.error('DONKI API Error:', error.response?.data || error.message);
      throw new Error('Error fetching DONKI events');
    }
  },
};