'use strict'
console.clear()

console.info(`

Задание 4.

Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность. 

Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.`)

/*
 *  План:
 *
 *    Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
 *    Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
 *    У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
 *    Создайте экземпляры каждого прибора.
 *    Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)
 *
 */

const appliance = {
  category: 'home',
  type: 'electric',
  state: 'off',
  serve: function (message = 'Serving') {
    if (this.state === 'on') console.log(message)
    else console.log('No power')
  },
  getInfo: function () {
    if (this.state === 'on') {
      for (let key in this)
        if (this.hasOwnProperty(key)) console.log(key, ':', this[key])
    } else console.log('The appliance is off')
  },
  getPower: function () {
    if (this.state === 'on' && this.wattage) return this.wattage
    else return 0
  },
}

appliance.power = function () {
  if (this.state === 'off') this.state = 'on'
  else this.state = 'off'
}

const kitchenAppliance = Object.create(appliance)
const mediaAppliance = Object.create(appliance)

kitchenAppliance.subcat = 'kitchen'
kitchenAppliance.serve.Prototype = function () {
  console.log('Used in kitchen')
}

mediaAppliance.subcat = 'media'
mediaAppliance.message = 'entertain us'

console.info('\nMicrowave info and methods: \n')

const microwave = Object.create(kitchenAppliance)
microwave.name = 'Oven'
microwave.power()
microwave.wattage = 700
microwave.getInfo()
microwave.heat = function () {
  this.serve('I can cook')
  console.log('Heating food')
}
microwave.heat()

console.info('\nBlender info and methods: \n')

const blender = Object.create(kitchenAppliance)
blender.name = 'Blender'
blender.power()
blender.message = 'Blender is ready for blending'
blender.mode = 1
blender.wattage = 50
blender.getInfo()
blender.chop = function () {
  this.serve()
  console.log('Chopping food')
}
blender.chop()

console.info('\nSoundbar info and methods: \n')

const soundbar = Object.create(mediaAppliance)
soundbar.message = 'Playing music'
soundbar.inputs = {
  jack: {
    type: '3.5mm',
    format: 'stereo',
    quantity: 1,
  },
  RCA: {
    type: 'RCA',
    formats: {
      white: 'left',
      red: 'right',
      both: 'stereo',
    },
    quantity: 2,
  },
}
soundbar.dimensions = {
  width: 950,
  height: 50,
  depth: 55,
}

soundbar.power()
soundbar.getInfo()
soundbar.power()
soundbar.getInfo()

const appliances = []

appliances.push(microwave)
appliances.push(blender)
appliances.push(soundbar)

function powerTotal() {
  let power = 0
  for (let appliance of appliances) power += parseInt(appliance.getPower())
  return power
}

console.log('Total power consumption: ' + powerTotal() + 'W')
