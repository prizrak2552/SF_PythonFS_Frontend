'use strict'
console.clear()

console.info(`
Задание 1.

Напишите функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.`)

const obj = {
  '': '',
  string: 'string',
  five: 5,
  123: '123',
  obj1: { obj2: 'obj2' },
}

const ownProp = obj => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) console.log(key, obj[key])
  }
}
ownProp(obj)
