import { DonkiEvent } from '../../domain/entities/DonkiEvent';

export const mapToDonkiEvent = (raw: any): DonkiEvent => ({
  id: raw.activityID || '',
  eventType: 'CME',
  source: raw.sourceLocation || 'Unknown',
  startTime: raw.startTime,
  link: raw.link,
});
