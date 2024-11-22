import { FormControl, Input } from '@mui/joy';
import { Box } from '@mui/material';
import { ChangeEvent, ReactElement, useCallback, useState } from 'react';
import { ContentLayout } from '../../app/layouts/ContentLayout.tsx';
import {
	FizzBuzzComponent,
} from '../../features/fizz-buzz/FizzBuzzComponent.tsx';
import { content } from './content.ts';

export function FizzBuzzPage(): ReactElement {
	const [input, setInput] = useState<string>('');
	const [isDirty, setIsDirty] = useState<boolean>(false);
	
	const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
		setIsDirty(true);
	}, []);
	
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
					alignItems: 'center',
					width: '100%',
				} }
			>
				<FormControl
					sx={ {
						display: 'flex',
						flexDirection: 'column',
						gap: '16px',
						alignItems: 'center',
						width: '100%',
					} }
				>
					<Input
						sx={ {
							alignSelf: 'center',
							width: '100%',
						} }
						size='lg'
						variant='soft'
						name='email'
						placeholder={ content.placeholder }
						type='number'
						value={ input }
						autoComplete={ 'off' }
						onChange={ (e) => handleChange(e) }
					/>
				</FormControl>
			</Box>
			{ isDirty && input.length > 0 &&
				(
					<FizzBuzzComponent
						isDirty={ isDirty }
						stringifiedNumber={ input }
					/>
				)
			}
		</ContentLayout>
	
	);
}
