const round = document.getElementById('round')
const contein = document.getElementById('contein');
let win = 0
let all = 0
const myH = document.getElementById ('myH')

document.addEventListener('mousedown', function(event) {
    myH.innerText = (win/all).toFixed(1)
    
    if (event.target == round){
        win ++;
        round.style.left = `${Math.random() * 80}vw`;
        round.style.top = `${Math.random() * 80}vh`;
    }
    
    else {
        all++;
    }
}
)