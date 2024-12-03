let a = prompt("число");
let b = true;
for (let c = 2; c < a; c++) {
    if (a % c === 0) {
        b = false;
        break;
    }
}
if (b && a > 1) {
    alert("число простое");
} else {
    alert("число не простое");
}