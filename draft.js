// ////ширина/высота всего документа с прокрученной частью
// let scrollHeight = Math.max(
//   document.body.scrollHeight, document.documentElement.scrollHeight,
//   document.body.offsetHeight, document.documentElement.offsetHeight,
//   document.body.clientHeight, document.documentElement.clientHeight
// );

// /////////////////////
// let selectedTd;

// table.onclick = function (event) {
//   let td = event.target.closest('td'); // (1)

//   if (!td) return; // (2)

//   if (!table.contains(td)) return; // (3)

//   highlight(td); // (4)
// };

// function highlight(td) {
//   if (selectedTd) { // убрать существующую подсветку, если есть
//     selectedTd.classList.remove('highlight');
//   }
//   selectedTd = td;
//   selectedTd.classList.add('highlight'); // подсветить новый td
// }

// ////////////////////////////////

// Счётчик: <input type="button" value="1" data-counter>
//   Ещё счётчик: <input type="button" value="2" data-counter>
// 
//     <script>
//       document.addEventListener('click', function(event) {

//     if (event.target.dataset.counter != undefined) { // если есть атрибут...
//         event.target.value++;
//     }

//   });
//     </script>

// ////////////////////////

//     <button data-toggle-id="subscribe-mail">
//       Показать форму подписки
//     </button>

//     <form id="subscribe-mail" hidden>
//       Ваша почта: <input type="email">
// </form>

//       <script>
//         document.addEventListener('click', function(event) {
//           let id = event.target.dataset.toggleId;
//         if (!id) return;

//         let elem = document.getElementById(id);

//         elem.hidden = !elem.hidden;
//   });
//       </script>