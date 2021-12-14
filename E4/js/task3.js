'use strict'
console.clear()

console.info(`
Задание 3.

Напишите функцию, которая создает пустой объект, но без прототипа.`)

const noProto = () => {
  return Object.create(null)
}

console.log(noProto())
