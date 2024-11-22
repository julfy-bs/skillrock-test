import { IBook, ILibrary } from './types';

export class Library implements ILibrary {
	books: IBook[];
	
	constructor() {
		this.books = [];
	}
	
	addBook(book: IBook): IBook[] {
		this.books.push(book);
		return this.books;
	}
	
	borrowBook(isbn: string): IBook | string {
		const neededBook = this.books.find(book => book.isbn === isbn);
		if (neededBook && neededBook.isAvailable) {
			neededBook?.setStatus(false);
			return neededBook;
		} else {
			return 'Книга уже взята или отсутствует на полках нашей библиотеки';
		}
	}
	
	returnBook(isbn: string): IBook | string {
		const neededBook = this.books.find(book => book.isbn === isbn);
		if (neededBook && !neededBook.isAvailable) {
			neededBook?.setStatus(true);
			return neededBook;
		} else {
			return 'Книга уже на полках нашей библиотеки';
		}
	}
	
	listAvailableBooks(): IBook[] {
		return this.books.filter(book => book.isAvailable)
	}
}