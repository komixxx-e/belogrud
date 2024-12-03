const result = document.getElementById('result')
const buttonsContain = document.getElementById('buttonsContain')
const drag = document.getElementById ('drag')
const calc = document.getElementById ('calc')

let formula = ''

buttonsContain.addEventListener ('click', function(event){
    if (event.target.value == '='){
        formula = new Function('return ' + formula)();
        result.innerHTML = formula;
    }
   
    else if (event.target.value == 'AC'){
        formula = '';
        result.innerHTML = 0;
    }

    else if (event.target.value == '%'){
        formula = formula/100
        result.innerHTML = formula;
    }

    else if (event.target.value == '+/-'){
        formula =- formula;
        result.innerHTML = formula;
    }

    else if (event.target.value === 'C') {
        formula = formula.slice(0, -1);
        result.innerHTML = formula || 0;
    }
    
    else {
        formula += event.target.value;
        result.innerHTML = formula;
    }
})


let startX;
let startY;

function moveCalc(event){
    calc.style.left = `${event.clientX - startX}px`;
    calc.style.top = `${event.clientY - startY}px`;
};

drag.addEventListener('mousedown', function(event) {
    startX = event.clientX - calc.offsetLeft;
    startY = event.clientY - calc.offsetTop;
    document.addEventListener('mousemove', moveCalc);
});

drag.addEventListener('mouseup', function(event) {
    document.removeEventListener('mousemove', moveCalc);
});

drag.addEventListener('mouseup', function(event){
    document.removeEventListener('mousemove', moveCalc)
});