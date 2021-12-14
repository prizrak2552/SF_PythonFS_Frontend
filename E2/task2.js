console.clear()

let X = prompt("Введите значение для Х")

if (!isNaN(X))
  console.log(X + " — число.");
else if (
  X === "True" ||
  X === "true" ||
  X === "False" ||
  X === "false" ||
  typeof (X) === typeof (true)
)
  console.log(X + " — логический тип.");
else if (typeof (X) === "string")
  console.log(X + " — строка.");
else
  console.log(`Тип ${X} не определён.`);
