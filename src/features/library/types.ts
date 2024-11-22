export interface IBook {
	title: string;
	author: string;
	isbn: string;
	isAvailable: boolean;
	setStatus(boolean: boolean): void;
}

export interface ILibrary {
	addBook(book: IBook): IBook[];
	borrowBook(isbn: string): IBook | string;
	returnBook(isbn: string): IBook | string;
	listAvailableBooks(): IBook[];
}