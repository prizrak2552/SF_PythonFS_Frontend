console.clear()

let input = prompt("Введите число")
// console.log(input);
// console.log(typeof(input));
let num = +input
// console.log(num);
// console.log(typeof(num));
if (num)
  num % 2 === 0 ? console.log(num + " число чётное") : console.log(num + " число нечётное")
else
  console.log("Упс, кажется, вы ошиблись")
