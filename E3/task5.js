/* ### Задание 5.

Напишите функцию, которая принимает два натуральных числа _x_ и _n_ и возвращает _x_ в степени _n_. Иначе говоря, умножает _x_ на себя _n_ раз и возвращает результат.

Используйте `Arrow Function` синтаксис.

Протестируйте функцию на любых значениях и выведите результат в консоль.
 */
console.clear()
const power = (x, n) => {
  if (x < 0 || n < 0) return false
  let result = 1
  for (let i = 0; i < n; i++) {
    result *= x
  }
  return result
}

console.log(power(2, 4))
console.log(power(3, 4))
console.log(power(5, 3))
console.log(power(10, 6))
console.log(power(64, 2))
console.log(power(-64, 2))
console.log(power(64, -2))
console.log(power(0, 2))
console.log(power(2, 0))
