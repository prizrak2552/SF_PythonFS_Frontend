console.clear()

const progress = document.querySelector('#progress-bar')

let t = []

const setProgress = () => {
  let width = t.reduce((sum, elem) => sum + elem)
  let progressBar = (width / 25) * 100
  progress.style.width = progressBar + '%'
  document.querySelector('#total').innerText = width / 5
}

const btn = 'btn btn-success'

const done = 'Проверено'

const task1 = document.querySelector('#task1')
const task2 = document.querySelector('#task2')
const task3 = document.querySelector('#task3')
const task4 = document.querySelector('#task4')
const task5 = document.querySelector('#task5')

task1.onclick = () => {
  const string = '.container 100% 540px 720px 960px 1140px 1320px 0px'

  let array = string.split(' ')
  countEvenOddNull(array)

  array = [
    0,
    12,
    -11,
    null,
    'string',
    'another string',
    undefined,
    '',
    8 / 0,
    0.123,
  ]
  countEvenOddNull(array)

  function countEvenOddNull(arr) {
    let even = 0
    let odd = 0
    let nullType = 0
    arr.forEach(value => {
      if (!isNaN(parseFloat(value)) && parseInt(value) !== 0) {
        parseInt(value) % 2 === 0 ? even++ : odd++
      } else if (parseInt(value) === 0 || typeof value === typeof null)
        nullType++
    })
    let message = `В этом массиве:
${arr}\n
чётных чисел: ${even}
нечётных: ${odd}
нулевых: ${nullType}`

    console.log(message)
    alert(message)
  }
  task1.className = btn
  task1.innerText = done
  t[0] = 5
  setProgress()
}

const task2Options = document.querySelector('#t2')

function getX(sel) {
  let dataType = sel.options[sel.selectedIndex].dataset.type
  document.querySelector('#task2').dataset.type = dataType
}

function checkPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false
  return num > 1
}

function primeNum(num = 100) {
  if (num > 1000) {
    alert('Число слишком большое. Использую значение 100')
    console.log('Число слишком большое. Использую значение 100')
    num = 100
  }
  if (num === 1 || num === 0) {
    alert(`Число ${num} ни простое, ни составное.`)
    console.log(`Число ${num} ни простое, ни составное.`)
    return
  } else if (num < 0) {
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
task2.onclick = () => {
  let number = getNumber(1000)
  primeNum(number)
  task2.className = btn
  task2.innerText = done
  t[1] = 5
  setProgress()
}

task3.onclick = () => {
  let number = getNumber(1000000)
  const callback = function (a) {
    function sum(b) {
      return b + a
    }
    return sum(a)
  }

  let result = callback(number)
  alert(result)
  console.log(result)

  task3.className = btn
  task3.innerText = done
  t[2] = 5
  setProgress()
}

task4.onclick = () => {
  let a = getNumber(100)
  let b = getNumber(100)

  if (a > b) [a, b] = [b, a]

  const timeValue = setInterval(() => {
    alert(a)
    console.log(a)
    a++
    if (a > b) {
      clearInterval(timeValue)
    }
  }, 1000)

  task4.className = btn
  task4.innerText = done
  t[3] = 5
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

const power = (x, n) => {
  if (x < 0 || n < 0) return false
  let result = 1
  for (let i = 0; i < n; i++) {
    result *= x
  }
  return result
}

task5.onclick = () => {
  let x = getNumber(1000000)
  let n = getNumber(1000)
  let result = power(x, n)
  alert(result)
  console.log(result)
  task5.className = btn
  task5.innerText = done
  t[4] = 5
  setProgress()
}

function currentYear() {
  var d = new Date()
  var yyyy = document.getElementById('year')
  yyyy.textContent = d.getFullYear()
}

window.onload = currentYear
