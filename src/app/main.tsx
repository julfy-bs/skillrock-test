import { Calculator } from '@/features/calculator/calculator.ts';
import { Book } from '@/features/library/book.ts';
import { Library } from '@/features/library/library.ts';
import { CssBaseline, CssVarsProvider, extendTheme } from '@mui/joy';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import './main.css';

const theme = extendTheme();

createRoot(document.getElementById('root')!)
	.render(
		<StrictMode>
			<CssVarsProvider theme={ theme }>
				<CssBaseline />
				<RouterProvider router={ router } />
			</CssVarsProvider>
		</StrictMode>,
	);

const calculator = new Calculator();
console.log(calculator.add(1, 2));
console.log(calculator.subtract(1, 2));
console.log(calculator.multiply(1, 2));
console.log(calculator.divide(1, 0));

const library = new Library();
console.log(library.addBook(new Book('Книга 12', 'Автор 1', '21')));
console.log(library.addBook(new Book('Книга 2', 'Автор 2', '2')));
console.log(library.addBook(new Book('Книга 3', 'Автор 3', '3')));
console.log(library.listAvailableBooks());
console.log(library.borrowBook('21'));
console.log(library.listAvailableBooks());
console.log(library.borrowBook('2'));
console.log(library.listAvailableBooks());
console.log(library.returnBook('21'));
console.log(library.listAvailableBooks());