import { picturesAPI } from '@/app/api/pictures';
import { ContentLayout } from '@/app/layouts/ContentLayout.tsx';
import { Picture } from '@/shared/types/picture.ts';
import { Slider } from '@/widgets/slider/Slider.tsx';
import { CircularProgress } from '@mui/joy';
import { Typography } from '@mui/material';
import { ReactElement, useCallback, useEffect, useRef, useState } from 'react';
import { content } from './content';

export function PicturesPage(): ReactElement {
	const [pictures, setPictures] = useState<Picture[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [errors, setErrors] = useState<string | null>(null);
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [isPageReady, setIsPageReady] = useState<boolean>(false);
	const ref = useRef(null);
	
	useEffect(() => {
		const fetchPictures = async () => {
			try {
				setLoading(true);
				const response = await picturesAPI.getPictures() || null;
				if (response?.images) {
					setPictures(response?.images);
				}
			} catch (e) {
				setErrors(e as unknown as string);
			} finally {
				setLoading(false);
			}
		};
		fetchPictures()
			.then(() => setIsPageReady(true))
			.catch(e => console.error(e));
	}, []);
	
	const scrollRight = useCallback(
		() => {
			setCurrentIndex((prevIndex) =>
				prevIndex === pictures.length - 1 ? 0 : prevIndex + 1,
			);
		},
		[pictures.length],
	);
	
	const scrollLeft = useCallback(
		() => {
			setCurrentIndex((prevIndex) =>
				prevIndex === 0 ? pictures.length - 1 : prevIndex - 1,
			);
		},
		[pictures.length],
	);
	
	useEffect(() => {
		if (!pictures.length) return;
		if (ref.current && pictures) {
			const wrapper = ref?.current as HTMLDivElement;
			const currentElement = wrapper.children[currentIndex] as HTMLDivElement;
			currentElement.scrollIntoView({
				behavior: 'smooth',
				block: 'nearest',
				inline: 'center',
			});
		}
	}, [currentIndex]);
	
	useEffect(() => {
		if (!isPageReady) return;
		const intervalId = setInterval(() => {
			scrollRight();
		}, 3000);
		return () => clearInterval(intervalId);
	}, [isPageReady]);
	
	if (errors) {
		return (
			<Typography children={ `Не удалось загрузить картинки, ${ errors }` } />);
	}
	
	return (
		<ContentLayout
			pageTitle={ content.title }
			pageDescription={ content.description }
		>
			{
				(loading || !pictures)
					? (<CircularProgress />)
					: (<Slider
						pictures={ pictures }
						scrollLeft={ scrollLeft }
						scrollRight={ scrollRight }
						ref={ ref }
					/>)
				
			}
		</ContentLayout>
	);
}