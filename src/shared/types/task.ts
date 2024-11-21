export type Task = {
	id: string;
	title: string;
	finished: boolean;
}

export enum TaskFilter {
	all = 'all',
	finished = 'finished',
	inProgress = 'in_progress'
}