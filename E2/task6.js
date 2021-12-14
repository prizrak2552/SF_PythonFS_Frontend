console.clear()

const arrSize = 10
const arr = []
for (let i = 0; i < arrSize; i++)
  arr[i] = Math.round(Math.random() * arrSize)

console.log("Длина массива: " + arr.length + "\nЭлементы массива: ")

arr.forEach(el => console.log(el + " "))

const allEqual = array => array.every(val => val === array[0])

console.log("Проверим, все ли элементы в массиве одинаковые: ");
console.log(allEqual(arr))
