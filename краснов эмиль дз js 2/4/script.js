let a = prompt("первое число");
let b = prompt("второе число");
let c = 1;
while (c <= a && c <= b) {
    if (a % c === 0 && b % c === 0) {
        document.write(c + " ");
    }
    c++;
}