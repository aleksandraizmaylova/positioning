/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/
const el = document.querySelector('.progress');
let x = 0;

const interval = setInterval(() => {
    x += 10;
    el.style.background = `linear-gradient(to right, red ${x}%, lightgray ${x}%)`;

    if (x >= 100) {
        clearInterval(interval); // Останавливаем, когда дошли до 100
    }
}, 1000);