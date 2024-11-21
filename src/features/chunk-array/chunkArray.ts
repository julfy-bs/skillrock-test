/**
 * @param array { array } - Принимает не пустой массив.
 * @param size { number } - Принимает натуральное число больше 1, определяющее
 *   количество элементов в разбитых подмассивах.
 * @returns array - возвращает массив с массивами в которых по {@link size}
 *   элементов.
 *
 * @description Напишите функцию, которая разбивает массив на группы заданного
 *   размера.
 */

export function chunkArray<T>(array: T[], size: number): T[][] | T[] {
  if (array.length === 0) {
    return array;
  }

  if (size <= 1) {
    return array;
  }

  let currentIndex = 0;
  let resultArray: T[] = [];
  array.forEach((_, index) => {
    if (index === currentIndex) {
      resultArray.push(array.slice(index, index + size) as T);
      currentIndex += size;
    }
  });

  return resultArray;
}
