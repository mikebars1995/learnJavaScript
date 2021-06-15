// let guestList = `Guests:
//  * John
//  * Pete
//  * Mary
// `;

// alert(guestList); // список гостей, состоящий из нескольких строк

// let guestList = "Guests:\n * John\n * Pete\n * Mary";

// alert(guestList); // список гостей, состоящий из нескольких строк

// // перевод строки добавлен с помощью символа перевода строки
// let str1 = "Hello\nWorld";

// // многострочная строка, созданная с использованием обратных кавычек
// let str2 = `Hello
// World`;

// alert(str1 == str2); // true

// // ©
// alert( "\u00A9" );

// // Длинные юникодные коды
// // 佫, редкий китайский иероглиф
// alert( "\u{20331}" );
// // 😍, лицо с улыбкой и глазами в форме сердец
// alert( "\u{1F60D}" );


// let str = `Hello`;

// // получаем первый символ
// alert( str[0] ); // H
// alert( str.charAt(0) ); // H

// // получаем последний символ
// alert( str[str.length - 1] ); // o
// for (let char of "Hello") {
//     alert(char); // H,e,l,l,o (char — сначала "H", потом "e", потом "l" и т. д.)
//   }

//   let str = 'Ослик Иа-Иа посмотрел на виадук';

// let target = 'Иа'; // цель поиска

// let pos = 0;
// while (true) {
//   let foundPos = str.indexOf(target, pos);
//   if (foundPos == -1) break;

//   alert( `Найдено тут: ${foundPos}` );
//   pos = foundPos + 1; // продолжаем со следующей позиции
// }

// let str = "Ослик Иа-Иа посмотрел на виадук";
// let target = "Иа";

// let pos = -1;
// while ((pos = str.indexOf(target, pos + 1)) != -1) {
//   alert( pos );
// }

// let str = '';

// for (let i = 65; i <= 220; i++) {
//   str += String.fromCodePoint(i);
// }
// alert( str );
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ

let str = prompt("Enter word", "");
function ucFirst(str) {
    if (!str) return str;


    return str = str[0].toUpperCase() + str.slice(1);
};

// alert(ucFirst(str));

// function checkSpam(str) {
//     if (str.toLowerCase().includes('xxx') || str.toLowerCase().includes('viagra')){
//         return true;
//     }else return false;
// };

function checkSpam(str) {
    let lowerStr = str.toLowerCase();

    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}
// alert(checkSpam(str));
alert(str.length);


function truncate(str, maxlenght) {
    return (str.length > maxlenght) ?
        str.slice(0, maxlenght - 1) + '…' : str;
};

alert(truncate(str, 10));

function extractCurrencyValue(str) {
    return +str.slice(1);
};
alert(extractCurrencyValue('$120') === 120);