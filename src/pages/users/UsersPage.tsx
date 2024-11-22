import { CircularProgress } from '@mui/joy';
import { Typography } from '@mui/material';
import { ReactElement, Suspense, useEffect, useState } from 'react';
import { usersAPI } from '../../app/api/users/users.ts';
import { ContentLayout } from '../../app/layouts/ContentLayout.tsx';
import { User } from '../../shared/types/user.ts';
import { UserTable } from '../../widgets/table/UserTable.tsx';
import { content } from './content';

type UsersPageProps = {}

export function UsersPage({}: UsersPageProps): ReactElement {
	const [users, setUsers] = useState<User[] | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [errors, setErrors] = useState<string | null>(null);
	
	useEffect(() => {
		const fetchUsers = async () => {
			try {
				setLoading(true);
				const response = await usersAPI.getUsers({}) || null;
				if (response?.results) {
					setUsers(response.results);
				}
			} catch (e) {
				setErrors(e as unknown as string);
			} finally {
				setLoading(false);
			}
		};
		void fetchUsers();
	}, []);
	
	if (errors) return (<Typography children={ `Не удалось загрузить пользователей, ${ errors }` } />);
	
	return (
		<ContentLayout
			pageTitle={ content.title }
			pageDescription={ content.description }
		>
			<Suspense>
				{
					(loading || !users)
						? (<CircularProgress />)
						: (<UserTable users={ users } />)
				}
			</Suspense>
		</ContentLayout>
	);
}