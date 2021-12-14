console.clear()
const arrSize = 10
const arr = []
for (let i = 0; i < arrSize; i++)
  arr[i] = Math.round(Math.random() * 100)
  
console.log("Длина массива: " + arr.length + "\nЭлементы массива: ")

arr.forEach(el => console.log(el + " "))