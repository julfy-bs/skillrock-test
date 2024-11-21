import { chunkArray } from '@/features/chunk-array/chunkArray.ts';
import { Chip, Stack } from '@mui/joy';
import { Typography } from '@mui/material';
import { ReactElement, useMemo } from 'react';
import { v4 as uuid } from 'uuid';

type ChunkArrayComponentProps = {
	array: number[];
	size: number;
	isDataReady: boolean;
};

export function ChunkArrayComponent({
	array,
	size,
	isDataReady,
}: ChunkArrayComponentProps): ReactElement {
	const elements: number[][] | number[] = useMemo(() => {
		return chunkArray(array, size);
	}, [array, size]);
	
	return (
		<>
			{ elements.length > 0 && isDataReady && (
				<Stack
					direction='row'
					sx={ {
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
						gap: '8px',
						width: '100%',
					} }
				>
					{ elements
						.map((item: number[] | number) => (
							<Chip
								variant='soft'
								component={ 'span' }
								key={ uuid() }
								sx={ {
									minWidth: '80px',
									width: '100%',
									p: '16px',
									boxSizing: 'border-box',
								} }
								children={
									Array.isArray(item) ? (
										item.map((number) => (
											<Typography key={ uuid() }>{ number }</Typography>
										))
									) : (
										<Typography>{ item }</Typography>
									)
								}
							/>
						))
					}
				</Stack>
			) }
		</>
	);
}
