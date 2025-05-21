import axios from 'axios';
import { MarsPhoto } from '../../domain/entities/MarsPhoto';

const API_KEY = process.env.EXPO_PUBLIC_NASA_API_KEY;
const BASE_URL = 'https://api.nasa.gov/mars-photos/api/v1';

export const fetchMarsPhotos = async (sol: number, page = 1): Promise<MarsPhoto[]> => {
  try {
    const res = await axios.get(`${BASE_URL}/rovers/curiosity/photos`, {
      params: { 
        sol, 
        page, 
        api_key: process.env.EXPO_PUBLIC_NASA_API_KEY || 'DEMO_KEY'
      }
    });
    return res.data.photos || [];
  } catch (error) {
    console.error('Mars API Error:', error);
    throw new Error('Failed to fetch Mars photos');
  }
};