let a = prompt("число");
for (let b = 1; b <= 100; b++) {
    if (b % a === 0) {
        document.write(b + " ");
    }
}