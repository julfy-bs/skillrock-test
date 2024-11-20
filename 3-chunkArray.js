/**
 * @param array { array } - Принимает не пустой массив.
 * @param size { number } - Принимает натуральное число больше 1, определяющее количество элементов в разбитых подмассивах.
 * @returns array - возвращает массив с массивами в которых по {@link size} элементов.
 *
 * @description Напишите функцию, которая разбивает массив на группы заданного размера.
 */

function chunkArray(array, size) {
  if (array.length === 0) {
    return array;
  }

  if (size <= 1) {
    return array;
  }

  if (typeof size !== 'number') {
    throw SyntaxError(`параметр size - должен быть натуральным числом больше 1, сейчас size - ${typeof size}.`);
  }

  if (Math.floor(size) !== +size) {
    throw SyntaxError(`параметр size - должен быть натуральным числом больше 1, сейчас size не натуральное число.`);
  }

  let currentIndex = 0;
  let resultArray = [];
  array.forEach((currentValue, index) => {
    if (index === currentIndex) {
      resultArray.push(array.slice(index, index + size));
      currentIndex += size;
    }
  })

  return resultArray;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
  , 2.1)); // [[1, 2], [3, 4], [5, 6],[7, 8]]