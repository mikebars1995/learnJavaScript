// field.style.top = 200 + 'px';
// field.style.left = 400 + 'px';
// control.style.top = field.clientTop +'px'

function moveCenter() {
    ball.style.left =
        Math.round(field.clientWidth / 2 - ball.clientWidth / 2) + 'px';
    ball.style.top =
        Math.round(field.clientHeight / 2 - ball.clientHeight / 2) + 'px';
    showNotification({
        top: (field.clientHeight),
        right: (field.clientWidth),
        className: "welcome"
    })
}

function moveRight() {
    if ((ball.offsetLeft + 40) > (field.clientWidth - 10)) return

    ball.style.left = (ball.offsetLeft + 10) + 'px';
    showNotification()
}

function moveLeft() {
    let ballCoords = ball.getBoundingClientRect()
    let fieldCoords = field.getBoundingClientRect()
    if (ballCoords.left < (fieldCoords.left + field.clientLeft + 10)) return

    ball.style.left = (ball.offsetLeft - 10) + 'px';
    showNotification()
}

function moveUp() {
    if (ball.offsetTop < field.offsetTop) return

    ball.style.top = (ball.offsetTop - 10) + 'px';
    showNotification()
}

function moveDown() {
    let ballCoords = ball.getBoundingClientRect()
    let fieldCoords = field.getBoundingClientRect()
    if ((ballCoords.bottom) > (fieldCoords.top + field.clientTop + field.clientHeight)) return

    ball.style.top = (ball.offsetTop + 10) + 'px';
    showNotification()
}

function showNotification() {
    let ballCoords = ball.getBoundingClientRect()
    div.innerHTML = `Координаты мяча: ${ballCoords.left},  ${ballCoords.top}`
}

let div = document.createElement('div')
let fieldCoords = field.getBoundingClientRect()
div.className = "notification"
div.classList.add("welcome")
div.style.top = (fieldCoords.top + field.clientHeight + 20) + 'px'
div.style.left = fieldCoords.left + 'px'
document.body.append(div)
// console.log(control)
center.style.top = fieldCoords.top + 'px'
center.style.left = fieldCoords.left + 'px'


field.onclick = function(event) {

    // координаты поля относительно окна браузера
    let fieldCoords = this.getBoundingClientRect();

    // мяч имеет абсолютное позиционирование (position:absolute), поле - относительное (position:relative)
    // таким образом, координаты мяча рассчитываются относительно внутреннего, верхнего левого угла поля
    let ballCoords = {
      top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
      left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
    };

    // запрещаем пересекать верхнюю границу поля
    if (ballCoords.top < 0) ballCoords.top = 0;

    // запрещаем пересекать левую границу поля
    if (ballCoords.left < 0) ballCoords.left = 0;


    // // запрещаем пересекать правую границу поля
    if (ballCoords.left + ball.clientWidth > field.clientWidth) {
      ballCoords.left = field.clientWidth - ball.clientWidth;
    }

    // запрещаем пересекать нижнюю границу поля
    if (ballCoords.top + ball.clientHeight > field.clientHeight) {
      ballCoords.top = field.clientHeight - ball.clientHeight;
    }

    ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';
}