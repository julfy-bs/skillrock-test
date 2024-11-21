import { ContentLayout } from '@/app/layouts/ContentLayout.tsx';
import {
	ChunkArrayComponent,
} from '@/features/chunk-array/ChunkArrayComponent.tsx';
import { Button, FormControl, Input } from '@mui/joy';
import {
	ChangeEvent,
	ReactElement,
	useCallback,
	useMemo,
	useState,
} from 'react';
import { content } from './content';

type ChunkArrayPageProps = {};

export function ChunkArrayPage({}: ChunkArrayPageProps): ReactElement {
	const [size, setSize] = useState<string>('');
	const [length, setLength] = useState<string>('');
	const [array, setArray] = useState<null | number[]>(null);
	
	const isDataReady = useMemo(() => {
		return !!(+size && array && array?.length > 0);
	}, [size, array]);
	
	const handleSizeChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setSize(e.target.value);
	}, []);
	
	const handleLengthChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setLength(e.target.value);
	}, []);
	
	const generateArray = useCallback((length: number) => {
		const generatedArray: number[] = Array.from({ length: length }, () =>
			Math.floor(Math.random() * length),
		);
		setArray(generatedArray);
	}, []);
	
	return (
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
					name='size'
					placeholder={ content.sizePlaceholder }
					type='number'
					value={ size }
					autoComplete={ 'off' }
					onChange={ (e) => handleSizeChange(e) }
				/>
			</FormControl>
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
					name='length'
					placeholder={ content.lengthPlaceholder }
					type='number'
					value={ length }
					autoComplete={ 'off' }
					onChange={ (e) => handleLengthChange(e) }
				/>
			</FormControl>
			<Button
				sx={ {
					width: '100%',
					maxWidth: '300px',
				} }
				disabled={ !length }
				onClick={ () => generateArray(+length) }
			>
				Button
			</Button>
			{ isDataReady && array && (
				<ChunkArrayComponent
					isDataReady={ isDataReady }
					array={ array }
					size={ +size }
				/>
			) }
		</ContentLayout>
	);
}
