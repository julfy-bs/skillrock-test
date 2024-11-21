/**
 * @param num { number } - Принимает число от 1 до 100.
 * @returns string[] - Массив строк.
 *
 * @description Напишите функцию, которая выводит числа от 1 до 100.
 * Но для кратных трём выводите "Fizz" вместо числа, а для кратных пяти —
 *   "Buzz". Для чисел, кратных как трём, так и пяти, выводите "FizzBuzz".
 */
export function fizzBuzz(num: number) {
  if (num < 1 || num > 100) {
    console.log(
      `Аргумент должен быть в диапазоне между 1 и 100, сейчас передано число - ${num}`,
    );
  }

  let resultArray: string[] = [];

  for (let i = num; i > 0; i--) {
    if (i % 3 === 0 && i % 5 === 0) {
      resultArray.push("FizzBuzz");
    } else if (i % 3 === 0) {
      resultArray.push("Fizz");
    } else if (i % 5 === 0) {
      resultArray.push("Buzz");
    } else {
      resultArray.push(i.toString());
    }
  }

  return resultArray;
}

fizzBuzz(100);
