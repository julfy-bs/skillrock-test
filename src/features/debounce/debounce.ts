export function debounce(func: () => void, delay: number): () => void {
	let isFuncReady = true;
	console.log('Вызвана функция с задержкой');
	
	return () => {
		if (isFuncReady) {
			isFuncReady = false;
			setTimeout(() => {
				func();
				isFuncReady = true;
			}, delay);
		}
	}
}