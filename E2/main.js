console.clear()

const progress = document.querySelector('#progress-bar')

let t = []

const setProgress = () => {
  let width = t.reduce((sum, elem) => sum + elem)
  let progressBar = (width / 64) * 100
  progress.style.width = progressBar + '%'
  document.querySelector('#total').innerText = width / 8
}

const btn = 'btn btn-success'

const done = 'Проверено'

const task1 = document.querySelector('#task1')
const task2 = document.querySelector('#task2')
const task3 = document.querySelector('#task3')
const task4 = document.querySelector('#task4')
const task5 = document.querySelector('#task5')
const task6 = document.querySelector('#task6')
const task7 = document.querySelector('#task7')
const task8 = document.querySelector('#task8')

task1.onclick = () => {
  let input = prompt('Введите число')
  let num = +input
  if (num) {
    num % 2 === 0
      ? alert(num + ' число чётное')
      : alert(num + ' число нечётное')
    num % 2 === 0
      ? console.log(num + ' число чётное')
      : console.log(num + ' число нечётное')
  } else {
    alert('Упс, кажется, вы ошиблись')
    console.log('Упс, кажется, вы ошиблись')
  }
  task1.className = btn
  task1.innerText = done
  t[0] = 8
  setProgress()
}

const task2Options = document.querySelector('#t2')

function getX(sel) {
  let dataType = sel.options[sel.selectedIndex].dataset.type
  document.querySelector('#task2').dataset.type = dataType
}

task2.onclick = () => {
  let X = task2.dataset.type
  if (!isNaN(parseFloat(X))) {
    alert(X + ' — число.')
    console.log(X + ' — число.')
  } else if (
    typeof X === typeof true ||
    X === 'True' ||
    X === 'true' ||
    X === 'False' ||
    X === 'false'
  ) {
    alert(X + ' — логический тип.')
    console.log(X + ' — логический тип.')
  } else if (typeof X === 'string' && X !== 'undefined') {
    alert(X + ' — строка.')
    console.log(X + ' — строка.')
  } else {
    alert(`Тип ${X} не определён.`)
    console.log(`Тип ${X} не определён.`)
  }
  task2.className = btn
  task2.innerText = done
  t[1] = 8
  setProgress()
}

task3.onclick = () => {
  const str = 'А роза упала на лапу Азора'
  let input = prompt(
    `Введите строку, которую нужно перевернуть. \nСтрока по умолчанию: \n "${str}"`
  )

  function reverse(s) {
    return s.split('').reverse().join('')
  }
  let string = str
  if (input) string = input
  alert('Прямой порядок: ' + string + '\nОбратный порядок: ' + reverse(string))
  console.log(
    'Прямой порядок: ' + string + '\nОбратный порядок: ' + reverse(string)
  )
  task3.className = btn
  task3.innerText = done
  t[2] = 8
  setProgress()
}

task4.onclick = () => {
  let num = Math.round(Math.random() * 100)
  alert('Случайное целое число в диапазоне [0; 100]: ' + num)
  console.log('Случайное целое число в диапазоне [0; 100]: ' + num)
  task4.className = btn
  task4.innerText = done
  t[3] = 8
  setProgress()
}

const getNumber = limit => {
  let input = prompt(`Введите целое число от 0 до ${limit}`)
  if (isNaN(input) || parseInt(input) > limit || !input) {
    num = limit
    alert('Ввод неверный. Используем значение по умолчанию :' + limit)
  } else num = Math.abs(parseInt(input))
  return num
}

const makeArray = (arrSize, limit) => {
  const array = []
  for (let i = 0; i < arrSize; i++) array[i] = Math.round(Math.random() * limit)
  return array
}

task5.onclick = () => {
  limit = 100
  let arrSize = getNumber(limit)
  const arr = makeArray(arrSize, limit)
  let message = 'Длина массива: ' + arr.length + '\nЭлементы массива: '
  console.log('Длина массива: ' + arr.length + '\nЭлементы массива: ')

  arr.forEach(el => {
    message += el + ' '
    console.log(el + ' ')
  })
  alert(message)
  task5.className = btn
  task5.innerText = done
  t[4] = 8
  setProgress()
}

task6.onclick = () => {
  let arrSize = getNumber(100)
  const arr = makeArray(arrSize, arrSize)
  let message = 'Длина массива: ' + arr.length + '\nЭлементы массива: '
  console.log('Длина массива: ' + arr.length + '\nЭлементы массива: ')

  arr.forEach(el => {
    console.log(el + ' ')
    message += el + ' '
  })

  const allEqual = array => array.every(val => val === array[0])

  console.log('Проверим, все ли элементы в массиве одинаковые: ')
  message += '\nПроверим, все ли элементы в массиве одинаковые: '
  let checkArrValues = allEqual(arr)
  message += checkArrValues
  console.log(checkArrValues)
  alert(message)
  task6.className = btn
  task6.innerText = done
  t[5] = 8
  setProgress()
}

task7.onclick = () => {
  const string = prompt(
    'Введите несколько чисел. Посчитаем чётные и нечётные. И нули.'
  )
  const arr = string.split(' ')
  let even = 0
  let odd = 0
  let nullType = 0
  arr.forEach(value => {
    if (!isNaN(parseFloat(value)) && parseInt(value) !== 0) {
      parseInt(value) % 2 === 0 ? even++ : odd++
    } else if (parseInt(value) === 0 || typeof value === typeof null) nullType++
  })

  alert(
    'В этом массиве: \n' +
      arr +
      '\nчётных чисел: ' +
      even +
      '\nнечётных: ' +
      odd +
      '\nнулевых: ' +
      nullType
  )
  console.log(
    'В этом массиве: \n' +
      arr +
      '\nчётных чисел: ' +
      even +
      '\nнечётных: ' +
      odd +
      '\nнулевых: ' +
      nullType
  )

  task7.className = btn
  task7.innerText = done
  t[6] = 8
  setProgress()
}

task8.onclick = () => {
  let string = prompt('Введите мудрую мысль: ') //Кто чужого ищет для себя тот своё находит для других
  let string2 = string
  const arrKeys = string.toLowerCase().split(' ')
  const arrValues = string2.toLowerCase().split(' ').reverse()
  let myMap = new Map()
  for (let i = 0; i < arrKeys.length; i++) myMap.set(arrKeys[i], arrValues[i])

  let message = ''
  for (const [key, value] of myMap)
    message += `ключ — ${key}, значение — ${value};\n`

  alert(message)
  console.log(message)
  task8.className = btn
  task8.innerText = done
  t[7] = 8
  setProgress()
}

function countEvenOddNull(arr) {
  let even = 0
  let odd = 0
  let nullType = 0
  arr.forEach(value => {
    if (!isNaN(parseFloat(value)) && parseInt(value) !== 0) {
      parseInt(value) % 2 === 0 ? even++ : odd++
    } else if (parseInt(value) === 0 || typeof value === typeof null) nullType++
  })

  alert(
    'В этом массиве: \n' +
      arr +
      '\nчётных чисел: ' +
      even +
      '\nнечётных: ' +
      odd +
      '\nнулевых: ' +
      nullType
  )
  console.log(
    'В этом массиве: \n' +
      arr +
      '\nчётных чисел: ' +
      even +
      '\nнечётных: ' +
      odd +
      '\nнулевых: ' +
      nullType
  )
}

function primeNum(num = 100, limit = 1000) {
  if (num > limit) {
    console.log('Число слишком большое. Использую значение ' + limit)
    num = limit
  }
  if (num === 1) {
    alert(`Число ${num} ни простое, ни сложное.`)
    console.log(`Число ${num} ни простое, ни сложное.`)
    return
  } else if (num <= 0) {
    alert(`Число ${num} не является натуральным. Проверим его модуль.`)
    console.log(`Число ${num} не является натуральным. Проверим его модуль.`)
  }
  num = Math.abs(num)

  let check = checkPrime(num)
  if (check) {
    alert(`Число ${num} простое.`)
    console.log(`Число ${num} простое.`)
  } else {
    alert(`Число ${num} составное.`)
    console.log(`Число ${num} составное.`)
  }
}

function checkPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false
  return num > 1
}

function currentYear() {
  var d = new Date()
  var yyyy = document.getElementById('year')
  yyyy.textContent = d.getFullYear()
}

window.onload = currentYear
