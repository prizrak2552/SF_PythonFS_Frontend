console.clear()

function primeNum(num = 100) {
  if (num > 1000) {
    console.log("Число слишком большое. Использую значение 100")
    num = 100
  }
  if (num === 1) {
    // alert(`Число ${num} ни простое, ни сложное.`)
    console.log(`Число ${num} ни простое, ни сложное.`)
    return
  } else if (num <= 0)
    console.log(`Число ${num} не является натуральным. Проверим его модуль.`)
  num = Math.abs(num)
  let check = checkPrime(num)
  if (check) console.log(`Число ${num} простое.`)
  else console.log(`Число ${num} составное.`)
}

function checkPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0)
      return false
  return num > 1
}

primeNum(7)
primeNum(12)
primeNum(13)
primeNum(999)
primeNum(-999)
primeNum(997)
primeNum(-997)
primeNum(1997)
primeNum(0)
primeNum(1)