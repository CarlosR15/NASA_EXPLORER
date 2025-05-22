import { NasaApi } from '../datasources/NasaApi';
import { NasaPhoto } from '../../domain/entities/NasaPhoto';
import { NasaRepository } from '../../domain/repositories/NasaRepository';

export const NasaRepositoryImpl: NasaRepository = {
    async getApod(): Promise<NasaPhoto> {
        const dto = await NasaApi.getApod();
        return {
            title: dto.title,
            explanation: dto.explanation,
            url: dto.url,
            date: dto.date,
            media_type: dto.media_type,
        };
    },
};
