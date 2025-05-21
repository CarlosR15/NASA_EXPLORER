import { DonkiRepository } from '../../domain/repositories/DonkiRepository';
import { DonkiEvent } from '../../domain/entities/DonkiEvent';

export class GetDonkiEventsUseCase {
  constructor(private repository: DonkiRepository) {}

  execute(startDate: string, endDate: string): Promise<DonkiEvent[]> {
    return this.repository.getEvents(startDate, endDate);
  }
}
