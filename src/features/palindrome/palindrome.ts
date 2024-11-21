/**
 * @param str { string } - Любая не пустая строка.
 * @returns boolean - Ответ является ли строка палиндромом.
 *
 * @name Проверка на палиндром
 * @description Напишите функцию, которая проверяет, является ли строка
 *   палиндромом. Палиндром
 * — это слово, фраза, число или другая последовательность символов, которая
 * читается одинаково слева направо и справа налево (игнорируя пробелы, знаки
 * препинания и регистр).
 *
 * @example
 * // returns true;
 * isPalindrome('А роза упала на лапу Азора');
 * @example
 * // returns false;
 * isPalindrome('Привет');
 */
function isPalindrome(str: string) {
	if (!str || str.length === 0) {
		return false;
	}
	
	const regex: RegExp = /([~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|\-_+=])|\s+/g;
	const strWithoutPunctuation: string = str.toLowerCase()
		.replace(regex, '');
	return strWithoutPunctuation === strWithoutPunctuation.split('')
		.reverse()
		.join('');
}

console.log(isPalindrome('А роза упала на лапу Азора'));
console.log(isPalindrome('Привет'));