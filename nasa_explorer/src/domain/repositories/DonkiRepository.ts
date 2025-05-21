import { DonkiEvent } from '../entities/DonkiEvent';

export interface DonkiRepository {
  getEvents(startDate: string, endDate: string): Promise<DonkiEvent[]>;
}
