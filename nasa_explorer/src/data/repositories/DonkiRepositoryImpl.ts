import { DonkiRepository } from '../../domain/repositories/DonkiRepository';
import { DonkiEvent } from '../../domain/entities/DonkiEvent';
import { DonkiApiService } from '../datasources/DonkiApiService';
import { mapToDonkiEvent } from '../mappers/DonkiEventMapper';

export class DonkiRepositoryImpl implements DonkiRepository {
  async getEvents(startDate: string, endDate: string): Promise<DonkiEvent[]> {
    const rawData = await DonkiApiService.getCmeEvents(startDate, endDate);
    return rawData.map(mapToDonkiEvent);
  }
}
