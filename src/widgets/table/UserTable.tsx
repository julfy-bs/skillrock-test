import { Avatar, Box, Table } from '@mui/joy';
import { Typography } from '@mui/material';
import { ReactElement } from 'react';
import { User } from '../../shared/types/user.ts';

type UserCardProps = {
	users: User[]
}

export function UserTable({
	users
}: UserCardProps): ReactElement {
	return (
	<Table
		aria-label="table with ellipsis texts"
		noWrap
		sx={{ mx: 'auto', width: '100%' }}
	>
		<thead>
		<tr>
			<th>Имя</th>
			<th style={{ width: '50%', textAlign: 'center' }}>
				Почта
			</th>
		</tr>
		</thead>
		<tbody>
		{ users.map(user => (
			<tr key={user.id.value}>
				<td>
					<Box sx={ { display: 'flex', alignItems: 'center', gap: 1.5 } }>
						<Avatar src={ user.picture.large } />
						<Box sx={ { minWidth: 0 } }>
							<Typography
								component={'span'}
								noWrap
								sx={ { fontWeight: 'lg' } }
							>
								{ user.name.title } { user.name.first } { user.name.last }
							</Typography>
						</Box>
					</Box>
				</td>
				<td>
					{ user.email }
				</td>
			</tr>
		)) }
		</tbody>
	</Table>
	);
}