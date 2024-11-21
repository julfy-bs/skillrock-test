import { navigation } from '@/app/config/navigation.tsx';
import Menu from '@mui/icons-material/Menu';
import {
	Box,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
} from '@mui/joy';
import { Typography } from '@mui/material';
import { ReactElement, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

export function NavBar(): ReactElement {
	const [open, setOpen] = useState(false);
	
	const toggleDrawer =
		(inOpen: boolean) => (event: KeyboardEvent | MouseEvent) => {
			if (
				event.type === 'keydown' &&
				((event as KeyboardEvent).key === 'Tab' ||
					(event as KeyboardEvent).key === 'Shift')
			) {
				return;
			}
			
			setOpen(inOpen);
		};
	
	return (
		<>
			<Box sx={ { display: 'flex' } }>
				<IconButton
					variant='plain'
					color='neutral'
					onClick={ () => setOpen(true) }
				>
					<Menu />
				</IconButton>
				<Drawer
					open={ open }
					onClose={ toggleDrawer(false) }
				>
					<Box
						component={ 'div' }
						onClick={ () => toggleDrawer(false) }
						onKeyDown={ () => toggleDrawer(false) }
						sx={ {
							p: '32px',
						} }
					>
						<Typography
							sx={ {
								display: 'flex',
								alignItems: 'center',
								gap: '16px',
							} }
						>
							{ navigation.algorithms.icon } { navigation.algorithms.title }
						</Typography>
						<Divider />
						<List>
							{ navigation.algorithms.items.map((element) => (
								<ListItem key={ uuid() }>
									<NavLink
										style={ ({ isActive, isTransitioning }) => {
											return {
												pointerEvents: isActive ? 'none' : 'auto',
												opacity: isActive ? '0.6' : '1',
												viewTransitionName: isTransitioning ? 'slide' : '',
												width: '100%',
												textDecoration: 'none',
												color: 'inherit',
												display: 'flex',
												alignItems: 'center',
												gap: '16px',
											};
										} }
										to={ element.route }
									>
										<ListItemButton
											sx={ {
												width: '100%',
											} }
										>
											{ element.icon } { element.title }
										</ListItemButton>
									</NavLink>
								</ListItem>
							)) }
						</List>
						<Divider />
						<NavLink
							style={ ({ isActive, isTransitioning }) => {
								return {
									pointerEvents: isActive ? 'none' : 'auto',
									opacity: isActive ? '0.6' : '1',
									viewTransitionName: isTransitioning ? 'slide' : '',
									width: '100%',
									textDecoration: 'none',
									color: 'inherit',
									display: 'flex',
									alignItems: 'center',
									gap: '16px',
								};
							} }
							to={ navigation.todo.route }
						>
							<ListItemButton
								sx={ {
									width: '100%',
									display: 'flex',
									alignItems: 'center',
									gap: '16px',
								} }
							>
								{ navigation.todo.icon } { navigation.todo.title }
							</ListItemButton>
						</NavLink>
						<Divider />
						<NavLink
							style={ ({ isActive, isTransitioning }) => {
								return {
									pointerEvents: isActive ? 'none' : 'auto',
									opacity: isActive ? '0.6' : '1',
									viewTransitionName: isTransitioning ? 'slide' : '',
									width: '100%',
									textDecoration: 'none',
									color: 'inherit',
									display: 'flex',
									alignItems: 'center',
									gap: '16px',
								};
							} }
							to={ navigation.users.route }
						>
							<ListItemButton
								sx={ {
									width: '100%',
									display: 'flex',
									alignItems: 'center',
									gap: '16px',
								} }
							>
								{ navigation.users.icon } { navigation.users.title }
							</ListItemButton>
						</NavLink>
					</Box>
				</Drawer>
			</Box>
		</>
	);
}
