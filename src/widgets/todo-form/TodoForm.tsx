import {
	Box,
	Button,
	Checkbox,
	FormControl,
	Input,
	Option,
	Select,
} from '@mui/joy';
import React, { ChangeEvent, FormEvent, ReactElement } from 'react';
import { TaskFilter } from '../../shared/types/task.ts';

type TodoFormProps = {
	handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
	handleFilterTasks: (
		_: React.SyntheticEvent | null,
		newValue: string | null,
	) => void;
	checked: boolean;
	input: string;
	filter: TaskFilter;
	handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
	handleCheckChange: (e: ChangeEvent<HTMLInputElement>) => void;
	inputPlaceholder: string;
}

export function TodoForm({
	handleSubmit,
	handleFilterTasks,
	handleInputChange,
	handleCheckChange,
	checked,
	input,
	filter,
	inputPlaceholder
}: TodoFormProps): ReactElement {
	return (
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
				<Select
					onChange={ handleFilterTasks }
					sx={ {
						flexShrink: '4',
						maxWidth: '300px',
						width: '100%',
					} }
					size={'sm'}
					value={ filter }
				>
					<Option value={ TaskFilter.all }>Все</Option>
					<Option value={ TaskFilter.inProgress }>В процессе</Option>
					<Option value={ TaskFilter.finished }>Завершенные</Option>
				</Select>
				<FormControl
					sx={ {
						width: '100%',
						flexShrink: '3',
					} }
				>
					<Input
						sx={ {
							width: '100%',
						} }
						size='sm'
						variant='soft'
						name='size'
						placeholder={ inputPlaceholder }
						type='text'
						value={ input }
						autoComplete={ 'off' }
						onChange={ (e) => handleInputChange(e) }
					/>
				</FormControl>
				<FormControl
					sx={ {
						flexShrink: '6',
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
					disabled={ input.length <= 0 }
				>
					Создать задачу
				</Button>
			</Box>
	);
}