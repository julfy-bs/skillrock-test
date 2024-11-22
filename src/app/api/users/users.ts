import { Api } from '../index.ts';
import {
	IUsersApi,
	usersBaseResults,
	usersBaseUrl,
	UsersRequest,
	UsersResponse,
} from './settings.ts';

export class UsersAPI extends Api implements IUsersApi {
	async getUsers({
		length = usersBaseResults,
	}: UsersRequest): Promise<UsersResponse> {
		const response = await fetch(`${this.baseUrl}&results=${length}`);
		return this.isResponse<UsersResponse>(response);
	}
}

export const usersAPI = new UsersAPI(usersBaseUrl);
