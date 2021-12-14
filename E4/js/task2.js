'use strict'
console.clear()

console.info(`
Задание 2.

Напишите функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет, есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.`)

const obj = {
  '': '',
  string: 'string',
  five: 5,
  123: '123',
  obj1: { obj2: 'obj2' },
}

const checkProp = (prop, obj) => {
  if (prop in obj) return true
  else return false
}

console.log(checkProp('string', obj))
console.log(checkProp('str', obj))
