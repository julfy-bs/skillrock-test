import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { AspectRatio, Box, Button, Card } from '@mui/joy';
import { forwardRef, ReactElement } from 'react';
import { v4 as uuid } from 'uuid';
import { Picture } from '../../shared/types/picture.ts';

type SliderProps = {
	scrollRight: () => void;
	scrollLeft: () => void;
	pictures: Picture[];
}

export const Slider = forwardRef(({
	scrollRight,
	scrollLeft,
	pictures,
}: SliderProps, ref): ReactElement => {
	return (
		<Box
			sx={ {
				position: 'relative',
			} }
		>
			<Button
				sx={ {
					position: 'absolute',
					maxWidth: '35px',
					right: '-10%',
					top: '50%',
					zIndex: 5,
				} }
				variant={ 'plain' }
				size='sm'
				onClick={ scrollRight }
			>
				<ArrowForwardIosIcon />
			</Button>
			<Button
				sx={ {
					position: 'absolute',
					maxWidth: '35px',
					left: '-10%',
					top: '50%',
					zIndex: 5,
				} }
				variant={ 'plain' }
				size='sm'
				onClick={ scrollLeft }
			>
				<ArrowBackIosIcon />
			</Button>
			<Box
				ref={ ref }
				sx={ {
					display: 'flex',
					gap: 1,
					py: 1,
					overflow: 'auto',
					width: 527,
					scrollSnapType: 'x mandatory',
					'& > *': {
						scrollSnapAlign: 'center',
					},
					'::-webkit-scrollbar': { display: 'none' },
				} }
			>
				{ pictures.map((item) => (
					<Card
						orientation='horizontal'
						size='sm'
						key={ uuid() }
						variant='outlined'
					>
						<AspectRatio
							ratio='1'
							sx={ { minWidth: 505 } }
						>
							<img
								srcSet={ `${ item }?h=120&fit=crop&auto=format&dpr=2 2x` }
								src={ `${ item }?h=120&fit=crop&auto=format` }
								alt={ 'Неизвестная картинка' }
							/>
						</AspectRatio>
					</Card>
				)) }
			</Box>
		</Box>
	);
});