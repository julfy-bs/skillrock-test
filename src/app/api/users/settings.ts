import { User } from '../../../shared/types/user.ts';

export const usersBaseUrl = `${ import.meta.env.VITE_API_URL }?key=${ import.meta.env.VITE_API_KEY }`;

export const usersBaseResults = import.meta.env.VITE_API_RESULTS;

export interface IUsersApi {
	getUsers(params: UsersRequest): Promise<UsersResponse>;
}

export interface UsersRequest {
	length?: string;
}

export interface UsersResponse {
	readonly results: User[];
	readonly info: ResponseInfo;
}

export type ResponseInfo = {
	seed: string;
	results: number;
	page: number;
	version: string;
}