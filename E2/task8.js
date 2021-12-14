console.clear()
let string = "Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y». Используйте шаблонные строки."
const arrKeys = string.toLowerCase().split(" ")
const arrValues = string.toLowerCase().split(" ").reverse()
let myMap = new Map()
for (let i = 0; i < arrKeys.length; i++)
  myMap.set(arrKeys[i], arrValues[i])

for (const [key, value] of myMap)
  console.log(`ключ — ${key}, значение — ${value};`)