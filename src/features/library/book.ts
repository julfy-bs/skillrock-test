import { IBook } from './types';

export class Book implements IBook{
	title: string;
	author: string;
	isbn: string;
	isAvailable: boolean;
	
	constructor(title: string, author: string, isbn: string) {
		this.title = title;
		this.author = author;
		this.isbn = isbn;
		this.isAvailable = true;
	}
	
	setStatus(boolean: boolean) {
		this.isAvailable = boolean;
	}
}