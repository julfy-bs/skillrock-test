import { Box } from '@mui/material';
import React, {
	ChangeEvent,
	FormEvent,
	ReactElement,
	useCallback,
	useMemo,
	useState,
} from 'react';
import { v4 as uuid } from 'uuid';
import { ContentLayout } from '../../app/layouts/ContentLayout.tsx';
import { Task, TaskFilter } from '../../shared/types/task.ts';
import { TodoTable } from '../../widgets/table/TodoTable.tsx';
import { TodoForm } from '../../widgets/todo-form/TodoForm.tsx';
import { content } from './content';

export function TodoListPage(): ReactElement {
	const [input, setInput] = useState<string>('');
	const [checked, setChecked] = useState<boolean>(false);
	const [tasks, setTasks] = useState<Task[]>([]);
	const [filter, setFilter] = useState<TaskFilter>(TaskFilter.all);
	
	const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
	}, []);
	
	const handleCheckChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			setChecked(e.target.checked);
		},
		[],
	);
	
	const filteredTasks = useMemo(
		() => {
			if (filter === TaskFilter.finished) {
				return tasks.filter(task => task.finished);
			}
			if (filter === TaskFilter.inProgress) {
				return tasks.filter(task => !task.finished);
			}
			return tasks;
		},
		[tasks, filter],
	);
	
	const handleFilterTasks = (
		_: React.SyntheticEvent | null,
		newValue: string | null,
	) => {
		setFilter(newValue as TaskFilter);
	};
	
	const handleSubmit = useCallback(
		(e: FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			const newTask = {
				id: uuid(),
				title: input,
				finished: checked,
			};
			setTasks((prevState) => {
				return [
					...prevState,
					newTask,
				];
			});
			setInput('');
		},
		[input, checked],
	);
	
	const editTaskStatus = useCallback(
		(id: string) => {
			const task = tasks.find(task => task.id === id);
			if (task) {
				const tasksWithoutEdited = tasks.filter(task => task.id !== id);
				task.finished = !task.finished;
				setTasks([...tasksWithoutEdited, task]);
			}
		},
		[tasks],
	);
	
	const handleDeleteTask = useCallback(
		(id: string) => {
			const task = tasks.find(task => task.id === id);
			if (task) {
				const tasksWithoutEdited = tasks.filter(task => task.id !== id);
				setTasks([...tasksWithoutEdited]);
			}
		},
		[tasks],
	);
	
	return (
		<ContentLayout
			pageTitle={ content.title }
			pageDescription={ content.description }
		>
			<Box
				sx={ {
					display: 'flex',
					flexDirection: 'column',
					gap: '16px',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
				} }
			>
				<TodoForm
					handleSubmit={ handleSubmit }
					handleFilterTasks={ handleFilterTasks }
					checked={ checked }
					input={ input }
					filter={ filter }
					handleInputChange={ handleInputChange }
					handleCheckChange={ handleCheckChange }
					inputPlaceholder={content.placeholder}
				/>
				{
					filteredTasks && filteredTasks.length > 0 && (
						<TodoTable
							tasks={ filteredTasks }
							editTaskStatus={ editTaskStatus }
							handleDeleteTask={ handleDeleteTask }
						/>
					)
				}
			</Box>
		</ContentLayout>
	);
}
