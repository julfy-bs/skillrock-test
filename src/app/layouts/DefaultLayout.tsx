import { ModeSwitcher } from '@/widgets/mode-switcher/ModeSwitcher.tsx';
import { NavBar } from '@/widgets/navbar/NavBar.tsx';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import { Box, Grid } from '@mui/joy';
import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

export function DefaultLayout(): ReactElement {
	
	return (
		<>
			<Grid
				container
				columns={ { xs: 4, sm: 8, md: 12 } }
				sx={ {
					flexGrow: 1,
					display: 'grid',
					gridTemplateAreas: `"header header header"
            "main main main"
            "main main main"`,
					minHeight: '100vh',
					gridTemplateRows: '60px 1fr 1fr',
					gridTemplateColumns: '150px 1fr 1fr',
					maxWidth: '1120px',
					m: '0 auto',
				} }
			>
				<Grid
					component={ 'header' }
					sx={ {
						gridArea: 'header',
						maxHeight: '60px',
						height: '60px',
						p: '0',
					} }
				>
					<Box
						sx={ {
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							height: '100%',
						} }
					>
						<LogoDevIcon
							sx={ {
								width: '100px',
								height: '100%',
							} }
						/>
						<Box
							sx={ {
								display: 'flex',
								gap: '16px',
								alignItems: 'center',
							} }
						>
							<Box
								sx={ {
									maxWidth: '200px',
									width: '100%',
								} }
							>
								<ModeSwitcher />
							</Box>
							<NavBar />
						</Box>
					</Box>
				</Grid>
				<Grid
					component={ 'main' }
					sx={ {
						gridArea: 'main',
						p: '0',
					} }
				>
					<Box
						sx={ {
							height: '100%',
						} }
					>
						<Box
							sx={ {
								py: 4,
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center',
								textAlign: 'center',
							} }
						>
							<Outlet />
						</Box>
					</Box>
				</Grid>
			</Grid>
		</>
	);
}
