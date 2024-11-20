
/**
 * @param num { number } - Принимает число от 1 до 100.
 * @returns void - Ничего не возвращает.
 *
 * @description Напишите функцию, которая выводит числа от 1 до 100.
 * Но для кратных трём выводите "Fizz" вместо числа, а для кратных пяти — "Buzz".
 * Для чисел, кратных как трём, так и пяти, выводите "FizzBuzz".
 */
function fizzBuzz(num) {
  if (typeof num !== 'number') {
    console.log( `Аргумент должен быть числом`);
  }

  if (num < 1 || num > 100) {
    console.log(`Аргумент должен быть в диапазоне между 1 и 100, сейчас передано число - ${num}`);
  }

  for (let i = num; i > 0; i--) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(100);