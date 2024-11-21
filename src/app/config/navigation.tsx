import { ROUTES } from '@/app/router/config.ts';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LayersIcon from '@mui/icons-material/Layers';
import PersonIcon from '@mui/icons-material/Person';
import { ReactNode } from 'react';

type NavigationElement = {
	route: string;
	title: string;
	icon: ReactNode;
}

export type Navigation = {
	algorithms: {
		title: string;
		icon: ReactNode;
		items: NavigationElement[];
	};
	todo: NavigationElement;
	users: NavigationElement;
	pictures: NavigationElement;
}

export const navigation: Navigation = {
	algorithms: {
		title: 'Алгоритмы',
		icon: <BarChartIcon />,
		items: [
			{
				route: `${ ROUTES.ALGORITHMS.BASE }/${ ROUTES.ALGORITHMS.PALINDROME }`,
				title: 'Палиндром',
				icon: <DescriptionIcon />,
			},
			{
				route: `${ ROUTES.ALGORITHMS.BASE }/${ ROUTES.ALGORITHMS.FIZZBUZZ }`,
				title: 'Fizz Buzz',
				icon: <DescriptionIcon />,
			},
			{
				route: `${ ROUTES.ALGORITHMS.BASE }/${ ROUTES.ALGORITHMS.CHUNK }`,
				title: 'Chunk Array',
				icon: <DescriptionIcon />,
			},
		],
	},
	todo: {
		route: ROUTES.TODO,
		title: 'Туду лист',
		icon: <LayersIcon />,
	},
	users: {
		route: ROUTES.USERS,
		title: 'Список пользователей',
		icon: <PersonIcon />,
	},
	pictures: {
		route: ROUTES.PICTURES,
		title: 'Карусель изображений',
		icon: <ImageIcon />,
	},
};
