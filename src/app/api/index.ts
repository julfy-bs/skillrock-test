export class Api {
	constructor(protected readonly baseUrl: string) {}
	
	protected async isResponse<T>(res: Response): Promise<T> {
		return res.ok
			? ((await res.json()) as Promise<T>)
			: await res.json().then((err) => Promise.reject(err as Error));
	}
}
