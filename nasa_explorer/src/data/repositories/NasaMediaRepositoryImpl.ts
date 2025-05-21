import { NasaMediaRepository } from '../../domain/repositories/NasaMediaRepository';
import { NasaMedia } from '../../domain/entities/NasaMedia';

export class NasaMediaRepositoryImpl implements NasaMediaRepository {
  async getImageLibrary(query: string): Promise<NasaMedia[]> {
    const url = `https://images-api.nasa.gov/search?q=${encodeURIComponent(query)}&media_type=image`;

    const res = await fetch(url);
    const data = await res.json();

    return data.collection.items.map((item: any) => {
      const metadata = item.data[0];
      const links = item.links?.[0];

      return {
        title: metadata.title,
        description: metadata.description,
        nasa_id: metadata.nasa_id,
        media_type: metadata.media_type,
        previewUrl: links?.href || '',
        date_created: metadata.date_created,
      } as NasaMedia;
    });
  }
}
