// let a = +prompt('Enter a...', ''),
//     b = +prompt('Enter b...', '');

// alert(a + b);
// alert( 6.35.toFixed(1) ); // 6.3
// alert(Math.round(6.35 * 10) / 10); // 6.4

// function readNumber() {
//     let num;

//     do {
//         num = prompt('Enter the number...', 0);
//     } while (!isFinite(num));

//     if (num === null || num === '') return null;

//     return +num;
// };
// alert(`Number: ${readNumber()}`);
// alert(0.2.toFixed(20));

// function random(min, max) {
//     return min + Math.random() * (max - min);
// };
// alert( random(1, 5) );
// alert( random(1, 5) );
// alert( random(1, 5) );

function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.floor(rand);
};

// alert(randomInteger(2, 5));
// alert(randomInteger(2, 5))
// alert(randomInteger(2, 5))

// function randomInteger(min, max) {
//     // получить случайное число от (min-0.5) до (max+0.5)
//     let rand = min - 0.5 + Math.random() * (max - min + 1);
//     return Math.round(rand);
//   }
  
//   alert( randomInteger(1, 3) );

//   function randomInteger(min, max) {
//     // случайное число от min до (max+1)
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
//   }
  
//   alert( randomInteger(1, 3) );