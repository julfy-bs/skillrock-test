import { ContentLayout } from '@/app/layouts/ContentLayout.tsx';
import { Button, Checkbox, FormControl, Input, Sheet, Table } from '@mui/joy';
import { Box } from '@mui/material';
import {
	ChangeEvent,
	FormEvent,
	ReactElement,
	useCallback,
	useState,
} from 'react';
import { v4 as uuid } from 'uuid';
import { content } from './content';
import { Task } from './types';

type TodoListPageProps = {};

export function TodoListPage({}: TodoListPageProps): ReactElement {
	const [input, setInput] = useState<string>('');
	const [checked, setChecked] = useState<boolean>(false);
	const [tasks, setTasks] = useState<Task[]>([]);
	
	const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
	}, []);
	
	const handleCheckChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			setChecked(e.target.checked);
		},
		[],
	);
	
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
		[tasks]
	);
	
	const handleDeleteTask = useCallback(
		(id: string) => {
			const task = tasks.find(task => task.id === id);
			if (task) {
				const tasksWithoutEdited = tasks.filter(task => task.id !== id);
				setTasks([...tasksWithoutEdited]);
			}
		},
		[tasks]
	)
	
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
				<Box
					sx={ {
						display: 'flex',
						alignItems: 'center',
						gap: '16px',
						width: '100%',
					} }
					component={ 'form' }
					onSubmit={ (e) => handleSubmit(e) }
				>
					<FormControl
						sx={ {
							width: '100%',
							flexShrink: '2',
						} }
					>
						<Input
							sx={ {
								width: '100%',
							} }
							size='sm'
							variant='soft'
							name='size'
							placeholder={ content.placeholder }
							type='text'
							value={ input }
							autoComplete={ 'off' }
							onChange={ (e) => handleInputChange(e) }
						/>
					</FormControl>
					<FormControl
						sx={ {
							flexShrink: '5',
							display: 'flex',
							gap: '16px',
							alignItems: 'center',
							width: '100%',
						} }
					>
						<Checkbox
							sx={ {
								alignSelf: 'center',
								width: '100%',
							} }
							size='sm'
							label={ 'Выполнено' }
							name={ 'done' }
							checked={ checked }
							onChange={ (e) => handleCheckChange(e) }
						/>
					</FormControl>
					<Button
						sx={ {
							flexShrink: '4',
							maxWidth: '300px',
							width: '100%',
						} }
						type={ 'submit' }
						size='sm'
						disabled={input.length <= 0}
					>
						Создать задачу
					</Button>
				</Box>
				
				{
					tasks && tasks.length > 0 && (
						<Sheet>
							<Table
								borderAxis='both'
								color='neutral'
								stickyFooter={ false }
								stickyHeader={ false }
								variant='soft'
							>
								<thead>
								<tr>
									<th
										style={ {
											maxWidth: '5%',
											width: '100%',
										} }
									>№
									</th>
									<th>Название задачи</th>
									<th
										style={ {
											maxWidth: '15%',
											width: '100%',
										} }
									>Статус
									</th>
									<th
										style={ {
											maxWidth: '20%',
											width: '100%',
										} }
									>Управление
									</th>
								</tr>
								</thead>
								<tbody>
								{
									tasks.map((task, index) => (
										<tr
											key={ task.id }
											style={ {
												textDecoration: task.finished ? 'line-through' : 'none',
											} }
										>
											<td>{ index + 1 }</td>
											<td
												style={ {
													textAlign: 'left',
												} }
											>{ task.title }</td>
											<td>
												<FormControl
													sx={ {
														flexShrink: '5',
														display: 'flex',
														gap: '16px',
														alignItems: 'center',
														width: '100%',
													} }
												>
													<Checkbox
														sx={ {
															width: '100%',
														} }
														size='sm'
														label={ task.finished ? 'Выполнена' : 'В процессе' }
														name={ 'done' }
														checked={ task.finished }
														onChange={ () => editTaskStatus(task.id) }
													/>
												</FormControl>
											</td>
											<td>
												<Button
													sx={ {
														width: '100%',
													} }
													size='sm'
													disabled={!task.id}
													variant='plain'
													color='danger'
													onClick={() => handleDeleteTask(task.id)}
												>
													Удалить
												</Button>
											</td>
										</tr>
									))
								}
								</tbody>
							</Table>
						</Sheet>
					)
				}
			</Box>
		</ContentLayout>
	);
}
