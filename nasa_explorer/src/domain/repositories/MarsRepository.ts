import { MarsPhoto } from '../entities/MarsPhoto';

export interface MarsRepository {
  getPhotosBySol(sol: number, page?: number): Promise<MarsPhoto[]>;
}
