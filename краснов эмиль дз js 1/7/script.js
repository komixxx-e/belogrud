let hours = parseInt(prompt("Введите часы текущего времени"));
let min = parseInt(prompt("Введите минуты текущего времени"));

let Hours = 23 - hours;

let Min = 60 - min;
if (Min === 60) {
    Min = 0;
    Hours++;
}

if (Hours >= 24) {
    Hour = 0;
}


alert(`До следующего дня осталось: ${Hours} часов и ${Min} минут`);