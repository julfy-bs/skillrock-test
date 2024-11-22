import { Button, Checkbox, FormControl, Sheet, Table } from '@mui/joy';
import { ReactElement } from 'react';
import { Task } from '../../shared/types/task.ts';

type TodoTableProps = {
	tasks: Task[];
	editTaskStatus: (id: string) => void;
	handleDeleteTask: (id: string) => void;
}

export function TodoTable({
	tasks,
	editTaskStatus,
	handleDeleteTask
}: TodoTableProps): ReactElement {
	return (
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
									disabled={ !task.id }
									variant='plain'
									color='danger'
									onClick={ () => handleDeleteTask(task.id) }
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
	);
}