const round = document.getElementById ('round')
let popal = 0;
let allClicks = 0;

let i = ''

document.addEventListener ('mousedown', function(event) {
    allClicks++;
    
    if (event.target == round){
    popal++;
    round.style.left = `${Math.random() * 100}vw`;
    round.style.top = `${Math.random() * 100}vh`;
    }
    myH.innerText = (popal / allClicks * 100) + '%'
});