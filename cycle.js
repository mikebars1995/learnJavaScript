// let sum = 0;

// while (true) {
//     let value = +prompt("Введите число", '')
//     if (!value) break; // (*)
//     sum += value;
// }
// alert( 'Сумма: ' + sum );
// for (let i = 0; i < 10; i++) {

//     // если true, пропустить оставшуюся часть тела цикла
//     if (i % 2 == 0) continue;

//     alert(i); // 1, затем 3, 5, 7, 9
//   }
//   let i = 0;
// while (i++ < 5) alert( i );
// for (let i = 1; i <= 10; i++){
//     if (i % 2 != 0) continue;
//     alert(i);
// }
// let i = 0;
// while (i < 3){
//     alert(`number ${i}!`);
//     i++;
// }

// while (true){
//     let i = prompt('Введите число большее 100...','');
//     if (i > 100 || i == undefined) break;
// }
// let i;
// do {
//     i = prompt('Введите число большее 100...','');    
// }while(i <= 100 && i);

let n = 100;

nextPrime:
for (let i = 2; i <= n; i++) { // Для всех i...

  for (let j = 2; j < i; j++) { // проверить, делится ли число..
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  alert(i); // простое число
}