console.clear()
const string = ".container 100% 540px 720px 960px 1140px 1320px 0px"

let array = string.split(" ")
countEvenOddNull(array)

array = [0, 12, -11, null, "string", "another string", undefined, '', 8 / 0, .123]
countEvenOddNull(array)

function countEvenOddNull(arr) {
  let even = 0
  let odd = 0
  let nullType = 0
  arr.forEach(value => {
    if (!isNaN(parseFloat(value)) && parseInt(value) !== 0) {
      parseInt(value) % 2 === 0 ? even++ : odd++
    } else if (parseInt(value) === 0 || typeof (value) === typeof (null))
      nullType++
  })

  console.log("В этом массиве: \n" + arr +
    "\nчётных чисел: " + even +
    "\nнечётных: " + odd +
    "\nнулевых: " + nullType);
}