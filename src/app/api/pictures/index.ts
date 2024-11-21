import { Api } from '@/app/api';
import {
	IPicturesApi,
	picturesBaseUrl,
	PicturesResponse,
} from './settings.ts';

export class PicturesAPI extends Api implements IPicturesApi {
	async getPictures(): Promise<PicturesResponse> {
		const response = await fetch(`${this.baseUrl}`);
		return this.isResponse<PicturesResponse>(response);
	}
}

export const picturesAPI = new PicturesAPI(picturesBaseUrl);
