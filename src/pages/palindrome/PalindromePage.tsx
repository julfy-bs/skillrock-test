import { ContentLayout } from '@/app/layouts/ContentLayout.tsx';
import {
	PalindromeComponent,
} from '@/features/palindrome/PalindromeComponent.tsx';
import { content } from '@/pages/palindrome/content.ts';
import { FormControl, Input } from '@mui/joy';
import { ChangeEvent, ReactElement, useCallback, useState } from 'react';

type PalindromePageProps = {};

export function PalindromePage({}: PalindromePageProps): ReactElement {
	const [input, setInput] = useState<string>('');
	const [isDirty, setIsDirty] = useState<boolean>(false);
	
	const handleChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			setInput(e.target.value);
			setIsDirty(true);
		},
		[],
	);
	
	return (
		<>
			<ContentLayout
				pageTitle={ content.title }
				pageDescription={ content.description }
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
						value={ input }
						autoComplete={ 'off' }
						onChange={ (e) => handleChange(e) }
					/>
				</FormControl>
				<PalindromeComponent
					isDirty={ isDirty }
					stringToCheck={ input }
				/>
			</ContentLayout>
		</>
	);
}
