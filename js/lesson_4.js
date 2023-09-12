// const hello = function (name) {
//   console.log(`"Hello", ${name}`);
// };

// const searchName = function (callback) {
//   const name = "Ivan";
//   callback(name)
// }
// searchName(hello);

// function checkAge(age) {
//   if (age > 18) {
//     return console.log("Hello")
//   }
//     return console.log("Good Bye")

// }
// checkAge(12)

// function showMovie(age) {
//   if (age < 21) {
//     return
//   }
//   return console.log("Go to movie!")
// }
// showMovie(21)

// const showMovie = (age) => {
//   if (age > 21) {
//     return console.log("Hello")
//   }
//   return console.log("Good Bye");
// }
// showMovie(11)

// const addNumber = (number) => {
//   let summ = Number
//   (number) + 10;
//   return console.log(summ);
// }

// const numberRef = document.querySelector("input[name='number']");

// const buttonRef = document.querySelector("button");

// buttonRef.addEventListener('click', () => addNumber(numberRef.value));

// Домашнє завдання
// ---1---
// Перепишіть функцію, використовуючи '?' або '||'
// function checkAge(age) {
// if (age > 18) {
// return true;
// } else {
// return confirm('Батьки дозволили?');
// }
// }
// console.log(checkAge(17));

// function checkAge(age) {
//   return age > 18 ? true : confirm("Батьки дозволили?");
// }
// let checkAge = (age) => {
//   return age > 18 ? true : confirm("Батьки дозволили?");
// }
// console.log(checkAge(21));
// ---2---
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

// function min(a, b) {
//   if (a > b) {
//     return b
//   } else {
//     return a
//   }
// }
// console.log(min(8, 4));
// ---3---
// Перепишіть з використанням стрілкових функцій
// let min = (a, b) => (a > b ? b : a)
// console.log(min(8, 4));
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:
// function ask(question, yes, no) {
// if (confirm(question)) yes();
// else no();
// }
// ask(
// "Ви згодні?"
// ,
// function() { alert("Ви погодились."); },
// function() { alert("Ви скасували виконання."); }
// );

// Рішення;
// let ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// };
// ask(
//   "Ви згодні?",
//   () => {
//     alert("Ви погодились.");
//   },
//   () => {
//     alert("Ви скасували виконання.");
//   }
// );
