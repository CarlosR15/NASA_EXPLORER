import axios from 'axios';
import { EpicImage } from '../../domain/entities/EpicImage';

const API_KEY = process.env.EXPO_PUBLIC_NASA_API_KEY;

export class EpicRemoteDataSource {
  async fetchEpicImages(): Promise<EpicImage[]> {
    try {
      const response = await axios.get(
        `https://api.nasa.gov/EPIC/api/natural?api_key=${API_KEY}`
      );
      
      return response.data.map((item: any) => {
        const date = new Date(item.date);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        return {
          image: `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${item.image}.png`,
          date: item.date,
          caption: item.caption || 'Earth Image',
        };
      });
    } catch (error) {
      console.error('EPIC API Error:', error);
      throw new Error('Failed to fetch EPIC images');
    }
  }
}