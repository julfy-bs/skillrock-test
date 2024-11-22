import { createBrowserRouter } from 'react-router-dom';
import { ChunkArrayPage } from '../../pages/chunk/ChunkArrayPage.tsx';
import { FizzBuzzPage } from '../../pages/fizzbuzz/FizzBuzzPage.tsx';
import { PalindromePage } from '../../pages/palindrome/PalindromePage.tsx';
import { PicturesPage } from '../../pages/pictures/PicturesPage.tsx';
import { TodoListPage } from '../../pages/todo-list/TodoListPage.tsx';
import { UsersPage } from '../../pages/users/UsersPage.tsx';
import { DefaultLayout } from '../layouts/DefaultLayout.tsx';
import { ROUTES } from './config.ts';

export const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <DefaultLayout />,
			children: [
				{
					path: ROUTES.ALGORITHMS.BASE,
					children: [
						{
							path: ROUTES.ALGORITHMS.PALINDROME,
							element: <PalindromePage />,
						},
						{
							path: ROUTES.ALGORITHMS.FIZZBUZZ,
							element: <FizzBuzzPage />,
						},
						{
							path: ROUTES.ALGORITHMS.CHUNK,
							element: <ChunkArrayPage />,
						},
					],
				},
				{
					path: ROUTES.TODO,
					element: <TodoListPage />,
				},
				{
					path: ROUTES.USERS,
					element: <UsersPage />,
				},
				{
					path: ROUTES.PICTURES,
					element: <PicturesPage />,
				},
			],
		}
	],
	{
		basename: '/skillrock-test/'
	},
);
