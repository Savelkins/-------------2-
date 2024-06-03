// console.group("1 task");

// const userAge = prompt("Скільки вам років?");
// const numUserAge = Number(userAge);
// if (numUserAge >= 0) {
//   if (numUserAge < 12) {
//     alert("Ви дитина");
//   } else if (numUserAge >= 12 && numUserAge < 18) {
//     alert("Ви підліток");
//   } else if (numUserAge >= 18 && numUserAge < 65) {
//     alert("Ви дорослий");
//   } else {
//     alert("Ви старі");
//   }
// } else {
//   alert("Вам не може бути менше нуля");
// }
// console.groupEnd();

// console.group("3 task");

// const userTime = prompt();
// const userTimeNum = Number(userTime);

// if (userTimeNum < 0 || userTimeNum >= 24) {
//   alert("Error");
// } else if (userTimeNum >= 22 || userTimeNum < 5) {
//   alert("У вас ніч");
// } else if (userTimeNum >= 5 && userTimeNum < 11) {
//   alert("У вас ранок");
// } else if (userTimeNum >= 11 && userTimeNum < 18) {
//   alert("У вас день");
// } else if (userTimeNum >= 18 && userTimeNum < 22) {
//   alert("У вас вечір");
// }

// console.groupEnd();

// const userTime = prompt();
// const userTimeNum = Number(userTime);

// const bankWorkTime = userTimeNum >= 9 && userTimeNum <= 17 ? 'Банк працює' : 'Банк не працює';
// alert(bankWorkTime);

// const userInput = prompt("Введіть новер місяця");

// switch (userInput) {
//   case "1":
//     alert("січень");
//     break;
//   case "2":
//     alert("лютий");
//     break;
//   case "3":
//     alert("березень");
//     break;
//   case "4":
//     alert("квітень");
//     break;
//   case "5":
//     alert("травень");
//     break;
//   case "6":
//     alert("червень");
//     break;
//   case "7":
//     alert("липень");
//     break;
//   case "8":
//     alert("серпень");
//     break;
//   case "9":
//     alert("вересень");
//     break;
//   case "10":
//     alert("жовтень");
//     break;
//   case "11":
//     alert("листопад");
//     break;
//   case "12":
//     alert("грудень");
//     break;
//   default:
//     alert("Error");
//     break;
// }

// const userNum = prompt("Введіть новер місяця");

// switch (userNum) {
//   case "1":
//   case "2":
//   case "12":
//     alert("Зима");
//     break;
//   case "3":
//   case "4":
//   case "5":
//     alert("Весна");
//     break;
//   case "6":
//   case "7":
//   case "8":
//     alert("Літо");
//     break;
//   case "9":
//   case "10":
//   case "11":
//     alert("Осень");
//     break;
//   default:
//     alert("Error");
//     break;
// }

const sideTriangle1 = prompt("Перша сторона трикутника ");
const sideTriangle2 = prompt("Друга сторона трикутника ");
const sideTriangle3 = prompt("Трейтя сторона трикутника ");

if (sideTriangle1 === sideTriangle2 && sideTriangle1 === sideTriangle3) {
  alert("Ваш трикутник рівносторонній");
} else if (
  sideTriangle1 === sideTriangle2 ||
  sideTriangle1 === sideTriangle3 ||
  sideTriangle2 === sideTriangle3
) {
  alert("Ваш трикутник рівнобедрений");
} else {
  alert("Ваш трикутник різносторонній");
}
