import { ICalculator } from './types.ts';

export class Calculator implements ICalculator {
	
	add(a: number, b: number) {
		return a + b;
	}
	
	subtract(a: number, b: number) {
		return a - b;
	}
	
	multiply(a: number, b: number) {
		return a * b;
	}
	
	divide(a: number, b: number): number | string {
		if (b === 0) return 'На ноль делить нельзя';
		return a / b;
	}
}