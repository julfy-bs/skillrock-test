import { DefaultLayout } from '@/app/layouts/DefaultLayout.tsx';
import { ROUTES } from '@/app/router/config.ts';
import { ChunkArrayPage } from '@/pages/chunk/ChunkArrayPage.tsx';
import { FizzBuzzPage } from '@/pages/fizzbuzz/FizzBuzzPage.tsx';
import { PalindromePage } from '@/pages/palindrome/PalindromePage.tsx';
import { TodoListPage } from '@/pages/todo-list/TodoListPage.tsx';
import { createBrowserRouter } from 'react-router-dom';

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
			],
		}
	],
	{
		basename: '/'
	},
);
