import { Button } from '@mui/joy';
import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContentLayout } from '../../app/layouts/ContentLayout.tsx';
import { ROUTES } from '../../app/router/config.ts';

export function Error(): ReactElement {
	const navigate = useNavigate();
	return (
		<>
			<ContentLayout
				pageTitle={ 'Произошла ошибка' }
				pageDescription={ 'Описание' }
			/>
			<Button
				onClick={() => navigate(ROUTES.HOME)}
			>
				На главную
			</Button>
		</>
	);
}