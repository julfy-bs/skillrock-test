import { Picture } from '../../../shared/types/picture.ts';

export const picturesBaseUrl = `${ import.meta.env.VITE_API_PICTURES_URL }`;

export interface IPicturesApi {
	getPictures(params: PicturesRequest): Promise<PicturesResponse>;
}

export interface PicturesRequest {
	length?: string;
	page?: string;
}

export interface PicturesResponse {
	images: Picture[];
}