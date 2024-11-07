let a = prompt("число");
let b = 1;
while (a > 1) {
    b *= a;
    a--;
}
alert("факториал =" + b);