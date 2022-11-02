// task 1.1

const number = Number(prompt("Введите Ваше число"));
if (number === 10) {
  console.log("1.1 Верно");
} else {
  console.log("1.1 Неверно");
}

// task 1.2

const test = true;

if (test === true) {
  console.log("1.2 Верно");
} else {
  console.log("1.2 Неверно");
}

if (test !== true) {
  console.log("1.2 Верно");
} else {
  console.log("1.2 Неверно");
}

// task 1.3

const summ = Number(prompt("Введите сумму покупки:"));

if (summ >= 500 && summ < 800) {
  alert(
    "Ваша скидка составила 3%\nОбщая сумма покупки: " +
      summ * (1 - 0.03) +
      " грн."
  );
} else if (summ >= 800) {
  alert(
    "Ваша скидка составила 5%\nОбщая сумма покупки: " +
      summ * (1 - 0.05) +
      " грн."
  );
} else {
  alert(
    "Для получения скидки необходимо купить товара на сумму от 500 грн.\nСумма вашего чека: " +
      summ +
      " грн."
  );
}

// task 2.1

console.group("task 2.1 while");

let i = 25;
const lim = 0;
while (i >= lim) {
  console.log(i);
  i--;
}
console.groupEnd();

console.group("task 2.1 let");

const limA = 0;
for (let a = 25; a >= limA; a--) {
  console.log(a);
}

console.groupEnd();

// task 2.2

console.group("task 2.2 while");
let c = 10;
const limC = 50;
while (c <= limC) {
  console.log(c);
  c += 5;
}

console.groupEnd();

console.group("task 2.2 let");

const limE = 50;
for (let e = 10; e <= limE; e += 5) {
  console.log(e);
}

console.groupEnd();

// task 2.3

console.group("task 2.3 while");

let summF = 1;
const limF = 100;
let f = 2;

while (f <= limF) {
  summF += f;
  f++;
}

console.log(summF);

console.groupEnd();

console.group("task 2.3 let");

let summNumbers = 1;
const summLim = 100;
for (i = 2; i <= summLim; i++) {
  summNumbers += i;
}
console.log(summNumbers);

console.groupEnd();
