const letters = 'qwertyuiopasdfghjklzxcvbnm';
const counts = '1234567890';



function statistic(str) {
    let l = 0;
    let c = 0;
    let o = 0;
    for (let a = 0; a < str.length; a++) {
        if (letters.includes(str[a])) {
            l++;
            //console.log(`${str[a]} - это буквы`)
        }
        else if (counts.includes(str[a])) {
            c++;
            //console.log(`${str[a]} - это числа`)
        }
        else {
            o++;
            //console.log(`${str[a]} - это другие символы`)
        }
    }
    return {
        letters: l,
        counts: c,
        other: o
    };
}

let myPricon = statistic ("alkdjwfhaskldjf8324972349872398%T%$^&$%^");
console.log (myPricon)