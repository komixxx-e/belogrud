const left = document.getElementById('left')
const right = document.getElementById('right')
const countContein = document.getElementById('countContein')
const slidesLine = document.getElementById('slidesLine')

const colSlides = 4;

let i=0;

left.addEventListener('click', function(){
        if (! (i == 0)){
                i++;
                countContein.innerText = -i + 1;
                slidesLine.style.left = `${80*i}vw`;
        }
        
})

right.addEventListener('click', function(){
        if (! (-i == colSlides - 1)){
                i--;
                countContein.innerText = -i + 1;
                slidesLine.style.left = `${80*i}vw`;
        }
        
})