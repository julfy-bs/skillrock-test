import { Box } from '@mui/joy';
import { Typography } from '@mui/material';
import { ReactElement, ReactNode } from 'react';

type ContentLayoutProps = {
	pageTitle: string;
	pageDescription: string;
	children?: ReactNode;
}

export function ContentLayout({
	pageTitle,
	pageDescription,
	children,
}: ContentLayoutProps): ReactElement {
	return (
		<>
			<Box
				sx={ {
					display: 'flex',
					flexDirection: 'column',
					gap: '16px',
					alignItems: 'center',
					width: '100%',
					maxWidth: '900px',
				} }
			>
				<Typography
					component={ 'h1' }
					sx={ {
						display: 'flex',
						alignItems: 'center',
						gap: '16px',
					} }
				>
					{ pageTitle }
				</Typography>
				<Typography
					component={ 'p' }
					sx={ {
						display: 'flex',
						alignItems: 'center',
						gap: '16px',
					} }
				>
					{ pageDescription }
				</Typography>
				<Box
					sx={ {
						display: 'flex',
						flexDirection: 'column',
						gap: '16px',
						alignItems: 'center',
						width: '100%',
					} }
				>
					{ children }
				</Box>
			</Box>
		</>
	);
}