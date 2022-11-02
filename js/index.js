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
